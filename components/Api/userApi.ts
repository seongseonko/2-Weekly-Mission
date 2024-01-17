import axios from "@/lib/axios";
import { UserData } from "@/type/type";
import { AxiosResponse } from "axios";

export async function getProfileData() {
  const result: AxiosResponse<UserData> = await axios.get(`/sample/user`);
  return result.data;
}
export async function getFolderData() {
  const result = await axios.get(`/sample/folder`);
  return result.data;
}
export async function getButtonData() {
  const result = await axios.get(`/users/1/folders`);
  return result.data;
}
export async function getCardData(id?: number | null) {
  const result = await axios.get(
    `/users/1/links${id ? `?folderId=${id}` : ""}`
  );
  return result.data;
}
