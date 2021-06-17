/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

// import { LitElement, css, html } from 'lit';
// import { customElement } from 'lit/decorators';
// import { timelineStyles } from './styles/timeline'

// @customElement('timeline-section')
// class ProfileSection extends LitElement {
//     constructor() {
//         super();
//     }

//     static styles = [
//         timelineStyles
//     ];
    
//     render() {
//         return html`
//             <section class="timeline">
//                 <div class="timeline-title">
//                     <p>timeline</p>
//                 </div>
//                 <div class="timeline-image">
//                     <img class="timeline_img" src="/static/images/timeline.png">
//                 </div>
//             </section>
//         `
//     }
// }

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';
import { timelineStyles } from './styles/timeline'

@customElement('timeline-section')
class ProfileSection extends LitElement {
    constructor() {
        super();
    }

    static styles = [
        timelineStyles
    ];
    
    render() {
        return html`
            <section class="timeline">
                <div class="timeline-title">
                    <p>Time Line</p>
                </div>
                <div class="timeline-body">
                    <div class="center-line"></div>
                    <div class="row row-1">
                        <section>
                            <i class="icon"></i>
                            <div class="details">
                                <span class="title">Title of Section1</span>
                                <span>1st Jan 2021</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div class="bottom">
                                <a href="#">Read more</a>
                                <i>- someone famous</i>
                            </div>
                        </section>
                    </div>
                    <div class="row row-2">
                        <section>
                            <i class="icon"></i>
                            <div class="details">
                                <span class="title">Title of Section1</span>
                                <span>2st Jan 2021</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div class="bottom">
                                <a href="#">Read more</a>
                                <i>- someone famous</i>
                            </div>
                        </section>
                    </div>
                    <div class="row row-1">
                        <section>
                            <i class="icon"></i>
                            <div class="details">
                                <span class="title">Title of Section1</span>
                                <span>1st Jan 2021</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div class="bottom">
                                <a href="#">Read more</a>
                                <i>- someone famous</i>
                            </div>
                        </section>
                    </div>
                    <div class="row row-2">
                        <section>
                            <i class="icon"></i>
                            <div class="details">
                                <span class="title">Title of Section1</span>
                                <span>2st Jan 2021</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <div class="bottom">
                                <a href="#">Read more</a>
                                <i>- someone famous</i>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        `
    }
}