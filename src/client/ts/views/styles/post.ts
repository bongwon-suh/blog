import { css } from 'lit';
export const postStyles = css`
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
    flex-wrap: wrap;
}
.card {
    margin: 5vw auto;
}
.card-image {
}
.card-image_img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: block;
    width: 40vw;
}
.card-body {
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #f6f6f6;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 40vh;
    width: 40vw;
}
.card-title{
    word-break: break-word;
    color: rgb(25, 26, 29);
    font-size: 2rem;
    padding: 2% 0px;
    margin: 0px 10%;
    line-height: normal;
}
.card-content {
    color: #191a1d;
    font-size: 1.5rem;
    padding: 2% 0;
}
.card-footer {
    color: #5e5e5e;
    font-size: 1rem;
    padding: 2% 0;
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
    .card-title{
        font-size: 24px;
    }
    .card-content {
        font-size: 22px;
    }
    .card-footer {
        font-size: 20px;
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
        flex-direction: column;
    }
    .card {
        margin: 40px auto;
    }
    .card-image {
    }
    .card-image_img {
        width: 90vw;
    }
    .card-body {
        width: 90vw;
        height: 180px;
    }
    .card-title{
        font-size: 28px;
    }
    .card-content {
        font-size: 26px;
    }
    .card-footer {
        font-size: 20px;
    }
}
`