const resetpassword= document.getElementById("resetpassword");

const forgetpassword= document.getElementById("forgetpassword");
const message= document.getElementById("message");
resetpassword.addEventListener('click',function reset(){
message.style.display="block";
    
    forgetpassword.style.display="none";
})
