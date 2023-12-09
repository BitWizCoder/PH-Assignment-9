const Hero = () => {
  const heroStyle = {
    backgroundImage: "url(https://i.ibb.co/gJKrdrn/hero-bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={heroStyle}
      className="h-screen text-white text-center flex flex-col justify-center items-center gap-3"
    >
      <h1 className="text-7xl">Explore the Art of Coding</h1>
      <h2 className="text-5xl max-w-[600px]">Join world’s largest Tech Summit</h2>
      <div>
        <button className="btn bg-[#2E98C6] text-white border-[#2E98C6] hover:text-gray-800 px-10 text-md uppercase">Join</button>
      </div>
    </div>
  );
};

export default Hero;
