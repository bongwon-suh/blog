/**
 * @file Post detail page
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com> 2
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import { sendAPI, parseParams} from '../lib/utils';
import { until } from 'lit/directives/until';
import { unsafeHTML } from 'lit/directives/unsafe-html';
import { Project } from '../lib/interfaces';
import { routes } from '../router';


@customElement('project-detail')
export default class ProjectDetail extends AbstractView {
    constructor() {
        super();
        this.setTitle("Project");
        this.setProperties();
    }

    @property( { type: Object })
    items: Project = { content: ""};

    protected setProperties = () => {
    this.getBlogDetail()
        .then((result)=>{
            this.items = result;
        })
    }

    protected getBlogDetail(): Promise<Project> {
        return new Promise( (resolve, reject)=>{
            const param = parseParams(routes[2]['path'], location.pathname);
            const msg = {
                "url": `/project/${param.id}`,
                "data": {}
            };
            sendAPI('GET', msg)
            .then( (result)=>{
                console.log(result)
                resolve(result);
            })
            .catch((err)=>{
                console.log(err)
                reject(err);
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
                    <section class="body">
                        ${unsafeHTML(this.items.content)}
                    </section>
                    <my-footer></my-footer>
                    `
    }
}
