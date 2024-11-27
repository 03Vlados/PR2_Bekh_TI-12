document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (firstName === '' || lastName === '' || email === '' || password === '') {
        alert('Будь ласка, заповніть усі поля!');
        event.preventDefault();
    } else {
        alert('Реєстрація успішна!');
    }
});
