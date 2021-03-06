/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';
import { skillStyles } from './styles/skill'

@customElement('skill-section')
class ValueSection extends LitElement {
    constructor() {
        super();
        window.addEventListener('scroll', ()=>{
            const container = this.shadowRoot?.querySelector(".about-wrap")
            const profile = this.shadowRoot?.querySelector(".about-profile")
            const skill = this.shadowRoot?.querySelector(".about-skills")
            // if (window.pageYOffset > container?.getBoundingClientRect().top!-200) {
            //     skill?.classList.remove("none")
            //     profile?.classList.remove("none")
            // }

            // const value_container = this.shadowRoot?.querySelector(".values-content")
            const core = this.shadowRoot?.querySelectorAll(".core-value")
            // if (window.innerHeight > value_container?.getBoundingClientRect().top!+200) {
            //     core?.forEach(item => {
            //         item.classList.remove("none")
            //     })
            // }

            /* *************** TEST ******* */
            const test = this.shadowRoot!.querySelector(".values-content")
            const rect = test?.getBoundingClientRect();
            var elemTop = rect!.top;
            var elemBottom = rect!.bottom;
            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            
            // Only completely visible elements return true:
            console.log(isVisible);        
            if (isVisible) {
                core?.forEach(item => {
                    item.classList.remove("none")
                })
            }

            const test2 = this.shadowRoot?.querySelector(".about-wrap")
            const rect2 = test2?.getBoundingClientRect();
            var elemTop2 = rect2!.top;
            var elemBottom2 = rect2!.bottom;
            var isVisible2 = (elemTop2 >= 0) && (elemBottom2 <= window.innerHeight);
            if (isVisible2) {
                skill?.classList.remove("none")
                profile?.classList.remove("none")
            }
        })
    }

    static styles = [
        skillStyles
    ];
    
    render() {
        return html`
            <link rel="stylesheet"
                  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                  crossorigin="anonymous"/>

            <section class="section">
                <div class="section-title">
                    <p>About</p>
                </div>
                <div class="values-content">
                    <div class="none core-value flip-in-x" data-animation="flip-in-x">
                        <div class="core-value_icon">
                            <i class="far fa-comments"></i>
                        </div>
                        <div class="core-value-text">
                            <p class="core-value-text_title">??????</p>
                            <p class="core-value-text_content">?????? ????????? ???????????? ??????,</p>
                            <p class="core-value-text_content">???????????? ????????? ???????????????.</p>
                        </div>
                    </div>
                    <div class="none core-value flip-in-x"  data-animation="flip-in-x" data-delay=".2s" style="animation-delay: 0.2s;">
                        <div class="core-value_icon">
                            <i class="fas fa-assistive-listening-systems"></i>
                        </div>
                        <div class="core-value-text">
                            <p class="core-value-text_title">??????</p>
                            <p class="core-value-text_content">???????????? ??? ????????????,</p>
                            <p class="core-value-text_content">????????? ?????? ??? ????????? ??? ???????????????.</p>
                        </div>
                    </div>
                    <div class="none core-value flip-in-x" data-animation="flip-in-x" data-delay=".4s" style="animation-delay: 0.4s;">
                        <div class="core-value_icon">
                            <i class="fas fa-question"></i>
                        </div>
                        <div class="core-value-text">
                            <p class="core-value-text_title">?????????</p>
                            <p class="core-value-text_content">?????? ?????? ???????????? ??????</p>
                            <p class="core-value-text_content">????????? ?????? ?????? ????????????</p>
                            <p class="core-value-text_content">????????? ?????? ????????? ????????? ????????? ?????????.</p>
                        </div>
                    </div>
                    <div class="none core-value flip-in-x" data-animation="flip-in-x" data-delay=".6s" style="animation-delay: 0.6s;">
                        <div class="core-value_icon">
                            <i class="fas fa-tree"></i>
                        </div>
                        <div class="core-value-text">
                            <p class="core-value-text_title">?????????</p>
                            <p class="core-value-text_content">??? ?????? ????????? ???????????? ??????,</p>
                            <p class="core-value-text_content">????????? ?????? ????????? ?????? ?????????.</p>
                        </div>
                    </div>
                </div>
                <div class="about-wrap">
                    <div class="none about-profile slide-left" data-animation="slide-in-left">
                        <div class="profile-image">
                            <img class="profile_img" src="/static/images/profile2.jpg">
                        </div>
                        <div class="profile-text">
                            <p class="profile-text_title">Junior Backend Devloper <span class="highlight">?????????</span> ?????????.</p>
                            <p class="profile-text_content">NodeJS, Typescript??? ???????????????,</p>
                            <p class="profile-text_content">Infra ???????????? ????????? ????????????.</p>
                        </div>
                    </div>
                    <div class="none about-skills slide-right" data-animation="slide-in-right">
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/typescript.png">
                                <img class="skill-content_img" src="/static/images/javascript.png">
                                <img class="skill-content_img" src="/static/images/nodejs.png">
                            </div>
                            <div class="skill-content-descripition">
                                <p class="skill-content_text">TS, JS??? SSR, REST API ??? SPA??? ????????? ??? ??? ????????????.</p>
                                <p class="skill-content_text">?????? ??? Interface??? ?????? ??????, DOM ?????? ??? ???????????? ?????? ??? ????????????.</p>
                            </div>
                        </div>
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/python.png">
                                <img class="skill-content_img" src="/static/images/django.png">
                                <img class="skill-content_img" src="/static/images/flask.png">
                            </div>
                            <div class="skill-content-descripition">
                                <p class="skill-content_text">Python??? ?????? ????????? ??????, Django CBV, FBV??? ?????? ????????? ???????????????.</p>
                                <p class="skill-content_text">Flask ?????????????????? ???????????? ????????? SSR ????????? ???????????????.</p>
                            </div>
                        </div>
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/mariadb.png">
                                <img class="skill-content_img" src="/static/images/mongodb.png">
                            </div>
                            <div class="skill-content-descripition">
                                <p class="skill-content_text">RDBMS??? DB??????, ????????? ?????? ??? ??? ??????, Procedure ??? Trigger??? ??? ??? ????????????.</p>
                                <p class="skill-content_text">NoSQL??? ????????? ??????, ??? DB??? ???????????? ???????????? ?????? ??? ??? ????????????.</p>
                            </div>
                        </div>
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/html.png">
                                <img class="skill-content_img" src="/static/images/css.png">
                            </div>
                            <div class="skill-content-descripition">
                                <p class="skill-content_text">HTML ???????????? ??? ??? ?????????, Flexbox, Grid??? Layout??? ?????? ??? ??? ????????????.</p>
                                <p class="skill-content_text">CSS ???????????? ???????????? ??????, Sass, Scss??? ????????? ??? ????????????.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}