/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('profile-section')
class ProfileSection extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
    .profile {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #222222;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6.25rem));
    padding: 6.25rem 0 9.375rem 0;
}
.profile-text {
    display: flex;
    flex-direction: column;
    margin-right: 3.125rem;
}
.profile-text_title {
    font-size: 2.25rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.25rem;
}
.profile-text_subtitle {
    font-size: 1.75rem;
    width: 31.25rem;
    color: #ABABAB;
    line-height: initial;
}
.profile-text_button {
    text-decoration: none;
    color: white;
    background: #4b6cc1;
    width: fit-content;
    font-size: 1.125rem;
    padding: 0.625rem 1.25rem;
    border-radius: 10px;
    margin-top: 1.875rem;
}
.profile-image {
    padding: 2.5rem;
    background: #121316;
    border-radius: 5px;
}
.profile-image_img {
    width: 18.75rem;
    border-radius: 3px;
    margin-bottom: -5rem;
}
    `;
    
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