import React from "react";

const WaitingFprDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-s-line"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="car"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Adarsh</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto 800</p>
        </div>
      </div>

      <div className="flex justify-between flex-col items-center gap-2">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="car"
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab - Indore</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-stop-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab - Indore</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-bank-card-2-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">₹193</h3>
              <p className="text-sm text-gray-600">Kankariya Talab - Indore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingFprDriver;
