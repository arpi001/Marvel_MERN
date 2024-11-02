import Footer from "./Footer";
import Navbar from "./Navbar";


const About = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">About Marvel</h2>
        <p className="text-lg text-yellow-500 text-center mb-12">
          Marvel Entertainment is one of the world’s most prominent character-based entertainment companies,
          built on a proven library of over 8,000 characters featured in a variety of media for over eighty
          years. Marvel utilizes its character franchises in entertainment, licensing, publishing, games, and
          digital media.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zinc-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-black">Our Mission</h3>
            <p className="text-zinc-500 mt-4">
              At Marvel, our mission is to entertain and inspire fans worldwide by bringing to life the best
              heroes, villains, and stories ever told.
            </p>
          </div>

          <div className="bg-zinc-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-black">Our Heroes</h3>
            <p className="text-zinc-500 mt-4">
              From Spider-Man to the Avengers, Marvel has created characters that resonate with audiences
              globally, spanning generations and connecting people through epic storytelling.
            </p>
          </div>

          <div className="bg-zinc-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-black">Our Future</h3>
            <p className="text-zinc-500 mt-4">
              Marvel continues to push the boundaries of storytelling, expanding into new media and creating
              immersive experiences to keep fans engaged with our universe.
            </p>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
    </>
  );
};

export default About;
