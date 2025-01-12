document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const loadingSpinner = document.getElementById('preloader');

        // Show the loading spinner
        loadingSpinner.style.display = 'flex';

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value || "Not Provided", // Handle optional phone field
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };


        // Send form data to Google Apps Script
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyxOPeXddcdIq3bPpBjN2-Ex1Qu2iwqihmPDiW16haBIN2SxKwHlnscLLVar0xxxPpM6A/exec'; // Replace with your Google Apps Script URL

        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(result => {
                // console.log('Success:', result);
                loadingSpinner.style.display = 'none';

                // Show SweetAlert success message
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully!',
                    text: 'Thank you for reaching out. We will get back to you soon.',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });

                // Reset the form after submission
                document.querySelector('.contact-form').reset();
            })
            .catch(error => {
                // console.error('Error:', error);
                loadingSpinner.style.display = 'none';

                // Show SweetAlert error message
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed!',
                    text: 'There was an error sending your message. Please try again later.',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            });
    });
});
