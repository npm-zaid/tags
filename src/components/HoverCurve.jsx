
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HoverCurve = () => {
  const anchorRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const anchor = anchorRef.current;
    const path = pathRef.current;

    const animateTo = (d, ease, duration = 1) => {
      gsap.killTweensOf(path);
      gsap.to(path, {
        attr: { d },
        ease,
        duration,
      });
    };

    const enter = () => {
      animateTo('M 10,70 Q 100,20 190,70', 'elastic.out(1.4, 0.4)', 0.8);
    };

    const leave = () => {
      animateTo('M 10,70 Q 100,70 190,70', 'elastic.out(1.8, 0.2)', 1.5);
    };

    anchor.addEventListener('pointerenter', enter);
    anchor.addEventListener('pointerleave', leave);

    return () => {
      anchor.removeEventListener('pointerenter', enter);
      anchor.removeEventListener('pointerleave', leave);
    };
  }, []);

  return (
    <div className="hover-wrapper">
      <a ref={anchorRef} className="hover-anchor">
        <svg viewBox="0 0 200 120" width="200px" height="120px">
          <path
            ref={pathRef}
            id="top"
            d="M 10,70 Q 100,70 190,70"
          />
          <text className="path-text">
            <textPath href="#top" startOffset="50%" textAnchor="middle">
              <tspan dy="-12">Hover me!</tspan>
            </textPath>
          </text>
        </svg>
      </a>
    </div>
  );
};

export default HoverCurve;
