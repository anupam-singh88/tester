import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Ip() {
    const [ipInfo, setIpInfo] = useState(null);

    useEffect(() => {
        const fetchIpInfo = async () => {
            try {
                // Step 1: Get user's IP address
                const ipResponse = await axios.get('https://api64.ipify.org?format=json');
                const ipAddress = ipResponse.data.ip;
                console.log("🚀 ~ fetchIpInfo ~ ipAddress:", ipAddress);

                // Step 2: Get geolocation information
                const geoResponse = await axios.get(`https://freegeoip.Ip/json/${ipAddress}`);
                setIpInfo(geoResponse.data);
            } catch (error) {
                console.error('Error fetching IP info:', error);
            }
        };

        fetchIpInfo();
    }, []);

    return (
        <div>
            <h1>User's IP Info:</h1>
            {ipInfo && (
                <ul>
                    <li>IP: {ipInfo.ip}</li>
                    <li>Country Code: {ipInfo.country_code}</li>
                    <li>Country Name: {ipInfo.country_name}</li>
                    <li>Region Name: {ipInfo.region_name}</li>
                    <li>City: {ipInfo.city}</li>
                    <li>Zip Code: {ipInfo.zip_code}</li>
                    <li>Latitude: {ipInfo.latitude}</li>
                    <li>Longitude: {ipInfo.longitude}</li>
                    <li>Time Zone: {ipInfo.time_zone}</li>
                </ul>
            )}
        </div>
    );
}

export default Ip;
