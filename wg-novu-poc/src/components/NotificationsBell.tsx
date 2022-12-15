import { IconButton, useToast } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import React from "react";
import {
  IMessage,
  NotificationBell,
  PopoverNotificationCenter,
  useNotifications,
} from "@novu/notification-center";

interface Props {}

const NotificationsBell: React.FC<Props> = () => {
  const toast = useToast();

  const handleNotificationClick = (notification: IMessage) => {
    toast({
      description: "Check your console for the data for this notification",
    });
    console.log(notification);
  };

  return (
    <PopoverNotificationCenter
      colorScheme={"dark" || "light"}
      onNotificationClick={handleNotificationClick}
    >
      {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
    </PopoverNotificationCenter>
  );
};

export default NotificationsBell;
