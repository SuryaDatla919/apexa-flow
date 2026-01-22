# Apexa Flow - Landing Page

AI Automation & Website Solutions for SMBs

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository or drag & drop this folder
5. Framework preset will auto-detect "Vite"
6. Click "Deploy"

**Your site will be live in ~1 minute!**

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `dist` folder (after running `npm run build`)
3. Your site is live!

Or connect via Git:
1. Push to GitHub
2. Connect Netlify to your repo
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🎨 Customization

### Replace Logo
Edit `src/components/Header.tsx` and `src/components/Footer.tsx`:
```typescript
// Replace the SVG data URL with your actual logo
const apexLogo = "/logo.png"; // Put your logo in the public folder
```

### Update Contact Info
Search and replace in components:
- Email: `contact@apexaflow.com`
- Phone: `(240) 907-1427`

### Colors
Edit `src/index.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --gradient-primary-start: #4f46e5;
  --gradient-primary-end: #7c3aed;
}
```

## 📁 Project Structure

```
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── ui/       # shadcn/ui components
│   │   └── figma/    # Figma-generated components
│   ├── lib/          # Utilities
│   ├── App.tsx       # Main app component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **Recharts** - Data visualization

## 📞 Support

For questions or customization help:
- Email: contact@apexaflow.com
- Phone: (240) 907-1427
