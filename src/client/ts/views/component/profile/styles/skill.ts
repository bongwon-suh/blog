
import { css } from 'lit';
export const skillStyles = css`
:host {
    width: 100vw;
}
.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3.125rem 0;
}
.section-title {
    font-size: 1.5rem;
    color: #919191;
    font-weight: 600;
    letter-spacing: .063em;
    width: 18.75rem;
    text-align: center;
}
.values-content {
    display: flex;
    justify-content: space-between;
}
.core {
    background: #f6f6f6;
    border-radius: 50%;
    font-size: 1.5rem;
    height: 12.5rem;
    width: 12.5rem;
    text-align: center;
    margin: 4rem;
}

.about-wrap {
    display: flex;
    align-items: center;
}
.about-profile {
    margin-right: 30px;
    align-items: center;
    display: flex;
    flex-direction: column;
}
.profile-img {
    width: 300px;
    border-radius: 20px;
}
.skill-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
.skill-content-image {
    width: 12.5rem;
    margin: 1.875rem 4.688rem 1.875rem 0;
}
.skill-content_img {
    width: 3.75rem;
}
.skill-content-descripition {
    width: 31.25rem;
    margin-left: 1.875rem 0 1.875rem; 4.688rem;
}
.skill-content_text {
    width: 31.25rem;
}
@media screen and (min-width:768px) and (max-width: 1023px) {
    .section {
        margin: 0 0 3rem 0;
    }
    .section-title {
    }
    .skill-content {
    }
    .skill-content-image {
        margin: 1.5rem 3rem 1.5rem 0px;
    }
    .skill-content_img {
    }
    .skill-content-descripition {
        width: 21.25rem;
    }
}
@media screen and (max-width:767px) {
    .section {
    }
    .section-title {
    }
    .skill-content {
        flex-direction: column;
        margin: 20px auto; 
    }
    .skill-content-image {
        width: auto;
        margin: auto;
    }
    .skill-content_img {
    }
    .skill-content-descripition {
        text-align: center;
        width: auto;
        margin-top: 10px;
        line-height: 30px;
    }
    .skill-content_text {
        width: auto;
    }
}
`;
