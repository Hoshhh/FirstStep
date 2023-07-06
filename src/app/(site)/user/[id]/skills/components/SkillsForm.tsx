'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SkillsForm({ id, onClose }: { id: string, onClose:() => void }) {
  const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
  const [isAdding, setIsAdding] = useState(false);
  const [skillValue, setSkillValue] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const router = useRouter()

  const uriBase = process.env.NODE_ENV === 'development' 
   ? 'http://localhost:3000'
   : process.env.APP_URL

  useEffect(() => {
    fetch(`${uriBase}/api/user/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.skills != null) {
          setSkills(JSON.parse(data.skills))
        }
      })
      .catch(error => console.error(error))
  }, [id])

  const handleAddSkill = () => {
    const skill = skillValue.trim();

    if (skill !== "" && skills.length < 10) {
      setSkills([...skills, skill]);
      setSkillValue("")
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
    await fetch(`${uriBase}/api/user/${id}/skills`, {
      method: 'PATCH',                                                              
      body: JSON.stringify({
        skills: JSON.stringify(skills)
      })                             
    })
    onClose()
    router.refresh()
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
                        className="p-2 pl-4 pr-4 text-sm uppercase rounded-full text-slate-100 bg-sky-700 w-3/4 sm:w-2/6"
                        onClick={handleAddSkill}
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