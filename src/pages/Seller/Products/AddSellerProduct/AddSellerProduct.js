import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlinePlusSquare } from "react-icons/ai";
// import { FaMinus, FaPlus } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { AuthContext } from "../../../../contexts/AuthProvider";



const AddSellerProduct = () => {
  const {user} = useContext(AuthContext)
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openFacility, setOpenFacility] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleImageChange = async (event) => {
    const imageHostKey = process.env.REACT_APP_imagePostKey;
    const imageUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    setLoading(true);
    const files = event.target.files;
    const uploadedImages = [];
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("image", files[i]);
      formData.append("key", imageHostKey);
      const response = await fetch(imageUrl, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
      uploadedImages.push(...images, { url: result.data.url });
      console.log(uploadedImages);
    }
    setImages(uploadedImages);
    console.log(images);
    setLoading(false);
  };

  const handleAddProduct = (data) => {
    const productData = {
      hotel_name: data.name,
      description: data.description,

      // location: {
      //   country: data.country,
      //   city: data.city.toUpperCase(),
      //   address: data.address,
      //   zip_code: data.postal,
      // },

      price: data.price,
      offerPrice: data.offerPrice,
      facility: [
        data.wifi, data.hitter, data.geyser, data.breakfast, data.breakfastLaunch, data.drink, data.parking
      ],

      images: images,
      // facilities: [{ name: data.facility }],
      // Room_type: [
      //   {
      //     name: data.class,
      //     bed: [
      //       {
      //         size: data.roomSize,
      //       },
      //     ],
      //     sleep: 4,
      //   },
      // ],

      // Yearly_deals: false,
      // Monthly_deals: false,
      // Contact: data.contact,
      Hotel_id: data.hotelId,
      // Promoted: "",
    };
    console.log(productData);

      // send to db
    // fetch(
    //   "https://safar-server-nasar06.vercel.app/destination/post-all-destinations",
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(productData),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledge) {
    //       setImages([]);
    //       reset();
    //       toast.success("hotel added");
    //       console.log(data);
    //     } else {
    //       console.error("please try again");
    //     }
    //   });
      
  };




  return (
    <section className="py-4">
      <h2 className="text-3xl py-4">Add a New Room</h2>
      <div className="flex flex-wrap items-center">
        <label htmlFor="pdImg">
          <AiOutlinePlusSquare className="text-8xl text-gray-400" />
        </label>
        <input
          className="hidden"
          type="file"
          id="pdImg"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        {loading ? "Uploading..." : null}
        {images?.map((image, idx) => (
          <img
            className="h-24 w-24 m-1 border border-slate-300 rounded-md"
            key={idx}
            src={image.url}
            alt="Uploaded"
          />
        ))}
      </div>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        action=""
        className="container flex flex-col mx-auto space-y-4 ng-untouched ng-pristine ng-valid pr-4"
      >
        <div className="">
          <label className="font-semibold" htmlFor="">Room name/Room type</label>
          <input
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="Room Name or room type"
            type="text"
            {...register("name", { required: "product name is required" })}
          />
          {errors?.name && (
            <p className="text-red-500">{errors?.name?.message}</p>
          )}
        </div>
        <div className="">
          <label className="font-semibold" htmlFor="">Description</label>
          <textarea
            className="border-2 p-2 rounded-md w-full border-blue-50"
            placeholder="Description"
            name=""
            rows="5"
            {...register("description", {
              required: "product description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-2">
          <div className="">
            <label className="font-semibold" htmlFor="">Room Quantity</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="quantity"
              defaultValue="0"
              type="number"
              name=""
              id=""
              {...register("quantity", { required: "quantity is required" })}
            />
            {errors?.quantity && (
              <p className="text-red-500">{errors?.price?.message}</p>
            )}
          </div>
          <div>
            <label className="font-semibold" htmlFor="">Price</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Price"
              type="text"
              name=""
              id=""
              {...register("price", {
                required: "offer Price is required",
              })}
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label className="font-semibold" htmlFor="">Offer Price</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="offer Price"
              type="text"
              name=""
              id=""
              {...register("offerPrice", {
                required: "Offer Price is required",
              })}
            />
            {errors.offerPrice && (
              <p className="text-red-500">{errors.offerPrice.message}</p>
            )}
          </div>
        </div>

        <div>
          <div onClick={() => setOpenFacility(!openFacility)} className="flex items-center">
            <h2 className="text-xl mb-2 font-semibold">Please Add facilities</h2>
            {openFacility ? (
              <HiOutlineChevronUp className="ml-4 cursor-pointer font-3xl"></HiOutlineChevronUp>
            ) : (
              <HiOutlineChevronDown className="ml-4 cursor-pointer font-3xl"></HiOutlineChevronDown>
            )}
          </div>
          <div className={`flex items-center justify-between px-4 ${openFacility ? "visible" : "hidden"}`}>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
                w-4 h-4  focus:outline-none rounded-lg"
                type="checkbox"
                name="wifi"
                id=""
                value="free wifi"
                {...register("wifi")}
              />
              <label className="ml-2 font-semibold" htmlFor="wifi">
                Free Wifi
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
              w-4 h-4  focus:outline-none rounded-lg"
                type="checkbox"
                name="hitter"
                id=""
                value="hitter"
                {...register("hitter")}
              />
              <label className="ml-2 font-semibold" htmlFor="hitter">
                Hitter
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
            w-4 h-4 focus:outline-none rounded-lg"
                type="checkbox"
                name="geyser"
                id=""
                value="geyser"
                {...register("geyser")}
              />
              <label className="ml-2 font-semibold" htmlFor="geyser">
                Geyser
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
            w-4 h-4 focus:outline-none rounded-lg"
                type="checkbox"
                name="breakfast"
                id=""
                value="breakfast"
                {...register("breakfast")}
              />
              <label className="ml-2 font-semibold" htmlFor="breakfast">
                Breakfast
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
               w-4 h-4 focus:outline-none rounded-lg"
                type="checkbox"
                name=""
                id=""
                value="Breakfast and launch"
                {...register("breakfastLaunch")}
              />
              <label className="ml-2 font-semibold" htmlFor=" BreakfastLaunch">
                Breakfast and Launch
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
            w-4 h-4 focus:outline-none rounded-lg"
                type="checkbox"
                name=""
                id=""
                value="drink"
                {...register("drink")}
              />
              <label className="ml-2 font-semibold" htmlFor=" BreakfastLaunch">
                Drink
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
            w-4 h-4  focus:outline-none rounded-lg"
                type="checkbox"
                name=""
                id=""
                value="car parking"
                {...register("parking")}
              />
              <label className="ml-2 font-semibold" htmlFor=" BreakfastLaunch">
                Car parking
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <label className="font-semibold" htmlFor="pet-select">Choose Room Type</label>

            <select
              className="border-2 p-2 rounded-md w-full border-blue-50"
              id="pet-select"
              {...register("roomType", { required: "Room Type is required" })}
            >
              <option value="">--Please choose an option--</option>
              <option value="Deluxe King Room">Deluxe King Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Superior Double Room">Superior Double Room</option>
              <option value="Deluxe Twin Room">Deluxe Twin Room</option>
              <option value="Deluxe Double Room">Deluxe Double Room</option>
              <option value="Family Room with Balcony">
                Family Room with Balcony
              </option>
              <option value="Two-Bedroom Apartment">
                Two-Bedroom Apartment
              </option>
              <option value="Standard Double Room">Standard Double Room</option>
              <option value="Superior Queen Room">Superior Queen Room</option>
            </select>
            {errors.roomType && (
              <p className="text-red-500">{errors.roomType.message}</p>
            )}
          </div>
          <div>
            <label className="font-semibold" htmlFor="">Hotel id</label>
            <input
              className="border-2 p-2 rounded-md w-full border-blue-50"
              placeholder="Hotel id"
              type="text"
              defaultValue={user?.uid}
              readOnly
              disabled
              name=""
              id=""
              {...register("hotelId", { required: "hotel id is required" })}
            />
            {errors.hotelId && (
              <p className="text-red-500">{errors.hotelId.message}</p>
            )}
          </div>
        </div>

        <div>
          <input
            className="px-4 py-2 bg-blue-800 text-white rounded-md cursor-pointer"
            type="submit"
            value="Add Room"
          />
        </div>
      </form>
    </section>
  );
};

export default AddSellerProduct;
