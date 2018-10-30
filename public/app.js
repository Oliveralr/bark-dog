document.querySelector(".press").addEventListener("click", () => {
    document.querySelector("#player").play()
})

document.querySelector(".pauser").addEventListener("click", () => {
    document.querySelector("#player").pause()
})

window.addEventListener('load', () => {

if('serviceWorker' in navigator){
    try {
        navigator.serviceWorker.register('sw.js');
        console.log("SW has been registred!");
    }
    catch(err){
        console.log("Not registred");
    }
  }
})
