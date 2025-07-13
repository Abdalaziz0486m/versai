import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // استثناء: api, trpc, _next, _vercel, الملفات اللي فيها نقطة، وأي حاجة بتبدأ بـ dashboard
    "/((?!api|trpc|_next|_vercel|.*\\..*|dashboard).*)",
  ],
};
