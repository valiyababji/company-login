// Simulate OTP sending
function sendOTP() {
    alert("OTP sent to your email!");
    document.getElementById("otp").value = "1234"; // For demo purposes, setting OTP as "1234"
}

// OTP verification simulation
function verifyOTP() {
    const otpInput = document.getElementById("otp").value;
    if (otpInput === "1234") {
        alert("OTP verified successfully!");
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

// Registration form validation
function register() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");

    if (password.length < 8 || password.length > 15) {
        passwordError.innerText = "Password must be 8-15 characters long.";
    } else {
        passwordError.innerText = "";
        alert("Registration successful!");
    }
}