'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { GradientIcons } from '@/components/GradientIcons';

export default function Home() {
  useEffect(() => {
    // Typing effect
    const phrases = [
      'AI-Powered Reality',
      'Intelligent Solutions',
      'Digital Innovation',
      'Future-Ready Tech'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const typingElement = document.getElementById('typingText');
    
    function type() {
      if (!typingElement) return;
      
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
  }, []);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGradient}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>✨</span>
            <span className={styles.badgeText}>18+ Years of Excellence</span>
          </div>

          {/* Hero Visuals - Scrolling Gallery */}
          <div className={styles.heroVisuals}>
            <div className={styles.imageTrack}>
              {/* Duplicate set of images for seamless scrolling */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className={styles.imageSet}>
                  <div className={styles.heroImageCard}>
                    <img src="/hero_videobot.png" alt="Video Bot AI" />
                    <span>Video Bot</span>
                  </div>
                  <div className={styles.heroImageCard}>
                    <img src="/hero_voice.png" alt="Voice AI" />
                    <span>Voice AI</span>
                  </div>
                  <div className={styles.heroImageCard}>
                    <img src="/hero_chatbot.png" alt="Chat Bot" />
                    <span>Chat Bot</span>
                  </div>
                  <div className={styles.heroImageCard}>
                    <img src="/hero_analytics.png" alt="AI Analytics" />
                    <span>Analytics</span>
                  </div>
                  <div className={styles.heroImageCard}>
                    <img src="/hero_cloud.png" alt="Cloud Infrastructure" />
                    <span>Cloud Eng</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.titlePrefix}>Transforming Ideas into</span>
            <span className={`${styles.titleMain} gradient-text`} id="typingText">AI-Powered Reality</span>
          </h1>
          <p className={styles.heroDescription}>
            Rakesh Mohan - AI Technology Evangelist specializing in cutting-edge solutions across{' '}
            <strong>VOIP</strong>, <strong>Unified Communications</strong>, <strong>CX</strong>,{' '}
            <strong>Cloud/SaaS</strong>, <strong>CPaaS</strong>, and <strong>AI/ML</strong> technologies.
          </p>
          <div className={styles.heroCta}>
            <Link href="/contact" className="btn btn-primary">Let's Connect</Link>
            <Link href="/expertise" className="btn btn-secondary">Explore Expertise</Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>18+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Industries Served</span>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}></div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </div>
      </section>

      {/* About Me Section */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <p className={styles.aboutDescription}>
                With over 18 years of experience in the technology landscape, I stand at the intersection of innovation and implementation.
                My journey has spanned across VoIP infrastructure, cloud transformation, and now, the cutting-edge world of Artificial Intelligence.
              </p>
              <p className={styles.aboutDescription}>
                As an AI Technology Evangelist, I am passionate about demystifying complex technologies and leveraging them to solve real-world business challenges.
                I believe in the power of technology not just to automate, but to elevate human potential.
              </p>
              <div className={styles.signature}>
                <span className={styles.signatureName}>Rakesh Mohan</span>
                <span className={styles.signatureTitle}>Tech Evangelist</span>
              </div>
            </div>
            <div className={styles.aboutVisual}>
              <div className={styles.visualCircle}></div>
              <div className={styles.visualContent}>
                <video 
                  className={styles.visualIcon} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}}
                >
                  <source src="/VIdeoAI.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.visionMission}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={styles.vmCard}>
              <div className={styles.vmIcon}><GradientIcons.Eye /></div>
              <h3 className={styles.vmTitle}>My Vision</h3>
              <p className={styles.vmDescription}>
                To democratize AI and technology, making it accessible, understandable, and transformative for businesses of all sizes worldwide. 
                I envision a future where technology bridges gaps and creates unprecedented opportunities for growth.
              </p>
            </div>
            <div className={styles.vmCard}>
              <div className={styles.vmIcon}><GradientIcons.Rocket /></div>
              <h3 className={styles.vmTitle}>My Mission</h3>
              <p className={styles.vmDescription}>
                To deliver innovative, scalable, and human-centric technology solutions that drive real value. 
                I am committed to guiding organizations through their digital transformation journey with expertise, integrity, and a forward-thinking approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
