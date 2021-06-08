/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';
import { valueStyles } from './styles/value'

@customElement('value-section')
class ValueSection extends LitElement {
    constructor() {
        super();
    }

    static styles = [
        valueStyles
    ];
    
    render() {
        return html`
            <section class="section">
                <div class="section-title">
                    <p>CORE VALUES</p>
                </div>
                <div class="values-content">
                    <div class="core"><p>Lorem</p></div>
                    <div class="core">Lorem</div>
                    <div class="core">Lorem</div>
                </div>
            </section>
        `
    }
}