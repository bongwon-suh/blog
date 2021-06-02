/**
 * @file write
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

@customElement('write-container')
export default class Write extends AbstractView {
    constructor() {
        super();
        this.setTitle("Write");
    }

    protected submit = (e: Event)=>{
        const category = this.shadowRoot!.getElementById('Category') as HTMLSelectElement;
        const title = this.shadowRoot!.getElementById('Title') as HTMLInputElement;
        const content = this.shadowRoot!.getElementById('Content') as HTMLTextAreaElement;
        let url = '';

        switch(category.value) {
            case 'Project':
                url = '/project'
                break;

            case 'Blog':
                url = '/blog'
                break;
        }

        const msg = {
            "url": url,
            "data": {
                "title": title.value,
                "content": content.value
            }
        };

        utils.sendAPI('POST', msg)
        .then((result)=>{
            if(result.status != 200) {
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

    protected upload = (e: Event)=>{
        const input_file = this.shadowRoot!.getElementById("FileInput") as HTMLInputElement;
        console.log(input_file);
        const form_data = new FormData();
        form_data.append('img', input_file.files![0])

        const xhr = new XMLHttpRequest;
        xhr.onload = () => {
            if(xhr.status == 200 || xhr.status == 201) {
                console.log(xhr.responseText);
            }
            else {
                console.error(xhr.responseText);
            }
        }
        xhr.open('POST', '/upload');
        xhr.send(form_data);
    }

    /**
     * make Stylesheet
     */
    static styles = css`
        :host {
            color: green;
        }
    `;

    /**
     * make Template
     */
    render() {
        return html`
                    <my-navbar></my-navbar>
                    <form class="write-form">
                        <div class="form-field">
                            <select id="Category" class="form-field_select">
                                <option value="Project">Project</option>
                                <option value="Blog">Blog</option>
                            </select>
                        </div>
                        <div class="form-field">
                            <input id="Title" class="form-field_input" type="text" placeholder="title" required />
                        </div>
                        <div class="form-field">
                            <textarea id="Content" class="form-field_textarea"></textarea>
                        </div>
                        <div class="form-field">
                            <div id="submit" class="form-field_button" @click=${this.submit}>Login</div>
                        </div>
                    </form>
                    <input id="FileInput" type="file">
                    <div id="submit" class="form-field_button" @click=${this.upload}>업로드</div>
                `
    }
}
