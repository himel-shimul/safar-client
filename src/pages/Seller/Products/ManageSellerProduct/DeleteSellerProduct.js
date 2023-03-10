import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { ThreeDots } from "react-loader-spinner";

const DeleteSellerProduct = ({
  submenu,
  setSubmenu,
  handleSubMenu,
  organizerRooms,
}) => {
  const { user } = useContext(AuthContext);
  const [reload, setReload] = useState();
  const hotelId = organizerRooms?.hotel_id;
  const {
    data: deletedRoom,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.uid],
    queryFn: async () => {
      const res = await fetch(
        `https://safar-server-nasar06.vercel.app/rooms/get-delete-room/${user?.uid}`
      );
      const data = await res.json();
      return data;
    },
  });

  // refetch();
  return (
    <div>
      <div className="rounded-md border border-gray-50 mr-2 mt-5">
        <table className="w-11/12 mx-auto border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900">
                Room
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900">
                Room Type
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900">
                Room/SKU
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900">
                Price
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900">
                Rooms Quantity
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900">
                Date
              </th>
              <th scope="col" className="px-6 py-4 font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {isLoading ? (
              <tr>
                <td>
                  <span>
                    <ThreeDots
                      height="80"
                      width="80"
                      radius="9"
                      color="orange"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                    />
                  </span>
                </td>
              </tr>
            ) : (
              deletedRoom?.map((room) => (
                <tr key={room._id} className="hover:bg-gray-50">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="relative h-12 w-12">
                      <img
                        className="h-full w-full rounded-md object-cover object-center"
                        src={room.images[0].url}
                        alt=""
                      />
                      <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                      {room.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1   px-2 py-1 text-sm font-semibold">
                      #{room.rooms_no}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-sm font-semibold">
                      {room.price}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-sm font-semibold">
                      {room.sleep}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-sm font-semibold">
                      10-02-2023
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="relative">
                      <p
                        onClick={() =>
                          setSubmenu(room?.rooms_no) &
                          handleSubMenu(room?.rooms_no)
                        }
                        className="text-xs  font-medium text-white bg-rose-600 rounded-xl px-2 text-center "
                      >
                        Deleted
                      </p>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteSellerProduct;
