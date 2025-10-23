import React from 'react';
import { colors, typography, spacing, borderRadius, sidebarLinkVariants } from '../tokens';

const SidebarNavLink = ({ 
  children, 
  isActive = false,
  isDisabled = false,
  icon,
  onClick,
  className = '',
  ...props 
}) => {
  const getVariant = () => {
    if (isDisabled) return 'disabled';
    if (isActive) return 'active';
    return 'default';
  };

  const variant = getVariant();
  const variantStyles = sidebarLinkVariants[variant];

  const baseStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    fontFamily: typography.sidebarLink.fontFamily,
    fontWeight: typography.sidebarLink.fontWeight,
    fontSize: typography.sidebarLink.fontSize,
    lineHeight: typography.sidebarLink.lineHeight,
    letterSpacing: typography.sidebarLink.letterSpacing,
    fontVariantNumeric: typography.sidebarLink.fontVariantNumeric,
    fontFeatureSettings: typography.sidebarLink.fontFeatureSettings,
    width: '100%',
    textAlign: 'left',
    transition: 'all 0.2s ease-in-out',
    opacity: 1,
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    ...variantStyles
  };

  const handleClick = (e) => {
    if (!isDisabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      style={baseStyles}
      onClick={handleClick}
      disabled={isDisabled}
      className={`autospend-sidebar-link ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''} ${className}`}
      {...props}
    >
      <span style={{ 
        color: 'inherit',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        flex: 1
      }}>
        {children}
      </span>
      {icon && (
        <div style={{
          width: '16px',
          height: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto'
        }}>
          {icon}
        </div>
      )}
    </button>
  );
};

export default SidebarNavLink;
