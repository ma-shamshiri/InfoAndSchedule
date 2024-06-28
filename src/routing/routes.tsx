import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import TeamPage from "./TeamPage";
import EventPage from "./EventPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/event/", element: <EventPage /> },
  { path: "/team/", element: <TeamPage /> },
]);

export default router;
