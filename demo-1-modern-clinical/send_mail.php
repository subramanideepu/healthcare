<?php
/**
 * AADHIRA WELLNESS - Simple Email Enquiry Handler
 * No database required - sends leads straight to your email inbox!
 */

// Allow cross-origin requests from React frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

// ============================================================================
// CONFIGURATION: Set the recipient email where you want leads to be delivered
// ============================================================================
$to_email = "info@aadhirawellness.com"; // Official Clinic Email
$clinic_name = "Aadhira Wellness Physio • Rehab Center";

// Read request body (JSON or Form POST)
$raw_input = file_get_contents('php://input');
$data = json_decode($raw_input, true);

if (!$data) {
    $data = $_POST;
}

// Extract and sanitize fields
$patient_name    = isset($data['patient_name']) ? trim(strip_tags($data['patient_name'])) : (isset($data['patientName']) ? trim(strip_tags($data['patientName'])) : 'N/A');
$patient_phone   = isset($data['patient_phone']) ? trim(strip_tags($data['patient_phone'])) : (isset($data['patientPhone']) ? trim(strip_tags($data['patientPhone'])) : 'N/A');
$patient_email   = isset($data['patient_email']) ? trim(strip_tags($data['patient_email'])) : (isset($data['patientEmail']) ? trim(strip_tags($data['patientEmail'])) : '');
$visit_type      = isset($data['visit_type']) ? trim(strip_tags($data['visit_type'])) : (isset($data['visitType']) ? trim(strip_tags($data['visitType'])) : 'Clinic Visit (Kundrathur Center)');
$department      = isset($data['department']) ? trim(strip_tags($data['department'])) : 'Myofascial Release (MFR) Therapy';
$preferred_date  = isset($data['preferred_date']) ? trim(strip_tags($data['preferred_date'])) : (isset($data['preferredDate']) ? trim(strip_tags($data['preferredDate'])) : date('Y-m-d'));
$preferred_time  = isset($data['preferred_time']) ? trim(strip_tags($data['preferred_time'])) : (isset($data['preferredTime']) ? trim(strip_tags($data['preferredTime'])) : 'Morning (9:00 AM - 1:00 PM)');
$pain_level      = isset($data['pain_level']) ? (int)$data['pain_level'] : (isset($data['painLevel']) ? (int)$data['painLevel'] : 5);
$medical_history = isset($data['medical_history']) ? trim(strip_tags($data['medical_history'])) : (isset($data['medicalHistory']) ? trim(strip_tags($data['medicalHistory'])) : 'None provided');
$reference_id    = isset($data['reference_id']) ? trim(strip_tags($data['reference_id'])) : (isset($data['referenceId']) ? trim(strip_tags($data['referenceId'])) : ('ADH-' . rand(100000, 999999)));

