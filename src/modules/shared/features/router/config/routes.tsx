import { RouteObject } from "react-router-dom";
import { WorkerSearchListPage } from "../../../../workerSearch/list";
import { HomePage } from "../../../../home";
import { AppLayout } from "../../../layout/appLayout";
import { JobSearchListPage } from "../../../../jobSearch/list";
import { AuthLoginPage } from "../../../../auth";
import { LkPage } from "../../../../lk";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [],
      },
      {
        path: "/workerSearch",
        element: <WorkerSearchListPage />,
        children: [],
      },
      {
        path: "/jobSearch",
        element: <JobSearchListPage />,
        children: [],
      },
      {
        path: "/login",
        element: <AuthLoginPage />,
      },
      {
        path: "/lk",
        element: <LkPage />,
        children: [],
      },
    ],
  },
];
