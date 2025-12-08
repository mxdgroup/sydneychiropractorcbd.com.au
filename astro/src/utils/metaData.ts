// Meta data utility for handling CSV-based meta descriptions and auto-generated keywords

export interface MetaData {
  url: string;
  metaDescription: string;
  canonicalUrl: string;
  metaKeywords: string;
}

// CSV data mapping (from your meta_tags_c27.csv)
const metaDescriptions: Record<string, string> = {
  "/": "Clinic 27 is a chiropractic clinic with experienced chiropractors in Sydney CBD dedicated to the provision of chiropractic care.",
  "/cranial-chiropractic/": "Get TMJ & Cranial Chiropractic, and relief for jaw pain and related disorders. Stop suffering from jaw clicking, facial pain, or persistent headaches? These symptoms may indicate temporomandibular joint disorder (TMJ) or related cranial issues.",
  "/contact-us/": "Have a question or would like to book an appointment? Contact the chiropractors at Clinic 27 at 02 8059 7743 or use our online contact form.",
  "/endonasal-cranial-correction-treatment-sydney-cbd/": "Clinic 27 use the Endonasal Cranial Correction technique which specifically targets cranial bones that are out of place to remove discomfort.",
  "/videos/": "If you're looking for information on chiropractic treatment and care, view our catalogue of Sydney chiropractic videos here.",
  "/sciatica-treatment-sydney-cbd/": "Sciatica is a debilitating condition requiring extra attention and care when treating it. For sciatica treatment in Sydney, call us today.",
  "/chiropractic-treatment-for-pregnancy/": "Do you need chiropractic care for the aches of pregnancy or just need a regular checkup? Contact us to book an appointment!",
  "/blog-overview/": "Our blog is here to provide you with all the chiropractic resources you need, expanding on the knowledge of our experienced chiropractors.",
  "/tmj-treatment/": "Improve your posture before it leads to discomfort. Book an appointment at Clinic 27 for personalized chiropractic care and feel your best!",
  "/massage-sydney-cbd-best-massage-sydney/": "Here's all you need to know about the benefits of massage, and where you can get the top remedial massage in Sydney CBD!",
  "/main-reasons-for-lower-back-pain/": "Discover the main reasons of lower back pain and learn how to quickly identify symptoms and prevent future issues.",
  "/carpal-tunnel-syndrome-treatment-sydney-cbd/": "Clinic 27 offers years of experience in carpal tunnel syndrome treatment in Sydney. If you suffer from Carpal Tunnel Syndrome, call us today.",
  "/workshops/": "Join our chiropractic workshops in Sydney CBD to learn practical tips for improving posture and workplace wellness. Book your spot today!",
  "/scoliosis-treatment-sydney-cbd/": "Many believe scoliosis can't be treated—let us show you how it can. Visit our scoliosis chiropractor in Sydney CBD and book your appointment!",
  "/how-to-know-if-shoulder-pain-is-serious/": "Discover which types of shoulder pain are nothing to worry about and when you should consider chiropractic treatment or consulting a doctor.",
  "/posture-treatment-sydney-cbd/": "Improve your posture before it leads to discomfort. Book an appointment at Clinic 27 for personalized chiropractic care and feel your best!",
  "/vertigo-treatment-sydney-cbd/": "You can get rid of vertigo after 1 visit. Book your consultation at Clinic 27 in Sydney today for fast relief and long-term recovery!",
  "/back-pain-treatment-sydney-cbd/": "Whatever type of back pain you have, Clinic 27's chiropractors in Sydney can help. Learn more and book your appointment today.",
  "/neck-pain-treatment-sydney-cbd/": "The experienced team of chiropractors at Clinic 27 can help you with neck pain issues in Sydney CBD. Call us today!",
  "/why-chiropractic-care-is-effective-for-back-pain/": "Discover why chiropractic care is effective for back pain and how personalized chiropractic treatments can help .",
  "/pregnancy-back-pain-help/": "Discover how chiropractic care can ease pregnancy back pain. Learn about treatments that relieve discomfort and improve mobility.",
  "/about-clinic27/": "Here’s who’s behind our expert chiropractic care at Clinic 27. Meet the Sydney team dedicated to improving your health and well-being.",
  "/habit-stacking-for-holisitic-health/": "We can teach you to build better health habits. Call one of our friendly chiropractors today on (02) 9972 0040 and get the help needed.",
  "/headaches-migraines-treatment-sydney-cbd/": "Whether you want to learn more about migraines or book the best migraine treatment in Sydney, read more here. We've got you covered.",
  "/chiropratic-care-adjustments/": "Do you need chiropractic care and help? Read these tips and talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/5-tips-to-get-better-sleep/": "Do you need better sleep? Read these 5 tips to get better sleep today? Talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/advanced-bio-structrual-correction-abc/": "Discover the benefits of Advanced Bio-Structural Correction at Clinic 27. Learn how this technique can correct posture and relieve pain.",
  "/pain-thoracic-spine-usually-from-sitting-sydney-cbd-chiropractor-can-help/": "Learn how prolonged sitting can cause thoracic spine pain and discover effective chiropractic solutions at Clinic 27.",
  "/professional-treatment-for-shoulder-injury/": "Receive expert shoulder injury treatment at Clinic 27. Our professional team offers personalized care to help you recover quickly!",
  "/chriopratic-care-for-synovitis-and-tenosynovitis/": "Do you need chiropractic care for synovitis and tenosynovitis? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/spinal-decay/": "Your body adapts to uncorrected spinal stress by depositing calcium into affected joints. We call this degenerative process spinal decay.",
  "/chiropractic-help-for-headaches-and-migraines/": "Do you have headaches or mirgaines and need help? Talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/rotator-cuff-syndrome-advice-from-sydney-cbd-chiropractor/": "Discover effective rotator cuff syndrome advice from our expert chiropractors. Get personalized care and recovery tips here.",
  "/understanding-thoracic-outlet-syndrome/": "Do you need chiropractic care for thoracic outlet syndrome? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/too-much-or-too-little-exercise/": "Do you need chiropractic care for overexercising? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/what-is-spondylosis/": "Learn about spondylosis, its causes, symptoms, and treatments. Get expert advice for managing and relieving pain.",
  "/can-my-posture-affect-my-hormones/": "Learn how posture impacts your hormones at Clinic 27. Discover tips for better alignment and improved well-being. Book your consultation now!",
  "/pinched-nerve-treatment/": "Understand the symptoms, causes, and treatment options for pinched nerves. Clinic 27 offers specialized care to help you find relief.",
  "/chiropractic-care-for-headaches-in-sydney-cbd/": "Find relief from chronic headaches with chiropractic care. Learn how our tailored treatments target the root causes to alleviate pain.",
  "/rotator-cuff-syndrome/": "Understand the causes, symptoms, and treatments for rotator cuff syndrome. Learn how chiropractic care can help you regain shoulder function.",
  "/chiropractic-help-for-weakened-ligaments/": "Do you need chiropractic care for weakened ligaments? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/chiropractic-knee-pain-help-explained/": "Knee pain can be confusing and scary—but there's no reason to panic. Here's all you need to know about knee pain and how chiropractors help!",
  "/spondylosis-and-ankylosing-spondylitis/": "Do you need care for Spondylosis or Ankylosing Spondylitis? Talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/chiropratic-care-for-head-asymmetry/": "Should asymmetrical head shape worry you and when is the time for a chiropractor? Here's all you need to know about this condition.",
  "/enhancing-your-brains-neuroplasticity/": "Do you want to understand how you can enhance your own neuroplasticity? Talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/a-natural-approach-to-headache-management/": "Discover natural headache management techniques at Clinic 27. Learn how chiropractic care can effectively reduce and prevent headaches.",
  "/work-related-pain/": "Do you have have work-related pain and need care? Read these tips and talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/car-accident-injuries-chiropractic-treatments-2/": "Explore chiropractic treatments for car accident injuries at Clinic 27. Learn how we address back pain and more for a full recovery.",
  "/tension-headaches-and-migraines/": "Understand the causes and symptoms of migraines. Discover how lifestyle changes and chiropractic care can help manage your headaches.",
  "/abdominal-and-pelvic-pain/": "Do you need chiropractic care for abdominal and pelivic pain? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/posture-correction-improve-posture-with-these-tips/": "Discover effective tips for improving your posture. Learn exercises and habits to enhance alignment and reduce pain.",
  "/learn-about-emotion-and-posture-with-chiropractors-in-sydney-city/": "Explore the connection between emotion and posture. Learn how your feelings impact your body and how chiropractic care can help.",
  "/chiropractic-care-for-neck-arthritis/": "Do you need chiropractic care for Neck Arthritis? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/tendinitis-treatment-in-sydney-cbd/": "Learn about Clinic 27's personalized care options to reduce inflammation, relieve pain, and improve mobility. Book now!",
  "/neck-pain/": "Overcome Back Pain with Chiropractic Care. While many turn to quick fixes like pain medication, chiropractic care offers a better approach.",
  "/your-brain-and-immune-function/": "Do you know how your brain and immune function can cooperate? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/subluxations/": "Like the separate notes of a musical chord, a subluxation can simultaneously involve joints, nerves, muscles, and degenerative changes.",
  "/chiropractic-for-scoliosis/": "The team at Complete Chiropractic and Clinic 27 have a great reputation for improving upright posture. Call today to find out more!",
  "/chiropractic-care-for-fibromyalgia-and-improved-sleep/": "Do you have need chiropractic care for fibromyalgia and improved sleep? Talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/neck-pain-explained/": "Do you have neck pain and need help? Read these chiropractic tips or talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/back-pain/": "Overcome Back Pain with Chiropractic Care. While many turn to quick fixes like pain medication, chiropractic care offers a better approach.",
  "/what-causes-lower-back-pain/": "Explore common causes of lower back pain at Clinic 27. Learn about symptoms, prevention tips, and effective treatments to relieve discomfort.",
  "/how-to-treat-elbow-injury/": "Learn effective methods to treat elbow injuries at Clinic 27. Discover causes, symptoms, and personalized treatments.",
  "/initial-consultation-special-offer/": "Take advantage of our offer for an initial chiropractic consultation in Clinic 27. Book today and start your journey to better health!",
  "/how-to-treat-aches-and-pains/": "Do you suffer from aches and pains? Talk to one of our friendly chiropractors today for excellent chiropractic care on (02) 9972 0040.",
  "/chiropractic-adjustment-treatments-beyond-back-pain/": "Chiropractic care offers more than back pain relief, enhancing posture, sleep, and stress reduction. Discover its full benefits!",
  "/chiropratic-help-for-scoliosis/": "Do you have scoliosis and need help? Read these chiropractic tips or talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/treaatment-for-sciatica/": "Do you need chiropractic care for Sciatica? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/what-happens-to-your-hand-when-you-experience-wrist-injury/": "Discover the effects of wrist injuries on your hand at Clinic 27. Learn about symptoms, causes, and treatment options for a full recovery.",
  "/learning-the-importance-of-good-posture-at-clinic27/": "Learn how proper alignment can prevent pain, improve health, and enhance overall well-being. Get expert tips and guidance today!",
  "/managing-emotional-stress/": "Do you need chiropractic care for emotional stress? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/learn-about-your-childs-posture-at-clinic27/": "Discover how to improve your child's posture with expert guidance at Clinic 27. Learn about common issues and effective corrective strategies.",
  "/sleep-vs-pain-insomnia-chronic-pain/": "Explore the link between insomnia and chronic pain. Learn how poor sleep can worsen pain and learn strategies for good sleep and pain relief.",
  "/terms-and-conditions/": "Do you need to access the terms and conditions for Clinic 27? Feel free to talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/clinic-27-privacy-policy/": "Do you have have an immune disorders and need care? Read these tips and talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/chiropratic-help-for-whiplash/": "Do you have whiplash and need help? Read these tips and talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/symptoms-of-sprained-ankles-and-foot-injury/": "Learn more about sprained ankle and foot injury symptoms at Clinic 27 and find tailored treatment plans to ensure proper healing.",
  "/scoliosis-symptoms-can-be-helped-at-chiropractor-sydney-cbd/": "Learn how chiropractic care at Clinic 27 can help manage scoliosis symptoms. Discover personalized treatment options here.",
  "/chiropratic-care-for-posture/": "Do you have poor posture and need help? Read these tips and talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/abc-advanced-bio-structural-correction/": "Clinic 27 in Sydney CBD offers Advanced BioStructural Correction. Learn how the ABC chiropractic technique enhances mobility!",
  "/chiropractic-care-for-stuttering/": "Do you have a stutter and need help? Read these chiropractic tips or talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/different-types-of-headaches-2/": "Explore various types of headaches at Clinic 27. Learn about symptoms, causes, and effective management strategies.",
  "/sciatica-successful-treatment-at-sydney-cbd-chiropractor/": "Clinic 27 offers effective sciatica treatment with personalized care plans and proven therapies. Learn more about it and book today!",
  "/automobile-injuries-and-central-sensitisation/": "Do you have have automobile injuries and central sensitisation? Talk to one of our friendly chiropractors today on (02) 9972 0040.",
  "/chiropractic-spinal-decompression-therapy/": "Relieve the pressure on your back with Chiropractic Spinal Decompression therapy from the experts at Clinic 27. Contact us today!",
  "/how-to-tell-if-back-pain-is-serious/": "Learn how to tell if your back pain is serious: when to seek medical help, what symptoms to watch for, and tips for back pain relief.",
  "/stress-management-back-pain/": "Manage stress-related back pain with expert care. Learn how stress affects your back and find best treatments to improve your well-being.",
  "/learn-how-to-improve-posture-with-our-chiropractors-in-sydney/": "Improve your posture with tips from Clinic 27. Our experts offer personalized advice and exercises to enhance alignment and reduce discomfort.",
  "/tethered-cord-syndrome/": "Do you have tethered cord syndrome ? Call one of our friendly chiropractors today to get care on (02) 9972 0040.",
  "/abnormal-gait-and-mobility/": "Address abnormal gait and mobility issues at Clinic 27. Learn about causes, symptoms, and personalized treatment plans for better movement.",
  "/auto-accident-injury-chriropractic-care/": "Experience relief from auto accident injuries with Clinic27. Our team addresses pain, stiffness, and more. Contact us at (02) 9972 0040!",
  "/vitamin-d-super-vitamin-vital-to-health/": "Do you know how much vitamin D you should be getting and how to get it? Call one of our friendly chiropractors today on (02) 9972 0040.",
  "/how-does-posture-affect-my-health/": "Learn how posture impacts your health. Find out how poor posture can lead to pain and other issues, and get tips for improving your alignment.",
  "/learn-about-posture-and-pregnancy-in-sydney-cbd/": "Understand the impact of posture on pregnancy. Learn how to maintain good posture to alleviate discomfort and support a healthy pregnancy.",
  "/disc-pain/": "Overcome Back Pain with Chiropractic Care. While many turn to quick fixes like pain medication, chiropractic care offers a better approach.",
  "//": "Clinic 27 is a chiropractic clinic with experienced chiropractors in Sydney CBD dedicated to the provision of chiropractic care.",
  "/book-now/": "Have a question or would like to book an appointment? Contact the chiropractors at Clinic 27 at 02 8059 7743 or use our online contact form.",
  "/shoulder-pain/": "Overcome Back Pain with Chiropractic Care. While many turn to quick fixes like pain medication, chiropractic care offers a better approach.",
  "/spine-pain/": "Overcome Back Pain with Chiropractic Care. While many turn to quick fixes like pain medication, chiropractic care offers a better approach.",
  "/scrollcrop-demo/": "ScrollCrop Component Demo. Scroll down to see the scroll crop effect in action.",
  "/book/": "Book your appointment at Clinic 27 in Sydney CBD. Expert chiropractic care with over 30 years of experience. Advanced Biostructural Correction.",
  "/orbit-test/": "Orbit diagram component test page for Sydney Chiropractor CBD website development.",
  "/faq/": "Frequently asked questions about chiropractic care at Clinic 27 in Sydney CBD. Get answers to your questions about our services and treatments.",
  "/search/": "Search through our chiropractic blog articles and resources. Find information about treatments, conditions, and wellness tips from Sydney Chiropractor CBD.",
  "/personal-plan/": "Create your personalized chiropractic care plan at Clinic 27. Set your health goals and track your progress with our Sydney CBD chiropractors.",
  "/3-legged-stool/": "Learn about the 3-legged stool approach to chiropractic care at Clinic 27. Discover how we help you achieve optimal health in Sydney CBD."
};

