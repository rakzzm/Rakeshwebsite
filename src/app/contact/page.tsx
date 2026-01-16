'use client';

import { useState, FormEvent } from 'react';
import { GradientIcons } from '../../components/GradientIcons';
import styles from './page.module.css';
import { TypewriterTitle } from '@/components/TypewriterTitle';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name || formData.name.trim().length < 2) {
      setFormMessage({type: 'error', text: 'Please enter a valid name.'});
      return;
    }
    
    if (!emailRegex.test(formData.email)) {
      setFormMessage({type: 'error', text: 'Please enter a valid email address.'});
      return;
    }
    
    if (!formData.subject || formData.subject.trim().length < 3) {
      setFormMessage({type: 'error', text: 'Please enter a subject.'});
      return;
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
      setFormMessage({type: 'error', text: 'Please enter a message (at least 10 characters).'});
      return;
    }
    
    // Success message
    setFormMessage({type: 'success', text: 'Thank you! Your message has been sent successfully.'});
    
    // Reset form
    setFormData({name: '', email: '', subject: '', message: ''});
    
    // Clear message after 5 seconds
    setTimeout(() => setFormMessage(null), 5000);
  };

  return (
    <div className={styles.page}>
      <section className={styles.contact}>

        <div className="container">
          <div className={styles.sectionHeader}>

            <TypewriterTitle text="Let's Build the Future Together" className={styles.sectionTitle} />
            <p className={styles.sectionDescription}>
              Ready to transform your business with AI and cutting-edge communication technologies? Let's connect and explore possibilities.
            </p>
          </div>
          
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}><GradientIcons.AtSign /></div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>Email</span>
                    <a href="mailto:info@rakeshmohan.online" className={styles.methodValue}>info@rakeshmohan.online</a>
                  </div>
                </div>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}><GradientIcons.Linkedin /></div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>LinkedIn</span>
                    <a href="https://www.linkedin.com/in/rakzzm/" target="_blank" rel="noopener noreferrer" className={styles.methodValue}>Connect on LinkedIn</a>
                  </div>
                </div>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}><GradientIcons.Github /></div>
                  <div className={styles.methodContent}>
                    <span className={styles.methodLabel}>GitHub</span>
                    <a href="https://github.com/rakzzm" target="_blank" rel="noopener noreferrer" className={styles.methodValue}>View Projects</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.contactFormWrapper}>
              {formMessage && (
                <div className={`${styles.formMessage} ${formMessage.type === 'success' ? styles.success : styles.error}`}>
                  {formMessage.text}
                </div>
              )}
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
