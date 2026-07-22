"use client";

import { useState } from "react";

function InputField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#111827] mb-2">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 border border-[#D1D5DB] rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#071B3B]/20"
      />
    </div>
  );
}

export default function LeadForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    industryCategory: "",
    address: "",
    location: "",
    contactPersonName: "",
    phoneNumber: "",
    email: "",
    website: "",
    linkedinPage: "",
    instagramPage: "",
    youtubePage: "",
    googleMapsLink: "",
    serviceOffered: "",
    yearsOfExperience: "",
    employeeCount: "",
    targetMarket: "",
    leadPriority: "",
    reasonForPriority: "",
    strength: "",
    weakness: "",
    opportunity: "",
    bestTimeToContact: "",
    addedDate: "",
    leadSource: "",
    leadOwner: "",
    additionalNotes: "", 
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create lead");
      }

      alert("Lead Added Successfully ✅");

      setFormData({
        companyName: "",
        businessType: "",
        industryCategory: "",
        address: "",
        location: "",
        contactPersonName: "",
        phoneNumber: "",
        email: "",
        website: "",
        linkedinPage: "",
        instagramPage: "",
        youtubePage: "",
        googleMapsLink: "",
        serviceOffered: "",
        yearsOfExperience: "",
        employeeCount: "",
        targetMarket: "",
        leadPriority: "",
        reasonForPriority: "",
        strength: "",
        weakness: "",
        opportunity: "",
        bestTimeToContact: "",
        addedDate: "",
        leadSource: "",
        leadOwner: "",
        additionalNotes: "", 
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-8">
        Lead Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">

        <InputField
          label="Company Name"
          value={formData.companyName}
          onChange={(value) =>
            setFormData({ ...formData, companyName: value })
          }
        />

        <InputField
          label="Business Type"
          value={formData.businessType}
          onChange={(value) =>
            setFormData({ ...formData, businessType: value })
          }
        />

        <InputField
          label="Industry Category"
          value={formData.industryCategory}
          onChange={(value) =>
            setFormData({
              ...formData,
              industryCategory: value,
            })
          }
        />

        <InputField
          label="Address"
          value={formData.address}
          onChange={(value) =>
            setFormData({ ...formData, address: value })
          }
        />

        <InputField
          label="Location"
          value={formData.location}
          onChange={(value) =>
            setFormData({ ...formData, location: value })
          }
        />

        <InputField
          label="Contact Person Name"
          value={formData.contactPersonName}
          onChange={(value) =>
            setFormData({
              ...formData,
              contactPersonName: value,
            })
          }
        />

        <InputField
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={(value) =>
            setFormData({
              ...formData,
              phoneNumber: value,
            })
          }
        />

        <InputField
          label="Email ID"
          value={formData.email}
          onChange={(value) =>
            setFormData({ ...formData, email: value })
          }
        />

        <InputField
          label="Website"
          value={formData.website}
          onChange={(value) =>
            setFormData({ ...formData, website: value })
          }
        />

        <InputField
          label="LinkedIn Page"
          value={formData.linkedinPage}
          onChange={(value) =>
            setFormData({
              ...formData,
              linkedinPage: value,
            })
          }
        />

        <InputField
          label="Instagram Page"
          value={formData.instagramPage}
          onChange={(value) =>
            setFormData({
              ...formData,
              instagramPage: value,
            })
          }
        />

        <InputField
          label="Youtube Page"
          value={formData.youtubePage}
          onChange={(value) =>
            setFormData({
              ...formData,
              youtubePage: value,
            })
          }
        />

        <InputField
          label="Google Maps Link"
          value={formData.googleMapsLink}
          onChange={(value) =>
            setFormData({
              ...formData,
              googleMapsLink: value,
            })
          }
        />

        <InputField
          label="Service / Product Offered"
          value={formData.serviceOffered}
          onChange={(value) =>
            setFormData({
              ...formData,
              serviceOffered: value,
            })
          }
        />

        <InputField
          label="Years Of Experience"
          value={formData.yearsOfExperience}
          onChange={(value) =>
            setFormData({
              ...formData,
              yearsOfExperience: value,
            })
          }
        />

        <InputField
          label="No. Of Employees (approx.)"
          value={formData.employeeCount}
          onChange={(value) =>
            setFormData({
              ...formData,
              employeeCount: value,
            })
          }
        />

        <InputField
          label="Target Market"
          value={formData.targetMarket}
          onChange={(value) =>
            setFormData({
              ...formData,
              targetMarket: value,
            })
          }
        />

        <InputField
          label="Lead Priority"
          value={formData.leadPriority}
          onChange={(value) =>
            setFormData({
              ...formData,
              leadPriority: value,
            })
          }
        />

        <InputField
          label="Reason For Priority"
          value={formData.reasonForPriority}
          onChange={(value) =>
            setFormData({
              ...formData,
              reasonForPriority: value,
            })
          }
        />

        <InputField
          label="Strength"
          value={formData.strength}
          onChange={(value) =>
            setFormData({
              ...formData,
              strength: value,
            })
          }
        />

        <InputField
          label="Weakness"
          value={formData.weakness}
          onChange={(value) =>
            setFormData({
              ...formData,
              weakness: value,
            })
          }
        />

        <InputField
          label="Opportunity"
          value={formData.opportunity}
          onChange={(value) =>
            setFormData({
              ...formData,
              opportunity: value,
            })
          }
        />

        <InputField
          label="Best Time To Contact"
          value={formData.bestTimeToContact}
          onChange={(value) =>
            setFormData({
              ...formData,
              bestTimeToContact: value,
            })
          }
        />

        <InputField
          label="Added Date"
          value={formData.addedDate}
          onChange={(value) =>
            setFormData({
              ...formData,
              addedDate: value,
            })
          }
        />

        <InputField
          label="Lead Source"
          value={formData.leadSource}
          onChange={(value) =>
            setFormData({
              ...formData,
              leadSource: value,
            })
          }
        />

        <InputField
          label="Lead Owner"
          value={formData.leadOwner}
          onChange={(value) =>
            setFormData({
              ...formData,
              leadOwner: value,
            })
          }
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Additional Notes
        </label>

        <textarea
          rows={5}
          value={formData.additionalNotes} 
          onChange={(e) =>
          setFormData({
            ...formData,
            additionalNotes: e.target.value,
          })
        }
          className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3"
        />
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button
          type="button"
          className="px-6 py-3 border border-gray-300 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="bg-[#071B3B] text-white px-8 py-3 rounded-lg hover:bg-[#0A2955] transition"
        >
          Add Lead
        </button>
      </div>
    </div>
  );
}