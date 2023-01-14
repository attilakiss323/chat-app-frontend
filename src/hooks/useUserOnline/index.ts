import { useEffect } from "react";
import { socket, SocketNames } from "sockets";
import {
  AppStateType,
  setCurrentUserOnline,
  setUserOnline,
} from "reduxToolkit";
import { useSelector, useDispatch } from "react-redux";

export const useUserOnline = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: AppStateType) => state.user.currentUser
  );

  useEffect(() => {
    socket.emit(
      SocketNames.onlineStatus,
      {
        email: currentUser.email,
      },
      ({ success }: { success: boolean }) => {
        if (success) {
          dispatch(setCurrentUserOnline());
        }
      }
    );
  }, []);

  socket.on(SocketNames.onlineUsers, (data) => {
    dispatch(setUserOnline(data));
  });
};
