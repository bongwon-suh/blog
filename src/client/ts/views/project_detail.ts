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
import { projectDetailStyles } from './styles/project_detail'

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
    static styles = [
        projectDetailStyles
    ];

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
