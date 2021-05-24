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
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
            padding: 100px 0 150px 0;
        }
        .profile-text {
            display: flex;
            flex-direction: column;
            margin-right: 50px;
        }
        .profile-text_title {
            font-size: 36px;
            font-weight: 700;
            color: white;
            margin-bottom: 20px;
        }
        .profile-text_subtitle {
            font-size: 28px;
            width: 500px;
            color: #ABABAB;
            line-height: initial;
        }
        .profile-text_button {
            text-decoration: none;
            color: white;
            background: #4b6cc1;
            width: fit-content;
            font-size: 18px;
            padding: 10px 20px;
            border-radius: 10px;
            margin-top: 30px;
        }
        .profile-image {
            padding: 40px;
            background: #121316;
            border-radius: 5px;
        }
        .profile-image_img {
            width: 300px;
            border-radius: 3px;
            margin-bottom: -80px;
        }
        .section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 50px 0;
        }
        .section-title {
            font-size: 24px;
            color: #919191;
            font-weight: 600;
            letter-spacing: .063em;
            width: 300px;
            text-align: center;
        }
        .values-content {
            display: flex;
            justify-content: space-between;
        }
        .core {
            background: #f6f6f6;
            border-radius: 50%;
            font-size: 24px;
            height: 200px;
            width: 200px;
            text-align: center;
            margin: 80px;
        }
        .skill-content {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .skill-content-image {
            width: 200px;
            margin: 30px 75px 30px 0;
        }
        .skill-content_img {
            width: 60px;
        }
        .skill-content-descripition {
            width: 500px;
            margin-left: 30px 0 30px; 75px;
        }
        .skill-content_text {
            width: 500px;
        }
        .life {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 50px 0;
            width: 100%;
            height: 800px;
            clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 calc(100% - 100px));
            background: #f6f6f6;
            padding-bottom: 250px;
        }
        .life-title {
            margin-top: 80px;
            width: 300px;
            text-align: center;
            font-size: 24px;
            color: #919191;
            font-weight: 600;
            letter-spacing: .063em;
        }
        .life_img {
            width: 800px;
        }
        .contact {
            width: 100%;
            background: #222222;
            clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
            padding: 80px 0 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .contact-info {
            font-size: 18px;
            color: white
        }
        .contact-info-item {
            display: flex;
            align-items: center;
        }
        .icon {
            margin-right: 10px;
            color: #4b6cc1;
        }
    `;

    /**
     * make Template
     */
    render() {
        return html`
                <link rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                    crossorigin="anonymous"/>
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
                    <section class="contact">
                        <div class="section-title">
                            <p>CONTACT</p>
                        </div>
                        <div class="contact-info">
                            <div class="contact-info-item">
                                <i class="fas fa-envelope icon"></i>
                                <p>abcd@gmail.com</p>
                            </div>
                            <div class="contact-info-item">
                                <i class="fas fa-mobile-alt icon"></i>
                                <p>(+82)10 1234 5678</p>
                            </div>
                            <div class="contact-info-item">
                                <i class="fab fa-github icon"></i>
                                <p>github</p>
                            </div>
                        </div>
                    </section>
                </div>
                `
    }
}
