# Autospend Policy Design System

A clean, component-based design system for Autospend policy pages, built with React components and HTML demo pages.

## 🎨 Design System Overview

This design system provides a complete set of components and tokens for building consistent policy pages across the Autospend platform.

### Key Features
- **Pixel-perfect** implementation matching Figma designs
- **Responsive** design for desktop, tablet, and mobile
- **Component-based** architecture for reusability
- **Design tokens** for consistent styling
- **Accessibility** considerations built-in
- **HTML Demo Pages** for immediate testing and deployment

## 📁 File Structure

```
design-system/
├── components/           # Reusable React components
│   ├── AppHeader.jsx    # Top navigation bar
│   ├── Button.jsx       # Primary action button
│   ├── Sidebar.jsx      # Left navigation sidebar
│   ├── SidebarNavLink.jsx # Individual nav links
│   └── PolicyTemplate.jsx # Master page template
├── assets/              # Design assets
│   ├── autospend-logo.svg
│   └── button-arrow-icon.svg
├── tokens.js           # Design tokens (colors, typography, spacing)
├── index.js           # Main exports and documentation
└── demo/              # HTML demo pages
    ├── index.html     # Terms and Conditions
    ├── cookie-policy.html
    ├── data-use-policy.html
    ├── e-merchant-agreement.html
    ├── information-security-policy.html
    ├── privacy-policy.html
    ├── risk-management-policy.html
    └── assets/        # Demo assets
        ├── autospend-logo.svg
        └── button-arrow-icon.svg
```

## 🧩 Components

### Core Components

#### `AppHeader`
Top navigation bar with logo and CTA button.

```jsx
<AppHeader 
  logo="path/to/logo.svg"
  buttonText="Get started for free"
  onButtonClick={handleClick}
/>
```

#### `Button`
Primary action button with hover states and icon support.

```jsx
<Button 
  variant="primary" 
  icon={<ArrowIcon />}
  onClick={handleClick}
>
  Get started for free
</Button>
```

#### `Sidebar`
Left navigation sidebar with sections and items.

```jsx
<Sidebar 
  sections={sidebarSections}
  activeItem="terms-and-conditions"
  onItemClick={handleNavigation}
/>
```

#### `SidebarNavLink`
Individual navigation link within sidebar.

```jsx
<SidebarNavLink 
  isActive={true}
  isDisabled={false}
  onClick={handleClick}
>
  Terms and conditions
</SidebarNavLink>
```

#### `PolicyTemplate`
Master template for all policy pages.

```jsx
<PolicyTemplate
  title="Terms and condition"
  content={<YourContent />}
  sidebarSections={sidebarSections}
  activeSidebarItem="terms-and-conditions"
  onSidebarItemClick={handleNavigation}
  onGetStartedClick={handleGetStarted}
/>
```

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
- **Sidebar Width**: 280px

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
import { PolicyTemplate, TermsAndConditionsTemplate } from './design-system';

function App() {
  return (
    <TermsAndConditionsTemplate 
      onSidebarItemClick={handleNavigation}
      onGetStartedClick={handleGetStarted}
    />
  );
}
```

### Using HTML Demo

Open `demo/index.html` in your browser for an interactive demo with:
- All components rendered
- Interactive navigation
- Responsive behavior
- Mobile navigation toggle

## 🎯 Usage Examples

### Basic Policy Page
```jsx
<PolicyTemplate
  title="Privacy Policy"
  content={<PrivacyContent />}
  sidebarSections={privacySections}
  activeSidebarItem="privacy-policy"
  onSidebarItemClick={handleNavigation}
/>
```

### Custom Sidebar
```jsx
<Sidebar 
  sections={[
    {
      title: "Policies",
      items: [
        { id: "terms", label: "Terms and conditions" },
        { id: "privacy", label: "Privacy policy" }
      ]
    }
  ]}
  activeItem="terms"
  onItemClick={handleItemClick}
/>
```

## 🔧 Customization

### Design Tokens
All styling is controlled through design tokens in `tokens.js`. Update colors, typography, spacing, and other values here for consistent changes across all components.

### Component Variants
Components support different variants and states:
- **Button**: `primary`, `primaryHover`
- **SidebarNavLink**: `default`, `active`, `disabled`

## 📋 Component Props

### PolicyTemplate Props
- `title`: Page title (string)
- `content`: Main content (React element)
- `sidebarSections`: Navigation sections (array)
- `activeSidebarItem`: Currently active item (string)
- `onSidebarItemClick`: Navigation handler (function)
- `onGetStartedClick`: CTA handler (function)

### Sidebar Props
- `sections`: Array of sidebar sections
- `activeItem`: Currently active item ID
- `onItemClick`: Item click handler

### Button Props
- `children`: Button text (string)
- `variant`: Button variant (string)
- `icon`: Icon element (React element)
- `onClick`: Click handler (function)
- `disabled`: Disabled state (boolean)

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