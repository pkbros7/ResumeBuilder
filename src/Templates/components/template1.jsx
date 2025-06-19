import React, { useEffect, useState } from "react";
import templateStyles from "../styles/template1.module.scss";
import { useSelector } from "react-redux";

const Template1 = () => {
  const studentDetails = useSelector((state) => state);

  const basicDetails = studentDetails?.basicDetails?.basicDetails || {};

  const [profile, setProfile] = useState("");

  useEffect(() => {
    const file = basicDetails?.profile;

    if (file) {
      const imageReader = new FileReader();

      imageReader.onloadend = () => {
        setProfile(imageReader.result);
      };

      imageReader.readAsDataURL(file);
    }
  }, [basicDetails?.profile]);

  return (
    <div className={templateStyles.container}>
      <img src={profile} width={"10%"} />

      <div>{basicDetails?.firstName}</div>
      <div>{basicDetails?.middleName}</div>
      <div>{basicDetails?.lastName}</div>
      <div>{basicDetails?.email}</div>
      <div>{basicDetails?.phone}</div>
      <div>{basicDetails?.dob}</div>
      <div>{basicDetails?.proffesionalSummary}</div>
    </div>
  );
};

export default Template1;
