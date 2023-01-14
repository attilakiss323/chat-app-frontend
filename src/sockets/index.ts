import { io } from "socket.io-client";

export const socket = io("/", {
  auth: {
    token: localStorage.getItem("token"),
  },
});

export enum SocketNames {
  connect = "connect",
  disconnect = "disconnect",
  conversation = "conversation",
  onlineStatus = "onlineStatus",
  onlineUsers = "onlineUsers",
}
