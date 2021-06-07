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
        .values-content {
            display: flex;
            justify-content: space-between;
        }
        .core {
            background: #f6f6f6;
            border-radius: 50%;
            font-size: 1.5rem;
            height: 12.5rem;
            width: 12.5rem;
            text-align: center;
            margin: 5rem;
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

    /**
     * make Template
     */
    render() {
        return html`

                <my-navbar></my-navbar>
                <div class="container">
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
                    <section class="section">
                        <div class="section-title">
                            <p>CORE VALUES</p>
                        </div>
                        <div class="values-content">
                            <div class="core"><p>Lorem</p></div>
                            <div class="core">Lorem</div>
                            <div class="core">Lorem</div>
                        </div>
                    </section>
                    <section class="life">
                        <div class="life-title">
                            <p>LIFE</p>
                        </div>
                        <div class="life-image">
                            <img class="life_img" src="/static/images/life.png">
                        </div>
                    </section>
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
                </div>
                <my-footer></my-footer>
                `
    }
}
