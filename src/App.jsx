import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Radio,
  Smartphone,
  Volume2,
  Navigation,
  Vibrate,
  ChevronDown,
  ArrowRight,
  MapPin,
  Wifi,
  Shield,
  Users,
  Mail,
  Menu,
  X,
  Zap,
  Activity,
  Code,
  Briefcase,
  Eye // Mantido caso queira usar no footer
} from "lucide-react";

/**
 * Variantes de animação global
 */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.03, y: -6, transition: { duration: 0.3, ease: "easeOut" } },
};

/**
 * Wrapper de Animação de Scroll
 */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Header e Navegação
 */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Solução", href: "#solution" },
    { label: "Funcionalidades", href: "#features" },
    { label: "Como Funciona", href: "#how" },
    { label: "App", href: "#app" },
    { label: "Equipe", href: "#team" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-[0_4px_32px_rgba(139,92,246,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
        {/* Nova Logo customizada da Navbar */}
        <img 
          src="/logo-inclusav.png" 
          alt="Logo Inclusa Vision" 
          className="w-8 h-8 object-contain drop-shadow-[0_0_12px_rgba(139,92,246,0.4)]"
        />
          <span className="text-white font-semibold tracking-tight text-lg">
            Inclusa<span className="text-violet-400">Vision</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/60 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          Saiba Mais
        </motion.a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 hover:text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu Responsivo (Mobile) */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden backdrop-blur-xl bg-black/80 border-t border-white/10 px-6 py-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/70 hover:text-white text-sm font-medium border-b border-white/5 last:border-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

/**
 * Seção Hero (Início)
 */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-violet-700/25 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-500/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-900/10 blur-[160px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
        >
          <Radio size={12} />
          Tecnologia RF + NFC · Acessibilidade Real
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tighter mb-6"
        >
          Mobilidade sem
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-300 to-white">
            barreiras.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          O Inclusa Vision integra radiofrequência e comunicação NFC para oferecer
          navegação autônoma, feedback sonoro em tempo real e resposta tátil a pessoas
          com deficiência visual no transporte público.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#solution"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(139,92,246,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-base shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            Explorar a Solução
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#how"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 hover:border-violet-500/50 text-white/80 hover:text-white font-medium px-8 py-4 rounded-full transition-all duration-200 text-base"
          >
            Como Funciona
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Seção de Solução (Problema e Resposta)
 */
function Solution() {
  return (
    <section id="solution" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-block text-violet-400 text-xs font-bold tracking-widest uppercase mb-4">
            O Desafio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            O transporte público é inacessível
            <span className="text-violet-400"> para milhões.</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-20">
            Mais de 6,5 milhões de brasileiros com deficiência visual enfrentam
            infraestrutura de mobilidade que ignora as suas necessidades. Rotas sem
            orientação, ônibus sem identificação sonora e plataformas sem referência
            tátil criam dependência e isolamento.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl bg-white/5 border border-white/10 p-8 overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-2xl rounded-full" />
            <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
              Problema Identificado
            </span>
            <ul className="space-y-4">
              {[
                "Ausência de sistemas de identificação de veículos em tempo real",
                "Plataformas sem feedback direcional para embarque",
                "Dependência integral de terceiros para navegação básica",
                "Falta de integração entre dispositivos de assistência e infraestrutura",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl bg-violet-600/10 border border-violet-500/25 p-8 overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 blur-2xl rounded-full" />
            <span className="inline-flex items-center gap-2 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
              Nossa Resposta
            </span>
            <ul className="space-y-4">
              {[
                "Tags NFC instaladas nos veículos transmitem ID da linha ao aproximar o dispositivo",
                "Sensores RF nas paradas enviam sinais de posicionamento contínuos",
                "Aplicativo converte dados de rede em instruções de áudio personalizadas",
                "Feedback vibratório codificado orienta o usuário sem depender da visão",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <Reveal delay={0.2} className="flex justify-center">
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              { icon: Radio, label: "Radiofrequência 433 MHz" },
              { icon: Wifi, label: "NFC ISO 14443" },
              { icon: Shield, label: "Criptografia AES-128" },
              { icon: Activity, label: "Latência < 120ms" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 text-xs font-medium px-4 py-2 rounded-full"
              >
                <Icon size={13} className="text-violet-400" />
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Seção de Funcionalidades
 */
const featuresData = [
  {
    icon: Navigation,
    title: "Rastreamento GPS",
    description:
      "Posicionamento em tempo real integrado na rede de transportes públicos. O sistema cruza coordenadas GPS com o mapa de linhas para calcular a chegada e a distância até a próxima parada.",
    tag: "Navegação",
  },
  {
    icon: Volume2,
    title: "Feedback Sonoro",
    description:
      "A síntese de voz ativa notifica o usuário sobre a chegada de veículos, identificação da linha, número de paradas restantes e alertas de rota com clareza e baixa latência.",
    tag: "Áudio",
  },
  {
    icon: Vibrate,
    title: "Resposta Tátil",
    description:
      "Padrões de vibração codificados comunicam informações críticas: impulsos curtos indicam aproximação do veículo, impulsos longos confirmam embarque e padrão composto sinaliza chegada ao destino.",
    tag: "Háptico",
  },
  {
    icon: Wifi,
    title: "Leitura NFC",
    description:
      "Ao encostar o celular em qualquer tag instalada no veículo ou parada, o sistema captura ID da linha, destino final e capacidade atual sem necessitar de conexão à internet.",
    tag: "NFC",
  },
  {
    icon: Radio,
    title: "Rede RF Local",
    description:
      "Transmissores de radiofrequência nas paradas formam uma rede de baixo consumo que funciona offline, garantindo operação contínua mesmo em zonas com fraca cobertura móvel.",
    tag: "RF",
  },
  {
    icon: Zap,
    title: "Processamento Edge",
    description:
      "Algoritmos de decisão executam diretamente no dispositivo do usuário, eliminando a dependência de um servidor central e garantindo resposta imediata mesmo com conectividade intermitente.",
    tag: "Edge",
  },
];

function Features() {
  return (
    <section id="features" className="py-32 bg-[#050508] relative">
      <div className="absolute right-0 top-0 w-96 h-96 bg-violet-700/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-block text-violet-400 text-xs font-bold tracking-widest uppercase mb-4">
            Funcionalidades
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Seis camadas de
            <span className="text-violet-400"> autonomia.</span>
          </h2>
          <p className="text-white/50 text-lg mb-16 leading-relaxed">
            Cada módulo foi projetado para operar de forma independente e em conjunto,
            garantindo redundância e confiabilidade em cenários reais.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featuresData.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                variants={cardHover}
                className="h-full relative rounded-2xl bg-white/[0.04] border border-white/10 p-7 overflow-hidden group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-violet-600/0 group-hover:bg-violet-600/20 blur-2xl transition-all duration-500 rounded-full" />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-violet-600/20 border border-violet-500/25 flex items-center justify-center group-hover:bg-violet-600/30 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300">
                    <f.icon size={20} className="text-violet-300" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-violet-500/70 border border-violet-500/20 px-2.5 py-1 rounded-full">
                    {f.tag}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Seção de Processo (Como Funciona)
 */
const stepsData = [
  {
    number: "01",
    title: "Instalação na Infraestrutura",
    description:
      "Tags NFC e transmissores RF são fixados nos veículos e nas paradas. Cada dispositivo recebe um identificador único e é registrado na rede central do sistema.",
  },
  {
    number: "02",
    title: "Detecção e Leitura",
    description:
      "Ao aproximar-se de uma parada, o celular do usuário detecta o sinal RF da estação e exibe informações sobre as linhas disponíveis. O toque em qualquer tag NFC confirma a linha desejada.",
  },
  {
    number: "03",
    title: "Processamento e Rota",
    description:
      "O aplicativo calcula a rota ideal, combina dados GPS em tempo real com o mapa da rede e prepara a sequência de instruções de áudio e vibração para toda a jornada.",
  },
  {
    number: "04",
    title: "Guia em Tempo Real",
    description:
      "Durante o percurso, o sistema emite alertas sonoros e táteis a cada evento relevante: chegada do veículo, confirmação de embarque, passagem por cada parada e chegada ao destino.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-800/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-block text-violet-400 text-xs font-bold tracking-widest uppercase mb-4">
            Como Funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-16 leading-tight">
            Da parada até ao destino,
            <span className="text-violet-400"> sem barreiras.</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Fio conector da timeline */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/0 via-violet-600/40 to-violet-600/0" />

          <div className="space-y-12">
            {stepsData.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div
                  className={`relative flex items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"} z-10`}>
                    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-7 backdrop-blur-sm">
                      <h3 className="text-white font-semibold text-xl mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>

                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20 w-14 h-14 rounded-full bg-black border-2 border-violet-500/60 flex items-center justify-center shrink-0 shadow-[0_0_24px_rgba(139,92,246,0.4)]">
                    <span className="text-violet-300 font-bold text-sm">{step.number}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Seção do Aplicativo (Mockup com Animação Parallax 3D)
 */
function AppSection() {
  const sectionRef = useRef(null);

  // ── Scroll tracking vinculado à seção ──────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ── Suavização global com spring ───────────────────────────────────────────
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    restDelta: 0.001,
  });

  // ── Parallax vertical: entra de baixo (120px) e sobe até -40px ─────────────
  const phoneY = useTransform(smoothProgress, [0, 0.55, 1], [120, -10, -40]);

  // ── Rotação 3D: inclina 18° no início, alinha-se ao centro, inclina -6° no fim
  const phoneRotateX = useTransform(smoothProgress, [0, 0.45, 1], [18, 0, -6]);

  // ── Opacidade: aparece ao entrar na viewport ────────────────────────────────
  const phoneOpacity = useTransform(smoothProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.6]);

  // ── Escala sutil: cresce levemente ao centralizar ───────────────────────────
  const phoneScale = useTransform(smoothProgress, [0, 0.45, 1], [0.88, 1, 0.96]);

  return (
    <section
      id="app"
      ref={sectionRef}
      className="py-32 bg-[#050508] relative overflow-hidden"
    >
      {/* Ambient glow de fundo */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-64 h-64 bg-violet-800/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Coluna de Texto ─────────────────────────────────────────────── */}
          <div className="flex-1 lg:max-w-[480px]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-violet-400 text-xs font-bold tracking-widest uppercase mb-4">
                O Aplicativo
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Interface projetada para
                <span className="text-violet-400"> acessibilidade real.</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-10">
                O InclusaV foi desenvolvido seguindo as diretrizes WCAG 2.1 AA e testado
                com usuários reais. Alto contraste, áreas de toque ampliadas e navegação
                por gestos são padrão — não acessórios.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              {[
                { icon: Volume2,    label: "Leitura de tela nativa com VoiceOver e TalkBack" },
                { icon: MapPin,     label: "Mapa háptico com descrição de rota por áudio" },
                { icon: Smartphone, label: "Interface de alto contraste comutável" },
                { icon: Zap,        label: "Modo offline com cache de rotas recentes" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-white/65 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-violet-300" />
                  </span>
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Coluna do Mockup Animado ─────────────────────────────────────── */}
          <div className="flex-1 flex justify-center items-center" style={{ perspective: "1200px" }}>
            <motion.div
              style={{
                y: phoneY,
                rotateX: phoneRotateX,
                opacity: phoneOpacity,
                scale: phoneScale,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              {/* Glow difuso atrás do aparelho */}
              <div className="absolute -inset-6 rounded-[56px] bg-violet-600/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-52 h-20 bg-violet-500/30 blur-2xl rounded-full pointer-events-none" />

              {/* ── Moldura física do celular ─────────────────────────────── */}
              <div
                className="
                  relative
                  w-[270px] h-[560px]
                  rounded-[52px]
                  bg-neutral-950
                  border border-white/15
                  shadow-[
                    0_0_0_1px_rgba(255,255,255,0.06),
                    0_32px_80px_rgba(0,0,0,0.9),
                    0_0_60px_rgba(139,92,246,0.25),
                    inset_0_0_0_1px_rgba(255,255,255,0.04)
                  ]
                  overflow-hidden
                "
              >
                {/* Reflexo de borda superior */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Notch dinâmica */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neutral-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700/80" />
                </div>

                {/* ── Área de tela com respiro e bordas arredondadas ─────── */}
                <div
                  className="
                    absolute
                    inset-[6px]
                    rounded-[44px]
                    bg-black
                    overflow-hidden
                  "
                >
                  {/* Imagem da interface — respira em relação ao bezel */}
                  <div className="absolute inset-[6px] rounded-[38px] overflow-hidden">
                  <img
                  src="/app.png"
                  alt="Demonstração do Aplicativo Inclusa Vision"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
                    {/* Overlay sutil para integrar a imagem à moldura escura */}
                    <div className="absolute inset-0 rounded-[38px] ring-1 ring-inset ring-black/30 pointer-events-none" />
                  </div>
                </div>

                {/* Botão lateral de volume (decorativo) */}
                <div className="absolute left-[-3px] top-28 w-1 h-8 rounded-l-full bg-neutral-800" />
                <div className="absolute left-[-3px] top-40 w-1 h-8 rounded-l-full bg-neutral-800" />
                {/* Botão power (decorativo) */}
                <div className="absolute right-[-3px] top-32 w-1 h-12 rounded-r-full bg-neutral-800" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * Seção Equipe
 */
const teamData = [
  { name: "Pedro Cortez", role: "Full-Stack Development" },
  { name: "Nicollas Marcio", role: "Hardware & RF Engineering" },
  { name: "Guilherme Amaral", role: "API Architecture" },
  { name: "Gabriel Maluf", role: "NFC Integration & Firmware" },
  { name: "Luis Gustavo", role: "Data & Systems Analysis" },
  { name: "Victor Akyio", role: "Mobile Development & QA" },
];

function Team() {
  return (
    <section id="team" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-violet-700/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-block text-violet-400 text-xs font-bold tracking-widest uppercase mb-4">
            Quem Somos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Construído por quem
            <span className="text-violet-400"> entende o problema.</span>
          </h2>
          <p className="text-white/50 text-lg mb-16 leading-relaxed">
            Uma equipe multidisciplinar de engenharia e design, unida pelo objetivo de
            tornar o transporte público genuinamente acessível.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-7 overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-violet-600/0 group-hover:bg-violet-600/15 blur-2xl transition-all duration-500 rounded-full" />

              <div className="w-14 h-14 rounded-2xl bg-violet-600/20 border border-violet-500/25 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                <Users size={22} className="text-violet-300" />
              </div>

              <h3 className="text-white font-semibold text-lg tracking-tight mb-1">
                {member.name}
              </h3>
              <p className="text-violet-400/80 text-sm font-medium">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Seção de Contato e Rodapé
 */
function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#050508] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-80 bg-violet-700/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <span className="inline-block text-violet-400 text-xs font-bold tracking-widest uppercase mb-4">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Vamos construir
            <span className="text-violet-400"> juntos.</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Interessado em implementar o Inclusa Vision, colaborar com a pesquisa ou
            apoiar o projeto? Entre em contato com a equipe.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.a
            href="mailto:contato@inclusavision.com.br"
            whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(139,92,246,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-10 py-5 rounded-full transition-colors duration-200 text-base shadow-[0_0_30px_rgba(139,92,246,0.35)] mb-16"
          >
            <Mail size={20} />
            contato@inclusavision.com.br
          </motion.a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex items-center justify-center gap-4 mb-20">
            {[
              { href: "https://github.com/pedr0coder", icon: Code, label: "GitHub" },
              { href: "https://www.linkedin.com/in/pedro-cortez-ba2933270", icon: Briefcase, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/15 hover:border-violet-500/50 hover:bg-violet-600/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </Reveal>

        {/* Informações do Rodapé */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.5)]">
              <Eye size={12} className="text-white" />
            </span>
          </div>
          <p className="text-white/25 text-xs text-center">
            Projeto acadêmico de acessibilidade em transportes públicos · {new Date().getFullYear()}
          </p>
          <p className="text-white/25 text-xs">Todos os direitos reservados</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Componente Raiz da Aplicação
 */
export default function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter',sans-serif] antialiased">
      <Navbar />
      <Hero />
      <Solution />
      <Features />
      <HowItWorks />
      <AppSection />
      <Team />
      <Contact />
    </div>
  );
}
