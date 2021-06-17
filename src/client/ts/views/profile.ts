/**
 * @file Profile
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';
import './common/nav';
import './component/profile/profile'
import './component/profile/value'
import './component/profile/timeline'
import './component/profile/skill'

@customElement('profile-container')
export default class Profile extends AbstractView {
    constructor() {
        super();
        this.setTitle("Profile");
    }

    /**
     * make Stylesheet
     */
    static styles = css`
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `;

    /**
     * make Template
     */
    render() {
        return html`

                <my-navbar></my-navbar>
                <div class="container">
                    <profile-section></profile-section>
                    <value-section></value-section>
                    <timeline-section></timeline-section>
                    <skill-section></skill-section>
                </div>
                <my-footer></my-footer>
                `
    }
}
