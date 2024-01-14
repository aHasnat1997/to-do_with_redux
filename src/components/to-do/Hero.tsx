import { useEffect, useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";

function Hero() {
    const [date, setDate] = useState(new Date().toISOString());
    useEffect(() => {
        setInterval(() => setDate(new Date().toISOString()), 10000);
    }, []);

    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

    return (
        <section className='h-full w-full py-16 pl-8 lg:pl-40 flex flex-col justify-between'>
            <div className='text-4xl text-white'><FaBarsStaggered /></div>
            <h1 className='text-4xl lg:text-6xl text-white font-bold'>Your Personal <br /> To-Do List...</h1>
            <div>
                <p className='text-4xl lg:text-7xl text-white'>{new Intl.DateTimeFormat('en-US', timeOptions).format(new Date(date))}</p>
                <p className='lg:text-4xl text-white'>{new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(date))}</p>
            </div>
        </section>
    )
}

export default Hero;