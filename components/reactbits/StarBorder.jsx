const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  style: externalStyle,
  children,
  ...rest
}) => {
  const containerStyle = {
    display: 'inline-block',
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    padding: `${thickness}px 0`,
    ...externalStyle,
  };

  const gradientBottom = {
    position: 'absolute',
    width: '300%',
    height: '50%',
    opacity: 0.7,
    bottom: '-12px',
    right: '-250%',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${color}, transparent 10%)`,
    animation: `star-movement-bottom ${speed} linear infinite alternate`,
    zIndex: 0,
  };

  const gradientTop = {
    position: 'absolute',
    opacity: 0.7,
    width: '300%',
    height: '50%',
    top: '-12px',
    left: '-250%',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${color}, transparent 10%)`,
    animation: `star-movement-top ${speed} linear infinite alternate`,
    zIndex: 0,
  };

  const innerContent = {
    position: 'relative',
    border: '1px solid #333',
    background: 'rgba(0,0,0,0.55)',
    color: 'white',
    fontSize: '16px',
    textAlign: 'center',
    padding: '14px 36px',
    borderRadius: '20px',
    zIndex: 1,
    textDecoration: 'none',
    display: 'block',
    letterSpacing: '0.04em',
    backdropFilter: 'blur(8px)',
    cursor: 'pointer',
  };

  return (
    <>
      <style>{`
        @keyframes star-movement-bottom {
          0%   { transform: translate(0%, 0%);    opacity: 1; }
          100% { transform: translate(-100%, 0%); opacity: 0; }
        }
        @keyframes star-movement-top {
          0%   { transform: translate(0%, 0%);   opacity: 1; }
          100% { transform: translate(100%, 0%); opacity: 0; }
        }
      `}</style>
      <Component className={className} style={containerStyle} {...rest}>
        <div style={gradientBottom} />
        <div style={gradientTop} />
        <div style={innerContent}>{children}</div>
      </Component>
    </>
  );
};

export default StarBorder;
