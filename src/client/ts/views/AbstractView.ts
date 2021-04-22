import { html, render, TemplateResult } from 'lit-html';

export default class {
    container: HTMLElement
    constructor(container: HTMLElement) {
        this.container = container;
    }
    setTitle(title: string) {
        document.title = title;
    }
    
    public run = () => {
        this.renderHTML();
    }

    public makeTemplate = ()=>{
        return html`<h1>make Template</h1>`
    }

    public renderHTML = ()=>{
        return render(this.makeTemplate(), this.container)
    }
}