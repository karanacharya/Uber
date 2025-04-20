import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const socket = io(`${import.meta.env.VITE_BASE_URL}`); // Replace with your server URL

const SocketProvider = ({ children }) => {
    useEffect(() => {
        // Basic connection logic
        socket.on('connect', () => {
            console.log('Connected to server ');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

    }, []);

  // // Function to send a message to the server
  // const sendMessage = (eventName, data) => {
  //   if (socket) {
  //     socket.emit(eventName, data);
  //     // console.log(`Message sent: Event - ${eventName}, Data -`, data);
  //   } else {
  //     console.error("Socket is not connected");
  //   }
  // };

  // // Function to listen for messages from the server
  // const receiveMessage = (eventName, callback) => {
  //   if (socket) {
  //     socket.on(eventName, callback);
  //   } else {
  //     console.error("Socket is not connected");
  //   }
  // };

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;