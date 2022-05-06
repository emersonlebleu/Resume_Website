console.log("Working!")

let firstLoad = sessionStorage.getItem("welcome")

if (firstLoad == null) {
    sessionStorage.setItem("welcome", "loaded") 
    let firstLoad = sessionStorage.getItem("welcome")

} else {
    document.getElementById("welcome-w").style.animation = "none";
    document.getElementById("welcome-el").style.animation = "none";
    document.getElementById("welcome-come").style.animation = "none";
    document.getElementById("welcome-ex-line").style.animation = "none";
    document.getElementById("welcome-ex-point").style.animation = "none";
}



