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
        url:"http://54.248.170.145/getcurrentprice",
        isProtected: false,
    }),
    getThreshold: () => ({
        url: "http://54.248.170.145/auto/threshold",
        isProtected: false,
    })
};