import React from "react";
import { UiProvider } from "./context/UIContext";
import { RouterPage } from "./routers/RouterPage";

export const TicketApp = () => {
  return (
    <UiProvider>
      <RouterPage />
    </UiProvider>
  );
};
