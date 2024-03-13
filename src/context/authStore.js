import { create } from "zustand";
import Cookies from "js-cookie";

const authStore = create((set) => ({
  token: Cookies.get("token") || null,
  setSignupToken: (token) => {
    Cookies.set("token", token);
    set({ token });
  },
  setLoginToken: (token) => {
    Cookies.set("token", token);
    set({ token });
  },
  setLogoutToken: () => {
    Cookies.remove("token");
    set({ token: null });
  },
}));

export default authStore;
