# Images Folder

Place all your website images in this folder for easy access throughout the site.

## Suggested Organization

```
images/
├── logo.png              # WeVolv logo
├── hero/                 # Hero/banner images
├── products/             # Product images (Herbalife, Lifewave)
├── team/                 # Team member photos
├── testimonials/         # Customer photos
└── misc/                 # Other images
```

## Using Images in Your Pages

Import the Next.js Image component for optimized images:

```tsx
import Image from "next/image";

// In your component:
<Image 
  src="/images/logo.png" 
  alt="WeVolv Logo" 
  width={200} 
  height={100}
/>
```

## Best Practices

- Use descriptive filenames (e.g., `hero-home-page.jpg` instead of `img1.jpg`)
- Optimize images before uploading (compress large files)
- Use appropriate formats: JPG for photos, PNG for logos/graphics with transparency
- Keep image sizes reasonable (under 500KB when possible)
