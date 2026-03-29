import { motion } from 'motion/react';
import { Star, MapPin, Coffee, Wifi, Dog, Share2, ThumbsUp, Menu } from 'lucide-react';
import UnicornScene from 'unicornstudio-react';

// --- Design System Constants ---
const colors = {
  surface: '#fff8ef',
  surfaceContainer: '#f5edde',
  surfaceContainerLow: '#fbf3e4',
  surfaceContainerLowest: '#ffffff',
  primary: '#823b18',
  primaryContainer: '#a0522d',
  onSurface: '#1e1b13',
  onSurfaceVariant: '#54433c',
  secondaryContainer: '#c7ecc7',
  onSecondaryContainer: '#4c6c4f',
  tertiary: '#843a00',
  ghostBorder: 'rgba(218, 193, 184, 0.15)',
};

const shadows = {
  ambient: '0 24px 40px -12px rgba(30, 27, 19, 0.06)',
};

const gradients = {
  primaryCTA: 'linear-gradient(135deg, #823b18 0%, #a0522d 100%)',
};

// --- Mock Data ---
const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    badge: 'Local Guide • 12 Reviews',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
    rating: 5,
    title: 'Best breakfast in MT!',
    text: "The Apple Pie and the Tibetan Breakfast here are legendary for a reason. The vibe is so cozy, it feels like sitting in someone's warm living room in Dharamshala. A must-visit every time I'm in Delhi.",
    images: [
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=150&h=150&fit=crop',
    ],
    date: 'October 2023',
    helpful: 24,
  },
  {
    id: 2,
    name: 'Rohan Verma',
    badge: 'Coffee Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=faces',
    rating: 4,
    title: 'Excellent Mudcake',
    text: 'Tried their famous mudcake after hearing so much about it. It was incredibly rich and moist. Only downside was the weekend rush, waited about 20 minutes for a table, but the coffee made up for it.',
    date: 'November 2023',
    helpful: 8,
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    badge: 'Frequent Traveler',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
    rating: 5,
    title: 'Peace in the city',
    text: "Roshan's is my go-to when I need to escape the chaos of Delhi. The terrace seating is beautiful, especially in the winter. Their Himalayan tea blends are exceptional and very authentic.",
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&h=150&fit=crop',
    ],
    date: 'December 2023',
    helpful: 42,
  },
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// --- Components ---

const Navbar = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="fixed top-0 w-full z-50 backdrop-blur-sm border-b"
    style={{ backgroundColor: `${colors.surface}cc`, borderColor: colors.ghostBorder }}
  >
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tighter" style={{ color: colors.primary }}>
        Roshan's Cafe
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#home" className="border-b-2 pb-1 hover:opacity-70 transition-opacity" style={{ color: colors.primary, borderColor: colors.primary }}>Home</a>
        <a href="#menu" className="hover:opacity-70 transition-opacity" style={{ color: colors.onSurface }}>Menu</a>
        <a href="#about" className="hover:opacity-70 transition-opacity" style={{ color: colors.onSurface }}>About Us</a>
        <a href="#reviews" className="hover:opacity-70 transition-opacity" style={{ color: colors.onSurface }}>Reviews</a>
      </div>
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block px-6 py-2.5 rounded-lg font-bold text-sm text-white shadow-lg"
          style={{ background: gradients.primaryCTA, boxShadow: `0 10px 20px -10px ${colors.primary}80` }}
        >
          Book a Table
        </motion.button>
        <button className="md:hidden p-2" style={{ color: colors.primary }}>
          <Menu size={24} />
        </button>
      </div>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden px-6 lg:px-12 pt-24">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="z-10 order-2 lg:order-1"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6"
          style={{ backgroundColor: colors.secondaryContainer, color: colors.onSecondaryContainer }}
        >
          SINCE 2011
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-6"
          style={{ color: colors.onSurface }}
        >
          A Sanctuary for <span className="italic" style={{ color: colors.primary }}>Soulful</span> Moments.
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg lg:text-xl max-w-lg mb-10 leading-relaxed"
          style={{ color: colors.onSurfaceVariant }}
        >
          Experience the warmth of Majnu Ka Tilla's most loved retreat. From handcrafted Himalayan coffee to our signature fluffy pancakes.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl font-bold text-lg text-white shadow-xl"
            style={{ background: gradients.primaryCTA, boxShadow: `0 20px 40px -15px ${colors.primary}60` }}
          >
            View Menu
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: colors.surfaceContainerLow }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl border-2 font-bold text-lg transition-colors"
            style={{ borderColor: `${colors.primary}33`, color: colors.primary }}
          >
            Our Story
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative order-1 lg:order-2"
      >
        <div className="relative z-10 w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80"
            alt="Warm Cafe Interior"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative blur blobs */}
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full blur-3xl -z-10 opacity-50" style={{ backgroundColor: colors.secondaryContainer }}></div>
        <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full blur-3xl -z-10 opacity-30" style={{ backgroundColor: colors.primary }}></div>
      </motion.div>
    </div>
  </section>
);

