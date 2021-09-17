let modal=document.getElementById('simple-modal');


document.getElementById('modal-btn').addEventListener('click',()=>{
    modal.style.display='block';
})

document.getElementsByClassName('close-btn')[0].addEventListener('click',()=>{
    modal.style.display='none';
})

window.addEventListener('click',(e)=>{
    if(e.target==modal){
        modal.style.display='none';
    }
})