# 🚀 [Inclusa Vision](https://inclusavision.com.br) — Mobilidade sem Barreiras

Este projeto é uma solução tecnológica focada em acessibilidade real no transporte público. O Inclusa Vision atua como um guia autônomo, integrando radiofrequência (RF) e comunicação NFC para oferecer navegação independente, feedback sonoro em tempo real e resposta tátil a pessoas com deficiência visual.

---

### 📊 Stack Tecnológica & Status da Aplicação

![Status da Aplicação](https://img.shields.io/badge/Status-Em_Produ%C3%A7%C3%A3o-32D74B?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

---

# 💡 Arquitetura & Conceitos de Engenharia

O sistema foi arquitetado combinando design inclusivo de alto nível com tecnologias de processamento local, garantindo que o usuário nunca fique desamparado por falta de conexão.

- **Acessibilidade Nativa (WCAG 2.1 AA):** Interface desenvolvida especificamente para ser lida por sistemas como VoiceOver e TalkBack, com áreas de toque ampliadas e alto contraste.
- **Processamento Edge (Offline-first):** Algoritmos de decisão executam diretamente no dispositivo do usuário, eliminando a dependência de um servidor central e garantindo resposta imediata.
- **Integração Hardware/Software:** Comunicação direta com transmissores de Radiofrequência (433 MHz) nas paradas e Tags NFC (ISO 14443) nos veículos.
- **UI/UX Coreográfica:** Utilização do `framer-motion` para criar feedbacks visuais fluidos e animações baseadas em scroll (Parallax) que não prejudicam a performance.
- **Deploy Contínuo (CI/CD):** Pipeline automatizada com GitHub Actions para publicações diretas na nuvem.

---

# 📋 Funcionalidades Principais

## 📍 Rastreamento e Rede RF Local
Posicionamento em tempo real através da rede de transportes. Transmissores nas paradas formam uma rede de baixo consumo garantindo operação contínua mesmo em zonas "cegas" de operadoras móveis.

---

## 🔊 Feedback Sonoro & Tátil
- **Áudio:** Síntese de voz ativa notifica a chegada de veículos, número de paradas e alertas de rota.
- **Háptico:** Padrões de vibração codificados comunicam informações críticas (ex: pulsos curtos para aproximação, pulsos longos confirmando embarque).

---

## 🛜 Leitura NFC Instantânea
Ao encostar o smartphone nas tags dos veículos ou estações, o sistema captura o ID da linha, destino final e lotação sem necessidade de internet.

---

# 📂 Estrutura do Projeto

```text
InclusaV2/
├── public/                      # Assets estáticos globais (favicons, imagens otimizadas)
│   ├── app.png                  # Mockup da interface
│   └── logo-inclusav.png        # Identidade visual
│
├── src/                         # Código-fonte principal
│   ├── assets/                  # Ícones em SVG e assets vetoriais
│   ├── App.jsx                  # Componentização principal e seções da Landing Page
│   ├── main.jsx                 # Ponto de entrada do React
│   └── index.css                # Configurações globais do Tailwind
│
├── .github/workflows/           # Automação de deploy (GitHub Actions)
├── tailwind.config.js           # Diretrizes de estilização
└── vite.config.js               # Configurações de build e roteamento
