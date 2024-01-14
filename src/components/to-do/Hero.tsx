import { useEffect, useState } from 'react';
import bgImg from '../../assets/bg-2.jpg';
import { FaBarsStaggered } from "react-icons/fa6";

function Hero() {
    const [date, setDate] = useState(new Date().toISOString());
    useEffect(() => {
        setInterval(() => setDate(new Date().toISOString()), 10000);
    }, []);

    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

    return (
        <section
            className='h-screen w-full'
            style={{
                backgroundImage: `radial-gradient(#0000005b, #000000), url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='container h-full py-12 flex flex-col justify-between'>
                <div className='text-6xl text-white'><FaBarsStaggered /></div>
                <h1 className='text-9xl text-white font-bold'>Personal <br /> To-Do</h1>
                <div>
                    <p className='text-7xl text-white'>{new Intl.DateTimeFormat('en-US', timeOptions).format(new Date(date))}</p>
                    <p className='text-4xl text-white'>{new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(date))}</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;