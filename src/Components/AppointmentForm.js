import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientCity, setPatientCity] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [patientAge, setPatientAge] = useState("");
  const [patientComplaint, setPatientComplaint] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showPreviousExperienceBox, setShowPreviousExperienceBox] =
    useState(false);
  const [patientPreviousExperience, setPatientPreviousExperience] =
    useState("");

  useEffect(() => {
    // Show the box if the age is above 40
    setShowPreviousExperienceBox(patientAge > 40);
  }, [patientAge]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientCity.trim()) {
      errors.patientCity = "Patient city is required";
    } else if (patientCity.trim().length < 3) {
      errors.patientCity = "City name must be at least 3 characters";
    }

    if (!patientAge) {
      errors.patientAge = "Patient age is required";
    } else if (patientAge > 200) {
      errors.patientAge = "Enter the correct age of the patient";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }

    if (!patientComplaint.trim()) {
      errors.patientComplaint = "Patient Issues is required";
    } else if (patientComplaint.trim().length < 8) {
      errors.patientComplaint = "Patient issues must be at least 8 characters";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientAge("");
    setPatientCity("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setPatientComplaint("");
    setPatientPreviousExperience("");
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          FixHealth <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <br />

          <label>
            Patient age
            <input
              type="text"
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
              required
            />
            {formErrors.patientAge && (
              <p className="error-message">{formErrors.patientAge}</p>
            )}
          </label>

          <br />

          <label>
            Patient City
            <input
              type="text"
              value={patientCity}
              onChange={(e) => setPatientCity(e.target.value)}
              required
            />
            {formErrors.patientCity && (
              <p className="error-message">{formErrors.patientCity}</p>
            )}
          </label>

          <br />

          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>

          <br />

          <label>
            Patient Chief complaints:
            <textarea
              style={{
                width: "100%",
                padding: "15px",
                marginTop: "5px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
                resize: "vertical",
                transition: "all 0.3s ease",
                backgroundColor: "#ECF2FF",
              }}
              value={patientComplaint}
              onChange={(e) => setPatientComplaint(e.target.value)}
              required
            />
            {formErrors.patientComplaint && (
              <p className="error-message">{formErrors.patientComplaint}</p>
            )}
          </label>

          <br />

          {showPreviousExperienceBox && (
            <div>
              <label>
                Previous Experience with Physiotherapy:
                <textarea
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginTop: "5px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                    fontSize: "14px",
                    resize: "vertical",
                    transition: "all 0.3s ease",
                    backgroundColor: "#ECF2FF",
                  }}
                  value={patientPreviousExperience}
                  onChange={(e) => setPatientPreviousExperience(e.target.value)}
                />
              </label>
            </div>
          )}

          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && (
              <p className="error-message">{formErrors.appointmentTime}</p>
            )}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
              <option value="direct">Direct Consultation</option>
            </select>
            {formErrors.preferredMode && (
              <p className="error-message">{formErrors.preferredMode}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Appointment details have been sent to the patient's phone number via
            SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2013-2024 FixHealth. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
