function Cards({ item }) {
  console.log("Rendering Card for:", item); // Check what data is being passed

  return (
    <div className="mt-4 mx-3 p-3">
      <div className="card max-w-sm bg-base-100 shadow-xl hover:scale-105 transition-transform duration-200 dark:bg-slate-900 dark:text-white">
        <figure className="flex justify-center">
          <img src={item.image} alt={item.name} className="object-cover h-48 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-semibold">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-sm">{item.title}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-full border-2 hover:bg-red-600 transition-colors duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
