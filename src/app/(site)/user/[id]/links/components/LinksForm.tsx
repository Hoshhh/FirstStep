'use client'
import React, { FormEventHandler, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LinksForm({ id, onClose }: { id: string, onClose:() => void }) {
  const inputStyle = "my-2 p-2 border border-slate-300 rounded w-full";
  const [links, setLinks] = useState<string[]>([]); // State for skills array
  const [portfolioValue, setPortfolioValue] = useState('');
  const [githubValue, setGithubValue] = useState('');
  const [linkedinValue, setLinkedinValue] = useState('');
  const router = useRouter()

  const uriBase = process.env.NODE_ENV === 'development' 
   ? 'http://localhost:3000'
   : process.env.APP_URL

  useEffect(() => {
    fetch(`${uriBase}/api/user/${id}`)
      .then(response => response.json())
      .then(data => {
            if (data.links != null) {
                const parsedLinks = JSON.parse(data.links);
                setLinks(parsedLinks);
                setPortfolioValue(parsedLinks[0] || '');
                setGithubValue(parsedLinks[1] || '');
                setLinkedinValue(parsedLinks[2] || '');
            }
        })
      .catch(error => console.error(error))
  }, [id])


   const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const newLinks = [ portfolioValue, githubValue, linkedinValue ];

    setLinks(newLinks);
    await fetch(`${uriBase}/api/user/${id}/links`, {
      method: 'PATCH',                                                              
      body: JSON.stringify({
        links: JSON.stringify(newLinks)
      })                             
    })
    onClose()
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col w-full h-full px-8">
        <div className='py-2'> 
            <label htmlFor="portfolio">Portfolio</label>
            <input type="text" value={portfolioValue} onChange={(e) => setPortfolioValue(e.target.value)} className={inputStyle} id='portfolio'/>
            <label htmlFor="github">Github</label>
            <input type="text" value={githubValue} onChange={(e) => setGithubValue(e.target.value)} className={inputStyle} id='github'/>
            <label htmlFor="linkedin">LinkedIn</label>
            <input type="text" value={linkedinValue} onChange={(e) => setLinkedinValue(e.target.value)} className={inputStyle} id='linkedin'/>
      </div>
      <div className='flex flex-col h-full sm:items-end'>
        <button
          type='submit'
          className="p-2 pl-4 pr-4 sm:mb-2 text-sm uppercase rounded-full text-slate-100 bg-green-700 w-3/4 sm:w-2/6"
        >
            Save Changes
        </button>
      </div>
    </form>
  );
}