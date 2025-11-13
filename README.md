# VyomGarud Landing Page

A modern, responsive landing page for VyomGarud - a UAV/drone systems company specializing in military-grade unmanned aerial vehicles.

## 🚀 Features

- **Modern Design**: Dark, futuristic aesthetic with military-grade professionalism
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Subtle Framer Motion animations for enhanced user experience
- **TypeScript**: Built with Next.js 16 and TypeScript for type safety
- **Tailwind CSS**: Utility-first styling with custom dark theme

## 🎨 Design System

- **Colors**: Charcoal (#111827), White (#ffffff), Orange (#ff7b00)
- **Fonts**: Poppins (primary), Inter, Montserrat
- **Theme**: Dark mode with orange accents

## 📱 Sections

1. **Hero** - Company branding with compelling tagline and CTAs
2. **About** - Mission statement and company overview
3. **Capabilities** - 4 key service areas with icons
4. **Highlights** - 3 core feature bullets
5. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Poppins, Inter, Montserrat)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd vyomgarud-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles and Tailwind config
└── components/
    ├── Hero.tsx        # Hero section
    ├── About.tsx       # About section
    ├── Capabilities.tsx # Capabilities grid
    ├── Highlights.tsx  # Key highlights
    └── Contact.tsx     # Contact form and footer
```

## 🎯 Development Notes

- Components use `'use client'` directive for client-side rendering with Framer Motion
- Animations trigger on scroll using `whileInView`
- Responsive design uses Tailwind's mobile-first approach
- Color scheme uses CSS custom properties for consistency

## 📸 Screenshots

_(Add screenshots here)_

## 🌐 Deployment

Deploy on Vercel, Netlify, or any static hosting platform:

```bash
npm run build
```

The `out/` directory contains the production build.

## 📞 Contact

For inquiries: +91 8881444693

## 📝 License

This project is part of the VyomGarud Web Developer Intern Assessment.
