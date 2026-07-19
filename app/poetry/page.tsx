'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PoetryModal from '@/components/PoetryModal';
import { BookOpen, ChevronLeft, ChevronRight, Feather, ArrowRight } from 'lucide-react';

interface Poetry {
  id: string;
  title: string;
  category: 'Nazm' | 'Ghazal' | 'Rubai' | 'Couplet';
  urdu: string;
  roman?: string;
  translation?: string;
}

const poetryData: Poetry[] = [
  {
    id: '1',
    title: 'Khamoshi Aksar Bolti Hai',
    category: 'Nazm',
    urdu: `خاموشی اکثر بولتی ہے
جو چپ ہیں وہ بتا جاتے ہیں
وہ راز کچھ یوں دبا جاتے ہیں
جو کرتے ہیں بات وفائی کی
اکثر ہو بیوفا جاتے ہیں

زبان دان کچھ کہ نہیں پاتے
یہاں گنگے بھی گنگنا جاتے ہیں

جب ذکر انکا ہوتا ہے
روح مسکراتی ہے
کچھ یوں سورور سے چاہ جاتے ہیں

خارزارِ قلب میں کچھ یوں
انکے خیال گل کھلا جاتے ہیں

میرے زخم کے نشان اکثر
کر حالِ دل بیان جاتے ہیں

نہ جانے کیوں صاحبِ خرد ہوکر بھی
ہمیشہ انکے فرب و جال میں آ جاتے ہیں

یہ انکا کرم نہیں تو کیا ہے
تا عمر خود ہی کو چاہنے والے
اب نہ کچھ اور، بس خدا چاہتے ہیں

بہ روزِ ہشر رہیں گے ساتھ انکے
انہی کے در پر ہونا فنا چاہتے ہیں`,
    roman: `Khamoshi aksar bolti hai
Jo chup hain woh bata jaate hain
Woh raaz kuch yu dabaa jaate hain
Jo karte h baat wafaai ki
Aksar ho bewafaa jaate hain

Zabaandaan kuch keh nahi paate
Yaha'n gunge bhi gungunaa jaate hain

Jab zikr unka hota hai
Ruuh muskura uthti hai
Kuch yu suroor se chah jaate hain

KHaarzaar e qalb main kuch yu
Unke khayaal gul khilaa jaate hain

Mere zakhm ke nishaa'n aksar
Kar haal e dil bayaan jaate hain

Naa jaane kyo saahib e khirad hokar bhi
Humesha unke fareb o jaal main aa jaate hain

Ye unka karam nhi toh kya hai
Taa umr khud hi ko chaahne wale
Ab naa kuch aur, bas khuda chahte hain

Ba roz e hashr rahenge saath unke
Unhi ke dar pe hona fanaa chaahte hain`,
    translation: `Silence often speaks, those who are silent reveal themselves
Secrets are thus suppressed, those who speak of loyalty
Often become unfaithful

The articulate cannot express themselves
Here even the mute hum along

When their mention occurs
The soul smiles
Thus lost in ecstasy, one desires

In the thorns of the heart, thus
Their thoughts blossom into flowers

The marks of my wounds often
Reveal the state of my heart

I don't know why, despite being wise
I always fall into their traps and snares

If this is not their grace, then what is it
Those who love themselves until death
Now desire nothing else, only what God desires

On the Day of Judgment, I will remain with them
I desire to be annihilated at their door`
  },
  {
    id: '2',
    title: 'Jab Unki Nigaaho\'n Ke...',
    category: 'Nazm',
    urdu: `جب انکی نگاہوں کے مد نظر آ جاتے ہیں
دل و ذہن راحت سی پا جاتے ہیں

یو توہ تا عمر گزار دیں انکو دیکھتے دیکھتے
جب وہ نظر ملائیں توہ گھبرا جاتے ہیں

مرحلہِ جہان کر گزرتے ہیں انکی قربیِ سکون کے لیے
قدم اکثر دگمگا جاتے ہیں، جب انکی طرف جاتے ہیں

سوالات سنجیدہ اور حالات میرے پیچیدہ ہیں
جو آج تک خوابیدہ ہیں یہ وہ ملاقاتیں ہیں

منوچا جی نکلے ہی نہیں کبھی دلی کی گلیوں سے
یہ تو خیال ہے، نہ جانے کہاں کہاں جاتے ہیں

ہم پر کیا بیٹ رہی ہے فقاط ہم جانتے ہیں
وہ مریضِ عشق کی حالت پر مسکراتے ہیں

اچھے خاصے بشار کو بے بس کردیں ایسی کرامتیں ہیں
مہز اہلِ عشق والے ہی سمجھ سکے یہ وہ باتیں`,
    roman: `JAB UNKI NIGAAHO'N KE MADD E NAZAR AA JAATE HAI,
DIL O ZEHEN RAAHAAT SI PAA JAATE HAI.

YU TOH TA UMR GUZAAR DE UNKO DEKHTE DEKHTE,
JAB WOH NAZAR MILAAYE'N TOH GHABRAA JAATE HAI.

MARHALA E JAHAAN KAR GUZARTE HAI UNKI KAREEBI E SUKU'N KE LIYE
KADAM AKSAR DAGMAGAA JAATE HAI, JAB UNKI TARAF JAATE HAI

SAWALAAT SANJEEDA AUR HAALAAT MERE PECHIIDA HAI
JO AAJ TALAQ KHWAABIIDA HAI YE WOH MULAAQAATEI'N HAI

MANOCHA JI NIKLE HI NAHI KABHI DILLI KI GALLION SE,
YE TOH KHYAAL HAI, NAA JAANE KAHA KAHA JAATE HAI

HUM PE KYA BEET RAHI HAI FAQAT HUM JAANTE HAI
WOH MAREEZ E ISHQ KI HAALAT PE MUSKURAA JAATE HAI

ACCHE KHAASE BASHAR KO BEBAS KARDEI'N AISI KARAAMAATIE'N HAI
MAHZ AHL E ISHQ WALE HI SAMAJH SAKE YE WOH BAATEIN`,
    translation: `When their gaze comes into view
Heart and mind find a kind of peace

Thus I could spend a lifetime just watching them
But when they meet my eyes, I become anxious

I traverse the stages of the world seeking proximity to their peace
My steps often stumble when I walk toward them

My questions are serious and my circumstances complex
These are the meetings that have remained in dreams until today

Manocha ji never leaves the alleys of Delhi
This is just a thought, who knows where he goes

Only I know what we are going through
They smile at the condition of the patient of love

Such miracles render even the best of people helpless
Only those of love can understand these matters`
  },
  {
    id: '3',
    title: 'Kyon Ye Mann Maayoos Hai',
    category: 'Nazm',
    urdu: `کیوں یہ مان مایوس ہے
خرد کس قدر مسروف ہے
کیوں بے بسی سے لبریز ہے بشر
بے شماروں میں ہے بادشمار یہ کس قدر

اہلِ کرداروں میں یہ بے کردار کیوں ہے
دو پل کا سکون اسے یوں ناگوار کیوں ہے
کیوں نہیں ٹہرتا یہ دل ایک جگہ ہے
تلاش کے آخر تبسم بھی گئی کہاں

اسکا رہنا نہ رہنا اب مختلف نہیں لگتا
نہ جانے کیوں کسی کام میں بھی اب جی نہیں لگتا
سوچنا بھی اب دشوار لگتا ہے
کچھ بھی کہنا اب بکار لگتا ہے
بے قراری سے بھی اب منوچا قرار لگتا ہے
سینے میں موجود ہے پر یہ دل بے زار لگتا ہے

روکے گا یہ قافلہِ ذہنِ ستام بھی ایک روز تو کیا
کریں گے شرکتِ محفلِ جنت بھی ایک روز تو کیا
ہے بے یقین یہ دل کے کیا ہی الگ ہوگا
وہاں وہ حیات و قضا کے درمیان
جو کبھی بھی مل نہ سکی یہاں
وہ جستجو مستقل ہوگی کیا حاصل وہاں`,
    roman: `kyon ye mann maayoos hai
khirad kis kadar masroof hai
kyon bebasi se labrez hai bashar
be-shumaaro'n main hai bad-shumaar ye kis kadar

ahl e kirdaaro'n main ye be kirdaar kyon hai
do pal ka sukun isse yu naagawar kyon hai
kyon nhi theherta ye dil ek jagah hai
talaash ke akhir tabassum bhi gyi kaha

iska rehna na rehna ab muKHtalif nhi lagta
naa jane kyon kisi kaam main bhi ab jee nhi lagta
sochna bhi ab dushwaar lagta hai
kuch bhi kehna ab bekaar lagta hai
beqaraari se bhi ab manocha qaraar lagta hai
seene main maujud hai par ye dil bezaar lagta hai

rukega ye qaafila e zehen e sitam bhi ek roz toh kya
karenge shirqat e mehefil e jannat bhi ek roz toh kya
hai be-yaqiin ye dil ke kya hi alag hoga
waha'n woh hayaat o qazaa ke darmiyaan
jo kabhi bhi mil na saki yaha'n
woh justujuu e mushtaqil hogi kya haasil waha'n`,
    translation: `Why is this heart despairing
How occupied is wisdom
Why is humanity overflowing with helplessness
Among the countless, how prominent is this one

Why is this one characterless among people of character
Why is a moment's peace so unbearable to it
Why doesn't this heart stay in one place
Where did the smile disappear after the search

Its staying or not staying no longer feels different
I don't know why I don't feel like doing any work now
Thinking now feels difficult
Saying anything now feels useless
Even in restlessness, Manocha feels settled
It's present in the chest but this heart feels weary

This caravan of the mind of oppression will also stop one day, so what
Will also participate in the assembly of paradise one day, so what
This heart is unsure, what will be different there
Between life and destiny there
What could never be found here
Will that eternal search be successful there`
  },
  {
    id: '4',
    title: 'Sunane Ko Mere Paas...',
    category: 'Couplet',
    urdu: `سنانے کو میرے پاس کہانیاں بہت ہیں
دراصل اپر والے کی مہربانیاں بہت ہیں`,
    roman: `Sunane ko mere paas kahaaniya'n bohot hain
Dar asal upar waale ki meherbaaniya'n bohot hain`,
    translation: `I have many stories to tell
But it's the Almighty's countless blessings`
  },
  {
    id: '5',
    title: 'Lavzo\'n Se Bayaan Ho...',
    category: 'Couplet',
    urdu: `الفاظ سے بیان ہو یہ وہ بات نہیں
اسکا خیال ہی کافی ہے، لازم ملاقات نہیں

اظہارِ عشق بات دور کی ہے
یہ گستاکی ذہن میں لائے، اتنی اوقات نہیں`,
    roman: `lavzo'n se bayaan ho ye woh baat nahi,
uska khayaal hi kaafi h, lazim mulaakat nhi,

izhaar e ishq baat durr ki hai
ye gustakhi zehen mein laaye, itni aukaat nhi.`,
    translation: `Words cannot express this matter
The thought alone is sufficient, meeting is not necessary

Expressing love is a distant matter
This audacity brings to mind, I don't have such capacity`
  },
  {
    id: '6',
    title: 'Aaj Usne Bhi Muh Mod Liya...',
    category: 'Couplet',
    urdu: `آج نے بھی منہ موڈ لیya دیگران کی طرح
جو دل چھرا کر بیٹھ گئی تھی چوروں کی طرح`,
    roman: `Aaj usne bhi muh mod liya auro'n ki tarah
Jo dil chura kar baith gyi thi choro'n ki tarah`,
    translation: `Today she also turned away like others
Who had sat after stealing the heart like thieves`
  },
  {
    id: '7',
    title: 'Mohabbat Khud Tamasha Ban Gayi Hai',
    category: 'Rubai',
    urdu: `محبت خود تماشہ بن گئی ہے`,
    roman: `Mohabbat khud tamasha ban gayi hai`,
    translation: `Love itself has become a spectacle`
  },
  {
    id: '8',
    title: 'Unki Nigah-e-Naz Se...',
    category: 'Couplet',
    urdu: `انکی نگاہِ ناز سے، سجا سارا یہ منظر ہے
سکونِ روح مل جائے سراپا اک خواہش ہے`,
    roman: `Unkī nigāh-e-nāz se, sajā saarā ye manzar hai
Sukūn-e-rooh mil jaaye sarāpā ik khwahish hai`,
    translation: `Through their graceful gaze, this entire vista is adorned
That my soul finds peace is my singular, ultimate desire`
  }
];

