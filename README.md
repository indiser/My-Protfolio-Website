# Portfolio Website

A modern, high-performance portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** with App Router and React Server Components
- 🎨 **Tailwind CSS 4** for styling
- ✨ **Framer Motion** for smooth animations
- 📱 **Fully Responsive** design
- 🎯 **SEO Optimized** with metadata
- 🚀 **Performance Optimized** with lazy loading
- 🎭 **GitHub API Integration** for live project stats
- 🌙 **Dark Mode** by default

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

### Update Personal Information

1. **Projects**: Edit `src/data/projects.ts`
2. **Hero Section**: Modify `src/components/Hero.tsx`
3. **About Section**: Update `src/components/About.tsx`
4. **Contact Info**: Change email in `src/components/Contact.tsx` and `src/components/Footer.tsx`
5. **Social Links**: Update URLs in `src/components/Navigation.tsx` and `src/components/Contact.tsx`
6. **Metadata**: Edit `src/app/layout.tsx`

### Tech Stack

Update the technologies in `src/components/TechStack.tsx`

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── WorkGrid.tsx
│   └── ...
├── data/            # Data files
└── lib/             # Utility functions
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Performance

- Optimized images with Next.js Image
- Code splitting and lazy loading
- Minimal JavaScript bundle
- Server-side rendering for better SEO

## License

MIT License - feel free to use this for your own portfolio!
