// Shared gradient SVG icons with pink-to-blue theme
// Colors: Pink (#ec4899) to Blue (#3b82f6)

export const GradientIcons = {
  // AI/Tech Icon - Robot
  Robot: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradRobot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="18" r="6" fill="url(#gradRobot)"/>
      <path d="M14 42a10 10 0 0 1 20 0" stroke="url(#gradRobot)" strokeWidth="3" fill="none"/>
      <circle cx="16" cy="16" r="2" fill="url(#gradRobot)"/>
      <circle cx="32" cy="16" r="2" fill="url(#gradRobot)"/>
    </svg>
  ),

  // Innovation - Lightbulb
  Lightbulb: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradLightbulb" x1="0%" y1 ="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="18" r="8" fill="url(#gradLightbulb)" opacity="0.3"/>
      <path d="M18 28v4h12v-4M24 10v2M14 14l2 2M34 14l-2 2M10 24h2M36 24h2" stroke="url(#gradLightbulb)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18 32h12v2H18z" fill="url(#gradLightbulb)"/>
    </svg>
  ),

  // Target - Goals/Focus
  Target: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradTarget" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="4" fill="url(#gradTarget)"/>
      <circle cx="24" cy="24" r="8" stroke="url(#gradTarget)" strokeWidth="2.5" fill="none"/>
      <circle cx="24" cy="24" r="14" stroke="url(#gradTarget)" strokeWidth="2" fill="none"/>
    </svg>
  ),

  // Rocket - Launch/Speed
  Rocket: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradRocket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M24 6L18 18L14 26L18 30L24 42L30 30L34 26L28 18L24 6Z" fill="url(#gradRocket)" opacity="0.3"/>
      <path d="M24 6v36M18 18l-4 8 4 4M30 18l4 8-4 4" stroke="url(#gradRocket)" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="20" r="3" fill="url(#gradRocket)"/>
    </svg>
  ),

  // Mobile - Mobile Device
  Mobile: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect x="14" y="6" width="20" height="36" rx="3" stroke="url(#gradMobile)" strokeWidth="2.5" fill="none"/>
      <path d="M22 38h4" stroke="url(#gradMobile)" strokeWidth="2" strokeLinecap="round"/>
      <rect x="14" y="10" width="20" height="24" fill="url(#gradMobile)" opacity="0.2"/>
    </svg>
  ),

  // Settings/Gear
  Gear: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradGear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="6" fill="url(#gradGear)"/>
      <path d="M24 10v4M24 34v4M10 24h4M34 24h4M16 16l3 3M29 29l3 3M16 32l3-3M29 19l3-3" stroke="url(#gradGear)" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  // Trophy - Achievement/Award
  Trophy: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradTrophy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M14 10h20v8c0 5.5-4.5 10-10 10s-10-4.5-10-10v-8z" fill="url(#gradTrophy)" opacity="0.3"/>
      <path d="M14 10h20v8c0 5.5-4.5 10-10 10s-10-4.5-10-10v-8zM24 28v6M18 34h12M12 10v4c0 2 1 4 3 4M36 10v4c0 2-1 4-3 4" stroke="url(#gradTrophy)" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  // Team - People
  Team: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradTeam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="16" r="5" fill="url(#gradTeam)"/>
      <circle cx="14" cy="18" r="4" fill="url(#gradTeam)" opacity="0.6"/>
      <circle cx="34" cy="18" r="4" fill="url(#gradTeam)" opacity="0.6"/>
      <path d="M14 38a10 10 0 0 1 20 0M6 36a8 8 0 0 1 12-6M42 36a8 8 0 0 0-12-6" stroke="url(#gradTeam)" strokeWidth="2.5" fill="none"/>
    </svg>
  ),

  // Globe - Global/Network
  Globe: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradGlobe" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="16" stroke="url(#gradGlobe)" strokeWidth="2.5" fill="none"/>
      <path d="M24 8v32M8 24h32" stroke="url(#gradGlobe)" strokeWidth="2"/>
      <ellipse cx="24" cy="24" rx="8" ry="16" stroke="url(#gradGlobe)" strokeWidth="2" fill="none"/>
    </svg>
  ),
  
  // Vision - Eye
  Eye: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradEye" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M4 24C4 24 10 12 24 12C38 12 44 24 44 24C44 24 38 36 24 36C10 36 4 24 4 24Z" stroke="url(#gradEye)" strokeWidth="2.5" fill="none"/>
      <circle cx="24" cy="24" r="6" fill="url(#gradEye)"/>
      <circle cx="26" cy="22" r="2" fill="white" opacity="0.5"/>
    </svg>
  ),

  // Social - LinkedIn
  Linkedin: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradLinkedin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 18h8v24H6V18zM18 18h8v3.4c1.2-2.2 4-3.4 7-3.4 7.6 0 9 5 9 11.6V42h-8V29.4c0-3-1-5.2-4-5.2-3 0-4 2-4 5v12.8h-8V18z" fill="url(#gradLinkedin)"/>
    </svg>
  ),

  // Social - GitHub
  Github: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradGithub" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M24 4C13 4 4 13 4 24c0 8.8 5.7 16.3 13.7 19 .1.02.3 0 .4-.1.1-.1.1-.2.1-.4v-3.4c-5.5 1.2-6.7-2.7-6.7-2.7-.9-2.3-2.2-2.9-2.2-2.9-1.8-1.2.1-1.2.1-1.2 2 .1 3 2.1 3 2.1 1.8 3 4.6 2.1 5.8 1.6.2-1.3.7-2.2 1.3-2.7-4.4-.5-9-2.2-9-9.8 0-2.2.8-3.9 2-5.3-.2-.5-.9-2.5.2-5.2 0 0 1.7-.5 5.5 2.1 1.6-.4 3.3-.7 5-.7 1.7 0 3.4.2 5 .7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.7.4 4.7.2 5.2 1.3 1.4 2 3.1 2 5.3 0 7.6-4.6 9.3-9 9.8.7.6 1.4 1.9 1.4 3.7V42.5c0 .2 0 .3.1.4.1.1.2.1.4.1C38.3 40.3 44 32.8 44 24 44 13 35 4 24 4z" fill="url(#gradGithub)"/>
    </svg>
  ),

  // Contact - Email (@)
  AtSign: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradAt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="6" stroke="url(#gradAt)" strokeWidth="2.5" fill="none"/>
      <path d="M24 16v8" stroke="url(#gradAt)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M30 24h.2c3.4 0 5.8-2.6 5.8-6s-2.6-6-6-6H16c-6.6 0-12 5.4-12 12s5.4 12 12 12h14" stroke="url(#gradAt)" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
};
