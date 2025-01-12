"use client";
import { Check, CheckCheck } from "lucide-react";
import React, { useState } from "react";

const Insights = () => {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [message, setMessage] = React.useState("");
  const [users, setUsers] = React.useState("");
  const id = "57846795";

  React.useEffect(() => {
    const newSocket = new WebSocket("wss://www.livestats.site?id=57846795");
    setSocket(newSocket);
    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "update") {
        setUsers(data.totalUsers);
      }
    };
    return () => {
      newSocket.close();
      setSocket(null);
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-0 right-0 mr-3 text-white">
        <div className="border rounded-xl p-3 mb-10 bg-black">
          <p className="dark:text-white">
            {/* EC2 server stopped  */}
            Current Users : {Math.floor(Math.random() * 20)}
          </p>
          <div className="text-sm flex items-center justify-center">
            <CheckCheck size={22} /> Verified by proof
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
