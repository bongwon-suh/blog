import { html, render, TemplateResult } from 'lit-html';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

export default class Signup extends AbstractView {
    constructor(container: HTMLElement) {
        super(container);
        this.setTitle("Post");
    }

    renderHTML = ()=>{
        return render(this.makeTemplate(), this.container);
    }

    makeTemplate = ()=>{
        return html `
                    <div class="signup">
                        <h2 class="signup_title">Sign Up</h2>
                        <form class="signup-form">
                            <div class="signup-form-field">
                                <input type="text" class="signup-form-field__input" placeholder="Full Name" required />
                            </div>
                            <div class="signup-form-field">
                                <input type="password" class="signup-form-field__input" placeholder="Password" required />
                            </div>
                            <div class="signup-form-field">
                                <input type="password" class="signup-form-field__input" placeholder="Confirm Password" required />
                            </div>
                            <div class="signup-form-field">
                                <input type="submit" class="signup-form-field__button" value="Sign up">
                            </div>
                        </form>
                    </div>
                    `
    }
}
