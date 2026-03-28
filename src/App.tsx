/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface LinkButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
}

const LinkButton = ({ label, href, variant = 'secondary', icon }: LinkButtonProps) => {
  const baseStyles = "w-full max-w-md py-4 px-8 rounded-full flex items-center justify-center gap-4 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0.5 active:scale-[0.98] active:shadow-md relative overflow-hidden group border-t border-white/20";
  const variants = {
    primary: "bg-gradient-to-br from-brand-terracotta to-[#E2B1A5] border-b-4 border-[#B57E70] hover:from-[#E2B1A5] hover:to-brand-terracotta",
    secondary: "bg-gradient-to-br from-brand-sage to-[#A8B899] border-b-4 border-[#7A8A6A] hover:from-[#A8B899] hover:to-brand-sage",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]}`}
    >
      {/* Subtle top highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/30" />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
      
      {/* Hover shine effect - animated pulse */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {icon && (
        <span className="relative z-10 drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </span>
      )}
      <span className="relative z-10 text-center tracking-wider drop-shadow-md transition-all duration-300 group-hover:tracking-widest">
        {label}
      </span>
    </a>
  );
};

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      <div className="bg-grain" />
      
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="video-bg"
      >
        <source src="/video-fundo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="min-h-screen flex flex-col items-center relative z-10">
        {/* Profile Section - Circular Style */}
        <motion.div 
          className="w-full flex flex-col items-center text-center pt-20 pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Circular Image Container */}
          <div className="relative mb-8">
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/juci.png"
                alt="Jussi Castro"
                className="w-full h-full object-cover object-top scale-125 -translate-y-4"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-brand-terracotta rounded-full border-4 border-brand-cream z-10" />
          </div>
          
          {/* Text Content */}
          <div className="px-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="serif text-5xl md:text-7xl font-medium mb-2 text-brand-ink tracking-tight">
                Jussi Castro
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-brand-ink/80 mb-2">
                Psicóloga | Neuropsicóloga
              </p>
              <p className="text-sm md:text-base font-medium text-brand-ink/60 tracking-wide">
                Jucilene Castro da Mata Gomes | CRP 12/24950
              </p>
            </motion.div>
          </div>
        </motion.div>

          {/* Quote Section */}
          <div className="px-6 py-12 max-w-2xl">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -left-4 top-0 text-4xl text-brand-terracotta/20 serif">“</div>
              <p className="text-base md:text-lg leading-relaxed text-brand-ink/70 italic px-4">
                Cuidado especializado para infância, adolescência e dinâmica familiar
              </p>
              <div className="absolute -right-4 bottom-0 text-4xl text-brand-terracotta/20 serif">”</div>
            </div>
          </div>

        {/* Links Section */}
        <motion.div 
          className="w-full max-w-2xl px-6 flex flex-col items-center gap-5 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <LinkButton 
              label="Agendar via WhatsApp" 
              href="https://wa.me/5547988602129?text=Oi%20Juci%2C%20vim%20pelo%20Instagram%20%F0%9F%98%8A%20Tudo%20bem%3F" 
              variant="primary"
              icon={<MessageCircle size={20} />}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <LinkButton label="Avaliação Psicológica/Neuropsicológica" href="https://wa.me/5547988602129?text=Oi%20Juci%2C%20vim%20pelo%20Instagram%20%F0%9F%98%8A%20Tudo%20bem%3F" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <LinkButton label="Psicologia Infantil e Adolescente" href="https://wa.me/5547988602129?text=Oi%20Juci%2C%20vim%20pelo%20Instagram%20%F0%9F%98%8A%20Tudo%20bem%3F" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <LinkButton label="Orientação Parental" href="https://wa.me/5547988602129?text=Oi%20Juci%2C%20vim%20pelo%20Instagram%20%F0%9F%98%8A%20Tudo%20bem%3F" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <LinkButton label="Burnout Materno" href="https://wa.me/5547988602129?text=Oi%20Juci%2C%20vim%20pelo%20Instagram%20%F0%9F%98%8A%20Tudo%20bem%3F" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <LinkButton label="Palestras" href="https://wa.me/5547988602129?text=Oi%20Juci%2C%20vim%20pelo%20Instagram%20%F0%9F%98%8A%20Tudo%20bem%3F" />
          </motion.div>
        </motion.div>

        {/* Social & Footer */}
        <motion.div 
          className="flex flex-col items-center gap-10 text-center mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a 
            href="https://www.instagram.com/jussi.castro/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-brand-ink/70 hover:text-brand-terracotta transition-all duration-300 font-medium tracking-wide"
          >
            <div className="p-2 rounded-full bg-white/50 group-hover:bg-brand-terracotta/10 transition-colors">
              <Instagram size={22} />
            </div>
            <span className="text-lg">@jussi.castro</span>
          </a>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-ink/20 to-transparent"></div>

          <p className="text-base md:text-lg text-brand-ink/50 font-light tracking-wide max-w-xs">
            Você não precisa dar conta de tudo sozinho.
          </p>
        </motion.div>
      </div>
    </>
  );
}
