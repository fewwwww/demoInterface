export const baseUrl = () => {
    let env = process.env.REACT_APP_ENV;
    if (env === "production") {
        return process.env.REACT_APP_PROD_BASE;
    } else if (env === "development") {
        return process.env.REACT_APP_DEV_BASE;
    }
};

export default {
    getEthStatus: () => ({
        url:"https://node.hyperoracle.io/getcurrentprice",
        isProtected: false,
    }),
    getThreshold: () => ({
        url: "https://node.hyperoracle.io/auto/threshold",
        isProtected: false,
    })
};