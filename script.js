const accordion = document.querySelectorAll('.accordion');

accordion.forEach(accordion => {
    const icon = accordion.querySelector('.icon');
    const answers = accordion.querySelector('.answers');

    accordion.addEventListener('click' , () => {
         if(icon.classList.contains('.active')){
            icon.classList.remove('.active');
            answers.style.maxHeight = null;
         }else{
            icon.classList.add('.active');
            answers.style.maxHeight =answers.scrollHeight + 'px';
         }
    })

})