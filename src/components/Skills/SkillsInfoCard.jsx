import React from "react";

const SkillsInfoCard = ({ heading, skills }) => {
    return (
        <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
            <h6 className="text-2xl font-semibold mb-4">{heading}</h6>

            <div className="space-y-4">
                {skills.map((item, index) => {
                    return(
                        <React.Fragment key={`skill_${index}`}>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-700">{item.skill}</p>
                            <p className="text-gray-500">{item.percentage}</p>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-blue-300 h-2.5 rounded-ful"
                                style={{width: item.percentage}}
                            />
                        </div>
                    </React.Fragment>
                    )
                })}
            </div>
        </div>
    );
};

export default SkillsInfoCard;


