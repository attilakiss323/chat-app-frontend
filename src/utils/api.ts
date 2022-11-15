export async function post(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response;
}

export async function get(url = "") {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      token: `${localStorage.getItem("token")}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  return response;
}

export enum api {
  signup = "/signup",
  login = "/login",
  signout = "/signout",
  user = "/user",
  users = "/users",
  conversation = "/conversation",
}
