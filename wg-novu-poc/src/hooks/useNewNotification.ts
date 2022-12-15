import { useToast } from "@chakra-ui/react";
import { useSocket } from "@novu/notification-center";
import { useEffect } from "react";

const useNewNotification = () => {
  const { socket } = useSocket();
  const toast = useToast();

  useEffect(() => {
    if (socket) {
      socket.on("notification", (data) => {
        toast({
          description:
            "New notification, you can find the data in your console.",
        });
        console.log(data);
      });
    }

    return () => {
      if (socket) {
        socket.off("notification");
      }
    };
  }, [socket, toast]);
};

export default useNewNotification;
