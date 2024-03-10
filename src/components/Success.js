import React, { useEffect } from 'react'

const Success = () => {
    useEffect(() => {
        console.log(window.trackdesk)
        window.trackdesk("lennyai", "conversion", {
            "conversionType": "freetrial",
            "amount": {
                "value": "REPLACE_ME"
            }
        });
    }, [])
    return (
        <div>
            <p>This is a success page</p>
        </div>
    )
}

export default Success
