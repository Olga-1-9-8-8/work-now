import { Suspense, lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { LkApplicationsPage } from "../../../../lk/applications/pages/LkApplicationsPage";
import { LkDetailsPage } from "../../../../lk/details/pages/LkDetailsPage";
import { LkFavoritesPage } from "../../../../lk/favorites/pages/LkFavoritesPage";
import { LkHomePage } from "../../../../lk/home/pages/LkHomePage";
import { LkResumesPage } from "../../../../lk/resumes/pages/LkResumesPage";
import { LkLayout } from "../../../../lk/shared/ui";
import { ResumeCreationPage } from "../../../../resume/creation/pages/ResumeCreationPage";
import { ResumeDetailsPage } from "../../../../resume/details";
import { ResumesSearchLayout } from "../../../../resume/list";
import { VacancyDetailsPage } from "../../../../vacancy/details";
import { VacanciesSearchLayout } from "../../../../vacancy/list";
import { AppLayout } from "../../../ui/layout";
import { Spinner } from "../../../ui/spinner/Spinner";

const HomePage = lazy(() => import("../../../../home"));
const AuthLoginPage = lazy(() => import("../../../services"));
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
        element: <VacanciesSearchLayout />,
        children: [
          {
            path: "vacancies",
            element: <VacanciesListPage />,
            children: [],
          },
        ],
      },
      {
        element: <ResumesSearchLayout />,
        children: [
          {
            path: "resumes",
            element: <ResumesListPage />,
            children: [],
          },
        ],
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
        path: "vacancies/:id",
        element: <VacancyDetailsPage />,
        children: [],
      },
      {
        path: "/login",
        element: <AuthLoginPage />,
      },
      {
        path: "lk",
        element: <LkLayout />,
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
