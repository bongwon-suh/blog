import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';
import { until } from 'lit/directives/until';
import * as utils from '../../lib/utils';
import { User } from '../../lib/interfaces';

@customElement('my-navbar')
class MyHeader extends LitElement {
    protected user: any

    constructor() {
        super();
    }

    protected getUserInfo(): Promise<User> {
        return new Promise ((resolve, reject)=>{
            const msg = {
                "url": '/auth/user-info',
                "data": {}
            }
            utils.sendAPI('GET', msg)
            .then( (result)=>{
                resolve(result)
            })
            .catch( (err)=>{
                reject(err)
            });
        })
    }

    static styles = css`
        
        .nav {
            display: flex;
            justify-content: flex-end;
            width: 100vw;
            background: #222222;
            box-shadow: 0 0 1rem rgba(0,0,0,.1);
        }
        .nav__link {
            padding: 20px 20px 20px 20px;
            color: #eeeeee;
            font-weight: 500;
            text-decoration: none;
        }
        .nav__link:hover{
            background: rgba(255, 255, 255, 0.05);
        }
    `;

    render() {
        return html`
                    ${until(
                        this.getUserInfo()
                        .then((result)=>{
                            if(result.responseText) {
                                return html`
                                        <nav class="nav">
                                            <a href="/" class="nav__link" data-link>Profile</a>
                                            <a href="/post" class="nav__link" data-link>Posts</a>
                                            <a href="/projects" class="nav__link" data-link>Project</a>
                                            <a href="/settings" class="nav__link" data-link>글쓰기</a>
                                        </nav>
                                        `
                            }
                            else {
                                return html`
                                        <nav class="nav">
                                            <a href="/" class="nav__link" data-link>Profile</a>
                                            <a href="/post" class="nav__link" data-link>Posts</a>
                                            <a href="/projects" class="nav__link" data-link>Project</a>
                                        </nav>
                                        `
                            }
                            })
                        )
                    }
                    `
    }
}