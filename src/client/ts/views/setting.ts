import { html, render, TemplateResult } from 'lit-html';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

export default class Setting extends AbstractView {
    constructor(container: HTMLElement) {
        super(container);
        this.setTitle("Setting");
    }

    renderHTML = ()=>{
        return render(html `<div>hello setting</div>`, this.container)
    }
}
