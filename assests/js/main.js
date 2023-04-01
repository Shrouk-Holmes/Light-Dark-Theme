var icons = document.querySelectorAll('.icons i')
var photo = document.getElementById('photo')
var sun = document.getElementById('sun')
var moon = document.getElementById('moon')
var logo = document.getElementById('logo')
for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function (e) {
        if (e.target.getAttribute('class') === 'fas fa-sun') {
            document.body.classList.remove('theme')
            logo.innerHTML = 'Light Theme Task'
        }
        else {

            document.body.classList.add('theme')
            logo.innerHTML = 'Dark Theme Task'
        }
    })

} 
console.log();