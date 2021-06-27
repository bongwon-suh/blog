
import { css } from 'lit';
export const skillStyles = css`
:host {
    height: 1250px;
}

.highlight {
    color: #e31b6d;
}

.none {
    display: none;
}

.flip-in-x {
    animation: flipInX 0.75s ease both;
}

.slide-left {
    animation: slideInLeft 0.75s ease both;
}

.slide-right {
    animation: slideInRight 0.75s ease both;
}
.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3.125rem 0;
}

.section-title {
    font-size: 36px;
    color: #919191;
    font-weight: 600;
    letter-spacing: .063em;
    width: 18.75rem;
    text-align: center;
}

.values-content {
    display: flex;
    align-items: flex-start;
    margin-bottom: 70px;
}

.core-value {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 25px;
}

.core-value_icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 36px;
    background: #04C2C9;
    border-radius: 50%;
    height: 120px;
    width: 120px;
    text-align: center;
    margin: 50px 80px 10px 80px;
}

.core-value-text {
    text-align: center;
}

.core-value-text_title {
    font-size: 22px;
    font-weight: bold;
}

.about-wrap {
    display: flex;
    align-items: center;
}

.about-profile {
    margin-right: 100px;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.profile-image {
    padding: 5px;
    background: #04C2C9;
    border-radius: 10px;
}

.profile_img {
    width: 320px;
    border-radius: 10px;
}

.profile-text {
    text-align: center;
}

.profile-text_title {
    font-size: 18px;
    font-weight: 600;
}

.skill-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
}

.skill-content-image {
    width: 165px;
    margin: 30px 50px 30px 10px;
    text-align: center;
}

.skill-content_img {
    width: 50px;
}

.skill-content-descripition {
    margin-left: 1.875rem 0 1.875rem; 4.688rem;
}

.skill-content_text {
    width: 600px;
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

@keyframes flipInX {
    0% {
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
        -webkit-transform: perspective(400px) rotateY(90deg);
        transform: perspective(400px) rotateY(90deg);
    }

    40% {
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateY(-20deg);
        transform: perspective(400px) rotateY(-20deg);
    }

    60% {
        opacity: 1;
        -webkit-transform: perspective(400px) rotateY(10deg);
        transform: perspective(400px) rotateY(10deg);
    }

    80% {
        -webkit-transform: perspective(400px) rotateY(-5deg);
        transform: perspective(400px) rotateY(5deg);
    }

    100% {
        opacity: 1;
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
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
