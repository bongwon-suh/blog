/**
 * @file setting
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

@customElement('setting-container')
export default class Setting extends AbstractView {
    constructor() {
        super();
        this.setTitle("Setting");
    }

    /**
     * make Stylesheet
     */
    static styles = css`
        :host {
            color: blue;
        }
    `;
    
    @property()
    name?: string = 'world';

    /**
     * make Template
     */
    render() {
        return html`<p>hello, ${this.name}</p>`
    }
}
