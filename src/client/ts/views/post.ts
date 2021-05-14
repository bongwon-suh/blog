/**
 * @file Post
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

@customElement('post-container')
export default class Post extends AbstractView {
    constructor() {
        super();
        this.setTitle("Post");
    }

    /**
     * make Stylesheet
     */
    static styles = css`
        :host {
            color: green;
        }
    `;
    
    @property()
    name?: string = 'world';

    /**
     * make Template
     */
    render() {
        return html`
                    <my-navbar></my-navbar>
                    <p>hello, ${this.name}</p>
                    `
    }
}
