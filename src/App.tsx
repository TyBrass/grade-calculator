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
                <div className='flex flex-col justify-evenly mb-[4px]'>
                    <h2>Weights</h2>
                    <ul>
                        {grades.map(c => (
                            <>
                            <li className='flex justify-evenly mb-[8px]'>
                                <input className='w-[50px]' type="number" min='0' max='100' placeholder='0' />
                            </li>
                            </>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col justify-evenly mb-[4px]'>
                    <h2>Grades</h2>
                    <ul>
                        {grades.map(c => (
                            <>
                            <li className='flex justify-evenly mb-[8px]'>
                                <input className='w-[50px]' type="number" min='0' max='100' placeholder='0' />
                            </li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex justify-evenly mb-[4px] border-t-4 border-white'>
                <div>
                    <h2 className='italic'>Weight Remaining</h2>
                    {100 * grades.reduce((accumulator, currentValue) => accumulator + currentValue[0], 0)}
                </div>
                <div>
                    <h2 className='italic'>Current Grade</h2>
                    {grades.reduce((accumulator, currentValue) => accumulator + currentValue[0] * currentValue[1], 0) * grades.reduce((accumulator, currentValue) => accumulator + currentValue[0], 0)}
                </div>
            </div>
            <div className='flex justify-evenly mb-[4px] border-t-4 border-white'>
                <div>
                    <h2 className='italic'>To Get...</h2>
                    <ul>
                        <li><input className='w-[50px] text-center' type="number" min='0' max='100' placeholder='0' /></li>
                        <li>95</li>
                        <li>90</li>
                        <li>85</li>
                        <li>80</li>
                        <li>75</li>
                        <li>70</li>
                        <li>65</li>
                        <li>60</li>
                        <li>55</li>
                        <li>50</li>
                    </ul>
                </div>
                <div>
                    <h2 className='italic'>You Need...</h2>
                    <ul>
                        <li><input className='w-[50px] text-center' type="number" min='0' max='100' placeholder='0' /></li>
                        <li>{0}</li>
                        <li>{0}</li>
                        <li>{0}</li>
                        <li>{0}</li>
                        <li>{0}</li>
                        <li>{0}</li>
                        <li>{0}</li>
                        <li>{0}</li>
                        <li>{0}</li>
                        <li>{0}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
