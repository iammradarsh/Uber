import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "HNO. 141, Sector 2, Noida",
    "24b sector B Noida",
    "HNO. 141, Sector 2, Noida",
    "24b sector B Noida",
    "HNO. 141, Sector 2, Noida",
    "24b sector B Noida",
  ];

  return (
    <div>
      {/* this is the location search panel sample data */}
      {locations.map((location, index) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="flex items-center justify-start gap-2 my-3 border-2 active:border-black rounded-lg py-4 px-6 cursor-pointer"
          >
            <div className="flex items-center justify-center bg-[#eee] h-[40px] w-[40px] rounded-full flex-shrink-0">
              <i className="ri-map-pin-fill text-xl"></i>
            </div>
            <h4 className="font-medium text-gray-700">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
