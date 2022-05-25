import { ApiResult, User } from "../models";
import { AxiosEx } from "../httpRequest";

function getProfile(): Promise<User | undefined> {
  return AxiosEx.get<ApiResult<User>>("").then((res) => {
    if (res.data) {
      return res.data.results[0];
    }
  });
}

function getList(count: number = 10): Promise<User[] | undefined> {
  return AxiosEx.get<ApiResult<User>>("", { params: { results: count } }).then(
    (res) => {
      if (res.data) {
        return res.data.results;
      }
    }
  );
}

export const UserService = {
  getProfile,
  getList,
};
