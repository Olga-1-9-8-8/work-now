import { Suspense, lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { LkApplicationsPage } from "../../../../lk/applications";
import { LkDetailsPage } from "../../../../lk/details";
import { LkFavoritesPage } from "../../../../lk/favorites";
import { LkHomePage } from "../../../../lk/home";
import { LkResumesPage } from "../../../../lk/resumes";
import { LkLayout } from "../../../../lk/shared/ui";
import { LkVacanciesPage } from "../../../../lk/vanancies";
import { ResumeCreationPage } from "../../../../resume/creation";
import { ResumeDetailsPage } from "../../../../resume/details";
import { VacancyCreationPage } from "../../../../vacancy/creation";
import { VacancyDetailsPage } from "../../../../vacancy/details";
import { AuthLayout } from "../../../services";
import { AppLayout } from "../../../ui/layout";
import { Spinner } from "../../../ui/spinner/Spinner";
import { ProtectedRoute } from "../components/ProtectedRoute";

const HomePage = lazy(() => import("../../../../home"));
const AuthLoginPage = lazy(() => import("../../../services"));
const AuthResetPage = lazy(() => import("../../../services/auth/pages/AuthResetPage"));
const AuthUpdatePasswordPage = lazy(
  () => import("../../../services/auth/pages/AuthUpdatePasswordPage"),
);
const VacanciesListPage = lazy(() => import("../../../../vacancy/list"));
const ResumesListPage = lazy(() => import("../../../../resume/list"));
const PageNotFound = lazy(() => import("../../../pages"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Navigate replace to="home" />,
      },
      {
        path: "/home",
        element: <HomePage />,
        children: [],
      },
      {
        element: <VacanciesListPage />,
        path: "vacancies",
        children: [],
      },
      {
        element: <ResumesListPage />,
        path: "resumes",
        children: [],
      },
      {
        path: "resumes/:id",
        element: <ResumeDetailsPage />,
        children: [],
      },
      {
        path: "resumes/creation",
        element: <ResumeCreationPage />,
        children: [],
      },
      {
        path: "vacancies/creation",
        element: <VacancyCreationPage />,
        children: [],
      },
      {
        path: "vacancies/:companyCode/:id",
        element: <VacancyDetailsPage />,
        children: [],
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
            children: [],
          },
          {
            path: "update",
            element: <AuthUpdatePasswordPage />,
            children: [],
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
    children: [],
  },
];
