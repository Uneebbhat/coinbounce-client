import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token"),
  profilePic: localStorage.getItem("profilePic"),
  setToken: (token) => {
    set({ token });
    localStorage.setItem("token", token);
  },

  setPic: (profilePic) => {
    set({ profilePic });
    localStorage.setItem("profilePic", profilePic);
  },

  clearToken: () => {
    set({ token: null, profilePic: "" });
    localStorage.removeItem("token");
    localStorage.removeItem("profilePic");
  },

  getToken: () => {
    return localStorage.getItem("token");
    // localStorage.getItem("profilePic", profilePic);
  },
}));

export default useAuthStore;
