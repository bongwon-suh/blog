/**
 * @file Post detail page
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com> 3
 */

 import { css, html } from 'lit';
 import { customElement, property } from 'lit/decorators';
 import  AbstractView from './AbstractView';
 import { sendAPI, parseParams} from '../lib/utils';
 import { until } from 'lit/directives/until';
 import { Blog } from '../lib/interfaces';
 import { routes } from '../router';

 @customElement('post-detail')
 export default class PostDetail extends AbstractView {
     constructor() {
         super();
         this.setTitle("Blog");
     }
 
     protected getBlogDetail(): Promise<Blog> {
         return new Promise( (resolve, reject)=>{
             const param = parseParams(routes[3]['path'], location.pathname);
             console.log(param.id);
             const msg = {
                 "url": `/blog/${param.id}`,
                 "data": {}
             };
             sendAPI('GET', msg)
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
     `;
 
     /**
      * make Template
      */
     render() {
         return html`
                     <my-navbar></my-navbar>
                     <h1>hello world</h1>
                     ${until(this.getBlogDetail().then(result=>html`<div>${result.title}</div>`))}
                     `
     }
 }
 