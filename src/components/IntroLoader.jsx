import { useEffect, useState } from "react";

export default function IntroLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-center">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
        Welcome to{" "}
        <span className="text-blue-600 font-bold">Creovate Media</span>
      </h1>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-blue-100 rounded overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Optional subtitle */}
      <p className="mt-4 text-sm text-gray-500">
        Loading digital experience…
      </p>
    </div>
  );
}
