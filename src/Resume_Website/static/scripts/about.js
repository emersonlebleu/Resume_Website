console.log("Working!")

let firstLoad = sessionStorage.getItem("welcome")

console.log(firstLoad)

if (firstLoad == null) {
    sessionStorage.setItem("welcome", "loaded") 
    let firstLoad = sessionStorage.getItem("welcome")
    console.log("Inside First")
    console.log(firstLoad)

} else {
    let w = document.getElementById("welcome-w").style
    let el = document.getElementById("welcome-el").style
    let come = document.getElementById("welcome-come").style
    let ex_line = document.getElementById("welcome-ex-line").style
    let ex_point = document.getElementById("welcome-ex-point").style

    console.log("inside else")
}



