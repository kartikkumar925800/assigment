import Image from "next/image";

/* ------------------------------------------------------------------ *
 * Figma GRADIENT_RADIAL -> CSS.
 * Figma stores a radial gradient as three normalised handles:
 *   h0 = centre, h1 = point at stop 100%, h2 = point on the conjugate axis.
 * The exact SVG equivalent is the unit circle mapped through the linear
 * transform  M(1,0)=h1-h0, M(0,1)=h2-h0, M(0,0)=h0.
 * ------------------------------------------------------------------ */
type Handle = readonly [number, number];
type Stop = { offset: number; color: string; alpha?: number };

function figmaRadial(
  stops: Stop[],
  h0: Handle,
  h1: Handle,
  h2: Handle,
  w = 1,
  h = 1,
): string {
  const a = (h1[0] - h0[0]) * w;
  const b = (h1[1] - h0[1]) * h;
  const c = (h2[0] - h0[0]) * w;
  const d = (h2[1] - h0[1]) * h;
  const e = h0[0] * w;
  const f = h0[1] * h;
  const nodes = stops
    .map(
      (s) =>
        `<stop offset="${s.offset}" stop-color="${s.color}" stop-opacity="${s.alpha ?? 1}"/>`,
    )
    .join("");
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    `<radialGradient id="g" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="matrix(${a} ${b} ${c} ${d} ${e} ${f})">${nodes}</radialGradient>` +
    `<rect x="0" y="0" width="${w}" height="${h}" fill="url(#g)"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

/* Frame 12 — Title "Online Test Pack" (left card, bbox 456.1x30) */
const GRAD_TEXT_BLUE = figmaRadial(
  [
    { offset: 0.125716, color: "#5B8FFF" },
    { offset: 0.617674, color: "#3D74EB" },
    { offset: 1, color: "#234285" },
  ],
  [0.07534246, 0.06666662],
  [0.91780823, 1.05],
  [-0.09072998, 0.90913239],
);

/* Frame 12 — Title "Online Test Pack" (right card span, bbox 189x30) */
const GRAD_TEXT_BLUE_SPAN = figmaRadial(
  [
    { offset: 0.125716, color: "#5B8FFF" },
    { offset: 0.617674, color: "#3D74EB" },
    { offset: 1, color: "#234285" },
  ],
  [0.07534249, 0.0666666],
  [1.22751327, 0.79999995],
  [-0.13345843, 1.31799205],
);

/* Frame 12 — Title "CBT Plus +" (bbox 128x25) */
const GRAD_TEXT_CBT = figmaRadial(
  [
    { offset: 0.267893, color: "#F08E1D" },
    { offset: 0.426972, color: "#EF6718" },
    { offset: 0.870192, color: "#EE5A13" },
    { offset: 1, color: "#DD141E" },
  ],
  [0.43086818, -1.13333318],
  [0.21221865, 1.28333337],
  [0.23310387, -3.05623872],
);

/* ------------------------------------------------------------------ *
 * Navigation — Group 11 logo mark (16 x 27.934668 at 0,0)
 * ------------------------------------------------------------------ */
const LOGO_MARK = (
  <svg
    width={16}
    height={27.934668}
    viewBox="0 0 16 27.934668"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <svg
      x={7.139893}
      y={3.823408}
      width={8.837469}
      height={23.902102}
      viewBox="0 0 9 24"
      preserveAspectRatio="none"
    >
      <path
        d="M0 9.55922C1.26404 7.64269 2.89243 5.77833 4.27309 3.91016C4.85164 3.12736 6.94683 0.240828 7.76545 0C8.628 0.155272 8.60868 2.53512 8.65761 3.22404C9.12758 9.84588 8.86765 16.5925 7.51325 23.13C7.45369 23.4175 7.29891 23.774 7.05453 23.9805L6.91134 24C6.24908 23.268 6.23889 14.8741 5.98941 13.3444C5.94698 13.0841 5.82689 11.2067 5.84016 10.9122C5.98704 7.63233 2.97018 8.22523 0.595062 9.89157C0.576807 9.90437 0.558685 9.91724 0.540686 9.93034C0.364557 9.81595 0.174065 9.67917 0 9.55922Z"
        fill="#FF7900"
      />
    </svg>
    <svg
      x={0.809082}
      y={10.15044}
      width={9.136382}
      height={17.784224}
      viewBox="0 0 10 18"
      preserveAspectRatio="none"
    >
      <path
        d="M0.40941 0.330915C0.611952 0.195726 1.01946 -0.0698903 1.23407 0.0171646C2.59685 0.569971 5.26928 2.48687 6.40743 3.23198C6.58288 3.35289 6.7749 3.49076 6.95244 3.60607C8.02617 4.29675 8.41408 4.3227 9.24724 5.28744C7.74798 4.86146 6.4141 4.38012 4.87372 5.06566C2.30699 6.20789 2.38283 9.03219 2.18491 11.1841L1.78416 15.5565C1.72116 16.2406 1.65079 17.3727 1.45349 18C0.819837 17.1602 0.668025 16.4715 0.40941 15.5008C0.40941 15.5008 4.42792e-10 8.19961 2.21396e-10 4.64707C0 1.09453 0.40941 0.330915 0.40941 0.330915Z"
        fill="#850007"
      />
    </svg>
    <svg
      x={13.151367}
      y={0}
      width={2.848742}
      height={3.590939}
      viewBox="0 0 3 4"
      preserveAspectRatio="none"
    >
      <path
        d="M1.46497 0H2.16861C3.47112 0.852395 3.13916 2.74328 1.8945 3.49585C0.270802 4.47767 -0.260082 2.70411 0.114724 1.59457C0.407162 0.728874 0.59392 0.503105 1.46497 0Z"
        fill="#FF7900"
      />
    </svg>
    <svg
      x={0}
      y={6.838068}
      width={3.072521}
      height={3.055109}
      viewBox="0 0 4 4"
      preserveAspectRatio="none"
    >
      <path
        d="M1.57986 0.0154074C4.85518 0.994313 4.75792 5.39581 1.57986 3.51504C1.57986 3.51504 0 2.52156 0 1.15071C0 -0.220139 1.57986 0.0154074 1.57986 0.0154074Z"
        fill="#FF7900"
      />
    </svg>
  </svg>
);

/* Navigation — Phone icon inside Icon frame 19.86x19.86 at (1.75, 1.65) */
const PHONE_LABEL = "+91  74629  99520";

const PHONE_PATH =
  "M18.333 14.0999V16.5998C18.334 16.8319 18.2864 17.0616 18.1935 17.2743C18.1005 17.4869 17.9641 17.6778 17.7931 17.8347C17.6221 17.9916 17.4202 18.111 17.2003 18.1854C16.9805 18.2597 16.7475 18.2874 16.5164 18.2665C13.9521 17.9878 11.489 17.1116 9.32478 15.7081C7.31132 14.4288 5.60427 12.7217 4.32483 10.7082C2.91649 8.53425 2.04005 6.0591 1.76653 3.4833C1.7457 3.25286 1.77309 3.0206 1.84694 2.80132C1.92079 2.58204 2.03949 2.38055 2.19549 2.20966C2.35148 2.03877 2.54135 1.90224 2.75301 1.80875C2.96465 1.71526 3.19346 1.66686 3.42484 1.66665H5.92481C6.32923 1.66267 6.72129 1.80588 7.02793 2.06959C7.33458 2.3333 7.53486 2.69951 7.59147 3.09997C7.69698 3.90002 7.89266 4.68556 8.17479 5.44161C8.28691 5.73988 8.31118 6.06404 8.24471 6.37566C8.17825 6.6873 8.02384 6.97336 7.79979 7.19993L6.74147 8.25825C7.92775 10.3445 9.65515 12.0719 11.7415 13.2582L12.7997 12.1999C13.0263 11.9758 13.3123 11.8214 13.624 11.755C13.9356 11.6885 14.2598 11.7128 14.558 11.8249C15.3141 12.107 16.0996 12.3027 16.8997 12.4082C17.3045 12.4653 17.6742 12.6692 17.9385 12.9811C18.2028 13.2931 18.3432 13.6912 18.333 14.0999Z";

/* Navigation — WhatsApp glyph inside the 44x34 #1EA651 pill */
const WHATSAPP_PATH =
  "M12.9712 11.195C12.7796 11.0692 12.5879 11.0063 12.3962 11.2579L11.6294 12.2642C11.4377 12.3899 11.3099 12.4528 11.0543 12.327C10.0958 11.8239 8.75399 11.2579 7.60383 9.37107C7.53994 9.1195 7.66773 8.99371 7.79553 8.86792L8.37061 7.98742C8.4984 7.86164 8.43451 7.73585 8.37061 7.61006L7.60383 5.78616C7.41214 5.28302 7.22045 5.34591 7.02875 5.34591H6.51757C6.38978 5.34591 6.13419 5.40881 5.87859 5.66038C4.47284 7.04403 5.04792 8.99371 6.07029 10.2516C6.26198 10.5031 7.53994 12.7673 10.2875 13.9623C12.3323 14.8428 12.7796 14.717 13.3546 14.5912C14.0575 14.5283 14.7604 13.9623 15.0799 13.3962C15.1438 13.2075 15.4633 12.3899 15.2077 12.2642M10.1597 18.1761C7.53994 18.1761 5.55911 16.7925 5.55911 16.7925L2.42812 17.6101L3.19489 14.5912C3.19489 14.5912 1.91693 12.6415 1.91693 10.1887C1.91693 5.66038 5.6869 1.88679 10.3514 1.88679C14.6965 1.88679 18.4026 5.22013 18.4026 9.87421C18.4026 14.4025 14.6965 18.1132 10.1597 18.1761ZM0 20L5.30351 18.5535C6.8395 19.3274 8.5514 19.701 10.2758 19.6385C12.0002 19.576 13.6796 19.0795 15.1535 18.1964C16.6275 17.3133 17.8469 16.0731 18.6954 14.5941C19.5438 13.1152 19.993 11.4469 20 9.74843C20 4.33962 15.655 0 10.1597 0C8.39599 0.00444137 6.66419 0.463606 5.13681 1.33177C3.60943 2.19993 2.33977 3.44679 1.45428 4.94818C0.568786 6.44957 0.0983582 8.15309 0.089844 9.88911C0.0813299 11.6251 0.535026 13.333 1.40575 14.8428";

/* ------------------------------------------------------------------ *
 * Frame 12 — content
 * ------------------------------------------------------------------ */
type FeatureGroupData = {
  label: string;
  badgeBg: string;
  badgeColor: string;
  badgeSize: string;
  badgeWeight: string;
  badgeLeading: string;
  items: string[];
};

const TAGS_LEFT = ["Class 12", "Online"];
const TAGS_RIGHT = ["Class 12", "Online", "CBT"];

const ORANGE_BADGE = {
  badgeBg: "#FF671F",
  badgeColor: "#FFFFFF",
  badgeSize: "text-[14px]",
  badgeWeight: "font-bold",
  badgeLeading: "leading-[16.8px]",
};

const CREAM_BADGE = {
  badgeBg: "#F5EFE4",
  badgeColor: "#303030",
  badgeSize: "text-[13px]",
  badgeWeight: "font-semibold",
  badgeLeading: "leading-[15.6px]",
};

const FEATURES_LEFT: FeatureGroupData[] = [
  {
    ...ORANGE_BADGE,
    label: "JEE पकड़ Test series",
    items: ["6 unit · 6 part tests · 22 full tests"],
  },
  {
    ...ORANGE_BADGE,
    label: "पड़ाव Mock Tests",
    items: ["140+ Mock tests", "160+ PYQ tests"],
  },
  {
    ...ORANGE_BADGE,
    label: "आईना Sessions",
    items: [
      "AIR 1 Guidance Sessions",
      "Boards vs Competitive Exam Management",
      "Weak Topic Sessions, Based on Your Tests",
    ],
  },
  {
    ...CREAM_BADGE,
    label: "Also Includes",
    items: [
      "Detailed Performance Analysis",
      "Video Solutions for each Test Series Qs",
    ],
  },
];

const FEATURES_RIGHT: FeatureGroupData[] = [
  FEATURES_LEFT[0],
  FEATURES_LEFT[1],
  FEATURES_LEFT[2],
  {
    ...CREAM_BADGE,
    label: "Also Includes",
    items: [
      "Centre-Based CBT Tests",
      "Detailed Performance Analysis",
      "Video Solutions for each Test Series Qs",
    ],
  },
];

/* Frame 12 — Rectangle 190 ribbon vectors (exact exported geometry) */
function RibbonShape({ right }: { right: boolean }) {
  if (right) {
    return (
      <svg
        width={279}
        height={29}
        viewBox="2 0 279 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute left-0 top-0 overflow-visible hidden md:block"
      >
        <defs>
          <linearGradient
            id="ribbonOrangeR"
            gradientUnits="userSpaceOnUse"
            x1={-1.34564}
            y1={14.5}
            x2={284.706}
            y2={14.5}
          >
            <stop stopColor="#FFC34B" />
            <stop offset={0.0817308} stopColor="#F06B27" />
            <stop offset={1} stopColor="#C42701" />
          </linearGradient>
        </defs>
        <path
          d="M2 2C2 0.895431 2.89543 0 4 0H281L271.818 8.68965C268.484 11.8456 268.484 17.1544 271.818 20.3104L281 29H4C2.89543 29 2 28.1046 2 27V14.5V2Z"
          fill="url(#ribbonOrangeR)"
        />
        <path
          d="M2 2C2 0.895431 2.89543 0 4 0H281L271.818 8.68965C268.484 11.8456 268.484 17.1544 271.818 20.3104L281 29H4C2.89543 29 2 28.1046 2 27V14.5V2Z"
          fill="black"
          fillOpacity={0.06}
        />
      </svg>
    );
  }
  return (
    <svg
      width={253}
      height={29}
      viewBox="2 0 253 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute left-0 top-0 overflow-visible hidden md:block"
    >
      <defs>
        <linearGradient
          id="ribbonOrangeL"
          gradientUnits="userSpaceOnUse"
          x1={-1.03386}
          y1={14.5}
          x2={258.361}
          y2={14.5}
        >
          <stop stopColor="#FFC34B" />
          <stop offset={0.0817308} stopColor="#F06B27" />
          <stop offset={1} stopColor="#C42701" />
        </linearGradient>
        <linearGradient
          id="ribbonBlueL"
          gradientUnits="userSpaceOnUse"
          x1={-19.9498}
          y1={15}
          x2={296.589}
          y2={15}
        >
          <stop stopColor="#2857BF" />
          <stop offset={0.129808} stopColor="#5489FB" />
          <stop offset={0.617674} stopColor="#3D74EB" />
          <stop offset={1} stopColor="#234285" />
        </linearGradient>
      </defs>
      <path
        d="M2 2C2 0.895431 2.89543 0 4 0H255L246.41 8.96533C243.445 12.0596 243.445 16.9404 246.41 20.0347L255 29H4C2.89543 29 2 28.1046 2 27V14.5V2Z"
        fill="url(#ribbonOrangeL)"
      />
      <path
        d="M2 2C2 0.895431 2.89543 0 4 0H255L246.41 8.96533C243.445 12.0596 243.445 16.9404 246.41 20.0347L255 29H4C2.89543 29 2 28.1046 2 27V14.5V2Z"
        fill="black"
        fillOpacity={0.06}
      />
      <path
        d="M2 2C2 0.895431 2.89543 0 4 0H255L246.41 8.96533C243.445 12.0596 243.445 16.9404 246.41 20.0347L255 29H4C2.89543 29 2 28.1046 2 27V14.5V2Z"
        fill="url(#ribbonBlueL)"
      />
    </svg>
  );
}

function Ribbon({
  text,
  left,
  width,
  textLeft,
  right,
}: {
  text: string;
  left: number;
  width: number;
  textLeft: number;
  right: boolean;
}) {
  return (
    <div
      className="absolute z-10 hidden h-[29px] backdrop-blur-[4px] drop-shadow-[6px_8px_8px_rgba(0,0,0,0.1)] md:block"
      style={{ left: `${left}px`, top: "137.995308px", width: `${width}px` }}
    >
      <RibbonShape right={right} />
      <span
        className="absolute top-[6.004692px] hidden whitespace-nowrap text-white text-[14px] font-bold leading-[16.8px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.1)] md:block"
        style={{ left: `${textLeft}px` }}
      >
        {text}
      </span>
    </div>
  );
}

function ModeBadge({
  text,
  left,
  bg,
  inner,
}: {
  text: string;
  left: number;
  bg: string;
  inner?: boolean;
}) {
  return (
    <div
      className={
        "absolute top-[139.93px] z-10 hidden justify-center items-center gap-[10px] rounded-[37px] px-[12px] py-[4px] md:flex " +
        (inner ? "shadow-[inset_0px_0px_8px_#FF8E78]" : "")
      }
      style={{ left: `${left}px`, backgroundColor: bg }}
    >
      <span className="whitespace-nowrap text-white text-[14px] font-bold leading-[16.8px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.1)]">
        {text}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Primitives
 * ------------------------------------------------------------------ */
function Chip({ label, selected }: { label: string; selected: boolean }) {
  return (
    <div
      className={
        selected
          ? "flex items-center rounded-[999px] px-[14px] py-[10px] bg-[#090909]"
          : "flex items-center rounded-[999px] px-[14px] py-[10px] bg-white shadow-[inset_0_0_0_1px_#C9C9C5]"
      }
    >
      <span
        className={
          selected
            ? "text-white text-[15px] font-semibold leading-[18px]"
            : "text-[#171717] text-[15px] font-normal leading-[18px]"
        }
      >
        {label}
      </span>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-row items-center gap-[6px] pb-[8px]">
      {tags.map((t) => (
        <div
          key={t}
          className="flex justify-center items-center gap-[10px] rounded-[10px] px-[10px] py-[8px] bg-[#F4F4F4]"
        >
          <span className="whitespace-nowrap text-[#090909] text-[12px] font-semibold leading-[14.4px] tracking-[0.6px]">
            {t}
          </span>
        </div>
      ))}
    </div>
  );
}

function FeatureGroup({ f, defaultTickColor = "#000000" }: { f: FeatureGroupData; defaultTickColor?: string }) {
  return (
    <div className="flex flex-col w-full gap-[4px]">
      <div
        className="flex justify-center items-center self-start gap-[10px] rounded-[8px] px-[6px] py-[2px]"
        style={{ backgroundColor: f.badgeBg }}
      >
        <span
          className={`${f.badgeSize} ${f.badgeWeight} ${f.badgeLeading}`}
          style={{ color: f.badgeColor }}
        >
          {f.label}
        </span>
      </div>
      <div className="flex w-full flex-col gap-[4px]">
        {f.items.map((it) => {
          const isCBT = it.includes("Centre-Based");
          const tickColor = isCBT ? "#E63B18" : defaultTickColor;
          return (
            <div key={it} className="flex flex-row items-start w-full">
              <span className="hidden md:inline text-[15px] font-normal leading-[18px] mr-[8px]" style={{ color: isCBT ? "#E63B18" : "#000000" }}>
                ✓
              </span>
              <span className="w-full whitespace-pre-wrap text-[#000000] text-[15px] font-semibold leading-[18px]">
                {it}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PriceFooter({ price, original }: { price: string; original: string }) {
  return (
    <div className="relative w-full h-auto md:h-[87px] rounded-b-[24px] bg-[#1A1A1A] flex flex-row md:block justify-between items-center px-[20px] py-[16px] md:p-0 gap-[16px] md:gap-0">
      {/* Price block */}
      <div className="md:absolute md:left-[41px] md:top-[15px] flex flex-col gap-[2px]">
        <span className="w-full text-[#FF7800] text-[24px] font-bold leading-[28.8px]">
          {price}
        </span>
        <div className="flex w-full flex-row items-center gap-[8px]">
          <span className="text-white text-[13px] font-semibold leading-[18.2px] line-through">
            {original}
          </span>
          <span className="whitespace-nowrap text-white text-[13px] font-semibold leading-[18.2px] opacity-60">
            Limited time deal
          </span>
        </div>
      </div>
      {/* Buttons block */}
      <div className="md:absolute md:right-[25.5px] md:top-[23px] flex flex-row items-center gap-[8px] w-auto">
        <button className="hidden md:flex justify-center items-center gap-[10px] rounded-[10px] px-[14px] py-[8px] shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
          <span className="whitespace-nowrap text-white text-[15px] font-semibold leading-[21px]">
            View Details
          </span>
        </button>
        <button className="flex justify-center items-center gap-[10px] rounded-[10px] bg-white px-[14px] py-[8px]">
          <span className="whitespace-nowrap text-[#090909] text-[15px] font-semibold leading-[21px]">
            <span className="md:hidden">View Details</span>
            <span className="hidden md:inline">Register</span>
          </span>
        </button>
      </div>
    </div>
  );
}

type CardProps = {
  stroke: string;
  tags: string[];
  features: FeatureGroupData[];
  benefits: { timing: string; detail: string; bottomClass: string };
  price: string;
  original: string;
  ribbon: { text: string; left: number; width: number; textLeft: number };
  badge: { text: string; left: number; bg: string; inner?: boolean };
};

function PriceCard({
  stroke,
  tags,
  features,
  benefits,
  price,
  original,
  ribbon,
  badge,
}: CardProps) {
  const right = stroke === "#E1451F";
  return (
    <div className="relative flex w-full md:w-[540.5px] md:h-[711.2px] flex-col">
      {/* Frame 1000005298 / Frame 1000005303 — r24, #FFFFFF */}
      <div className="flex w-full flex-1 flex-col rounded-[24px] bg-white">
           {/* Frame 1000005485 — gap 33/24 on mobile, pad 18 vs 41/25, 1.2px inset stroke */}
           <div
            className="flex h-auto md:h-[624.2px] w-full flex-col gap-[24px] md:gap-[33px] rounded-t-[24px] px-[18px] md:px-[42.2px] pt-[18px] md:pt-[25.2px] pb-[18px] md:pb-[24px]"
            style={{ boxShadow: `inset 0 0 0 1.2px ${stroke}` }}
          >
          {/* Frame 1000005484 — header, gap 2, pb 24/8 on mobile, h 116 vs 126 */}
          <div className="flex w-full flex-col gap-[2px] pb-[8px] md:pb-[24px]">
            <Tags tags={tags} />
            <h3 className="w-full text-[#000000] text-[22px] md:text-[24px] font-bold leading-[27.5px] md:leading-[30px]">
              JEE Main + Advanced 2027
            </h3>
            {right ? (
              <div className="flex w-full flex-row items-center gap-[4px]">
                <span
                  className="whitespace-nowrap bg-clip-text font-['Inter',sans-serif] text-[22px] md:text-[24px] font-bold leading-[23.1px] md:leading-[25.2px] text-transparent bg-gradient-to-r from-[#F08E1D] via-[#EF6718] to-[#DD141E]"
                >
                  CBT Plus +
                </span>
                <span
                  className="whitespace-nowrap bg-clip-text text-[22px] md:text-[24px] font-bold leading-[27.5px] md:leading-[30px] text-transparent bg-gradient-to-r from-[#5B8FFF] via-[#3D74EB] to-[#234285]"
                >
                  Online Test Pack
                </span>
              </div>
            ) : (
              <span
                className="w-full bg-clip-text text-[22px] md:text-[24px] font-bold leading-[27.5px] md:leading-[30px] text-transparent bg-gradient-to-r from-[#5B8FFF] via-[#3D74EB] to-[#234285]"
              >
                Online Test Pack
              </span>
            )}
          </div>

          {/* Frame 1000005483 — gap 12px mobile / 16px desktop, pt 0 / 16px */}
          <div className="flex w-full flex-col items-start md:items-end gap-[12px] md:gap-[16px] pt-0 md:pt-[16px]">
            {features.map((f) => (
              <FeatureGroup key={f.label} f={f} defaultTickColor={right ? "#E1451F" : "#3D74EB"} />
            ))}
          </div>

          {/* Frame 1000005304 — primaryAxisAlignItems MAX */}
          <div
            className={`flex w-full flex-col justify-end gap-[4px] ${benefits.bottomClass}`}
          >
            <span className="w-full text-[#666666] text-[13px] font-normal leading-[15.6px]">
              {benefits.timing}
            </span>
            <span className="w-full text-[#000000] text-[13px] font-normal leading-[18.2px]">
              {benefits.detail}
            </span>
          </div>
        </div>

        <PriceFooter price={price} original={original} />
      </div>

      <Ribbon
        text={ribbon.text}
        left={ribbon.left}
        width={ribbon.width}
        textLeft={ribbon.textLeft}
        right={right}
      />
      <ModeBadge text={badge.text} left={badge.left} bg={badge.bg} inner={badge.inner} />
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Roadmap Banner — static background + precise input overlay.
 * Desktop: 1440x249 via roadmap-bg.png (aspectRatio 1440/249).
 * Mobile : 363x257 via roadmap-mobile.png; input positioned at
 *          937.5/1440×100% and 115/249×100% of the 1440 container.
 * ------------------------------------------------------------------ */
function RoadmapSection() {
  return (
    <>
      {/* Desktop — 1440x249 */}
      <section
        className="relative hidden w-full max-w-[1440px] md:block"
        style={{ aspectRatio: "1440/249" }}
      >
        <Image
          src="/assets/roadmap-bg.png"
          fill
          alt="Get a free Roadmap"
          className="object-contain"
          priority
        />
        <div
          className="absolute flex w-[18.4%] max-w-[265px] flex-col gap-[9px] pb-[100px]"
          style={{ left: "65.104%", top: "46.184%" }}
        >
          <div className="flex h-[48px] w-full items-center gap-[8px] rounded-[36px] border border-white/[0.13] bg-white/[0.15] px-[20px] backdrop-blur-[41.85px]">
            <span className="font-['Inter',sans-serif] text-[15px] font-bold leading-[24px] text-white">
              +91
            </span>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              className="w-full bg-transparent font-['Inter',sans-serif] text-[16px] font-medium leading-[19.364px] text-white placeholder-white/40 focus:outline-none"
              aria-label="10-digit mobile number"
            />
          </div>
          <button className="flex h-[45px] w-full items-center justify-center gap-[12px] rounded-[36px] bg-[#FA7602] px-[12px] py-[16px]">
            <span className="whitespace-nowrap font-['Inter',sans-serif] text-[16px] font-semibold leading-[19.364px] text-white">
              Get Your RoadMap
            </span>
          </button>
        </div>
      </section>
      {/* Mobile — 363x257, input overlay via percentages so it scales fluidly */}
      {/* Mobile — 363x257, centered with max width so it perfectly fits like Figma without blowing up full width */}
      <section
        className="relative flex w-full justify-center md:hidden bg-white pb-[32px]"
      >
        <div className="relative w-full max-w-[363px]" style={{ aspectRatio: "363/257" }}>
          <Image
            src="/assets/roadmap-mobile.png"
            fill
            alt="Get a free Roadmap"
            className="object-contain"
            priority
          />
          {/* Use bottom anchorage so it never overlaps the bottom graphics */}
          <div
            className="absolute flex w-[88%] max-w-[320px] flex-col gap-[9px]"
            style={{ left: "50%", bottom: "24px", transform: "translate(-50%, 0)" }}
          >
          <div className="flex h-[48px] items-center gap-[8px] rounded-[36px] border border-white/[0.13] bg-white/[0.15] px-[20px] backdrop-blur-[41.85px]">
            <span className="font-['Inter',sans-serif] text-[15px] font-bold leading-[24px] text-white">
              +91
            </span>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              className="w-full bg-transparent font-['Inter',sans-serif] text-[16px] font-medium leading-[19.364px] text-white placeholder-white/40 focus:outline-none"
              aria-label="10-digit mobile number"
            />
          </div>
          <button className="flex h-[45px] w-full items-center justify-center gap-[12px] rounded-[36px] bg-[#FA7602] px-[12px] py-[16px]">
            <span className="whitespace-nowrap font-['Inter',sans-serif] text-[16px] font-semibold leading-[19.364px] text-white">
              Get Your RoadMap
            </span>
          </button>
        </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Page
 * ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f5efe4] font-['Aileron',sans-serif]">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col overflow-x-clip bg-white">
        {/* 1. Navigation: 1440x69 (desktop) / 412x60 (mobile) */}
        <nav className="sticky top-0 z-50 flex w-full flex-row items-center justify-between border-b border-[#D9D9D9]/50 bg-white px-[20px] md:px-[64px] py-[8px] md:py-[16px] gap-[8px] md:gap-0">
          {/* Frame 1000005567 (242x36) > Frame 76 (165x35.934669 mobile 40x35.93, gap 4, pb 8, items-end) */}
          <div className="flex h-[36px] w-[40px] md:w-[242px] shrink-0 items-center justify-center md:justify-start">
            <div className="flex h-[35.934669px] flex-row items-end gap-[4px] pb-[8px] w-[40px] md:w-[165px] justify-center md:justify-start">
              {LOGO_MARK}
              {/* "entors Eduserv" is HIDDEN on mobile (Figma visible:false) */}
              <span className="hidden md:inline whitespace-nowrap text-[19.372341px] font-bold leading-[17.435106px]">
                <span className="text-[#840107]">entors</span>
                <span className="text-[#FF7800]">E</span>
                <span className="text-[#840107]">duserv</span>
              </span>
            </div>
          </div>

          {/* Center text (Mobile only, hidden on desktop) */}
          <div className="flex flex-row items-center justify-center gap-[4px] md:hidden">
            <span className="text-[12px] font-bold text-[#000000]">JEE Test Series</span>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L4 4L7 1" stroke="#FA7602" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Center text (Mobile only, hidden on desktop) */}
          <div className="flex flex-row items-center justify-center gap-[4px] md:hidden">
            <span className="text-[12px] font-bold text-[#000000]">JEE Test Series</span>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L4 4L7 1" stroke="#FA7602" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Frame 73 (275x32.6) — HIDDEN on mobile */}
          <div className="hidden md:flex flex-row items-center gap-[4px]">
            <div className="flex cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[12px] px-[12px] pt-[8px]">
              <span className="whitespace-nowrap text-[#090909] text-[15px] font-bold leading-[15px]">
                <span className="text-[#FF671F]">JEE</span> Test Series
              </span>
              <div className="h-[1.6px] w-[64px] rounded-[10px] bg-[#000000] opacity-90" />
            </div>
            <div className="flex cursor-pointer flex-col items-center justify-center gap-[8px] px-[12px] pt-[8px]">
              <span className="whitespace-nowrap text-[#333333] text-[15px] font-semibold leading-[15px] opacity-90">
                <span className="text-[#FF671F] opacity-100">NEET</span> Test Series
              </span>
              <div className="h-0 w-full" />
            </div>
          </div>

          {/* Frame 1000005226 — mobile icon-only pill 41.79px + green pill 44px + hamburger */}
          <div className="flex flex-row items-center gap-[8px] md:gap-[10px] justify-end">
            {/* Phone pill: icon-only on mobile, full label md+ */}
            <div
              className="flex flex-row items-center justify-center rounded-[49.653px] bg-[#EBEBEB] h-[34px] md:h-[34.756962px] gap-[3.97px] py-[5.96px] pl-[9.93px] pr-[9.93px] md:pl-[9.93px] md:pr-[15.89px] w-[41.79px] md:w-auto"
              aria-label={PHONE_LABEL}
            >
              <span className="relative block h-[19.86px] w-[19.86px] shrink-0 overflow-hidden">
                <svg
                  width={16.46}
                  height={16.49}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="absolute left-[1.75px] top-[1.65px]"
                >
                  <path d={PHONE_PATH} fill="#090909" />
                </svg>
              </span>
              <span className="hidden md:inline whitespace-nowrap text-center text-[#090909] text-[14.896px] font-semibold leading-[22.344px] tracking-[-0.2979px]">
                {PHONE_LABEL}
              </span>
            </div>
            {/* WhatsApp green pill */}
            <button className="flex h-[34px] w-[44px] shrink-0 items-center justify-center gap-[3.97px] rounded-[49.653px] bg-[#1EA651] px-[12px] py-[4px] transition hover:opacity-90">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={WHATSAPP_PATH} fill="#FFFFFF" />
              </svg>
            </button>
          </div>
        </nav>

        {/* 2. Frame 11 Hero: Static Export */}
        <section className="flex w-full justify-center bg-[#F5EFE4] relative mt-[-100px] md:mt-0 z-0 overflow-hidden">
          {/* Desktop hero */}
          <div
            className="relative hidden w-full max-w-[1440px] md:block"
            style={{ aspectRatio: "1440 / 403" }}
          >
            <Image
              src="/assets/hero-section.png"
              fill
              alt="Mentors Eduserv All India Test Series"
              className="object-contain"
              priority
            />
          </div>
          {/* Mobile hero */}
          <div
            className="relative block w-full max-w-[412px] md:hidden"
            style={{ aspectRatio: "412 / 445" }}
          >
            <Image
              src="/assets/hero-mobile.png"
              fill
              alt="Mentors Eduserv All India Test Series"
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* 3. Frame 12: 1440x956 (desktop) / 412x1611 (mobile) */}
        <section className="relative flex w-full flex-col bg-white px-[16px] md:px-0 pt-[24px] md:pt-[64.07px] pb-[24px] md:pb-[34.73px]">
          {/* Line 3 — full-bleed on desktop */}
          <div className="hidden md:block absolute top-[125.07px] right-0 left-0 h-px bg-[#000000] opacity-25" />

          {/* Content block: 100% mobile / 1099 mobile-fixed desktop */}
          <div className="flex w-full justify-center pr-0 md:pr-[3px]">
            <div className="flex w-full md:w-[1099px] flex-col">
              {/* Title + chips row */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-[12px] md:gap-[6.5px] md:pl-[0.5px]">
                <span className="w-auto md:w-[181px] shrink-0 whitespace-nowrap text-[#000000] text-[20px] md:text-[24px] font-semibold leading-[25px] md:leading-[30px]">
                  Test Series 2027
                </span>
                <div className="flex flex-row gap-[8px] md:gap-[10px]">
                  <Chip label="Class 12" selected />
                  <Chip label="12th passed" selected={false} />
                </div>
              </div>

              {/* Mobile horizontal line */}
              <div className="md:hidden w-[calc(100%+32px)] ml-[-16px] h-px bg-[#000000] opacity-25 mt-[16px] mb-[16px]" />

              {/* Price filters row 2 */}
              <div className="md:mt-[47px] ml-0 md:ml-[8px] flex flex-row flex-wrap gap-[8px] md:gap-[10px]">
                <Chip label="JEE Main + Advanced" selected />
                <Chip label="JEE Main" selected={false} />
              </div>

              {/* Cards */}
              <div className="mt-[24px] md:mt-[23px] flex w-full flex-col md:flex-row items-stretch gap-[12px] md:gap-[18px]">
                <PriceCard
                  stroke="#3D74EB"
                  tags={TAGS_LEFT}
                  features={FEATURES_LEFT}
                  benefits={{
                    timing: "Instant access · Valid 12 months",
                    detail: "Attempt remotely at any time in each test window",
                    bottomClass: "flex-1",
                  }}
                  price="₹ 1,999"
                  original="₹ 2,499"
                  ribbon={{
                    text: "Attempt from Anywhere",
                    left: -2.646484,
                    width: 253,
                    textLeft: 46.146484,
                  }}
                  badge={{ text: "Grind Mode", left: 418, bg: "#2E2E2E" }}
                />
                <PriceCard
                  stroke="#E1451F"
                  tags={TAGS_RIGHT}
                  features={FEATURES_RIGHT}
                  benefits={{
                    timing: "Instant access · Valid 12 months",
                    detail: "Attempt remotely at any time in each test window (Online)",
                    bottomClass: "h-[38px] flex-none",
                  }}
                  price="₹ 4,299"
                  original="₹ 4,299"
                  ribbon={{
                    text: "Nearest CBT Centre @ Patna",
                    left: -1.493164,
                    width: 279,
                    textLeft: 44.493164,
                  }}
                  badge={{ text: "Battle Mode", left: 417, bg: "#CF1400", inner: true }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Roadmap Banner */}
        <RoadmapSection />
      </div>
    </div>
  );
}
