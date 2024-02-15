import ProductOverview from "./Components/ProductOverview";
import ProductPurchaseOverview from "./Components/ProductPurchaseOverview";

const App = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-gray-300  m-atuo ">
      <div className="h-[80%] w-[90%] bg-white rounded-2xl  flex gap-2 overflow-hidden">
        <ProductOverview />
        <ProductPurchaseOverview />
      </div>
    </div>
  );
};
export default App;
