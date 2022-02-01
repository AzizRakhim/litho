let elBtn = document.getElementById('headerBtn');
let elXBtn = document.getElementById('xBtn');
let elHeaderModal = document.getElementById('headerModal');

elBtn.addEventListener('click', function() {
    elHeaderModal.classList.add('show-it');
})

elXBtn.addEventListener('click', function() {
    elHeaderModal.classList.remove('show-it');
})