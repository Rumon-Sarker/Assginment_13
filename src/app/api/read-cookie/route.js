import { parseCookies } from 'nookies';

const ReadCookiePage = ({ userPreference }) => {
    return (
        <div>
            <h1>User Preference</h1>
            <p>User preference: {userPreference}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    const cookies = parseCookies(context);
    const userPreference = cookies.userPreference || 'No preference set';

    return {
        props: {
            userPreference,
        },
    };
}

export default ReadCookiePage;
