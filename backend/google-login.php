<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input']);
    exit();
}

// Extract data
$credential = $input['credential'] ?? '';
$email = $input['email'] ?? '';
$name = $input['name'] ?? '';
$picture = $input['picture'] ?? '';
$provider = $input['provider'] ?? '';

if (!$credential || !$email || !$name) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit();
}

// TODO: Verify Google ID token with Google's servers
// For production, you should verify the JWT token with Google's public keys
// This is a simplified example

try {
    // Here you would typically:
    // 1. Verify the Google ID token
    // 2. Check if user exists in your database
    // 3. Create user if they don't exist
    // 4. Generate your own JWT token or session
    
    // For now, we'll simulate a successful login
    $user = [
        'id' => uniqid('user_'),
        'email' => $email,
        'name' => $name,
        'picture' => $picture,
        'provider' => $provider,
        'created_at' => date('Y-m-d H:i:s')
    ];
    
    // Generate a simple token (in production, use proper JWT)
    $token = bin2hex(random_bytes(32));
    
    // TODO: Store user and token in your database
    
    echo json_encode([
        'success' => true,
        'message' => 'Google sign-in successful',
        'token' => $token,
        'user' => $user
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Internal server error: ' . $e->getMessage()
    ]);
}
?> 