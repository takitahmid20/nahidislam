# Asif Mahmud Sajib Bhuiyan - Campaign Website

Political campaign website for **Asif Mahmud Sajib Bhuiyan**, Independent Candidate for **Dhaka-10 Constituency**, Bangladesh.

## 🚀 Features

- ✅ **Fully Responsive** - Mobile-first design, optimized for all devices
- ✅ **Bilingual Support** - Complete English/Bangla language switching
- ✅ **Modern Animations** - Powered by Motion (Framer Motion)
- ✅ **Dynamic Asymmetry** - Premium political campaign design aesthetic
- ✅ **Performance Optimized** - Built with Vite for lightning-fast load times
- ✅ **Production Ready** - Configured for Vercel deployment

## 📦 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Motion** - Smooth animations and interactions
- **Lucide React** - Beautiful icon library

## 🎨 Design Philosophy

**"Dynamic Asymmetry"** - A modern political campaign design featuring:
- Clean, robust typography with Kohinoor Bangla font for Bengali
- Future-forward digital aesthetic
- Bangladeshi flag colors (emerald green & red) with electric blue accents
- Professional, credible, and energetic visual language
- Asymmetric layout with floating interactive elements

## 🏗️ Project Structure

```
/
├── components/
│   ├── HeroSection.tsx              # Animated hero with candidate photo
│   ├── JulyRevolutionSection.tsx    # July Revolution journey
│   ├── PublicServiceSection.tsx     # Public service timeline
│   ├── CoreValuesSection.tsx        # Core values & commitments
│   ├── FutureVisionSection.tsx      # Vision for Dhaka-10
│   ├── CallToActionSection.tsx      # Binary choice CTA
│   └── ui/                          # Reusable UI components
├── context/
│   └── LanguageContext.tsx          # Bilingual system (EN/BN)
├── styles/
│   └── globals.css                  # Global styles & typography
├── App.tsx                          # Main application
├── main.tsx                         # Application entry point
└── index.html                       # HTML template
```

## 🌐 Sections

1. **Hero Section** - Dynamic introduction with candidate photo
2. **July Revolution** - Leadership during the student movement
3. **Public Service** - Career & achievements timeline
4. **Core Values** - Vision & commitments with accordion UI
5. **Future Vision** - Plans for Dhaka-10 constituency
6. **Call to Action** - Binary choice engagement

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/takitahmid20/Asifmahmudswebsite.git

# Navigate to project directory
cd Asifmahmudswebsite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Development

### Local Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

Builds the app for production to the `dist` folder.

## 🌍 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
npx vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

**Vercel will auto-detect:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🖼️ Customizing the Candidate Photo

The hero section currently uses a placeholder image from Unsplash. To use the actual candidate photo:

**Option 1: Replace with External URL**
```typescript
// In /components/HeroSection.tsx
const candidateImage = 'https://your-cdn.com/asif-mahmud-photo.jpg';
```

**Option 2: Add to Public Folder**
1. Add image to `/public/asif-mahmud.jpg`
2. Update import:
```typescript
const candidateImage = '/asif-mahmud.jpg';
```

**Option 3: Import as Asset**
1. Add image to `/src/assets/asif-mahmud.jpg`
2. Update import:
```typescript
import candidateImage from '../assets/asif-mahmud.jpg';
```

## 🌐 Language Support

The website supports English and Bangla with dynamic font switching:

- **English**: System font stack
- **Bangla**: Kohinoor Bangla (loaded via Google Fonts)

Language toggle is available in the top-right corner of all sections.

### Adding/Editing Translations

Edit translations in `/context/LanguageContext.tsx`:

```typescript
const translations = {
  en: {
    // English translations
  },
  bn: {
    // Bangla translations
  }
};
```

## 📄 License

This project is created for the political campaign of Asif Mahmud Sajib Bhuiyan.

## 🤝 Contributing

This is a political campaign website. For suggestions or improvements, please contact the campaign team.

## 📞 Contact

**Asif Mahmud Sajib Bhuiyan**
- Constituency: Dhaka-10
- Affiliation: Independent Candidate
- Website: [Your Website URL]

---

**Built with ❤️ for a better Dhaka-10**

*Last Updated: December 12, 2024*
