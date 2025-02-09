document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('paymentForm');
    const loader = document.querySelector('.loader');
    const btnText = document.querySelector('.btn-text');
    const successOverlay = document.querySelector('.success-overlay');

    // Ensure success overlay is hidden on page load
    successOverlay.classList.add('hidden');

    // Card Number Formatting
    document.getElementById('cardNumber').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\s/g, '').substr(0, 16);
        let formatted = value.match(/.{1,4}/g)?.join(' ') || '';
        e.target.value = formatted;
    });

    // Expiry Date Formatting
    document.getElementById('expiryDate').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\//g, '').substr(0, 4);
        if (value.length >= 2) {
            value = value.replace(/(\d{2})(\d{0,2})/, '$1/$2');
        }
        e.target.value = value;
    });

    // Form Validation and Submission
    paymentForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('cardName').value;

        let isValid = true;

        // Validate Card Number
        if (!/^\d{16}$/.test(cardNumber)) {
            showError('cardNumber', 'Invalid card number');
            isValid = false;
        } else {
            clearError('cardNumber');
        }

        // Validate Expiry Date
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
            showError('expiryDate', 'Invalid expiry date');
            isValid = false;
        } else {
            clearError('expiryDate');
        }

        // Validate CVV
        if (!/^\d{3}$/.test(cvv)) {
            showError('cvv', 'Invalid CVV');
            isValid = false;
        } else {
            clearError('cvv');
        }

        // Validate Name
        if (cardName.trim() === '') {
            showError('cardName', 'Name is required');
            isValid = false;
        } else {
            clearError('cardName');
        }

        if (isValid) {
            btnText.classList.add('hidden');
            loader.classList.remove('hidden');

            // Simulate API call with 2-second delay
            setTimeout(() => {
                loader.classList.add('hidden');
                btnText.classList.remove('hidden');
                successOverlay.classList.remove('hidden'); // Show success message

                // Redirect to index.html after 3 seconds
                setTimeout(() => {
                    successOverlay.classList.add('hidden'); // Hide success message
                    window.location.href = 'index.html'; // Redirect after payment
                }, 3000);
            }, 2000);
        }
    });

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentElement.querySelector('.error-message');
        field.style.borderColor = '#ff4444';
        errorDiv.textContent = message;
    }

    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentElement.querySelector('.error-message');
        field.style.borderColor = '#ddd';
        errorDiv.textContent = '';
    }
});
