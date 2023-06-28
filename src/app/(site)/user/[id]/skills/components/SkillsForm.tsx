'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'

export default function SkillsForm({id}: {id: string}) {
    const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full"
    const [skills, setSkills] = useState<string[]>([])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target
        const updatedSkills = [...skills]
        updatedSkills[index] = value
        setSkills(updatedSkills)
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        // Handle the submission of skills array
        console.log(skills)
    }

  return (
    <form className='mt-4 flex flex-col w-full px-8' onSubmit={handleSubmit}>
        <div className="md:grid md:grid-cols-2 md:gap-4 justify-between">
            <div className='text-slate-400 text-sm'>
                <input type="text" placeholder="Skill 1"    className={inputStyle} value={skills[0] || ''} onChange={(e) => handleInputChange(e, 0)} />
                <input type="text" placeholder="Skill 2"    className={inputStyle} value={skills[1] || ''} onChange={(e) => handleInputChange(e, 1)} />
                <input type="text" placeholder="Skill 3"    className={inputStyle} value={skills[2] || ''} onChange={(e) => handleInputChange(e, 2)} />
                <input type="text" placeholder="Skill 4"    className={inputStyle} value={skills[3] || ''} onChange={(e) => handleInputChange(e, 3)} />
                <input type="text" placeholder="Skill 5"    className={inputStyle} value={skills[4] || ''} onChange={(e) => handleInputChange(e, 4)} />
            </div>
            <div className='text-slate-400 text-sm'>
                <input type="text" placeholder="Skill 6"    className={inputStyle} value={skills[5] || ''} onChange={(e) => handleInputChange(e, 5)} />
                <input type="text" placeholder="Skill 7"    className={inputStyle} value={skills[6] || ''} onChange={(e) => handleInputChange(e, 6)} />
                <input type="text" placeholder="Skill 8"    className={inputStyle} value={skills[7] || ''} onChange={(e) => handleInputChange(e, 7)} />
                <input type="text" placeholder="Skill 9"    className={inputStyle} value={skills[8] || ''} onChange={(e) => handleInputChange(e, 8)} />
                <input type="text" placeholder="Skill 10"   className={inputStyle} value={skills[9] || ''} onChange={(e) => handleInputChange(e, 9)} />
            </div>
        </div>
        <div className='flex justify-end mt-4'>
            <button 
                type='submit'
                className="p-2 pl-4 pr-4 text-sm uppercase rounded-full text-slate-100 bg-sky-700"
            >
                Submit
            </button>
        </div>
    </form>
  )
}
