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
        .top-text_button {
            text-decoration: none;
            color: white;
            background: #4b6cc1;
            width: fit-content;
            font-size: 18px;
            padding: 10px 20px;
            border-radius: 10px;
            margin-top: 30px;
        }
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
            width: 40vw;
            box-shadow: 0 1px 5px rgb(0 0 0 / 5%), 0 5px 30px rgb(0 0 0 / 20%);
            border-radius: 3px;
        }
        .card-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 350px;
            margin-left: 25px;
        }
        .card-title {
            font-size: 3rem;
            font-weight: 700;
            color: #212529;
            margin: 10px;
        }
        .card-content {
            font-size: 1.5rem;
            color: #495057;
            margin: 10px;
            line-height: 2.2rem;
        }
        .card-footer {
            font-size: 1rem;
            color: #868E96;
            margin: 10px;
        }
        .period {
            margin: 10px 0;
        }
        .tools {
            margin: 10px 0;
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
                        <span class="top-text_title">My Projects</span>
                        <span class="top-text_subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                    </div>
                </section>
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
