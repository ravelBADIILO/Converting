document.getElementById('btnLogIn').addEventListener('click', function() {
    const userName = document.getElementById('uName').value;
    const password = document.getElementById('pWord').value;
    const messageElement = document.getElementById('validationMessage');

    const userNameRegEx = /^[A-Za-z0-9 ]{8,15}$/;

    const passwordRegEx = /^[A-Za-z0-9 ]{8,15}$/;

    if (!userNameRegEx.test(userName)) {
        messageElement.textContent = "Ang username ay dapat na 8-15 na letra at maaaring magsama ng mga Letters, Numbers, at space.";
    } else if (!passwordRegEx.test(password)) {
        messageElement.textContent = "Ang password ay dapat na 8-15 letra at dapat kasama ang uppercase, lowercase, at mga numero.";
    } else {
        messageElement.textContent = "Username and password are valid!";
    }
});

