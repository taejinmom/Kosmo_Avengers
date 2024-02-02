import Login from "../../pages/member/view/login/Login";
import Join from "../../pages/member/view/join/Join";
import MyPage from "../../pages/member/view/mypage/MyPage";
import AdminPage from "../../pages/member/view/admin/AdminPage";

export const submenu = [
  {
    title: "Login",
    content: "/login",
    component: <Login />,
  },
  {
    title: "My Page",
    content: "/myPage",
    component: <MyPage />,
  },
  {
    title: "Logout",
    content: "",
  },
  {
    title: "Admin Page",
    content: "/AdminPage",
    component: <AdminPage />,
  },
  {
    title: "Join",
    content: "/member",
    component: <Join />,
  },
  {
    title: "Notice",
    content: "/notice",
  },
];
export const loginSide = [
  {
    title: "Logout",
  },
];
export const logoutSide = [
  {
    title: "Login",
  },
  {
    title: "Join",
  },
];
