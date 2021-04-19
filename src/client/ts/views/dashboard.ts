import  AbstractView from './AbstractView';

export default class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }
    async getHTML() {
        return `
            <h1>dashboard</h1>
        `;
    }
}
