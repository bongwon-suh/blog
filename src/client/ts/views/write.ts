/**
 * @file write
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

@customElement('write-container')
export default class Write extends AbstractView {
    constructor() {
        super();
        this.setTitle("Write");
    }

    /**
     * make Stylesheet
     */
    static styles = css`
        :host {
            color: green;
        }
    `;

    /**
     * make Template
     */
    render() {
        return html``
    }
}
