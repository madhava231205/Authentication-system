const signupbutton= document.getElementById('signupbutton');
const signinbutton= document.getElementById('signinbutton');
const signupform= document.getElementById('signup');
const signinform= document.getElementById('login');
const submit= document.getElementById('homebutton');
const login= document.getElementById('loginbutton');
const firstname= document.getElementById('firstname').innerText;
const lastname = document.getElementById('lastname').innerText;
const homepage= document.getElementById('homepage');
const name= document.getElementById('name');
signupbutton.addEventListener('click',function(){
    signinform.style.display="none";
    signupform.style.display="block";
})
signinbutton.addEventListener('click',function(){
    signupform.style.display="none";
    signinform.style.display="block";
})
submit.addEventListener('click',function (){
    homepage.style.display="block";
    //name = firstname + lastname;//
    signupform.style.display="none";
    signinform.style.display="none";


});
login.addEventListener('click',function (){
    signinform.style.display="block";
    signupform.style.display="none";
})
