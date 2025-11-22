"use client";

import { cn } from "@/lib/utils";

type CapybaraState = "sad" | "neutral" | "happy";

interface CapybaraAvatarProps {
  state: CapybaraState;
}

const SadCapybara = ({ className }: { className?: string }) => (
  <div className={className}>
    <img src="/capybara-svgrepo-com2.svg" alt="Sad and sleepy capybara" />
    <svg
      viewBox="0 0 120 120"
      className={cn("absolute top-0 left-0 w-full h-full", className)}
      aria-label="Sad and sleepy capybara"
    >
      <g transform="translate(0, 8)">
        <line
          x1="29"
          y1="31"
          x2="42"
          y2="31"
          stroke="#464655"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <line
          x1="78"
          y1="31"
          x2="91"
          y2="31"
          stroke="#464655"
          strokeWidth="11"
          strokeLinecap="round"
        />
      </g>
      <text
        x="95"
        y="40"
        fontSize="16"
        fill="hsl(var(--muted))"
        className="font-headline"
      >
        Zzz..
      </text>
    </svg>
  </div>
);

const NeutralCapybara = ({ className }: { className?: string }) => (
  <img
    src="/capybara-svgrepo-com2.svg"
    alt="Neutral capybara"
    className={className}
  />
);

const HappyCapybara = ({ className }: { className?: string }) => (
  <div className={className}>
    <img src="/capybara-svgrepo-com2.svg" alt="Happy capybara" />
    <svg
      viewBox="0 0 120 120"
      className={cn("absolute top-0 left-0 w-full h-full", className)}
      aria-label="Happy capybara"
    >
      <g transform="translate(0, 8)">
        <circle
          cx="30"
          cy="55"
          r="8"
          fill="hsl(var(--accent))"
          className="opacity-80"
        />
        <circle
          cx="89"
          cy="55"
          r="8"
          fill="hsl(var(--accent))"
          className="opacity-80"
        />
      </g>
    </svg>
  </div>
);

const CapybaraAvatar = ({ state }: CapybaraAvatarProps) => {
  const commonClasses =
    "absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out";
  return (
    <div className="relative w-48 h-48 text-primary">
      <SadCapybara
        className={cn(
          commonClasses,
          state === "sad" ? "opacity-100" : "opacity-0"
        )}
      />
      <NeutralCapybara
        className={cn(
          commonClasses,
          state === "neutral" ? "opacity-100" : "opacity-0"
        )}
      />
      <HappyCapybara
        className={cn(
          commonClasses,
          state === "happy" ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

export default CapybaraAvatar;
