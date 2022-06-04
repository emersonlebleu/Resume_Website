
let nav_hb = document.getElementById('nav-hb');
let ul_nav = document.getElementById('ul-nav');

let hb_ln_1 = document.getElementById('hb-ln-1');
let hb_ln_2 = document.getElementById('hb-ln-2');
let hb_ln_3 = document.getElementById('hb-ln-3');

var state = 'closed';

// open
function open() {
    console.log('open')
    hb_ln_3.style.visibility = 'hidden'
}
// close
function close() {
    console.log('close')
    hb_ln_3.style.visibility = 'visible'
}
// hide
function hide() {
    console.log('hide')
}
// show
function show() {
    console.log('show')
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