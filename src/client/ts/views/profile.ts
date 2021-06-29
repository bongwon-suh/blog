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
        // window.onscroll = () => {
        //     console.log(this.shadowRoot!.querySelector('timeline-section::shadow .timeline'))
        //     const myCarousel = this.host.shadowRoot.querySelector(#myCarousel);
        // }
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
                <div class="container">
                    <profile-section></profile-section>
                    <my-navbar></my-navbar>
                    <skill-section></skill-section>
                    <timeline-section></timeline-section>
                    <value-section></value-section>
                </div>
                <my-footer></my-footer>
                `
    }
}
