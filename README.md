# Online Hits Shop - Premium Accounts Store

A modern, responsive website for selling premium online accounts built with React and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Product categories filtering
- 💳 15+ premium services (Netflix, Prime Video, VPNs, AI Tools, etc.)
- 🔗 Direct Telegram integration for purchases
- ⚡ Fast and optimized with Vite
- 🎭 Beautiful animations and transitions

## Products Available

- **Streaming Services**: Netflix, Prime Video, Disney+ Hotstar, YouTube Premium, Peacock, HBO Max
- **VPN Services**: NordVPN, ExpressVPN, Surfshark
- **AI Tools**: ChatGPT Plus, Blackbox AI Pro, Midjourney Pro
- **Music**: Spotify Premium
- **Design**: Canva Pro
- **Productivity**: Grammarly Premium

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library

## Project Structure

```
online-hits-shop/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── ProductCard.jsx     # Product card component
│   │   ├── ProductGrid.jsx     # Products grid with filtering
│   │   ├── Features.jsx        # Features section
│   │   ├── ContactSection.jsx  # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── data/
│   │   └── products.js         # Product data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Update Telegram Link

The "Buy Now" button redirects to Telegram. To change the link, edit:
- `src/components/ProductCard.jsx` - Line with `href="https://t.me/sweeeshy"`

### Add/Edit Products

Edit the products array in `src/data/products.js`

### Change Colors

Modify the color scheme in `tailwind.config.js` under the `theme.extend.colors` section.

## License

This project is open source and available under the MIT License.

## Support

For support, contact: support@onlinehitsshop.com
