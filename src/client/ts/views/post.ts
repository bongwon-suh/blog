import  AbstractView from './AbstractView';

export default class Post extends AbstractView {
    constructor() {
        super();
        this.setTitle("Post");
    }
    async getHTML() {
        return `
            <h1>Post</h1>
        `;
    }
}
