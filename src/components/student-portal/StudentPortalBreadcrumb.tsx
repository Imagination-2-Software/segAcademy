import { Link } from "@tanstack/react-router";

interface StudentPortalBreadcrumbProps {
  currentPageTitle: string;
}

export function StudentPortalBreadcrumb({
  currentPageTitle,
}: StudentPortalBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-xs font-semibold text-white/70"
    >
      <Link
        to="/"
        className="hover:text-gold transition-colors inline-flex items-center gap-1"
      >
        Home
      </Link>
      <span className="text-white/40">/</span>
      <Link
        to="/student-zone/registration"
        className="hover:text-gold transition-colors text-white/80"
      >
        Student Zone
      </Link>
      <span className="text-white/40">/</span>
      <span className="text-gold font-bold text-white">{currentPageTitle}</span>
    </nav>
  );
}

