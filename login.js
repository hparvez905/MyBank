const button = document.getElementById('click-btn').addEventListener('click', function () {
    const email = document.getElementById('email-input');
    const emailValue = email.value;


    const password = document.getElementById('password-input');
    const passwordValue = password.value;

    if (emailValue === 'parvez@gmail.com' && passwordValue === '12345') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Your Information is wrong')
    }
})
