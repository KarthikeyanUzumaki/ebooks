<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';
    
    // Simple validation
    if (empty($email) || empty($password)) {
        echo json_encode([
            'success' => false,
            'message' => 'Email and password are required'
        ]);
        exit;
    }
    
    // For demo purposes, accept any email/password combination
    // In production, you would check against a database
    if ($email && $password) {
        $token = bin2hex(random_bytes(32));
        $user = [
            'id' => 1,
            'email' => $email,
            'name' => explode('@', $email)[0], // Use email prefix as name
            'created_at' => date('Y-m-d H:i:s')
        ];
        
        echo json_encode([
            'success' => true,
            'token' => $token,
            'user' => $user,
            'message' => 'Login successful'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Invalid credentials'
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?>
