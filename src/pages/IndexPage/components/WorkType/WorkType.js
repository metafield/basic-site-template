import React from "react";
import s from "./WorkType.module.css";

const WorkType = props => {
  return (
    <section className={s.container}>
      <div className={s.workType}>Residential</div>
      <div className={s.workType}>Commercial</div>
      <div className={s.workType}>Property Managment</div>
    </section>
  );
};

export default WorkType;
