/**
 * @file Signup
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

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
        const user_id = document.getElementById('user_id') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const confirm_password = document.getElementById('confirm_password') as HTMLInputElement;

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
            if (result.fail) {
                return window.alert(result.msg);
            } else {
                window.alert(result.msg);
                window.location.replace('/');
            }
        })
    }

    /**
     * make Stylesheet
     */
    static styles = css`
        :host {
            color: green;
        }
    `;
     
    /* 
    * make Template
    */
    render() {
       return html `
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
 
