import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token"),
  profilePic: localStorage.getItem("profilePic"),
  id: localStorage.getItem("id"),
  setToken: (token) => {
    set({ token });
    localStorage.setItem("token", token);
  },

  setId: (id) => {
    set({ id });
    localStorage.setItem("id", id);
  },

  setPic: (profilePic) => {
    set({ profilePic });
    localStorage.setItem("profilePic", profilePic);
  },

  clearToken: () => {
    set({ token: null, profilePic: "" });
    localStorage.removeItem("token");
    localStorage.removeItem("profilePic");
    localStorage.removeItem("id");
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  getId: () => {
    return localStorage.getItem("id");
  },
}));

export default useAuthStore;
