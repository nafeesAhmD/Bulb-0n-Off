const btn = document.getElementById("btn")
const img = document.getElementById("img")

btn.addEventListener('mouseenter', () => {
    img.src = "./images/BulbOn.PNG" 
    btn.innerHTML = " ON"   

})
btn.addEventListener('mouseleave', () => {
    img.src = "./images/BulbOff.PNG"
    btn.innerHTML = " OFF"    
})



