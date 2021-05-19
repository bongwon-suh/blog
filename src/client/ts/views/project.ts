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
    protected list: Array<Project>
    constructor() {
        super();
        this.setTitle("Project");
        this.getProjectList();
        this.list = []
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
        :host {
            color: blue;
        }
    `;
    
    @property()
    name?: string = 'world';
    // ${until(this.getProjectList().then(result=>result.map(i=>html`${i.id}`)))}
    /**
     * make Template
     */
    render() {
        return html`
                <my-navbar></my-navbar>
                ${until(this.getProjectList().then(result=>result.map(i=>html`${i.id}`)))}
                    `;
    }
}
