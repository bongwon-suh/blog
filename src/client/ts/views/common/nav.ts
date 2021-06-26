import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';
import { until } from 'lit/directives/until';
import * as utils from '../../lib/utils';
import { User } from '../../lib/interfaces';

@customElement('my-navbar')
class Navbar extends LitElement {
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
    :host {
        width: 100%;
    }    
    .nav {
        display: flex;
        align-items: center;
        justify-content: center;
            background: rgb(34, 34, 34);
            box-shadow: rgb(0 0 0 / 10%) 0px 0px 1rem;
            height: 70px;
        }
        .nav__link {
            color: rgb(238, 238, 238);
            font-weight: 500;
            font-size: 1.2rem;
            text-decoration: none;
            padding: 10px 20px;
            margin: 10px;
        }
        .nav__link:hover{
            border-bottom: #4b6cc1 4px solid;
            margin-bottom: 5px;
        }
    `;

    render() {
        return html`
                    ${until(
                        this.getUserInfo() 
                        .then((result)=>{
                            if(result.id) {
                                return html`
                                        <nav class="nav">
                                            <a href="/" class="nav__link" data-link>Profile</a>
                                            <a href="/post" class="nav__link" data-link>Posts</a>
                                            <a href="/projects" class="nav__link" data-link>Project</a>
                                            <a href="/write" class="nav__link" data-link>글쓰기</a>
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