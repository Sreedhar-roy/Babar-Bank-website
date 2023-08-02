document.getElementById('SumitBtn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = '';

    const passwordField = document.getElementById('user-pass');
    const pass = passwordField.value;
    passwordField.value = '';

    if(email === 'sreedharroy0@gmail.com' && pass === 'sreedhar'){
        window.location.href = 'bank.html';
    }
    else{
        alert('your invalied information . please right now');
    }
})