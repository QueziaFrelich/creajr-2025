'use client'

import { InView } from 'react-intersection-observer';

export default function Text_display_1 ( { children, className } ) {
  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
      <p ref={ref} className={`text-8xl lg:text-9xl ${inView ? 'animate-fade-up animate-once animate-ease-in-out animate-fill-forwards':'opacity-0'} ${className}`}>
          { children }
      </p>
      )}
    </InView>

  );
}