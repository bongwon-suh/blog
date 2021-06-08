/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

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
                <div class="life-image">
                    <img class="life_img" src="/static/images/life.png">
                </div>
            </section>
        `
    }
}