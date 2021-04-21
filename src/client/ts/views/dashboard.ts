import { html, render, TemplateResult } from 'lit-html';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

export default class Dashboard extends AbstractView {
    constructor(container: HTMLElement) {
        super(container);
        this.setTitle("Dashboard");
    }

    renderHTML = ()=>{
        return render(html `<div>hello dashboard</div>`, this.container)
    }
}
