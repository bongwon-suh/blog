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
    static styles = css`
        :host {
            color: green;
        }
        .signup {
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
        .signup_title {
            margin-bottom: 45px;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 1em;
            text-transform: uppercase;
            color: #e8716d;
            letter-spacing: .1rem;
        }


        .signup-form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .signup-form-field {
            margin: 20px 10px;
        }
        .signup-form-field__input {
            width: 200px;
            border: 0;
            border-bottom: 1px solid gray;
        }
            
        .signup-form-field__input:focus {
            outline: none;
            border-bottom: 1px solid #e8716d;;
        }

        .signup-form-field__button {
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
 
