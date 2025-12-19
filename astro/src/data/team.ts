export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  locations: string[];
  shortBlurb: string;
  longBio: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "dr-hooman-zahedi",
    name: "Dr Hooman Zahedi",
    role: "Clinic Director & Chiropractor",
    image: "/team/hooman.webp",
    locations: ["CCDY", "C27"],
    shortBlurb:
      "Dr Hooman is the Clinic Director of Complete Chiropractic Dee Why and Clinic 27. With international experience and a strong focus on movement, function and family care, he is passionate about helping people feel better, move better and live with confidence at every stage of life.",
    longBio: [
      "For Dr Hooman, chiropractic care is about helping people move forward with confidence — physically, mentally and in everyday life. He is driven by seeing patients regain comfort, function and freedom, so they can fully engage in the things that matter most to them.",
      "After completing his chiropractic degree at Macquarie University, Dr Hooman spent more than a decade in the UK, where he played a key role in establishing chiropractic care in Scotland and later led one of Europe’s largest chiropractic groups. He now serves as Clinic Director of Complete Chiropractic Dee Why and Clinic 27 in Sydney’s CBD, guiding a team committed to thoughtful, long-term patient care.",
      "Dr Hooman has extensive experience working with people of all ages and particularly enjoys supporting families, children and parents. He values precision, partnership and progress — working closely with patients to help them understand their bodies and take an active role in their healing.",
      "Outside the clinic, Dr Hooman is a proud dad to an energetic primary-school-aged son. Time spent playing rugby at the park is a daily reminder of the importance of movement, resilience and looking after your body for the long run."
    ]
  },
  {
    slug: "dr-rebecca-squire",
    name: "Dr Rebecca Squire",
    role: "Chiropractor",
    image: "/team/reb.webp",
    locations: ["CCDY", "C27"],
    shortBlurb:
      "With a background in professional dance and over a decade of chiropractic experience, Dr Rebecca supports patients to move with confidence and feel more at home in their bodies. Her thoughtful, practical approach makes her a valued part of both the Dee Why and CBD clinics.",
    longBio: [
      "Dr Rebecca is deeply passionate about helping people feel at ease in their bodies again — whether that means easing long-standing discomfort, restoring confidence in movement, or supporting everyday resilience. Her care is grounded in empathy, clear communication and a strong understanding of how the body adapts to physical and emotional demands.",
      "Before becoming a chiropractor, Dr Rebecca trained and worked as a professional dancer and teacher. This background shaped her appreciation for posture, movement quality and the cumulative impact of physical stress. She has now spent over 10 years in clinical practice, supporting a wide range of patients including athletes, parents and those navigating busy, demanding lives.",
      "Dr Rebecca completed her Master of Chiropractic at Macquarie University and continues to value learning as a core part of her practice. As a mum to a lively preschooler, she understands the realities of modern family life and brings that insight into her care — recognising how important it is to feel supported, strong and capable.",
      "Outside of work, Dr Rebecca enjoys staying active, spending time with her family and exploring the ongoing connection between movement and wellbeing."
    ]
  },
  {
    slug: "dr-angus-phelps",
    name: "Dr Angus Phelps",
    role: "Chiropractor",
    image: "/team/angus.png.webp",
    locations: ["CCDY", "C27"],
    shortBlurb:
      "Dr Angus is a Macquarie University–trained chiropractor with a lifelong love of sport and movement. From rugby and surfing to running and strength training, he leads by example and believes health is an ongoing commitment built through collaboration, balance and long-term wellbeing.",
    longBio: [
      "Dr Angus brings an energetic, grounded and proactive approach to chiropractic care. With a lifelong background in sport — including rugby, cricket, surfing and swimming — he has a deep appreciation for how the body performs, adapts and recovers under physical demand. Today, he continues to stay active through running and strength and conditioning training, practising what he believes is essential for long-term health.",
      "Educated at Macquarie University, where he completed both his Bachelor and Master of Chiropractic, Dr Angus is passionate about helping people take an active role in their wellbeing. He believes health and wellness are not quick fixes, but an ongoing commitment built through balanced movement, nutrition, lifestyle choices and consistent care.",
      "Dr Angus particularly enjoys working with individuals and families who are proactive about their health and motivated to work collaboratively toward meaningful, long-term goals. He values clear communication, shared responsibility and empowering patients to understand their bodies better.",
      "Outside the clinic, Dr Angus is looking forward to an exciting new chapter, preparing to welcome his first child — a baby boy — in February. As he steps into parenthood, his appreciation for family health, balance and sustainable wellbeing continues to grow."
    ]
  },
  {
    slug: "dr-rin-choi",
    name: "Dr Rin Choi",
    role: "Chiropractor",
    image: "/team/rin(2).png",
    locations: ["C27"],
    shortBlurb:
      "Dr Rin is a caring, movement-focused chiropractor who enjoys helping people feel stronger and move more easily. With interests in brain–body connection, gentle chiropractic care, TMJ support, and infrared laser therapy, she brings curiosity, clarity and a calm, supportive approach to every visit.",
    longBio: [
      "Dr Rin takes a thoughtful, movement-focused approach to chiropractic care, with a strong emphasis on helping people feel stronger, move with greater ease, and enjoy life more fully — whether at work, at home, or in everyday activities.",
      "Her care is guided by careful assessment, clear communication, and a genuine interest in how the brain and body work together. Dr Rin enjoys supporting patients through gentle, personalised chiropractic care that considers posture, movement patterns, and nervous system function as a whole.",
      "She has a particular interest in supporting people experiencing jaw tension and TMJ-related discomfort. By assessing how the jaw, neck and upper spine interact, Dr Rin uses gentle techniques to help reduce strain in these areas where clinically appropriate.",
      "Dr Rin also incorporates infrared laser therapy into care plans when suitable. This technology works at a cellular level by stimulating mitochondrial activity, which may support tissue repair and recovery as part of a broader treatment approach.",
      "Outside the clinic, Dr Rin enjoys staying active through a mix of exercise and movement-based training. She brings a calm, positive and encouraging presence to each appointment and enjoys working collaboratively with patients who are motivated to better understand their bodies and take an active role in their health."
    ]
  },
  {
    slug: "emma-muir",
    name: "Emma Muir",
    role: "Senior Chiropractic Assistant",
    image: "/team/random2.jpg.webp",
    locations: ["CCDY", "C27"],
    shortBlurb:
      "A mum of three boys and a former florist of 10 years, Emma brings creativity, warmth and calm organisation to our clinic. When she’s not at the front desk supporting patients, you’ll find her working on pottery projects, on the beach, at the gym or enjoying time with friends.",
    longBio: [
      "Emma brings genuine warmth and a welcoming presence to our clinic. As a mum of three boys, she has a natural gift for creating calm, connection and comfort — qualities that make her an exceptional support for both patients and the team.",
      "Before joining the chiropractic world, Emma spent ten years as a florist, running her own creative business and building strong customer relationships. She still keeps her creative spark alive through pottery and craft projects at home. When she’s not in the clinic, you’ll likely find her on a beach walk, at the gym, or spending weekends catching up with friends.",
      "Emma’s friendly, grounded nature and love for helping people shine through in everything she does."
    ]
  },
  {
    slug: "hailey-cerneaz",
    name: "Hailey Cerneaz",
    role: "Chiropractic Assistant",
    image: "/team/hailey.png",
    locations: ["CCDY", "C27"],
    shortBlurb:
      "Hailey brings bright, positive energy to our clinics. She’s currently studying a Bachelor of Arts and loves dance, languages and time at the beach. Friendly, creative and always ready to help, she creates a welcoming experience for every patient who visits us.",
    longBio: [
      "Hailey brings bright, uplifting energy to the clinic. Currently completing a Bachelor of Arts, she has a strong interest in communication, creativity and languages. Her love of learning shows in everything she does, from her studies to the way she engages with patients.",
      "When she isn’t at work or university, Hailey enjoys dancing, practising new languages, and spending sunny afternoons at the beach. She thrives in social, active environments and brings that same friendly enthusiasm into her role at Complete Chiropractic.",
      "Hailey’s vibrant personality and genuine care for people help create a positive first impression for every patient who walks through our doors."
    ]
  },
  {
    slug: "salome-raut",
    name: "Salome Raut",
    role: "Chiropractic Assistant",
    image: "/team/salome.png",
    locations: ["CCDY", "C27"],
    shortBlurb:
      "Salome is a Bachelor of Chiropractic Science student with a passion for human movement and patient care. When she’s not studying or supporting the clinic, she enjoys painting, reading and exploring new cafés around Sydney.",
    longBio: [
      "Salome is currently studying a Bachelor of Chiropractic Science and brings a thoughtful, focused approach to her role on our front desk. With a genuine passion for health, human movement and patient care, she is deeply committed to understanding chiropractic from the inside out as she works towards becoming a chiropractor herself.",
      "Creative at heart, Salome enjoys painting and reading when she’s not studying. She also loves exploring new cafés and restaurants — always on the lookout for hidden gems around Sydney. Her calm confidence and caring manner help patients feel reassured and supported from the moment they step in.",
      "Salome’s dedication to learning and her growing clinical curiosity make her a wonderful part of our team."
    ]
  }
];

export const c27TeamMembers = teamMembers.filter((member) =>
  member.locations.includes("C27")
);
