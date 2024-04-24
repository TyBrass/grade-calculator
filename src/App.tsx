import { useState } from 'react'
import './App.css'

function App() {

    const [grades, setGrades] = useState<[number, number][]>([[0, 0], [0, 0], [0, 0], [0, 0]])

  return (
    <div className='flex flex-col items-center align-items h-screen max-w-[800px]'>
        <h1>Grade Calculator</h1>
        <p className='my-[10px] max-w-[600px]'>Input weighting and received grades for each piece of coursework to see what average is required on remaining coursework to achieve certain final marks in your class</p>
        <div className='bg-slate-200 w-[400px]'>
            <div className='flex justify-evenly'>
                <h2>Weights</h2>
                <h2>Grades</h2>
            </div>
            {grades.map(c => (
                <>
                <div className='flex justify-evenly mb-[8px]'>
                    <input className='w-[50px]' type="number" min='0' max='100' placeholder='0' />
                    <input className='w-[50px]' type="number" min='0' max='100' placeholder='0' />
                </div>
                </>
            ))}
            <div className='flex justify-evenly mb-[4px] border-t-2 border-white'>
                <div>
                    <h2 className='italic'>Weight Remaining</h2>
                    {100 * grades.reduce((accumulator, currentValue) => accumulator + currentValue[0], 0)}
                </div>
                <div>
                    <h2 className='italic'>Current Grade</h2>
                    {grades.reduce((accumulator, currentValue) => accumulator + currentValue[0] * currentValue[1], 0) * grades.reduce((accumulator, currentValue) => accumulator + currentValue[0], 0)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
