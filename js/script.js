// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Login Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            const email = document.getElementById('loginEmail').value;
            if (!validateEmail(email)) {
                document.getElementById('loginEmail').classList.add('error');
                document.getElementById('loginEmailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('loginEmail').classList.remove('error');
                document.getElementById('loginEmailError').style.display = 'none';
            }
            
            const password = document.getElementById('loginPassword').value;
            if (password.length < 1) {
                document.getElementById('loginPassword').classList.add('error');
                document.getElementById('loginPasswordError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('loginPassword').classList.remove('error');
                document.getElementById('loginPasswordError').style.display = 'none';
            }
            
            if (isValid) {
                alert('Login successful! (Demo mode)');
            }
        });
    }

    // Register Form Validation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            const firstName = document.getElementById('firstName').value;
            if (firstName.length < 1) {
                document.getElementById('firstName').classList.add('error');
                document.getElementById('firstNameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('firstName').classList.remove('error');
                document.getElementById('firstNameError').style.display = 'none';
            }
            
            const lastName = document.getElementById('lastName').value;
            if (lastName.length < 1) {
                document.getElementById('lastName').classList.add('error');
                document.getElementById('lastNameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('lastName').classList.remove('error');
                document.getElementById('lastNameError').style.display = 'none';
            }
            
            const email = document.getElementById('registerEmail').value;
            if (!validateEmail(email)) {
                document.getElementById('registerEmail').classList.add('error');
                document.getElementById('registerEmailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('registerEmail').classList.remove('error');
                document.getElementById('registerEmailError').style.display = 'none';
            }
            
            const password = document.getElementById('registerPassword').value;
            if (password.length < 8) {
                document.getElementById('registerPassword').classList.add('error');
                document.getElementById('registerPasswordError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('registerPassword').classList.remove('error');
                document.getElementById('registerPasswordError').style.display = 'none';
            }
            
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (confirmPassword !== password) {
                document.getElementById('confirmPassword').classList.add('error');
                document.getElementById('confirmPasswordError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('confirmPassword').classList.remove('error');
                document.getElementById('confirmPasswordError').style.display = 'none';
            }
            
            const agreeTerms = document.getElementById('agreeTerms').checked;
            if (!agreeTerms) {
                document.getElementById('agreeTermsError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('agreeTermsError').style.display = 'none';
            }
            
            if (isValid) {
                alert('Registration successful! (Demo mode)');
            }
        });
    }

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});