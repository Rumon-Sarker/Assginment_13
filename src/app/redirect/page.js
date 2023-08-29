"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
    const router = useRouter("");

    useEffect(() => {
        router.push('/'); // Redirect to the home page
    }, []);

    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    );
};

export default RedirectPage;
