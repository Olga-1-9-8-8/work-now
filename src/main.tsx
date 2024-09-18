import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ScrollToTop } from "./modules/shared/components/scroll";
import "./modules/shared/configs/internationalization/i18n";
import { AppRoutes } from "./modules/shared/features/router";
import { ResponsiveProvider } from "./modules/shared/responsive";
import { AuthProvider } from "./modules/shared/services/auth";
import { ErrorBoundary, ErrorFallback } from "./modules/shared/ui/error-boundary";
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
    <ErrorBoundary fallback={<ErrorFallback />}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <ResponsiveProvider>
            <BrowserRouter>
              <Suspense fallback={<Spinner />}>
                <Toaster position="bottom-center" richColors />
                <TooltipProvider delayDuration={200}>
                  <ScrollToTop />
                  <AuthProvider>
                    <AppRoutes />
                  </AuthProvider>
                </TooltipProvider>
              </Suspense>
            </BrowserRouter>
          </ResponsiveProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
