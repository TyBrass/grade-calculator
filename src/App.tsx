import { useState } from 'react'
import githubLight from './assets/github-mark.png'
import githubDark from './assets/github-mark.png'
import './App.css'

function App() {
    const [grades, setGrades] = useState<[number, number][]>([[0, 0], [0, 0], [0, 0], [0, 0]])

    const weightSum = grades.reduce((accumulator, currentValue) => accumulator + currentValue[0], 0)
    console.log(weightSum)
    const remainingWeight = 100 - weightSum
    const currentGrade = 1.0 * grades.reduce((accumulator, currentValue) => accumulator + (currentValue[0] / (0.01 * weightSum)) * currentValue[1] * 0.01, 0) 

    const requiredGrade = (desiredGrade: number) => {
        const received = weightSum * currentGrade * 0.0001
        const desired = 0.01 * desiredGrade;
        const remaining = remainingWeight * 0.01
        return (desired - received) / remaining * 100
    }

  return (
    <>
    <a href="https://github.com/TyBrass/grade-calculator"><img src={githubLight} alt="github" className='w-[40px] h-[40px] ml-auto' /></a>
    <div className='flex flex-col items-center'>
        <h1>Grade Calculator</h1>
        <p className='my-[10px] max-w-[400px]'>Input weightings and grades for each piece of completed coursework to see what average is required in the remainder of the course to achieve certain final marks</p>
        <div className='bg-slate-200 w-[400px]'>
            <div className='flex justify-evenly'>
                <div className='flex flex-col mb-[4px]'>
                    <h2>Weight %</h2>
                    <ul>
                        {grades.map((c, index) => (
                            <li key={index} className='flex justify-evenly mb-[8px]'>
                                <input className='w-[50px]' type="number" min='0' max='100' placeholder='0' onChange={e => {
                                    const newGrades = [...grades]
                                    newGrades[index][0] = parseInt(e.target.value)
                                    setGrades(newGrades)
                                }} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col mb-[4px]'>
                    <h2>Grade %</h2>
                    <ul>
                        {grades.map((c, index) => (
                            <li key={index} className='flex justify-evenly mb-[8px]'>
                                <input className='w-[50px]' type="number" min='0' max='100' placeholder='0' onChange={e => {
                                    const newGrades = [...grades]
                                    newGrades[index][1] = parseInt(e.target.value)
                                    setGrades(newGrades)
                                }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className='w-[64%] h-[40px] leading-3 mb-[8px]'>+</button>
            <div className='flex justify-evenly border-t-4 border-white'>
                <div className='flex flex-col max-w-[120px]'>
                    <h2 className='italic'>Weight Left</h2>
                    {remainingWeight}%
                </div>
                <div className='flex flex-col'>
                    <h2 className='italic'>Current Grade</h2>
                    {remainingWeight === 100 ? '--' : currentGrade.toFixed(2) + '%'}
                </div>
            </div>
            <div className='flex justify-evenly mb-[4px] border-t-4 border-white'>
                <div>
                    <h2 className='italic'>To Get...%</h2>
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
                    <h2 className='italic'>You Need...%</h2>
                    <ul>
                        <li>{requiredGrade(0).toFixed(2)}</li>
                        <li>{requiredGrade(95).toFixed(2)}</li>
                        <li>{requiredGrade(90).toFixed(2)}</li>
                        <li>{requiredGrade(85).toFixed(2)}</li>
                        <li>{requiredGrade(80).toFixed(2)}</li>
                        <li>{requiredGrade(75).toFixed(2)}</li>
                        <li>{requiredGrade(70).toFixed(2)}</li>
                        <li>{requiredGrade(65).toFixed(2)}</li>
                        <li>{requiredGrade(60).toFixed(2)}</li>
                        <li>{requiredGrade(55).toFixed(2)}</li>
                        <li>{requiredGrade(50).toFixed(2)}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
