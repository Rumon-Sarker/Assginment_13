"use client"
import { useState } from 'react';
import { setCookie } from 'nookies';

const SetCookiePage = () => {
    const [userPreference, setUserPreference] = useState('');

    const handleButtonClick = () => {
        // Set the user preference cookie
        setCookie(null, 'userPreference', userPreference, {
            maxAge: 30 * 24 * 60 * 60, // Cookie will expire in 30 days
        });
    };

    return (
        <div className='mx-56 mt-20'>
            <h1 className='text-xl bold'>Set User Preference</h1><br />
            <input className='text-black'
                type="text"
                placeholder="Enter user preference"
                value={userPreference}
                onChange={(e) => setUserPreference(e.target.value)}

            /> <br />
            <button className='w-56 border-2 rounded bg-gray-400 text-whte-700 mt-2' onClick={handleButtonClick}>Set Preference</button>
        </div>
    );
};

export default SetCookiePage;
