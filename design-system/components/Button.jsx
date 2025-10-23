import React from 'react';
import { colors, typography, spacing, borderRadius, buttonVariants } from '../tokens';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.smallGap,
    padding: `${spacing.buttonPadding.vertical} ${spacing.buttonPadding.horizontal}`,
    borderRadius: borderRadius.small,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: typography.buttonText.fontFamily,
    fontWeight: typography.buttonText.fontWeight,
    fontSize: typography.buttonText.fontSize,
    lineHeight: typography.buttonText.lineHeight,
    letterSpacing: typography.buttonText.letterSpacing,
    transition: 'all 0.2s ease-in-out',
    opacity: disabled ? 0.6 : 1,
    ...buttonVariants[variant]
  };

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      style={baseStyles}
      onClick={handleClick}
      disabled={disabled}
      className={`autospend-button ${className}`}
      {...props}
    >
      <span style={{ 
        color: 'inherit',
        whiteSpace: 'nowrap'
      }}>
        {children}
      </span>
      {icon && (
        <span style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '20px',
          height: '20px'
        }}>
          {icon}
        </span>
      )}
    </button>
  );
};

// HOC for hover effects
const ButtonWithHover = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const hoverStyles = isHovered && !props.disabled 
    ? buttonVariants.primaryHover 
    : buttonVariants[props.variant || 'primary'];

  return (
    <Button
      {...props}
      style={{
        ...props.style,
        ...hoverStyles
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default ButtonWithHover;
