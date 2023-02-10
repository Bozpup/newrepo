import React from "react";
import "../../styles/transco.css";
import transcoBus from "../../assets/svgs/transco-bus.svg"

export const Transco = () => {
  return (
    <>
      <section className="bus-transco">
        <div>
          <article>
            <h4>Are you a Bus Transco?</h4>
            <p>
              Onboard and gain access to services that will boost your business
            </p>
            <a href="/">Sign up now</a>
          </article>
        </div>
        <div className="bus-div"><img src= {transcoBus} alt="" srcset="" /></div>
      </section>
    </>
  );
};
