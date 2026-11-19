<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class AppointmentController extends Controller
{
    /**
     * Store a newly created appointment enquiry from the frontend.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'patient_name'     => 'required|string|max:191',
            'patient_phone'    => 'required|string|max:50',
            'patient_email'    => 'nullable|email|max:191',
            'visit_type'       => 'nullable|string|max:100',
            'department'       => 'nullable|string|max:191',
            'preferred_date'   => 'required|date',
            'preferred_time'   => 'nullable|string|max:100',
            'pain_level'       => 'nullable|integer|min:1|max:10',
            'medical_history'  => 'nullable|string',
            'reference_id'     => 'nullable|string|max:50',
        ]);

        // Generate reference ID if not passed
        $referenceId = $validated['reference_id'] ?? ('ADH-' . random_int(100000, 999999));

        // Ensure reference is unique
        while (Appointment::where('reference_id', $referenceId)->exists()) {
            $referenceId = 'ADH-' . random_int(100000, 999999);
        }

        $appointment = Appointment::create([
            'reference_id'    => $referenceId,
            'patient_name'    => $validated['patient_name'],
            'patient_phone'   => $validated['patient_phone'],
            'patient_email'   => $validated['patient_email'] ?? null,
            'visit_type'      => $validated['visit_type'] ?? 'Clinic Visit (Kundrathur Center)',
            'department'      => $validated['department'] ?? 'Myofascial Release (MFR) Therapy',
            'preferred_date'  => $validated['preferred_date'],
            'preferred_time'  => $validated['preferred_time'] ?? 'Morning (9:00 AM - 1:00 PM)',
            'pain_level'      => $validated['pain_level'] ?? 5,
            'medical_history' => $validated['medical_history'] ?? null,
            'status'          => 'pending',
        ]);

        return response()->json([
            'success'      => true,
            'message'      => 'Appointment request logged successfully.',
            'reference_id' => $appointment->reference_id,
            'data'         => $appointment,
        ], 201);
    }

    /**
     * API: List all appointments / leads (JSON).
     */
    public function index(Request $request): JsonResponse
    {
        $query = Appointment::query()->latest();

        if ($request->filled('status')) {
            $query->where('status', $request->query('status'));
        }

        if ($request->filled('search')) {
            $search = $request->query('search');
            $query->where(function ($q) use ($search) {
                $q->where('patient_name', 'like', "%{$search}%")
                  ->orWhere('patient_phone', 'like', "%{$search}%")
                  ->orWhere('reference_id', 'like', "%{$search}%");
            });
        }

        $appointments = $query->paginate(20);

        return response()->json([
            'success' => true,
            'data'    => $appointments,
        ]);
    }

    /**
     * Web Blade View: Admin Leads Dashboard.
     */
    public function adminIndex(Request $request): View
    {
        $query = Appointment::query()->latest();

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('patient_name', 'like', "%{$search}%")
                  ->orWhere('patient_phone', 'like', "%{$search}%")
                  ->orWhere('reference_id', 'like', "%{$search}%");
            });
        }

        $appointments = $query->paginate(25);
        $totalCount = Appointment::count();
        $pendingCount = Appointment::where('status', 'pending')->count();
        $confirmedCount = Appointment::where('status', 'confirmed')->count();
        $houseVisitCount = Appointment::where('visit_type', 'like', '%House Visit%')->count();

        return view('admin.leads', compact(
            'appointments',
            'totalCount',
            'pendingCount',
            'confirmedCount',
            'houseVisitCount'
        ));
    }

    /**
     * Update appointment status.
     */
    public function updateStatus(Request $request, $id)
    {
        $appointment = Appointment::findOrFail($id);
        $validated = $request->validate([
            'status' => 'required|in:pending,confirmed,completed,cancelled',
        ]);

        $appointment->update(['status' => $validated['status']]);

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Status updated successfully.',
                'status'  => $appointment->status,
            ]);
        }

        return back()->with('success', "Appointment {$appointment->reference_id} marked as " . ucfirst($appointment->status));
    }
}
