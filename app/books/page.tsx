'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, GraduationCap, Scale, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    index: 0,
    image: '/Book-sliders/decode-divorce-slide.webp',
    gradient: 'from-primary/80 via-primary/40 to-transparent',
    label: 'Legal & Social Analysis',
    title: 'Decode the Divorce Industry in India',
    description: 'A critical, investigative look into the intricate legal and social landscapes of divorce, offering clarity in moments of complexity.',
    labelColor: 'text-white'
  },
  {
    index: 1,
    image: '/Book-sliders/kafan-mein-lipti-shayari-slider.webp',
    gradient: 'from-tertiary/80 via-tertiary/40 to-transparent',
    label: 'The Soul of Verse',
    title: 'Kafan Mein Lipti Shayari',
    description: 'An evocative collection exploring mortality, love, and the ethereal beauty of the human condition through Urdu poetry.',
    labelColor: 'text-white'
  },
  {
    index: 2,
    image: '/Book-sliders/deewan-e-aziim-slider.webp',
    gradient: 'from-primary/80 via-primary/40 to-transparent',
    label: 'Literary Heritage',
    title: 'Deewan-e-Aziim',
    description: 'A comprehensive masterpiece of contemporary Ghazals and Nazms reflecting the deep legacy of \'Aziim Dehlvi\'.',
    labelColor: 'text-white'
  }
];

export default function BooksPage() {
  const [currentSlide, setCurrentSlide] = useState(2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section: Cinematic Slideshow */}
      <header className="relative h-[100vh] w-full overflow-hidden bg-primary">
        <div className="relative h-full w-full">
          {slides.map((slide) => (
            <div
              key={slide.index}
              className={`hero-slide absolute inset-0 transition-all duration-1000 ease-in-out ${
                currentSlide === slide.index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
              <div className="relative z-20 h-full flex items-center px-[24px] md:px-[80px] max-w-[1440px] mx-auto">
                <div className={`max-w-3xl transition-all duration-800 ease-out delay-300 ${
                  currentSlide === slide.index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className={`font-label-caps text-label-caps ${slide.labelColor} mb-4 block tracking-[0.3em] uppercase`}>
                    {slide.label}
                  </span>
                  <h1 className="font-display-lg-mobile md:font-display-lg text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="font-body-lg text-body-lg text-white/80 mb-10 max-w-xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer">
                      View Book
                    </a>
                    <a className="border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors cursor-pointer">
                      Read Author's Note
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="text-white hover:text-secondary-container transition-colors p-2"
          >
            <ChevronLeft size={36} />
          </button>
          <div className="flex gap-3">
            {slides.map((slide) => (
              <div
                key={slide.index}
                onClick={() => setCurrentSlide(slide.index)}
                className={`w-3 h-3 rounded-full border-2 cursor-pointer transition-colors ${
                  currentSlide === slide.index
                    ? 'border-white bg-white'
                    : 'border-white/50 bg-transparent'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-white hover:text-secondary-container transition-colors p-2"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      </header>

      {/* Featured Books Slideshow */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-surface-bright" id="books">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {/* Book 1 */}
            <div className="group flex flex-col items-center">
              <div className="relative mb-8 transition-transform duration-500 group-hover:-translate-y-4">
                <img alt="Decode the Divorce Industry" className="w-full h-auto max-w-[300px] shadow-2xl rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRcxKu9aTHdHRd5_QJTCwxNsot8Cr_eRjHWptmpdx5Zg0txyjZAt94VWJDsWXit1mL6hg26v8ltezOjxOkkFtghDlUx49LqICRME1jnRczYdS3TXO8osUH-qXkFVSIGxwAxS30yE25voR8NWoLDiB699ku3LSC0sXSxtfEAtLVnPMG-aS1vY901OdJ8dbDYn66e0uOcC9HzrDz_hzti2rKz4mf6rS7kNnPgN3_GYLEmWu42xtXR_LJelJYNy-VuC8ImNnCyq6ptA" />
                <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-2 text-center">Decode the Divorce Industry</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-center mb-4 max-w-xs">A comprehensive guide to understanding divorce proceedings and legal frameworks.</p>
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
              <p className="font-body-md text-body-md text-on-surface-variant text-center mb-4 max-w-xs">A collection of Urdu poetry exploring themes of life, death, and spiritual awakening.</p>
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
              <p className="font-body-md text-body-md text-on-surface-variant text-center mb-4 max-w-xs">A complete collection of poetic verses by Aziim Dehlvi, spanning decades of literary work.</p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <button disabled className="px-4 py-2 text-[10px] font-label-caps border border-primary/20 rounded bg-surface-container-low text-on-surface-variant cursor-not-allowed opacity-60">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poetry Highlight Section */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-surface-container relative z-10 overflow-hidden">
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

      {/* Literary Philosophy Bento Grid */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">Philosophy</span>
            <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Literary Philosophy</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Exploring the intersection of law, literature, and human experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-8 col-span-1 md:col-span-2 lg:col-span-2">
              <Scale className="text-secondary mb-4 text-4xl icon-filled" size={36} />
              <h3 className="font-headline-md text-2xl text-primary mb-4">Legal Literature</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Bridging the gap between complex legal frameworks and accessible literature. My work in legal education aims to make the law understandable for everyone, empowering individuals with knowledge about their rights and responsibilities.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <BookOpen className="text-secondary mb-4 text-4xl icon-filled" size={36} />
              <h3 className="font-headline-md text-2xl text-primary mb-4">Poetic Expression</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Urdu poetry as a medium for exploring the deepest human emotions and spiritual connections.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <GraduationCap className="text-secondary mb-4 text-4xl icon-filled" size={36} />
              <h3 className="font-headline-md text-2xl text-primary mb-4">Education</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Teaching and mentoring the next generation of creative minds through workshops and lectures.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 col-span-1 md:col-span-2">
              <Brain className="text-secondary mb-4 text-4xl icon-filled" size={36} />
              <h3 className="font-headline-md text-2xl text-primary mb-4">Human Experience</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                At the core of all my work is a deep interest in the human condition—our struggles, our triumphs, our relationships, and our search for meaning. Whether through legal analysis, poetic verse, or creative design, I strive to create work that resonates on a profoundly human level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] px-[24px] md:px-[80px] bg-surface-bright">
        <div className="max-w-[1440px] mx-auto">
          <div className="glass-card rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-headline-xl text-headline-xl text-primary mb-4">Discover More Literary Works</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              Explore the complete collection of books, poetry, and philosophical writings.
            </p>
            <a href="#books" className="px-8 py-4 rounded-full bg-primary text-on-primary font-body-md hover:bg-deep-navy transition-all duration-300 shadow-[0_12px_24px_rgba(0,17,58,0.15)] hover:shadow-[0_16px_32px_rgba(0,17,58,0.25)] hover:-translate-y-0.5 inline-block">
              View All Publications
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
