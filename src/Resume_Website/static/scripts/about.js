console.log("Working!")

let firstLoad = sessionStorage.getItem("loaded")

if (firstLoad == null) {
    sessionStorage.setItem("loaded", "yes") 

} else {
    document.getElementById("typed-heading").style.animation = "none";
    document.getElementById("typed-heading").style.borderRight = "none";
}



