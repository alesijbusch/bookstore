import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { HomePage } from "../pages/HomePage/HomePage";
import { DetailsPage } from "../pages/DetailsPage/DetailsPage";
import { MainTemplate } from "../templates/MainTemplate";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </>
  )
);
