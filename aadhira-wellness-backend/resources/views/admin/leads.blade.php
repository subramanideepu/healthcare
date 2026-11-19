<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aadhira Wellness | Patient Enquiry Leads Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary-navy: #0f2744;
      --clinical-blue: #0066cc;
      --clinical-green: #2e9e44;
      --bg-page: #f1f5f9;
      --bg-white: #ffffff;
      --text-dark: #0f172a;
      --text-muted: #64748b;
      --border-color: #e2e8f0;
      --radius: 10px;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg-page);
      color: var(--text-dark);
      padding: 0 0 60px 0;
    }
    .top-header {
      background: var(--primary-navy);
      color: #ffffff;
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(15,39,68,0.15);
    }
    .header-brand {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .header-brand h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: -0.3px;
    }
    .header-brand span.slogan {
      font-size: 0.8rem;
      color: #2e9e44;
      font-weight: 700;
      display: block;
    }
    .doctor-tag {
      font-size: 0.85rem;
      background: rgba(255,255,255,0.12);
      padding: 6px 14px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .container {
      max-width: 1400px;
      margin: 24px auto;
      padding: 0 20px;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .metric-card {
      background: var(--bg-white);
      padding: 20px;
      border-radius: var(--radius);
      border: 1px solid var(--border-color);
      box-shadow: 0 2px 6px rgba(15,23,42,0.04);
    }
    .metric-title {
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-muted);
      margin-bottom: 8px;
      font-weight: 600;
    }
    .metric-val {
      font-size: 2rem;
      font-weight: 800;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--primary-navy);
    }
    .metric-card.pending .metric-val { color: #d97706; }
    .metric-card.confirmed .metric-val { color: var(--clinical-green); }
    .metric-card.house .metric-val { color: var(--clinical-blue); }

    .card {
      background: var(--bg-white);
      border-radius: var(--radius);
      border: 1px solid var(--border-color);
      box-shadow: 0 2px 8px rgba(15,23,42,0.05);
      overflow: hidden;
    }
    .card-header {
      padding: 16px 20px;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 14px;
    }
    .search-filter-form {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }
    .search-input {
      padding: 8px 14px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      font-size: 0.88rem;
      min-width: 240px;
    }
    .filter-select {
      padding: 8px 12px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      font-size: 0.88rem;
      background: #ffffff;
    }
    .btn {
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.88rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: none;
    }
    .btn-blue { background: var(--clinical-blue); color: #ffffff; }
    .btn-green { background: var(--clinical-green); color: #ffffff; }
    .btn-outline { background: transparent; border: 1px solid var(--border-color); color: var(--text-dark); }
    
    .table-responsive {
      width: 100%;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
      text-align: left;
    }
    th {
      background: #f8fafc;
      padding: 12px 16px;
      font-weight: 700;
      color: var(--text-muted);
      border-bottom: 1px solid var(--border-color);
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--border-color);
      vertical-align: top;
    }
    tr:hover td {
      background: #f8fafc;
    }
    .ref-badge {
      font-family: monospace;
      font-size: 0.85rem;
      background: #e2e8f0;
      color: var(--primary-navy);
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: 700;
      display: inline-block;
    }
    .badge-pill {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
    }
    .badge-house { background: #eaf7ec; color: #2e9e44; border: 1px solid rgba(46,158,68,0.3); }
    .badge-clinic { background: #e8f2fc; color: #0066cc; border: 1px solid rgba(0,102,204,0.3); }
    
    .status-pending { background: #fef3c7; color: #92400e; }
    .status-confirmed { background: #dcfce7; color: #166534; }
    .status-completed { background: #e0e7ff; color: #3730a3; }
    .status-cancelled { background: #fee2e2; color: #991b1b; }
    
    .pain-badge {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 4px;
      display: inline-block;
    }
    .pain-mild { background: #dcfce7; color: #166534; }
    .pain-mod { background: #fef3c7; color: #b45309; }
    .pain-severe { background: #fee2e2; color: #b91c1c; }

    .action-links {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .btn-action-call {
      background: #0066cc;
      color: white;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 0.78rem;
      text-decoration: none;
      font-weight: 600;
    }
    .btn-action-wa {
      background: #25d366;
      color: white;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 0.78rem;
      text-decoration: none;
      font-weight: 600;
    }
    .alert-success {
      background: #dcfce7;
      border: 1px solid #86efac;
      color: #166534;
      padding: 12px 18px;
      border-radius: 8px;
      margin-bottom: 18px;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

  <header class="top-header">
    <div class="header-brand">
      <div>
        <h1>Aadhira Wellness Physio • Rehab Center</h1>
        <span class="slogan">Recover • Rehab • Rejoice</span>
      </div>
    </div>
    <div class="doctor-tag">
      Chief Physio: <strong>Dr. Santhosh Balaji .K</strong> (BPT MIAP KTP) | Direct: <strong>90803 09274</strong>
    </div>
  </header>

  <main class="container">
    @if(session('success'))
      <div class="alert-success">
        ✓ {{ session('success') }}
      </div>
    @endif

    <!-- Metrics Strip -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-title">Total Enquiries</div>
        <div class="metric-val">{{ $totalCount }}</div>
      </div>
      <div class="metric-card pending">
        <div class="metric-title">Pending Action</div>
        <div class="metric-val">{{ $pendingCount }}</div>
      </div>
      <div class="metric-card confirmed">
        <div class="metric-title">Confirmed Visits</div>
        <div class="metric-val">{{ $confirmedCount }}</div>
      </div>
      <div class="metric-card house">
        <div class="metric-title">House Visit Requests</div>
        <div class="metric-val">{{ $houseVisitCount }}</div>
      </div>
    </div>

    <!-- Leads Table Card -->
    <div class="card">
      <div class="card-header">
        <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:1.15rem;color:var(--primary-navy);">
          Patient Appointments & Enquiry Leads
        </h3>

        <form method="GET" action="{{ route('admin.leads') }}" class="search-filter-form">
          <input 
            type="text" 
            name="search" 
            value="{{ request('search') }}" 
            placeholder="Search by name, phone or ref ID..." 
            class="search-input"
          >
          <select name="status" class="filter-select">
            <option value="">All Statuses</option>
            <option value="pending" {{ request('status') == 'pending' ? 'selected' : '' }}>Pending</option>
            <option value="confirmed" {{ request('status') == 'confirmed' ? 'selected' : '' }}>Confirmed</option>
            <option value="completed" {{ request('status') == 'completed' ? 'selected' : '' }}>Completed</option>
            <option value="cancelled" {{ request('status') == 'cancelled' ? 'selected' : '' }}>Cancelled</option>
          </select>
          <button type="submit" class="btn btn-blue">Filter</button>
          @if(request('search') || request('status'))
            <a href="{{ route('admin.leads') }}" class="btn btn-outline">Reset</a>
          @endif
        </form>
      </div>

      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Ref ID / Date</th>
              <th>Patient Info</th>
              <th>Visit Type</th>
              <th>Condition / Service</th>
              <th>Appointment Slot</th>
              <th>Pain Level</th>
              <th>Medical Notes / Area</th>
              <th>Status</th>
              <th>Direct Action</th>
            </tr>
          </thead>
          <tbody>
            @forelse($appointments as $lead)
              @php
                $cleanPhone = preg_replace('/[^0-9]/', '', $lead->patient_phone);
                if (strlen($cleanPhone) == 10) {
                  $waPhone = '91' . $cleanPhone;
                } else {
                  $waPhone = $cleanPhone;
                }
                $waMessage = rawurlencode(
                  "Hello {$lead->patient_name}, this is Dr. Santhosh Balaji .K from Aadhira Wellness Physio Center. " .
                  "Regarding your appointment enquiry (Ref: {$lead->reference_id}) for {$lead->department} on {$lead->preferred_date->format('d M Y')}: We have received your booking request!"
                );
              @endphp
              <tr>
                <td>
                  <span class="ref-badge">{{ $lead->reference_id }}</span>
                  <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">
                    {{ $lead->created_at->format('d M, h:i A') }}
                  </div>
                </td>
                <td>
                  <strong style="color:var(--primary-navy);font-size:0.95rem;">{{ $lead->patient_name }}</strong>
                  <div style="font-size:0.85rem;margin-top:2px;">
                    <a href="tel:{{ $lead->patient_phone }}" style="color:var(--clinical-blue);text-decoration:none;font-weight:600;">
                      {{ $lead->patient_phone }}
                    </a>
                  </div>
                  @if($lead->patient_email)
                    <div style="font-size:0.75rem;color:var(--text-muted);">{{ $lead->patient_email }}</div>
                  @endif
                </td>
                <td>
                  @if(str_contains(strtolower($lead->visit_type), 'house'))
                    <span class="badge-pill badge-house">🏠 House Visit</span>
                  @else
                    <span class="badge-pill badge-clinic">🏥 Clinic Visit</span>
                  @endif
                </td>
                <td>
                  <strong style="font-size:0.88rem;">{{ $lead->department }}</strong>
                </td>
                <td>
                  <div style="font-weight:600;color:var(--primary-navy);">
                    {{ $lead->preferred_date ? $lead->preferred_date->format('D, d M Y') : 'N/A' }}
                  </div>
                  <div style="font-size:0.78rem;color:var(--text-muted);">
                    {{ $lead->preferred_time }}
                  </div>
                </td>
                <td>
                  @if($lead->pain_level <= 3)
                    <span class="pain-badge pain-mild">{{ $lead->pain_level }}/10 Mild</span>
                  @elseif($lead->pain_level <= 6)
                    <span class="pain-badge pain-mod">{{ $lead->pain_level }}/10 Mod</span>
                  @else
                    <span class="pain-badge pain-severe">{{ $lead->pain_level }}/10 Severe</span>
                  @endif
                </td>
                <td style="max-width:220px;">
                  <span style="font-size:0.82rem;color:var(--text-dark);">
                    {{ $lead->medical_history ? Str::limit($lead->medical_history, 100) : '—' }}
                  </span>
                </td>
                <td>
                  <form method="POST" action="{{ route('admin.leads.status', $lead->id) }}">
                    @csrf
                    <select name="status" onchange="this.form.submit()" class="badge-pill status-{{ $lead->status }}" style="border:none;cursor:pointer;font-family:inherit;">
                      <option value="pending" {{ $lead->status == 'pending' ? 'selected' : '' }}>Pending</option>
                      <option value="confirmed" {{ $lead->status == 'confirmed' ? 'selected' : '' }}>Confirmed</option>
                      <option value="completed" {{ $lead->status == 'completed' ? 'selected' : '' }}>Completed</option>
                      <option value="cancelled" {{ $lead->status == 'cancelled' ? 'selected' : '' }}>Cancelled</option>
                    </select>
                  </form>
                </td>
                <td>
                  <div class="action-links">
                    <a href="tel:{{ $lead->patient_phone }}" class="btn-action-call" title="Call Patient">
                      📞 Call
                    </a>
                    <a href="https://wa.me/{{ $waPhone }}?text={{ $waMessage }}" target="_blank" rel="noopener noreferrer" class="btn-action-wa" title="WhatsApp Patient">
                      💬 WhatsApp
                    </a>
                  </div>
                </td>
              </tr>
            @empty
              <tr>
                <td colspan="9" style="text-align:center;padding:40px;color:var(--text-muted);">
                  No appointment leads logged yet. Submit a test enquiry from the React frontend to see it here!
                </td>
              </tr>
            @endforelse
          </tbody>
        </table>
      </div>

      @if($appointments->hasPages())
        <div style="padding:16px 20px;border-top:1px solid var(--border-color);">
          {{ $appointments->links() }}
        </div>
      @endif
    </div>
  </main>

</body>
</html>
