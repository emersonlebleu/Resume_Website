const navTemplate = document.createElement('template'); 

navTemplate.innerHTML = `
<style>
ul {
    list-style-type: none;
    display: flex;
    background-color: #33372F;
    margin: 0px;
    justify-content: space-evenly;
    padding: 1px;
}

li {
    background-color: #B4CFC9;
    border-radius: 3px;
    padding: 5px 20px;   
}

a {
    color: #33372F;
    text-decoration: none;
    background-color: #B4CFC9;
    border-radius: 3px; 
}
</style>

<nav>
    <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Resume</a></li>
    </ul>
</nav>
`;

class Nav extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode:'closed'});

        shadowRoot.appendChild(navTemplate.content);
    }
}

customElements.define('nav-component', Nav)