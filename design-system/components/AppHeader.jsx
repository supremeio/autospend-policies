import React from 'react';
import { colors, spacing } from '../tokens';
import Button from './Button';

const AppHeader = ({ 
  logo,
  buttonText = "Get started for free",
  buttonIcon,
  onButtonClick,
  className = '',
  ...props 
}) => {
  const headerStyles = {
    display: 'flex',
    height: spacing.headerHeight,
    padding: `${spacing.headerPadding} ${spacing.containerPadding.horizontal}`,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    alignSelf: 'stretch',
    backgroundColor: colors.backgroundPrimary,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  };

  const logoStyles = {
    height: '24px',
    width: '122px',
    display: 'flex',
    alignItems: 'center'
  };

  // Autospend logo from Figma
  const autospendLogo = "http://localhost:3845/assets/12c09763fe98217f514621a68ca01a9e6a90ac64.svg";

  return (
    <header 
      style={headerStyles}
      className={`autospend-header ${className}`}
      {...props}
    >
      <div style={logoStyles}>
        {logo || (
          <img 
            src={autospendLogo} 
            alt="Autospend" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        )}
      </div>
      
      <Button
        variant="primary"
        onClick={onButtonClick}
        icon={
          <img 
            src="http://localhost:3845/assets/789a14b6fc2f8518a277ef84b56894890a42f3fe.svg" 
            alt="arrow" 
            style={{ width: '20px', height: '20px' }}
          />
        }
      >
        {buttonText}
      </Button>
    </header>
  );
};

export default AppHeader;
