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
                 resolve(result)
             })
             .catch((err)=>{
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
 
     /**
      * make Template
      */
     render() {
         this.getProjectList()
         .then((result)=>{
             
         })
         return html`
                     `;
     }
 }
 