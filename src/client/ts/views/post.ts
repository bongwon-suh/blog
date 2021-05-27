/**
 * @file Post
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

@customElement('post-container')
export default class Post extends AbstractView {
    constructor() {
        super();
        this.setTitle("Post");
    }

    /**
     * make Stylesheet
     */
    static styles = css`
        .top {
            display: flex;
            justify-content: center;
            width: 100%;
            background: #222222;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
            padding: 100px 0 150px 0;
        }
        .top-text {
            display: flex;
            flex-direction: column;
            margin-right: 50px;
        }
        .top-text_title {
            text-align: center;
            font-size: 36px;
            font-weight: 700;
            color: white;
            margin-bottom: 20px;
        }
        .top-text_subtitle {
            font-size: 28px;
            width: 500px;
            color: #ABABAB;
            line-height: initial;
        }
    `;
    
    @property()
    name?: string = 'world';

    /**
     * make Template
     */
    render() {
        return html`
                    <my-navbar></my-navbar>
                    <section class="top">
                        <div class="top-text">
                            <span class="top-text_title">Blog Posts</span>
                            <span class="top-text_subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                        </div>
                    </section>
                    <p>hello, ${this.name}</p>
                    `
    }
}
