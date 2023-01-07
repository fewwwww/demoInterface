import { createContext, useEffect, useMemo, useState } from "react";

export const TABS = {
    OVERVIEW: "OVERVIEW",
    INDEXERS: "INDEXSERS",
    ZKGRAPHS: "ZKGRAPHS",
    PLAYGROUND: "PLAYGROUND",
    ONCHAINVALIDATION: "ONCHAIN-VALIDATION",
    AUTOMATION: "AUTOMATION",
}


const tabs = [
    { label: "Overview", value: TABS.OVERVIEW, name: TABS.OVERVIEW},
    { label: "Indexers", value: TABS.INDEXERS, name: TABS.INDEXERS},
    { label: "ZkGraphs", value: TABS.ZKGRAPHS, name: TABS.ZKGRAPHS},
    { label: "Playground", value: TABS.PLAYGROUND, name: TABS.PLAYGROUND},
    { label: "OnChain-Validation", value: TABS.ONCHAINVALIDATION, name: TABS.ONCHAINVALIDATION },
    { label: "Automation", value: TABS.AUTOMATION, name: TABS.AUTOMATION},
];

const AppTabsContext = createContext({
    tabs,
    currentTab: TABS.OVERVIEW,
    setCurrentTab: () => {},
});

export const AppTabsProvider = (props) => {
    const { children } = props;
    const [currentTab, setCurrentTab] = useState(TABS.OVERVIEW);
    const value = useMemo(
        () => ({ tabs, currentTab, setCurrentTab }),
        [currentTab]
    );
    useEffect(() => {
        setCurrentTab(TABS.OVERVIEW);
    }, []);
    return (
        <AppTabsContext.Provider value={value}>
            {children}
        </AppTabsContext.Provider>
    );
};

export default AppTabsContext;
