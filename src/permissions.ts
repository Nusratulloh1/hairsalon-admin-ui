import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ElMessage } from "element-plus";
import type { RouteLocationNormalized } from "vue-router";
import { useUsersStore } from "./stores/user";
import { i18n } from "@/i18n";

const title = "Admission";

NProgress.configure({ showSpinner: false });

const whiteList = ["/login", "/signin", "/check-mail"];

const getPageTitle = (key: string) => {
  const { t, te } = i18n.global as any;
  const hasKey = te(`app.${key}`) as any;
  if (hasKey) {
    const pageName = t(`app.${key}`);

    return `${pageName} - ${title}`;
  }
  return title;
};

router.beforeEach(
  async (
    to: RouteLocationNormalized,
    _: RouteLocationNormalized,
    next: any
  ) => {
    const store = useUsersStore();

    // Start progress bar
    NProgress.start();

    // Determine whether the user has logged in
    if (store.token) {
      if (to.path === "/login") {
        // If is logged in, redirect to the home page
        next({ path: "/" });
        NProgress.done();
      } else if (to.path === "/verification" && !store.user?.is_verified) {
        next();
      } else {
        // Check whether the user has obtained his permission roles
        if (!store.getUser) {
          try {
            await store.getUserInfo();
            if (!store.user?.is_verified) {
              next("/check-mail");
            } else {
              next({ ...to, replace: true });
            }
          } catch (err: any) {
            // Remove token and redirect to login page
            store.resetToken();
            ElMessage({
              message: err?.message || "Has Error",
              type: "error",
              duration: 5 * 1000,
            });
            next(`/login?redirect=${to.path}`);
            NProgress.done();
          }
        } else {
          next();
        }
      }
    } else {
      // Has no token
      if (whiteList.indexOf(to.path) !== -1) {
        // In the free login whitelist, go directly
        next();
      } else {
        // Other pages that do not have permission to access are redirected to the login page.
        next(`/login?redirect=${to.path}`);
        NProgress.done();
      }
    }
  }
);

router.afterEach((to: RouteLocationNormalized) => {
  NProgress.done();

  document.title = getPageTitle((to.name || "") as string);
});
