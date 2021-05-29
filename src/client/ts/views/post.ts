/**
 * @file Post
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';
import { until } from 'lit/directives/until';
import { Blog } from '../lib/interfaces';

@customElement('post-container')
export default class Post extends AbstractView {
    constructor() {
        super();
        this.setTitle("Blog");
    }

    protected getBlogList(): Promise<Blog[]> {
        return new Promise( (resolve, reject)=>{
            const msg = {
                "url": '/blog',
                "data": {}
            };
            utils.sendAPI('GET', msg)
            .then( (result)=>{
                console.log(result)
                resolve(result)
            })
            .catch((err)=>{
                console.log(err)
                reject(err)
            });
        })
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
                    <div class="card-container">
                        ${until(
                            this.getBlogList()
                            .then(result=>result.map(item=>
                            html`<div class="card">
                                    <div class="card-image">
                                        <img class="card-image_img" src="https://sebkay.com/assets/img/blog/2018/09/calendi-thumb.jpg" alt="Grapefruit slice atop a pile of other slices">
                                    </div>
                                    <div class="card-body">
                                        <div class="card-title">${item.title}</div>
                                        <div class="card-content">${item.description}</div>
                                        <div class="card-footer">
                                            <div class="period">개발 기간 : ${item.dev_period}</div>
                                            <div class="tools">개발 언어 : ${item.dev_tool}</div>
                                        </div>
                                    </div>
                                </div>`
                            )))}
                    </div>
                    `
    }
}
