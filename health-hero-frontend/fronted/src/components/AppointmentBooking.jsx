import React, { useState } from "react";

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (!formData.patient) validationErrors.patient = "Please select a patient.";
    if (!formData.doctor) validationErrors.doctor = "Please select a doctor.";
    if (!formData.date) validationErrors.date = "Please choose a date.";
    if (!formData.time) validationErrors.time = "Please choose a time.";
    if (!formData.description) validationErrors.description = "Description is required.";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate API call
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Appointment booked successfully!");
        setFormData({ patient: "", doctor: "", date: "", time: "", description: "" });
      } else {
        alert("Error booking appointment.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Patient</label>
            <select
              name="patient"
              value={formData.patient}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.patient ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
            >
              <option value="">Select a Patient</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
            </select>
            {errors.patient && <p className="text-red-500 text-sm mt-1">{errors.patient}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.doctor ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
            >
              <option value="">Select a Doctor</option>
              <option value="Dr. Emily Clark">Dr. Emily Clark</option>
              <option value="Dr. Mark Thompson">Dr. Mark Thompson</option>
            </select>
            {errors.doctor && <p className="text-red-500 text-sm mt-1">{errors.doctor}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.date ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.time ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter the reason for the appointment"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;
