// import Book from '../../../Backend/model/book.model';
import list from '../../public/list.json';
import Cards from "./Cards";

function Freebook() {
  // Filter static data from list.json for "Free" category
  const filterData = list.filter((data) => data.category === "Free");
  console.log("Static Free Data:", filterData); // Debugging log for static data

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10"> {/* Added margin-top */}
      <div className="text-center mb-6">
        <h1 className="font-semibold text-xl pb-2">Free Marvel Comics</h1>
        <p>
          Discover our collection of free Marvel comics and graphic novels. 
          Unleash your inner superhero without spending a dime!
        </p>
      </div>

      {/* Grid layout for displaying cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filterData.length > 0 ? (
          filterData.map((item) => <Cards item={item} key={item.id} />)
        ) : (
          <p className="text-center">No free books available in static data.</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;
