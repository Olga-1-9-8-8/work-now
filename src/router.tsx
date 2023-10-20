import { createBrowserRouter } from "react-router-dom";
import { WorkerSearchListPage, workerSearchListPageLoader } from "./modules/workerSearch/list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WorkerSearchListPage />,
    loader: workerSearchListPageLoader,
    children: [],
  },
]);
