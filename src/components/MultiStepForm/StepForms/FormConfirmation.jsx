import NavButtons from "@/components/FormInputs/NavButtons";
import React from "react";
import { useSelector } from "react-redux";

export default function FormConfirmation() {
  const formData = useSelector((store) => store.onboarding.formData);

  // Helper function to render the form data in a user-friendly way
  const renderFormData = (data) => {
    return (
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => {
          if (Array.isArray(value)) {
            return (
              <div key={key}>
                <h6 className="font-semibold">{key}:</h6>
                <ul className="list-disc pl-4">
                  {value.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          }

          return (
            <div key={key}>
              <h6 className="font-semibold">{key}:</h6>
              <p>{value}</p>
            </div>
          );
        })}
      </div>
    );
  };

  async function processData(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form className="px-12 py-4" onSubmit={processData}>
        <div className="mb-8">
          <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Review Information
          </h5>
          <p>Confirm if this is the data that you filled</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {renderFormData(formData)}
        </div>

        <NavButtons />
      </form>
    </div>
  );
}
