"use client";

import { cn } from "@/lib/utils";

type CapybaraState = "sad" | "neutral" | "happy";

interface CapybaraAvatarProps {
  state: CapybaraState;
}

const SadCapybara = ({ className }: { className?: string }) => (
  // <svg
  //   viewBox="0 0 120 120"
  //   className={cn("fill-current", className)}
  //   aria-label="Sad and sleepy capybara"
  // >
  //   <path d="M96.4,59.6c8.5-17, -1.4,-36.5, -20.8,-36.5c-19.4,0, -34,10.2, -43.6,27.1c-9.6,17, -4.7,39.6, 14.7,39.6l38.2,0c19.4,0, 24.2,-14.9, 11.5,-30.2Z" />
  //   <path
  //     d="M48.8,60.8c4.3,4.3, 8.5,4.3, 12.8,0"
  //     strokeWidth="4"
  //     strokeLinecap="round"
  //     stroke="hsl(var(--muted))"
  //     fill="none"
  //   />
  //   <path
  //     d="M83,60.8c-4.3,4.3, -8.5,4.3, -12.8,0"
  //     strokeWidth="4"
  //     strokeLinecap="round"
  //     stroke="hsl(var(--muted))"
  //     fill="none"
  //   />
  //   <rect x="62" y="74" width="8" height="2" rx="1" fill="hsl(var(--muted))" />
  //   <rect x="62" y="79" width="4" height="2" rx="1" fill="hsl(var(--muted))" />
  //   <rect x="68" y="79" width="4" height="2" rx="1" fill="hsl(var(--muted))" />
  //   <text
  //     x="95"
  //     y="45"
  //     fontSize="16"
  //     fill="hsl(var(--muted))"
  //     className="font-headline"
  //   >
  //     Zzz
  //   </text>
  // </svg>

  // <svg
  //   viewBox="0 0 120 120"
  //   className={cn("fill-current", className)}
  //   aria-label="Sad and sleepy capybara"
  // >
  //   {/* <!-- ตัวลำตัว --> */}
  //   <path
  //     fill="#C49A6C"
  //     d="M85.3,101.9C97.2,88,102.8,70.1,99,52.2C95.2,34.3,82.4,19.3,64.4,19.3c-18.1,0-32.9,13.9-37.4,31.7 c-4.5,17.8,1.2,36.8,13.8,50.9L85.3,101.9z"
  //   />

  //   <line x1="46" y1="12" x2="52" y2="22" stroke="#231F20" strokeWidth="3" />
  //   <line x1="40" y1="32" x2="46" y2="12" stroke="#231F20" strokeWidth="3" />

  //   {/*  หูขวา */}
  //   <line x1="76" y1="12" x2="85" y2="32" stroke="#231F20" strokeWidth="3" />
  //   <line x1="70" y1="22" x2="76" y2="12" stroke="#231F20" strokeWidth="3" />

  //   {/* <!-- เส้นขอบ --> */}
  //   <g
  //     stroke="#231F20"
  //     strokeWidth="4"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     fill="none"
  //   >
  //     <path
  //       d="M85.3,101.9C97.2,88,102.8,70.1,99,52.2C95.2,34.3,82.4,19.3,64.4,19.3c-18.1,0-32.9,13.9-37.4,31.7 c-4.5,17.8,1.2,36.8,13.8,50.9"
  //       fill="hsl(var(--primary))"
  //     />
  //   </g>

  //   {/* <!-- ใบหน้า --> */}
  //   <g transform="translate(0, 8)">
  //     <line
  //       x1="45"
  //       y1="42"
  //       x2="55"
  //       y2="42"
  //       stroke="#231F20"
  //       strokeWidth="3"
  //       strokeLinecap="round"
  //     />
  //     <line
  //       x1="75"
  //       y1="42"
  //       x2="85"
  //       y2="42"
  //       stroke="#231F20"
  //       strokeWidth="3"
  //       strokeLinecap="round"
  //     />

  //     {/* <!-- จมูก --> */}
  //     <path
  //       fill="hsl(var(--muted))"
  //       stroke="#231F20"
  //       strokeWidth="4"
  //       d="M82.8,50.3v30.9c0,5.7-4.6,10.3-10.3,10.3H56.5c-5.7,0-10.3-4.6-10.3-10.3V50.3H82.8z"
  //     />
  //     {/* <!-- ตาเศร้า --> */}
  //     <path
  //       d="M49.2,63.2c1.7,2.3,4.6,3.8,7.7,3.8s6-1.5,7.7-3.8"
  //       stroke="#231F20"
  //       strokeWidth="3"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       fill="none"
  //     />
  //     <path
  //       d="M80.2,63.2c-1.7,2.3-4.6,3.8-7.7,3.8s-6-1.5-7.7-3.8"
  //       stroke="#231F20"
  //       strokeWidth="3"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       fill="none"
  //     />
  //     {/* <!-- ปาก --> */}
  //     <path
  //       d="M64.5,76.5c-4.4,0-8,2.7-8,6h16C72.5,79.2,68.9,76.5,64.5,76.5z"
  //       fill="#8E8E8E"
  //       stroke="#231F20"
  //       strokeWidth="4"
  //     />
  //   </g>

  //   {/* <!-- ข้อความหลับ --> */}
  //   <text
  //     x="95"
  //     y="45"
  //     fontSize="16"
  //     fill="hsl(var(--muted))"
  //     className="font-headline"
  //   >
  //     Zzz...
  //   </text>
  // </svg>
  <div className={className}>
    <img src="/capybara-svgrepo-com2.svg" alt="Sad and sleepy capybara" />
    <svg
      viewBox="0 0 120 120"
      className={cn("absolute top-0 left-0 w-full h-full", className)}
      aria-label="Sad and sleepy capybara"
    >
      <g transform="translate(0, 8)">
     {/* <path
        d="M33.2,32.2c1.7,2.3,4.6,3.8,7.7,3.8s6-1.5,7.7-3.8"
        stroke="#231F20"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M71.2,32.2c1.7,2.3,4.6,3.8,7.7,3.8s6-1.5,7.7-3.8"
        stroke="#231F20"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      /> */}
       <line
        x1="29" //35
        y1="31"
        x2="42" //48
        y2="31"
        stroke="#464655" //#231F20
        strokeWidth="11"
        strokeLinecap="round"
      />
      <line
        x1="78" //72
        y1="31"
        x2="91" //85
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
        >Zzz..</text>
    </svg>
  </div>
);

