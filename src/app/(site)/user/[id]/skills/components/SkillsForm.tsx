'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'

export default function SkillsForm({id}: {id: string}) {
    const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full"
  return (
    <form className='mt-4 flex flex-col w-full px-8'>
        <div className="md:grid md:grid-cols-2 md:gap-4 md:h-screen justify-between">
            <div className='text-slate-400 text-sm'>
                <input type="text" placeholder="Skill 1"    className={inputStyle}/>
                <input type="text" placeholder="Skill 2"    className={inputStyle}/>
                <input type="text" placeholder="Skill 3"    className={inputStyle}/>
                <input type="text" placeholder="Skill 4"    className={inputStyle}/>
                <input type="text" placeholder="Skill 5"    className={inputStyle}/>
            </div>
            <div className='text-slate-400 text-sm'>
                <input type="text" placeholder="Skill 6"    className={inputStyle}/>
                <input type="text" placeholder="Skill 7"    className={inputStyle}/>
                <input type="text" placeholder="Skill 8"    className={inputStyle}/>
                <input type="text" placeholder="Skill 9"    className={inputStyle}/>
                <input type="text" placeholder="Skill 10"   className={inputStyle}/>
            </div>
        </div>
    </form>
  )
}
