/**
 * @file Profile component
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';
import { timelineStyles } from './styles/timeline'

@customElement('timeline-section')
class ProfileSection extends LitElement {
    constructor() {
        super();
        window.addEventListener('scroll', ()=>{
            const container = this.shadowRoot?.querySelectorAll(".card")
            const offsetY = 600;
            for (let i=0; i<container?.length!; i++) {
                if (window.pageYOffset > container![i].getBoundingClientRect().top! + 400+offsetY*i) {
                    container![i].firstElementChild?.classList.remove("none")
                }
            }
        })
    }

    static styles = [
        timelineStyles
    ];
    render() {
        return html`
            <section class="timeline">
                <div class="timeline-title">
                    <p>Time Line</p>
                </div>
                <div class="timeline-body">
                    <div class="center-line"></div>
                    <div class="card row row-1">
                        <section class="none slide-left" data-animation="slide-in-left">
                            <i class="icon"></i>
                            <div class="details">
                                <span class="title">한국폴리텍 2대학 컴퓨터정보과 입학</span>
                                <span>Mar 2013</span>
                            </div>
                            <p>학교에서는 C언어, JAVA의 기초 문법, DB 및 컴퓨터 구조, 자료구조 등 전반적으로 배웠으며, 
                            마이크로프로세서, 마이크로컨트롤러 디바이스에 대해서 공부를 했습니다.
                            프로그래밍을 배울때 안되는 오류를 잡기위해 하루종일 고민하다가 해결했을떄의 쾌감에 매료됐습니다.</p>
                        </section>
                    </div>
                    <div class="card row row-2">
                        <section class="none slide-right" data-animation="slide-in-right">
                            <i class="icon"></i>
                            <div class="details">
                                <span class="title">해군 전산병 입대</span>
                                <span>Dec 2014</span>
                            </div>
                            <div class="content">
                                <img src="/static/images/201412.jpeg" style="height: 350px;">
                                <p>해군 전산병으로 입대하여 서버실에서 군 생활을 했습니다.
                                서버 장비 및 L2~L4스위치 및 라우터, UTM 장비를 관리했습니다.
                                서비스를 관리하다 보니 각 네트워크, 보안 장비의 역할을 배울 수 있었고,
                                각 시스템들이 어떻게 구성이 되어있는지 배울 수 있는 시간이였습니다.
                                관리하던 체계가 어떤 식으로 개발이 진행되어왔는지 문서를 통해 알게됨으로써
                                문서의 중요성을 깨달았습니다.</p>
                            </div>
                        </section>
                    </div>
                    <div class="card row row-1">
                        <section class="none slide-left" data-animation="slide-in-left">
                            <i class="icon"></i>
                            <div class="details">
                                <span class="title">독일 유학</span>
                                <span>Dec 2017</span>
                            </div>
                            <div class="content">
                                <img src="/static/images/201712.jpg" style="width: 400px; margin: 20px auto;">
                            </div>
                            <p>군 복무 당시 한번쯤은 해외에서 생활하고 싶은 생각이 들어
                            전역 후 독일로 워킹홀리데이와 어학연수를 다녀왔습니다.
                            독일에서 생활하면서 새로운 문화들을 경험했고, 꿈이 커져
                            대학 진학을 목표로 독일어 공부와 주말엔 독일 전역을 여행하면서 지냈습니다.
                            코로나라는 예기치 못한 상황으로 귀국을 했지만, 새로운 환경에서 잘 적응하는
                            제 모습을 발견한 순간이였습니다.</p>
                        </section>
                    </div>
                    <div class="card row row-2">
                        <section class="none slide-right" data-animation="slide-in-right">
                            <i class="icon"></i>
                            <div class="details">
                                <span class="title">멀티캠퍼스 융복합 프로젝트 IoT과정</span>
                                <span>Jul 2020</span>
                            </div>
                            <div class="content">
                                <img src="/static/images/202012.jpg" style="width: 400px; margin: 20px auto;">
                            </div>
                            <p>귀국 후에 취업을 위해 멀티캠퍼스에서 주관한 4차 산업혁명
                            선도인력 양성과정 IoT서비스 개발 과정을 수강했습니다. 학원에선
                            파이썬, Django, RDBMS, NoSQL, 아두이노, 라즈베리파이를 공부했습니다.
                            1차 프로젝트에선 Django를 활용한 웹 프로젝트를, 2차 프로젝트에선
                            스마트홈 서비스, 마지막 융복합 프로젝트에선 수어기반 AI 비서 프로젝트를 진했습니다.
                            융복합 프로젝트에서 대상을 수상하는 쾌거를 이뤘습니다.
                            
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        `
    }
}