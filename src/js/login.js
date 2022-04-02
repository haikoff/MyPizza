const generateToken = () => {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};

const isAuthorisation = () => {
    if (!sessionStorage.getItem('user-token')) {
        sessionStorage.setItem('user-token', '');
    }
    else{
        window.location = './zakaz.html';
    }
}


const writeAccountData = (event) => {
    event.preventDefault();
    const userEmail = document.querySelector('#email-enter');
    const userPassword = document.querySelector('#password-enter');
    sessionStorage.setItem('u-email', userEmail.value);
    sessionStorage.setItem('u-password', userPassword.value);

    let currentAccounts = JSON.parse(
        localStorage.getItem('accounts'));

    const currentUser = {
        userEmail: userEmail.value,
        userPassword: userPassword.value
    }
    checkUser(currentAccounts, currentUser)
}


const checkUser = (allUsers, userData) => {
    const checkUser = allUsers.filter((user) => {
        return (
            user.userEmail === userData.userEmail &&
            user.userPassword === userData.userPassword
        )
    });
    if (checkUser.length === 0) {
        alert('Введите корректные данные!');
        return false;
    } else {
        window.location.href = "./kabinet.html";
        sessionStorage.setItem('user-token', generateToken());
        return true;
    }

}

export { isAuthorisation, writeAccountData } 