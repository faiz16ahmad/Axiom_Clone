'use client';

interface CopyIconProps {
  className?: string;
}

export function CopyIcon({ className = 'w-3 h-3' }: CopyIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back square (outline) */}
      <rect
        x="9"
        y="9"
        width="13"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Front square (filled) */}
      <rect
        x="2"
        y="2"
        width="13"
        height="13"
        rx="2"
        fill="currentColor"
      />
    </svg>
  );
}
