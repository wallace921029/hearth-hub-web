import http from "@/utils/http/index.js";

export default {
  /** Get user detail */
  getUserDetail() {
    return http.get(`/users/user`);
  }
};
