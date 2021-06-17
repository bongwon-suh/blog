/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

// import { LitElement, css, html } from 'lit';
// import { customElement } from 'lit/decorators';
// import { lifeStyles } from './styles/life'

// @customElement('life-section')
// class ProfileSection extends LitElement {
//     constructor() {
//         super();
//     }

//     static styles = [
//         lifeStyles
//     ];
    
//     render() {
//         return html`
//             <section class="life">
//                 <div class="life-title">
//                     <p>LIFE</p>
//                 </div>
//                 <div class="life-image">
//                     <img class="life_img" src="/static/images/life.png">
//                 </div>
//             </section>
//         `
//     }
// }

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';
import { lifeStyles } from './styles/life'

@customElement('life-section')
class ProfileSection extends LitElement {
    constructor() {
        super();
    }

    static styles = [
        lifeStyles
    ];
    
    render() {
        return html`
            <section class="life">
                <div class="life-title">
                    <p>LIFE</p>
                </div>
                <div class="timeline">
                    <ul>
                        <li>
                            <div class="timeline-content">
                                <h1>Heading 1</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h1>Heading 2</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h1>Heading 3</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-content">
                                <h1>Heading 4</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        `
    }
}