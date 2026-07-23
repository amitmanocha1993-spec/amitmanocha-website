'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Award, BookOpen, GraduationCap, ChevronLeft, ChevronRight, Hourglass, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getFeaturedProjects } from '@/data/portfolio';

const roles = [
  'Urdu Poet',
  'Lyricist',
  'Graphic Designer',
  'Motion Designer',
  'Author',
  'Creative Artist'
];

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      <Navigation />
      
      {/* Premium Split-Layout Cinematic Hero */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center mesh-gradient pt-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-[24px] md:px-[80px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col items-start text-left order-2 lg:order-1">
              <div className="overflow-hidden mb-4">
                <span className="font-label-caps text-label-caps text-secondary tracking-[0.3em] uppercase block transform translate-y-0 opacity-100 transition-all duration-700">
                  MULTIDISCIPLINARY CREATIVE ARTIST
                </span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2 leading-tight">
                Amit Manocha
              </h1>
              <div className="h-16 md:h-20 flex items-center mb-8">
                <span 
                  className={`font-headline-xl text-headline-md md:text-headline-xl text-secondary transition-all duration-500 ${
                    isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                >
                  {roles[currentRole]}
                </span>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                Crafting visual stories, poetic worlds, and artistic experiences through design, literature, motion, and music.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/portfolio" className="px-8 py-4 rounded-full bg-primary text-on-primary font-body-md hover:bg-deep-navy transition-all duration-300 shadow-[0_12px_24px_rgba(0,17,58,0.15)] hover:shadow-[0_16px_32px_rgba(0,17,58,0.25)] hover:-translate-y-0.5">
                  Explore Portfolio
                </Link>
                <Link href="/journey" className="px-8 py-4 rounded-full border border-primary/20 text-primary font-body-md hover:bg-white/50 transition-all duration-300">
                  Read My Journey
                </Link>
                <Link className="font-label-caps text-label-caps text-primary hover:text-secondary transition-colors py-2 group" href="/books">
                  View Literary Works <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end py-12 lg:py-0">
              <div className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-[3/4]">
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-white/20">
                  <Image
  src="/images/amit-manocha-portrait.webp"
  alt="Amit Manocha Portrait"
  fill
  priority
  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 500px"
  className="object-cover transition-all duration-700"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="absolute -left-6 top-1/4 glass-card p-5 rounded-2xl z-20 animate-float max-w-[200px]">
                  <div className="flex items-center gap-3">
                    <Award className="text-secondary icon-filled" size={20} />
                    <p className="text-sm font-semibold text-primary leading-tight">15+ Years Creative Experience</p>
                  </div>
                </div>
                <div className="absolute -right-10 top-1/2 glass-card p-5 rounded-2xl z-20 animate-float-delayed max-w-[200px]">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-secondary icon-filled" size={20} />
                    <p className="text-sm font-semibold text-primary leading-tight">Published Author & Poet</p>
                  </div>
                </div>
                <div className="absolute left-1/4 -bottom-6 glass-card p-5 rounded-2xl z-20 animate-float-slow max-w-[220px]">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-secondary icon-filled" size={20} />
                    <p className="text-sm font-semibold text-primary leading-tight">Creative Mentor & Educator</p>
                  </div>
                </div>
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-fixed-dim/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION RESTYLE: Blue Ribbon Style */}
      <section className="py-16 px-[24px] md:px-[80px] bg-primary relative z-10" id="journey">
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-label-caps text-label-caps text-pure-white uppercase tracking-widest">The Journey</span>
            <h2 className="font-headline-md text-headline-md md:text-headline-xl text-pure-white leading-tight">
              Empowering brands and individuals through artistic innovation and education.
            </h2>
            <p className="font-body-md text-body-md text-pure-white/80 max-w-2xl mx-auto">
              With over 15 years of multidisciplinary experience blurring the lines between visual design, kinetic motion, and the written word, I build immersive narratives that resonate on a profoundly human level.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKS & PUBLICATIONS SECTION */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-surface-bright relative z-10" id="books">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">Literary Legacy</span>
            <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Published Volumes</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Explore the latest releases across law, poetry, and philosophy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {/* Book 1 */}
            <div className="group flex flex-col items-center">
              <div className="relative mb-8 transition-transform duration-500 group-hover:-translate-y-4">
                <img alt="Decode the Divorce Industry" className="w-full h-auto max-w-[300px] shadow-2xl rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRcxKu9aTHdHRd5_QJTCwxNsot8Cr_eRjHWptmpdx5Zg0txyjZAt94VWJDsWXit1mL6hg26v8ltezOjxOkkFtghDlUx49LqICRME1jnRczYdS3TXO8osUH-qXkFVSIGxwAxS30yE25voR8NWoLDiB699ku3LSC0sXSxtfEAtLVnPMG-aS1vY901OdJ8dbDYn66e0uOcC9HzrDz_hzti2rKz4mf6rS7kNnPgN3_GYLEmWu42xtXR_LJelJYNy-VuC8ImNnCyq6ptA" />
                <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-2 text-center">Decode the Divorce Industry</h3>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <a 
                  href="https://www.amazon.in/Decode-Divorce-Industry-India-Matrimonial-ebook/dp/B0GV3VTC1T" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-[10px] font-label-caps border border-primary/20 rounded bg-primary text-on-primary hover:bg-deep-navy hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Buy on Amazon
                </a>
                <a 
                  href="https://play.google.com/store/books/details/Amit_Kumar_Manocha_Aziim_Dehlvi_Decode_the_Divorce?id=vczREQAAQBAJ&hl=en_IN" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-[10px] font-label-caps border border-primary/20 rounded bg-primary text-on-primary hover:bg-deep-navy hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Read on Google Play
                </a>
                <a 
                  href="https://store.pothi.com/book/amit-kumar-manocha-decode-divorce-industry-india/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-[10px] font-label-caps border border-primary/20 rounded bg-primary text-on-primary hover:bg-deep-navy hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Buy on Pothi
                </a>
              </div>
            </div>
            {/* Book 2 */}
            <div className="group flex flex-col items-center">
              <div className="relative mb-8 transition-transform duration-500 group-hover:-translate-y-4">
                <img alt="Kafan Mein Lipti Shayari" className="w-full h-auto max-w-[300px] shadow-2xl rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHE-IIzH75Eef7lq0ook5atDGrp1rzfh2P9q-yP5Y1wMlaBmWfk6pLgFxd3qCkPXMhYF-iIqUswx8mw03JjONGCF_82-P5XyLUAn2US-iEtIsgi-P9r5YN4JBLZj-f9vBUC2jpOkEYAcxrdI27Cai_cOpE2WE9g0SsIlvDUvy8DpSwSx6eDoDcmD89DYB3E-_GOTn_b4Ta-NStedQHiBph7dNErnA3mlZ8xgFSLplxsaHQHtznx8af6l96ptm2qi-vFoDqgSCopQ" />
                <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-2 text-center">Kafan Mein Lipti Shayari</h3>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <button disabled className="px-4 py-2 text-[10px] font-label-caps border border-primary/20 rounded bg-surface-container-low text-on-surface-variant cursor-not-allowed opacity-60">
                  Coming Soon
                </button>
              </div>
            </div>
            {/* Book 3 */}
            <div className="group flex flex-col items-center">
              <div className="relative mb-8 transition-transform duration-500 group-hover:-translate-y-4">
                <img alt="Deewan-e-Aziim" className="w-full h-auto max-w-[300px] shadow-2xl rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkJU3Gkga0iQDq6UE9Yc8ab4c7tQqDgkKqqmKkFH_B8BHQ-iAWHfXZUgC1Lv9z42bTIHy3Xl-oiO4SgZwWf32pfvYn-QowQVahws6HrICsOLEiXjUXTaouVcXI6kE052nWwAkd5lfIqhGaQstYIwxNb-SVRpVJ_1VJ1s0pes3QufA84nTxWaaUPegWVVgEOi_jX-Eom1EhAZbSJ1rj1IkujiAl-of_QuTdWgLcQ1uRF4ZLfv_kDo-0W8FKhVXlIWTFKxUpJOzbPg" />
                <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-2 text-center">Deewan-e-Aziim</h3>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <button disabled className="px-4 py-2 text-[10px] font-label-caps border border-primary/20 rounded bg-surface-container-low text-on-surface-variant cursor-not-allowed opacity-60">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POETRY SHOWCASE SECTION */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-surface-container relative z-10 overflow-hidden" id="poetry">
        <div className="absolute -right-24 top-0 text-primary/5 font-nastaleeq text-[400px] select-none pointer-events-none">عظیم</div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Literary Voice</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Poetic Expressions</h2>
              <p className="font-body-lg text-body-lg text-on-surface mb-12">A delicate interplay of languages, capturing emotions that transcend translation.</p>
              <div className="urdu-text font-nastaleeq text-2xl md:text-3xl text-on-surface mb-12 border-r-4 border-secondary pr-8 py-4">
                انکی نگاہِ ناز سے، سجا سارا یہ منظر ہے<br />
                محبت کی متاعِ جاودانی، رحمت کا پیکر ہے<br />
                نا ممکن ہے کہ بن انکے مل جائے سکوں دل کو<br />
                وہی جانم، وہی دلبر، وہی محور، وہ رہبر ہے (2)<br />
                انکے ذکر سے ہی خوش نما ہو جاتی محفل ہے<br />
                انہی کی دید سے پر نور ہر ایک منزل ہے<br />
                انہی کی رحمتوں سے زندگی خوشگوار ہوتی ہے<br />
                انکی آمد سے ہی خارزارِ قلب میں بہار ہوتی ہے<br />
                سکونِ روح مل جائے میری اتنی ہی خواہش ہے<br />
                وہ رکھ لے قدموں میں مجھ کو بس اتنی گزارش ہے<br />
                نہ جنت کی طلب مجھ کو، نہ جہنم کا کوئی ڈر ہے<br />
                میرے تو ساقی کا میخانہ ہی میرا آخری گھر ہے<br />
                نا ممکن ہے کہ بن انکے مل جائے سکوں دل کو<br />
                وہی جانم، وہی دلبر، وہی محور، وہ رہبر ہے (2)<br />
                فریب و جال میں پڑنا نہیں اب اور دنیا کے<br />
                مجھے معلوم ہے سب رسم و راز دنیا کے<br />
                ہے انکے درشنوں کی آرزو، اب کچھ اور نہ چاہوں<br />
                عظیم، وصلِ رب انکی قربتِ یار ہی چاہوں
              </div>
            </div>
            <div className="glass-card p-10 rounded-2xl">
              <div className="space-y-6 text-on-surface italic font-body-md text-lg leading-relaxed">
                <p className="">"Unki Nigaahein e naaz se, sajaa saara ye manzar hai...<br />
                  Mohabbat ki mataa-e-jaavdaani, rehmat ka paikar hai...<br />
                  Na mumkin hai ke bin unke mil jaaye sukoon dil ko...<br />
                  Wahi jaanam, wahi دلبر، wahi mehvar, woh rehbar hai (2)"</p>
                <p className="">"Unke zikr se hi khush numa ho jaati mehfil hai...<br />
                  Unhi ki deed se pur noor har ek manzil hai...<br />
                  Unhi ki rehmato se zindagi khushgawaar hoti hai...<br />
                  Unki aamad se hi khaarzaar-e-qalb mein bahaar hoti hai"</p>
                <p className="">"Sukoon-e-rooh mil jaaye میری اتنی ہی khwahish hai...<br />
                  Woh rakh le kadmon mein mujh ko bas itni guzarish hai...<br />
                  Na jannat ki talab mujh ko, na jahannum ka koi darr hai...<br />
                  Mere to saaki ka maikhana hi mera aakhri ghar hai"</p>
                <div className="pt-8 border-t border-outline-variant/30">
                  <p className="font-headline-md text-xl text-on-surface not-italic">Amit Kumar Manocha</p>
                  <p className="font-label-caps text-label-caps text-secondary">A.K.A. Aziim Dehlvi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-background overflow-hidden" id="portfolio">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">Visual Narratives</span>
            <h2 className="font-display-lg-mobile md:text-display-lg text-primary mb-6">Featured Works</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A curated collection of multidisciplinary design projects spanning branding, digital design, print design, and cricket.</p>
          </div>
          
          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProjects.slice(0, 8).map((project, index) => (
              <div key={project.id} className="group relative rounded-2xl overflow-hidden shadow-ambient bg-surface-container-low cursor-pointer aspect-[3/4]">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="font-label-caps text-label-caps text-secondary-fixed mb-2 uppercase tracking-widest text-[10px]">{project.category}</span>
                  <h3 className="font-headline-md text-xl text-pure-white mb-3">{project.title}</h3>
                  <div className="flex items-center text-pure-white/80 text-sm">
                    <span className="font-label-caps text-label-caps">View Project</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center">
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-on-primary font-body-md hover:bg-deep-navy transition-all duration-300 shadow-[0_12px_24px_rgba(0,17,58,0.15)] hover:shadow-[0_16px_32px_rgba(0,17,58,0.25)] hover:-translate-y-0.5"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience & Stats */}
      <section className="pb-[120px] px-[24px] md:px-[80px] bg-background relative z-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-center items-start group hover:-translate-y-1 transition-transform duration-500">
              <Hourglass className="text-secondary mb-4 text-3xl icon-filled" size={32} />
              <h3 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2 group-hover:text-secondary transition-colors">15+</h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-medium">Years Experience</p>
            </div>
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-center items-start group hover:-translate-y-1 transition-transform duration-500">
              <BookOpen className="text-secondary mb-4 text-3xl icon-filled" size={32} />
              <h3 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2 group-hover:text-secondary transition-colors">3+</h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-medium">Published Books</p>
            </div>
            <div className="glass-card rounded-2xl p-8 flex flex-col justify-center items-start group hover:-translate-y-1 transition-transform duration-500">
              <Award className="text-secondary mb-4 text-3xl icon-filled" size={32} />
              <h3 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2 group-hover:text-secondary transition-colors">50+</h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-medium">Brand Projects</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}