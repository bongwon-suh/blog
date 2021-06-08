import { css } from 'lit';
export const profileStyles = css`
:host {
    width: 100%;
}
.profile {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #222222;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6.25rem));
    padding: 6.25rem 0 9.375rem 0;
}
.profile-text {
    display: flex;
    flex-direction: column;
    margin-right: 3.125rem;
}
.profile-text_title {
    font-size: 2.25rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.25rem;
}
.profile-text_subtitle {
    font-size: 1.75rem;
    width: 31.25rem;
    color: #ABABAB;
    line-height: initial;
}
.profile-text_button {
    text-decoration: none;
    color: white;
    background: #4b6cc1;
    width: fit-content;
    font-size: 1.125rem;
    padding: 0.625rem 1.25rem;
    border-radius: 10px;
    margin-top: 1.875rem;
}
.profile-image {
    padding: 2.5rem;
    background: #121316;
    border-radius: 5px;
}
.profile-image_img {
    width: 18.75rem;
    border-radius: 3px;
    margin-bottom: -5rem;
}
`;