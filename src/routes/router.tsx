import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { HomePage } from "../pages/HomePage/HomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path={ROUTE.HOME} element={<MainTemplate />}> */}
      <Route index element={<HomePage />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </>
  )
);
