import React from "react";
import formStyles from "./styles/FormStyles.module.scss";
import BasicDetails from "./components/basicDetails";
import EducationDetails from "./components/educationDetails";

const ResumeForm = () => {
  return (
    <div className={formStyles.container}>
      <BasicDetails />
      <EducationDetails />
    </div>
  );
};

export default ResumeForm;
