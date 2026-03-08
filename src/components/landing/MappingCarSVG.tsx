export default function MappingCarSVG() {
  return (
    <svg
      viewBox="0 0 900 240"
      className="w-full h-auto"
      role="img"
      aria-label="Vehículo de mapeo animado viajando de punto A a punto B"
    >
      <defs>
        <filter id="lamp-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sensor-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        .car-group {
          animation: moveCar 9s ease-in-out infinite;
        }
        @keyframes moveCar {
          0%, 5% { transform: translateX(0); opacity: 1; }
          78% { transform: translateX(690px); opacity: 1; }
          84% { transform: translateX(690px); opacity: 0; }
          85% { transform: translateX(0); opacity: 0; }
          92% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .lamp-1 { opacity: 0; animation: lampIn 0.6s ease-out 2s forwards; }
        .lamp-2 { opacity: 0; animation: lampIn 0.6s ease-out 4s forwards; }
        .lamp-3 { opacity: 0; animation: lampIn 0.6s ease-out 6s forwards; }
        @keyframes lampIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Road surface */}
      <line x1="50" y1="195" x2="850" y2="195" stroke="currentColor" strokeWidth="2" opacity="0.15" />
      <line x1="50" y1="198" x2="850" y2="198" stroke="currentColor" strokeWidth="1" opacity="0.08" strokeDasharray="12 10" />

      {/* Point A */}
      <circle cx="65" cy="195" r="5" fill="#3cb4a3" />
      <text x="65" y="220" textAnchor="middle" fill="currentColor" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="600" opacity="0.6">A</text>

      {/* Point B */}
      <circle cx="840" cy="195" r="5" fill="#3cb4a3" />
      <text x="840" y="220" textAnchor="middle" fill="currentColor" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="600" opacity="0.6">B</text>

      {/* Lamp post 1 */}
      <g className="lamp-1">
        <rect x="278" y="115" width="3" height="80" rx="1.5" fill="currentColor" opacity="0.25" />
        <rect x="268" y="110" width="22" height="3" rx="1.5" fill="currentColor" opacity="0.25" />
        <circle cx="279" cy="107" r="5" fill="#3cb4a3" opacity="0.9" filter="url(#lamp-glow)" />
        <circle cx="279" cy="107" r="10" fill="#3cb4a3" opacity="0.1" />
      </g>

      {/* Lamp post 2 */}
      <g className="lamp-2">
        <rect x="488" y="115" width="3" height="80" rx="1.5" fill="currentColor" opacity="0.25" />
        <rect x="478" y="110" width="22" height="3" rx="1.5" fill="currentColor" opacity="0.25" />
        <circle cx="489" cy="107" r="5" fill="#3cb4a3" opacity="0.9" filter="url(#lamp-glow)" />
        <circle cx="489" cy="107" r="10" fill="#3cb4a3" opacity="0.1" />
      </g>

      {/* Lamp post 3 */}
      <g className="lamp-3">
        <rect x="698" y="115" width="3" height="80" rx="1.5" fill="currentColor" opacity="0.25" />
        <rect x="688" y="110" width="22" height="3" rx="1.5" fill="currentColor" opacity="0.25" />
        <circle cx="699" cy="107" r="5" fill="#3cb4a3" opacity="0.9" filter="url(#lamp-glow)" />
        <circle cx="699" cy="107" r="10" fill="#3cb4a3" opacity="0.1" />
      </g>

      {/* Mapping Car */}
      <g className="car-group">
        {/* Shadow */}
        <ellipse cx="92" cy="197" rx="35" ry="3" fill="currentColor" opacity="0.08" />
        {/* Body */}
        <rect x="55" y="168" width="75" height="26" rx="5" fill="#3cb4a3" />
        {/* Cabin */}
        <path d="M70 168 L80 152 L112 152 L122 168" fill="#4f56a1" opacity="0.85" />
        {/* Windshield */}
        <path d="M82 154 L86 160 L108 160 L112 154" fill="#3cb4a3" opacity="0.35" />
        {/* Wheels */}
        <circle cx="78" cy="195" r="7" fill="currentColor" opacity="0.6" />
        <circle cx="78" cy="195" r="3.5" fill="currentColor" opacity="0.25" />
        <circle cx="112" cy="195" r="7" fill="currentColor" opacity="0.6" />
        <circle cx="112" cy="195" r="3.5" fill="currentColor" opacity="0.25" />
        {/* Roof sensor / camera */}
        <rect x="88" y="144" width="14" height="8" rx="2" fill="#4f56a1" />
        <rect x="91" y="140" width="8" height="4" rx="1.5" fill="#3cb4a3" filter="url(#sensor-glow)" />
        <circle cx="95" cy="142" r="2.5" fill="#3cb4a3" opacity="0.35" />
      </g>
    </svg>
  );
}
