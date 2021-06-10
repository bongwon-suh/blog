/**
 * @file project
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import { until } from 'lit/directives/until';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';
import { Project } from '../lib/interfaces';
import { projectStyles } from './styles/project'

@customElement('project-container')
export default class Setting extends AbstractView {
    constructor() {
        super();
        this.setTitle("Project");
    }

    protected getProjectList(): Promise<Project[]> {
        return new Promise( (resolve, reject)=>{
            const msg = {
                "url": '/project',
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
        projectStyles
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
                        <span class="top-text_title">My Projects</span>
                        <span class="top-text_subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                    </div>
                </section>
                <div class="card-container">
                    ${until(
                        this.getProjectList()
                        .then(result=>result.map(item=>
                        html`<div class="card" onclick="location.href='/projects/${item.id}'">
                                <div class="card-image">
                                    <img class="card-image_img" src="https://sebkay.com/assets/img/projects/cazz-photography/featured.jpg" alt="Grapefruit slice atop a pile of other slices">
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
                <my-footer></my-footer>
                    `;
    }
}
