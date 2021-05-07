/**
 * @file AbstractView Class
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

customElement('my-page')
export default class extends LitElement {
    constructor() {
        super();
    }

    /**
     * setTitle
     */
    public setTitle(title: string) {
        document.title = title;
    }

    static styles = css``;
    
    render() {
        return html`<p>hello worold</p>`
    }
}