# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Checklist

### Essential Updates

- [ ] Update personal info in `src/components/Hero.tsx`
- [ ] Change email addresses throughout the project
- [ ] Update social media links in `src/components/Navigation.tsx` and `src/components/Contact.tsx`
- [ ] Modify projects in `src/data/projects.ts`
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Change domain in `src/app/sitemap.ts` and `public/robots.txt`

### Optional Updates

- [ ] Customize tech stack in `src/components/TechStack.tsx`
- [ ] Update stats in `src/components/Stats.tsx`
- [ ] Modify skills in `src/components/About.tsx`
- [ ] Add testimonials (uncomment in `src/app/page.tsx`)
- [ ] Change color scheme in `src/app/globals.css`

## Component Overview

### Core Components

- **Navigation**: Fixed header with social links
- **Hero**: Main landing section with CTA
- **Stats**: Achievement metrics
- **TechStack**: Animated technology showcase
- **About**: Skills and expertise
- **WorkGrid**: Project portfolio with GitHub stats
- **Contact**: Contact form and social links
- **Footer**: Copyright and credits
- **ScrollToTop**: Floating scroll button

### UI Components

Located in `src/components/ui/`:
- Badge
- Button
- Card
- Separator

## Features

### Animations
- Smooth scroll behavior
- Framer Motion animations
- Hover effects on cards
- Scroll-triggered animations

### Performance
- Server-side rendering
- Optimized images
- Code splitting
- Lazy loading

### SEO
- Meta tags
- Open Graph
- Twitter Cards
- Sitemap
- Robots.txt

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## Troubleshooting

### GitHub API Rate Limit
If you see missing project stats, you may have hit the GitHub API rate limit. Add a GitHub token:

1. Create a `.env.local` file
2. Add: `GITHUB_TOKEN=your_token_here`
3. Update `src/lib/github.ts` to use the token

### Styling Issues
Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## Support

For issues or questions, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
