function formsubmission(e, checks, pwds){
    e.preventDefault();
    const checklist = checks;
    for(let i=0;i<checklist.length;i++){
        let value = checklist[i].value;
        let message = checklist[i].nextElementSibling;
        let name = checklist[i].previousElementSibling.textContent;
        if(value.trim() ===""){  
            checklist[i].classList.add('border-red-500');
            checklist[i].classList.remove('border-green-500');
            message.textContent = `${name} can not be empty`;    
        }
        else{
            message.textContent = "";
            checklist[i].classList.add('border-green-500');
            if(pwds[0].value !== pwds[1].value){
                pwds[0].nextElementSibling.textContent = `Passwords do not match`; 
            }
            else{
                message.textContent = "";
            }
        }
    } 
}
let form = document.querySelectorAll('.form');
for(let item of form){
    item.addEventListener('submit',()=>{
    const username = item.querySelector('.username');
    const email = item.querySelector('.email');
    const pwd1 = item.querySelector('.password1');
    const pwd2 = item.querySelector('.password2');
    let checks = [username,email,pwd1,pwd2];
    const pwds =[pwd1,pwd2];
    formsubmission(event, checks, pwds); 
    });
}