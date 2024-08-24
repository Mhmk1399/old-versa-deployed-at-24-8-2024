import Image from 'next/image'
import {blogData} from '../../../lib/data';


const page = () => {
    return (
        <div className='bg-white  grid mx-auto grid-cols-1 '>
            <div className='px-4 mx-auto py-2 bg-gray-50 rounded-lg my-2 width-full grid grid-cols-1 gap-4'>
                {blogData.map((blog, index) => (
                    blog.contetTitle.map((title, i) => (
                        <div key={i} className='col-span-2 mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                            <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                                <Image 
                                    src={blog.image[i % blog.image.length]} 
                                    width={400} 
                                    height={400} 
                                    alt='versailles' 
                                    className='rounded-lg shadow-lg w-auto h-auto' 
                                />
                            </div>
                            <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                                <h1 id='contetTitle' className='text-2xl font-bold mx-auto'>{title}</h1>
                                <p id='contentDiscription' className='text-regular mx-auto mt-2'>{blog.contentDiscription[i]}</p>
                            </div>
                        </div>
                    ))
                ))}
                
                <div className='col-span-2 mx-auto width-full my-2 px-1.5 py-1.5 bg-white rounded-lg text-start mt-8 mb-16 pb-16' dir='rtl'>
                    <div className='text-start text-blue-500 font-bold text-medium'>
                        تاریخ اخرین آپدیت : {new Date().toLocaleString('fa-IR')}
                    </div>
                    <div className='mt-2 text-start text-green text-regular border-t border-green rounded px-4'>
                        <ol className='list-decimal list-inside'>
                            {blogData[0].refrences.map((ref, i) => (
                                <li key={i} className='py-2 border-b border-green'>
                                    <a href={ref.link} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                                        {ref.title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
