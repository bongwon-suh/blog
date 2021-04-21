/**
 * @file client router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import Dashboard from './views/dashboard';
import Setting from './views/setting';
import Post from './views/post';

const navigateTo = (url: string) => {
    history.pushState(null, "", url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Post },
        { path: "/settings", view: Setting },
    ];

    // test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();
    const container = document.getElementById("container") as HTMLElement
    container.innerHTML = await view.getHTML();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click", (e: Event)=>{
        const target = e.target as HTMLAnchorElement
        if (target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(target.href);
        }
    })
    router();
});