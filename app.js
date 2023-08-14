

// ================================== end of lOGING sector========================================

// depositBtn =====
document.getElementById('depositBtn').addEventListener('click', function(){
    const depositField = document.getElementById('depositField');
    const depositValue = depositField.value ;
    const deposit = parseFloat(depositValue);
    
    const depositBalance = document.getElementById('depositBalance');
    const depositBalanceValue = depositBalance.innerText;
    const depositBalanceIntser = parseFloat(depositBalanceValue)
    
    const currentBalance = document.getElementById('currentBalance');
    const currentBalanceValue = currentBalance.innerText;
    const currentBalanceIntser = parseFloat(currentBalanceValue)

    if(deposit > 0){
        depositBalance.innerText = depositBalanceIntser + deposit;
        currentBalance.innerText = currentBalanceIntser + deposit;
    }
    else{
        alert('Enter the valid Amount')
    }

    depositField.value = '';


})


// withdrawBtn ====
document.getElementById('withdrawBtn').addEventListener('click', function(){

     const withdrawField = document.getElementById('withdrawField');
     const withdrawValue = withdrawField.value ;
    const withdraw = parseFloat(withdrawValue);

    const currentBalance = document.getElementById('currentBalance');
    const currentBalanceValue = currentBalance.innerText;
    const currentBalanceIntser = parseFloat(currentBalanceValue);


    const withdrawBalance = document.getElementById('withdrawBalance');
    const withdrawBalanceValue = withdrawBalance.innerText;
    const withdrawBalanceIntser = parseFloat(withdrawBalanceValue);

    if(withdraw > 0 && withdraw <= currentBalanceIntser && withdraw !== ''){
        currentBalance.innerText = currentBalanceIntser - withdraw;
        withdrawBalance.innerText = withdrawBalanceIntser + withdraw;
    }
    else(
        alert('Enter the valid Amount')
    )
    withdrawField.value = '';


})