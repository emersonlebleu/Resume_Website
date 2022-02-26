
class Nav extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <nav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
        </nav> `;
    }
}

customElements.define('nav-component', Nav)