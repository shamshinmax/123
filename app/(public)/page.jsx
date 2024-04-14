
import React from 'react'
import getCount from "api/database"
import StartPage from "components/StartPage"
export default Login;
    
async function Login() {
    let count = await getCount();
    return (
        <div>
            <StartPage count={count}/>
        </div>
    );
}