
const sbtBtn = document.getElementById('submit');
const erroeMsg = document.getElementById('erroeMsg');
const userEmail = document.getElementById('userEmail');

sbtBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    if(userEmail.value === ''){
        erroeMsg.innerText = `"Whoops! It looks like you forgot to add your email"`
    }

    if(isValid(userEmail.value)){
        window.location.reload();

    }else{
        erroeMsg.innerText = `"Please provide a valid email address"`
        userEmail.style.outline = "1px solid var(--LightRed)";       
    }

})
function detectChange(){
    erroeMsg.innerText = ``;
    userEmail.style.outline = "1px solid var(--Gray)";     
}



function isValid(email){
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}