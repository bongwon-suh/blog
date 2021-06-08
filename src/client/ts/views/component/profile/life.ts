/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('life-section')
class ProfileSection extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        .life {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 3.125rem 0;
            width: 100%;
            height: 50rem;
            clip-path: polygon(0 0, 100% 6.25rem, 100% 100%, 0 calc(100% - 6.25rem));
            background: #f6f6f6;
            padding-bottom: 15.63rem;
        }
        .life-title {
            margin-top: 5rem;
            width: 18.75rem;
            text-align: center;
            font-size: 1.5rem;
            color: #919191;
            font-weight: 600;
            letter-spacing: .063em;
        }
        .life_img {
            width: 50rem;
        }
    `;
    
    render() {
        return html`
            <section class="life">
                <div class="life-title">
                    <p>LIFE</p>
                </div>
                <div class="life-image">
                    <img class="life_img" src="/static/images/life.png">
                </div>
            </section>
        `
    }
}