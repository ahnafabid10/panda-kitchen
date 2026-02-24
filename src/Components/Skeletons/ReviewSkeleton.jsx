const ReviewSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4 animate-pulse">
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-4 bg-gray-300 rounded"></div>
        ))}
      </div>

      {/* Review lines */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
      </div>

      {/* Like */}
      <div className="h-4 w-16 bg-gray-300 rounded"></div>
    </div>
  );
};

export default ReviewSkeleton;