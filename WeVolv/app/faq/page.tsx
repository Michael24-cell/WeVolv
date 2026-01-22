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
    {
      question: "What is the serving size for Sakara meals?",
      answer: "Our meals are designed to be nutritionally complete and portioned to fuel your body perfectly."
    },
    {
      question: "How many deliveries will I receive?",
      answer: "Depending on your program length, you will receive deliveries twice or three times per week to ensure freshness."
    },
    {
      question: "Is there enough protein in Sakara's meal program?",
      answer: "Yes, our plant-rich meals provide ample high-quality protein from whole food sources."
    },
    {
      question: "Is Sakara SQF certified?",
      answer: "We adhere to the highest standards of food safety and quality control."
    },
    {
      question: "Does Sakara accommodate food allergies?",
      answer: "We accommodate a wide range of common allergies. Please check specific meal ingredients or contact support."
    },
    {
      question: "Do Sakara meals contain soy?",
      answer: "We aim to be soy-free, though some specific programs may vary. Check the ingredient labels provided."
    },
    {
      question: "Is Sakara gluten-free?",
      answer: "Yes, all of our meals are organic, plant-based, and gluten-free."
    },
    {
      question: "Is Sakara vegan-friendly?",
      answer: "Absolutely. Our entire menu is 100% plant-based and suitable for vegans."
    },
    {
      question: "Are Sakara nutrition programs safe for children?",
      answer: "While our food is healthy whole food, nutritional needs for children vary. Please consult your pediatrician."
    },
    {
      question: "What is the return policy for Sakara nutrition programs?",
      answer: "Due to the perishable nature of our product, we generally do not accept returns, but please contact support for issues."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        <section className={styles.box}>
          <h2>Nutrition Programs</h2>
          
          <div className={styles.faqGroup}>
            <div className={styles.faqCategoryHeader}>
              <h3>General</h3>
            </div>

            <div className={styles.accordion}>
              {filteredFaqs.map((faq, index) => (
                <div key={index} className={styles.accordionItem}>
                  <button 
                    className={styles.accordionButton}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <span className={`${styles.icon} ${activeIndex === index ? styles.active : ''}`}>+</span>
                  </button>
                  <div className={`${styles.panel} ${activeIndex === index ? styles.active : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
