import banner from "../../public/Banner2.jpg";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 md:mr-8"> {/* Added margin-right */}
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold text-red-600">
            Unleash Your Inner Hero and Embark on an Epic Adventure!
            <span className="text-yellow-500"> Join the Marvel Universe!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Dive into our Marvel bookstore and explore a universe of iconic heroes and epic adventures. From Spider-Man’s origins to the X-Men’s tales, ignite your imagination with every comic. Discover your next favorite story today!
          </p>
        </div>
      </div>
      <div className="order-1 w-full mt-20 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={banner}
          className="md:w-[550px] md:h-[360px] rounded-lg shadow-lg"
          alt="Learning Banner"
        />
      </div>
    </div>
  );
}

export default Banner;
