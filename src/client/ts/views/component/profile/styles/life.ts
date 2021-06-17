import { css } from 'lit';
export const lifeStyles = css`
:host {
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizeing: border-box;
}
.life {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
.timeline {
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}
.timeline ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.timeline ul li {
    padding: 20px;
    background-color: #1e1f22;
    color: white;
    border-radius: 10px;
    margin-bottom: 20px;
}

.timeline ul li:last-child{
    margin-bottom: 0;
}

.timeline-content h1 {
    line-height: 30px;
    margin-bottom: 10px;
}

.timeline-content p {
    line-height: 30px;
    font-weight: 300;

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
    .timeline ul li {
        width: 50%;
        margin-bottom: 50px;
        position: relative;
    }
    .timeline ul li:nth-child(odd) {
        float: left;
    }
    .timeline ul li:nth-child(even) {
        float: right;
    }
}
`;