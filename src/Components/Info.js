import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          On a mission to make people's lives pain free
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Knee Pain"
          description="Knee pain is a common complaint affecting people of all ages. More than 15 crore Indians suffer from knee problems, imposing a huge Health burden on the country."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Neck Pain"
          description="Neck pain affects 10% to 20% of all adults. It is more common in women and  It is more likely to develop as you get older. If left untreated, neck pain can disrupt your daily activities and can cause lower quality of life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Ankle and Foot Pain"
          description="Most people will experience foot or ankle pain at some point in their lives. It is one of your body's most complex regions made up of 26 bones and 33 small joints that are held together by a network of soft tissue that includes muscles, tendons, ligaments, nerves, and blood vessels."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
