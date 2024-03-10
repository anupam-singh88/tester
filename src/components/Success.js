import React, { useEffect } from 'react'

const Success = () => {
    useEffect(() => {
        const anupamData = window.anupamData;
        alert(JSON.stringify(anupamData))
    })
    return (
        <div>
            <p>This is a success page</p>
        </div>
    )
}

export default Success
