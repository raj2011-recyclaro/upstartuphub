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
function Logo({ textColor = "#2D3748", className = "", iconOnly = false }) {
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
        stroke="#F97316"
        strokeWidth="4.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* ── Rocket (slight counter-clockwise tilt to match original) ── */}
      <g transform="translate(46,56) rotate(-8)">
        {/* Capsule body */}
        <path
          d="M 0 -24 C -10 -24 -12 -10 -12 0 L -12 13 C -8 18 8 18 12 13 L 12 0 C 12 -10 10 -24 0 -24 Z"
          stroke="#F97316"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Porthole window */}
        <circle cx="0" cy="-5" r="5.5" stroke="#F97316" strokeWidth="3" />
        {/* Left fin */}
        <path
          d="M -12 7 L -21 25 L -3 17 Z"
          stroke="#F97316"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Right fin */}
        <path
          d="M 12 7 L 21 25 L 3 17 Z"
          stroke="#F97316"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Exhaust flames */}
        <path d="M -5 18 C -7 26 -11 33 -6 37" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        <path d="M 0 18 L 0 38" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        <path d="M 5 18 C 7 26 11 33 6 37" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* ── Wordmark (suppressed in iconOnly mode) ── */}
      {!iconOnly && (
        <>
          {/* Vertical orange divider bar */}
          <rect x="100" y="22" width="3.5" height="62" rx="1.75" fill="#F97316" />

          {/* "UP" – extra-bold orange */}
          <text
            x="114"
            y="79"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            fontSize="66"
            fill="#F97316"
          >
            UP
          </text>

          {/* "Startuphub.com" – bold, colour controlled by prop */}
          <text
            x="211"
            y="79"
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            fontSize="63"
            fill={textColor}
          >
            Startuphub.com
          </text>
        </>
      )}
    </svg>
  );
}

export default Logo;
