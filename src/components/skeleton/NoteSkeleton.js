const NoteSkeleton = () => {
  return (
    <div className="animate-pulse py-10">
      <div className="mb-3 h-20 w-7/12 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
      <div className="mb-5 h-10 w-4/12 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
      <div className="flex flex-col gap-2">
        <div className="h-6 w-full rounded-lg bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-6 w-full rounded-lg bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-6 w-2/5 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default NoteSkeleton;
