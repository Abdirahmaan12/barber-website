const ul= document.querySelector('ul');
const closemenu= document.querySelector('.closemenu');
const openmenu= document.querySelector('.openmenu');


openmenu.addEventListener('click', function(){
   ul.style.display= 'flex';
    ul.style.top= '0';
});


closemenu.addEventListener("click", function(){
     ul.style.top= '-100%';
})

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});