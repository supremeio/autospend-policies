// Design Tokens for Autospend Policy Pages
// Clean, organized design system

export const colors = {
  // Primary Colors
  primary: '#2a58dc',
  
  // Text Colors
  textPrimary: '#13212f',
  textPrimarySubdued: '#475569',
  textOnPrimary: '#ffffff',
  
  // Background Colors
  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#eaeefb',
  backgroundPrimarySubdued: '#f3f6f8',
  
  // Border Colors
  borderPrimary: '#e2e8f0',
  
  // Semantic Colors
  active: '#2a58dc',
  inactive: '#475569',
  disabled: '#f3f6f8'
};

export const typography = {
  // Headings
  h1: {
    fontFamily: 'Figtree',
    fontWeight: 500, // Medium
    fontSize: '32px',
    lineHeight: '40px', // 125%
    letterSpacing: '-0.96px',
    fontFeatureSettings: "'salt' on",
    color: '#13212F'
  },
  
  h2: {
    fontFamily: 'Figtree',
    fontWeight: 400, // Regular
    fontSize: '20px',
    lineHeight: '28px', // 140%
    textTransform: 'uppercase',
    color: '#2A58DC'
  },
  
  sidebarHeading: {
    fontFamily: 'Figtree',
    fontWeight: 600, // SemiBold
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '-0.2px'
  },
  
  // Body Text
  bodyText: {
    fontFamily: 'Figtree',
    fontWeight: 400, // Regular
    fontSize: '16px',
    lineHeight: '24px',
    fontFeatureSettings: "'salt' on",
    color: '#475569'
  },
  
  bodyTextBold: {
    fontFamily: 'Figtree',
    fontWeight: 600, // SemiBold
    fontSize: '16px',
    lineHeight: '24px',
    fontFeatureSettings: "'salt' on",
    color: '#13212F'
  },
  
  // Button Text
  buttonText: {
    fontFamily: 'Figtree',
    fontWeight: 500, // Medium
    fontSize: '14px',
    lineHeight: '1.45',
    letterSpacing: '0.28px'
  },
  
  // Sidebar Links
  sidebarLink: {
    fontFamily: 'Figtree',
    fontWeight: 400, // Regular
    fontSize: '14px',
    lineHeight: '145%', // 20.3px
    letterSpacing: '0.14px',
    fontVariantNumeric: 'lining-nums tabular-nums',
    fontFeatureSettings: "'salt' on"
  }
};

export const spacing = {
  // Container Spacing
  containerPadding: {
    horizontal: '80px',
    vertical: '40px'
  },
  
  // Component Spacing
  sectionGap: '48px',
  itemGap: '16px',
  smallGap: '8px',
  
  // Button Spacing
  buttonPadding: {
    horizontal: '12px',
    vertical: '8px'
  },
  
  // Sidebar Spacing
  sidebarWidth: '360px',
  sidebarItemPadding: {
    horizontal: '16px',
    vertical: '8px'
  },
  sidebarVerticalPadding: '24px',
  sidebarHorizontalPadding: {
    left: '80px',
    right: '40px'
  },
  
  // Header Spacing
  headerHeight: '80px',
  headerPadding: '20px',
  
  // Content Spacing
  contentPadding: {
    horizontal: '80px',
    vertical: '40px',
    left: '120px',
    right: '80px'
  },
  
  // Gap between sidebar and content
  mainContentGap: '64px',
  mainContentGapTablet: '40px',
  mainContentGapMobile: '20px'
};

export const borderRadius = {
  small: '8px',
  medium: '12px',
  large: '16px'
};

// Responsive Breakpoints
export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px'
};

export const shadows = {
  small: '0 1px 2px rgba(0, 0, 0, 0.05)',
  medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
  large: '0 10px 15px rgba(0, 0, 0, 0.1)'
};

// Component Variants
export const buttonVariants = {
  primary: {
    backgroundColor: colors.primary,
    color: colors.textOnPrimary,
    border: 'none'
  },
  primaryHover: {
    backgroundColor: '#F3F6F8', // Light gray for hover
    color: colors.primary,
    border: 'none'
  }
};

export const sidebarLinkVariants = {
  default: {
    backgroundColor: colors.backgroundPrimary,
    color: colors.inactive,
    border: 'none'
  },
  active: {
    backgroundColor: colors.backgroundSecondary,
    color: colors.primary,
    border: 'none'
  },
  disabled: {
    backgroundColor: '#FFF',
    color: '#475569',
    border: 'none'
  },
  hover: {
    backgroundColor: '#F3F6F8',
    color: colors.inactive,
    border: 'none'
  }
};