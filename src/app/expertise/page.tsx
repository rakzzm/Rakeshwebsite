import styles from './page.module.css';
import { TypewriterTitle } from '@/components/TypewriterTitle';
import { GradientIcons } from '@/components/GradientIcons';
import { CategoryIcons } from '@/components/CategoryIcons';

export const metadata = {
  title: 'Expertise | Rakesh Mohan',
  description: 'Core expertise in AI/LLM, Conversational AI, VOIP, Cloud/SaaS, and Customer Experience',
};

export default function ExpertisePage() {
  return (
    <div className={styles.page}>
      <section className={styles.expertise}>
        <div className={styles.expertiseBackground}> </div>
        
        <div className="container">
          <div className={styles.sectionHeader}>

            <TypewriterTitle text="Core Expertise" className={styles.sectionTitle} />
            <p className={styles.sectionDescription}>
              18+ years of experience driving digital transformation through innovative AI and communication technology solutions
            </p>
            {/* Hero Visuals - Scrolling Gallery */}
            <div className={styles.heroVisuals}>
              <div className={styles.imageTrack}>
                {/* Duplicate set of images for seamless scrolling */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className={styles.imageSet}>
                    <div className={styles.heroImageCard}>
                      <img src="/Artificial%20Intelligence%20%26%20LLM.png" alt="Artificial Intelligence & LLM" />
                      <span>AI & LLM</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/Conversational%20AI.png" alt="Conversational AI" />
                      <span>Conversational AI</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/VoIP%20Infrastructure.png" alt="VoIP Infrastructure" />
                      <span>VoIP</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/Unified%20Communications.png" alt="Unified Communications" />
                      <span>UC</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/Cloud%20Solutions.png" alt="Cloud Solutions" />
                      <span>Cloud</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/CPaaS%20Solutions.png" alt="CPaaS Solutions" />
                      <span>CPaaS</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/Customer%20Experience%20(CX).png" alt="Customer Experience" />
                      <span>CX</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/Networking%20%26%20Security.png" alt="Networking & Security" />
                      <span>Security</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Enterprise Clients</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Industries Served</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>AI Solutions Running</div>
            </div>
          </div>
          
          {/* Main Expertise Grid */}
          <div className={styles.expertiseGrid}>
            {expertiseData.map((item, index) => (
              <div key={index} className={styles.expertiseCard}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                
                {/* Key Capabilities */}
                <div className={styles.capabilities}>
                  <h4 className={styles.capabilitiesTitle}>Key Capabilities:</h4>
                  <ul className={styles.capabilitiesList}>
                    {item.capabilities.map((capability, i) => (
                      <li key={i}>{capability}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <ul className={styles.techTags}>
                  {item.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Achievements Section */}
          <div className={styles.achievementsSection}>
            <h2 className={styles.achievementsTitle}>Key Achievements</h2>
            <div className={styles.achievementsGrid}>
              {achievements.map((achievement, index) => (
                <div key={index} className={styles.achievementCard}>
                  <div className={styles.achievementIcon}>{achievement.icon}</div>
                  <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                  <p className={styles.achievementDescription}>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const expertiseData = [
  {
    title: "Artificial Intelligence & LLM",
    description: "Leading AI transformation initiatives with cutting-edge Large Language Models, implementing RAG systems, and developing custom AI solutions that drive business value.",
    capabilities: [
      "LLM integration and fine-tuning for enterprise use cases",
      "RAG (Retrieval-Augmented Generation) architecture design",
      "Prompt engineering and optimization strategies",
      "AI model evaluation and performance monitoring",
      "Custom AI solution development and deployment"
    ],
    tags: ["LLM", "RAG", "NLP", "Machine Learning", "GPT", "Claude", "Gemini"],
    icon: <CategoryIcons.AINeuralNetwork />
  },
  {
    title: "Conversational AI",
    description: "Architecting intelligent conversational experiences through advanced Voice Bots, Video Bots, and Chatbots with natural language understanding and multi-channel deployment.",
    capabilities: [
      "End-to-end conversational AI solution design",
      "Advanced NLU/NLP implementation and optimization",
      "Multi-channel bot deployment (web, mobile, voice)",
      "Intent recognition and dialogue management",
      "Integration with CRM and business systems"
    ],
    tags: ["Voice Bots", "Video Bots", "Chatbots", "NLU/NLP", "Dialogflow", "Rasa"],
    icon: <CategoryIcons.ConversationalAI />
  },
  {
    title: "VoIP Infrastructure",
    description: "Deep expertise in designing and implementing enterprise-grade VoIP networks, SIP trunking, and real-time media processing architectures.",
    capabilities: [
      "VoIP network architecture and optimization",
      "SIP protocol implementation and troubleshooting",
      "WebRTC media server configuration",
      "SBC (Session Border Controller) deployment",
      "Call quality (QoS) monitoring and analysis"
    ],
    tags: ["VOIP", "SIP", "WebRTC", "SBC", "RTP", "Asterisk"],
    icon: <CategoryIcons.VoIP />
  },
  {
    title: "Unified Communications",
    description: "Delivering seamless collaboration experiences by integrating voice, video, and messaging platforms for modern hybrid enterprises.",
    capabilities: [
      "UC platform integration (Teams, Zoom, Webex)",
      "Enterprise collaboration strategy",
      "Video conferencing infrastructure",
      "Presence and instant messaging systems",
      "UCaaS migration and deployment"
    ],
    tags: ["UC", "Microsoft Teams", "Zoom", "Collaboration", "Video Conferencing"],
    icon: <CategoryIcons.UnifiedComms />
  },
  {
    title: "Cloud Solutions",
    description: "Architecting scalable, resilient cloud-native solutions with deep expertise across AWS, Azure, and GCP to drive digital value.",
    capabilities: [
      "Cloud architecture design (AWS, Azure, GCP)",
      "Cloud migration and modernization strategies",
      "Serverless and container orchestration (K8s)",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Cost optimization and security compliance"
    ],
    tags: ["Cloud Architecture", "AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
    icon: <CategoryIcons.Cloud />
  },
  {
    title: "SaaS Platforms",
    description: "End-to-end development and scaling of multi-tenant SaaS platforms using modern microservices architectures and API-first principles.",
    capabilities: [
      "Multi-tenant architecture design",
      "Microservices and API-first development",
      "Subscription and billing system integration",
      "High-availability and disaster recovery planning",
      "SaaS performance optimization"
    ],
    tags: ["SaaS", "Microservices", "Multi-tenancy", "API Design", "Scalability"],
    icon: <CategoryIcons.SaaS />
  },
  {
    title: "CPaaS Solutions",
    description: "Integrating real-time communication capabilities into applications using leading CPaaS providers and custom communication workflows.",
    capabilities: [
      "Twilio & Vonage API integration",
      "Custom communication workflows (SMS, Voice, Video)",
      "Contact Center as a Service (CCaaS) setup",
      "Programmable voice and messaging solutions",
      "Real-time signaling and media handling"
    ],
    tags: ["CPaaS", "Twilio", "Communications API", "WebRTC", "SMS/Voice"],
    icon: <CategoryIcons.CPaaS />
  },
  {
    title: "Customer Experience (CX)",
    description: "Transforming customer journeys through AI-powered CX solutions, implementing omnichannel strategies and leveraging analytics for continuous improvement.",
    capabilities: [
      "CX strategy development and implementation",
      "Omnichannel customer journey mapping",
      "AI-powered personalization and recommendations",
      "Customer analytics and insights generation",
      "CX platform integration and optimization"
    ],
    tags: ["CX Strategy", "Omnichannel", "Analytics", "AI-CX", "Personalization"],
    icon: <CategoryIcons.CustomerExp />
  },

  {
    title: "Generative AI & Voice Tech",
    description: "Pushing the boundaries of voice technology with Generative AI, specializing in ASR, TTS, Voice Cloning, and advanced Prompt Engineering.",
    capabilities: [
      "Automatic Speech Recognition (ASR) optimization",
      "Text-to-Speech (TTS) and Voice Cloning",
      "Advanced Prompt Engineering and Fine-tuning",
      "Real-time voice processing pipelines",
      "Multi-lingual voice model deployment"
    ],
    tags: ["Generative AI", "Voice Cloning", "ASR/TTS", "Prompt Engineering", "AudioCodes"],
    icon: <CategoryIcons.AIInfrastructure />
  },
  {
    title: "Data Center Infrastructure",
    description: "Comprehensive management of Data Center infrastructure, including server management, storage virtualization, and physical security considerations for mission-critical operations.",
    capabilities: [
      "Data Center infrastructure management (DCIM)",
      "Server and storage virtualization",
      "Disaster recovery and business continuity",
      "Power and cooling optimization",
      "Physical security and compliance auditing"
    ],
    tags: ["Data Center", "Virtualization", "Infrastructure", "Disaster Recovery", "DCIM"],
    icon: <CategoryIcons.DataCenter />
  },
  {
    title: "Networking & Security",
    description: "Designing robust, secure, and high-performance network architectures. Expertise in 4G/5G, Fiber, Core Networking, and advanced cybersecurity protocols.",
    capabilities: [
      "Core Network Architecture (4G/5G, LTE)",
      "Network Security and Firewall policies",
      "TCP/IP, Routing, and Switching protocols",
      "Software-Defined Networking (SDN)",
      "VPN and secure remote access solutions"
    ],
    tags: ["Networking", "4G/5G", "Cybersecurity", "SDN", "Routing & Switching"],
    icon: <CategoryIcons.NetworkSecurity />
  },
  {
    title: "Enterprise Platforms",
    description: "Implementation and optimization of strategic enterprise platforms including CRM, CSM, and ITSM tools to streamline business operations.",
    capabilities: [
      "CRM Strategy and Implementation (Salesforce, Dynamics)",
      "IT Service Management (ITSM) workflows",
      "Customer Success Management (CSM) tools",
      "ERP system integration",
      "Business process automation"
    ],
    tags: ["CRM", "Salesforce", "ITSM", "ERP", "Business Automation"],
    icon: <CategoryIcons.Enterprise />
  },
];

const achievements = [
  {
    icon: <GradientIcons.Rocket />,
    title: "Scalable AI Deployments",
    description: "Successfully deployed AI solutions handling 10M+ interactions monthly across multiple industries"
  },
  {
    icon: <GradientIcons.Rocket />,
    title: "Innovation Excellence",
    description: "Driving transformation through product strategy, solution design, and continuous innovation"
  },

  {
    icon: <GradientIcons.Lightbulb />,
    title: "Technology Visionary",
    description: "Identifying emerging trends and translating them into actionable business strategies"
  },
  {
    icon: <GradientIcons.Target />,
    title: "Results Oriented",
    description: "Proven track record of delivering solutions that exceed client expectations and drive measurable outcomes"
  },
];
