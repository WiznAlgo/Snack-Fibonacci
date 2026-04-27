import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Phone, Clock, Instagram, ArrowUpRight } from 'lucide-react';

const LOGO_URL = '/images/logo.jpg';
const POSTER_URL = '/images/poster.jpg';

type ProductCardId = 'original' | 'spicy' | 'spiral';

export default function App() {
  const [activeCard, setActiveCard] = useState<ProductCardId | null>(null);

  const toggleCard = (id: ProductCardId) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (!activeCard) return;

    let timeoutId: number | undefined;

    const handleScroll = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setActiveCard(null);
      }, 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(timeoutId);
    };
  }, [activeCard]);

  return (
    <div className="min-h-screen font-sans bg-balance-bg text-balance-dark relative overflow-hidden">
      <svg className="absolute z-0 opacity-[0.04] pointer-events-none right-[-10%] top-[-10%] w-[80%] h-auto" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <path d="M1000 1000H0V0h1000v1000z" fill="none" />
        <path d="M618 1000c0-210.6-170.8-381.4-381.4-381.4M236.6 618.6c130.2 0 235.7-105.5 235.7-235.7M472.3 382.9c0-80.5-65.2-145.7-145.7-145.7M326.6 237.2c50 0 90.6-40.6 90.6-90.6M417.2 146.6c0-30.8-25-55.8-55.8-55.8M361.4 90.8c19 0 34.4-15.4 34.4-34.4" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
      <div className="absolute bg-balance-dark/10 z-0 w-full h-[1px] top-[10%]" />
      <div className="absolute bg-balance-dark/10 z-0 w-full h-[1px] top-[90%]" />
      <div className="absolute bg-balance-dark/10 z-0 h-full w-[1px] left-[10%]" />
      <div className="absolute bg-balance-dark/10 z-0 h-full w-[1px] left-[90%]" />

      <nav className="fixed top-0 w-full z-50 bg-balance-bg/90 backdrop-blur-md border-b border-balance-dark">
        <div className="max-w-[90%] mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-display italic font-medium text-2xl tracking-tight text-balance-dark">
              Snack <span className="text-balance-gold">Fibonacci</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#philosophy" className="hover:text-balance-gold transition-colors">Philosophy</a>
            <a href="#menu" className="hover:text-balance-gold transition-colors">The Menu</a>
            <a href="#story" className="hover:text-balance-gold transition-colors">Our Story</a>
          </div>
          <a href="#order" className="bg-balance-dark text-white px-6 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-balance-gold hover:text-balance-dark transition-all">
            PO Sekarang
          </a>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 z-10 w-[90%] max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-balance-dark mb-8 border border-balance-dark px-4 py-2">
              <span className="w-2 h-2 bg-balance-gold rounded-full animate-pulse" />
              School Project / Business Concept
            </div>
            <h1 className="font-display italic font-medium text-6xl lg:text-8xl leading-[1.1] text-balance-dark mb-6">
              Bukan <br />
              <span className="text-balance-gold">Makaroni</span> <br />
              Biasa.
            </h1>
            <p className="text-xl text-balance-dark mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed border-l-2 border-balance-gold pl-6">
              The sequence of flavor. Mathematically perfect macaroni snacks crafted for the curious palate.
            </p>

            <div className="mb-12 max-w-[240px] mx-auto lg:mx-0 bg-white border border-balance-dark shadow-xl p-2 rotate-2 hover:rotate-0 transition-all duration-300">
              <img src={LOGO_URL} alt="Snack Fibonacci Logo" className="w-full h-auto object-contain" />
            </div>

            <CountdownTimer targetDate="2026-09-01T00:00:00" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
            className="hidden lg:flex flex-1 relative z-10 w-full max-w-md lg:max-w-none justify-end"
          >
            <div className="relative overflow-hidden border border-balance-dark p-2 bg-white w-full max-w-lg aspect-square group">
              <img src="/images/original.jpg" alt="Snack Fibonacci Product Showcase" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-balance-gold/10 mix-blend-multiply pointer-events-none" />
              <div className="absolute bottom-6 right-6 bg-balance-dark text-white px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                Est. 2025
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="philosophy" className="py-24 px-4 bg-balance-dark text-balance-bg relative z-10">
        <div className="max-w-[90%] 2xl:max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display italic text-5xl mb-8">The <span className="text-balance-gold">Golden Ratio</span> of Taste.</h2>
              <p className="text-lg font-light leading-relaxed mb-6 opacity-80">
                Dalam matematika, deret Fibonacci mewakili proporsi emas yang ditemukan di alam (1, 1, 2, 3, 5, 8...). Kami mengadaptasi filosofi ini untuk menciptakan keseimbangan rasa yang sempurna pada setiap bumbu makaroni kami.
              </p>
              <p className="text-lg font-light leading-relaxed opacity-80">
                Setiap takaran bumbu dihitung bukan hanya berdasarkan perasaan, melainkan presisi. Menghasilkan profil rasa yang berlapis: gurih yang tepat, renyah yang presisi, dan pedas yang berlogika.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-balance-bg p-8 flex flex-col justify-between aspect-square">
                <span className="text-balance-gold text-4xl font-light">1.618</span>
                <span className="text-xs uppercase tracking-widest font-bold">Flavor Proportion</span>
              </div>
              <div className="border border-balance-bg p-8 flex flex-col justify-between aspect-square mt-8">
                <span className="text-balance-gold text-4xl font-light">3</span>
                <span className="text-xs uppercase tracking-widest font-bold">Curated Variants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-32 px-4 bg-transparent relative z-10 border-t border-balance-dark">
        <div className="max-w-[90%] 2xl:max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display italic font-medium text-4xl lg:text-5xl text-balance-dark mb-4">
              Pilihan Sang <span className="text-balance-gold">Juara</span>
            </h2>
            <p className="text-sm uppercase tracking-widest font-bold text-balance-dark/60">Terbuat dari makaroni pilihan kualitas premium.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              id="original"
              title="Makaroni Gurih / ORI"
              price="Sold Out"
              desc="Rasa gurih original favorit sedang sold out. Nantikan restock batch berikutnya!"
              num="01"
              variant="SOLD OUT"
              color="bg-white text-balance-dark"
              imageUrl="/images/original.jpg"
              delay={0.1}
              isOpen={activeCard === 'original'}
              onToggle={() => toggleCard('original')}
              onClose={() => setActiveCard((prev) => (prev === 'original' ? null : prev))}
              soldOut
            />

            <ProductCard
              id="spicy"
              title="Spicy"
              price="2K"
              desc="Pedasnya nendang, bikin melek dan semangat seharian!"
              num="02"
              variant="INTENSE"
              color="bg-balance-orange text-white"
              imageUrl="/images/spicy.jpg"
              delay={0.2}
              isOpen={activeCard === 'spicy'}
              onToggle={() => toggleCard('spicy')}
              onClose={() => setActiveCard((prev) => (prev === 'spicy' ? null : prev))}
            />

            <ProductCard
              id="spiral"
              title="Spiral"
              price="2.5K"
              desc="Tekstur spiral yang menangkap bumbu pedas ekstra di setiap lekukannya."
              num="03"
              variant="GEOMETRY"
              color="bg-balance-dark text-white"
              imageUrl="/images/spiral.jpg"
              delay={0.3}
              isOpen={activeCard === 'spiral'}
              onToggle={() => toggleCard('spiral')}
              onClose={() => setActiveCard((prev) => (prev === 'spiral' ? null : prev))}
            />
          </div>
        </div>
      </section>

      <section id="story" className="py-32 px-4 bg-white relative z-10 border-t border-balance-dark">
        <div className="max-w-[90%] 2xl:max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-balance-dark pb-8">
            <div>
              <h2 className="font-display italic font-medium text-4xl lg:text-5xl text-balance-dark mb-4">
                Join The <span className="text-balance-gold">Sequence</span>
              </h2>
              <p className="text-sm uppercase tracking-widest font-bold text-balance-dark/60">Ikuti perjalanan bisnis dan update terbaru kami.</p>
            </div>
            <a href="https://www.instagram.com/snack_fibonacci?igsh=NTV4M3NvMnRjcmxn" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-balance-orange transition-colors">
              <Instagram className="w-4 h-4" />
              Follow Instagram
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/images/ig1.jpg', '/images/ig2.jpg', '/images/ig3.jpg', '/images/ig4.jpg'].map((imgSrc, i) => (
              <div key={i} className="aspect-square border border-balance-dark group relative overflow-hidden bg-gray-100 flex items-center justify-center p-2">
                <img src={imgSrc} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-balance-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                  <Instagram className="w-6 h-6 mb-2 text-balance-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">View Post</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-balance-bg text-balance-dark overflow-hidden relative border-t border-balance-dark">
        <div className="max-w-[90%] 2xl:max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative p-4 border border-balance-dark bg-white"
            >
              <img src={POSTER_URL} alt="Promo Poster" className="relative w-full object-cover shadow-sm hover:scale-105 transition-all duration-700" />
              <div className="absolute -bottom-4 -left-4 bg-balance-orange text-white px-4 py-2 text-[10px] uppercase font-bold tracking-widest border border-balance-dark">
                Official Poster . 2025
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h2 className="font-display italic font-medium text-4xl lg:text-5xl leading-tight">
                Our <span className="text-balance-gold">Edu-Business</span> Journey.
              </h2>

              <div className="space-y-8 border-l border-balance-dark/20 pl-8">
                {[
                  'Perpaduan bumbu yang dihitung akurat biar rasanya pecah di mulut.',
                  'Harganya pelajar banget, kantong aman ngemil jalan terus.',
                  'Dibuat dengan semangat berbisnis anak sekolah yang penuh inovasi.',
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-balance-orange text-[10px] font-bold tracking-widest uppercase">Point {i + 1}</span>
                    <p className="text-lg font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="order" className="py-32 px-4 bg-balance-dark text-balance-bg relative z-10 border-t border-balance-dark">
        <div className="max-w-[90%] 2xl:max-w-7xl mx-auto text-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-balance-gold mb-6 block">Ready Since for September 2025</span>
          <h2 className="font-display italic font-medium text-5xl lg:text-7xl mb-8">
            Jadilah <span className="text-balance-gold">Yang Pertama.</span>
          </h2>
          <p className="text-xl mb-12 font-light max-w-2xl mx-auto opacity-80">
            Kunci slot pre-order awalmu. Hubungi admin kami untuk menjadi bagian dari kloter produksi selanjutnya.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ContactButton phone="6282233412942" label="Wisnu" isPrimary />
            <ContactButton phone="6285854647014" label="Dovan" />
          </div>
        </div>
      </section>

      <footer className="bg-[#111] text-white/50 py-16 px-4 z-10 relative">
        <div className="max-w-[90%] 2xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="font-display italic text-3xl text-white mb-4">Snack <span className="text-balance-gold">Fibonacci</span></p>
            <p className="text-sm font-light max-w-sm mb-6">The golden sequence of authentic, intense, and geometric macaroni flavors. Based in Indonesia.</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/snack_fibonacci?igsh=NTV4M3NvMnRjcmxn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#111] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#philosophy" className="hover:text-balance-gold transition-colors">Philosophy</a></li>
              <li><a href="#menu" className="hover:text-balance-gold transition-colors">The Menu</a></li>
              <li><a href="#story" className="hover:text-balance-gold transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>+62 822 3341 2942 (Wisnu)</li>
              <li>+62 858 5464 7014 (Dovan)</li>
              <li className="text-balance-gold pt-2">Launching Since Sept 2025</li>
            </ul>
          </div>
        </div>

        <div className="max-w-[90%] 2xl:max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <span className="uppercase tracking-widest">© 2025 Snack Fibonacci Project</span>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 uppercase tracking-widest">
            <span>Edu-Business Concept</span>
            <span className="hidden md:inline">|</span>
            <span>Developed by <a href="https://github.com/WiznAlgo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-balance-gold transition-colors font-bold">WiznAlgo</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

type ProductCardProps = {
  id: ProductCardId;
  title: string;
  price: string;
  desc: string;
  num: string;
  variant: string;
  color: string;
  delay: number;
  imageUrl: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  soldOut?: boolean;
};

function ProductCard({
  id,
  title,
  price,
  desc,
  num,
  variant,
  color,
  delay,
  imageUrl,
  isOpen,
  onToggle,
  onClose,
  soldOut = false,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { amount: 0.45 });

  useEffect(() => {
    if (!isInView && isOpen) {
      onClose();
    }
  }, [isInView, isOpen, onClose]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        opacity: { delay, duration: 0.6 },
        y: { delay, duration: 0.6 },
        layout: { duration: 0.45 },
      }}
      className={`border border-balance-dark p-6 flex flex-col relative overflow-hidden transition-all duration-500 ${color} ${
        isOpen ? 'min-h-[560px] md:min-h-[620px]' : 'min-h-[400px]'
      } ${soldOut ? 'opacity-90' : ''}`}
    >
      {soldOut && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-balance-dark text-white border border-current px-3 py-1 text-[10px] uppercase font-bold tracking-[0.2em] rotate-2">
          Sold Out
        </div>
      )}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <span className="text-4xl font-light opacity-60">{num}</span>
        <span className="text-[10px] uppercase font-bold tracking-widest pt-2 [writing-mode:vertical-rl] [text-orientation:mixed] text-balance-gold">
          {variant}
        </span>
      </div>

      <motion.div
        layout
        className={`relative z-10 w-full overflow-hidden border border-current/15 ${
          isOpen ? 'h-64 md:h-72 mb-8' : 'h-24 mb-6'
        }`}
      >
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isOpen
              ? 'opacity-100 blur-0 grayscale-0 scale-100'
              : 'opacity-25 blur-[2px] grayscale scale-[1.02]'
          }`}
        />

        <div className={`absolute inset-0 transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-20 bg-white'}`} />
      </motion.div>

      <div className="relative z-10 flex flex-col flex-1">
        <div className="mb-8">
          <h3 className="font-display italic text-3xl mb-2">{title}</h3>
          <p className={`text-sm leading-relaxed transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-80'}`}>
            {desc}
          </p>
        </div>

        <div className="mt-auto border-t border-current/20 pt-6 flex justify-between items-end gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{soldOut ? 'Availability' : 'Sequence Value'}</span>
            <p className="font-display italic text-2xl">{price}</p>
          </div>

          <button
            type="button"
            onClick={soldOut ? undefined : onToggle}
            aria-expanded={isOpen}
            aria-controls={`card-panel-${id}`}
            aria-disabled={soldOut}
            disabled={soldOut}
            className={`w-11 h-11 rounded-full border border-current flex items-center justify-center transition-all duration-300 shrink-0 ${
              soldOut
                ? 'cursor-not-allowed opacity-45 bg-current/10'
                : isOpen
                  ? 'bg-balance-gold text-balance-dark border-balance-gold rotate-45'
                  : 'bg-transparent hover:bg-balance-gold hover:text-balance-dark hover:border-balance-gold'
            }`}
          >
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <motion.div
          id={`card-panel-${id}`}
          layout
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
            marginTop: isOpen ? 20 : 0,
          }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden"
        >
          <div className="border-t border-current/15 pt-4">
            <p className="text-sm opacity-80">
              {soldOut
                ? 'Varian ini sedang sold out, jadi belum bisa dipilih untuk order saat ini.'
                : 'Klik panah untuk melihat visual produk lebih jelas. Saat kamu scroll halaman atau membuka varian lain, kartu ini akan menutup otomatis.'}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ContactButton({ phone, label, isPrimary = false }: { phone: string; label: string; isPrimary?: boolean }) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={`https://wa.me/${phone}?text=Halo%20${label},%20aku%20mau%20pesan%20Snack%20Fibonacci!`}
      target="_blank"
      rel="noopener noreferrer"
      className={`border flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
        isPrimary
          ? 'bg-balance-gold border-balance-gold text-balance-dark hover:bg-white hover:border-white'
          : 'border-white text-white hover:bg-white hover:text-balance-dark'
      }`}
    >
      <Phone className="w-4 h-4" />
      Hubungi {label}
    </motion.a>
  );
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; mins: number; secs: number } | null>(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const initialNow = new Date().getTime();
    const initialDiff = target - initialNow;

    if (initialDiff > 0) {
      setTimeLeft({
        days: Math.floor(initialDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((initialDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((initialDiff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((initialDiff % (1000 * 60)) / 1000),
      });
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="border border-balance-dark p-6 mt-8 max-w-sm">
      <div className="flex items-center gap-2 mb-6 text-balance-gold border-b border-balance-dark/10 pb-4">
        <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Clock className="w-3 h-3" /> Time to Sequence</span>
      </div>
      <div className="flex gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hrs', value: timeLeft.hours },
          { label: 'Min', value: timeLeft.mins },
          { label: 'Sec', value: timeLeft.secs },
        ].map((unit, i) => (
          <div key={i} className="flex-1 flex flex-col justify-center items-center gap-2">
            <span className="font-display italic text-2xl font-light">{unit.value.toString().padStart(2, '0')}</span>
            <span className="text-[8px] uppercase font-bold tracking-widest text-balance-dark/50">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
