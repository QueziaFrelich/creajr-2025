"use client"

import { InView } from 'react-intersection-observer';
import Text_body from "../text/text-body-base";
import CountUp from 'react-countup';


export default function Number_count({ number, before_number, after_number, title, description, animate }) {
  const formatNumber = (value) => {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'k'; // Displays 1.3k
    }
    return value.toLocaleString(); // Displays 1.300 if applicable
  };


  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref} className="text-center text-textDarkGreen text-5xl">
          {inView && <p className="font-bold mb-2 text-textDarkGreen text-5xl">{before_number}{animate ? <CountUp prefix={before_number} end={number} suffix={after_number} duration={1} formattingFn={formatNumber} /> : number}{after_number}</p>}
          <div className="flex justify-center items-center gap-2 relative">
            <Text_body className="text-center w-52 text-base font-medium">{title}</Text_body>
            {description &&
              <div className="group cursor-pointer">
                <div className="hidden group-hover:block group-hover:animate-fade-up group-hover:animate-duration-300 absolute w-52 h-auto -top-16 left-0 p-2 bg-white transition-all rounded-md border shadow-md">
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            }
          </div>
        </div>
      )}
    </InView>

  );
}
