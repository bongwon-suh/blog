/**
 * @file client router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import { Router } from '@vaadin/router';

export const routes = [
    { path: "/", component: "profile-container" },
    { path: "/projects", component: "project-container" },
    { path: "/post", component: "post-container"},
    { path: "/post/:id", component: "post-detail"},
    { path: "/login", component: "auth-login" },
    { path: "/signup", component: "auth-signup" },
    { path: "/write", component: "write-container"},
]

window.addEventListener("load", ()=>{
    initRouter();
})

function initRouter() {
    const router = new Router(document.querySelector("main"));
    router.setRoutes(routes)
}