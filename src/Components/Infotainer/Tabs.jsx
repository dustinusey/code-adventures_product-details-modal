const Tabs = (props) => {
  return (
    <div
      onClick={() => {
        props.setActiveTab(props.index);
      }}
      className={`${
        props.tabs[props.activeTab].title === props.title && "bg-gray-200"
      } cursor-pointer w-full p-5 text-center rounded-t-lg duration-200`}
    >
      {props.title}
    </div>
  );
};
export default Tabs;
