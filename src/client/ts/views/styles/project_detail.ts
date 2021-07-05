import { css } from 'lit';
export const projectDetailStyles = css`
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
    width: 1000px;
    color: #ABABAB;
    line-height: initial;
}
.body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`