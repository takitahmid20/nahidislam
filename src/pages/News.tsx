import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Newspaper, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  titleEn: string;
  titleBn: string;
  excerptEn: string;
  excerptBn: string;
  date: string;
  source: string;
  link: string;
  category: string;
}

export default function News() {
  const { t, language } = useLanguage();

  const newsItems: NewsItem[] = [
    {
      titleEn: "Nahid Islam's nomination for Dhaka-11 declared valid",
      titleBn: "ঢাকা-১১ এর জন্য নাহিদ ইসলামের মনোনয়ন বৈধ ঘোষণা",
      excerptEn: "Nahid Islam, convener of the National Citizens Party (NCP) and candidate of the 11-party alliance including Jamaat, has had his nomination papers for Dhaka-11 constituency approved by the returning officer.",
      excerptBn: "জাতীয় নাগরিক পার্টির (এনসিপি) আহবায়ক এবং জামায়াত সহ ১১ দলীয় জোটের প্রার্থী নাহিদ ইসলামের ঢাকা-১১ নির্বাচনী এলাকার জন্য মনোনয়নপত্র রিটার্নিং অফিসার কর্তৃক অনুমোদিত হয়েছে।",
      date: "3 January 2026",
      source: "Dhaka Tribune",
      link: "https://www.dhakatribune.com/bangladesh/election/400152/nahid-islam%E2%80%99s-nomination-for-dhaka-11-declared",
      category: "Election"
    },
    {
      titleEn: "NCP convener Nahid Islam lists consulting as profession, Tk16 lakh income",
      titleBn: "এনসিপি আহবায়ক নাহিদ ইসলাম পেশা হিসাবে পরামর্শদান, ১৬ লাখ টাকা আয়",
      excerptEn: "National Citizens Party (NCP) Convener Nahid Islam has declared consulting as his profession, with an annual income of Tk16 lakh, according to affidavit submitted to the Election Commission for Dhaka-11 constituency candidacy.",
      excerptBn: "জাতীয় নাগরিক পার্টির (এনসিপি) আহবায়ক নাহিদ ইসলাম ঢাকা-১১ আসনের প্রার্থী হিসেবে নির্বাচন কমিশনে জমা দেওয়া হলফনামা অনুযায়ী তার পেশা হিসেবে পরামর্শদান এবং বার্ষিক আয় ১৬ লাখ টাকা ঘোষণা করেছেন।",
      date: "1 January 2026",
      source: "Dhaka Tribune",
      link: "https://www.dhakatribune.com/bangladesh/election/400008/ncp-convener-nahid-islam-lists-consulting-as",
      category: "Politics"
    },
    {
      titleEn: "Ex-Shibir president steps aside, wishes Nahid success in Dhaka-11",
      titleBn: "প্রাক্তন শিবির সভাপতি পাশে সরে দাঁড়িয়ে নাহিদের সাফল্য কামনা করেছেন",
      excerptEn: "Jamaat-nominated candidate Atikur Rahman has extended his best wishes to Nahid Islam, convenor of the National Citizen Party (NCP), withdrawing from the Dhaka-11 race to support the alliance candidate.",
      excerptBn: "জামায়াত মনোনীত প্রার্থী আতিকুর রহমান জাতীয় নাগরিক পার্টির (এনসিপি) আহবায়ক নাহিদ ইসলামকে তার শুভেচ্ছা জানিয়েছেন, জোটের প্রার্থীকে সমর্থন করার জন্য ঢাকা-১১ থেকে সরে দাঁড়িয়েছেন।",
      date: "29 December 2025",
      source: "Dhaka Tribune",
      link: "https://www.dhakatribune.com/bangladesh/399772/ex-shibir-president-steps-aside-wishes-nahid",
      category: "Campaign"
    },
    {
      titleEn: "No ideological unity, this is an electoral understanding: Nahid Islam",
      titleBn: "আদর্শিক ঐক্য নেই, এটি একটি নির্বাচনী বোঝাপড়া: নাহিদ ইসলাম",
      excerptEn: "NCP Convener Nahid Islam clarifies the alliance with Jamaat-e-Islami, stating it's an electoral understanding rather than ideological unity, emphasizing cooperation for democratic transition.",
      excerptBn: "এনসিপি আহবায়ক নাহিদ ইসলাম জামায়াতে ইসলামীর সাথে জোট সম্পর্কে স্পষ্ট করে বলেছেন যে এটি আদর্শিক ঐক্যের পরিবর্তে একটি নির্বাচনী বোঝাপড়া, গণতান্ত্রিক রূপান্তরের জন্য সহযোগিতার উপর জোর দিয়ে।",
      date: "28 December 2025",
      source: "Prothom Alo",
      link: "https://en.prothomalo.com/bangladesh/politics/ki4hfh37ok",
      category: "Politics"
    },
    {
      titleEn: "Nahid: Those who dream of changing Bangladesh must step into politics",
      titleBn: "নাহিদ: যারা বাংলাদেশ পরিবর্তনের স্বপ্ন দেখেন তাদের রাজনীতিতে আসতে হবে",
      excerptEn: "National Citizen Party (NCP) Convener Nahid Islam has called upon the people from all walks of life to actively engage in politics, urging those who dream of transforming Bangladesh to participate in the democratic process.",
      excerptBn: "জাতীয় নাগরিক পার্টির (এনসিপি) আহবায়ক নাহিদ ইসলাম সমাজের সকল স্তরের মানুষকে সক্রিয়ভাবে রাজনীতিতে জড়িত হওয়ার আহ্বান জানিয়েছেন, যারা বাংলাদেশকে রূপান্তরিত করার স্বপ্ন দেখেন তাদের গণতান্ত্রিক প্রক্রিয়ায় অংশগ্রহণের জন্য উৎসাহিত করেছেন।",
      date: "10 November 2025",
      source: "Dhaka Tribune",
      link: "https://www.dhakatribune.com/bangladesh/politics/396055/nahid-those-who-dream-of-changing-bangladesh-must",
      category: "Youth"
    },
    {
      titleEn: "Sheikh Hasina must be extradited and verdict executed: Nahid Islam",
      titleBn: "শেখ হাসিনাকে অবশ্যই প্রত্যর্পণ করতে হবে এবং রায় কার্যকর করতে হবে: নাহিদ ইসলাম",
      excerptEn: "NCP Convener Nahid Islam demands the extradition of former Prime Minister Sheikh Hasina and execution of tribunal verdicts within a month, emphasizing accountability for past actions.",
      excerptBn: "এনসিপি আহবায়ক নাহিদ ইসলাম প্রাক্তন প্রধানমন্ত্রী শেখ হাসিনার প্রত্যর্পণ এবং এক মাসের মধ্যে ট্রাইব্যুনালের রায় কার্যকর করার দাবি জানিয়েছেন, অতীতের কর্মের জন্য জবাবদিহিতার উপর জোর দিয়ে।",
      date: "17 November 2025",
      source: "Prothom Alo",
      link: "https://en.prothomalo.com/bangladesh/politics/1ni6idhqkf",
      category: "Politics"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16 185 129) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <Newspaper className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600 tracking-wider">
              {language === 'en' ? 'LATEST UPDATES' : 'সর্বশেষ আপডেট'}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-800">{language === 'en' ? 'News &' : 'খবর ও'}</span>{' '}
            <span className="text-emerald-600">{language === 'en' ? 'Updates' : 'আপডেট'}</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Stay informed with the latest news and updates about Nahid Islam\'s political journey and the National Citizens Party'
              : 'নাহিদ ইসলামের রাজনৈতিক যাত্রা এবং জাতীয় নাগরিক পার্টি সম্পর্কে সর্বশেষ খবর এবং আপডেট সহ অবগত থাকুন'
            }
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Category Badge */}
              <div className="p-6 pb-4">
                <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full mb-4">
                  {item.category}
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {language === 'en' ? item.titleEn : item.titleBn}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 line-clamp-4">
                  {language === 'en' ? item.excerptEn : item.excerptBn}
                </p>

                {/* Source and Link */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm font-medium text-slate-500">
                    {item.source}
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm font-semibold transition-colors group/link"
                  >
                    {language === 'en' ? 'Read More' : 'আরও পড়ুন'}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-3xl p-8 md:p-12 border border-emerald-100">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              {language === 'en' ? 'Stay Connected' : 'সংযুক্ত থাকুন'}
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Follow our social media channels for real-time updates and join the conversation about building a better Bangladesh'
                : 'রিয়েল-টাইম আপডেটের জন্য আমাদের সোশ্যাল মিডিয়া চ্যানেল অনুসরণ করুন এবং একটি ভাল বাংলাদেশ গড়ার বিষয়ে কথোপকথনে যোগ দিন'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-colors"
              >
                {language === 'en' ? 'Join Our Movement' : 'আমাদের আন্দোলনে যোগ দিন'}
              </a>
              <a
                href="/#contact"
                className="px-6 py-3 bg-white hover:bg-slate-50 text-emerald-600 border-2 border-emerald-600 rounded-full font-semibold transition-colors"
              >
                {language === 'en' ? 'Contact Us' : 'যোগাযোগ করুন'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
