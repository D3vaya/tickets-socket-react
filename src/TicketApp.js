import React from "react";

import { UiProvider } from "./context/UIContext";
import { RouterPage } from "./routers/RouterPage";
import { SocketProvider } from "./context/SocketContext";

export const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </SocketProvider>
  );
};
