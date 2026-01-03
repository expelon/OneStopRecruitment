# TeamStaffing - Professional Staffing Agency Website

A modern, fully responsive staffing agency website built with Next.js, TypeScript, and Tailwind CSS. This project features a clean, professional design with mobile-first responsive layout matching the visual structure and style of leading staffing agencies.

## Features

- **Modern Tech Stack**: Next.js 13+ (App Router), TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design approach with responsive breakpoints
- **Professional Design**: Clean, modern aesthetic matching industry standards
- **Reusable Components**: Modular architecture with TypeScript interfaces
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Smooth Animations**: Subtle transitions and hover effects
- **Mobile Menu**: Hamburger navigation for mobile devices
- **Touch-Friendly**: Optimized spacing and button sizes for mobile

## Project Structure

```
project/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main homepage
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation with mobile menu
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Services.tsx         # Services grid
│   ├── ServiceCard.tsx      # Reusable service card
│   ├── JobListings.tsx      # Job opportunities section
│   ├── JobCard.tsx          # Reusable job card
│   ├── Industries.tsx       # Industries served
│   ├── Testimonials.tsx     # Client testimonials slider
│   ├── Blog.tsx             # Latest insights/blog
│   └── Footer.tsx           # Footer with contact info
└── types/
    └── index.ts             # TypeScript interfaces

```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository or extract the project files

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Responsive Breakpoints

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px (sm, md breakpoints)
- **Desktop**: 1024px+ (lg, xl breakpoints)

## Sections Overview

### 1. Header/Navigation
- Fixed position with scroll effects
- Logo with brand colors
- Desktop: Horizontal navigation
- Mobile: Hamburger menu with slide-down
- CTA button for "Get Started"

### 2. Hero Section
- Full-width banner with gradient background
- Compelling headline and subheading
- Dual CTA buttons
- Statistics showcase
- Professional image (desktop only)

### 3. Services Section
- Grid layout (1 col mobile, 2 col tablet, 4 col desktop)
- Icon-based service cards
- Hover effects and transitions
- Services: Direct Hire, Contract, Temporary, Executive Search

### 4. Job Listings
- Responsive grid of job cards
- Job categories and types
- Location and time information
- "View Details" CTA per job
- Sample jobs across various industries

### 5. Industries We Serve
- Icon-based industry cards
- Responsive grid layout
- 8 key industries covered
- Hover effects with color transitions

### 6. Testimonials
- Client testimonials with carousel
- Star ratings
- Client photos and company info
- Navigation dots and arrows
- Auto-transition capability

### 7. Blog/Insights
- Latest articles with images
- Category tags
- Publication dates
- Responsive card grid
- "View All Articles" CTA

### 8. Footer
- Company information
- Quick links navigation
- Contact information
- Social media links
- Multi-column layout (stacks on mobile)
- Privacy links and copyright

## Customization

### Colors
The color scheme uses a neutral gray palette with blue accents. Modify in `tailwind.config.ts` or use Tailwind's utility classes:

- Primary: Blue (600-700)
- Secondary: Gray (900)
- Accent: Various industry colors
- Background: White/Gray-50

### Content
Update sample content in component files:
- Jobs: `components/JobListings.tsx`
- Services: `components/Services.tsx`
- Testimonials: `components/Testimonials.tsx`
- Blog posts: `components/Blog.tsx`
- Industries: `components/Industries.tsx`

### Images
Replace placeholder images from Pexels with your own:
- Hero image
- Blog post images
- Testimonial avatars

## Technology Stack

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized images with Next.js Image component ready
- Lazy loading for off-screen content
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind
- Fast page loads with Next.js App Router

## Deployment

This project is ready to deploy on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## License

This project is open source and available for use in your projects.

## Support

For questions or issues, please refer to the Next.js documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
