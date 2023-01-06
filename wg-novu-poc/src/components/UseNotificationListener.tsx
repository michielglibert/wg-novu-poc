import React from "react";
import useNewNotification from "../hooks/useNewNotification";

interface Props {}

const UseNotificationListener: React.FC<Props> = () => {
  useNewNotification();

  return null;
};

export default UseNotificationListener;
