"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/map/LeafletMap"), {
  ssr: false,
});

export default function EmergencyPageClient() {
  const data = [
    {
      id: 1,
      type: "Kecelakaan",
      location: "Jl. Diponegoro No. 78, Mataram Barat, NTB",
      time: "09:00 WITA",
      description: "Butuh bantuan ada kecelakaan, ambulan dan medis!",
      latlng: [-8.582, 116.105],
    },
    {
      id: 2,
      type: "Sakit",
      location: "Jl. Ahmad Yani No. 99, Malang Selatan, Jawa Timur",
      time: "09:00 WITA",
      description: "Pasien mengalami serangan jantung, butuh medis cepat!",
      latlng: [-8.586, 116.11],
    },
  ];

  return (
    <div className="flex w-full">
      {/* Peta */}
      <div className="flex-1 relative min-h-screen">
        <LeafletMap />
      </div>

      {/* Sidebar */}
      <div className="w-[400px] max-h-screen overflow-y-auto scrollbar-hide p-4 shadow-xl backdrop-blur-xl bg-white/30 border-l border-white/30 rounded-l-2xl">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border hover:bg-red-300 border-red-300 rounded-xl p-4 mb-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-lg text-red-700 flex items-center gap-2">
                <span>🚨 Emergency ({item.type})</span>
              </h2>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  item.type === "Kecelakaan"
                    ? "bg-red-200 text-red-800"
                    : "bg-purple-200 text-purple-800"
                }`}
              >
                {item.type}
              </span>
            </div>
            <div className="text-sm text-gray-700 mb-1">
              📍 {item.location}
              <br />
              🕒 {item.time}
            </div>
            <div className="mt-2 text-gray-600 text-sm">{item.description}</div>
            <div className="mt-4 flex gap-2">
              <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded">
                🚑 Kirim Ambulans
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded">
                📞 Hubungi Pelapor
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
