import { useToast } from "@chakra-ui/react";
import { useSocket } from "@novu/notification-center";
import { useEffect } from "react";

const useNewNotification = () => {
  const { socket } = useSocket();
  const toast = useToast();

  useEffect(() => {
    console.log(socket);
    if (socket) {
      console.log("yes");
      socket.on("notification_received", (data) => {
        toast({
          description:
            "New notification, you can find the data in your console.",
        });
        console.log(data);
      });
    }

    return () => {
      if (socket) {
        socket.off("notification_received");
      }
    };
  }, [socket, toast]);
};

export default useNewNotification;
