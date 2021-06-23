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

    scrollDown = (e: Event) =>{
        const content = this.shadowRoot?.querySelector('.profile')
        const height = content!.getBoundingClientRect().height
        console.log(height)
        window.scrollTo({  top: height, behavior: 'smooth',})
    }

    static styles = [
        profileStyles,
        profileStarStyles
    ];
    
    render() {
        return html`
        <section class="profile">
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="profile-title">
                <div>Hello, I'm <span class="highlight">Bongwon</span>.</div>
                <div>I'm junior backend developer.</div>
                <div class="button" @click=${this.scrollDown}>View my work</div>
            </div>
        </section>
        `
    }
}