import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Food not found ❌
      </div>
    );
  }

  const { title, foodImg, price, video, category, area } = food;

  return (
   <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
  {/* Food Image */}
  <div className="overflow-hidden rounded-2xl shadow-md">
    <img
      src={foodImg}
      alt={title}
      className="w-full h-56 sm:h-72 md:h-80 object-cover hover:scale-105 transition duration-300"
    />
  </div>

  {/* Title */}
  <h1 className="text-2xl sm:text-3xl font-bold mt-5 text-blue-500 dar">
    {title}
  </h1>

  {/* Category + Area */}
  <div className="flex flex-wrap gap-3 mt-3">
    <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium">
      {category}
    </span>
    <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium">
      {area}
    </span>
  </div>

  {/* Price */}
  <p className="text-2xl sm:text-3xl font-bold text-orange-500 mt-4">
    ৳ {price}
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 mt-6">
    <a
      href={video}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 text-center bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
    >
      ▶ Watch Video
    </a>

    <button className="flex-1 border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-semibold hover:bg-orange-50 transition">
      🛒 Add to Cart
    </button>
  </div>
</div>

  );
};

export default Page;