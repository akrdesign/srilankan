import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { tabs } from "./tabsdata";
import "./styles.sass";

const tabContentVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  const isSelected = (tab) => activeTab.name === tab.name;

  return (
    <div className="tabWrapper">
      <div className="tabHeader">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tabItem ${isSelected(tab) ? "selected" : ""}`}
          >
            <span onClick={(e) => handleClick(e, tab)}>
              {tab.label}
            </span>
          </div>
        ))}
      </div>

      <div className="tabContent">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.name || "empty"}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.3,
            }}
          >
            {activeTab && activeTab?.render()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
