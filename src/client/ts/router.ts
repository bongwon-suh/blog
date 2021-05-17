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
        { path: "/", component: "profile-container" },
        { path: "/settings", component: "setting-container" },
        { path: "/post", component: "post-container"},
        { path: "/login", component: "auth-login" },
        { path: "/signup", component: "auth-signup" },
        { path: "/write", component: "write-container"},
    ])
}