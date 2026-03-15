import React from "react";

const OfferComponent = ({ price }) => {

  console.log("[OfferComponent] - Rendered");

  return (
    <div className="bg-gray-50 border rounded-lg p-4">

      <h3 className="text-md font-semibold text-orange-600 mb-2">
        Offer Component
      </h3>

      <p className="text-gray-700">
        Price: ₹{price}
      </p>

    </div>
  );
};

export default React.memo(OfferComponent);