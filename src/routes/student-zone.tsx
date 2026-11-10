import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/student-zone")({
  component: () => <Outlet />,
});

