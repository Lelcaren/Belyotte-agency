import React from 'react';
import Checkbox12121 from "./Checkbox";
import Button112 from "./Button";
import PropTypes from "prop-types";

const Form1121 = ({ className = "" }) => {
  return (
    <section
      className={`
        w-full 
        max-w-[1440px] 
        mx-auto 
        bg-steelblue 
        overflow-hidden 
        flex flex-col 
        items-center 
        justify-start 
        py-16 sm:py-24 
        px-4 sm:px-8 md:px-12 
        box-border 
        gap-10 
        sm:gap-16 
        text-center 
        text-base 
        text-white 
        font-text-regular-link
        ${className}
      `}
    >
      <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          We're here to assist you with your application.
        </p>
      </div>

      <div className="w-full max-w-[560px] flex flex-col items-center justify-start gap-8 text-left bg-white p-8 rounded-lg shadow-lg">
        {/* First Name & Last Name */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-sm font-semibold">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
          <label className="text-sm font-semibold">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
        </div>

        {/* Birth Date */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-sm font-semibold">Birth Date</label>
          <input
            type="date"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-sm font-semibold">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
        </div>

        {/* Phone & Email */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-sm font-semibold">Phone</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
        </div>

        {/* Marital Status */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-sm font-semibold">Marital Status</label>
          <select className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm">
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>
        </div>

        {/* Highest Level of Education */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-sm font-semibold">
            Highest Level of Education
          </label>
          <input
            type="text"
            placeholder="Education Level"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
        </div>

        {/* High School & Score */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-sm font-semibold">High School Attended</label>
          <input
            type="text"
            placeholder="High School Name"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
          <label className="text-sm font-semibold">Year Completed</label>
          <input
            type="number"
            placeholder="Year"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
          <label className="text-sm font-semibold">
            High School Grade Scored
          </label>
          <input
            type="text"
            placeholder="Grade"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
        </div>

        {/* Program Start Date & Country */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-sm font-semibold">
            Planned Start Date for the Program
          </label>
          <input
            type="date"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
          <label className="text-sm font-semibold">Country of Interest</label>
          <select className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm">
            <option>Canada</option>
            <option>USA</option>
            <option>UK</option>
            <option>Australia</option>
          </select>
        </div>

        {/* Current Profession & Passport Number */}
        <div className="flex flex-col gap-4 w-full">
          <label className="text-sm font-semibold">Current Profession</label>
          <input
            type="text"
            placeholder="Your Profession"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
          <label className="text-sm font-semibold">Passport Number</label>
          <input
            type="text"
            placeholder="Passport Number"
            className="border p-3 rounded-md focus:ring-2 focus:ring-steelblue shadow-sm"
          />
        </div>

        {/* Checkbox & Submit Button */}
        <Checkbox12121 alternate={false} selected={false} />
        <Button112
          alternate={false}
          iconPosition="No icon"
          small={false}
          style="Primary"
          button="Submit"
        />
      </div>
    </section>
  );
};

Form1121.propTypes = {
  className: PropTypes.string,
};

export default Form1121;
