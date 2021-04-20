import  AbstractView from './AbstractView';
import * as utils from '../lib/utils';

export default class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
        const msg = {
            "url": '/auth/test',
            "data": {
                "id": '123'
            }
        }
        utils.sendAPI('post', msg)
        console.log(utils.sendAPI('post', msg))
    }
    async getHTML() {
        return `
            <h1>dashboard</h1>
        `;
    }
}
