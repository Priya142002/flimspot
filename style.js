document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".submit2").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents form from submitting
        
        let firstName = document.querySelector(".signup input[placeholder='FIRSTNAME']").value.trim();
        let lastName = document.querySelector(".signup input[placeholder='LASTNAME']").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let email = document.getElementById("Email").value.trim();
        let password = document.getElementById("pass").value.trim();
        let confirmPassword = document.getElementById("confirmpass").value.trim();

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phoneRegex = /^[6-9]\d{9}$/; // Validates 10-digit Indian phone numbers

        if (firstName === "" || lastName === "") {
            alert("First Name and Last Name are required.");
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert("Enter a valid 10-digit phone number.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Signup successful! Redirecting to OTP page...");
        window.location.href = "./otp.html"; // Redirect to OTP page
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".submit3").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form from submitting by default

        let otpInput = document.querySelector(".box2").value.trim();
        let validOTP = "123456"; // Replace with dynamically generated OTP in a real system

        if (!/^\d{6}$/.test(otpInput)) {
            alert("Please enter a valid 6-digit OTP.");
            return;
        }

        if (otpInput === validOTP) {
            alert("OTP Verified Successfully!");
            window.location.href = "./verify.html"; // Redirect on success
        } else {
            alert("Invalid OTP. Please try again.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".submit4").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let phoneInput = document.querySelector(".box3").value.trim();
        let phoneRegex = /^[6-9]\d{9}$/; // Validates 10-digit Indian phone number

        if (!phoneRegex.test(phoneInput)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Generate a 6-digit OTP
        let generatedOTP = Math.floor(100000 + Math.random() * 900000);
        alert("Your OTP is: " + generatedOTP); // Remove in production

        // Store OTP in localStorage for verification on the next page
        localStorage.setItem("otp", generatedOTP);

        // Redirect to OTP verification page
        window.location.href = "./otp1.html";
    });
});

