const BodyText = (props) => {
  return (
    <div className="overflow-scroll h-[200px]">
      {props.tabs[props.activeTab].body}
    </div>
  );
};
export default BodyText;
