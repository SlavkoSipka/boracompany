import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Minimal rotating circle */}
        <div className="w-8 h-8 border-2 border-gray-200 border-t-blue-700 rounded-full animate-spin"></div>
        {/* Optional company name - very subtle */}
        <div className="mt-4 text-sm text-gray-500 font-medium tracking-wide">
          BORA COMPANY
        </div>
      </div>
    </div>
  );
};