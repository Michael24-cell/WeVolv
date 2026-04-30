'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    // WeVolv Section
    {
      category: "WeVolv",
      question: "Who can benefit from coaching?",
      answer: "Inside-Out Coaching is ideal for anyone who:\n• Feels like they've tried \"all the things\" but nothing sticks\n• Is exhausted by rules, rigidity, and guilt-based motivation\n• Wants a more compassionate, sustainable way to care for their body and mind\n• Is open to exploring the why behind their patterns—not just the what"
    },
    {
      category: "WeVolv",
      question: "Why WeVolv?",
      answer: "WeVolv offers more than traditional health coaching – we embrace a holistic approach that extends beyond diet and exercise. Through guidance, you'll explore how every aspect of your life – relationships, career, social life, stress, and environment – interconnects with your well-being. Recognizing that true wellness encompasses every dimension of life, WeVolv helps you cultivate balance and harmony across all the factors that shape your health."
    },
    {
      category: "WeVolv",
      question: "Why inside-out coaching?",
      answer: "Many coaching approaches focus on changing what you do. That matters—but lasting change begins with understanding why you do it. When beliefs, emotions, and identity are ignored, new habits struggle to stick.\n\nInside-Out Coaching works from the inside out. We explore your inner narrative while building practical, sustainable routines that genuinely support the life you're working toward."
    },
    {
      category: "WeVolv",
      question: "What can I expect from coaching?",
      answer: "A non-judgmental space to be honest about what's really going on\nCoaching that honors both your emotional landscape and your desire for progress\nA blend of deep internal work and practical next steps\nSupport that's tailored to your real life—not a one-size-fits-all plan"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ["WeVolv"];
  
  const getFaqsByCategory = (category: string) => {
    return filteredFaqs.filter(faq => faq.category === category);
  };

  return (
    <div className={`faq-page-wrapper ${styles.faqContainer}`}>
      <div className={styles.container}>
        <header className={styles.box}>
          <h1>Frequently Asked Questions</h1>
          <div className={styles.searchWrapper}>
            <input 
              type="text" 
              className={styles.searchInput}
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.searchBtn}>Search</button>
          </div>
        </header>

        {categories.map((category) => {
          const categoryFaqs = getFaqsByCategory(category);
          if (categoryFaqs.length === 0 && searchQuery) return null;
          
          return (
            <section key={category} className={styles.box}>
              <h2>{category}</h2>
              
              <div className={styles.accordion}>
                {categoryFaqs.map((faq, index) => {
                  const globalIndex = faqs.indexOf(faq);
                  return (
                    <div key={globalIndex} className={styles.accordionItem}>
                      <button 
                        className={styles.accordionButton}
                        onClick={() => toggleAccordion(globalIndex)}
                      >
                        <span className={styles.questionText}>{faq.question}</span>
                        <span className={`${styles.icon} ${activeIndex === globalIndex ? styles.active : ''}`}>+</span>
                      </button>
                      <div className={`${styles.panel} ${activeIndex === globalIndex ? styles.active : ''}`}>
                        <p style={{ whiteSpace: 'pre-line' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
