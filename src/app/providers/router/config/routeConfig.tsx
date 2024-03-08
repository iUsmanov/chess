// #router
import { AppRouteObject, AppRoutes } from '@/shared/types/router';
import { createBrowserRouter } from 'react-router-dom';
import {
	getRouteForbidden,
	getRouteGame,
	getRouteMain,
	getRouteNotFound,
} from '@/shared/consts/router';
// eslint-disable-next-line fsd-paths-guard/hierarchy-imports-between-layers
import { RootLayout } from '@/app/components/RootLayout';
// import { NotFoundPage } from '@/pages/NotFoundPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { GamePage } from '@/pages/GamePage';
import { Redirect } from '../components/Redirect/Redirect';

const routeConfig: Record<AppRoutes, AppRouteObject> = {
	main: {
		path: getRouteMain(),
		element: <Redirect whereTo={getRouteGame()} />,
	},
	game: {
		path: getRouteGame(),
		element: <GamePage />,
	},
	forbidden: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	not_found: {
		path: getRouteNotFound(),
		// element: <NotFoundPage />,
		element: <GamePage />,
	},
};

export const routes = Object.values(routeConfig).map((route) => {
	return route;
});

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: routes,
	},
]);
