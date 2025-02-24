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
import {educationBackgroundSchema} from "../../../schemas/EducationBackgroundSchema"

export default function EducationBackgroundForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const formData = useSelector((store) => store.onboarding.formData);
  console.log(formData, currentStep);
  const [loading, setLoading] = useState(false);
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
    resolver: zodResolver(educationBackgroundSchema),
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
  }
  return (
    <form className="sm:px-12 px-3 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Education Background
        </h5>
        <p>Please provide your name,email address,and phone number.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <TextInput
          label="Highest Level of Education"
          name="levelOfEducation"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Name of the last Institution Attended"
          name="previousInstitution"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Graduation Year"
          name="graduationYear"
          type="number"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
}
