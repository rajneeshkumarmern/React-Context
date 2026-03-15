import React from "react";
import OfferComponent from "./OfferComponent";

const PriceComponent = ({ price }) => {

  console.log("[PriceComponent] - Rendered");

  return (
    <div className="border-t pt-4">

      <h3 className="text-lg font-semibold text-purple-600 mb-2">
        Price Component
      </h3>

      <p className="text-gray-700 mb-4">
        Price: ₹{price}
      </p>

      <OfferComponent price={price} />

    </div>
  );
};

export default React.memo(PriceComponent);