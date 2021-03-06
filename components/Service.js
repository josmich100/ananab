import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div>
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12 bg-gradient-to-r from-yellow-200 to-yellow-500">
          <ServiceCard
            title="Taxi"
            quiz="are you ready"
            description="we are trying to be"
          />
          <ServiceCard
            title="Car Hire"
            quiz="are you ready"
            description="we are trying to be"
          />
        </div>
      </section>
    </div>
  );
};

export default Service;
