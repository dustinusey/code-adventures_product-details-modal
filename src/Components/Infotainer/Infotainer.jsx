import "flowbite";
import { useState } from "react";
import TabBody from "./TabBody";
import TabHeader from "./TabHeader";

const tabs = [
  {
    title: "About this item",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, velit vitae venenatis cursus, elit tortor sollicitudin mauris, accumsan placerat lectus elit quis orci. Maecenas sapien nibh, elementum ut rutrum eget, posuere vitae lorem. Morbi ullamcorper mauris nibh. Ut id pretium nibh. Quisque finibus tristique diam, eget volutpat purus dictum non. Fusce pretium aliquet dolor placerat suscipit. Ut et finibus risus. Ut iaculis ultrices orci ac rhoncus. Integer eget sem quis odio maximus dictum sit amet sit amet arcu. Maecenas lectus urna, pharetra sit amet auctor nec, feugiat et mi. Quisque placerat odio a tincidunt vestibulum. Suspendisse neque sem, accumsan non feugiat vel, porttitor at urna. Nulla quis consectetur metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    title: "Questions",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus numquam quos accusantium sequi vel quaerat!",
  },
  {
    title: "Reviews",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias aperiam eveniet laborum dolorem porro quos, sequi excepturi ratione nostrum alias adipisci delectus tempore incidunt rem perspiciatis earum qui nesciunt reprehenderit cum necessitatibus tempora deserunt et quis. Ut aliquid dolorum quas quod aliquam voluptates repellat repudiandae ad assumenda commodi distinctio fuga ducimus corrupti cupiditate expedita ipsum harum, aperiam quisquam qui obcaecati cum? A optio dolor veritatis distinctio in voluptate inventore eius provident quibusdam, sunt saepe mollitia nobis nam error iusto quidem. Optio vero delectus sint hic totam quam excepturi, eius magnam cupiditate praesentium, unde qui porro sequi? Minima, voluptatibus libero!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias aperiam eveniet laborum dolorem porro quos, sequi excepturi ratione nostrum alias adipisci delectus tempore incidunt rem perspiciatis earum qui nesciunt reprehenderit cum necessitatibus tempora deserunt et quis. Ut aliquid dolorum quas quod aliquam voluptates repellat repudiandae ad assumenda commodi distinctio fuga ducimus corrupti cupiditate expedita ipsum harum, aperiam quisquam qui obcaecati cum? A optio dolor veritatis distinctio in voluptate inventore eius provident quibusdam, sunt saepe mollitia nobis nam error iusto quidem. Optio vero delectus sint hic totam quam excepturi, eius magnam cupiditate praesentium, unde qui porro sequi? Minima, voluptatibus libero!",
  },
];

const Infotainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-[50%] mt-7">
      <TabHeader
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabBody tabs={tabs} activeTab={activeTab} />
    </div>
  );
};
export default Infotainer;
