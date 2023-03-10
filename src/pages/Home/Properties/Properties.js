import React from "react";
import Card from "./Card";

const Properties = ({ state }) => {
  console.log(state?.stays);
  const location = state?.stays;
  return (
    <section className="container mx-auto">
      {/* section title  */}
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center">ALL PROPERTIES</h2>
        <p className="text-xl font-semi-bold text-center mt-3">
          there are our avilable property
        </p>
      </div>
      <div className="w-full mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {/* columns 1 */}
        {/* <div className="bg-slate-300 lg:h-[332px] md:h-[332px] rounded-md hover:animate-bounce cursor-pointer">
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="pb-2">
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div>
        </div> */}
        {/* columns 2 */}
        {/* <div className="bg-slate-300 h-[332px] rounded-md lg:h-[332px] md:h-[332px]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="pb-2">
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div>
        </div> */}
        {/* columns 3 */}
        {/* <div className="bg-slate-300 h-[332px] rounded-md lg:h-[332px] md:h-[332px]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="pb-2">
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div>
        </div> */}

        {/* columns 4 */}
        {/* <div className="bg-slate-300 h-[332px] rounded-md lg:h-[332px] md:h-[332px]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div className="pb-2">
            <h2 className="font-bold ml-2 mt-4">cox bazar</h2>
            <p className="ml-2 mt-2 pb-2">140 properties</p>
          </div>
        </div> */}

        {/* card */}
        {/* <Card></Card>
        <Card></Card>
        <Card></Card> */}
        {location?.map((data) => (
          <Card key={data._id} data={data}></Card>
        ))}
      </div>
    </section>
  );
};

export default Properties;
