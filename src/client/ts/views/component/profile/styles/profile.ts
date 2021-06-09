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
    margin-right: 2rem;
}
.profile-text_title {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.25rem;
}
.profile-text_subtitle {
    font-size: 1.75rem;
    line-height: 42px;
    width: 31.25rem;
    color: #ABABAB;
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
@media screen and (min-width:768px) and (max-width: 1023px) {
    .profile {
    }
    .profile-text {
        margin-right: 1rem;
        margin-left: 1.2rem;
    }
    .profile-text_title {
        font-size: 1.5rem;
    }
    .profile-text_subtitle {
        font-size: 1.2rem;
        line-height: 30px;
    }
    .profile-text_button {
        font-size: 1rem;
    }
    .profile-image {
        padding: 2rem 2rem 3rem 2rem;
        margin-right: 1rem;
    }
    .profile-image_img {
        width: 10rem;
    }
}
@media screen and (max-width:767px) { 
    .profile {
        flex-direction: column-reverse;
        align-items: center;
        padding: 0 0px 9.375rem;
    }
    .profile-text {
        align-items: center;
        margin-top: 4rem;
        margin-right: 0;
        text-align: center;
    }
    .profile-text_title {
        width: 100vw;
        font-size: 1.5rem;
        line-height: 36px;
    }
    .profile-text_subtitle {
        width: 100vw;
        font-size: 1.25rem;
        line-height: 28px;
    }
    .profile-text_button {
    }
    .profile-image {
    }
    .profile-image_img {
        width: 16em;
    }
}
`;