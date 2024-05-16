import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ScrollToTop } from "./modules/shared/components/scroll";
import "./modules/shared/configs/internationalization/i18n";
import { AppRoutes } from "./modules/shared/features/router";
import { ResponsiveProvider } from "./modules/shared/responsive";
import { Spinner } from "./modules/shared/ui/spinner/Spinner";
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
      <ResponsiveProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Toaster position="bottom-center" richColors />
            <TooltipProvider delayDuration={200}>
              <ScrollToTop />
              <AppRoutes />
            </TooltipProvider>
          </Suspense>
        </BrowserRouter>
      </ResponsiveProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
