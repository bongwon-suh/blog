import { css } from 'lit';
export const timelineStyles = css`
:host {
    width: 100%;
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

.timeline {
    height: 2300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
    width: 100%;
    clip-path: polygon(0 0, 100% 6.25rem, 100% 100%, 0 calc(100% - 6.25rem));
    background: #f6f6f6;
    padding-bottom: 50px;
}

.timeline-title {
    margin-top: 5rem;
    width: 18.75rem;
    text-align: center;
    font-size: 1.5rem;
    color: #919191;
    font-weight: 600;
    letter-spacing: .063em;
}

.timeline_img {
    width: 50rem;
}

.timeline-body {
    max-width: 1080px;
    margin: 10px auto 50px auto;
    padding: 0 20px;
    position: relative;
}

.timeline-body .center-line {
    position: absolute;
    height: 100%;
    width: 4px;
    background: #919191;
    left: 50%;
    top: 25px;
    transform: translateX(-50%);
}

.timeline-body .row {
    display: flex;
    color: white
}

.timeline-body .row-1 {
    justify-content: flex-start;
    margin-right: 100px;
    margin-bottom: 50px;
}

.timeline-body .row-2 {
    justify-content: flex-end;
    margin-left: 100px;
    margin-bottom: 50px;
}

.timeline-body .row section {
    background: #ABABAB;
    border-radius: 5px;
    width: calc(50% - 40px);
    padding: 20px;
    position: relative;
}

.timeline-body .row section::before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: #ABABAB;
    top: 28px;
    transform: rotate(45deg);
}

.row-1 section::before {
    right: -7px;
}

.row-2 section::before {
    left: -7px;
}

.row section .icon,
.center-line .scroll-icon {
    position: absolute;
    background: #f2f2f2;
    height: 20px;
    width: 20px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ff7979;
    font-size: 17px;
    box-shadow: 0 0 0 4px #919191, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05);
}

.center-line .scroll-icon {
    bottom: 0px;
    left: 50%;
    font-size: 25px;
    transform: translateX(-50%);
}

.row-1 section .icon {
    top: 25px;
    right: -60px;
}

.row-2 section .icon {
    top: 25px;
    left: -60px;
}

.row section .details,
.row section .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.row section .details .title {
    font-size: 22px;
    font-weight: 600;
}

.row section .content {
    display: flex;
    align-items: center;
}

.row section img {
    margin: 10px 15px 17px 0;
    border-radius: 10px;
}

.row section p {
    margin-top: 10px;
    line-height: 25px;
}

.row section .bottom a {
    text-decoration: none;
    background: #4b6cc1;
    color: #fff;
    padding: 7px 15px;
    border-radius: 5px;
    /* font-size: 17px; */
    font-weight: 400;
    transition: all 0.3s ease;
}

.row section .bottom a:hover {
    transform: scale(0.97);
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
    .timeline {
        padding-bottom: 130px;
        margin: 2.5rem 0px;
    }

    .timeline-title {
    }

    .timeline_img {
        width: 700px;
    }

    .timeline-body .center-line {
        left: 40px;
        top: 55px;
    }

    .timeline-body .row {
        margin: 30px 0 3px 60px;
    }

    .timeline-body .row section {
        width: 100%;
    }

    .row-1 section::before {
        left: -7px;
    }

    .row-1 section .icon {
        left: -50px;
    }
    .row-2 section .icon {
        left: -50px;
    }
}
@media screen and (max-width:767px) {
    .timeline {
        padding-bottom: 130px;
        margin: 2.5rem 0px;
    }
    
    .timeline-body .center-line {
        left: 40px;
        top: 55px;
    }

    .timeline-body .row {
        margin: 30px 0 3px 60px;
    }

    .timeline-body .row section {
        width: 100%;
    }

    .row-1 section::before {
        left: -7px;
    }

    .row-1 section .icon {
        left: -50px;
    }
    .row-2 section .icon {
        left: -50px;
    }
}
`;