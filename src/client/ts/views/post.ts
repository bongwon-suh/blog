import { html, render, TemplateResult } from 'lit-html';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

export default class Post extends AbstractView {
    constructor(container: HTMLElement) {
        super(container);
        this.setTitle("Post");
    }

    renderHTML = ()=>{
        return render(html `<div>hello Post</div>`, this.container)
    }
}
