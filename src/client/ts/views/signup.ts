/**
 * @file Signup
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';
import { signupStyles } from './styles/signup';

@customElement('auth-signup')
export default class SignUp extends AbstractView {
    constructor() {
        super();
        this.setTitle("SignUp");
    }
 
    /**
     * Protected Metod
     * @param e MouseEvent
     */
 
    protected submitSignUp = (e: Event)=>{
        const user_id = this.shadowRoot!.getElementById('user_id') as HTMLInputElement;
        const password = this.shadowRoot!.getElementById('password') as HTMLInputElement;
        const confirm_password = this.shadowRoot!.getElementById('confirm_password') as HTMLInputElement;

        if (password.value != confirm_password.value) return window.alert("비밀번호가 일치하지 않습니다.");

        const msg = {
            "url": '/auth/signup',
            "data": {
                "user_id": user_id.value,
                "password": password.value,
                "confirm_password": confirm_password.value
            }
        };

        utils.sendAPI('POST', msg)
        .then( (result)=>{
            console.log(result);
            if (result.status != 200) {
                return window.alert(result.responseText);
            } else {
                window.alert(result.responseText);
                window.location.replace('/login');
            }
        })
        .catch((err)=>{
            console.log(err)
            window.alert(err.responseText);
        })
    }

    /**
     * make Stylesheet
     */
    static styles = [
        signupStyles
    ];
     
    /* 
    * make Template
    */
    render() {
       return html`
                    <my-navbar></my-navbar>
                    <div class="signup">
                        <h2 class="signup_title">Sign Up</h2>
                        <form class="signup-form">
                            <div class="signup-form-field">
                                <input id="user_id" name="user_id" type="text" class="signup-form-field__input" placeholder="ID" required />
                            </div>
                            <div class="signup-form-field">
                                <input id="password" name="user_pwd" type="password" class="signup-form-field__input" placeholder="Password" required />
                            </div>
                            <div class="signup-form-field">
                                <input id="confirm_password" type="password" class="signup-form-field__input" placeholder="Confirm Password" required />
                            </div>
                            <div class="signup-form-field">
                                <div id="signup" class="signup-form-field__button" @click=${this.submitSignUp}>Sign up</div>
                            </div>
                        </form>
                    </div>
                   `
    }
}
 
