import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { AuthLayout } from "../../../../auth/shared";
import { LkLayout } from "../../../../lk/shared/ui";
import { PageNotFound } from "../../../pages";
import { ProtectedRoute } from "../components/ProtectedRoute";

const HomePage = lazy(() => import("../../../../home"));
const ResumesListPage = lazy(() => import("../../../../resume/list"));
const ResumeCreationPage = lazy(() => import("../../../../resume/creation"));
const ResumeDetailsPage = lazy(() => import("../../../../resume/details"));
const VacanciesListPage = lazy(() => import("../../../../vacancy/list"));
const VacancyCreationPage = lazy(() => import("../../../../vacancy/creation"));
const VacancyDetailsPage = lazy(() => import("../../../../vacancy/details"));

const AppLayout = lazy(() => import("../../../ui/layout"));
const AuthLoginPage = lazy(() => import("../../../../auth/login"));
const AuthResetPage = lazy(() => import("../../../../auth/reset"));
const AuthUpdatePasswordPage = lazy(() => import("../../../../auth/update"));
const LkHomePage = lazy(() => import("../../../../lk/home"));
const LkResumesPage = lazy(() => import("../../../../lk/resumes"));
const LkVacanciesPage = lazy(() => import("../../../../lk/vanancies"));
const LkDetailsPage = lazy(() => import("../../../../lk/details"));
const LkFavoritesPage = lazy(() => import("../../../../lk/favorites"));
const LkApplicationsPage = lazy(() => import("../../../../lk/applications"));

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
