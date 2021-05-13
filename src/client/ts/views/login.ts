/**
 * @file Login
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
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

    static styles = css`
        :host {
            color: green;
        }
        .login {
            font-family: 'Montserrat', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 430px;
            height: 420px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            border-radius: 5px;
            position: absolute;
            top: 100px;
            left: 40%;
        }
        .login_title {
            margin-bottom: 45px;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 1em;
            text-transform: uppercase;
            color: #e8716d;
            letter-spacing: .1rem;
        }
        .login-form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .login-form-field {
            margin: 20px 10px;
        }
        .login-form-field__input {
            width: 200px;
            border: 0;
            border-bottom: 1px solid gray;
        }
        .login-form-field__input:focus {
            outline: none;
            border-bottom: 1px solid #e8716d;
        }
        .login-form-field__button {
            justify-content: flex-end;
            background: #e8716d;
            width: 100px;
            height: 30px;
            border-radius: 5px;
            color: white;
            text-align: center;
            padding-top:10px
        }
    `;
    
    /* 
    * make Template
    */
    render() {
        return html`
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
