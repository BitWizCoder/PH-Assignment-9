import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Card = ({ data }) => {
  const maxWords = 30; // Set the maximum number of words you want to display
  const descriptionWords = data.description
    .split(" ")
    .slice(0, maxWords)
    .join(" ");

  return (
    <div className="relative flex flex-col" data-aos="zoom-in-up">
      <div className="flex-1">
        <img src={data.image} alt={data.title} />
        <p className="bg-[#FFD43B] inline text-[#272525] px-4 py-2 rounded-md text-lg absolute top-4 left-4">
          {" "}
          <span>Price:</span> ${data.price}
        </p>
        <h1 className="text-bold text-2xl my-3">{data.title}</h1>
        <p className="leading-6">{descriptionWords}</p>
      </div>
      <Link
        to={`/${data.id}`}
        className="btn w-full mt-4 bg-[#272525] text-white hover:text-[#272525]"
      >
        See Detials
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};

export default Card;

// description
// id
// image
// price
// title
