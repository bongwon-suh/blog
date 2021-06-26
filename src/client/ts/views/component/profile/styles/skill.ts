
import { css } from 'lit';
export const skillStyles = css`
:host {
    width: 100vw;
    height: 80vh;
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
    background: rgb(246, 246, 246);
    border-radius: 50%;
    font-size: 1.5rem;
    height: 150px;
    width: 150px;
    text-align: center;
    margin: 75px 120px 100px 120px;
}

.about-wrap {
    display: flex;
    align-items: center;
}
.about-profile {
    margin-right: 75px;
    align-items: center;
    display: flex;
}
.none {
    display: none;
}
.profile-img {
    width: 250px;
    border-radius: 20px;
}
.slide-left {
    animation: slideInLeft 0.75s ease both;
}
.slide-right {
    animation: slideInRight 0.75s ease both;
}
.about-skills {

}
.skill-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
.skill-content-image {
    width: 165px;
    margin: 30px 10px 30px 10px;
    text-align: center;
}
.skill-content_img {
    width: 50px;
}
.skill-content-descripition {
    width: 31.25rem;
    margin-left: 1.875rem 0 1.875rem; 4.688rem;
}
.skill-content_text {
    width: 31.25rem;
}

@keyframes slideInLeft {
    0% {
        opacity: 0;
        transform: translateX(-300px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    0% {
        opacity: 0;
        transform: translateX(300px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
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
