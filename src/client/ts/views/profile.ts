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
        .profile {
            display: flex;
            justify-content: center;
            background: #222222;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
            padding: 200px 0;
        }
        .profile-text {
            display: flex;
            flex-direction: column;
            margin-right: 50px;
        }
        .profile-text_title {
            font-size: 40px;
            font-weight: 700;
            color: white;
        }
        .profile-text_subtitle {
            font-size: 28px;
            width: 400px;
            color: #ABABAB;
        }
        .profile-text_button {
            text-decoration: none;
            color: white;
            background: #4b6cc1;
            width: fit-content;
            font-size: 18px;
            padding: 10px 20px;
            border-radius: 10px;
        }
        .profile-image {
            padding: 10px;
            background: black;
            margin-left:50px;
        }
        .profile-image_img {
            width: 250px;
            border-radius: 5px;
        }
    `;

    /**
     * make Template
     */
    render() {
        return html`
                <my-navbar></my-navbar>
                <div class="profile">
                    <div class="profile-text">
                        <span class="profile-text_title">Lorem 한글은 어떻게 나오나 is simply</span>
                        <span class="profile-text_subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                        <a class="profile-text_button" href="/projects">My Projects</a>
                    </div>
                    <div class="profile-image">
                        <img class="profile-image_img" src="/static/images/profile.jpg">
                    </div>
                </div>
                `
    }
}
