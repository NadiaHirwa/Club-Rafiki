// ─── PROGRAM DETAIL PAGES ────────────────────────────────────────────────────
// Each program has: id, title, tagline, heroImg, accentColor, description,
// activities (with icon + items), stats, quote, photos[], getInvolvedText

export const programDetails = {

  // ── 1. HEALTH ──────────────────────────────────────────────────────────────
  health: {
    id: 'health',
    title: 'Health Outreach',
    badge: 'Health',
    badgeColor: 'bg-red-100 text-red-700',
    tagline: 'Safeguarding physical, emotional, mental, and social well-being.',
    heroImg: 'https://i.ibb.co/ccb1JwML/Health-pictures.png',
    accentColor: '#E8541A',

    description: [
      'Sexual and Reproductive Health and Rights (SRHR) is a major concern across Rwandan communities, including rural areas where poverty and lack of structured activities leave many youth — especially girls — vulnerable to early unplanned pregnancy and other harmful circumstances.',
      'Club Rafiki\'s health services conduct regular adolescent education on SRHR on a weekly basis at our youth center in Nyamirambo and in the rural areas of Kanyinya and Mageragere. Peer educators use an individual approach — interacting one-on-one with youth of matching gender — so that participants feel comfortable, safe, and free to ask questions without embarrassment.',
      'Through strong collaboration with the Ministry of Health, Rwanda Biomedical Center, City of Kigali, and Nyarugenge District, Club Rafiki also runs large-scale awareness campaigns tackling drug abuse, HIV/AIDS, and unwanted pregnancy. In August 2023, a national anti-drugs campaign hosted at our center brought together approximately 2,000 students from high schools across Kigali.',
      'Club Rafiki also organizes Voluntary Counseling and Testing (VCT) mobile units, bringing HIV testing directly to communities in Nyamirambo, Rugarama, and Nyabugogo cells — making life-saving services accessible to those who might not otherwise seek them.',
    ],

    sections: [
      {
        title: 'Sexual & Reproductive Health Education',
        icon: '❤️',
        items: [
          'Weekly SRHR sessions at Nyamirambo youth center',
          'Outreach to rural areas of Kanyinya and Mageragere',
          'Individual peer-to-peer education sessions (gender-matched)',
          'HIV/AIDS prevention and awareness education',
          'Unwanted pregnancy prevention among teenagers',
          'Education on dangers of drug and substance abuse',
        ],
      },
      {
        title: 'VCT Mobile Campaigns',
        icon: '🏥',
        items: [
          'Mobile Voluntary Counseling and Testing (VCT) units',
          'Community outreach in Nyamirambo and Kigali sectors',
          'Testing in Rugarama Cell, Miduha local market',
          'Testing in Nyabugogo cell at Giti cy\'inyoni',
          'SRHR awareness combined with HIV testing',
          'Partnership with Ministry of Youth and Ministry of Health',
        ],
      },
      {
        title: 'Community Campaigns & Prevention',
        icon: '📣',
        items: [
          'National anti-drugs campaign (August 2023) — 2,000 students attended',
          'Collaboration with Rwanda Biomedical Centre',
          'Engagement of public figures and role models as speakers',
          'Distribution of informative materials on SRH',
          'Production of modern communication materials including films and IT apps',
          'Youth savings groups and initiative strengthening',
        ],
      },
    ],

    stats: [
      { number: '2,000+', label: 'Students at anti-drugs campaign (2023)' },
      { number: '3', label: 'Communities reached by VCT mobile' },
      { number: 'Weekly', label: 'SRHR education sessions' },
      { number: '2', label: 'Rural areas served (Kanyinya & Mageragere)' },
    ],

    quote: {
      text: 'This approach of individual session allowed me to feel comfortable to ask many questions to the teacher and receive positive answers without being embarrassed by friends or boys from my neighborhood.',
      author: 'Uwera, 17',
      role: 'Participant from Kanyinya sector',
    },

    photos: [
      'https://i.ibb.co/ccb1JwML/Health-pictures.png',
      'https://picsum.photos/600/400?image=1042',
      'https://picsum.photos/600/400?image=1043',
    ],

    getInvolvedText: 'Support our health outreach by volunteering as a peer educator, donating medical supplies, or partnering with us to expand VCT mobile services to more communities.',
    pdfLink: 'https://clubrafiki.files.wordpress.com/2019/09/club-rafiki_vct-mobile-_24-to-26-sept-2019.pdf',
    pdfLabel: 'Download VCT Campaign Report (2019)',
  },

  // ── 2. SPORTS ──────────────────────────────────────────────────────────────
  sports: {
    id: 'sports',
    title: 'Sport & Recreation',
    badge: 'Sport',
    badgeColor: 'bg-green-100 text-green-700',
    tagline: 'Sport is the primary tool through which we reach and inspire the largest number of youth.',
    heroImg: 'https://i.ibb.co/35x8RJ9W/52112159933-8dee1762f0-c.jpg',
    accentColor: '#2D7A4F',

    description: [
      'Sports and recreation is the activity through which Club Rafiki reaches the largest number of children and youth in Nyamirambo and beyond. More than just physical exercise, our sports programs are powerful tools for social change — used to sensitize young people on critical issues such as HIV/AIDS prevention, patriotism, unity, and reconciliation.',
      'Sports bring young people together in a shared, positive space where they can build teamwork, discipline, and leadership — values that carry far beyond the court or field. Our facilities and qualified coaches offer structured training in a wide variety of sports, from team games to martial arts and acrobatics.',
      'Regular tournaments, community events, and inter-school competitions give youth the opportunity to showcase their talents, build confidence, and develop a sense of belonging. Sport at Club Rafiki is never just about winning — it\'s about forming character and community.',
    ],

    sections: [
      {
        title: 'Team Sports',
        icon: '🏀',
        items: [
          'Basketball — including collaboration with Giants of Africa foundation',
          'Volleyball — both boys and girls teams',
          'Badminton — open to all ages',
          'Table Tennis — recreational and competitive',
        ],
      },
      {
        title: 'Martial Arts & Fitness',
        icon: '🥋',
        items: [
          'Karate — structured belt progression program',
          'Kung Fu — traditional training',
          'Acrobatics — performance and fitness',
          'Gymnastics — foundational body movement',
        ],
      },
      {
        title: 'Community & Values',
        icon: '🤝',
        items: [
          'Friendly inter-community sports gatherings',
          'HIV/AIDS sensitization through sport events',
          'Culture of patriotism and reconciliation promoted through games',
          'Film screenings and community celebration events',
          'Youth leadership development through coaching roles',
        ],
      },
    ],

    stats: [
      { number: '1,000+', label: 'Active sports participants annually' },
      { number: '8+', label: 'Sports disciplines offered' },
      { number: 'Daily', label: 'Training sessions available' },
      { number: '50+', label: 'Years of sports programming' },
    ],

    quote: {
      text: 'Basketball at Rafiki kept me off the streets and taught me discipline. I now coach the junior team every Saturday and give back what this place gave me.',
      author: 'Nshimiyimana Jean',
      role: 'Sports Program Alumni & Coach',
    },

    photos: [
      'https://i.ibb.co/35x8RJ9W/52112159933-8dee1762f0-c.jpg',
      'https://picsum.photos/600/400?image=1040',
      'https://picsum.photos/600/400?image=1031',
    ],

    getInvolvedText: 'Join our sports programs as a participant, coach, or sponsor. Help us maintain facilities, provide equipment, and give more youth the transformative experience of structured sport.',
    pdfLink: null,
    pdfLabel: null,
  },

  // ── 3. YOUTH EMPOWERMENT ───────────────────────────────────────────────────
  arts: {
    id: 'arts',
    title: 'Youth Empowerment',
    badge: 'Arts',
    badgeColor: 'bg-purple-100 text-purple-700',
    tagline: 'A safe and inspiring space for young people to learn, express, and grow.',
    heroImg: 'https://i.ibb.co/PsjqzjV4/Music-2-1.png',
    accentColor: '#7C3AED',

    description: [
      'Club Rafiki plays a key role in youth empowerment by creating a safe and inspiring space for young people to learn, express themselves, and grow. Through performance arts, fashion, music, and creative education, the organization reaches hundreds of children and youth each year — helping them develop vital life skills and professional abilities.',
      'These programs also raise awareness about important issues including HIV/AIDS prevention, patriotism, unity, and reconciliation — blending social education with creative expression. Entertainment-based learning makes these messages memorable and impactful for young audiences.',
      'From the Urban Dance School to the Music Class and Fashion School, Club Rafiki attracts talented youth who not only perform but also engage in peer education sessions, building confidence and a sense of purpose. International mentors have visited the center, offering guidance, sharing global experiences, and opening doors to professional networks and opportunities.',
      'Club Rafiki is more than a youth center — it is a family. A place where every contribution, whether in fashion design, performing arts, or music, is warmly welcomed and celebrated.',
    ],

    sections: [
      {
        title: 'Performing Arts',
        icon: '🎭',
        items: [
          'Urban Dance School — modern and contemporary dance training',
          'Traditional Rwandan dance and drama',
          'Public performances at community and national events',
          'Peer education sessions integrated into dance programs',
        ],
      },
      {
        title: 'Music & Creative Arts',
        icon: '🎵',
        items: [
          'Music Class — instruments, vocals, and music theory',
          'Visual arts and drawing workshops (introduced by KOICA volunteers)',
          'Creative self-expression and confidence-building sessions',
          'Music Rapid Report program documentation',
        ],
      },
      {
        title: 'Fashion & Vocational Arts',
        icon: '✂️',
        items: [
          'Urban Fashion School — sewing, design, and garment making',
          'Vocational training in fashion design recognized at school events and public functions',
          'Practical skills leading to employment and self-reliance',
          'Mentorship from local and international fashion professionals',
        ],
      },
      {
        title: 'Film & Media',
        icon: '🎬',
        items: [
          'Film projections for community education and entertainment',
          'Media literacy and storytelling for youth',
          'HIV/AIDS and social awareness films',
          'Digital content creation introduction',
        ],
      },
    ],

    stats: [
      { number: '100s', label: 'Youth enrolled in arts programs yearly' },
      { number: '4', label: 'Creative disciplines (Dance, Music, Fashion, Film)' },
      { number: 'Global', label: 'Mentors from abroad visiting annually' },
      { number: '1', label: 'Graduate recognized at national public functions' },
    ],

    quote: {
      text: 'She joined as a vocational student in sewing. Soon after, she learned how to sew and became deeply involved in activities to make her dream a reality. Her fashion design skills were recognized and requested at school events and public functions.',
      author: 'Club Rafiki Staff',
      role: 'About a Fashion School graduate',
    },

    photos: [
      'https://i.ibb.co/PsjqzjV4/Music-2-1.png',
      'https://picsum.photos/600/400?image=1044',
      'https://picsum.photos/600/400?image=1047',
    ],

    getInvolvedText: 'Support creative youth by sponsoring a student\'s music or dance training, volunteering as a mentor, or donating instruments and art supplies to our center.',
    pdfLink: 'https://clubrafiki.files.wordpress.com/2019/09/rapid-report-of-music-class.pdf',
    pdfLabel: 'Download Music Program Rapid Report',
  },

  // ── 4. CULTURE ─────────────────────────────────────────────────────────────
  cultural: {
    id: 'cultural',
    title: 'Cultural Initiatives',
    badge: 'Culture',
    badgeColor: 'bg-yellow-100 text-yellow-700',
    tagline: 'Preserving Rwandan heritage and building bridges through shared knowledge.',
    heroImg: 'https://i.ibb.co/CKBGq1mr/cropped-dsc-08142.jpg',
    accentColor: '#B45309',

    description: [
      'Club Rafiki\'s cultural programs provide a rich platform for learning, creative expression, and preserving Rwandan heritage. At the center of this is our library — a welcoming space where children and youth can read, study, and discover the joy of learning in a structured environment.',
      'We publish the "RAFIKI Books and Journal" — a children\'s and youth newspaper that gives young writers and thinkers a voice. Reading sessions encourage children to borrow books and then share stories with their peers, growing a culture of literacy and communication from an early age.',
      'Cultural education at Club Rafiki also addresses critical national issues — sensitizing youth on the dangers of genocide ideology, cultivating patriotism, and promoting unity and reconciliation across communities. Traditional and modern Rwandan dance, drama, and history are all part of the cultural curriculum.',
      'Thanks to partnerships with KOICA volunteers, we have introduced art workshops where children explore creativity through drawing and visual expression. Hygiene education — including proper handwashing techniques — is integrated into sessions, reinforcing healthy habits alongside cultural learning.',
    ],

    sections: [
      {
        title: 'Library & Reading Programs',
        icon: '📚',
        items: [
          'Library with rooms for reading, studying, and quiet work',
          'Book borrowing program for children and youth',
          'Weekly reading sessions with peer storytelling',
          'Children\'s and youth newspaper — "RAFIKI Books and Journal"',
          'Support for academic study and self-directed learning',
        ],
      },
      {
        title: 'Social & Civic Education',
        icon: '🏛️',
        items: [
          'Sensitization against HIV/AIDS through cultural expression',
          'Anti-genocide ideology education for children and youth',
          'Patriotism and national identity building',
          'Unity and reconciliation promotion through shared activities',
          'Cooperation between Rwandan youth and youth from foreign countries',
          'Public debates and constructive education programs',
        ],
      },
      {
        title: 'Arts, Games & Rwandan Heritage',
        icon: '🎨',
        items: [
          'Visual arts and drawing workshops (introduced by KOICA volunteers)',
          'Traditional Rwandan dance and drama',
          'Rwandan history and cultural knowledge sessions',
          'Games: scrabble, chess, monopoly, traditional Rwandan games',
          'Handwashing and hygiene education integrated into sessions',
          'Traditional Rwandan cuisine and food culture education',
        ],
      },
    ],

    stats: [
      { number: 'Weekly', label: 'Reading and cultural sessions' },
      { number: '1', label: 'Published youth newspaper (RAFIKI Journal)' },
      { number: 'Multi', label: 'National partnerships for civic education' },
      { number: 'Since 1974', label: 'Cultural programming history' },
    ],

    quote: {
      text: 'Art is very important because through this, children learn more deeply about a concept and enjoy studying different things by drawing them. In art sessions, participants learned how to be creative, have self-expression, and focus.',
      author: 'Kim Sea',
      role: 'KOICA Volunteer, Club Rafiki Art Workshop',
    },

    photos: [
      'https://i.ibb.co/CKBGq1mr/cropped-dsc-08142.jpg',
      'https://picsum.photos/600/400?image=1015',
      'https://picsum.photos/600/400?image=1032',
    ],

    getInvolvedText: 'Donate books to our library, volunteer as a reading mentor, or partner with us to expand cultural education programs that preserve Rwandan heritage for the next generation.',
    pdfLink: null,
    pdfLabel: null,
  },

  // ── 5. TRAINING ────────────────────────────────────────────────────────────
  training: {
    id: 'training',
    title: 'Training & Education',
    badge: 'Education',
    badgeColor: 'bg-blue-100 text-blue-700',
    tagline: 'Equipping youth with the skills, confidence, and knowledge to build their own futures.',
    heroImg: 'https://i.ibb.co/RTggy2pK/dsc-7517-scaled.jpg',
    accentColor: '#1A3A6B',

    description: [
      'Club Rafiki provides basic and advanced vocational training to help youth enter or advance in the job market. Priority is given to training in literacy, languages (English, French, and Kiswahili), ICT, entrepreneurship, and sports — equipping young people with practical, marketable skills.',
      'Our "English Corner" program teaches communication skills to youth and young adults, recognizing that English fluency opens global doors. Students in the program even produced their own book — "Rise of Hope" — as a testament to their progress and creativity.',
      'Through our Job Desk initiative, Club Rafiki serves as a one-stop career center for job seekers — offering CV guidance, cover letter writing, interview preparation, career counseling, and entrepreneurship training. An online platform extends these services beyond the physical center.',
      'Our ICT training program, run in partnership with Cisco, equips youth with digital literacy skills essential for the 21st century. Participants learn everything from creating secure passwords and email accounts to using Microsoft Office, accessing e-services, and navigating the internet. The center provides 16 computers, printers, free Wi-Fi, and an open library for all who need it.',
    ],

    sections: [
      {
        title: 'Language & Literacy',
        icon: '📖',
        items: [
          '"English Corner" — communication skills for youth and young adults',
          'French and Kiswahili language classes',
          'Literacy training for adults who missed formal schooling',
          'Student publication: "Rise of Hope" — written by English Corner students',
          'Reading and writing for vulnerable groups and individuals',
        ],
      },
      {
        title: 'ICT & Digital Literacy',
        icon: '💻',
        items: [
          'Digital literacy training in partnership with Cisco',
          'Microsoft Word, Excel, e-services, and internet navigation',
          'Digital Ambassadors program (DOT — Digital Opportunity Trust)',
          '16 computers and printers available to all beneficiaries',
          'Free Wi-Fi throughout the entire center',
          'Social media literacy for youth clubs and teams',
          'Online certification upon completing digital literacy courses',
        ],
      },
      {
        title: 'Job Desk & Entrepreneurship',
        icon: '💼',
        items: [
          'Job Desk — one-stop career center for job seekers',
          'CV design and professional application letter guidance',
          'Interview preparation and career counseling',
          'Entrepreneurship training and small business creation steps',
          'Access to job listings and internship opportunities',
          'Online Job Desk platform: club-rafiki-job-desk.vercel.app',
        ],
      },
      {
        title: 'Vocational Training',
        icon: '🔧',
        items: [
          'Skills-based training for specific careers and trades',
          'Sewing and fashion design (see Youth Empowerment program)',
          'Sports training and coaching certification',
          'Practical, real-world applicable skills curriculum',
        ],
      },
    ],

    stats: [
      { number: '15', label: 'Youth certified in Cisco digital literacy (2023)' },
      { number: '16', label: 'Computers & printers at the ICT center' },
      { number: '16+', label: 'Children trained in basic computer skills (2022)' },
      { number: 'Free', label: 'Wi-Fi for all center beneficiaries' },
    ],

    quote: {
      text: 'Taking part in this training helped me to understand many things such as creating a strong password, an e-mail address and much more. Thank you for this opportunity.',
      author: 'Steven, 14',
      role: 'Cisco Digital Literacy Program participant',
    },

    photos: [
      'https://i.ibb.co/RTggy2pK/dsc-7517-scaled.jpg',
      'https://picsum.photos/600/400?image=1038',
      'https://picsum.photos/600/400?image=1041',
    ],

    getInvolvedText: 'Volunteer as a language or ICT trainer, donate computers or equipment, or sponsor a youth through a full semester of skills training at Club Rafiki.',
    pdfLink: 'https://clubrafiki.files.wordpress.com/2019/03/ecw-book.pdf',
    pdfLabel: 'Read "Rise of Hope" — English Corner Student Book',
  },

  // ── 6. EMPOWERING GIRLS ────────────────────────────────────────────────────
  girls: {
    id: 'girls',
    title: 'Empowering Girls',
    badge: 'Girls',
    badgeColor: 'bg-pink-100 text-pink-700',
    tagline: 'Motivating girls to maximize their life opportunities — with dignity, confidence, and purpose.',
    heroImg: 'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png',
    accentColor: '#DB2777',

    description: [
      'The Empowering Girls program at Club Rafiki is dedicated to giving girls the tools, confidence, and community they need to take control of their lives. Recognized and appreciated by international visitors including Prof. Shirley Randell, the "Our Girls Program" has become one of Club Rafiki\'s most impactful initiatives.',
      'Grounded in a holistic approach to empowerment, the program focuses on changing behavior through sport, maintaining a strong focus on education, building supportive networks, and teaching girls to communicate confidently and proactively. Girls are encouraged to be responsible for their actions, surround themselves with positive influences, and actively work toward their dreams.',
      'The program recognizes that girls in Nyamirambo and surrounding areas face unique challenges — from early pregnancy risk to limited access to education and economic opportunities. By addressing these challenges through sports, mentorship, vocational training, and peer support, Club Rafiki creates a safe space where every girl can grow.',
    ],

    sections: [
      {
        title: 'Empowerment Strategies',
        icon: '⭐',
        items: [
          'Changing behavior through girls\' sports programs',
          'Maintaining a strong focus on education and personal development',
          'Actively building a supportive peer and mentor network',
          'Working to earn dignity and self-respect',
          'Learning to help empower other girls and women',
          'Surrounding themselves with positive, uplifting friendships',
          'Taking responsibility for their own actions and futures',
          'Learning to communicate confidently and proactively',
        ],
      },
      {
        title: 'Sports & Physical Empowerment',
        icon: '⚽',
        items: [
          'Girls\' football (soccer) in Kanyinya — behavior change through sport',
          'Structured sports training with qualified coaches',
          'Inter-community girls\' sports events and competitions',
          'Physical fitness as a foundation for mental well-being',
        ],
      },
      {
        title: 'Education & Mentorship',
        icon: '🎓',
        items: [
          '"A Mercy Girl" program — supporting girls in need',
          'Vocational skills training (sewing, design, entrepreneurship)',
          'Mentorship from local and international role models',
          'SRHR education specific to girls\' health and rights',
          'Leadership circles and public speaking development',
          'Financial literacy and independence training',
        ],
      },
    ],

    stats: [
      { number: '45+', label: 'Girl Up graduates in 2024' },
      { number: 'Recognized', label: 'By international visitors including Prof. Shirley Randell' },
      { number: 'Rural & Urban', label: 'Girls served in Nyamirambo, Kanyinya & beyond' },
      { number: 'Holistic', label: 'Approach: sport, education, health & mentorship' },
    ],

    quote: {
      text: 'Club Rafiki gave me the skills and confidence to start my own tailoring business. The Girls program changed my life — I now teach other young women what I learned here.',
      author: 'Uwase Diane',
      role: 'Girls Program Graduate, 2023',
    },

    photos: [
      'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png',
      'https://picsum.photos/600/400?image=1027',
      'https://picsum.photos/600/400?image=1005',
    ],

    getInvolvedText: 'Sponsor a girl\'s participation in the empowerment program, volunteer as a mentor, or donate to fund vocational training that gives girls lasting economic independence.',
    pdfLink: 'https://clubrafiki.files.wordpress.com/2020/09/kanyinya-girls-soccer-report.pdf',
    pdfLabel: 'Download Girls Soccer Program Report',
  },
}
