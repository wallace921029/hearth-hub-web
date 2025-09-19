import http from "@/utils/http/index.js";

export default {
  /** Sign in */
  signIn(data: { username: string; password: string }) {
    return http.post("/auth/sign-in", data);
  },
  /** Sign up */
  signUp(data: { username: string; password: string; name: string }) {
    return http.post("/auth/sign-up", data);
  },
  /** Sign out */
  signOut() {
    return http.get("/auth/sign-out");
  },
};
