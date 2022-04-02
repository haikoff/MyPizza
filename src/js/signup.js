const createAccountData = (event) => {
    event.preventDefault();
    const userEmail = document.querySelector('#emailRegistr');
    const userPassword = document.querySelector('#password-registr');

    if (!localStorage.getItem('accounts')) {
        localStorage.setItem('accounts', JSON.stringify([]));
    }

    let currentAccounts = JSON.parse(
        localStorage.getItem('accounts'));
    
    let userData = {};
    if(userEmail.value.length !== 0 && userPassword.value.length !== 0){
        userData = {
            userEmail: userEmail.value,
            userPassword: userPassword.value
        }
    }

    const checkResult = checkAccount(currentAccounts, userData);
    validate();


    if (checkResult) {
        currentAccounts.push(userData);
        document.querySelector('#staticBackdrop3 h5').innerHTML = '';
        document.querySelector('#staticBackdrop3 .modal-body').innerHTML = 'Вы успешно зарегистрировались!';
        document.querySelector('#staticBackdrop3 .modal-footer .registr-final').style.display = 'none';
    }

    localStorage.setItem('accounts',
        JSON.stringify(currentAccounts))

}


const checkAccount = (allUsers, userData) => {
    const checkUser = allUsers.filter((user) => {
        return (
            user.userEmail === userData.userEmail ||
            user.userPassword === userData.userPassword
        )
    });

    if (checkUser.length !== 0) {
        alert('Enter another data');
        return false;
    } else {
        return true;
    }
}

function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.querySelector('#emailRegistr').value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       checkResult = false;
       return false;
    }
 }

export { createAccountData, validate };
