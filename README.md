# Maxime Drouault - Developer Portfolio

## Project Overview

A modern, fully-responsive developer portfolio built with **Next.js** and **React** featuring an integrated AI-powered chatbot assistant. This single-page application showcases professional experience, technical skills, projects, and education with a polished UI and advanced animations. The portfolio includes a contact form powered by EmailJS and live GitHub profile integration.

## Key Features

- **Dynamic Portfolio Sections** - Organized showcase of skills, experience, education, and projects with smooth animations
- **AI-Powered Chatbot** - Integrated assistant UI with real-time conversation streaming and markdown support
- **Contact Form** - Secure email integration via EmailJS with server-side validation
- **GitHub Profile Integration** - Live data fetching from GitHub API for profile information
- **Responsive Design** - Mobile-first approach using Bootstrap and custom styling
- **Type-Safe Development** - Full TypeScript support with strict mode enabled
- **SEO Optimized** - Complete metadata, Open Graph, Twitter Cards, and PWA manifest
- **Static Site Generation** - Optimized performance with Next.js SSG

## Tech Stack

**Frontend Framework**
- Next.js 16.0.1 - React framework with built-in optimization
- React 18.3.1 - UI library
- TypeScript 5.9.3 - Type safety

**UI & Styling**
- Bootstrap 5.0.2 - CSS framework
- Reactstrap 9.2.3 - React components for Bootstrap
- Framer Motion 12.23.24 - Advanced animations
- Radix UI - Accessible component primitives (Avatar, Dialog, Tooltip)
- Lucide React 0.553.0 - SVG icon library

**Animations & Assets**
- React Lottie 1.2.3 - JSON-based animations
- React Reveal 1.2.2 - Scroll-triggered animations
- Iconify React 6.0.2 - Universal icon system

**Communication & AI**
- @assistant-ui/react 0.11.37 - AI assistant interface
- Zustand 5.0.8 - Lightweight state management
- EmailJS 3.x - Email service integration
- Remark GFM - GitHub Flavored Markdown support

**Other Utilities**
- Sharp 0.34.5 - Image optimization
- Headroom.js 0.12.0 - Intelligent header positioning

## Prerequisites

- **Node.js** 22.x or later
- **npm** or **yarn** package manager

## Installation & Setup

**1. Clone the Repository**
```bash
git clone https://github.com/maximedrouault/Portfolio.git
cd Portfolio
```

**2. Install Dependencies**
```bash
npm install
```

**3. Configure Environment Variables**

Two environment configuration templates are provided:

**For Development:**
```bash
cp .env.example.development .env.development
```
Edit `.env.development` and replace the placeholders with your actual credentials:
- `NEXT_PUBLIC_BACKEND_URL` - Set to `http://localhost:8080` (local backend)
- `NEXT_PRIVATE_CHAT_API_KEY` - Your chat API key from backend config
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` - Get from EmailJS dashboard
- `NEXT_PRIVATE_EMAILJS_SERVICE_ID` - Get from EmailJS dashboard
- `NEXT_PRIVATE_EMAILJS_TEMPLATE_ID` - Get from EmailJS dashboard
- `NEXT_PRIVATE_EMAILJS_PRIVATE_KEY` - Get from EmailJS dashboard

**For Production:**
```bash
cp .env.example.production .env.production
```
Edit `.env.production` with your production values:
- `NEXT_PUBLIC_BACKEND_URL` - Your production backend URL (e.g., `https://api.yourdomain.com:8443`)
- All EmailJS credentials should match your production setup

**4. Run Development Server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

**5. Build for Production**
```bash
npm run build
npm start
```

## Project Structure

