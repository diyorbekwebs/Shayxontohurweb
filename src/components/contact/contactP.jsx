import React from "react";
import Contact from ".";
import { contactdb } from "../../constant/contact";
import Card from "./card";

export default function ContactP() {
  return (
    <div className="mt-[30px]"> 
      <div className="container">
        <div className="flex flex-col gap-[50px]">
          <div className="flex gap-[16px]">
            {contactdb?.map((e) => (
              <Card key={e.id} text={e.title} text2={e.text} img={e.img} gmail={e.gmail} />
            ))}
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}
