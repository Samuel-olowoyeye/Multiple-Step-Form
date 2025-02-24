"use client";
import NavButtons from "@/components/FormInputs/NavButtons";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import {
  setCurrentStep,
  updateFormData,
} from "@/redux/slices/onboardingStudentsSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {personalInfoSchema} from "../../../schemas/PersonalInfoSchema"

import { useDispatch, useSelector } from "react-redux";

export default function PersonalInfoForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const formData = useSelector((store) => store.onboarding.formData);
  console.log(formData, currentStep);
  const [loading, setLoading] = useState(false);
  const gender = [
    {
      id: "--Select Gender--",
      title: "-- select gender --",
    },
    {
      id: "male",
      title: "Male",
    },
    {
      id: "female",
      title: "Female",
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
    resolver: zodResolver(personalInfoSchema),
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
        <h5 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Personal info
        </h5>
        <p>Please provide your name,email address,and phone number.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <TextInput
          label="Full Name"
          name="name"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          register={register}
          errors={errors}
         
        />
        <SelectInput
          label="Gender"
          name="gender"
          register={register}
          options={gender}
          errors={errors}
        />
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
        <TextInput
          label="Home Address"
          name="address"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Country of Residence"
          name="country"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
}
