/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';
import { skillStyles } from './styles/skill'

@customElement('skill-section')
class ValueSection extends LitElement {
    constructor() {
        super();
    }

    static styles = [
        skillStyles
    ];
    
    render() {
        return html`
            <section class="section">
                <div class="section-title">
                    <p>About</p>
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