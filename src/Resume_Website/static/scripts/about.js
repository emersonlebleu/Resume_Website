// Scrolling functionality for the sidebar links
function gToBackground(block) {
    document.getElementById("background").scrollIntoView({ behavior: 'smooth', block: block})
}

function gToPersonalStatement(block) {
    document.getElementById("personal-statement").scrollIntoView({ behavior: 'smooth', block: block})
}

function gToIntro(block) {
    document.getElementById("introduction").scrollIntoView({ behavior: 'smooth', block: block})
}

let bg_link = document.getElementById("bg-link")
let ps_link = document.getElementById("ps-link")
let intro_link = document.getElementById("intro-link")

let start = 'start'
let center = 'center'

bg_link.addEventListener("click", function(){
    let width = window.innerWidth
    if (width <= 770){
        gToBackground(start)    
    } 
    else {
        gToBackground(center) 
    }
})
ps_link.addEventListener("click", function() {
    let width = window.innerWidth
    if (width <= 770){
        gToPersonalStatement(start)    
    } 
    else {
        gToPersonalStatement(center) 
    }
})
intro_link.addEventListener("click", function() {
    let width = window.innerWidth
    if (width <= 770){
        gToIntro(start)    
    } 
    else {
        gToIntro(center) 
    }
})

