import { useContext, useState } from "react";
import AppTabsContext from "../../contexts/AppTabsContext";

const useAppTabs = () => useContext(AppTabsContext);

export default useAppTabs;
