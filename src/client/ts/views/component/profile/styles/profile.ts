import { css } from 'lit';
export const profileStyles = css`
:host {
    overflow: hidden;
    background: #060e1b;
}
.highlight {
    color: #e31b6d;
}
.profile {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.profile-title {
    color: white;
    font-size: 45px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 70px;
}

.button {
    border: 2px solid rgb(255, 255, 255);
    box-sizing: inherit;
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    padding: 5px 20px;
    transition: all 0.5s ease 0s;
    line-height: 45px;
    margin-top: 30px;
}

.button:hover {
    background: #04C2C9;
}
/******* Background Effcet *******/

@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}

.stars, .twinkling {
  position: absolute;
  width:100%;
  height:100vh;
  display:block;
}

.stars {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  animation:move-twink-back 200s linear infinite;
}
`;