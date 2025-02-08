import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultNotFoundComponent: () => {
			return (
				// TODO: Add a 404 page
				<div>
					<h1>404</h1>
					<p>Not Found</p>
				</div>
			);
		},
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
