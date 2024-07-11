import React, { useState } from 'react'
import SkillCard from './SkillCard';
import SkillsInfoCard from './SkillsInfoCard';
import { SKILLS } from "../../utils/data.jsx"


function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };
    return (
        <>
            <div name="Skills" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5'>My <span className='text-red-700'>Skills</span></h1>

                <div className='flex flex-col md:flex-row gap-5'>

                    <div className="flex-1 grid gap-6 grid-cols-1 md:grid-cols-2 order-2 md:order-1">
                        {SKILLS.map((item) => {
                            return (
                                <SkillCard
                                    key={item.title}
                                    iconUrl={item.icon}
                                    title={item.title}
                                    isActive={selectedSkill.title === item.title}
                                    onClick={() => {
                                        handleSelectSkill(item);
                                    }}
                                />
                            )
                        })}
                    </div>

                    <div className='flex-1 mt-8 md:mt-0 order-1 md:order-2'>
                        <SkillsInfoCard
                            heading={selectedSkill.title}
                            skills={selectedSkill.skills} />

                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}

export default Skills