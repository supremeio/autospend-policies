# Autospend Policies

A clean, component-based design system for Autospend policy pages, built with React components and HTML demo pages featuring smooth animations and responsive design.

## 🚀 Live Demo

Visit the [live demo](https://supremeio.github.io/autospend-policies/design-system/demo/) to see the design system in action.

## 🎨 Features

- **Pixel-perfect** implementation matching Figma designs
- **Responsive** design for desktop, tablet, and mobile
- **Component-based** architecture for reusability
- **Design tokens** for consistent styling
- **Smooth animations** with cubic-bezier easing (no shadows)
- **Accessibility** considerations built-in
- **HTML Demo Pages** for immediate testing and deployment

## 📁 Repository Structure

```
autospend-policies/
├── design-system/           # Main design system
│   ├── components/         # React components
│   │   ├── AppHeader.jsx
│   │   ├── Button.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SidebarNavLink.jsx
│   │   └── PolicyTemplate.jsx
│   ├── assets/             # Design assets
│   │   ├── autospend-logo.svg
│   │   └── button-arrow-icon.svg
│   ├── demo/              # HTML demo pages
│   │   ├── index.html     # Terms and Conditions
│   │   ├── cookie-policy.html
│   │   ├── data-use-policy.html
│   │   ├── e-merchant-agreement.html
│   │   ├── information-security-policy.html
│   │   ├── privacy-policy.html
│   │   ├── risk-management-policy.html
│   │   └── assets/        # Demo assets
│   ├── tokens.js          # Design tokens
│   ├── index.js          # Main exports
│   └── README.md         # Design system documentation
└── Policies/             # Source markdown files
    ├── Autospend Data Use Policy.md
    ├── Autospend Privacy Policy.md
    ├── Cookie Policy LightPDF.md
    ├── E-Merchant Exchange Agreement.md
    ├── Information Security Policy.md
    ├── LightPDF Terms and Conditions.md
    └── Risk Management Policy.md
```

## 🧩 Components

### Core Components

#### `AppHeader`
Top navigation bar with logo and CTA button.

#### `Button`
Primary action button with hover states and icon support.

#### `Sidebar`
Left navigation sidebar with sections and items.

#### `SidebarNavLink`
Individual navigation link within sidebar.

#### `PolicyTemplate`
Master template for all policy pages.

## 🎨 Design Tokens

### Colors
```javascript
colors: {
  primary: '#2a58dc',
  textPrimary: '#13212f',
  textPrimarySubdued: '#475569',
  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#eaeefb',
  backgroundPrimarySubdued: '#f3f6f8',
  borderPrimary: '#e2e8f0'
}
```

### Typography
- **H1**: 32px, Medium (500), 40px line-height
- **H2**: 20px, Regular (400), 28px line-height, UPPERCASE
- **Body Text**: 16px, Regular (400), 24px line-height
- **Button Text**: 14px, Medium (500), 1.45 line-height
- **Sidebar Links**: 14px, Regular (400), 145% line-height

### Spacing
- **Container Padding**: 80px horizontal, 40px vertical
- **Section Gap**: 48px
- **Item Gap**: 16px
- **Main Content Gap**: 120px (desktop), 80px (tablet), 40px (mobile)
- **Sidebar Width**: 360px

## 📱 Responsive Design

### Breakpoints
- **Mobile**: ≤ 768px
- **Tablet**: ≤ 1024px  
- **Desktop**: > 1024px

### Mobile Features
- **Hamburger Menu**: Toggle navigation on mobile
- **Top Sheet Navigation**: Sidebar slides down from top
- **Bottom CTA**: "Get started" button at bottom of mobile nav
- **Touch-friendly**: Full-width buttons and proper spacing

## 🚀 Getting Started

### Using React Components

```jsx
import { PolicyTemplate, AppHeader, Sidebar } from './design-system';

function App() {
  return (
    <PolicyTemplate
      title="Privacy Policy"
      content={<PrivacyContent />}
      sidebarSections={privacySections}
      activeSidebarItem="privacy-policy"
      onSidebarItemClick={handleNavigation}
      onGetStartedClick={handleGetStarted}
    />
  );
}
```

### Using HTML Demo

Open `design-system/demo/index.html` in your browser for an interactive demo with:
- All components rendered
- Interactive navigation
- Responsive behavior
- Mobile navigation toggle

## 🎯 Animation Features

- **Smooth transitions** with `cubic-bezier(0.4, 0, 0.2, 1)` easing
- **Hover effects**: Links slide right 2px and change color
- **Active state**: Links slide right 4px for clear visual feedback
- **Button hover**: Subtle lift effect with `translateY(-1px)`
- **Mobile navigation**: Slide-down animation when opened
- **No shadows**: Clean, minimal animations as requested

## 🔧 Development

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/supremeio/autospend-policies.git
cd autospend-policies
```

2. Start a local server:
```bash
cd design-system/demo
python3 -m http.server 8000
```

3. Open `http://localhost:8000` in your browser

### Building

The design system is ready to use with both React components and HTML demo pages. No build process required for the HTML demo.

## 📋 Policy Pages

The design system includes 7 complete policy pages:

1. **Terms and Conditions** - Main terms and conditions page
2. **Cookie Policy** - Cookie usage and tracking policy
3. **Data Use Policy** - Data collection and usage policy
4. **E-Merchant Exchange Agreement** - Merchant exchange service agreement
5. **Information Security Policy** - Information security and data protection
6. **Privacy Policy** - User privacy and data handling
7. **Risk Management Policy** - Risk assessment and management procedures

## 🎨 Design Principles

1. **Consistency**: All components follow the same design patterns
2. **Accessibility**: Proper contrast ratios and keyboard navigation
3. **Responsive**: Mobile-first approach with progressive enhancement
4. **Performance**: Lightweight components with minimal dependencies
5. **Maintainability**: Clear component structure and documentation

## 🔄 Updates and Maintenance

The design system is designed to be easily maintainable:
- All styling through design tokens
- Component-based architecture
- Clear separation of concerns
- Comprehensive documentation

For updates, modify the design tokens in `tokens.js` and the changes will propagate through all components automatically.

## 📄 License

This project is part of the Autospend platform and is proprietary software.

## 🤝 Contributing

This is an internal design system for Autospend. For questions or suggestions, please contact the development team.

---

**Built with ❤️ for Autospend**
