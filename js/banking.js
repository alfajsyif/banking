// handle deposit
document.getElementById('login-submit').addEventListener('click', function (){
    const depositInput = document.getElementById('Deposit');
    const depositAmount = depositInput.value;
    console.log(depositAmount);


    const depositTotal = document.getElementById('total-deposit')
    depositTotal.innerText = depositAmount;


    depositInput.value = '';
})