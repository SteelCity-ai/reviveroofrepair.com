export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
      {/* BBB Badge */}
      <div className="flex items-center gap-2">
        <div className="bg-[#FFD700] rounded-lg px-3 py-2">
          <span className="font-bold text-black text-sm">BBB</span>
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-900 text-sm">BBB Accredited</p>
          <p className="text-xs text-gray-500">A+ Rating</p>
        </div>
      </div>

      {/* License Badge */}
      <div className="flex items-center gap-2">
        <div className="bg-[#1a1a2e] rounded-lg px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-900 text-sm">Licensed & Insured</p>
          <p className="text-xs text-gray-500">PA #001473</p>
        </div>
      </div>

      {/* 24/7 Emergency */}
      <div className="flex items-center gap-2">
        <div className="bg-[#e63946] rounded-lg px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-900 text-sm">24/7 Emergency</p>
          <p className="text-xs text-gray-500">Always Available</p>
        </div>
      </div>

      {/* Years in Business */}
      <div className="flex items-center gap-2">
        <div className="bg-green-600 rounded-lg px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-900 text-sm">Free Estimates</p>
          <p className="text-xs text-gray-500">No Obligation</p>
        </div>
      </div>
    </div>
  );
}