const NeutralCapybara = ({ className }: { className?: string }) => (
  // <svg viewBox="0 0 120 120" className={cn("fill-current", className)} aria-label="Neutral capybara">
  //   <path d="M96.4,59.6c8.5-17, -1.4,-36.5, -20.8,-36.5c-19.4,0, -34,10.2, -43.6,27.1c-9.6,17, -4.7,39.6, 14.7,39.6l38.2,0c19.4,0, 24.2,-14.9, 11.5,-30.2Z" />
  //   <circle cx="53" cy="61" r="4" fill="hsl(var(--background))"/>
  //   <circle cx="79" cy="61" r="4" fill="hsl(var(--background))"/>
  //   <rect x="62" y="74" width="8" height="2" rx="1" fill="hsl(var(--background))" />
  //   <rect x="62" y="79" width="4" height="2" rx="1" fill="hsl(var(--background))" />
  //   <rect x="68" y="79" width="4" height="2" rx="1" fill="hsl(var(--background))" />
  // </svg>

  <img
    src="/capybara-svgrepo-com2.svg"
    alt="Neutral capybara"
    className={className}
  />

  // <svg
  //   viewBox="0 0 120 120"
  //   className={cn("fill-current", className)}
  //   aria-label="Neutral capybara"
  // >
  //   <path
  //     fill="hsl(var(--primary))"
  //     d="M85.3,101.9C97.2,88,102.8,70.1,99,52.2C95.2,34.3,82.4,19.3,64.4,19.3c-18.1,0-32.9,13.9-37.4,31.7 c-4.5,17.8,1.2,36.8,13.8,50.9L85.3,101.9z"
  //   />
  //   {/* หูซ้าย*/}
  //   <line x1="46" y1="12" x2="52" y2="22" stroke="#231F20" strokeWidth="3" />
  //   <line x1="40" y1="32" x2="46" y2="12" stroke="#231F20" strokeWidth="3" />

  //   {/*  หูขวา */}
  //   <line x1="76" y1="12" x2="85" y2="32" stroke="#231F20" strokeWidth="3" />
  //   <line x1="70" y1="22" x2="76" y2="12" stroke="#231F20" strokeWidth="3" />

  //   <g
  //     stroke="#231F20"
  //     strokeWidth="4"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     fill="none"
  //   >
  //     <path
  //       d="M85.3,101.9C97.2,88,102.8,70.1,99,52.2C95.2,34.3,82.4,19.3,64.4,19.3c-18.1,0-32.9,13.9-37.4,31.7 c-4.5,17.8,1.2,36.8,13.8,50.9"
  //       fill="hsl(var(--primary))"
  //     />
  //   </g>
  //   <g transform="translate(0, 8)">
  //     <circle fill="#000" cx="47" cy="45" r="5" />
  //     <circle fill="#000" cx="82" cy="45" r="5" />
  //     <path
  //       fill="hsl(var(--muted))"
  //       stroke="#231F20"
  //       strokeWidth="4"
  //       d="M82.8,50.3v30.9c0,5.7-4.6,10.3-10.3,10.3H56.5c-5.7,0-10.3-4.6-10.3-10.3V50.3H82.8z"
  //     />
  //     <path
  //       d="M64.5,76.5c-4.4,0-8,2.7-8,6h16C72.5,79.2,68.9,76.5,64.5,76.5z"
  //       fill="hsl(var(--muted-foreground))"
  //       stroke="#231F20"
  //       strokeWidth="4"
  //     />
  //     <path
  //       d="M57.4,66.2c-1.9-2.2-1.9-5.7,0-7.8c1.9-2.2,5-2.2,6.9,0c1.9,2.2,1.9,5.7,0,7.8C62.4,68.3,59.3,68.3,55.4,66.2z"
  //       fill="#231F20"
  //     />
  //     <path
  //       d="M72.4,66.2c-1.9-2.2-1.9-5.7,0-7.8c1.9-2.2,5-2.2,6.9,0c1.9,2.2,1.9,5.7,0,7.8C77.4,68.3,74.3,68.3,72.4,66.2z"
  //       fill="#231F20"
  //     />
  //   </g>
  // </svg>
);

