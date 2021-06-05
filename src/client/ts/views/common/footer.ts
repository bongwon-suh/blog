import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';
import { until } from 'lit/directives/until';
import * as utils from '../../lib/utils';
import { User } from '../../lib/interfaces';

@customElement('my-footer')
class Footer extends LitElement {
    protected user: any

    constructor() {
        super();
    }

    static styles = css`
    .contact {
        width: 100%;
        background: #222222;
        clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
        padding: 80px 0 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .section-title {
        font-size: 24px;
        color: #919191;
        font-weight: 600;
        letter-spacing: .063em;
        width: 300px;
        text-align: center;
    }
    .contact-info {
        font-size: 18px;
        color: white
    }
    .contact-info-item {
        display: flex;
        align-items: center;
    }
    .icon {
        margin-right: 10px;
        color: #4b6cc1;
    }
    `;

    render() {
        return html`
                    <link rel="stylesheet"
                        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                        crossorigin="anonymous"/>
                    <section class="contact">
                        <div class="section-title">
                            <p>CONTACT</p>
                        </div>
                        <div class="contact-info">
                            <div class="contact-info-item">
                                <i class="fas fa-envelope icon"></i>
                                <p>abcd@gmail.com</p>
                            </div>
                            <div class="contact-info-item">
                                <i class="fas fa-mobile-alt icon"></i>
                                <p>(+82)10 1234 5678</p>
                            </div>
                            <div class="contact-info-item">
                                <i class="fab fa-github icon"></i>
                                <p>github</p>
                            </div>
                        </div>
                    </section>
                    `
    }
}