export default function ImageSkeleton() {
  return (
    <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse">
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg"></div>
    </div>
  );
}
