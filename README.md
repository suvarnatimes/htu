# Hope Theological University (HTU India) - Next.js Website

A complete, modern recreation of the official **Hope Theological University** website (https://htuindia.in/) built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features & Pages Included

- **Home (`/`)**: Hero carousel banner with university convocation imagery, welcome address from founder Dr. Davidpaul Arjilli, foundational pillars, academic programs overview, accreditation highlight, and university stats.
- **About (`/about`)**: Complete institutional background, Mission & Vision, Principles of HTU, Confession of Faith (all 12 doctrinal articles), Statement of Faith, Core Values (Basic & Practical), and Who We Are statement.
- **Courses (`/courses`)**: Comprehensive catalog of Bachelor Degrees (BTh, BVle, BD), Master Degrees (MTh, MDK, MMR), Doctor Degrees (Ph.D., Do, DVle), Ph.D. specializations, distance learning curriculum, and eligibility criteria.
- **Honorable Doctorates (`/honorable-doctorates`)**: Complete Latin honoris causa degree catalog (over 30 titles), legal application workflow, and honorary doctorate awardee profiles (Dr. Bollavarapu John Wesly, Dr. Vallepu Varaprasad, Dr. Vempati Raghuram) with photos and citations.
- **Accreditation (`/accreditation`)**: Cathedral Episcopal Synod Bishop's Council affiliation details, global theological education standards, interdenominational status, and academic recognition.
- **Associate Members (`/associate-members`)**: Synod partners, affiliated theological colleges, regional study centres across New Delhi, Andhra Pradesh, Telangana, and international affiliations.
- **Certificate Verification (`/certificate-verification`)**: Functional interactive verification tool allowing instant validation of student registration numbers, credential verification, and degree details.
- **Results Portal (`/results`)**: Interactive student exam result inquiry portal with semester selection and grade sheet display.
- **Contact Us (`/contact`)**: National Office (New Delhi) and South India Office (Machilipatnam, AP) addresses, direct phone (`9492157339`), email (`hopetheologicaluniversity@gmail.com`), and interactive contact form with instant validation.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.17.0 or higher recommended)
- npm or yarn

### Installation

```bash
# Extract the archive (if zipped)
# Navigate to the project directory
cd htu-india-nextjs

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── public/
│   └── images/               # University logos, convocation banners, student scenes & awardee portraits
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with topbar, navbar and footer
│   │   ├── page.tsx          # Homepage
│   │   ├── about/page.tsx    # About Us & Confession of Faith
│   │   ├── courses/page.tsx  # Academic programs & theological degrees
│   │   ├── accreditation/page.tsx # Episcopal Synod affiliation & standards
│   │   ├── associate-members/page.tsx # Partner colleges & synods
│   │   ├── honorable-doctorates/page.tsx # Honorary doctorates & awardees
│   │   ├── certificate-verification/page.tsx # Interactive verification tool
│   │   ├── results/page.tsx  # Student results portal
│   │   └── contact/page.tsx  # Office locations & contact form
│   └── components/
│       ├── Header.tsx        # Responsive navigation & top utility bar
│       ├── Footer.tsx        # University footer & copyright
│       └── ...
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 📜 Credits & Copyright
© 2023–2026 Hope Theological University. All rights reserved. Designed by ALTARVISION.
