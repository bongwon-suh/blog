/**
 * @file Post detail page
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com> 4
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import { sendAPI, parseParams} from '../lib/utils';
import { until } from 'lit/directives/until';
import { unsafeHTML } from 'lit/directives/unsafe-html';
import { Blog } from '../lib/interfaces';
import { routes } from '../router';


@customElement('post-detail')
export default class PostDetail extends AbstractView {
    constructor() {
        super();
        this.setTitle("Blog");
        this.setProperties();
    }

    @property( { type: Object })
    items: Blog = { content: ""};

    protected setProperties = () => {
        this.getBlogDetail()
        .then((result)=>{
            this.items = result;
        })
    }

    protected getBlogDetail(): Promise<Blog> {
        return new Promise( (resolve, reject)=>{
            const param = parseParams(routes[4]['path'], location.pathname);
            const msg = {
                "url": `/blog/${param.id}`,
                "data": {}
            };
            sendAPI('GET', msg)
            .then( (result)=>{
                resolve(result);
            })
            .catch((err)=>{
                reject(err);
            });
        })
    }

    /**
     * make Stylesheet
     */
    static styles = css`
    `;

    /**
     * make Template
     */
    render() {
        return html`
                    <my-navbar></my-navbar>
                    <section class="top">
                        <div class="top-text">
                            <span class="top-text_title">${this.items.title}</span>
                            <span class="top-text_subtitle">${this.items.description}</span>
                        </div>
                    </section>
                    <section class="content">
                        ${unsafeHTML(this.items.content)}
                    </section>
                    <my-footer></my-footer>
                    `
    }
}
