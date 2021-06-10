/**
 * @file Post
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import { postStyles } from './styles/post'
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
    static styles = [
        postStyles
    ];
    
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
                            html`<div class="card"  onclick="location.href='/post/${item.id}'">
                                    <div class="card-image">
                                        <img class="card-image_img" src="https://sebkay.com/assets/img/blog/2018/09/calendi-thumb.jpg" alt="Grapefruit slice atop a pile of other slices">
                                    </div>
                                    <div class="card-body">
                                        <span class="card-title">${item.title}</span>
                                        <span class="card-content">${item.description}</span>
                                        <span class="card-footer">${item.dev_period}</span>
                                    </div>
                                </div>`
                            )))}
                    </div>
                    <my-footer></my-footer>
                    `
    }
}