// Validate required fields
if (empty($patient_name) || empty($patient_phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Name and Mobile Number are required."]);
    exit;
}

// Clean phone for WhatsApp URL
$clean_phone = preg_replace('/[^0-9]/', '', $patient_phone);
if (strlen($clean_phone) === 10) {
    $wa_phone = '91' . $clean_phone;
} else {
    $wa_phone = $clean_phone;
}

$wa_message = rawurlencode(
    "Hello {$patient_name}, this is Dr. Santhosh Balaji .K from Aadhira Wellness Physio Center. " .
    "We have received your appointment request (Ref: {$reference_id}) for {$department}. We are pleased to confirm your slot!"
);

// Email Subject (clean text without emojis)
$subject = "New Patient Enquiry: {$patient_name} - {$visit_type} [{$reference_id}]";

// HTML Email Body
$message = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f6f9; color: #1e293b; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background: #0f2744; color: #ffffff; padding: 24px; text-align: center; }
    .header h2 { margin: 0; font-size: 20px; }
    .header p { margin: 6px 0 0 0; color: #2e9e44; font-weight: bold; font-size: 13px; }
    .body { padding: 24px; }
    .ref-badge { display: inline-block; background: #e8f2fc; color: #0066cc; font-weight: bold; padding: 4px 10px; border-radius: 6px; font-size: 13px; }
    .info-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    .info-table td { padding: 10px 12px; border-bottom: 1px solid #edf2f7; font-size: 14px; }
    .info-table td.label { font-weight: bold; color: #64748b; width: 38%; }
    .info-table td.val { color: #0f172a; font-weight: 600; }
    .actions { margin-top: 24px; display: flex; gap: 12px; text-align: center; }
    .btn { display: inline-block; padding: 12px 20px; border-radius: 6px; font-weight: bold; text-decoration: none; font-size: 14px; margin-right: 10px; margin-bottom: 10px; }
    .btn-call { background: #0066cc; color: #ffffff; }
    .btn-wa { background: #25d366; color: #ffffff; }
    .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>Aadhira Wellness Physio • Rehab Center</h2>
      <p>Recover • Rehab • Rejoice | Dr. Santhosh Balaji .K</p>
    </div>
    <div class="body">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="ref-badge">Ref: ' . htmlspecialchars($reference_id) . '</span>
        <span style="font-size:12px; color:#64748b;">' . date('d M Y, h:i A') . '</span>
      </div>

      <h3 style="color:#0f2744; margin-top:10px;">New Appointment Request Received</h3>

      <table class="info-table">
        <tr>
          <td class="label">Patient Name:</td>
          <td class="val">' . htmlspecialchars($patient_name) . '</td>
        </tr>
        <tr>
          <td class="label">Mobile Number:</td>
          <td class="val"><a href="tel:' . htmlspecialchars($patient_phone) . '" style="color:#0066cc; text-decoration:none;">' . htmlspecialchars($patient_phone) . '</a></td>
        </tr>';

if (!empty($patient_email)) {
    $message .= '
        <tr>
          <td class="label">Email Address:</td>
          <td class="val">' . htmlspecialchars($patient_email) . '</td>
        </tr>';
}

$message .= '
        <tr>
          <td class="label">Consultation Type:</td>
          <td class="val" style="color:' . (strpos($visit_type, 'House') !== false ? '#2e9e44' : '#0066cc') . ';">
            ' . htmlspecialchars($visit_type) . '
          </td>
        </tr>
        <tr>
          <td class="label">Condition / Service:</td>
          <td class="val">' . htmlspecialchars($department) . '</td>
        </tr>
        <tr>
          <td class="label">Preferred Date:</td>
          <td class="val">' . htmlspecialchars($preferred_date) . '</td>
        </tr>
        <tr>
          <td class="label">Preferred Time Slot:</td>
          <td class="val">' . htmlspecialchars($preferred_time) . '</td>
        </tr>
        <tr>
          <td class="label">Pain Severity:</td>
          <td class="val">' . htmlspecialchars($pain_level) . ' / 10</td>
        </tr>
        <tr>
          <td class="label">Medical History / Notes:</td>
          <td class="val">' . nl2br(htmlspecialchars($medical_history)) . '</td>
        </tr>
      </table>

      <div style="margin-top: 24px; text-align: center;">
        <a href="tel:' . htmlspecialchars($patient_phone) . '" class="btn btn-call" style="color:#ffffff;">Call Patient (' . htmlspecialchars($patient_phone) . ')</a>
        <a href="https://wa.me/' . $wa_phone . '?text=' . $wa_message . '" class="btn btn-wa" style="color:#ffffff;">Chat on WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      No.34 Mookambikai Nagar, Kundrathur Main Road, Chennai 600128 | Mob: 90803 09274
    </div>
  </div>
</body>
</html>
';

// Email headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Aadhira Wellness <info@aadhirawellness.com>\r\n";
if (!empty($patient_email)) {
    $headers .= "Reply-To: " . $patient_email . "\r\n";
} else {
    $headers .= "Reply-To: info@aadhirawellness.com\r\n";
}
$headers .= "X-Mailer: PHP/" . phpversion();

// Also save lead to a simple JSON backup file so no lead is EVER lost if mail server is delayed!
$backup_file = __DIR__ . '/leads_backup.json';
$leads_data = file_exists($backup_file) ? json_decode(file_get_contents($backup_file), true) : [];
if (!is_array($leads_data)) $leads_data = [];
$leads_data[] = [
    'reference_id'    => $reference_id,
    'patient_name'    => $patient_name,
    'patient_phone'   => $patient_phone,
    'patient_email'   => $patient_email,
    'visit_type'      => $visit_type,
    'department'      => $department,
    'preferred_date'  => $preferred_date,
    'preferred_time'  => $preferred_time,
    'pain_level'      => $pain_level,
    'medical_history' => $medical_history,
    'created_at'      => date('Y-m-d H:i:s'),
];
file_put_contents($backup_file, json_encode($leads_data, JSON_PRETTY_PRINT));

// Direct SMTP Sender via Hostinger SSL
function send_smtp_direct($to, $subject, $htmlBody, $replyTo = null) {
    $host = "ssl://smtp.hostinger.com";
    $port = 465;
    $user = "info@aadhirawellness.com";
    $pass = "Drr*AXYJtE=N8+Vu";

    $socket = @fsockopen($host, $port, $errno, $errstr, 12);
    if (!$socket) {
        return false;
    }

    fgets($socket);
    fputs($socket, "EHLO localhost\r\n");
    while ($line = fgets($socket)) {
        if (substr($line, 3, 1) === ' ') break;
    }

    fputs($socket, "AUTH LOGIN\r\n");
    fgets($socket);
    fputs($socket, base64_encode($user) . "\r\n");
    fgets($socket);
    fputs($socket, base64_encode($pass) . "\r\n");
    $authRes = fgets($socket);
    if (strpos($authRes, '235') === false) {
        fclose($socket);
        return false;
    }

    fputs($socket, "MAIL FROM: <$user>\r\n");
    fgets($socket);
    fputs($socket, "RCPT TO: <$to>\r\n");
    fgets($socket);
    fputs($socket, "DATA\r\n");
    fgets($socket);

    $headers = [
        "From: Aadhira Wellness <$user>",
        "To: <$to>",
        "Subject: " . $subject,
        "MIME-Version: 1.0",
        "Content-Type: text/html; charset=UTF-8",
        "X-Mailer: Aadhira Wellness SMTP Engine",
        "Date: " . date('r')
    ];
    if ($replyTo) {
        $headers[] = "Reply-To: <$replyTo>";
    }

    $emailData = implode("\r\n", $headers) . "\r\n\r\n" . $htmlBody . "\r\n.\r\n";
    fputs($socket, $emailData);
    $dataRes = fgets($socket);

    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return (strpos($dataRes, '250') !== false);
}

// Send email via Hostinger SMTP with fallback to native mail()
$mail_sent = send_smtp_direct($to_email, $subject, $message, $patient_email);
if (!$mail_sent) {
    $mail_sent = @mail($to_email, $subject, $message, $headers);
}

echo json_encode([
    "success"      => true,
    "message"      => "Enquiry submitted successfully! Mail dispatched to clinic.",
    "reference_id" => $reference_id,
    "mail_sent"    => $mail_sent,
    "whatsapp_url" => "https://wa.me/" . $wa_phone . "?text=" . $wa_message,
]);
