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
        window.onscroll = () =>{
            const container = this.shadowRoot?.querySelector(".about-profile")
            const image = this.shadowRoot?.querySelector(".profile-img")
            const skill = this.shadowRoot?.querySelector(".about-skills")
            console.log(container?.getBoundingClientRect().top!)
            console.log(container?.getBoundingClientRect().top!+300)
            if (window.pageYOffset > container?.getBoundingClientRect().top!-300) {
                skill?.classList.remove("none")
                image?.classList.remove("none")
            }
        }
    }

    static styles = [
        skillStyles
    ];
    
    render() {
        return html`
            <section class="section">
                <div class="section-title">
                    <p>About</p>
                </div>
                <div class="values-content">
                    <div class="core"><p>Lorem</p></div>
                    <div class="core">Lorem</div>
                    <div class="core">Lorem</div>
                </div>
                <div class="about-wrap">
                    <div class="about-profile" data-animation="slide-in-left">
                        <img class="none profile-img slide-left" src="/static/images/profile2.jpg">
                        <div class="none profile-text">
                            <p>I'm a junior backend developer in South Korea</p>
                            <p>I'm a junior backend developer in South Korea</p>
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
                                <span class="skill-content_text">Lorem Ipsum is simply dummy text of the printing</span>
                            </div>
                        </div>
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/python.png">
                                <img class="skill-content_img" src="/static/images/django.png">
                                <img class="skill-content_img" src="/static/images/flask.png">
                            </div>
                            <div class="skill-content-descripition">
                                <span class="skill-content_text">Lorem Ipsum is simply dummy text of the printing</span>
                            </div>
                        </div>
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/mariadb.png">
                                <img class="skill-content_img" src="/static/images/mongodb.png">
                            </div>
                            <div class="skill-content-descripition">
                                <span class="skill-content_text">Lorem Ipsum is simply dummy text of the printing</span>
                            </div>
                        </div>
                        <div class="skill-content">
                            <div class="skill-content-image">
                                <img class="skill-content_img" src="/static/images/html.png">
                                <img class="skill-content_img" src="/static/images/css.png">
                            </div>
                            <div class="skill-content-descripition">
                                <span class="skill-content_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}