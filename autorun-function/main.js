
(function(){

    let hiEl = document.getElementById("hi")
    
    let name = prompt("Your name: ")

    const sayHi = () => {
        hiEl.innerHTML = `Hello ${name}`
    }

    sayHi()

}())

