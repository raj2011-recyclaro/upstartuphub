function Logo({ primaryColor = "#1E3A8A", accentColor = "#FF6600", textColor = "#2D3748", className = "", iconOnly = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconOnly ? "0 0 100 110" : "0 0 820 110"}
      fill="none"
      className={className}
      aria-label="UP Startup Hub"
    >
      <g transform="translate(5, 5)">
        {/* House Outline */}
        <path
          d="M 12 100 L 12 45 L 48 5 L 84 45 L 84 65 L 70 65 L 70 100 Z"
          stroke={primaryColor}
          strokeWidth="6.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Rocket Interior */}
        <g transform="translate(45, 52) rotate(-2)">
          {/* Flame - Dynamic Orange Accent */}
          <path 
            d="M -6 22 C -8 35 -12 42 -6 48 C 0 54 6 54 12 48 C 18 42 14 35 12 22" 
            fill={accentColor} 
            className="animate-pulse"
            opacity="0.9"
          />
          <path 
            d="M -3 22 C -5 32 -8 38 -3 42 C 0 46 3 46 6 42 C 10 38 7 32 6 22" 
            fill="#FFD700" 
            opacity="0.6"
          />
          
          {/* Rocket Body */}
          <path
            d="M 0 -32 C -15 -32 -18 -15 -18 0 L -18 18 C -10 25 10 25 18 18 L 18 0 C 18 -15 15 -32 0 -32 Z"
            fill="white"
            stroke={primaryColor}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          
          {/* Fins */}
          <path d="M -17 8 L -28 32 L -8 20 Z" fill={primaryColor} />
          <path d="M 17 8 L 28 32 L 8 20 Z" fill={primaryColor} />

          {/* Window */}
          <circle cx="0" cy="-6" r="7" fill="white" stroke={primaryColor} strokeWidth="3" />
          <circle cx="0" cy="-6" r="3.5" fill={primaryColor} />
        </g>
      </g>

      {!iconOnly && (
        <g transform="translate(110, 0)">
          {/* Vertical Divider */}
          <rect y="20" width="3" height="70" rx="1.5" fill={primaryColor} opacity="0.15" />

          {/* Brand Name */}
          <g transform="translate(25, 0)">
            <text
              y="85"
              fontFamily="Outfit, Inter, sans-serif"
              fontWeight="800"
              fontSize="78"
              fill={accentColor}
              letterSpacing="-0.03em"
            >
              UP
            </text>
            <text
              x="105"
              y="85"
              fontFamily="Outfit, Inter, sans-serif"
              fontWeight="500"
              fontSize="72"
              fill={primaryColor}
              letterSpacing="-0.02em"
            >
              Startuphub.com
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}

export default Logo;

