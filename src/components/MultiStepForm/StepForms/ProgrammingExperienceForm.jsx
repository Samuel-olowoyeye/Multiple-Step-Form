"use client";
import NavButtons from "@/components/FormInputs/NavButtons";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import {
  setCurrentStep,
  updateFormData,
} from "@/redux/slices/onboardingStudentsSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import {programmingExperienceSchema} from "../../../schemas/ProgrammingExperienceSchema"


export default function ProgrammingExperienceForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const formData = useSelector((store) => store.onboarding.formData);
  console.log(formData, currentStep);
  const [loading, setLoading] = useState(false);
  const languages = [
    {
      id: "javascript",
      title: "JavaScript",
    },
    {
      id: "python",
      title: "Python",
    },
    {
      id: "php",
      title: "PHP",
    },
  ];
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
    },
    resolver: zodResolver(programmingExperienceSchema),
  });
  const dispatch = useDispatch();
  async function processData(data) {
    // All Data is Valid
    //Collect all the data
    //Update Data in the Global state
    dispatch(updateFormData(data));
    //Make API Request to Save the Data also in the DB

    //Update the Current Step
    dispatch(setCurrentStep(currentStep + 1));
    // console.log(data);
    //Update the url
  }
  return (
    <form className="sm:px-12 px-3 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Programming Experience
        </h5>
        <p>Please provide your info here.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <SelectInput
          label="Programming Languages Known"
          name="language"
          multiple={true}
          register={register}
          options={languages}
        />
        {errors.language && (
          <p className="text-red-500 text-sm">{errors.language.message}</p>
        )}
        <TextInput
          label="Years of Programming Experience"
          name="programmingExperience"
          register={register}
          errors={errors}
        />

        <TextInput
          label="Portfolio Link"
          name="portfolioLink"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
}
