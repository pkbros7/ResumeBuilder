import React from "react";
import formStyles from "./styles/FormStyles.module.scss";
import BasicDetails from "./components/basicDetails";

const ResumeForm = () => {
  return (
    <div className={formStyles.container}>
      <BasicDetails />
    </div>
  );
};

export default ResumeForm;
