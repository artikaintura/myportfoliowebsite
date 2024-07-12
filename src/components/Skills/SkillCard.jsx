import React from "react";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
    return (
        <div className={`relative p-4 border rounded-lg cursor-pointer transition-all duration-200
         ${isActive ? "border-red-700 bg-blue-100" : "border-gray-300 bg-white"}`}
            onClick={() => onClick()}
        >

            <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-r from-pink-300 to-purple-200 rounded-md border border-pink-700 absolute -top-3 -left-0">
                <img src={iconUrl} alt={title} className="w-10 h-auto object-contain"/>
            </div>

            <span className="block text-center text-lg font-medium mt-10"> {title}</span>
        </div>

    );
};

export default SkillCard;