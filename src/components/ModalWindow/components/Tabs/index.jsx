import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const TabsContext = createContext('');

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabSwitcher = (tab) => () => setActiveTab(tab);

  return (
    <TabsContext.Provider value={onClickTabSwitcher}>
      {children.find((child) => child.props.label === activeTab)}
    </TabsContext.Provider>
  );
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export { TabsContext };

export default Tabs;
