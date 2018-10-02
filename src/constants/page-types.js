//Restructure if needed
const PageTypes = {
    "ConnectionAttempts": {
        "Tabs": [
            {
                "Name": "AllActivity",
                "Types": [
                    "NAT Type",
                    "O.S.",
                    "Protocol",
                    "Country"
                ],
                "Chart": "LineGraph"
            },
            {
                "Name": "Country",

                "Types": [
                    "NAT Type",
                    "Protocol",
                    "O.S."
                ],
                "Chart": "BarGraph"
            },
            {
                "Name": "OperatingSystem",
                "Types": [
                    "NAT Type",
                    "Protocol",
                    "O.S."
                ],
                "Chart": "LineGraph"
            }
        ]
    }
}
export default PageTypes;
