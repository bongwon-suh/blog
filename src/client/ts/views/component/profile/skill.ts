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
                            <p class="core-value-text_title">소통</p>
                            <p class="core-value-text_content">나의 의견을 고집하지 않고,</p>
                            <p class="core-value-text_content">상대방의 의견도 존중합니다.</p>
                        </div>
                    </div>
                    <div class="none core-value flip-in-x"  data-animation="flip-in-x" data-delay=".2s" style="animation-delay: 0.2s;">
                        <div class="core-value_icon">
                            <i class="fas fa-assistive-listening-systems"></i>
                        </div>
                        <div class="core-value-text">
                            <p class="core-value-text_title">경청</p>
                            <p class="core-value-text_content">이야기를 잘 들어주며,</p>
                            <p class="core-value-text_content">대화의 논지 및 의미를 잘 파악합니다.</p>
                        </div>
                    </div>
                    <div class="none core-value flip-in-x" data-animation="flip-in-x" data-delay=".4s" style="animation-delay: 0.4s;">
                        <div class="core-value_icon">
                            <i class="fas fa-question"></i>
                        </div>
                        <div class="core-value-text">
                            <p class="core-value-text_title">물음표</p>
                            <p class="core-value-text_content">일에 대해 궁금증을 가져</p>
                            <p class="core-value-text_content">개선할 점에 대해 생각하고</p>
                            <p class="core-value-text_content">문제에 대해 정답을 스스로 찾을려 합니다.</p>
                        </div>
                    </div>
                    <div class="none core-value flip-in-x" data-animation="flip-in-x" data-delay=".6s" style="animation-delay: 0.6s;">
                        <div class="core-value_icon">
                            <i class="fas fa-tree"></i>
                        </div>
                        <div class="core-value-text">
                            <p class="core-value-text_title">큰그림</p>
                            <p class="core-value-text_content">눈 앞의 문제만 보는것이 아닌,</p>
                            <p class="core-value-text_content">미래에 대한 고민도 함께 합니다.</p>
                        </div>
                    </div>
                </div>
                <div class="about-wrap">
                    <div class="none about-profile slide-left" data-animation="slide-in-left">
                        <div class="profile-image">
                            <img class="profile_img" src="/static/images/profile2.jpg">
                        </div>
                        <div class="profile-text">
                            <p class="profile-text_title">Junior Backend Devloper <span class="highlight">서봉원</span> 입니다.</p>
                            <p class="profile-text_content">NodeJS, Typescript에 관심있으며,</p>
                            <p class="profile-text_content">Infra 구성에도 흥미가 있습니다.</p>
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
                                <p class="skill-content_text">TS, JS로 SSR, REST API 및 SPA로 개발을 할 수 있습니다.</p>
                                <p class="skill-content_text">타입 및 Interface에 대한 이해, DOM 조작 및 이벤트를 만들 수 있습니다.</p>
                            </div>
                        </div>
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/python.png">
                                <img class="skill-content_img" src="/static/images/django.png">
                                <img class="skill-content_img" src="/static/images/flask.png">
                            </div>
                            <div class="skill-content-descripition">
                                <p class="skill-content_text">Python의 기본 문법을 숙지, Django CBV, FBV로 기능 구현이 가능합니다.</p>
                                <p class="skill-content_text">Flask 프레임워크는 기본적인 게시판 SSR 개발이 가능합니다.</p>
                            </div>
                        </div>
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/mariadb.png">
                                <img class="skill-content_img" src="/static/images/mongodb.png">
                            </div>
                            <div class="skill-content-descripition">
                                <p class="skill-content_text">RDBMS의 DB구성, 인덱스 적용 할 수 있고, Procedure 및 Trigger를 할 수 있습니다.</p>
                                <p class="skill-content_text">NoSQL의 구조를 이해, 각 DB를 서버단과 연결하여 개발 할 수 있습니다.</p>
                            </div>
                        </div>
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/html.png">
                                <img class="skill-content_img" src="/static/images/css.png">
                            </div>
                            <div class="skill-content-descripition">
                                <p class="skill-content_text">HTML 마크업을 할 수 있으며, Flexbox, Grid로 Layout을 구성 할 수 있습니다.</p>
                                <p class="skill-content_text">CSS 방법론을 이해하고 있고, Sass, Scss를 이용할 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}