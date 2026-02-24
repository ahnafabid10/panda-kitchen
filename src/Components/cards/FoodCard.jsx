import Link from "next/link";
import CardButton from "../button/CardButton";

const FoodCard = ({ food }) => {
  return (
    <div className="w-full rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-44 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow">
          {food.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
          {food.title}
        </h3>

        {/* Price */}
        <p className="text-lg sm:text-xl font-bold text-orange-500">
          ৳ {food.price}
        </p>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          <Link
            href={`/foods/${food.id}`}
            className="text-center bg-orange-500 text-white text-sm sm:text-base py-2.5 rounded-xl hover:bg-orange-600 transition font-medium"
          >
            View Details
          </Link>

          <CardButton food={food}></CardButton>
          
        </div>
      </div>
    </div>
  );
};

export default FoodCard;