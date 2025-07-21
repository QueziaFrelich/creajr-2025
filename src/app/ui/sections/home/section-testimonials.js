import React from "react";
import CardVideo from "../../components/cards/card-video";
import testimonials from "../../../../../data/data-testemonials"
import Container from "../../components/container/container";

export default function TestimonialsSection() {
  return (
    <section className="p-16  dark:bg-zinc-900">
      <Container>
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-textDarkBlue dark:text-white mb-6">Depoimentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <CardVideo key={index} {...item} />
          ))}
        </div>
      </div>
          </Container>
    </section>
  );
}
