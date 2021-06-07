import React, {useContext} from 'react'
import { UserContext } from "../context/UserContext"

const About = () => {
    const {user, setUser} = useContext(UserContext);
    
    return (
        <div>
            <pre>{JSON.stringify(user)}</pre>
        </div>
    )
}

export default About
