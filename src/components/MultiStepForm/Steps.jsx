import React from "react";
import Step from "./Step";

export default function Steps({ steps }) {
  return (
    <div className="rounded-lg col-span-full md:col-span-4 bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-10 flex flex-row justify-between md:flex-col md:justify-start gap-6 flex-wrap ">
      {steps.map((step, i) => {
        return <Step key={i} step={step} />;
      })}
    </div>
  );
}
