import RequestClient from "../RequestClient";

export const UserApi = {
  postAvatar: (data) => {
    return RequestClient.post("user/profile/avatar", data);
  },
};
