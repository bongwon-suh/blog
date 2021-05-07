/**
 * @file client router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { Router } from '@vaadin/router';

window.addEventListener("load", ()=>{
    initRouter();
})

function initRouter() {
    const router = new Router(document.querySelector("main"));
    router.setRoutes([
        { path: "/", component: "lit-dashboard" },
        { path: "/settings", component: "lit-setting" },
        { path: "/login", component: "auth-login" }
    ])
}