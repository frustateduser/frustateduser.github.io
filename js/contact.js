document.getElementById('myForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var telephone = document.getElementById('phone').value;

    if (!name || !email || !subject || !message || !telephone) {
        alert('All fields are required.');
        event.preventDefault(); // Prevent form from being submitted
    } else if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form from being submitted
    } else if (telephone.length < 10) {
        alert('Please enter a valid phone number.');
        event.preventDefault(); // Prevent form from being submitted
    } else {
        var formData = new FormData(event.target);
        fetch('frustateduser.outlook.in', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

});



// Path: js/subscribe.js