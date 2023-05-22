
import { FiCamera } from 'react-icons/fi';
import { BiVolumeMute, BiCurrentLocation } from 'react-icons/bi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import {RiCameraLensLine} from 'react-icons/ri';
import{AiOutlineSound} from 'react-icons/ai';
import { motion } from 'framer-motion'

const App = () => {
    return (
        <>
            <div className="flex min-h-screen  p-24 flex space-x-6 text-sm">
            <div className='w-full space-y-8 justify-center items-center'>
                <div className='space-y-10 p-10'>
                  <div className='flex space-x-6'>
                    <div className='flex space-x-4 items-center '>
                        <button className='p-6 bg-gray-900 rounded-full '>
                            <FiCamera className='text-white ' />
                        </button>
                        <p>High resolution <br/> Camera</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className='p-6 bg-gray-900 rounded-full '>
                            <BiVolumeMute className="" style={{ fill: 'white' }} />
                        </button>
                        <p className="ml-2">Noise Cancellation <br/> technology</p>
                    </div>
                </div>

                <div className='flex space-x-6'>
                    <div className="flex items-center space-x-4 ">
                        <button className='p-6 bg-gray-900 rounded-full '>
                            <BiCurrentLocation className='text-white'/>
                        </button>
                        <p>GPS navigation <br/> system</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className='p-6 bg-gray-900 rounded-full '>
                            <MdOutlineWaterDrop className='text-white'/>
                        </button>
                        <p>Waterproof design</p>
                    </div>
                </div>
            </div>
            </div>
                {/*blurred texts*/}
                <div className='space-y-4 w-full'>
                    <div className='flex space-x-2 text-sm'>
                    <span className='bg-gray-900 w-64 flex space-x-4 rounded-md p-2 text-white '>
                        <span className='flex justify-center items-center'>
                            <RiCameraLensLine className='text-white w-10 h-10'/>
                        </span>
                        <p className='text-white text-sm'>Capture Stunning, details photos and videos</p>
                    </span>
                        <ul>
                            <li>Preserve Memories</li>
                            <li>Create lasting impressions</li>
                        </ul>
                    </div>
                        <div className='flex space-x-2 text-sm'>
                            <span className='bg-gray-900 w-64 flex space-x-4 rounded-md p-2 text-white'>
                                <span className='flex justify-center items-center'>
                        <AiOutlineSound className='text-white w-10 h-10'/>
                                </span>
                        <p className=''>Immerse yourself in pure, interrupted sound</p>
                        </span>
                            <ul>
                                <li>Block out background noise</li>
                                <li>Enhance your productivity</li>
                            </ul>
                        </div>

                    <div className='flex space-x-2 text-sm'>
                        <span className='bg-gray-900 w-64 flex space-x-4 rounded-md p-2 text-white'>
                            <span className='flex justify-center items-center'>
                        <BiCurrentLocation className='text-white w-10 h-10'/>
                            </span>
                        <p>Easily find your way to any destination</p>
                        </span>
                        <ul>
                            <li>Seamlessly Navigate</li>
                            <li>Save time, reduce stress</li>
                        </ul>

                    </div>

                    <div className='flex space-x-2 text-sm'>
                        <span className='bg-gray-900 w-64 flex space-x-4 rounded-md p-2 text-white'>
                            <span className='flex justify-center items-center'>
                        <FiCamera className='text-white w-10 h-10'/>
                            </span>
                        <p>use the device worry-free in various environment</p>
                         </span>
                        <ul>
                            <li>Withstand water exposure</li>
                            <li>Providing peace of mind.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </>

    )
}

export  default App