// Base keywords for different page types
const baseKeywords = {
  treatment: ['chiropractic treatment', 'sydney cbd', 'chiropractor sydney', 'pain relief', 'chiropractic care'],
  blog: ['chiropractic care', 'sydney chiropractor', 'health tips', 'pain management', 'wellness'],
  service: ['chiropractic services', 'sydney cbd clinic', 'professional care', 'chiropractic adjustment'],
  general: ['chiropractic', 'sydney cbd', 'clinic 27', 'chiropractor', 'health care']
};

// Function to extract keywords from content
export function generateKeywords(content: string, title: string, pageType: 'treatment' | 'blog' | 'service' | 'general' = 'general'): string {
  const base = baseKeywords[pageType];
  
  // Extract words from title and content
  const text = `${title} ${content}`.toLowerCase();
  
  // Common chiropractic and health-related keywords
  const healthKeywords = [
    'back pain', 'neck pain', 'headache', 'migraine', 'posture', 'sciatica', 
    'tmj', 'vertigo', 'scoliosis', 'massage', 'adjustment', 'treatment',
    'sydney', 'cbd', 'clinic', 'chiropractic', 'chiropractor', 'health',
    'wellness', 'pain relief', 'therapy', 'care', 'professional'
  ];
  
  // Find matching keywords in content
  const foundKeywords = healthKeywords.filter(keyword => 
    text.includes(keyword.toLowerCase())
  );
  
  // Combine base keywords with found keywords
  const allKeywords = [...base, ...foundKeywords];
  
  // Remove duplicates and limit to 10 keywords
  const uniqueKeywords = Array.from(new Set(allKeywords)).slice(0, 10);
  
  return uniqueKeywords.join(', ');
}

// Function to get meta data for a page
export function getMetaData(pathname: string, title: string, content: string, pageType: 'treatment' | 'blog' | 'service' | 'general' = 'general'): MetaData {
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  
  // Get meta description from CSV data
  const metaDescription = metaDescriptions[normalizedPath] || 
    `Professional chiropractic care at Clinic 27 in Sydney CBD. ${title}. Book your consultation today.`;
  
  // Generate canonical URL
  const canonicalUrl = `https://sydneychiropractorcbd.com.au${normalizedPath}`;
  
  // Generate keywords
  const metaKeywords = generateKeywords(content, title, pageType);
  
  return {
    url: normalizedPath,
    metaDescription,
    canonicalUrl,
    metaKeywords
  };
}

// Function to determine page type from URL
export function getPageType(pathname: string): 'treatment' | 'blog' | 'service' | 'general' {
  if (pathname.includes('/treatments/') || pathname.includes('-treatment-')) {
    return 'treatment';
  }
  if (pathname.includes('/blog/') || pathname.includes('/blog-')) {
    return 'blog';
  }
  if (pathname.includes('/workshops/') || pathname.includes('/massage')) {
    return 'service';
  }
  return 'general';
}
