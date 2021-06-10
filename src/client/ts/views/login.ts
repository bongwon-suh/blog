/**
 * @file Login
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import { loginStyles } from './styles/login'
import * as utils from '../lib/utils';

@customElement('auth-login')
export default class Login extends AbstractView {
    constructor() {
        super();
        this.setTitle("Login");
    }

    /**
     * Protected Metod
     * @param e MouseEvent
     */

    protected submitLogin = (e: Event)=>{
        const user_id = this.shadowRoot!.getElementById('user_id') as HTMLInputElement
        const password = this.shadowRoot!.getElementById('password') as HTMLInputElement

        const msg = {
            "url": '/auth/login',
            "data": {
                "user_id": user_id.value,
                "password": password.value
            }
        };

        utils.sendAPI('POST', msg)
        .then( (result)=>{
            if (result.status != 200) {
                return window.alert(result.responseText);
            } else {
                window.alert(result.responseText);
                window.location.replace('/');
            }
        })
        .catch((err)=>{
            window.alert(err.responseText);
        })
    }

    /**
     * make Stylesheet
     */

     static styles = [
        loginStyles
    ];
    
    /* 
    * make Template
    */
    render() {
        return html`
                <my-navbar></my-navbar>
                <div class="login">
                    <h2 class="login_title">Login</h2>
                    <form class="login-form">
                        <div class="login-form-field">
                            <input id="user_id" type="text" class="login-form-field__input" placeholder="ID" required />
                        </div>
                        <div class="login-form-field">
                            <input id="password" type="password" class="login-form-field__input" placeholder="Password" required />
                        </div>
                        <div class="login-form-field">
                            <div id="login" class="login-form-field__button" @click=${this.submitLogin}>Login</div>
                        </div>
                    </form>
                </div>
                `
    }
}
