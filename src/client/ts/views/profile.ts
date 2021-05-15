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
            justify-content: center;
        }
        .profile-image__img {
            height: 300px;
            border-radius: 10px;
        }
        .profile-skill__img {
            width: 60px;
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
                    <div class="profile">
                        <div class="profile-image">
                            <img class="profile-image__img" src="/static/images/profile.jpg">
                        </div>
                        <div class="profile-contact">
                            <div class="profile-contact-introduce">
                                나는 누구인가?<br>
                                나는 누구인가?<br>
                                나는 누구인가?
                            </div>
                            <div class="profile-contact-title">
                                <h1>Contact</h1>
                            </div>
                            <div class="profile-contact-email">
                                <h3>abcdef@gmail.com<h3>
                            </div>
                            <div class="profile-contact-phone">
                                <h3>(+82)10 - 1234 - 5678<h3>
                            </div>
                            <div class="profile-contact-icon">
                                <i class="fab fa-github-square"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                    <div class="profile">
                        <div class="profile-skill">
                            <img class="profile-skill__img" src="/static/images/typescript.png">
                            <img class="profile-skill__img" src="/static/images/javascript.png">
                            <img class="profile-skill__img" src="/static/images/nodejs.png">
                            <div class="profile-skill-intoduce">
                                텍스트 영역
                            </div>
                        </div>
                        <div class="profile-skill">
                            <img class="profile-skill__img" src="/static/images/python.png">
                            <img class="profile-skill__img" src="/static/images/django.png">
                            <img class="profile-skill__img" src="/static/images/flask.png">
                            <div class="profile-skill-intoduce">
                                텍스트 영역
                            </div>
                        </div>
                        <div class="profile-skill">
                            <img class="profile-skill__img" src="/static/images/mariadb.png">
                            <img class="profile-skill__img" src="/static/images/mongodb.png">
                            <div class="profile-skill-intoduce">
                                텍스트 영역
                            </div>
                        </div>
                        <div class="profile-skill">
                            <img class="profile-skill__img" src="/static/images/html.png">
                            <img class="profile-skill__img" src="/static/images/css.png">
                            <div class="profile-skill-intoduce">
                                텍스트 영역
                            </div>
                        </div>
                    </div>
                </div>
                `
    }
}
