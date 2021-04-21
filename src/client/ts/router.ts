/**
 * @file client router
 * @author Bongwon Suh<suhliebe@gmail.com>
 */

import Dashboard from './views/dashboard';
import Post from './views/post';
import Setting from './views/setting';

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

    const container = document.getElementById("container") as HTMLElement
    const view = new match.route.view(container);
    view.renderHTML();
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