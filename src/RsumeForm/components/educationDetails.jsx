import React, { useEffect, useState } from "react";
import eduStyles from "../styles/eduStyles.module.scss";
import { Button, Collapse } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const EduTitles = [
  "10th / Secondary Education",
  "12th / Diploma ",
  "Degree / B.Tech",
  "P.G",
];
const EducationDetails = () => {
  const [educationLevel, setEducationLevel] = useState([
    { id: new Date().getTime() },
  ]);

  return (
    <div className={eduStyles.container}>
      <div className={eduStyles.headerTitle}>Education Details</div>

      <div className={eduStyles.eduBody}>
        {educationLevel?.map((eachLevel, index) => {
          return (
            <Collapse
              collapsible="header"
              items={[
                {
                  key: index,
                  label: (
                    <div className={eduStyles.collapseHead}>
                      <div>{EduTitles[index]}</div>
                      {index == educationLevel?.length - 1 && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            const removeLastElement = educationLevel?.slice(
                              0,
                              -1
                            );
                            setEducationLevel(removeLastElement);
                          }}
                        >
                          <DeleteOutlined />
                        </div>
                      )}
                    </div>
                  ),
                  children: (
                    <div>
                      <input
                        name="type"
                        placeholder="Enter Your Education Type"
                      />
                      <input
                        name="type"
                        placeholder="Enter Your Education Board"
                      />
                      <input
                        name="type"
                        placeholder="Enter Your Educational Institution Name "
                      />
                      <input name="type" placeholder="Enter Your HallTicket" />
                      <input name="type" placeholder="Enter Your StartDate" />
                      <input name="type" placeholder="Enter Your EndDate" />
                      <input
                        name="type"
                        placeholder="Enter Your Year Of Pass"
                      />
                      <input name="type" placeholder="Enter Your Grade" />
                      <input name="type" placeholder="Enter Your City" />
                      <input name="type" placeholder="Enter Your Stream" />
                      <textarea placeholder="Description" />
                    </div>
                  ),
                },
              ]}
            />
          );
        })}

        <br />
        <Button
          onClick={() => {
            if (educationLevel?.length == EduTitles?.length) {
              return;
            }
            setEducationLevel([
              ...educationLevel,
              { id: new Date().getTime() },
            ]);
          }}
        >
          Add More
        </Button>
      </div>
    </div>
  );
};

export default EducationDetails;
