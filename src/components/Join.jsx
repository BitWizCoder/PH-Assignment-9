const Join = () => {
  return (
    <div className="bg-[#2E98C6] flex flex-col justify-center items-center py-16 text-white">
      <h2 className="text-xl">Don`t Miss Out</h2>
      <h1 className="text-5xl">Join our mailing list</h1>
      <h2 className="text-lg mb-5">For updates and news.</h2>
      <div className="form-control text-gray-700">
        <div className="input-group">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered"
          />
          <button className="btn btn-square bg-[#FFD43B] w-20 border-none">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
