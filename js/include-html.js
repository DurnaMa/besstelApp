class IncludeHTML extends HTMLElement {
    async connectedCallback() {
        const file = this.getAttribute("src");
        try {
            const response = await fetch(file);
            if (!response.ok)
                throw new Error(
                    `Failed to fetch ${file}: ${response.statusText}`
                );
            this.innerHTML = await response.text();
        } catch (error) {
            this.innerHTML = "Page not found";
            console.error(error);
        }
    }
}

customElements.define("include-html", IncludeHTML);
