import React from "react";
import CardVideo from "../../components/cards/card-video";
import testimonials from "../../../../../data/data-testemonials"

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6">Depoimentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <CardVideo key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
