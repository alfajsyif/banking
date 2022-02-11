document.getElementById('login-submit').addEventListener('click',function () {
    const emailField =  document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user pass
    const passwordFiled = document.getElementById('user-pass');
    const userPassword = passwordFiled.value;

    if(userEmail == 'alfaj@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';


        
    }
})




       
