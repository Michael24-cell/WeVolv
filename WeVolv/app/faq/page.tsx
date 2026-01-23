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
    // Herbalife Section
    {
      category: "Herbalife",
      question: "Are Herbalife products good for weight loss?",
      answer: "Many customers take Herbalife® products as part of a weight loss or weight maintenance program, but beyond supporting weight management, Herbalife also offers a wide range of nutritional foods, dietary supplements and skin and body care products.\n\nFor example, Herbalife® Formula 1 shake mixes are meal replacements designed to substitute for higher-calorie meals. When used with an calorie-controlled diet, replacing two meals a day with Formula 1 shakes can support weight loss. Replacing one meal a day can help maintain weight after weight loss. Other Herbalife® products, such as protein snacks and supplements, can help support nutrient intake throughout a weight-control program.\n\nHerbalife® weight-loss programs are based on our Global Wellness Philosophy, which promotes a balanced intake of macro- and micronutrients, regular physical activity, hydration and healthy lifestyle habits. This philosophy was developed with input from licensed physicians and registered dietitians to support the needs of generally healthy adults."
    },
    {
      category: "Herbalife",
      question: "Does Herbalife have protein products?",
      answer: "Many customers take Herbalife® products as part of a weight loss or weight maintenance program, but beyond supporting weight management, Herbalife also offers a wide range of nutritional foods, dietary supplements and skin and body care products.\n\nFor example, Herbalife® Formula 1 shake mixes are meal replacements designed to substitute for higher-calorie meals. When used with an calorie-controlled diet, replacing two meals a day with Formula 1 shakes can support weight loss. Replacing one meal a day can help maintain weight after weight loss. Other Herbalife® products, such as protein snacks and supplements, can help support nutrient intake throughout a weight-control program.\n\nHerbalife® weight-loss programs are based on our Global Wellness Philosophy, which promotes a balanced intake of macro- and micronutrients, regular physical activity, hydration and healthy lifestyle habits. This philosophy was developed with input from licensed physicians and registered dietitians to support the needs of generally healthy adults."
    },
    {
      category: "Herbalife",
      question: "Are Herbalife products gluten free?",
      answer: "Herbalife does offer gluten-free products. The ones that are certified gluten-free have the Gluten-Free Certification Organization (GFCO) logo on their product label.\n\nThis certification means the product and its manufacturing process have been reviewed by the GFCO, ensuring they contain less than 10 parts per million (ppm) of gluten. Every certified batch is tested before release.\n\nWe always recommend checking product labels for the GFCO logo. For the most up-to-date list of certified gluten-free products, visit our Support Center."
    },
    {
      category: "Herbalife",
      question: "Is Herbalife keto friendly?",
      answer: "Some Herbalife® products can fit into a keto lifestyle, but it's essential to review each product's label for total and net carb content. Some of our protein powders, aloe concentrates and teas may be low in carbs, while other products contain ingredients that are not typically considered keto friendly.\n\nHerbalife promotes balanced nutrition, including carbohydrates, as part of a sustainable healthy diet. If you're following a ketogenic diet for medical reasons, always review the product's carb content and consult your health care provider."
    },
    {
      category: "Herbalife",
      question: "Does Herbalife contain aspartame?",
      answer: "No, Herbalife products do not contain the ingredient aspartame."
    },
    {
      category: "Herbalife",
      question: "Who can take Herbalife products?",
      answer: "In 2024, roughly 4.5 million Herbalife protein shakes were consumed daily around the world. All Herbalife® products are created to be compliant with U.S. and global regulations to ensure that they are safe for use by healthy adults. Herbalife® products should be consumed as directed on the label.\n\nIt's important to note that some products contain ingredients such as soy, oats, dairy, caffeine and others, so they might not be suitable for certain individuals, such as those who are pregnant or nursing. If you have any questions regarding any Herbalife® products or specific ingredients, you can reach out directly to the Global Post-Market Safety Affairs team at GCS@Herbalife.com. Herbalife also recommends consulting your health care provider before making any changes in your diet."
    },
    // Lifewave Section
    {
      category: "Lifewave",
      question: "What is phototherapy?",
      answer: "The science of phototherapy, which has been around for about 100 years, uses light to improve the health of the body. As far back as two thousand years ago, the ancient Greeks had a center for studying the effects of different colored lights on the body. Even the ancient Egyptians, who promoted health by focusing sunlight through colored glass on certain areas of the body, understood this concept."
    },
    {
      category: "Lifewave",
      question: "How do our patches work?",
      answer: "Your body emits heat, including heat in the infrared spectrum.\n\nOur patches are designed to trap this infrared energy when placed on the body, which causes them to reflect it back to stimulate specific points on the skin that can promote a general state of health and healthy activity unique to each LifeWave patch."
    },
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

  const categories = ["Herbalife", "Lifewave", "WeVolv"];
  
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
                          {faq.category === 'Lifewave' && faq.question === 'How do our patches work?' ? (
                            <>
                              {faq.answer}
                              <br /><br />
                              <a href="https://lifewave.com/wevolv/home/patch-placement-guide" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'underline', fontWeight: 'bold' }}>
                                Link: Patch Placement Guide
                              </a>
                            </>
                          ) : (
                            faq.answer
                          )}
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
