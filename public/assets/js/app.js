document.querySelector(".press").addEventListener("click", () => {
    document.querySelector("#player").play()
})

document.querySelector(".pauser").addEventListener("click", () => {
    document.querySelector("#player").pause()
})