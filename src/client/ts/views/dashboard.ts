import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

@customElement('dashboard-container')
export default class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }
    static styles = css`
        :host {
            color: green;
        }
    `;
    
    @property()
    name?: string = 'world';

    render() {
        return html`
        <p>hello, ${this.name}</p>
            `
    }
}
