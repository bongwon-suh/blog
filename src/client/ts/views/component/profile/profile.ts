/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';
import { profileStyles } from './styles/profile'
import { profileStarStyles } from './styles/stars';

@customElement('profile-section')
class ProfileSection extends LitElement {
    constructor() {
        super();
    }

    static styles = [
        profileStyles,
        profileStarStyles
    ];
    
    render() {
        return html`
        <section class="profile">
            <div class="profile-text">
                <span class="profile-text_title">Lorem 한글은 어떻게 나오나 is simply</span>
                <span class="profile-text_subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                <a class="profile-text_button" href="/projects">My Projects</a>
            </div>
            <div class="profile-image">
                <img class="profile-image_img" src="/static/images/profile2.jpg">
            </div>
        </section>
        `
    }
}