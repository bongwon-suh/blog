import { html, render, TemplateResult } from 'lit-html';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

export default class Post extends AbstractView {
    constructor(container: HTMLElement) {
        super(container);
        this.setTitle("Post");

        const msg = {
            "url": '/auth/test',
            "data": {}
        };

        utils.sendAPI('POST', msg)
        .then( (result)=>{
            console.log(result);
        })
    }

    renderHTML = ()=>{
        return render(html `<div>hello Post</div>`, this.container)
    }
}
