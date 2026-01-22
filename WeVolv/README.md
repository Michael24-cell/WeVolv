# WeVolv Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Installation

The dependencies are already installed. If you need to reinstall them:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Building for Production

```bash
npm run build
npm start
```

## Site Structure

### Pages (12 Total)

1. **Home** (`/`) - Landing page
2. **Consultations** (`/consultations`) - Booking and consultation info
3. **Weight Management** (`/weight-management`) - Weight loss programs
4. **Fitness** (`/fitness`) - Fitness programs
5. **Nutrition** (`/nutrition`) - Nutrition guidance
6. **About** (`/about`) - Company information
7. **Contact** (`/contact`) - Contact form
8. **Herbalife** (`/herbalife`) - Herbalife products
9. **Lifewave** (`/lifewave`) - Lifewave products
10. **Membership** (`/membership`) - Membership sign-up
11. **Programs & FAQ** (`/programs-faq`) - Program details and FAQs
12. **Resources** (`/resources`) - Educational resources

### Folder Structure

```
WeVolv/
├── app/                      # Pages and layouts
│   ├── layout.tsx           # Root layout with navigation/footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── [page-name]/         # Individual page folders
│       └── page.tsx
├── components/              # Reusable components
│   ├── Navigation.tsx       # Top navigation
│   └── Footer.tsx           # Site footer
├── public/
│   └── images/             # Image assets
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Editing Pages

Each page is located in `app/[page-name]/page.tsx`. Simply open the file and edit the content, styles, and structure as needed.

### Example: Editing the Home Page

1. Open `app/page.tsx`
2. Modify the JSX content
3. Save the file
4. Changes appear automatically in the browser (hot reload)

## Adding Images

1. Place images in `public/images/`
2. Reference them in your pages:

```tsx
import Image from "next/image";

<Image 
  src="/images/your-image.jpg" 
  alt="Description" 
  width={800} 
  height={600}
/>
```

## Styling

This site uses **Tailwind CSS** for styling. You can:

- Use Tailwind utility classes directly in JSX
- Customize colors/styles in `tailwind.config.ts`
- Add custom CSS in `app/globals.css`

### Common Tailwind Classes

- `bg-blue-600` - Background color
- `text-white` - Text color
- `p-4` - Padding
- `mb-6` - Margin bottom
- `rounded-lg` - Rounded corners
- `shadow-md` - Box shadow

## Navigation

The navigation automatically includes all 12 pages. To modify:

1. Open `components/Navigation.tsx`
2. Edit the `navLinks` array
3. Add/remove/reorder links as needed

## Contact & Membership Forms

Both forms are currently set up with basic validation and state management. The forms log to the console when submitted. To connect to a backend:

1. Create an API route in `app/api/`
2. Update the form `handleSubmit` functions
3. Add your backend integration (email service, database, etc.)

## Deployment

This site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- Any hosting service that supports Node.js

### Deploying to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- React Docs: https://react.dev

## License

© 2026 WeVolv. All rights reserved.
