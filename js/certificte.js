for(let i = 0; i < document.getElementsByClassName('pdfs').length; i++){
document.getElementsByClassName('pdfs')[i].addEventListener('click', function() {
    alert('clicked');
    document.getElementsByClassName('pdfs')[i].classList.toggle('fullscreen');
});
}