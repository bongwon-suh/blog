/**
 * @file write
 * @todo will be change
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';
import { until } from 'lit/directives/until';
import { ImageFile } from '../lib/interfaces';
import { writeStyles } from './styles/write'

@customElement('write-container')
export default class Write extends AbstractView {
    constructor() {
        super();
        this.setTitle("Write");
        this.setProperties();
        console.log(this.items)
    }

    @property( { type: Array })
    items: ImageFile[] = [];

    protected setProperties = () => {
        this.getImageList()
        .then((result)=>{
            this.items = result
        })
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
        console.log(this.items)
        const input_file = this.shadowRoot!.getElementById("FileInput") as HTMLInputElement;
        console.log(input_file);
        const form_data = new FormData();
        form_data.append('img', input_file.files![0])

        const xhr = new XMLHttpRequest;
        xhr.onload = () => {
            if(xhr.status == 200 || xhr.status == 201) {
                console.log(xhr.responseText);
                this.setProperties();
            }
            else {
                console.error(xhr.responseText);
            }
        }
        xhr.open('POST', '/upload');
        xhr.send(form_data);
    }

    protected getImageList(): Promise<ImageFile[]> {
        return new Promise( (resolve, reject)=>{
            const msg = {
                "url": '/upload/imagelist',
                "data": {}
            };
            utils.sendAPI('GET', msg)
            .then((result)=>{
                console.log(result);
                resolve(result);
            })
            .catch((err)=>{
                console.log(err);
                reject(err);
            })
        })
    }

    /**
     * make Stylesheet
     */
    static styles = [
        writeStyles
    ]

    /**
     * make Template
     */
    value: number = 1;
    render() {
        return html`
                    <my-navbar></my-navbar>
                    <form class="write-form">
                        <div class="form-field">
                            <input id="title" class="form-field_input" type="text" placeholder="title" required />
                            <input id="description" class="form-field_input" type="text" placeholder="description" required />
                            <input id="period" class="form-field_input" type="text" placeholder="dev period" required />
                            <input id="tools" class="form-field_input" type="text" placeholder="dev tools" required />
                            <select id="category" class="form-field_input">
                                <option value="Project">Project</option>
                                <option value="Blog">Blog</option>
                            </select>
                        </div>
                        <div class="form-field-row">
                            <textarea id="" class="form-field_textarea"></textarea>
                            <div id="preview" class="form-field_textarea">test</div>
                        </div>
                        <div class="form-field">
                        </div>
                    </form>
                    <input id="FileInput" type="file">
                    <div id="submit" class="form-field_button" @click=${this.upload}>업로드</div>
                    <div>
                        ${this.items.map((item: ImageFile)=>html`
                            <div class="card">
                                <h2>${item.size}</h2>
                                <img class="" src="/uploads/${item.filename}" style="width:100px;">
                            </div>`
                        )}
                    </div>
                `
    }
}