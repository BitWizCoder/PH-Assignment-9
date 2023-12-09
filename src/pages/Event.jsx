import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import Cards from "../components/Cards";
import Speakers from "../components/Speakers";
import Join from "../components/Join";
import Footer from "../components/Footer";

const Event = () => {
  const id = useParams();
  const jsonData = useContext(DataContext);
  console.log(jsonData.jsonData);

  return (
    <>
      <div className="mx-auto max-w-3xl mt-5">
        <img
          className="rounded-md"
          src={jsonData.jsonData[id.id - 1].image}
          alt=""
        />
        <h2 className="my-5 text-3xl font-bold">
          {jsonData.jsonData[id.id - 1].title}
        </h2>
        <p>{jsonData.jsonData[id.id - 1].description}</p>
        <button className="btn bg-[#2E98C6] text-white mt-5 hover:text-gray-700">
          Join Now
        </button>
      </div>
      <Cards title={"More Talks"} />
      <Speakers />
      <Join />
      <Footer />
    </>
  );
};

export default Event;
