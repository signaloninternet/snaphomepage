var select = document.querySelector('.domman');
var menu = document.querySelector('.mobile');
var cut = document.querySelector('.cut');

select.addEventListener('click', function() {
    menu.classList.remove('hidden');
});

cut.addEventListener('click', function(){
    menu.classList.add('hidden');
})

