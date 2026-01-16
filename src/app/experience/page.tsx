import styles from './page.module.css';
import { TypewriterTitle } from '@/components/TypewriterTitle';
import { GradientIcons } from '@/components/GradientIcons';

export const metadata = {
  title: 'Experience | Rakesh Mohan',
  description: '18+ years journey across VOIP, UC, Cloud, and AI technologies',
};

export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>


        <div className="container">
          <div className={styles.sectionHeader}>

            <TypewriterTitle text="Professional Journey" className={styles.sectionTitle} />
            <p className={styles.sectionDescription}>
              18+ years driving digital transformation across evolving technology landscapes — from VOIP infrastructure to cutting-edge AI solutions
            </p>

            {/* Hero Visuals - Scrolling Gallery */}
            <div className={styles.heroVisuals}>
              <div className={styles.imageTrack}>
                {/* Duplicate set of images for seamless scrolling */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className={styles.imageSet}>
                    <div className={styles.heroImageCard}>
                      <img src="/role_leadership.png" alt="Leadership" />
                      <span>Leadership</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/role_sales.png" alt="Sales" />
                      <span>Sales</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/role_presales.png" alt="Presales" />
                      <span>Presales</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/role_engineer.png" alt="Engineer" />
                      <span>Engineer</span>
                    </div>
                    <div className={styles.heroImageCard}>
                      <img src="/role_product.png" alt="Product" />
                      <span>Product</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Summary Stats */}
          <div className={styles.summaryStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>18+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>100+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>10+</div>
              <div className={styles.statLabel}>Industries</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.timeline}>
            {experienceData.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.roleHeader}>
                    <div>
                      <span className={styles.timelineYear}>{item.year}</span>
                      <h3 className={styles.timelineTitle}>{item.title}</h3>
                      {item.company && (
                        <p className={styles.companyName}>{item.company}</p>
                      )}
                    </div>
                    <div className={styles.roleIcon}>{item.icon}</div>
                  </div>
                  
                  <p className={styles.timelineDescription}>{item.description}</p>
                  
                  {/* Key Achievements */}
                  {item.achievements && (
                    <div className={styles.achievements}>
                      <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
                      <ul className={styles.achievementsList}>
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>
                            <span className={styles.checkIcon}>✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Used */}
                  {item.technologies && (
                    <div className={styles.technologiesSection}>
                      <h4 className={styles.techTitle}>Technologies & Tools:</h4>
                      <ul className={styles.techTags}>
                        {item.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Career Highlights Section */}
          <div className={styles.highlightsSection}>
            <h2 className={styles.highlightsTitle}>Career Highlights</h2>
            <div className={styles.highlightsGrid}>
              {careerHighlights.map((highlight, index) => (
                <div key={index} className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>{highlight.icon}</div>
                  <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                  <p className={styles.highlightDescription}>{highlight.description}</p>
                  <div className={styles.highlightMetric}>{highlight.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const experienceData = [
  {
    year: "Mar 2025 - Oct 2025",
    title: "Sales Manager – Global",
    company: "ZKJ Technologies / Ideal-careerbridge Holdings",
    icon: <img src="/ZKJ Technologies.png" alt="ZKJ Technologies" />,
    description: "Developed and executed comprehensive sales strategies for LLM, voice bot, and chatbot solutions. Managed the entire sales cycle for enterprise-level AI solution deployments and built partner/channel management through ASEAN.",
    achievements: [
      "Led sales strategies for LLM, voice bot, and chatbot solutions",
      "Managed entire sales cycle from prospecting to deal closure",
      "Maintained deep understanding of LLM, NLU, STT, TTS, and voice cloning",
      "Built strong relationships with C-level executives in target organizations",
      "Partnered with Professional Services for seeamless implementation"
    ],
    technologies: ["LLM", "Voice Bots", "Chatbots", "Sales Strategy", "Partner Management", "CRM", "ERP"]
  },
  {
    year: "Jun 2024 - Jan 2025",
    title: "Presales Solution Manager – Global",
    company: "Cataleya PTE Ltd",
    icon: <img src="/Cataleya.png" alt="Cataleya" />,
    description: "Collaborated with sales teams to identify and qualify customers for SaaS solutions. Managed channel sales and technical training activities, providing guidance throughout the sales cycle.",
    achievements: [
      "managed technical/sales training for SI partners on VOIP, Microsoft, Zoom, etc.",
      "Delivered compelling product presentations to C-level executives",
      "Assisted with SOC, RFP, RFI compliance documentations",
      "Upsold voice infra products to over 100+ existing customers",
      "Deep industry knowledge in F&B, Retail, Banking, and Manufacturing"
    ],
    technologies: ["SaaS", "VoIP", "Microsoft Teams", "Zoom", "Salesforce", "Network Security", "TCP/IP", "SIP"]
  },
  {
    year: "Jan 2021 - May 2024",
    title: "Presales Lead- APAC",
    company: "AudioCodes PTE Ltd",
    icon: <img src="/Audiocodes.png" alt="AudioCodes" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />,
    description: "Partnered with sales teams to drive complex enterprise solutions, exceeding quota by 10% in 2023. Provided technical expertise and solution design to Fortune 500 clients.",
    achievements: [
      "Exceeded sales quota by 10% in 2023",
      "Conducted training and workshops for customers and channel partners",
      "Provided solution design for Fortune 500 clients",
      "Closed major accounts across ASEAN in BFSI, Airlines, and Service Provider sectors",
      "Evaluated BOM, SOW, MSA, and security compliance checklists"
    ],
    technologies: ["Genesys", "Cisco", "Avaya", "Microsoft", "AWS", "Google", "Zoom", "Twilio", "Vonage"]
  },
  {
    year: "Jul 2019 - Dec 2021",
    title: "Product Manager - Malaysia",
    company: "Maxis Broadband Sdn Bhd",
    icon: <img src="/Maxis Broadband.png" alt="Maxis" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />,
    description: "Managed the product roadmap and rollout of critical updates for B2B SaaS products in the Telco industry. Conducted user research and managed cross-functional teams for seamless launches.",
    achievements: [
      "Managed two entity M&A integration to increase core business revenue",
      "Improved product conversion rate by 20% through A/B testing and UI optimization",
      "Delivered critical product updates on time and within budget",
      "Handled portfolio including SIP Trunking, UCaaS, CCaaS, SaaS, and Cloud",
      "Acting as key liaison between engineering, design, and marketing"
    ],
    technologies: ["Product Management", "B2B SaaS", "Telco", "4G/LTE/5G", "SIP Trunking", "UCaaS", "CCaaS"]
  },
  {
    year: "Mar 2018 - Jun 2019",
    title: "Solution Consultant - APAC",
    company: "NTT Ltd",
    icon: <img src="/NTT.png" alt="NTT" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />,
    description: "Focused on Data Center, Virtualization, VOIP, and Network/Security portfolios. Translated complex functionalities into understandable terms for clients with a pre-sales target of 16 RM Million/year.",
    achievements: [
      "Met focused pre-sales target of 16 RM Million per year",
      "Conducted in-depth needs assessments for key clients",
      "Handled major accounts like JIO, DHL, Manulife, CIMB, Singapore Airlines",
      "Participated in RFP, Tenders, SOW, and BOM preparation",
      "Designed customized solutions for complex business challenges"
    ],
    technologies: ["Data Center", "Virtualization", "VoIP", "Networking", "Security", "SaaS"]
  },
  {
    year: "Sep 2016 - Mar 2018",
    title: "Solution Consultant - APAC",
    company: "Polycom Ltd",
    icon: <img src="/Polycom.png" alt="Polycom" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />,
    description: "Conducted needs assessments to recommend Polycom communication and collaboration solutions. Provided expert-level technical support for complex audio/video conferencing issues.",
    achievements: [
      "Recommended optimal Polycom solutions based on customer requirements",
      "Provided user training on Polycom functionalities",
      "Optimized system performance for Microsoft Teams, Zoom, Webex environments",
      "Troubleshoot complex audio and video conferencing interoperability issues",
      "Ensured network connectivity and bandwidth management"
    ],
    technologies: ["Polycom", "Video Conferencing", "Microsoft Teams", "Zoom", "Webex", "Audio Conferencing"]
  },
  {
    year: "Mar 2009 - Aug 2016",
    title: "Service Delivery Consultant",
    company: "Hewlett Packet Enterprise (HPE)",
    icon: <img src="/Hewlett Packet Enterprise.png" alt="HPE" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />,
    description: "Managed voice infrastructure for global clients like P&G, Unilever, and AT&T. Handled Support, Service Delivery, Project Management, and Incident Management roles.",
    achievements: [
      "Managed project resources, budgets, and timelines for efficient delivery",
      "Managed voice infrastructure for major global clients",
      "Handled Incident, Problem, and Change Management processes",
      "Communicated effectively with stakeholders on project status and risks",
      "Provided technical expertise on Cisco, Avaya, Polycom, and Skype tech stacks"
    ],
    technologies: ["Service Delivery", "Project Management", "ITIL", "Voice Infrastructure", "Cisco", "Avaya", "HPE"]
  },
  {
    year: "Mar 2006 - Sep 2008",
    title: "Business Process Executive",
    company: "Sutherland Global Services",
    icon: <img src="/Sutherland Global Services.png" alt="Sutherland" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />,
    description: "Provided first-line technical support for internal and external clients. Diagnosed and resolved hardware, software, and network issues to maintain high IT service availability.",
    achievements: [
      "Maintained high level of IT service availability and user productivity",
      "Diagnosed and resolved wide range of hardware/software/network issues",
      "Documented support interactions for knowledge base",
      "Provided remote desktop and phone/email support",
      "Ensured timely resolution and user satisfaction"
    ],
    technologies: ["Technical Support", "Troubleshooting", "Networking", "Hardware", "Software Support"]
  }
];

const careerHighlights = [
  {
    icon: <GradientIcons.Target />,
    title: "Innovation Driver",
    description: "Led digital transformation initiatives across 50+ organizations",
    metric: "100+ Projects"
  },
  {
    icon: <GradientIcons.Trophy />,
    title: "Technical Excellence",
    description: "Achieved industry-leading performance metrics and system reliability",
    metric: "99.99% Uptime"
  },
  {
    icon: <GradientIcons.Team />,
    title: "Team Leadership",
    description: "Built and mentored high-performing engineering teams",
    metric: "50+ Engineers"
  },
  {
    icon: <GradientIcons.Rocket />,
    title: "Scalability Expert",
    description: "Designed systems handling millions of daily transactions",
    metric: "10M+ Daily Users"
  },
  {
    icon: <GradientIcons.Lightbulb />,
    title: "Problem Solver",
    description: "Delivered solutions reducing operational costs significantly",
    metric: "60% Cost Savings"
  },
  {
    icon: <GradientIcons.Globe />,
    title: "Global Impact",
    description: "Deployed solutions across multiple countries and regions",
    metric: "15+ Countries"
  },
];
