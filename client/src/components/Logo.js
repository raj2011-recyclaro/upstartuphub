/**
 * Logo – transparent SVG reproduction of the UP Startup Hub brand mark.
 *
 * Props:
 *   textColor  – fill colour for "Startuphub.com" text.
 *                Defaults to dark navy (#2D3748) for light backgrounds.
 *                Pass "white" or "#fff" for dark backgrounds (footer).
 *   className  – extra Tailwind / CSS classes applied to the <svg>.
 *   iconOnly   – render just the house-rocket icon (no wordmark).
 *                Useful for the hero animated orb.
 */
function Logo({ primaryColor = "#1A428A", textColor = "#2D3748", className = "", iconOnly = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconOnly ? "0 0 98 106" : "0 0 710 106"}
      fill="none"
      className={className}
      aria-label="UP Startup Hub"
    >
      {/* ── House outline ── */}
      <path
        d="M 8 103 L 8 48 L 49 5 L 90 48 L 90 70 L 75 70 L 75 103 Z"
        stroke={primaryColor}
        strokeWidth="4.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* ── Realistic Rocket ── */}
      <g transform="translate(46,55) rotate(-5)">
        {/* Exhaust Flame (Layered) */}
        <path d="M -4 20 C -6 32 -10 38 -4 42" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
        <path d="M 0 20 L 0 44" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" className="opacity-60" />
        <path d="M 4 20 C 6 32 10 38 4 42" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
        
        {/* Fins (Aerodynamic & Curved) */}
        <path
          d="M -13 8 L -24 30 L -4 18 Z"
          fill={primaryColor}
          className="opacity-20"
        />
        <path
          d="M -13 8 L -24 30 L -4 18 Z"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M 13 8 L 24 30 L 4 18 Z"
          fill={primaryColor}
          className="opacity-20"
        />
        <path
          d="M 13 8 L 24 30 L 4 18 Z"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Main Body (Segmented) */}
        <path
          d="M 0 -28 C -12 -28 -14 -12 -14 0 L -14 16 C -8 22 8 22 14 16 L 14 0 C 14 -12 12 -28 0 -28 Z"
          stroke={primaryColor}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Nose Cone Tip */}
        <path
          d="M 0 -28 C -6 -28 -8 -22 -9 -18 L 9 -18 C 8 -22 6 -28 0 -28 Z"
          fill={primaryColor}
          className="opacity-10"
        />
        
        {/* Porthole (Detailed) */}
        <circle cx="0" cy="-6" r="6" stroke={primaryColor} strokeWidth="2.5" />
        <circle cx="0" cy="-6" r="3" fill={primaryColor} className="opacity-20" />
      </g>

      {/* ── Wordmark (Sleeker weights) ── */}
      {!iconOnly && (
        <>
          {/* Vertical divider */}
          <rect x="100" y="24" width="2" height="58" rx="1" fill={primaryColor} opacity="0.3" />

          {/* "UP" – Bold but not heavy */}
          <text
            x="114"
            y="79"
            fontFamily="Outfit, sans-serif"
            fontWeight="700"
            fontSize="68"
            fill={primaryColor}
            letterSpacing="-0.02em"
          >
            UP
          </text>

          {/* "Startuphub.com" – Medium/Sleek */}
          <text
            x="215"
            y="79"
            fontFamily="Outfit, sans-serif"
            fontWeight="500"
            fontSize="64"
            fill={textColor}
            letterSpacing="-0.01em"
          >
            Startuphub.com
          </text>
        </>
      )}
    </svg>
  );
}

export default Logo;

