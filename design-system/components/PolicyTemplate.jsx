import React from 'react';
import { colors, typography, spacing } from '../tokens';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';

const PolicyTemplate = ({ 
  title,
  content,
  sidebarSections,
  activeSidebarItem,
  onSidebarItemClick,
  onGetStartedClick,
  className = '',
  ...props 
}) => {
  const containerStyles = {
    backgroundColor: colors.backgroundPrimary,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sectionGap,
    padding: '0',
    minHeight: '100vh',
    boxSizing: 'border-box'
  };

  const mainContentStyles = {
    display: 'flex',
    gap: spacing.mainContentGap,
    alignItems: 'flex-start',
    flex: 1,
    width: '100%'
  };

  const contentAreaStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sectionGap,
    padding: `${spacing.contentPadding.vertical} ${spacing.contentPadding.right} ${spacing.contentPadding.vertical} ${spacing.contentPadding.left}`,
    minHeight: 'fit-content',
    marginTop: spacing.headerHeight,
    marginLeft: spacing.sidebarWidth
  };

  const titleStyles = {
    alignSelf: 'stretch',
    fontFamily: typography.h1.fontFamily,
    fontWeight: typography.h1.fontWeight,
    fontSize: typography.h1.fontSize,
    lineHeight: typography.h1.lineHeight,
    letterSpacing: typography.h1.letterSpacing,
    fontFeatureSettings: typography.h1.fontFeatureSettings,
    color: typography.h1.color,
    margin: 0
  };

  const contentStyles = {
    fontFamily: typography.bodyText.fontFamily,
    fontWeight: typography.bodyText.fontWeight,
    fontSize: typography.bodyText.fontSize,
    lineHeight: typography.bodyText.lineHeight,
    color: colors.textPrimarySubdued,
    margin: 0
  };

  return (
    <div 
      style={containerStyles}
      className={`autospend-policy-template ${className}`}
      {...props}
    >
      <AppHeader 
        onButtonClick={onGetStartedClick}
      />
      
      <div style={mainContentStyles}>
        <Sidebar 
          sections={sidebarSections}
          activeItem={activeSidebarItem}
          onItemClick={onSidebarItemClick}
        />
        
        <main style={contentAreaStyles}>
          <h1 style={titleStyles}>
            {title}
          </h1>
          
          <div style={contentStyles}>
            {content}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PolicyTemplate;
