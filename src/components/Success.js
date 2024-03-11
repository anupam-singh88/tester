import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    useEffect(() => {
        console.log(window.trackdesk)
        window.trackdesk("lennyai", "conversion", {
            "conversionType": "freetrial",
            "amount": {
                "value": "$10"
            }
        });
    }, [])
    return (
        <div>
            <p>This is a success page</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Success
