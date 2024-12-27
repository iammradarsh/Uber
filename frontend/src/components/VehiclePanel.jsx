import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-s-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex border-2 active:border-black rounded-xl w-full p-3 mb-2 items-center justify-between"
      >
        <div className="flex gap-4">
          <img className="h-12" src={props.blackCarImage} alt="black_car" />
          <div className="w-3/4">
            <h4 className="font-medium text-lg">
              UberGo{" "}
              <span>
                <i className="ri-user-fill">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm"> 2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              {" "}
              Affordable, compact rides
            </p>
          </div>
        </div>

        <h2 className="text-lg font-semibold">₹123.07</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex border-2 active:border-black rounded-xl w-full p-3 mb-2 items-center justify-between"
      >
        <div className="flex gap-4">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="black_car"
          />
          <div className="w-3/4">
            <h4 className="font-medium text-lg">
              Moto{" "}
              <span>
                <i className="ri-user-fill">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm"> 3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              {" "}
              Affordable, motorcycle ride
            </p>
          </div>
        </div>
        <h2 className="text-lg font-semibold">₹65.17</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex border-2 active:border-black rounded-xl w-full p-3 mb-2 items-center justify-between"
      >
        <div className="flex gap-4">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="black_car"
          />
          <div className="w-3/4">
            <h4 className="font-medium text-lg">
              UberAuto{" "}
              <span>
                <i className="ri-user-fill">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm"> 2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              {" "}
              Affordable, Auto ride
            </p>
          </div>
        </div>
        <h2 className="text-lg font-semibold">₹118.21</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
