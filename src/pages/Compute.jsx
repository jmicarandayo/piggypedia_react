import React from 'react'
import { useState } from 'react';
import TopBar from '../components/TopBar';

const Compute = ({isOpen}) => {
    const [ show, setShow ] = useState(false);

  return (
    <div className='h-screen bg-[#F2F7F5]'>
        <div className={`duration-500 ${isOpen ? 'w-[calc(100vw-300px)]' : 'w-[calc(100vw-60px)]'}`}>
            <TopBar/>
            <div className='w-fit'>
                <div className='m-20'>
                    <div className='bg-white py-6 px-20'>
                        <h2 className='text-[#2E6943] text-lg mb-8 font-bold'>Liveweight</h2>
                        {/* Program Item */}
                        <div className='flex justify-between'>
                            <div>
                                <div>
                                    <h1 className='font-bold text-xl'>METRIC VERSION - Weight of your pig in KILOGRAMMES</h1>
                                    <ul className='py-4 px-8 list-decimal'>
                                        <li>Use the same procedure as above taking your measurement in <span className='italic'>Meters</span>.<p className=''>Then use the follwing formula.</p></li>
                                        <li>Square the <span className='italic'>Heart Girth</span> to get the <span className='italic'>Girth Result</span>.</li>
                                        <li>Now Multiply the <span className='italic'>Girth Result</span> by the <span className='italic'>Length</span> and MULTIPLY by 69.3</li>
                                        <li>You now have the wight of your pig in Kg.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='font-bold underline'>Example:</h2>
                                    <ul className='py-4 px-8 list-disc'>
                                        <li>Porky Pig has a <span className='italic'>Heart Girth</span> of 1.27 meters and a <span className='italic'>Length</span> of 1.02 meters.</li>
                                        <li>Square the <span className='italic'>Heart Girth</span> (1.27 x  1.27) = 1.6129 = <span className='italic'>Girth Result</span></li>
                                        <li>Multiply the <span className='italic'>Girth Result</span> (1.6129) by the <span className='italic'>Length</span> (1.02) and MULTIPLY by 69.3 = 114Kg.</li>
                                    </ul>
                                    <p className='px-4'>This procedure is reported to be accurate to within 3%.</p>
                                </div>
                            </div>
                            <div className='flex flex-col ml-20 mt-10'>
                                <div className='flex justify-between items-center gap-4 mt-2'>
                                    <label className='cursor-pointer text-[#2E6943] font-medium' htmlFor="girth">Heart Girth:</label>
                                    <input className='bg-[#F2F7F5] outline-none p-2 w-20' type="text"  id='girth'/>
                                </div>
                                <div className='flex justify-between items-center gap-4 mt-2'>
                                    <label className='cursor-pointer text-[#2E6943] font-medium' htmlFor="length">Length:</label>
                                    <input className='bg-[#F2F7F5] outline-none p-2 w-20' type="text"  id='length'/>
                                </div>
                                <button className='bg-[#00DDA2] text-white py-2 px-8 mt-3 w-fit self-center'>Compute</button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Compute