import * as React from "react";

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={51}
      height={42}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="#C9CACC"
        strokeWidth={0.75}
        d="M.375.375h8.7v41.25h-8.7zM16.125.375h8.7v41.25h-8.7zM31.875.375h8.7v41.25h-8.7z"
      />
      <path
        stroke="#C9CACC"
        strokeWidth={0.75}
        d="M.375 23.906v-7.125h49.65v7.125zM16.125 7.5V.375h33.9V7.5z"
      />
    </svg>
  );
}

export default Logo;