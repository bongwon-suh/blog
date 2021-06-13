import { css } from 'lit';
export const projectStyles = css`
.top {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #222222;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
    padding: 100px 0 150px 0;
}
.top-text {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
}
.top-text_title {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: white;
    margin-bottom: 20px;
}
.top-text_subtitle {
    font-size: 28px;
    width: 500px;
    color: #ABABAB;
    line-height: initial;
}
.card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card {
    display: flex;
    margin: 100px 0;
}
.card-image {
    padding: 40px;
    background: #f6f6f6;
    border-radius: 5px;
    margin-right: 25px;
}
.card-image_img {
    margin-bottom: -100px;
    width: 40vw;
    box-shadow: 0 1px 5px rgb(0 0 0 / 5%), 0 5px 30px rgb(0 0 0 / 20%);
    border-radius: 3px;
}
.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
    margin-left: 25px;
}
.card-title {
    font-size: 3rem;
    font-weight: 700;
    color: #212529;
    margin: 10px;
    word-break: break-word;
}
.card-content {
    font-size: 1.5rem;
    color: #495057;
    margin: 10px;
    line-height: 2.2rem;
}
.card-footer {
    font-size: 1rem;
    color: #868E96;
    margin: 10px;
}
.period {
    margin: 10px 0;
}
.tools {
    margin: 10px 0;
}
@media screen and (min-width:768px) and (max-width: 1023px) {
    .top-text {
        margin-right: 0;
    }
    .top-text_title {
        font-size: 28px;
    }
    .top-text_subtitle {
        font-size:20px;
        line-height: 28px;
    }
    .card-container {
    }
    .card {
    }
    .card-image {
        margin: 0 20px;
        padding: 25px;
    }
    .card-image_img {
    }
    .card-body {
        width: auto;
        word-break: break-word;
        margin: 0 20px;
    }
    .card-title {
        font-size: 2rem;
    }
    .card-content {
    }
    .card-footer {
    }
    .period {
    }
    .tools {
    }
}
@media screen and (max-width:767px) {
    .top-text {
        margin-right: 0;
    }
    .top-text_title {
        font-size: 28px;
    }
    .top-text_subtitle {
        font-size: 20px;
        width: auto;
        margin: 0 20px;
        text-align: center;
        line-height: 26px;
    }
    .card-container {
    }
    .card {
        flex-direction: column;
        margin: 40px 0px;
        box-shadow: rgb(0 0 0 / 5%) 0px 1px 5px, rgb(0 0 0 / 20%) 0px 5px 30px;
    }
    .card-image {
        padding: 0px;
        background: none;
        margin: auto;
    }
    .card-image_img {
        width: 90vw;
        margin: 0;
        box-shadow: none;
    }
    .card-body {
        word-break: break-word;
        margin: auto;
        text-align: center;
    }
    .card-title {
        font-size: 28px;
        margin: 5px;
    }
    .card-content {
        margin: 5px;
    }
    .card-footer {
        margin: 5px;
    }
    .period {
    }
    .tools {
    }
}
`