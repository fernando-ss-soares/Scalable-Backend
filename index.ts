import { routes as routes } from "./src/routes";

const server = Bun.serve({
  port: 3000,
  development: false,
  routes: routes,
  fetch(request) {
    return Response.json({ message: "Not Found" }, { status: 404 });
  },
  error(error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