const OurStory = () => (
  <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: `${colors.surfaceContainerLow}66`, backdropFilter: 'blur(4px)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-lg -rotate-1">
              <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80" alt="Coffee" className="w-full h-64 object-cover" />
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl" style={{ backgroundColor: colors.surfaceContainerLowest, boxShadow: shadows.ambient }}>
              <h4 className="text-4xl font-extrabold mb-2" style={{ color: colors.primary }}>10+</h4>
              <p className="text-sm font-medium" style={{ color: colors.onSurfaceVariant }}>Years of Community</p>
            </motion.div>
          </div>
          <div className="space-y-4 pt-8">
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl text-white" style={{ background: gradients.primaryCTA }}>
              <MapPin size={32} className="mb-4 opacity-80" />
              <h4 className="text-xl font-bold">Majnu Ka Tilla</h4>
              <p className="text-sm opacity-80 mt-2">The heart of our journey in New Delhi.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-lg rotate-2">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80" alt="Cafe Vibes" className="w-full h-64 object-cover" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full lg:w-1/2"
        >
          <motion.h2 variants={fadeInUp} className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: colors.tertiary }}>
            Rooted in Tradition
          </motion.h2>
          <motion.h3 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight" style={{ color: colors.onSurface }}>
            Our Story Begins in the Narrow Lanes.
          </motion.h3>
          <motion.div variants={fadeInUp} className="space-y-6 text-lg leading-relaxed" style={{ color: colors.onSurfaceVariant }}>
            <p>
              Roshan's Cafe started as a dream in the vibrant Tibetan colony of Majnu Ka Tilla. What began as a small corner for community elders to share stories over tea has blossomed into a destination for travelers and locals alike.
            </p>
            <p>
              We believe in the "Digital Curator" philosophy—every corner of our space is curated to feel like an extension of your own living room. From our hand-picked coffee beans sourced from the Himalayas to our freshly baked artisanal desserts.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-10 pt-10 border-t flex items-center gap-6" style={{ borderColor: colors.ghostBorder }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" alt="Founder" className="w-16 h-16 rounded-full object-cover grayscale" />
            <div>
              <p className="font-bold italic" style={{ color: colors.onSurface }}>"We don't just serve coffee; we serve moments of peace in a busy world."</p>
              <p className="text-sm mt-1" style={{ color: colors.onSurfaceVariant }}>— Roshan, Founder of Roshan's Cafe</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="menu" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center text-4xl font-extrabold mb-16 tracking-tight"
      style={{ color: colors.onSurface }}
    >
      The Roshan's Experience
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
      {/* Feature Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="md:col-span-2 md:row-span-2 rounded-[2rem] p-10 flex flex-col justify-end relative overflow-hidden group"
        style={{ backgroundColor: colors.surfaceContainerLow }}
      >
        <img
          src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80"
          alt="Pancakes"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="relative z-10 text-white">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block" style={{ backgroundColor: colors.primaryContainer }}>
            MUST TRY
          </span>
          <h4 className="text-3xl font-bold mb-2">Legendary Fluffy Pancakes</h4>
          <p className="text-sm leading-relaxed opacity-90">The reason people travel across the city to see us.</p>
        </div>
      </motion.div>

      {/* Small Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="md:col-span-2 rounded-[2rem] p-8 flex flex-col justify-center"
        style={{ backgroundColor: '#c7ecc7', color: '#02210a' }} // Using secondary fixed colors from design
      >
        <Coffee size={40} className="mb-4 opacity-80" />
        <h4 className="text-2xl font-bold mb-2">Himalayan Arabica</h4>
        <p className="text-sm opacity-80 leading-relaxed">Single-origin beans roasted to perfection daily for that earthy, smooth finish.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="rounded-[2rem] p-8 flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: colors.surfaceContainer, color: colors.onSurface }}
      >
        <Wifi size={32} className="mb-3 opacity-80" />
        <h5 className="font-bold">Work Friendly</h5>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="rounded-[2rem] p-8 flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: '#ffdbc9', color: '#321200' }} // Tertiary fixed colors
      >
        <Dog size={32} className="mb-3 opacity-80" />
        <h5 className="font-bold">Pet Welcoming</h5>
      </motion.div>
    </div>
  </section>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" style={{ color: colors.tertiary }}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill={i < rating ? 'currentColor' : 'none'} strokeWidth={i < rating ? 0 : 2} />
    ))}
  </div>
);

const Reviews = () => (
  <section id="reviews" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="mb-16"
    >
      <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4" style={{ color: colors.onSurface }}>
        Guest Stories
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-lg max-w-2xl leading-relaxed" style={{ color: colors.onSurfaceVariant }}>
        Hear from our community about their favorite Himalayan blends and the moments they've shared at the heart of Majnu-ka-tilla.
      </motion.p>
    </motion.div>

    {/* Stats Bento */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16"
    >
      <div className="md:col-span-4 rounded-xl p-8 flex flex-col justify-center items-center text-center" style={{ backgroundColor: colors.surfaceContainerLow }}>
        <span className="text-7xl font-extrabold tracking-tighter mb-2" style={{ color: colors.primary }}>4.8</span>
        <div className="mb-3"><StarRating rating={4.5} /></div>
        <p className="font-medium text-sm" style={{ color: colors.onSurfaceVariant }}>Based on 2,450+ global reviews</p>
      </div>
      
      <div className="md:col-span-5 rounded-xl p-8 space-y-4" style={{ backgroundColor: colors.surfaceContainer }}>
        {[
          { stars: 5, pct: 85 },
          { stars: 4, pct: 10 },
          { stars: 3, pct: 3 },
          { stars: 2, pct: 1 },
          { stars: 1, pct: 1 },
        ].map((row) => (
          <div key={row.stars} className="flex items-center gap-4">
            <span className="text-sm font-bold w-12" style={{ color: colors.onSurfaceVariant }}>{row.stars} Star</span>
            <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: colors.surfaceContainerLowest }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${row.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: colors.primary }}
              />
            </div>
            <span className="text-sm font-medium w-8 text-right" style={{ color: colors.onSurfaceVariant }}>{row.pct}%</span>
          </div>
        ))}
      </div>

      <div className="md:col-span-3 rounded-xl p-8 flex flex-col justify-center gap-4" style={{ backgroundColor: colors.primaryContainer, color: '#ffe1d6' }}>
        <h3 className="text-xl font-bold leading-tight">Visit us recently?</h3>
        <p className="text-sm opacity-80">Share your experience with our community and help others find their perfect brew.</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2.5 rounded-lg font-bold text-sm w-fit shadow-sm"
          style={{ backgroundColor: colors.surfaceContainerLowest, color: colors.primary }}
        >
          Write a Review
        </motion.button>
      </div>
    </motion.div>

    {/* Filters */}
    <div className="flex gap-3 overflow-x-auto pb-6 mb-8 scrollbar-hide">
      {['All Reviews', 'With Photos', 'Breakfast', 'Coffee Only'].map((filter, i) => (
        <button
          key={filter}
          className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors`}
          style={{
            backgroundColor: i === 0 ? '#ffdbcd' : colors.surfaceContainer, // primary-fixed for active
            color: i === 0 ? '#360f00' : colors.onSurfaceVariant,
          }}
        >
          {filter}
        </button>
      ))}
    </div>

    {/* Review Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <motion.article
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="rounded-2xl p-8 flex flex-col"
          style={{ backgroundColor: colors.surfaceContainerLowest, boxShadow: shadows.ambient }}
        >
          <div className="flex items-center gap-3 mb-6">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="font-bold" style={{ color: colors.onSurface }}>{review.name}</h4>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: colors.onSurfaceVariant }}>{review.badge}</p>
            </div>
          </div>
          <div className="mb-3"><StarRating rating={review.rating} /></div>
          <h5 className="text-lg font-bold mb-3 leading-tight" style={{ color: colors.onSurface }}>{review.title}</h5>
          <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: colors.onSurfaceVariant }}>{review.text}</p>
          
          {review.images && (
            <div className="flex gap-2 mb-4">
              {review.images.map((img, i) => (
                <img key={i} src={img} alt="Review photo" className="w-16 h-16 rounded-lg object-cover" />
              ))}
            </div>
          )}

          <div className="pt-4 border-t flex justify-between items-center" style={{ borderColor: colors.ghostBorder }}>
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: colors.onSurfaceVariant }}>{review.date}</span>
            <button className="flex items-center gap-1.5 font-bold text-xs" style={{ color: '#466649' }}> {/* secondary color */}
              <ThumbsUp size={14} />
              <span>Helpful ({review.helpful})</span>
            </button>
          </div>
        </motion.article>
      ))}
    </div>
    
    <div className="mt-16 text-center">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-10 py-3 font-bold rounded-lg transition-colors"
        style={{ backgroundColor: colors.surfaceContainer, color: colors.primary }}
      >
        Load More Stories
      </motion.button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full rounded-t-[2rem] mt-12 py-16 px-12" style={{ backgroundColor: `${colors.surfaceContainer}D9`, backdropFilter: 'blur(4px)' }}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="text-xl font-bold" style={{ color: colors.primary }}>Roshan's Cafe</div>
        <p className="text-sm text-center md:text-left max-w-xs opacity-60" style={{ color: colors.onSurface }}>
          © 2024 Roshan's Cafe. Handcrafted in New Delhi.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-sm font-medium" style={{ color: colors.onSurface }}>
        <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Location</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Facebook</a>
      </div>
      <div className="flex gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80" style={{ backgroundColor: colors.surfaceContainerLow, color: colors.primary }}>
          <Share2 size={18} />
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80" style={{ backgroundColor: colors.surfaceContainerLow, color: colors.primary }}>
          <MapPin size={18} />
        </button>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#ffdbcd] selection:text-[#360f00] relative" style={{ backgroundColor: colors.surface, color: colors.onSurface, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        a[href*="unicorn.studio"] { display: none !important; opacity: 0 !important; pointer-events: none !important; }
      `}</style>
      
      {/* Fixed Background WebGL Scene */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ opacity: 0.3 }}>
          <UnicornScene 
            projectId="YKHFj8wEsVSbhggZqlbW" 
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js"
            width="100%" 
            height="100%" 
          />
        </div>
        {/* Gradient overlay matching the original hero filter */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${colors.surface}, ${colors.surface}66, transparent)`, opacity: 0.4 }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <OurStory />
          <Experience />
          <Reviews />
        </main>
        <Footer />
      </div>
    </div>
  );
}
