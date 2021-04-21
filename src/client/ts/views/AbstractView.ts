import { html, render, TemplateResult } from 'lit-html';

export default class {
    container: HTMLElement
    constructor(container: HTMLElement) {
        this.container = container;
    }
    setTitle(title: string) {
        document.title = title;
    }

    public renderHTML = ()=>{
        return render(html `<div>hello world123</div>`, this.container)
    }
}