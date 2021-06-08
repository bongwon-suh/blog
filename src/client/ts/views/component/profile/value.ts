/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('value-section')
class ValueSection extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        .section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 3.125rem 0;
        }
        .section-title {
            font-size: 1.5rem;
            color: #919191;
            font-weight: 600;
            letter-spacing: .063em;
            width: 18.75rem;
            text-align: center;
        }
        .values-content {
            display: flex;
            justify-content: space-between;
        }
        .core {
            background: #f6f6f6;
            border-radius: 50%;
            font-size: 1.5rem;
            height: 12.5rem;
            width: 12.5rem;
            text-align: center;
            margin: 5rem;
        }
    `;
    
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