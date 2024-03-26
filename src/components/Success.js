import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    // useEffect(() => {
    //     console.log(window.trackdesk)
    //     window.trackdesk("lennyai", "conversion", {
    //         "conversionType": "freetrial",
    //         "amount": {
    //             "value": "$10"
    //         }
    //     });
    // }, [])
    const conversion = () => {
        console.log(window.trackdesk)
        alert('Conversion btn Triggered')
        window.trackdesk("lennyai", "conversion", {
            "conversionType": "freetrial",
            "amount": {
                "value": "10"
            },
            "customParams": {
                advS1: "Account created"
            }
        });
    }
    return (
        <div>
            <p>This is a success page</p>
            <Link to='/'>Home</Link>
            <br />
            <button onClick={conversion}>Trigger Conversion</button>
        </div>
    )
}

export default Success
