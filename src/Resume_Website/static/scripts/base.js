
let nav_hb = document.getElementById('nav-hb');
let ul_nav = document.getElementById('ul-nav');

let hb_ln_1 = document.getElementById('hb-ln-1');
let hb_ln_2 = document.getElementById('hb-ln-2');
let hb_ln_3 = document.getElementById('hb-ln-3');

var state = 'closed';

// open
function open() {
    hb_ln_2.style.visibility = 'hidden'
    hb_ln_1.setAttributeNS(null, 'y2', '35px');
    hb_ln_3.setAttributeNS(null, 'y2', '15px');
}
// close
function close() {
    hb_ln_2.style.visibility = 'visible'
    hb_ln_1.setAttributeNS(null, 'y2', '15px');
    hb_ln_3.setAttributeNS(null, 'y2', '35px');
}
// hide
function hide() {
    ul_nav.style.visibility = 'hidden'
}
// show
function show() {
    ul_nav.style.visibility = 'visible'
}

function toggle(status) {
    if (status == 'closed') {
        open();
        show();
        state = 'open'
    } 
    else if (status == 'open') {
        close();
        hide();
        state = 'closed';
    }
}

nav_hb.addEventListener('click', ()=> {
    console.log('clicked')
    toggle(state);
})

window.addEventListener('resize', ()=>{
    if (window.innerWidth > 480){
        ul_nav.style.visibility = 'visible';
        hb_ln_2.style.visibility = 'hidden'
    }
    else if (window.innerWidth < 480) {
        if (state == 'closed') {
            ul_nav.style.visibility = 'hidden';
            hb_ln_2.style.visibility = 'visible'
        } else if (state == 'open') {
            ul_nav.style.visibility = 'visible';
            open();
        }
    }
}) 
