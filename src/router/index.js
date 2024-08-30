
import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Layout from "src/components/layout";
import ErrorBoundary from "../containers/404";

import ZkyComponent from "../containers/zky";
import ZkyTBComponent from "../containers/zky/tubiao";

import Xgs from "../containers/xgs";

const router = createBrowserRouter([
    {
        path: 'zky',
        element: <ZkyComponent />,
    },
    {
        path: 'zky/tubiao',
        element: <ZkyTBComponent />,
    },
    {
        path: 'xgs/:status?',
        element: <Xgs />,
    },
    {
        path: '*',
        element: <ErrorBoundary />
    }
])
export default router