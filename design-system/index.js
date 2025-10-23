// Design System Exports
export { default as AppHeader } from './components/AppHeader';
export { default as Button } from './components/Button';
export { default as Sidebar } from './components/Sidebar';
export { default as SidebarNavLink } from './components/SidebarNavLink';
export { default as PolicyTemplate } from './components/PolicyTemplate';

// Design Tokens
export * from './tokens';

// Component Library Documentation
export const componentLibrary = {
  AppHeader: {
    description: 'Top navigation bar with logo and CTA button',
    props: ['logo', 'buttonText', 'buttonIcon', 'onButtonClick']
  },
  Button: {
    description: 'Primary action button with hover states',
    props: ['children', 'variant', 'size', 'icon', 'onClick', 'disabled']
  },
  Sidebar: {
    description: 'Left navigation sidebar with sections and items',
    props: ['sections', 'activeItem', 'onItemClick']
  },
  SidebarNavLink: {
    description: 'Individual navigation link within sidebar',
    props: ['children', 'isActive', 'isDisabled', 'onClick']
  },
  PolicyTemplate: {
    description: 'Master template for all policy pages',
    props: ['title', 'content', 'sidebarSections', 'activeSidebarItem', 'onSidebarItemClick', 'onGetStartedClick']
  }
};

// HTML Demo Pages
export const demoPages = {
  'index': 'Terms and Conditions',
  'cookie-policy': 'Cookie Policy',
  'data-use-policy': 'Data Use Policy',
  'e-merchant-agreement': 'E-Merchant Exchange Agreement',
  'information-security-policy': 'Information Security Policy',
  'privacy-policy': 'Privacy Policy',
  'risk-management-policy': 'Risk Management Policy'
};
