import React, { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.patient) errors.patient = "Patient is required.";
    if (!formData.doctor) errors.doctor = "Doctor is required.";
    if (!formData.date) errors.date = "Date is required.";
    if (!formData.time) errors.time = "Time is required.";
    if (!formData.notes) errors.notes = "Notes are required.";
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Submission logic
    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Consultation created successfully!");
        setFormData({ patient: "", doctor: "", date: "", time: "", notes: "" });
      } else {
        alert("Error creating consultation.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create Consultation
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Patient Field */}
          <div className="mb-4">
            <label className="block text-gray-600">Patient</label>
            <input
              type="text"
              name="patient"
              value={formData.patient}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.patient ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              placeholder="Patient Name"
            />
            {errors.patient && (
              <p className="text-red-500 text-sm mt-1">{errors.patient}</p>
            )}
          </div>

          {/* Doctor Field */}
          <div className="mb-4">
            <label className="block text-gray-600">Doctor</label>
            <input
              type="text"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.doctor ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              placeholder="Doctor Name"
            />
            {errors.doctor && (
              <p className="text-red-500 text-sm mt-1">{errors.doctor}</p>
            )}
          </div>

          {/* Date Field */}
          <div className="mb-4">
            <label className="block text-gray-600">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.date ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          {/* Time Field */}
          <div className="mb-4">
            <label className="block text-gray-600">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.time ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time}</p>
            )}
          </div>

          {/* Notes Field */}
          <div className="mb-4">
            <label className="block text-gray-600">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.notes ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              placeholder="Enter consultation details"
            />
            {errors.notes && (
              <p className="text-red-500 text-sm mt-1">{errors.notes}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