const HappyCapybara = ({ className }: { className?: string }) => (
  // <svg
  //   viewBox="0 0 120 120"
  //   className={cn("fill-current", className)}
  //   aria-label="Happy capybara"
  // >
  //   <path d="M96.4,59.6c8.5-17, -1.4,-36.5, -20.8,-36.5c-19.4,0, -34,10.2, -43.6,27.1c-9.6,17, -4.7,39.6, 14.7,39.6l38.2,0c19.4,0, 24.2,-14.9, 11.5,-30.2Z" />
  //   <path
  //     d="M51,59c2-2, 4-2, 6,0"
  //     strokeWidth="4"
  //     strokeLinecap="round"
  //     stroke="hsl(var(--background))"
  //     fill="none"
  //   />
  //   <path
  //     d="M77,59c2-2, 4-2, 6,0"
  //     strokeWidth="4"
  //     strokeLinecap="round"
  //     stroke="hsl(var(--background))"
  //     fill="none"
  //   />
  //   <path
  //     d="M58,74 Q 66,86 74,74"
  //     strokeWidth="4"
  //     strokeLinecap="round"
  //     stroke="hsl(var(--background))"
  //     fill="none"
  //   />
  //   <rect
  //     x="62"
  //     y="79"
  //     width="4"
  //     height="2"
  //     rx="1"
  //     fill="hsl(var(--background))"
  //   />
  //   <rect
  //     x="68"
  //     y="79"
  //     width="4"
  //     height="2"
  //     rx="1"
  //     fill="hsl(var(--background))"
  //   />
  // </svg>
  // <svg
  //   viewBox="0 0 120 120"
  //   className={cn("fill-current", className)}
  //   aria-label="Neutral capybara"
  // >
  //   <path
  //     fill="hsl(var(--primary))"
  //     d="M85.3,101.9C97.2,88,102.8,70.1,99,52.2C95.2,34.3,82.4,19.3,64.4,19.3c-18.1,0-32.9,13.9-37.4,31.7 c-4.5,17.8,1.2,36.8,13.8,50.9L85.3,101.9z"
  //   />
  //   {/* หูซ้าย*/}
  //   <line x1="46" y1="12" x2="52" y2="22" stroke="#231F20" strokeWidth="3" />
  //   <line x1="40" y1="32" x2="46" y2="12" stroke="#231F20" strokeWidth="3" />

  //   {/*  หูขวา */}
  //   <line x1="76" y1="12" x2="85" y2="32" stroke="#231F20" strokeWidth="3" />
  //   <line x1="70" y1="22" x2="76" y2="12" stroke="#231F20" strokeWidth="3" />

  //   <g
  //     stroke="#231F20"
  //     strokeWidth="4"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     fill="none"
  //   >
  //     <path
  //       d="M85.3,101.9C97.2,88,102.8,70.1,99,52.2C95.2,34.3,82.4,19.3,64.4,19.3c-18.1,0-32.9,13.9-37.4,31.7 c-4.5,17.8,1.2,36.8,13.8,50.9"
  //       fill="hsl(var(--primary))"
  //     />
  //   </g>
  //   <g transform="translate(0, 8)">
  //     <path
  //       d="M44,46 C 46,42, 50,42, 52,46"
  //       strokeWidth="3"
  //       strokeLinecap="round"
  //       stroke="#000"
  //       fill="none"
  //     />
  //     <path
  //       d="M79,46 C 81,42, 85,42, 87,46"
  //       strokeWidth="3"
  //       strokeLinecap="round"
  //       stroke="#000"
  //       fill="none"
  //     />
  //     <path
  //       fill="hsl(var(--muted))"
  //       stroke="#231F20"
  //       strokeWidth="4"
  //       d="M82.8,50.3v30.9c0,5.7-4.6,10.3-10.3,10.3H56.5c-5.7,0-10.3-4.6-10.3-10.3V50.3H82.8z"
  //     />
  //     <path
  //       d="M64.5,76.5c-4.4,0-8,2.7-8,6h16C72.5,79.2,68.9,76.5,64.5,76.5z"
  //       fill="hsl(var(--muted-foreground))"
  //       stroke="#231F20"
  //       strokeWidth="4"
  //     />
  //     <path
  //       d="M57.4,66.2c-1.9-2.2-1.9-5.7,0-7.8c1.9-2.2,5-2.2,6.9,0c1.9,2.2,1.9,5.7,0,7.8C62.4,68.3,59.3,68.3,57.4,66.2z"
  //       fill="#231F20"
  //     />
  //     <path
  //       d="M72.4,66.2c-1.9-2.2-1.9-5.7,0-7.8c1.9-2.2,5-2.2,6.9,0c1.9,2.2,1.9,5.7,0,7.8C77.4,68.3,74.3,68.3,72.4,66.2z"
  //       fill="#231F20"
  //     />
  //     <path
  //       d="M58,74 Q 64,84 70,74"
  //       strokeWidth="3"
  //       strokeLinecap="round"
  //       stroke="#231F20"
  //       fill="none"
  //     />
  //   </g>
  // </svg>
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
