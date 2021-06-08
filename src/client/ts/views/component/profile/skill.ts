/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('skill-section')
class ValueSection extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        .section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 3.125rem 0;
        }
        .section-title {
            font-size: 1.5rem;
            color: #919191;
            font-weight: 600;
            letter-spacing: .063em;
            width: 18.75rem;
            text-align: center;
        }
        .skill-content {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .skill-content-image {
            width: 12.5rem;
            margin: 1.875rem 4.688rem 1.875rem 0;
        }
        .skill-content_img {
            width: 3.75rem;
        }
        .skill-content-descripition {
            width: 31.25rem;
            margin-left: 1.875rem 0 1.875rem; 4.688rem;
        }
        .skill-content_text {
            width: 31.25rem;
        }
    `;
    
    render() {
        return html`
            <section class="section">
                <div class="section-title">
                    <p>SKILLS</p>
                </div>
                <div class="skill-content">
                    <div class="skill-content-image">
                        <img class="skill-content_img" src="/static/images/typescript.png">
                        <img class="skill-content_img" src="/static/images/javascript.png">
                        <img class="skill-content_img" src="/static/images/nodejs.png">
                    </div>
                    <div class="skill-content-descripition">
                        <span class="skill-content_text">Lorem Ipsum is simply dummy text of the printing</span>
                    </div>
                </div>
                <div class="skill-content">
                    <div class="skill-content-image">
                        <img class="skill-content_img" src="/static/images/python.png">
                        <img class="skill-content_img" src="/static/images/django.png">
                        <img class="skill-content_img" src="/static/images/flask.png">
                    </div>
                    <div class="skill-content-descripition">
                        <span class="skill-content_text">Lorem Ipsum is simply dummy text of the printing</span>
                    </div>
                </div>
                <div class="skill-content">
                    <div class="skill-content-image">
                        <img class="skill-content_img" src="/static/images/mariadb.png">
                        <img class="skill-content_img" src="/static/images/mongodb.png">
                    </div>
                    <div class="skill-content-descripition">
                        <span class="skill-content_text">Lorem Ipsum is simply dummy text of the printing</span>
                    </div>
                </div>
                <div class="skill-content">
                    <div class="skill-content-image">
                        <img class="skill-content_img" src="/static/images/html.png">
                        <img class="skill-content_img" src="/static/images/css.png">
                    </div>
                    <div class="skill-content-descripition">
                        <span class="skill-content_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                    </div>
                </div>
            </section>
        `
    }
}