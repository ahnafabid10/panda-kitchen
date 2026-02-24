const Loading = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-6">
        {/* Image Skeleton */}
        <div className="h-80 bg-gray-200 rounded-lg"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>

          <div className="flex gap-4 pt-4">
            <div className="h-12 bg-gray-200 rounded-lg w-40"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;