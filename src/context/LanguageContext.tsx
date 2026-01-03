import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.vision': 'Vision',
    'nav.platform': 'Platform',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.volunteer': 'VOLUNTEER',
    
    // Hero Section
    'hero.tagline': 'LET\'S BUILD A NEW BANGLADESH',
    'hero.tagline.mobile': 'NEW BANGLADESH',
    'hero.name.first': 'NAHID',
    'hero.name.last': 'ISLAM',
    'hero.vision.link': 'See Our Vision',
    'hero.vision.link.mobile': 'Vision',
    'hero.vision.subtitle': 'Fight for a just and equitable society, or "Vote for a brighter tomorrow."',
    'hero.join': 'Join the',
    'hero.movement': 'Movement',
    'hero.badge.join': 'Join the',
    'hero.badge.movement': 'MOVEMENT',
    'hero.description.student': 'Student Leader.',
    'hero.description.leader': 'Revolutionary.',
    'hero.description.candidate': 'Convener of National Citizens Party (NCP).',
    'hero.independent': 'INDEPENDENT',
    'hero.constituency': 'Dhaka-11',
    
    // Vision Section
    'vision.label': 'OUR VISION',
    'vision.title.new': 'A New',
    'vision.title.bangladesh': 'Bangladesh',
    'vision.title.starts': 'Starts Here',
    'vision.subtitle': 'Together, we will build a constituency that represents the voices of students, workers, and families who believe in transparent, accountable leadership.',
    'vision.card1.title': 'Justice & Equality',
    'vision.card1.desc': 'Building a society where every citizen has equal rights and opportunities',
    'vision.card2.title': 'Education Reform',
    'vision.card2.desc': 'Modernizing our education system to prepare students for the future',
    'vision.card3.title': 'Youth Empowerment',
    'vision.card3.desc': 'Creating pathways for young leaders to shape our nation',
    'vision.card4.title': 'Economic Growth',
    'vision.card4.desc': 'Supporting entrepreneurs and small businesses to build prosperity',
    'vision.card5.title': 'Healthcare Access',
    'vision.card5.desc': 'Ensuring quality healthcare is accessible to all communities',
    'vision.card6.title': 'Innovation Hub',
    'vision.card6.desc': 'Transforming Dhaka-10 into a center for technology and innovation',
    'vision.cta.label': 'READY TO MAKE A DIFFERENCE?',
    'vision.cta.title': 'Join our campaign today',
    'vision.cta.button': 'GET INVOLVED',

    // July Revolution Section
    'july.label': 'THE UPRISING',
    'july.title.the': 'The',
    'july.title.architect': 'Architect',
    'july.title.change': 'of Change',
    'july.subtitle': 'Led the Students Against Discrimination movement that sparked the July 2024 Revolution',
    'july.role.title': 'Key Coordinator',
    'july.role.desc': 'Led the Students Against Discrimination movement during the July Revolution',
    'july.movement.title': 'Mass Uprising',
    'july.movement.desc': 'From quota reform protest to a movement that changed history',
    'july.book.label': 'FROM THE FRONTLINES',
    'july.book.title': 'জুলাই: জন্মভূমি অথবা মৃত্যু (July: Motherland or Death)',
    'july.book.desc': 'A firsthand account of the uprising, detailing the struggle, sacrifice, and spirit of liberation that defined July 2024.',
    'july.book.cta': 'Read More',
    'july.quote.text': 'We will protect our borders ourselves. We will not tolerate any more aggression at the border.',
    'july.quote.author': 'Nahid Islam',
    'july.struggle.title': 'The Path of Sacrifice',
    'july.struggle.detention.title': 'Detention',
    'july.struggle.detention.desc': 'Faced unlawful detention while fighting for justice',
    'july.struggle.torture.title': 'Physical & Psychological Torture',
    'july.struggle.torture.desc': 'Endured extreme conditions for the cause',
    'july.struggle.surveillance.title': 'Heavy Surveillance',
    'july.struggle.surveillance.desc': 'Continued the movement despite constant monitoring',
    'july.struggle.liberation.title': 'People\'s Liberation',
    'july.struggle.liberation.desc': 'Achieved victory through collective sacrifice',

    // Public Service Section
    'service.label': 'PUBLIC SERVICE',
    'service.title.public': 'Public',
    'service.title.service': 'Service & Leadership',
    'service.subtitle': 'Served as Adviser in the Interim Government (Aug 2024 – Feb 2025), driving reforms across multiple ministries',
    'service.role1.title': 'Adviser for Posts, Telecommunications and Information Technology',
    'service.role1.period': 'August 2024 – February 2025',
    'service.role1.desc': 'Reduced taxes on mobile internet and services to make internet affordable for common people and worked to eliminate digital inequality',
    'service.role2.title': 'Adviser for Information and Broadcasting',
    'service.role2.period': 'August 2024 – February 2025',
    'service.role2.desc': 'Fundamentally reformed the long-standing censorship system in Bangladesh and established the \'Bangladesh Film Certification Board\' in response to filmmakers\' demands',
    'service.role3.title': 'Convener, National Citizens Party (NCP)',
    'service.role3.period': 'February 2025 – Present',
    'service.role3.desc': 'Resigned from government to form a new political party, currently preparing for the 2026 elections and working on establishing the \'Second Republic\'',
    'service.policy.label': 'CORE MISSION',
    'service.policy.text': 'Working towards the reforms needed in politics and society to build a stronger Bangladesh',

    // Core Values Section
    'values.label': 'DEMOCRATIC VALUES',
    'values.title.upholding': 'Upholding',
    'values.title.freedom': 'Freedom',
    'values.title.accountability': '& Accountability',
    'values.subtitle': 'Building a Bangladesh grounded in free speech, justice for victims, and zero tolerance for corruption',
    'values.freedom.title': 'Freedom of Speech',
    'values.freedom.desc': 'After the uprising, we restored freedom of speech. Now we must use it with sincerity and responsibility to strengthen our democracy.',
    'values.freedom.quote': 'There will be no place for pro-India or pro-Pakistan politics in Bangladesh. We will build the state by prioritizing Bangladesh\'s interests above all.',
    'values.justice.title': 'Accountability & Justice',
    'values.justice.desc': 'Standing firm on accountability for crimes against humanity and disappearances. Justice delayed is justice denied.',
    'values.justice.quote': 'Starting the trial of those involved in disappearances is a government\'s victory. Justice must be served.',
    'values.accountability.title': 'Anti-Corruption',
    'values.accountability.desc': 'The previous governance allowed extortion to become entrenched. We must shift to a culture of accountability and transparency.',
    'values.accountability.quote': 'Corruption and extortion have no place in our new Bangladesh. Accountability starts now.',
    'values.cta.text': 'Stand with us for a transparent Bangladesh',
    'values.cta.button': 'Join the Movement',

    // Future Vision Section
    'future.label': 'THE NEXT CHAPTER',
    'future.title.the': 'The',
    'future.title.next': 'Next',
    'future.title.chapter': 'Chapter',
    'future.subtitle': 'From adviser to candidate – ready to contest in the upcoming national election and continue serving the people',
    'future.electoral.title': 'Electoral Ambition',
    'future.electoral.desc': 'After resigning as Adviser and submitting wealth statement, ready to contest in the national election as an independent voice for change.',
    'future.electoral.cta': 'Support Our Campaign',
    'future.electoral.secondary': 'Learn More',
    'future.commitment.item1.title': 'Transparent Leadership',
    'future.commitment.item1.desc': 'Full disclosure and accountability to the people',
    'future.commitment.item2.title': 'Independent Voice',
    'future.commitment.item2.desc': 'Not bound by party politics, only by the people',
    'future.commitment.item3.title': 'Reform Champion',
    'future.commitment.item3.desc': 'Continuing the push for political and social reform',
    'future.pillars.title': 'Three Pillars of Our Campaign',
    'future.pillar1.title': 'Electoral Integrity',
    'future.pillar1.desc': 'Ensuring free, fair, and transparent elections for all',
    'future.pillar2.title': 'People\'s Movement',
    'future.pillar2.desc': 'The 2024 movement was the people\'s movement – we are merely its navigators',
    'future.pillar3.title': 'Prosperous Bangladesh',
    'future.pillar3.desc': 'Building economic opportunity and social justice for every citizen',
    'future.movement.quote': 'The one-point demand or government collapse must come from the people. When people make a final decision, only then comes the official announcement.',
    'future.movement.author': 'Nahid Islam on the July Revolution',

    // Call to Action Section
    'cta.label': 'YOUR VOTE, OUR FUTURE',
    'cta.headline.part1': 'If You Want Reform,',
    'cta.headline.part2': 'Vote YES',
    'cta.subheadline': 'Let us make our struggle successful with public vote. A correct vote will ensure accountability and people\'s governance.',
    'cta.means': 'MEANS',
    'cta.represents': 'REPRESENTS',
    'cta.yes.label': 'VOTE YES',
    'cta.yes.title': 'হ্যাঁ',
    'cta.yes.means': 'Reform & Change',
    'cta.yes.point1': 'জবাবদিহিতা ও সুশাসন (Accountability & Good Governance)',
    'cta.yes.point2': 'যুব শক্তির জাগরণ (Awakening of Youth Power)',
    'cta.yes.point3': 'মেধাভিত্তিক সমাজ (Merit-based Society)',
    'cta.no.label': 'VOTE NO',
    'cta.no.title': 'না',
    'cta.no.means': 'Old System Maintained',
    'cta.no.point1': 'অস্বচ্ছতা ও দুর্নীতি (Opacity & Corruption)',
    'cta.no.point2': 'স্থবিরতা ও অব্যবস্থাপনা (Stagnation & Mismanagement)',
    'cta.no.point3': 'কোটা ও বৈষম্য (Quota & Discrimination)',
    'cta.button': 'Let\'s Stand for Change',
    'cta.footer': 'আপনার ভোট, আমাদের ভবিষ্যৎ (Your Vote, Our Future)',
    'cta.closing': 'সংস্কার চাইলে হ্যাঁ ভোট দিন'
  },
  bn: {
    // Navbar
    'nav.vision': 'ভিশন',
    'nav.platform': 'প্ল্যাটফর্ম',
    'nav.about': 'সম্পর্কে',
    'nav.news': 'সংবাদ',
    'nav.contact': 'যোগাযোগ',
    'nav.volunteer': 'স্বেচ্ছাসেবক',
    
    // Hero Section
    'hero.tagline': 'চলুন গড়ি নতুন বাংলাদেশ',
    'hero.tagline.mobile': 'নতুন বাংলাদেশ',
    'hero.name.first': 'নাহিদ',
    'hero.name.last': 'ইসলাম',
    'hero.vision.link': 'আমাদের ভিশন দেখুন',
    'hero.vision.link.mobile': 'ভিশন',
    'hero.vision.subtitle': 'ন্যায়সঙ্গত ও সমতাভিত্তিক সমাজের জন্য লড়াই করুন, "উজ্জ্বল আগামীর জন্য ভোট দিন।"',
    'hero.join': 'যোগ দিন',
    'hero.movement': 'আন্দোলনে',
    'hero.badge.join': 'যোগ দিন',
    'hero.badge.movement': 'আন্দোলনে',
    'hero.description.student': 'ছাত্র নেতা।',
    'hero.description.leader': 'বিপ্লবী।',
    'hero.description.candidate': 'জাতীয় নাগরিক পার্টি (এনসিপি) আহবায়ক।',
    'hero.independent': 'স্বতন্ত্র প্রার্থী',
    'hero.constituency': 'ঢাকা-১১',
    
    // Vision Section
    'vision.label': 'আমাদের ভিশন',
    'vision.title.new': 'নতুন',
    'vision.title.bangladesh': 'বাংলাদেশ',
    'vision.title.starts': 'শুরু এখান থেকে',
    'vision.subtitle': 'একসাথে, আমরা এমন একটি নির্বাচনী এলাকা গড়ে তুলব যা ছাত্র, শ্রমিক এবং পরিবারের কণ্ঠস্বর প্রতিনিধিত্ব করে যারা স্বচ্ছ, জবাবদিহিমূলক নেতৃত্বে বিশ্বাস করে।',
    'vision.card1.title': 'ন্যায়বিচার ও সমতা',
    'vision.card1.desc': 'এমন একটি সমাজ গড়ে তোলা যেখানে প্রতিটি নাগরিকের সমান অধিকার এবং সুযোগ রয়েছে',
    'vision.card2.title': 'শিক্ষা সংস্কার',
    'vision.card2.desc': 'ভবিষ্যতের জন্য শিক্ষার্থীদের প্রস্তুত করতে আমাদের শিক্ষা ব্যবস্থার আধুনিকীকরণ',
    'vision.card3.title': 'যুব ক্ষমতায়ন',
    'vision.card3.desc': 'তরুণ নেতাদের জন্য আমাদের জাতি গঠনের পথ তৈরি করা',
    'vision.card4.title': 'অর্থনৈতিক প্রবৃদ্ধি',
    'vision.card4.desc': 'সমৃদ্ধি তৈরিতে উদ্যোক্তা এবং ছোট ব্যবসার সমর্থন',
    'vision.card5.title': 'স্বাস্থ্যসেবা প্রবেশাধিকার',
    'vision.card5.desc': 'সকল সম্প্রদায়ের জন্য মানসম্পন্ন স্বাস্থ্যসেবা নিশ্চিত করা',
    'vision.card6.title': 'উদ্ভাবন কেন্দ্র',
    'vision.card6.desc': 'ঢাকা-১০ কে প্রযুক্তি এবং উদ্ভাবনের কেন্দ্রে রূপান্তরিত করা',
    'vision.cta.label': 'পরিবর্তনে অংশ নিতে প্রস্তুত?',
    'vision.cta.title': 'আজই আমাদের প্রচারণায় যোগ দিন',
    'vision.cta.button': 'জড়িত হন',

    // July Revolution Section
    'july.label': 'জুলাই বিপ্লব',
    'july.title.the': '',
    'july.title.architect': 'পরিবর্তনের',
    'july.title.change': 'স্থপতি',
    'july.subtitle': 'জুলাই ২০২৪ বিপ্লবের সূচনাকারী বৈষম্যবিরোধী ছাত্র আন্দোলনের নেতৃত্ব দিয়েছেন',
    'july.role.title': 'প্রধান সমন্বয়কারী',
    'july.role.desc': 'জুলাই বিপ্লবের সময় বৈষম্যবিরোধী ছাত্র আন্দোলনের নেতৃত্ব দিয়েছেন',
    'july.movement.title': 'গণঅভ্যুত্থান',
    'july.movement.desc': 'কোটা সংস্কার প্রতিবাদ থেকে ইতিহাস পরিবর্তনকারী আন্দোলন',
    'july.book.label': 'সামনের সারি থেকে',
    'july.book.title': 'জুলাই: জন্মভূমি অথবা মৃত্যু',
    'july.book.desc': 'জুলাই ২০২৪-এর সংগ্রাম, ত্যাগ এবং মুক্তির চেতনার প্রথম হাতের বিবরণ।',
    'july.book.cta': 'আরও পড়ুন',
    'july.quote.text': 'আমরাই আমাদের সীমান্ত রক্ষা করবো। সীমান্তে আর কোনো আগ্রাসন আমরা মেনে নেব না।',
    'july.quote.author': 'নাহিদ ইসলাম',
    'july.struggle.title': 'ত্যাগের পথ',
    'july.struggle.detention.title': 'আটক',
    'july.struggle.detention.desc': 'ন্যায়বিচারের জন্য লড়াই করার সময় বেআইনি আটকের মুখোমুখি',
    'july.struggle.torture.title': 'শারীরিক ও মানসিক নির্যাতন',
    'july.struggle.torture.desc': 'উদ্দেশ্যের জন্য চরম পরিস্থিতি সহ্য করেছেন',
    'july.struggle.surveillance.title': 'কঠোর নজরদারি',
    'july.struggle.surveillance.desc': 'ক্রমাগত পর্যবেক্ষণ সত্ত্বেও আন্দোলন অব্যাহত রেখেছেন',
    'july.struggle.liberation.title': 'জনগণের মুক্তি',
    'july.struggle.liberation.desc': 'সম্মিলিত ত্যাগের মাধ্যমে বিজয় অর্জন',

    // Public Service Section
    'service.label': 'জনসেবা',
    'service.title.public': 'জনসেবা',
    'service.title.service': 'ও নেতৃত্ব',
    'service.subtitle': 'অন্তর্বর্তী সরকারে উপদেষ্টা হিসেবে দায়িত্ব পালন (আগস্ট ২০২৪ – ফেব্রুয়ারি ২০২৫), একাধিক মন্ত্রণালয়ে সংস্কার চালনা',
    'service.role1.title': 'ডাক, টেলিযোগাযোগ ও তথ্যপ্রযুক্তি উপদেষ্টা',
    'service.role1.period': 'আগস্ট ২০২৪ – ফেব্রুয়ারি ২০২৫',
    'service.role1.desc': 'মোবাইল ইন্টারনেট ও সেবার ওপর কর কমিয়ে সাধারণ মানুষের জন্য ইন্টারনেট সস্তা করার উদ্যোগ নেন এবং ডিজিটাল বৈষম্য দূর করতে কাজ করেন',
    'service.role2.title': 'তথ্য ও সম্প্রচার উপদেষ্টা',
    'service.role2.period': 'আগস্ট ২০২৪ – ফেব্রুয়ারি ২০২৫',
    'service.role2.desc': 'বাংলাদেশে দীর্ঘদিনের সেন্সরশিপ প্রথার আমূল সংস্কার করেন এবং চলচ্চিত্র নির্মাতাদের দাবির প্রেক্ষিতে \'বাংলাদেশ চলচ্চিত্র সার্টিফিকেশন বোর্ড\' গঠন করেন',
    'service.role3.title': 'আহবায়ক, জাতীয় নাগরিক পার্টি (NCP)',
    'service.role3.period': 'ফেব্রুয়ারি ২০২৫ – বর্তমান',
    'service.role3.desc': 'সরকার থেকে পদত্যাগ করে নতুন রাজনৈতিক দল গঠন করেন এবং বর্তমানে ২০২৬ সালের নির্বাচনের প্রস্তুতি ও \'দ্বিতীয় প্রজাতন্ত্র\' প্রতিষ্ঠার রূপরেখা নিয়ে কাজ করছেন',
    'service.policy.label': 'মূল লক্ষ্য',
    'service.policy.text': 'একটি শক্তিশালী বাংলাদেশ গড়তে রাজনীতি ও সমাজে প্রয়োজনীয় সংস্কারের জন্য কাজ করছি',

    // Core Values Section
    'values.label': 'গণতান্ত্রিক মূল্যবোধ',
    'values.title.upholding': 'রক্ষা করছি',
    'values.title.freedom': 'স্বাধীনতা',
    'values.title.accountability': 'ও জবাবদিহিতা',
    'values.subtitle': 'মুক্ত বাক, ভুক্তভোগীদের জন্য ন্যায়বিচার এবং দুর্নীতির প্রতি শূন্য সহনশীলতার ভিত্তিতে বাংলাদেশ গড়া',
    'values.freedom.title': 'বাকস্বাধীনতা',
    'values.freedom.desc': 'অভ্যুত্থানের পর, আমরা বাকস্বাধীনতা ফিরিয়ে এনেছি। এখন আমাদের গণতন্ত্রকে শক্তিশালী করতে আন্তরিকতা এবং দায়িত্বশীলতার সাথে এটি ব্যবহার করতে হবে।',
    'values.freedom.quote': 'বাংলাদেশে প্রো-ইন্ডিয়ান বা প্রো-পাকিস্তানি রাজনীতির কোনো জায়গা থাকবে না। আমরা বাংলাদেশের স্বার্থকে সবার আগে রেখে রাষ্ট্র গঠন করব।',
    'values.justice.title': 'জবাবদিহিতা ও ন্যায়বিচার',
    'values.justice.desc': 'মানবতাবিরোধী অপরাধ এবং গুম এর জন্য জবাবদিহিতায় দৃঢ় অবস্থান। বিলম্বিত ন্যায়বিচার অস্বীকৃত ন্যায়বিচার।',
    'values.justice.quote': 'গুমের সাথে জড়িতদের বিচার শুরু করা সরকারের বিজয়। ন্যায়বিচার নিশ্চিত করতে হবে।',
    'values.accountability.title': 'দুর্নীতিবিরোধী',
    'values.accountability.desc': 'পূর্ববর্তী শাসন চাঁদাবাজিকে প্রাতিষ্ঠানিক হতে দিয়েছিল। আমাদের জবাবদিহিতা এবং স্বচ্ছতার সংস্কৃতিতে পরিবর্তন আনতে হবে।',
    'values.accountability.quote': 'দুর্নীতি এবং চাঁদাবাজির আমাদের নতুন বাংলাদেশে কোনো স্থান নেই। জবাবদিহিতা এখনই শুরু।',
    'values.cta.text': 'স্বচ্ছ বাংলাদেশের জন্য আমাদের সাথে দাঁড়ান',
    'values.cta.button': 'আন্দোলনে যোগ দিন',

    // Future Vision Section
    'future.label': 'পরবর্তী অধ্যায়',
    'future.title.the': '',
    'future.title.next': 'পরবর্তী',
    'future.title.chapter': 'অধ্যায়',
    'future.subtitle': 'উপদেষ্টা থেকে প্রার্থী – আসন্ন জাতীয় নির্বাচনে প্রতিদ্বন্দ্বিতা করতে এবং জনগণের সেবা চালিয়ে যেতে প্রস্তুত',
    'future.electoral.title': 'নির্বাচনী উচ্চাকাঙ্ক্ষা',
    'future.electoral.desc': 'উপদেষ্টা হিসেবে পদত্যাগ এবং সম্পদের বিবরণী জমা দেওয়ার পর, পরিবর্তনের জন্য স্বতন্ত্র কণ্ঠস্বর হিসেবে জাতীয় নির্বাচনে প্রতিদ্বন্দ্বিতা করতে প্রস্তুত।',
    'future.electoral.cta': 'আমাদের প্রচারণা সমর্থন করুন',
    'future.electoral.secondary': 'আরও জানুন',
    'future.commitment.item1.title': 'স্বচ্ছ নেতৃত্ব',
    'future.commitment.item1.desc': 'জনগণের কাছে সম্পূর্ণ প্রকাশ এবং জবাবদিহিতা',
    'future.commitment.item2.title': 'স্বতন্ত্র কণ্ঠস্বর',
    'future.commitment.item2.desc': 'দলীয় রাজনীতিতে আবদ্ধ নয়, শুধু জনগণের কাছে',
    'future.commitment.item3.title': 'সংস্কার চ্যাম্পিয়ন',
    'future.commitment.item3.desc': 'রাজনৈতিক এবং সামাজিক সংস্কারের জন্য চাপ অব্যাহত',
    'future.pillars.title': 'আমাদের প্রচারণার তিনটি স্তম্ভ',
    'future.pillar1.title': 'নির্বাচনী সততা',
    'future.pillar1.desc': 'সকলের জন্য মুক্ত, সুষ্ঠু এবং স্বচ্ছ নির্বাচন নিশ্চিত করা',
    'future.pillar2.title': 'জনগণের আন্দোলন',
    'future.pillar2.desc': '২০২৪ আন্দোলন ছিল জনগণের আন্দোলন – আমরা কেবল এর দিকনির্দেশক',
    'future.pillar3.title': 'সমৃদ্ধ বাংলাদেশ',
    'future.pillar3.desc': 'প্রতিটি নাগরিকের জন্য অর্থনৈতিক সুযোগ এবং সামাজিক ন্যায়বিচার গড়া',
    'future.movement.quote': 'এক দফা বা সরকার পতনের বিষয়টি জনগণের ভেতর থেকে আসতে হয়। মানুষ যখন চূড়ান্তভাবে সিদ্ধান্ত নিয়ে নেয়, তখনই আনুষ্ঠানিক ঘোষণা আসে।',
    'future.movement.author': 'জুলাই বিপ্লবে আসিফ মাহমুদ',

    // Call to Action Section
    'cta.label': 'আপনার ভোট, আমাদের ভবিষ্যৎ',
    'cta.headline.part1': 'সংস্কার চাইলে',
    'cta.headline.part2': 'হ্যাঁ ভোট দিন',
    'cta.subheadline': 'আসুন, আমাদের সংগ্রামকে জনরায় দিয়ে সফল করি। একটি সঠিক ভোট নিশ্চিত করবে জবাবদিহিতা ও জনগণের শাসন।',
    'cta.means': 'অর্থ',
    'cta.represents': 'প্রতিনিধিত্ব করে',
    'cta.yes.label': 'হ্যাঁ ভোট',
    'cta.yes.title': 'হ্যাঁ',
    'cta.yes.means': 'সংস্কার ও পরিবর্তন',
    'cta.yes.point1': 'জবাবদিহিতা ও সুশাসন (Accountability & Good Governance)',
    'cta.yes.point2': 'যুব শক্তির জাগরণ (Awakening of Youth Power)',
    'cta.yes.point3': 'মেধাভিত্তিক সমাজ (Merit-based Society)',
    'cta.no.label': 'না ভোট',
    'cta.no.title': 'না',
    'cta.no.means': 'পুরনো ব্যবস্থা বহাল',
    'cta.no.point1': 'অস্বচ্ছতা ও দুর্নীতি (Opacity & Corruption)',
    'cta.no.point2': 'স্থবিরতা ও অব্যবস্থাপনা (Stagnation & Mismanagement)',
    'cta.no.point3': 'কোটা ও বৈষম্য (Quota & Discrimination)',
    'cta.button': 'আসুন, পরিবর্তনের পক্ষে দাঁড়াই',
    'cta.footer': 'আপনার ভোট, আমাদের ভবিষ্যৎ (Your Vote, Our Future)',
    'cta.closing': 'সংস্কার চাইলে হ্যাঁ ভোট দিন'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('bn');

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.en];
    // Return translation even if it's an empty string (only fallback to key if undefined)
    return translation !== undefined ? translation : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}