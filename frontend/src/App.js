
// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events, { loader as Eventloader } from "./pages/Events";
import EventDetail, { loader as EventDetailloader } from "./pages/EventDetail";
import EditEvent/* ,{ action as EditeventAction} */ from "./pages/EditEvent";
import NewEvent/* , { action as NeweventAction} */ from "./pages/NewEvent";
import RootLayout from "./pages/RootLayout";
import EventRootLayout from "./pages/RootLayoutEvent";
import Error from "./pages/Error";
import {action as manipulateAction} from "./components/EventForm"
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const Rout = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          { index: true, element: <Events />, loader: Eventloader },
          {
            path: ":id",
            id:"event-detail",
            loader: EventDetailloader,
            children: [
              { index: true, element: <EventDetail /> },
              { path: "edit", element: <EditEvent />,action:manipulateAction },
            ],
          },
          { path: "new", element: <NewEvent />,action:manipulateAction},
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Rout}></RouterProvider>;
}

export default App;
