import  AbstractView from './AbstractView';

export default class Setting extends AbstractView {
    constructor() {
        super();
        this.setTitle("Setting");
    }
    async getHTML() {
        return `
            <h1>setting</h1>
        `;
    }
}
