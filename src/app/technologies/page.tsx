import styles from './page.module.css';
import { TypewriterTitle } from '@/components/TypewriterTitle';
import { CategoryIcons } from '@/components/CategoryIcons';
import { GradientIcons } from '@/components/GradientIcons';

export const metadata = {
  title: 'Technologies | Rakesh Mohan',
  description: 'Comprehensive technology stack including AI/ML, LLMs, Cloud Platforms, Communication Systems, and Enterprise Tools',
};

export default function TechnologiesPage() {
  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>


        <div className="container">
          <div className={styles.sectionHeader}>

            <TypewriterTitle text="Technology Stack" className={styles.sectionTitle} />
            <p className={styles.sectionDescription}>
              Mastering cutting-edge technologies across AI, Cloud, Communication, and Enterprise platforms
            </p>

            {/* Technology Logos - Scrolling Gallery */}
            <div className={styles.logoGallery}>
              <div className={styles.logoTrack}>
                {/* Duplicate set for seamless scrolling */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className={styles.logoSet}>
                    <img src="/AWS.png" alt="AWS" className={styles.techLogo} />
                    <img src="/Microsoft.png" alt="Microsoft" className={styles.techLogo} />
                    <img src="https://cdn.simpleicons.org/google/4285F4" alt="Google" className={styles.techLogo} />
                    <img src="/cisco.png" alt="Cisco" className={`${styles.techLogo} ${styles.ciscoLogo}`} />
                    <img src="/genesys.png" alt="Genesys" className={`${styles.techLogo} ${styles.genesysLogo}`} />
                    <img src="/Salesforce.png" alt="Salesforce" className={styles.techLogo} />
                    <img src="/OpenAI.png" alt="OpenAI" className={styles.techLogo} />
                    <img src="/Twilio.png" alt="Twilio" className={styles.techLogo} />
                    <img src="https://cdn.simpleicons.org/vonage/000000" alt="Vonage" className={styles.techLogo} />
                    <img src="/Nice.png" alt="Nice" className={styles.techLogo} />
                    <img src="/Avaya.png" alt="Avaya" className={styles.techLogo} />
                    <img src="/Mitel.png" alt="Mitel" className={styles.techLogo} />
                    <img src="/Alcatel.png" alt="Alcatel" className={styles.techLogo} />
                    <img src="https://cdn.simpleicons.org/zoom/2D8CFF" alt="Zoom" className={`${styles.techLogo} ${styles.zoomLogo}`} />
                    <img src="/Oracle.png" alt="Oracle" className={styles.techLogo} />
                    <img src="https://cdn.simpleicons.org/dolby/000000" alt="AudioCodes" className={styles.techLogo} />
                    <img src="https://cdn.simpleicons.org/redhat/EE0000" alt="Ribbon" className={styles.techLogo} />
                    <img src="https://cdn.simpleicons.org/webrtc/333333" alt="WebRTC" className={styles.techLogo} />
                    <img src="/grok.png" alt="Grok AI" className={styles.techLogo} />
                    <img src="/qwen.jpeg" alt="Qwen" className={styles.techLogo} />
                    <img src="/mistral-ai-logo.jpeg" alt="Mistral AI" className={styles.techLogo} />
                    <img src="/meta-ai-logo.jpeg" alt="Meta AI" className={styles.techLogo} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stats */}
          <div className={styles.techStats}>
            {statsData.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        <div className="container">
          {/* Technology Categories */}
          <div className={styles.techCategories}>
            {techData.map((category, index) => (
              <div key={index} className={styles.techCategory}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                <p className={styles.categoryDescription}>{category.description}</p>
                <div className={styles.techItems}>
                  {category.items.map((tech, i) => (
                    <span key={i} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const statsData = [
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        <circle cx="24" cy="18" r="6" fill="url(#grad1)"/>
        <path d="M14 42a10 10 0 0 1 20 0" stroke="url(#grad1)" strokeWidth="3" fill="none"/>
        <circle cx="16" cy="16" r="2" fill="url(#grad1)"/>
        <circle cx="32" cy="16" r="2" fill="url(#grad1)"/>
      </svg>
    ), 
    number: "50+", 
    label: "Technologies" 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        <path d="M12 20c0-4 4-8 12-8s12 4 12 8c0 2-1 4-3 5 2 1 3 3 3 5 0 4-4 8-12 8s-12-4-12-8c0-2 1-4 3-5-2-1-3-3-3-5z" fill="url(#grad2)"/>
      </svg>
    ), 
    number: "3", 
    label: "Cloud Platforms" 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        <path d="M20 12l-8 8 8 8M28 12l8 8-8 8M26 10l-4 28" stroke="url(#grad3)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    ), 
    number: "20+", 
    label: "Enterprise Tools" 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        <circle cx="24" cy="20" r="3" fill="url(#grad4)"/>
        <circle cx="36" cy="24" r="3" fill="url(#grad4)"/>
        <circle cx="24" cy="32" r="3" fill="url(#grad4)"/>
        <circle cx="12" cy="24" r="3" fill="url(#grad4)"/>
        <path d="M26 21l8 2M26 31l8-5M22 31l-8-5M22 21l-8 2" stroke="url(#grad4)" strokeWidth="2"/>
      </svg>
    ), 
    number: "10+", 
    label: "Communication Systems" 
  },
];

const techData = [
  {
    icon: <CategoryIcons.AINeuralNetwork />,
    title: "AI & Large Language Models",
    description: "Advanced AI and LLM technologies powering intelligent solutions",
    items: [
      "OpenAI GPT-4",
      "ChatGPT",
      "Claude 3",
      "Google Gemini",
      "Meta LLaMA",
      "Anthropic Claude",
      "Mistral AI",
      "Cohere",
      "GPT-3.5 Turbo",
      "PaLM 2",
      "Falcon LLM",
      "Vicuna"
    ]
  },
  {
    icon: <CategoryIcons.AIInfrastructure />,
    title: "AI Infrastructure & RAG",
    description: "Retrieval-Augmented Generation and AI infrastructure platforms",
    items: [
      "RAG (Retrieval-Augmented Generation)",
      "Vector Databases",
      "Pinecone",
      "Weaviate",
      "Chroma",
      "LangChain",
      "LlamaIndex",
      "Embeddings",
      "Semantic Search",
      "FAISS",
      "Milvus",
      "Qdrant"
    ]
  },
  {
    icon: <CategoryIcons.Cloud />,
    title: "AWS AI & Cloud Services",
    description: "Amazon Web Services AI and machine learning capabilities",
    items: [
      "AWS Bedrock",
      "AWS Lex (Chatbots)",
      "AWS Connect (Voice Bots)",
      "Amazon SageMaker",
      "AWS Lambda",
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Comprehend",
      "AWS Kendra",
      "EC2",
      "S3",
      "RDS",
      "DynamoDB",
      "CloudFormation"
    ]
  },
  {
    icon: <CategoryIcons.Cloud />,
    title: "Cloud Platforms",
    description: "Multi-cloud expertise across major providers",
    items: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "Azure OpenAI Service",
      "Azure Bot Service",
      "Google Vertex AI",
      "Google Dialogflow",
      "Azure Cognitive Services",
      "GCP AI Platform",
      "Oracle Cloud",
      "IBM Cloud"
    ]
  },
  {
    icon: <CategoryIcons.ContactCenter />,
    title: "Communication & Contact Center",
    description: "Enterprise communication and contact center platforms",
    items: [
      "Cisco Webex",
      "Genesys Cloud",
      "Microsoft Teams",
      "Avaya",
      "Mitel",
      "Alcatel-Lucent",
      "Twilio",
      "Vonage",
      "Talkdesk",
      "Five9",
      "NICE inContact",
      "8x8",
      "RingCentral",
      "Zoom"
    ]
  },
  {
    icon: <GradientIcons.Target />,
    title: "CRM & Support Platforms",
    description: "Customer relationship management and helpdesk solutions",
    items: [
      "Salesforce",
      "Zoho CRM",
      "FreshDesk",
      "Instadesk",
      "Jira",
      "ServiceNow",
      "Zendesk",
      "HubSpot",
      "Microsoft Dynamics 365",
      "Oracle Service Cloud",
      "Freshservice",
      "Confluence"
    ]
  },
  {
    icon: <CategoryIcons.VoIP />,
    title: "VoIP & Telephony",
    description: "Voice communication and telephony infrastructure",
    items: [
      "Asterisk",
      "FreeSWITCH",
      "WebRTC",
      "SIP Protocol",
      "Twilio Voice",
      "Vonage API",
      "Bandwidth.com",
      "Plivo",
      "Nexmo",
      "SignalWire"
    ]
  },
  {
    icon: <GradientIcons.Gear />,
    title: "Development & Infrastructure",
    description: "Modern development tools and DevOps platforms",
    items: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI",
      "Terraform",
      "Ansible",
      "Serverless Framework",
      "Microservices",
      "API Gateway",
      "Redis"
    ]
  },
  {
    icon: <GradientIcons.Gear />,
    title: "Programming & Frameworks",
    description: "Core programming languages and frameworks",
    items: [
      "Python",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "FastAPI",
      "Express.js",
      "Flask",
      "Django",
      "Java",
      "Go"
    ]
  },
  {
    icon: <CategoryIcons.DataCenter />,
    title: "Databases & Storage",
    description: "Relational, NoSQL, and vector database solutions",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Elasticsearch",
      "DynamoDB",
      "Cassandra",
      "Neo4j",
      "ClickHouse",
      "TimescaleDB"
    ]
  },

  {
    icon: <GradientIcons.Robot />,
    title: "Advanced AI & Analytics",
    description: "Data science, predictive analytics, and machine learning frameworks",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Predictive Analytics",
      "Data Visualization",
      "Big Data",
      "Feature Engineering",
      "Time Series Analysis",
      "Transfer Learning",
      "Reinforcement Learning"
    ]
  },
  {
    icon: <CategoryIcons.ContactCenter />,
    title: "Telecom Infrastructure",
    description: "Core telecom, SBC, and signaling infrastructure",
    items: [
      "AudioCodes",
      "Ribbon",
      "Oracle SBC",
      "Cisco CUCM",
      "FreePBX",
      "Kazo",
      "Kamailio",
      "OpenSIPS",
      "Dialogic",
      "Media Gateways"
    ]
  },
  {
    icon: <CategoryIcons.UnifiedComms />,
    title: "Collaboration & Devices",
    description: "Video conferencing hardware and collaboration endpoints",
    items: [
      "Polycom/Poly",
      "Logitech",
      "Cisco Webex Devices",
      "Yealink",
      "Jabra",
      "Microsoft Teams Rooms",
      "Zoom Rooms",
      "SIP Endpoints",
      "H.323"
    ]
  }
];
