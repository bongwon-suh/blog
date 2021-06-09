import { css } from 'lit';
export const lifeStyles = css`
:host {
    width: 100%;
}
.life {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3.125rem 0;
    width: 100%;
    height: 50rem;
    clip-path: polygon(0 0, 100% 6.25rem, 100% 100%, 0 calc(100% - 6.25rem));
    background: #f6f6f6;
    padding-bottom: 15.63rem;
}
.life-title {
    margin-top: 5rem;
    width: 18.75rem;
    text-align: center;
    font-size: 1.5rem;
    color: #919191;
    font-weight: 600;
    letter-spacing: .063em;
}
.life_img {
    width: 50rem;
}
@media screen and (min-width:768px) and (max-width: 1023px) {
    .life {
        padding-bottom: 120px;
        margin: 2.5rem 0px;
    }
    .life-title {
    }
    .life_img {
        width: 700px;
    }
}
@media screen and (max-width:767px) {
    .life {
        height: 570px;
        padding-bottom: 0;
    }
    .life-title {
    }
    .life_img {
        width: 340px;
    }
}
`;