```
Portfolio/
├── components/
│   ├── assistant-ui/          # AI chatbot interface components
│   │   ├── assistant-modal.tsx
│   │   ├── thread.tsx
│   │   ├── markdown-text.tsx
│   │   └── ...
│   ├── ui/                    # Radix UI components
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   └── tooltip.tsx
│   ├── Navigation.tsx         # Header with navigation
│   ├── ContactUs.tsx          # Contact form component
│   ├── GithubProfileCard.tsx  # GitHub profile display
│   ├── ProjectsCard.tsx       # Project showcase cards
│   └── ...
├── containers/                # Page sections
│   ├── Greetings.tsx          # Hero section
│   ├── Skills.tsx             # Technical skills
│   ├── Proficiency.tsx        # Soft skills
│   ├── Experience.tsx         # Work experience
│   ├── Education.tsx          # Education history
│   ├── Projects.tsx           # Project gallery
│   └── Feedbacks.tsx          # Testimonials
├── pages/
│   ├── index.tsx              # Main portfolio page
│   ├── _app.tsx               # Next.js app wrapper
│   └── api/
│       ├── chat.ts            # AI chatbot proxy endpoint
│       └── send-email.ts      # Email sending endpoint
├── public/
│   ├── img/                   # Project images
│   ├── lottie/                # Lottie animation files
│   ├── manifest.json          # PWA manifest
│   └── ...
├── styles/                    # Global styles
├── types/                     # TypeScript type definitions
├── lib/                       # Utility functions
├── portfolio.ts               # Portfolio data configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
└── package.json
```

## Configuration

### Portfolio Data (portfolio.ts)

Update the central portfolio data file to customize content:
- `greetings` - Hero section title and description
- `socialLinks` - Social media profile links
- `skillsSection` - Technical skills with categories
- `educationInfo` - Education history
- `experience` - Work experience entries
- `projects` - Portfolio projects showcase
- `feedbacks` - Testimonials and feedback

### EmailJS Setup

1. Create account at https://www.emailjs.com/
2. Generate API keys and template ID
3. Add credentials to `.env.local`
4. Template must include fields: `from_name`, `from_email`, `message`

### AI Chatbot Backend

The chatbot expects a backend service at `NEXT_PUBLIC_BACKEND_URL` supporting:
- **POST** `/api/chat` - Send user message and receive streaming response
- **Header**: `X-API-KEY: {NEXT_PRIVATE_CHAT_API_KEY}`
- **Request body**: `{ "message": "user message" }`
- **Response**: Server-sent events with streaming text

## Available Scripts

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Create optimized production build
npm start         # Start production server
npm run lint      # Run ESLint and Prettier checks
npm run format    # Auto-format code with Prettier
```

## API Endpoints

### POST /api/chat
Proxy endpoint for AI chatbot requests. Streams responses in real-time.

**Request:**
```javascript
{
  "message": "What is your experience with React?",
  "conversationId": "optional-id"
}
```

**Response:** Server-sent events stream with AI response text

**Authentication:** Requires `X-API-KEY` header (server-side only)

### POST /api/send-email
Secure email sending endpoint using EmailJS REST API.

**Request:**
```javascript
{
  "from_name": "John Doe",
  "from_email": "john@example.com",
  "message": "Hello, I'm interested in..."
}
```

**Response:**
```javascript
{
  "success": true,
  "messageId": "email-id"
}
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Add environment variables in project settings
4. Deploy automatically on push

**Live URL**: https://maximedrouault.vercel.app/

### Environment Variables in Production

Set these in Vercel/hosting platform settings:
- `NEXT_PUBLIC_BACKEND_URL`
- `NEXT_PRIVATE_CHAT_API_KEY`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PRIVATE_EMAILJS_SERVICE_ID`
- `NEXT_PRIVATE_EMAILJS_TEMPLATE_ID`
- `NEXT_PRIVATE_EMAILJS_PRIVATE_KEY`

## Additional Features

### Animations
- Lottie JSON animations for visual enhancement
- React Reveal for scroll-triggered effects
- Framer Motion for smooth transitions
- CSS animations for UI interactions

### Accessibility
- Radix UI components with ARIA support
- Semantic HTML structure
- Keyboard navigation support
- High contrast and readable typography

### Performance Optimizations
- Next.js Image component for optimization
- Static Site Generation (SSG) for fast loads
- Code splitting and dynamic imports
- Minified production builds

### SEO
- Comprehensive meta tags
- Open Graph protocol support
- Twitter Card metadata
- Robots.txt and sitemap
- PWA manifest for installability

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

## Author

**Maxime Drouault**
- Portfolio: https://maximedrouault.com/
- GitHub: https://github.com/maximedrouault
- LinkedIn: https://linkedin.com/in/maximedrouault
