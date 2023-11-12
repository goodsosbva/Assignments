const pageRouter = {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [
        {
            path: "/main",
            name: "main",
            component: () => import("@/views/main.vue"),
        },
    ],
};

export default pageRouter;

// chk