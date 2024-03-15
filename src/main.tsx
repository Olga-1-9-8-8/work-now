import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./modules/shared/features/router";
import { ResponsiveProvider } from "./modules/shared/responsive";
import { store } from "./modules/shared/store";
import { Toaster } from "./modules/shared/ui/toast/Toast";
import { TooltipProvider } from "./modules/shared/ui/tooltip/TooltipPrimitive";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <ResponsiveProvider>
          <BrowserRouter>
            <Toaster position="bottom-center" richColors />
            <TooltipProvider delayDuration={200}>
              <AppRoutes />
            </TooltipProvider>
          </BrowserRouter>
        </ResponsiveProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
