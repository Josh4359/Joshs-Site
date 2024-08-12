console.log("This is a test");

class CustomHeader extends HTMLElement
{
    static get observedAttributes()
    {
        return ['title', 'bg-color'];
    }

    constructor()
    {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback()
    {
        fetch('header.html')
            .then(response => response.text())
            .then(data =>
            {
                this.shadowRoot.innerHTML = data;
                this.updateComponent();
            });
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        if (oldValue !== newValue)
        {
            this.updateComponent();
        }
    }

    updateComponent()
    {
        if (this.shadowRoot)
        {
            const titleElement = this.shadowRoot.querySelector('#title');
            const navbarElement = this.shadowRoot.querySelector('.navbar');

            if (titleElement)
            {
                const title = this.getAttribute('title') || 'Default Title';
                titleElement.textContent = title;
            }

            if (navbarElement)
            {
                const bgColor = this.getAttribute('bg-color') || '#333';
                navbarElement.style.backgroundColor = bgColor;
            }
        }
    }
}

customElements.define('custom-header', CustomHeader);
