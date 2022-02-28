
class Nav extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <nav class="nav-nav">
            <ul class="nav-ul">
                <li class="nav-li"><a href="#" class="nav-a">About</a></li>
                <li class="nav-li"><a href="#" class="nav-a">Projects</a></li>
                <li class="nav-li"><a href="#" class="nav-a">Resume</a></li>
            </ul>
        </nav> `;
    }
}

customElements.define('nav-component', Nav)