import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";

const Speakers = () => {
  const data = [
    {
      photo: "https://i.ibb.co/cDPbCpP/avatar-1.png",
      name: "John Paul",
      role: "Python Developer",
    },
    {
      photo: "https://i.ibb.co/G0wZQn3/avatar-2.png",
      name: "James Dean",
      role: "Backend developer",
    },
    {
      photo: "https://i.ibb.co/tcDnJRw/avatar-3.png",
      name: "Michael Scott",
      role: "UI/UX Designer",
    },
    {
      photo: "https://i.ibb.co/tMXG0T4/avatar-4.png",
      name: "David Lee",
      role: "PHP Developer",
    },
  ];

  return (
    <div className="mb-20">
      <h1 className="mt-28 mb-14 text-3xl font-bold text-center text-[#272525]">
        Event Speakers
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center text-center ">
        {data.map((author) => (
          <div className="mb-10" key={author.name} data-aos="zoom-out-down">
            <img src={author.photo} alt={author.name} />
            <p className="font-bold text-xl my-1">{author.name}</p>
            <p>{author.role}</p>
            <div className="flex gap-10 mt-4 items-center justify-center">
              <BsFacebook className="text-xl" />
              <BsTwitter className="text-xl" />
              <BsGithub className="text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
