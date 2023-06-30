'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'

export default function SkillsForm({ id }: { id: string }) {
  const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
  const [isAdding, setIsAdding] = useState(false);
  const [skillValue, setSkillValue] = useState(""); // State for input value
  const [skills, setSkills] = useState<string[]>([]); // State for skills array

  const handleAddSkill = () => {
    const skill = skillValue.trim();

    if (skill !== "" && skills.length < 10) {
      setSkills([...skills, skill]); // Add skill to the skills array
      setSkillValue("") //clear input
    }

    setIsAdding(false);
  };

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

   const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await fetch(`http://localhost:3000/api/user/${id}/skills`, {
      method: 'PATCH',                                                              
      body: JSON.stringify({
        skills: JSON.stringify(skills)
      })                             
    })
    console.log(JSON.stringify(skills))
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col w-full h-full px-8">
        <div className='py-2'>
            <p className='text-xs text-slate-400 p-2 text-center'>Click skills to remove them</p>
            <ul className='flex flex-wrap'>
                {skills.map((skill, index) => (
                <li 
                    key={index} 
                    onClick={() => handleRemoveSkill(index)}
                    className='mx-1 my-2 p-1 px-2 border border-r-2 rounded-2xl border-emerald-700 bg-emerald-700 text-slate-100'
                >{skill}</li>
                ))}
            </ul>
        </div>
        <div className='py-2'>
            {!isAdding ? (
                <button
                className="p-2 pl-4 pr-4 text-sm uppercase rounded-full text-slate-100 bg-sky-700 w-3/4 sm:w-2/6"
                onClick={() => {
                    setIsAdding(true);
                }}
                >
                Add Skill
                </button>
            ) : (
                <div>
                    <input type="text" value={skillValue} onChange={(e) => setSkillValue(e.target.value)} className={inputStyle} />
                    <button
                        className="p-2 pl-4 pr-4 text-sm uppercase rounded-full text-slate-100 bg-sky-700 w-1/4"
                        onClick={handleAddSkill} // Call handleAddSkill on button click
                    >
                        Add Skill
                    </button>
                </div>
            )}
      </div>
      <div className='flex flex-col h-full sm:items-end'>
        <button
          type='submit'
          className="p-2 pl-4 pr-4 sm:mb-2 text-sm uppercase rounded-full text-slate-100 bg-green-700 w-3/4 sm:w-2/6"
          onClick={handleAddSkill}
        >
            Save Changes
        </button>
      </div>
    </form>
  );
}