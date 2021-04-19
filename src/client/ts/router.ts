const router = async () => {
    const routes = [
        { path: "/", view: ()=>console.log("view dashboard") },
        { path: "/posts", view: ()=>console.log("view posts") },
        { path: "/settings", view: ()=>console.log("view settings") },
    ];

    // test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    console.log(potentialMatches);
    console.log(potentialMatches);
    console.log(potentialMatches);
    console.log(potentialMatches);
};

document.addEventListener("DOMContentLoaded", ()=>{
    router();
});