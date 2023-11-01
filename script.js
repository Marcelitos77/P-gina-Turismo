var onda1 = document.getElementById ('onda1')
var onda2 = document.getElementById ('onda2')
var onda3 = document.getElementById ('onda3')
var onda4 = document.getElementById ('onda4')

window.addEventListener('scroll', function(){
    var rolagem = this.window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagem * 8 + 'px'
    onda1.style.backgroundPositionX = 300 + rolagem * -8 + 'px'
    onda1.style.backgroundPositionX = 200 + rolagem * 4 + 'px'
    onda1.style.backgroundPositionX = 100 + rolagem * -4 + 'px'
})
