import React from "react";

export interface itemsProps {
  items: any;
}

export type itemsPropsType = itemsProps;

const List: React.FC<itemsPropsType> = ({ items }) => {
  const id = items?.id;
  const imageSrc = items?.photos[0]?.l || "";
  const propertyTitle = items?.details?.name || "";
  const bedRooms = items?.details?.bedroomsCount || "";
  const guest = items?.details?.guestsCount || "";
  const size = items?.details?.shortName[0] || "";

  const locationRawString = items?.location?.name || "";
  const locationRawStringArr = locationRawString.split(",", 2);
  const totalPrice = items?.price?.total || "";
  const perNightPrice = items?.price?.daily || "";

  return (
    <div className="h-auto max-w-full md:max-w-md" key={id}>
      <div className="rounded-lg	border-1 border-gray-100 shadow">
        <div className="bg-indigo-300">
          <img
            className="object-cover h-48 w-full rounded-lg rounded-b-none"
            alt=""
            src={imageSrc}
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between space-x-2">
            <div className="w-7/12">
              <div className="text-base leading-6 font-semibold min-h-12 max-h-12 overflow-ellipsis overflow-hidden">
                {propertyTitle}
              </div>
              <div className="text-sm font-semibold	text-blue-700">
                {locationRawStringArr[0]}
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold text-green-600">
                {totalPrice} €
              </div>
              <div className="text-sm font-light text-gray-700">
                {perNightPrice} € / Nacht
              </div>
            </div>
          </div>
          <div className="pt-4 pr-3">
            <div className="text-xs	font-light text-gray-500">
              {guest} Pers., {bedRooms} Schlafzimmer, {size}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="p-3">
            <div className="grid grid-cols-2 gap-1">
              <div className="grid grid-rows-2">
                <div className="text-base antialiased font-normal">
                  Mehr Details
                </div>
              </div>
              <div className="grid grid-rows-1">
                <button className="p-1 rounded-md font-semibold bg-red-500 text-white hover:bg-red-400">
                  Zum Angebot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;
