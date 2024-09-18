import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { HomePage } from "../../../../home/pages/HomePage";
import { LkApplicationsPage } from "../../../../lk/applications";
import { LkDetailsPage } from "../../../../lk/details";
import { LkFavoritesPage } from "../../../../lk/favorites";
import { LkHomePage } from "../../../../lk/home";
import { LkResumesPage } from "../../../../lk/resumes";
import { LkLayout } from "../../../../lk/shared/ui";
import { LkVacanciesPage } from "../../../../lk/vanancies";
import { PageNotFound } from "../../../pages";
import { AuthLayout } from "../../../services";
import { AppLayout } from "../../../ui/layout";
import { ProtectedRoute } from "../components/ProtectedRoute";

const ResumesListPage = lazy(() => import("../../../../resume/list"));
const ResumeCreationPage = lazy(() => import("../../../../resume/creation"));
const ResumeDetailsPage = lazy(() => import("../../../../resume/details"));
const VacanciesListPage = lazy(() => import("../../../../vacancy/list"));
const VacancyCreationPage = lazy(() => import("../../../../vacancy/creation"));
const VacancyDetailsPage = lazy(() => import("../../../../vacancy/details"));
const AuthLoginPage = lazy(() => import("../../../services/auth/pages/AuthPage"));
const AuthResetPage = lazy(() => import("../../../services/auth/pages/AuthResetPage"));
const AuthUpdatePasswordPage = lazy(
  () => import("../../../services/auth/pages/AuthUpdatePasswordPage"),
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="home" />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        element: <ResumesListPage />,
        path: "resumes",
      },
      {
        path: "resumes/:id",
        element: <ResumeDetailsPage />,
      },
      {
        path: "resumes/creation",
        element: <ResumeCreationPage />,
      },
      {
        element: <VacanciesListPage />,
        path: "vacancies",
      },
      {
        path: "vacancies/:id",
        element: <VacancyDetailsPage />,
        children: [],
      },
      {
        path: "vacancies/creation",
        element: <VacancyCreationPage />,
      },

      {
        path: "/login",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <AuthLoginPage />,
          },
          {
            path: "reset",
            element: <AuthResetPage />,
          },
          {
            path: "update",
            element: <AuthUpdatePasswordPage />,
          },
        ],
      },
      {
        path: "lk",
        element: (
          <ProtectedRoute>
            <LkLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <LkHomePage />,
          },
          {
            path: "details",
            element: <LkDetailsPage />,
          },
          {
            path: "favorites",
            element: <LkFavoritesPage />,
          },
          {
            path: "resumes",
            element: <LkResumesPage />,
          },
          {
            path: "vacancies",
            element: <LkVacanciesPage />,
          },
          {
            path: "applications",
            element: <LkApplicationsPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