export default function PoetryPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPoetryIndex, setSelectedPoetryIndex] = useState(0);
  const [featuredSlideIndex, setFeaturedSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/poetry/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Thank you for subscribing!');
        setEmail('');
      } else {
        alert(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (index: number) => {
    setSelectedPoetryIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevious = () => {
    setSelectedPoetryIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setSelectedPoetryIndex((prev) => Math.min(poetryData.length - 1, prev + 1));
  };

  // Featured carousel functions
  const featuredPoems = [
    { index: 7, urdu: 'انکی نگاہِ ناز سے، سجا سارا یہ منظر ہے...\nسکونِ روح مل جائے سراپا اک خواہش ہے...', roman: 'Unkī nigāh-e-nāz se, sajā saarā ye manzar hai...\nSukūn-e-rooh mil jaaye sarāpā ik khwahish hai...', translation: 'Through their graceful gaze, this entire vista is adorned...\nThat my soul finds peace is my singular, ultimate desire...' },
    { index: 0, urdu: 'خاموشی اکثر بولتی ہے، جو چپ ہیں وہ بتا جاتے ہیں\nوہ راز کچھ یوں دبا جاتے ہیں، جو کرتے ہیں بات وفائی کی\nاکثر ہو بیوفا جاتے ہیں', roman: 'Khamoshi aksar bolti hai, jo chup hain woh bata jaate hain\nWoh raaz kuch yu dabaa jaate hain, jo karte h baat wafaai ki\nAksar ho bewafaa jaate hain', translation: 'Silence often speaks, those who are silent reveal themselves...\nSecrets are thus suppressed, those who speak of loyalty...\nOften become unfaithful...' },
    { index: 1, urdu: 'جب انکی نگاہوں کے مد نظر آ جاتے ہیں\nدل و ذہن راحت سی پا جاتے ہیں', roman: 'Jab unki nigaaho\'n ke madd e nazar aa jaate hain\nDil o zehen raahat si paa jaate hain', translation: 'When their gaze comes into view,\nHeart and mind find a kind of peace...' }
  ];

  const handleFeaturedPrevious = () => {
    setFeaturedSlideIndex((prev) => (prev === 0 ? featuredPoems.length - 1 : prev - 1));
  };

  const handleFeaturedNext = () => {
    setFeaturedSlideIndex((prev) => (prev === featuredPoems.length - 1 ? 0 : prev + 1));
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleFeaturedNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, featuredSlideIndex]);

  // Touch handlers for swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        handleFeaturedNext();
      } else {
        handleFeaturedPrevious();
      }
    }
  };
  return (
    <main className="bg-primary text-on-primary-fixed font-body-md antialiased overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section: Cinematic Video Player */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-60">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuB2NX8HBEXEJa57rFJxhZt0dRqB6elwVQd860HcaXMz5e5Fi7PDR8vEh2G22vCyXZOaUAx-Ie3ZcUcQs263fOROnwaphLppItzxvNYJgYuKqIvbqtq_NkSrAvGtDJxOoYYnDLcHuRrDeVAczYP77AsIJCWSWTEOJbJcA_2QXnJ2R5lHdI710_ajdgI6kwjQawYsYoANdRxvIucvmZHyJRUxefq-8EGuft3qQyq0Ba7nXk8dKta6auh8qABcXqi_s4-Cj3CGif7jXQ)' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00113a]"></div>
        </div>
        <div className="relative z-10 w-full max-w-5xl px-[24px] md:px-0">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 group aspect-video bg-black/40 backdrop-blur-md">
            <iframe 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              className="w-full h-full" 
              frameBorder="0" 
              src="https://www.youtube.com/embed/vM1BRcKYFtg?autoplay=0&controls=1&rel=0&modestbranding=1" 
              title="Aziim Dehlvi Performance"
            />
          </div>
          <div className="mt-8 text-center">
            <h1 className="font-display-lg text-display-lg text-pure-white mb-2 leading-tight">Mehfil-e-Khaas</h1>
            <p className="font-label-caps text-label-caps text-gold-accent tracking-[0.3em] uppercase">Cinematic Performance Experience</p>
          </div>
        </div>
      </section>

      {/* Featured Verse Section */}
      <section className="py-[120px] bg-primary relative">
        <div className="max-w-[1440px] mx-auto px-[80px] text-center">
          <div className="mb-12 inline-block">
            <BookOpen className="text-gold-accent text-5xl mb-4 icon-filled" size={48} />
          </div>
          
          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation Buttons - Desktop/Tablet */}
            <button
              onClick={handleFeaturedPrevious}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gold-accent/30 items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300 z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleFeaturedNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gold-accent/30 items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300 z-20"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slides */}
            <div className="relative min-h-[400px] md:min-h-[400px] px-16 md:px-16">
              {featuredPoems.map((poem, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === featuredSlideIndex
                      ? 'opacity-100 translate-x-0'
                      : index < featuredSlideIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div onClick={() => openModal(poem.index)} className="space-y-12 cursor-pointer group">
                    <div className="font-nastaleeq text-4xl md:text-6xl text-gold-accent leading-[2.5] md:leading-[2.2] tracking-wide group-hover:text-gold-accent/80 transition-colors" dir="rtl" style={{ textShadow: '0 0 10px rgba(212, 175, 55, 0.3)' }}>
                      {poem.urdu.split('\n').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                      <p className="font-headline-md text-headline-md italic text-pure-white opacity-90">
                        "{poem.roman}"
                      </p>
                      <div className="w-24 h-px bg-gold-accent/40 mx-auto"></div>
                      <p className="font-body-lg text-body-lg text-pure-white/80 leading-relaxed max-w-2xl mx-auto">
                        {poem.translation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - Mobile */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-12">
              <button
                onClick={handleFeaturedPrevious}
                className="w-12 h-12 rounded-full border border-gold-accent/30 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleFeaturedNext}
                className="w-12 h-12 rounded-full border border-gold-accent/30 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {featuredPoems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setFeaturedSlideIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === featuredSlideIndex
                      ? 'bg-gold-accent w-8'
                      : 'bg-gold-accent/30 hover:bg-gold-accent/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
          <span className="font-nastaleeq text-[20rem] text-gold-accent select-none">عظم</span>
        </div>
      </section>

      {/* Poetry Bento Gallery */}
      <section className="py-[120px] bg-deep-navy">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline-xl text-headline-xl text-pure-white mb-4">The Written Soul</h2>
              <p className="font-body-md text-body-md text-pure-white/80">A collection of selected couplets and verses from the upcoming anthology. Each piece is a fragment of a larger journey.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gold-accent/30 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300">
                <ChevronLeft size={24} />
              </button>
              <button className="w-12 h-12 rounded-full border border-gold-accent/30 flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-primary transition-all duration-300">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Bento Card 1: Large Featured - Nazm */}
            <div onClick={() => openModal(0)} className="md:col-span-8 group relative aspect-[16/9] md:aspect-auto md:h-[500px] rounded-xl overflow-hidden bg-surface-container-highest/5 border border-white/5 p-8 flex flex-col justify-end cursor-pointer hover:border-gold-accent/30 transition-all duration-300">
              <div className="absolute inset-0 z-0">
                <img alt="Poetry Background" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXG5m8HaSHV3y7S9eBkysmhkAX3m-rprlDIN5hShZ18blUEep70yMJq8YnV607yCobNv41p_n5wIwjA1CnhbcufdIlEmGmb5WW6THxW4CV7mQxVfz4cnH_7VYkqNI4lm91fULVQX2fFVoRhpcsZX6gUB3F5S0o6U5oTNtqscP9w_hiu8ulBY8bnzoxRBxvkFUZRnISsabqSdwRlme4bs3lzvhlCMQSJ5N9nvWfbpyB0TxOuFNT6Dp6h6DOkryRsBxcO9dgFJ5fGg" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <span className="font-label-caps text-label-caps text-gold-accent mb-4 block">Nazm</span>
                <h3 className="font-headline-md text-headline-md text-pure-white mb-4">Khamoshi Aksar Bolti Hai</h3>
                <p className="font-body-md text-body-md text-pure-white/80 max-w-md italic">"Silence often speaks, those who are silent reveal themselves..."</p>
              </div>
            </div>
            {/* Bento Card 2: Square - Couplet */}
            <div onClick={() => openModal(6)} className="md:col-span-4 group relative aspect-square rounded-xl overflow-hidden bg-surface-container-highest/5 border border-white/5 p-8 flex flex-col justify-center items-center text-center cursor-pointer hover:border-gold-accent/30 transition-all duration-300">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-container to-deep-navy opacity-40"></div>
              <div className="relative z-10">
                <Feather className="text-gold-accent text-4xl mb-6 icon-filled" size={36} />
                <div className="font-nastaliq text-2xl text-pure-white leading-loose mb-4">محبت خود تماشہ بن گئی ہے</div>
                <p className="font-label-caps text-label-caps tracking-widest text-gold-accent/70">Rubaiyat-e-Ishq</p>
              </div>
            </div>
            {/* Bento Card 3: Vertical - Nazm */}
            <div onClick={() => openModal(2)} className="md:col-span-4 group relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-highest/5 border border-white/5 p-8 flex flex-col justify-between cursor-pointer hover:border-gold-accent/30 transition-all duration-300">
              <div className="absolute inset-0 z-0 opacity-20">
                <img alt="Reflection" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXwVevAALJChbKOM9cYP_thn9lIZXqYX-ro8z12Jbbnw5UrPKphEiKfKwBwvRRpToSuLHeEFnXb-5MVpIKungl1IR9OaPHpminJn-CuAXVD5NVyGReuofcC_O72p0n5gMozlxGFBn3EyHW1UpuaacBam1_m8zXG9zIIXV1fdFAzPWgAs4NhsyNkOAdo8Nu8G2j2IjFox74tGkd3zGwjUi62JV90l-rQZOQekYRqGnCPBOcJUDFuzcDvG0uOCLAhj3jBewjntsRuQ" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="font-label-caps text-label-caps text-gold-accent mb-4 block">Nazm</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-pure-white mb-2 italic">Kyon Ye Mann Maayoos Hai</h3>
                  <p className="font-body-md text-body-md text-pure-white/80">"Why is this heart despairing, how occupied is wisdom..."</p>
                </div>
              </div>
            </div>
            {/* Bento Card 4: Detailed Text - Nazm */}
            <div className="md:col-span-8 group relative rounded-xl overflow-hidden bg-primary-container/30 border border-gold-accent/10 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="font-headline-md text-headline-md text-gold-accent">Jab Unki Nigaaho'n Ke...</h3>
                  <p className="font-body-md text-body-md text-pure-white/80 leading-relaxed">
                    When their gaze comes into view, heart and mind find peace. A journey through the stages of the world, seeking proximity to tranquility. Questions are serious and circumstances complex—these are the meetings of today.
                  </p>
                  <a onClick={() => openModal(1)} className="inline-flex items-center gap-2 font-label-caps text-label-caps text-gold-accent hover:gap-4 transition-all duration-300 cursor-pointer">
                    READ FULL NAZM <ArrowRight size={16} />
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 border border-gold-accent/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border border-gold-accent/10 rounded-full"></div>
                    <span className="font-nastaliq text-5xl text-gold-accent opacity-40">دہلوی</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Bento Card 5: Large Featured - Couplet */}
            <div onClick={() => openModal(3)} className="md:col-span-6 group relative aspect-[16/9] md:aspect-auto md:h-[400px] rounded-xl overflow-hidden bg-surface-container-highest/5 border border-white/5 p-8 flex flex-col justify-end cursor-pointer hover:border-gold-accent/30 transition-all duration-300">
              <div className="absolute inset-0 z-0">
                <img alt="Poetry Background" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXG5m8HaSHV3y7S9eBkysmhkAX3m-rprlDIN5hShZ18blUEep70yMJq8YnV607yCobNv41p_n5wIwjA1CnhbcufdIlEmGmb5WW6THxW4CV7mQxVfz4cnH_7VYkqNI4lm91fULVQX2fFVoRhpcsZX6gUB3F5S0o6U5oTNtqscP9w_hiu8ulBY8bnzoxRBxvkFUZRnISsabqSdwRlme4bs3lzvhlCMQSJ5N9nvWfbpyB0TxOuFNT6Dp6h6DOkryRsBxcO9dgFJ5fGg" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <span className="font-label-caps text-label-caps text-gold-accent mb-4 block">Couplet</span>
                <h3 className="font-headline-md text-headline-md text-pure-white mb-4">Sunane Ko Mere Paas...</h3>
                <p className="font-body-md text-body-md text-pure-white/80 max-w-md italic">"I have many stories to tell, but it's the Almighty's countless blessings..."</p>
              </div>
            </div>
            {/* Bento Card 6: Square - Couplet */}
            <div onClick={() => openModal(4)} className="md:col-span-6 group relative aspect-square rounded-xl overflow-hidden bg-surface-container-highest/5 border border-white/5 p-8 flex flex-col justify-center items-center text-center cursor-pointer hover:border-gold-accent/30 transition-all duration-300">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-container to-deep-navy opacity-40"></div>
              <div className="relative z-10">
                <Feather className="text-gold-accent text-4xl mb-6 icon-filled" size={36} />
                <div className="font-nastaliq text-2xl text-pure-white leading-loose mb-4">الفاظ سے بیان ہو</div>
                <p className="font-label-caps text-label-caps tracking-widest text-gold-accent/70">Couplet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Verses Section */}
      <section className="py-[120px] bg-primary relative">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline-xl text-headline-xl text-pure-white mb-4">Selected Couplets</h2>
              <p className="font-body-md text-body-md text-pure-white/80">A collection of poignant couplets capturing the essence of love, loss, and longing.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Couplet Card 1 */}
            <div onClick={() => openModal(3)} className="group relative rounded-xl overflow-hidden bg-surface-container-highest/5 border border-white/5 p-8 md:p-12 cursor-pointer hover:border-gold-accent/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="font-label-caps text-label-caps text-gold-accent mb-4 block">Couplet</span>
                <div className="font-nastaliq text-2xl text-gold-accent leading-loose mb-4" dir="rtl">
                  سنانے کو میرے پاس کہانیاں بہت ہیں<br />
                  دراصل اپر والے کی مہربانیاں بہت ہیں
                </div>
                <p className="font-body-md text-body-md text-pure-white/80 italic">
                  "Sunane ko mere paas kahaaniya'n bohot hain<br />
                  Dar asal upar waale ki meherbaaniya'n bohot hain"
                </p>
                <p className="font-body-sm text-body-sm text-pure-white/60 mt-4">
                  I have many stories to tell, but it's the Almighty's countless blessings...
                </p>
              </div>
            </div>
            {/* Couplet Card 2 */}
            <div onClick={() => openModal(4)} className="group relative rounded-xl overflow-hidden bg-surface-container-highest/5 border border-white/5 p-8 md:p-12 cursor-pointer hover:border-gold-accent/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="font-label-caps text-label-caps text-gold-accent mb-4 block">Couplet</span>
                <div className="font-nastaliq text-2xl text-gold-accent leading-loose mb-4" dir="rtl">
                  الفاظ سے بیان ہو یہ وہ بات نہیں<br />
                  اسکا خیال ہی کافی ہے، لازم ملاقات نہیں
                </div>
                <p className="font-body-md text-body-md text-pure-white/80 italic">
                  "Lavzo'n se bayaan ho ye woh baat nahi<br />
                  Uska khayaal hi kaafi h, lazim mulaakat nhi"
                </p>
                <p className="font-body-sm text-body-sm text-pure-white/60 mt-4">
                  Words cannot express this matter, the thought alone is sufficient, meeting is not necessary...
                </p>
              </div>
            </div>
            {/* Couplet Card 3 */}
            <div onClick={() => openModal(5)} className="group relative rounded-xl overflow-hidden bg-surface-container-highest/5 border border-white/5 p-8 md:p-12 cursor-pointer hover:border-gold-accent/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="font-label-caps text-label-caps text-gold-accent mb-4 block">Couplet</span>
                <div className="font-nastaliq text-2xl text-gold-accent leading-loose mb-4" dir="rtl">
                  آج نے بھی منہ موڈ لیya دیگران کی طرح<br />
                  جو دل چھرا کر بیٹھ گئی تھی چوروں کی طرح
                </div>
                <p className="font-body-md text-body-md text-pure-white/80 italic">
                  "Aaj usne bhi muh mod liya auro'n ki tarah<br />
                  Jo dil chura kar baith gyi thi choro'n ki tarah"
                </p>
                <p className="font-body-sm text-body-sm text-pure-white/60 mt-4">
                  Today she also turned away like others, who had sat after stealing the heart like thieves...
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
          <span className="font-nastaleeq text-[20rem] text-gold-accent select-none">شعر</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-[120px] bg-primary text-center">
        <div className="max-w-2xl mx-auto px-[24px]">
          <h2 className="font-headline-xl text-headline-xl text-pure-white mb-6">Stay for the Verse</h2>
          <p className="font-body-lg text-body-lg text-pure-white/80 mb-10">Subscribe to receive exclusive couplets and early access to the upcoming poetry collection 'Sukūn-e-Rooh'.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-gold-accent transition-colors" 
              placeholder="Your email address" 
              type="email" 
              required
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-container text-pure-white px-10 py-4 rounded-full font-label-caps text-label-caps hover:bg-gold-accent hover:text-primary transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </button>
          </form>
        </div>
      </section>

      <Footer />

      <PoetryModal
        poetry={poetryData[selectedPoetryIndex] || null}
        isOpen={isModalOpen}
        onClose={closeModal}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isFirst={selectedPoetryIndex === 0}
        isLast={selectedPoetryIndex === poetryData.length - 1}
      />
    </main>
  );
}
