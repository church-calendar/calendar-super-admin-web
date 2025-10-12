import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const Pin = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className ?? "h-4 w-4"}
    {...props}
  >
    <path strokeWidth="2" d="M12 21c4-4 6-7 6-10a6 6 0 1 0-12 0c0 3 2 6 6 10Z" />
    <circle cx="12" cy="11" r="2" strokeWidth="2" />
  </svg>
);

export const Mail = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className ?? "h-4 w-4"}
    {...props}
  >
    <path strokeWidth="2" d="m4 6 8 6 8-6" />
    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
  </svg>
);

export const UserPlus = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className ?? "h-4 w-4"}
    {...props}
  >
    <path strokeWidth="2" d="M15 19a6 6 0 0 0-12 0" />
    <circle cx="9" cy="7" r="4" strokeWidth="2" />
    <path strokeWidth="2" d="M16 11h6m-3-3v6" />
  </svg>
);

export const ChevronLeft = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className ?? "h-4 w-4"}
    {...props}
  >
    <path strokeWidth="2" d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRight = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className ?? "h-4 w-4"}
    {...props}
  >
    <path strokeWidth="2" d="m9 6 6 6-6 6" />
  </svg>
);

export const Plus = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className ?? "h-4 w-4"}
    {...props}
  >
    <path strokeWidth="2" d="M12 5v14M5 12h14" />
  </svg>
);
