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
            margin: 100px 0;
        }
        .card-image {
            padding: 40px;
            background: #f6f6f6;
            border-radius: 5px;
            margin-right: 25px;
        }
        .card-image_img {
            margin-bottom: -100px;
            width: 500px;
            box-shadow: 0 1px 5px rgb(0 0 0 / 5%), 0 5px 30px rgb(0 0 0 / 20%);
            border-radius: 3px;
        }
        .card-body {
            width: 250px;
            margin-left: 25px;
        }
        .card-title {
            font-size: 42px;
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
                    `;
    }
}
