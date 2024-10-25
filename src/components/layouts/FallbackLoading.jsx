import { Loader } from "lucide-react";

const FallbackLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="flex items-center justify-center w-16 h-16 mb-4">
        <Loader size={50} className="animate-spin text-blue-600" />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">Loading...</h2>
      <p className="text-sm text-gray-500">
        Please wait while we load the content for you.
      </p>
    </div>
  );
};

export default FallbackLoading;
