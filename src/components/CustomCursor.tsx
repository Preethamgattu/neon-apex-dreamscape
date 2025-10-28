import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth <= 768) {
      return;
    }

    setIsVisible(true);

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add mousemove listener
    document.addEventListener('mousemove', updateCursorPosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .skill-card, .project-card, .cert-card, input, textarea'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Main cursor ring */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      
      {/* Cursor dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
