import { BASE_URL } from "../static/BASE_URL";

export async function getProfileData() {
  const response = await fetch(`${BASE_URL}/sample/user`);
  const result = await response.json();

  return result;
}
export async function getFolderData() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  const result = await response.json();

  return result;
}
export async function getButtonData() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  const result = await response.json();
  return result;
}
export async function getCardData(id) {
  const response = await fetch(
    `${BASE_URL}/users/1/links${id ? `?folderId=${id}` : ""}`
  );
  const result = await response.json();
  return result;
}
