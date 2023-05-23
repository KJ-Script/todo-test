import React from 'react'

function TutorialPage() {
  return (
    <div className="w-[75%] flex justify-center h-screen my-[5%] space-x-10">
        <div className="flex flex-col space-y-3">
            <button id="button-1" className="bg-blue-400 text-white px-5 py-3 rounded-md">A button to be pressed</button>
            <button data-cy="button3" className="bg-blue-400 text-white px-5 py-3 rounded-md">A button to be pressed</button>
            <input type="submit" placeholder="text goes here" className="bg-blue-400 text-white px-5 py-3 rounded-md"/>
            <button class="button-2">A button to be pressed</button>

        </div>

        <div className="flex flex-col space-y-3">
            <input type="text" placeholder="text goes here" className="bg-blue-400 text-white px-5 py-3 rounded-md"/>
            <input type="password"placeholder="pwd goes here" className="bg-blue-400 text-white px-5 py-3 rounded-md"/>

        </div>
        
    </div>
  )
}

export default TutorialPage