// Comprehensive gradient SVG icon library with consistent pink-to-blue theme
// Colors: Pink (#ec4899) to Blue (#3b82f6)

export const CategoryIcons = {
  // AI & LLM - Neural Network/Layers
  AINeuralNetwork: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradAI" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M24 4L4 14L24 24L44 14L24 4Z" stroke="url(#gradAI)" strokeWidth="2.5" fill="none"/>
      <path d="M4 34L24 44L44 34" stroke="url(#gradAI)" strokeWidth="2.5" fill="none"/>
      <path d="M4 24L24 34L44 24" stroke="url(#gradAI)" strokeWidth="2.5" fill="none"/>
    </svg>
  ),

  // Conversational AI - Chat Bubbles
  ConversationalAI: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradConv" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="10" cy="20" r="8" stroke="url(#gradConv)" strokeWidth="2.5" fill="none"/>
      <circle cx="38" cy="8" r="8" stroke="url(#gradConv)" strokeWidth="2.5" fill="none"/>
      <circle cx="38" cy="40" r="8" stroke="url(#gradConv)" strokeWidth="2.5" fill="none"/>
      <path d="M18 18L30 10M30 36L18 22" stroke="url(#gradConv)" strokeWidth="2" />
    </svg>
  ),

  // VoIP - Headset
  VoIP: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradVoIP" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M14 14C14 8.5 18.5 4 24 4C29.5 4 34 8.5 34 14V20H14V14Z" stroke="url(#gradVoIP)" strokeWidth="2.5" fill="none"/>
      <rect x="10" y="20" width="28" height="20" rx="2" stroke="url(#gradVoIP)" strokeWidth="2.5" fill="none"/>
      <path d="M20 28H28M20 34H28" stroke="url(#gradVoIP)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // UC - Video Conference
  UnifiedComms: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradUC" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect x="4" y="12" width="40" height="24" rx="2" stroke="url(#gradUC)" strokeWidth="2.5" fill="none"/>
      <circle cx="16" cy="22" r="3" fill="url(#gradUC)"/>
      <circle cx="32" cy="22" r="3" fill="url(#gradUC)"/>
      <path d="M12 32A8 8 0 0 1 20 28M28 28A8 8 0 0 1 36 32" stroke="url(#gradUC)" strokeWidth="2" fill="none"/>
    </svg>
  ),

  // Cloud - Cloud Stack
  Cloud: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradCloud" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M12 20c0-4 4-8 12-8s12 4 12 8c0 2-1 4-3 5 2 1 3 3 3 5 0 4-4 8-12 8s-12-4-12-8c0-2 1-4 3-5-2-1-3-3-3-5z" fill="url(#gradCloud)" opacity="0.3"/>
      <path d="M12 20c0-4 4-8 12-8s12 4 12 8c0 2-1 4-3 5 2 1 3 3 3 5 0 4-4 8-12 8s-12-4-12-8c0-2 1-4 3-5-2-1-3-3-3-5z" stroke="url(#gradCloud)" strokeWidth="2.5" fill="none"/>
    </svg>
  ),

  // CPaaS - API Connections
  CPaaS: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradCPaaS" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="6" fill="url(#gradCPaaS)"/>
      <circle cx="36" cy="12" r="6" fill="url(#gradCPaaS)"/>
      <circle cx="24" cy="36" r="6" fill="url(#gradCPaaS)"/>
      <path d="M16 16L22 32M32 16L26 32" stroke="url(#gradCPaaS)" strokeWidth="2.5"/>
    </svg>
  ),

  // CX - Customer Service
  CustomerExp: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradCX" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="18" r="8" stroke="url(#gradCX)" strokeWidth="2.5" fill="none"/>
      <path d="M10 40C10 32 16 26 24 26C32 26 38 32 38 40" stroke="url(#gradCX)" strokeWidth="2.5" fill="none"/>
      <path d="M18 16L20 18L18 20M30 16L28 18L30 20" stroke="url(#gradCX)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // CPaaS Automation - Workflow
  Automation: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradAuto" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="12" cy="24" r="4" fill="url(#gradAuto)"/>
      <circle cx="36" cy="12" r="4" fill="url(#gradAuto)"/>
      <circle cx="36" cy="36" r="4" fill="url(#gradAuto)"/>
      <path d="M16 24H32M20 20L32 12M20 28L32 36" stroke="url(#gradAuto)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M30 12L36 12L36 18M36 30L36 36L30 36" stroke="url(#gradAuto)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // Contact Center - Phone Network
  ContactCenter: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradCC" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect x="6" y="14" width="36" height="20" rx="2" stroke="url(#gradCC)" strokeWidth="2.5" fill="none"/>
      <path d="M24 14V10M16 14V10M32 14V10M24 34V38M16 34V38M32 34V38" stroke="url(#gradCC)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="4" fill="url(#gradCC)"/>
    </svg>
  ),

  // Data Center - Server
  DataCenter: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradDC" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="32" height="8" rx="2" stroke="url(#gradDC)" strokeWidth="2.5" fill="none"/>
      <rect x="8" y="20" width="32" height="8" rx="2" stroke="url(#gradDC)" strokeWidth="2.5" fill="none"/>
      <rect x="8" y="32" width="32" height="8" rx="2" stroke="url(#gradDC)" strokeWidth="2.5" fill="none"/>
      <circle cx="14" cy="12" r="1.5" fill="url(#gradDC)"/>
      <circle cx="14" cy="24" r="1.5" fill="url(#gradDC)"/>
      <circle cx="14" cy="36" r="1.5" fill="url(#gradDC)"/>
    </svg>
  ),

  // Network Security - Shield
  NetworkSecurity: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradSec" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M24 4L8 12V22C8 32 16 40 24 44C32 40 40 32 40 22V12L24 4Z" stroke="url(#gradSec)" strokeWidth="2.5" fill="none"/>
      <path d="M18 24L22 28L30 18" stroke="url(#gradSec)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // AI Infrastructure - Brain Nodes
  AIInfrastructure: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradBrain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="12" r="6" fill="url(#gradBrain)" opacity="0.3"/>
      <circle cx="12" cy="30" r="5" fill="url(#gradBrain)" opacity="0.3"/>
      <circle cx="36" cy="30" r="5" fill="url(#gradBrain)" opacity="0.3"/>
      <path d="M20 16L14 26M28 16L34 26M16 34L32 34" stroke="url(#gradBrain)" strokeWidth="2.5" />
      <circle cx="24" cy="12" r="3" fill="url(#gradBrain)"/>
      <circle cx="12" cy="30" r="2.5" fill="url(#gradBrain)"/>
      <circle cx="36" cy="30" r="2.5" fill="url(#gradBrain)"/>
      <circle cx="24" cy="36" r="2.5" fill="url(#gradBrain)"/>
    </svg>
  ),
  // SaaS - Application Grid
  SaaS: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradSaaS" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="12" height="12" rx="2" stroke="url(#gradSaaS)" strokeWidth="2.5" fill="none"/>
      <rect x="26" y="10" width="12" height="12" rx="2" stroke="url(#gradSaaS)" strokeWidth="2.5" fill="none"/>
      <rect x="10" y="26" width="12" height="12" rx="2" stroke="url(#gradSaaS)" strokeWidth="2.5" fill="none"/>
      <rect x="26" y="26" width="12" height="12" rx="2" stroke="url(#gradSaaS)" strokeWidth="2.5" fill="none"/>
    </svg>
  ),

  // Enterprise - Layers/Platform
  Enterprise: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradEnt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M24 8L6 16L24 24L42 16L24 8Z" stroke="url(#gradEnt)" strokeWidth="2.5" fill="none"/>
      <path d="M6 24L24 32L42 24" stroke="url(#gradEnt)" strokeWidth="2.5" fill="none"/>
      <path d="M6 32L24 40L42 32" stroke="url(#gradEnt)" strokeWidth="2.5" fill="none"/>
    </svg>
  ),
};
