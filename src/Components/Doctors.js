import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.jpeg";
import profile2 from "../Assets/profile-2.jpg";
import profile3 from "../Assets/profile-3.jpg";
import profile4 from "../Assets/profile-4.jpg";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Experts </span>
        </h3>

        <p className="dt-description">
        Experience the Benefits of Advanced Technology and Expert Care
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Kshama"
          title="M.Sc (Advanced Sports Therapy & Rehabilitation Science)"
          stars="9+ years of exp"
          reviews="Sports PhysioTherapy"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Ritika"
          title="M.Sc (Neuro Rehabitilation)"
          stars="10+ years of exp"
          reviews="Chronic Low BACK-Pain"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Namita"
          title="MPTh (Musculoskeletal)"
          stars="23+ years of exp"
          reviews="Knee pain"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Radhika"
          title="MPTh (Musculoskeletal Sciences)"
          stars="13+ years of exp"
          reviews="Shoulder Pain"
        />
      </div>
    </div>
  );
}

export default Doctors;
