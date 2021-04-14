function submitSignup(){
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    const data = {
        "email": email.value,
        "password": password.value
    }

    const request = new XMLHttpRequest();

    request.open('POST', '/auth/signup')
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}

const signup_button = document.getElementById('SignupButton') as HTMLElement;
signup_button.addEventListener('click', submitSignup);