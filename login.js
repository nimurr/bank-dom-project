
document.getElementById('loginBtn').addEventListener('click', function(){
    const emailField = document.getElementById('emailField');
    const emailValue = emailField.value ;
    
    const passwordField = document.getElementById('passwordField');
    const passwordValue = passwordField.value ; 

    if(emailValue === 'demo@gmail.com' && passwordValue === '000000'){
        location.href = "bank.html";
    }
    else{
        alert('Not math your email and password')
    }
})
