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
    static styles = css`
        .card-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .card {
            display: flex;
            border: 1px solid;
            margin: 20px;
            width: 50vw;
        }
        .card-image {
            margin-right: 10px;
        }
        .card-image_img {
            width: 200px;
        }
        .card-body {
            margin-left: 10px;
        }
        .card-title {
            font-size: 24px;
            font-weight: 700;
            color: #212529;
            margin: 10px;
        }
        .card-content {
            font-size: 16px;
            color: #495057;
            margin: 10px;
        }
        .card-footer {
            font-size: 14px;
            color: #868E96;
            margin: 10px;
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
                <div class="card-container">
                    ${until(
                        this.getProjectList()
                        .then(result=>result.map(item=>
                        html`<div class="card">
                                <div class="card-image">
                                    <img class="card-image_img" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="Grapefruit slice atop a pile of other slices">
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
                    `;
    }
}
