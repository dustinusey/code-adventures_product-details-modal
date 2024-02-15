const TabBody = (props) => {
  return (
    <div className="p-5 mt-3 overflow-y-scroll h-[300px]">
      {props.tabs[props.activeTab].body}
    </div>
  );
};
export default TabBody;
