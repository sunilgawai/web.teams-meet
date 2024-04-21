import RootLayout from "@/layout";
import Chat from "@/pages/chat";
import Community from "@/pages/community";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
            {
                path:"/chat",
                element: <Chat />
            },
            {
                path: "/community",
                element: <Community />,
                // children: [
                //     {
                //         path: "community/new",
                //         element: <Community />
                //     }
                // ]
            }
		],
	},
]);

export default router;
