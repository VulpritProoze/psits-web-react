import { createBrowserRouter, Outlet } from "react-router";
import { MainLayout } from "./shared/layouts/MainLayout";
// import { AdminLayout } from "./shared/layouts/AdminLayout";
import { Home } from "@student-web/pages/home";
import { Events } from "@student-web/pages/events";
import { Organizations } from "@student-web/pages/organizations";
import { Resources } from "@student-web/pages/home/sections/Resources";
import { Shop } from "@student-web/pages/orders/components/Shop";
import { ProductDetailsPage } from "@student-web/pages/orders/components/ProductDetails";
import { Cart } from "@student-web/pages/orders/components/Cart";
import OTPCode from "@student-web/pages/auth/OtpCode";
import { PrivacyPolicy } from "@student-web/pages/PrivacyPolicy";
import { TermsOfCondition } from "@student-web/pages/TermsOfCondition";
// import { Dashboard } from "./features/admin/Dashboard";
import { ErrorPage } from "@student-web/pages/ErrorPage";
import Login from "@student-web/pages/auth/Login";
import Signup from "@student-web/pages/auth/SignUp";
import ForgotPassword from "@student-web/pages/auth/ForgotPassword";
import SetNewPassword from "@student-web/pages/auth/SetNewPassword";
// import AccountSettings from "./features/student/components/AccountSettings";
// import EventAttendance from "./features/student/components/EventAttendance";
// import MyOrders from "./features/student/components/MyOrders";
// import StudentLayout from "./layouts/StudentLayout";

export default createBrowserRouter([
  {
    path: "/",
    Component: Outlet,
    ErrorBoundary: ErrorPage,
    children: [
      // Public / Student / Landing Routes
      {
        Component: MainLayout,
        children: [
          { index: true, Component: Home },
          { path: "events", Component: Events },
          { path: "organizations", Component: Organizations },
          { path: "resources", Component: Resources },
          { path: "shop", Component: Shop },
          { path: "shop/:id", Component: ProductDetailsPage },
          { path: "cart", Component: Cart },
          // {
          //   path: "student",
          //   Component: StudentLayout,
          //   children: [
          //     { index: true, Component: AccountSettings },
          //     { path: "event-attendance", Component: EventAttendance },
          //     { path: "my-orders", Component: MyOrders },
          //     { path: "account-settings", Component: AccountSettings },
          //   ],
          // },

        ],
      },
      // Static Pages (No Header/Footer)
      { path: "privacy", Component: PrivacyPolicy },
      { path: "terms", Component: TermsOfCondition },
      // Authentication Routes
      {
        path: "auth",
        children: [
          { path: "login", Component: Login },
          { path: "signup", Component: Signup },
          { path: "forgot-password", Component: ForgotPassword },
          { path: "otp", Component: OTPCode },
          { path: "reset-password", Component: SetNewPassword },
        ],
      },
      // Admin Routes
      // {
      //   path: "admin",
      //   Component: AdminLayout,
      //   children: [{ index: true, Component: Dashboard }],
      // },
      
      // Admin Routes
      // {
      //   path: "admin",
      //   Component: AdminLayout,
      //   children: [{ index: true, Component: Dashboard }],
      // },
    ],
  },
]);
