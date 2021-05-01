import { html, render, TemplateResult } from 'lit-html';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

export default class Login extends AbstractView {
    constructor(container: HTMLElement) {
        super(container);
        this.setTitle("Login");
    }

    public submitLogin = (e: Event)=>{
        const user_id = document.getElementById('user_id') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

        const msg = {
            "url": '/auth/login',
            "data": {
                "user_id": user_id.value,
                "password": password.value
            }
        };

        utils.sendAPI('POST', msg)
        .then( (result)=>{
            console.log(result);
            if (result.fail) {
                return window.alert(result.msg);
            } else {
                window.alert(result.msg);
                window.location.replace('/');
            }
        })
    }

    renderHTML = ()=>{
        return render(this.makeTemplate(), this.container);
    }

    makeTemplate = ()=>{
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
