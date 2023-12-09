/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import Card from "./Card";



const Cards = ({ title }) => {
  const { jsonData } = useContext(DataContext);

  console.log(jsonData);
  return (
    <>
      <h1 className="mt-20 mb-14 text-3xl font-bold text-[#272525] text-center">
        {title}
      </h1>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%]"
      >
        {jsonData.map((data) => (
          <Card data={data} key={data.id}></Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
