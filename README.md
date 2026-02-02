# LocalAlpha Website

The official marketing website and documentation portal for [LocalAlpha](https://localalpha.io) — the privacy-first frontend for QuantConnect LEAN.

This repository contains the source code for the public-facing website, built with the Next.js App Router and TypeScript.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Tailwind CSS (configured via PostCSS)
- **Deployment**: [Vercel](https://vercel.com)
- **Analytics**: Vercel Web Analytics

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/LocalAlpha-io/LocalAlpha-website.git](https://github.com/LocalAlpha-io/LocalAlpha-website.git)
   cd LocalAlpha-website
2. **Install dependencies:**
   ```bash
      npm install

3. **Run the development server:**
   ```bash
      npm run dev
Open http://localhost:3000 with your browser to see the result.

📂 Project Structure
```bash
      LocalAlpha-website/
      ├── app/                  # Next.js App Router pages and layouts
      ├── public/               # Static assets (images, fonts, icons)
      ├── screenshots/          # Project screenshots
      ├── next.config.ts        # Next.js configuration
      └── tailwind.config.ts    # Tailwind CSS configuration (if applicable)
```
🚢 Deployment
The website is hosted on Vercel. Pushing to the main branch automatically triggers a deployment.

📄 License
This project is licensed under the Apache-2.0 License - see the LICENSE file for details.
