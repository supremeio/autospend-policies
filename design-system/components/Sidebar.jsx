import React from 'react';
import { colors, typography, spacing, borderRadius } from '../tokens';
import SidebarNavLink from './SidebarNavLink';

const Sidebar = ({ 
  sections = [],
  activeItem,
  onItemClick,
  className = '',
  ...props 
}) => {
  const sidebarStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sectionGap,
    width: spacing.sidebarWidth,
    padding: `${spacing.sidebarVerticalPadding} 0`,
    paddingLeft: spacing.sidebarHorizontalPadding.left,
    paddingRight: spacing.sidebarHorizontalPadding.right,
    boxSizing: 'border-box',
    position: 'fixed',
    top: spacing.headerHeight,
    left: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: colors.backgroundPrimary,
    overflowY: 'auto'
  };

  const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.itemGap,
    width: '100%'
  };

  const sectionHeadingStyles = {
    fontFamily: typography.sidebarHeading.fontFamily,
    fontWeight: typography.sidebarHeading.fontWeight,
    fontSize: typography.sidebarHeading.fontSize,
    lineHeight: typography.sidebarHeading.lineHeight,
    letterSpacing: typography.sidebarHeading.letterSpacing,
    color: colors.textPrimary,
    margin: 0
  };

  const sidebarContainerStyles = {
    borderLeft: `1px solid ${colors.borderPrimary}`,
    paddingLeft: spacing.itemGap,
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    width: '100%'
  };

  return (
    <div 
      style={sidebarStyles}
      className={`autospend-sidebar ${className}`}
      {...props}
    >
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} style={sectionStyles}>
          <h3 style={sectionHeadingStyles}>
            {section.title}
          </h3>
          <div style={sidebarContainerStyles}>
            {section.items.map((item, itemIndex) => (
              <SidebarNavLink
                key={`${sectionIndex}-${itemIndex}`}
                isActive={activeItem === item.id}
                isDisabled={item.disabled}
                icon={item.icon}
                onClick={() => onItemClick && onItemClick(item.id)}
              >
                {item.label}
              </SidebarNavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
