# Quick Start Guide

## 🚀 Get Running in 3 Steps

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

## ✏️ Essential Customizations

### 1. Update Personal Info (5 min)

**Search & Replace:**
- `Indiser` → Your Name
- `contact@indiser.dev` → Your Email
- `https://github.com/indiser` → Your GitHub
- `https://linkedin.com/in/indiser` → Your LinkedIn

### 2. Update Projects (10 min)

Edit `src/data/projects.ts`:
```typescript
{
  title: "Your Project",
  repoName: "username/repo",
  description: "Project description",
  tags: ["Tech1", "Tech2"],
  link: "https://...",
  github: "https://github.com/..."
}
```

### 3. Update Content (10 min)

**Hero Section** (`src/components/Hero.tsx`):
- Line 29: Change headline
- Line 37: Update description

**About Section** (`src/components/About.tsx`):
- Line 20: Update bio
- Lines 24-26: Modify skills

**Stats** (`src/components/Stats.tsx`):
- Lines 5-10: Update metrics

### 4. Update Metadata (5 min)

Edit `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your description',
  // ...
};
```

### 5. Update Domain (2 min)

- `src/app/sitemap.ts`: Change URL
- `public/robots.txt`: Change domain

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Test production build
npm start

# Deploy to Vercel
# Push to GitHub, then import in Vercel
```

## 🎨 Customization Tips

### Change Colors
Edit `src/app/globals.css` - search for color values

### Change Fonts
Edit `src/app/layout.tsx` - import different Google Fonts

### Add Sections
Import and add to `src/app/page.tsx`

### Remove Sections
Comment out unwanted imports in `src/app/page.tsx`

## 🐛 Common Issues

**GitHub API Rate Limit?**
- Add `.env.local` with `GITHUB_TOKEN=your_token`

**Styling Not Working?**
- Delete `.next` folder
- Run `npm run dev` again

**Build Errors?**
- Check all imports
- Ensure all files are saved
- Run `npm install` again

## 📚 Documentation

- Full docs: `README.md`
- Setup guide: `SETUP.md`
- Enhancements: `ENHANCEMENTS.md`

## 🆘 Need Help?

Check the documentation files or:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

**That's it! You're ready to go! 🎉**
