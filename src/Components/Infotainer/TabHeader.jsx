import Tabs from "./Tabs";

const TabHeader = (props) => {
  return (
    <ul className="flex">
      {props.tabs.map((tab, index) => {
        return (
          <Tabs
            index={index}
            tabs={props.tabs}
            title={tab.title}
            key={index}
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
          />
        );
      })}
    </ul>
  );
};
export default TabHeader;
