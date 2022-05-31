// Scrolling functionality for the sidebar links
function gToBackground() {
    document.getElementById("background").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' })
}

function gToPersonalStatement() {
    document.getElementById("personal-statement").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start'})
}

function gToIntro() {
    document.getElementById("introduction").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' })
}

let bg_link = document.getElementById("bg-link")
let ps_link = document.getElementById("ps-link")
let intro_link = document.getElementById("intro-link")

bg_link.addEventListener("click", function(){
    gToBackground()
})
ps_link.addEventListener("click", function() {
    gToPersonalStatement()
})
intro_link.addEventListener("click", function() {
    gToIntro()
})

