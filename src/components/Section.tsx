import React from "react";

const Section = ({id, children}: {id?: string, children: React.ReactNode}) => {
  return (
    <section id={id} >
      <div className="wrapper">{children}</div>
    </section>
  );
};

export default Section;
