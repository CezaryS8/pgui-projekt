import React from "react";

const ordersWidgetChat = ({ featherIconAlertCircle }) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-lg relative font-body">
      <div className="flex items-center mb-6">
        <b className="text-lg leading-7 font-semibold mr-2">Zamówienia</b>
        <img className="w-5 h-5" alt="" src={featherIconAlertCircle} />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Nieopłacone</span>
          <span className="text-sm font-semibold">63</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Niewysłane</span>
          <span className="text-sm font-semibold">532</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Zwroty</span>
          <span className="text-sm font-semibold">22</span>
        </div>
      </div>
    </div>
  );
};

export default ordersWidgetChat;
