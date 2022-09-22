const schema = [
    {
        name: "query",
        type: "Query",
        attributes: [
            {
                name: "protocol",
                type: "Protocol",
                attributes: [
                    {
                        name: "id",
                        type: "ID!",
                        des: "ID is set to 0"
                    },
                    {
                        name: "inflation",
                        type: "BigInt!",
                        des: "Change in inflation rate per round until the target bonding rate is achieved"
                    },

                ]
            }
        ]
    }
]