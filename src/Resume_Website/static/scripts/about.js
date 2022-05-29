// Scrolling functionality for the sidebar links
function gToBackground() {
    document.getElementById("background").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
}

function gToPersonalStatement() {
    document.getElementById("personal-statement").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
}

function gToIntro() {
    document.getElementById("introduction").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
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

// Overall scrolling fix
