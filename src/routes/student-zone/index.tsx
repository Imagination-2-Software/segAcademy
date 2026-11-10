import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/student-zone/")({
  beforeLoad: () => {
    throw redirect({
      to: "/student-zone/registration",
    });
  },
  component: () => null,
});

