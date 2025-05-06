export default function Book() {
    return (
        <section className="bg-white min-h-screen py-10 px-6 font-serif text-center text-gray-800">
            {/* Header */}
            <h1 class="wedding-title">Thư Mời</h1>
            <p class="wedding-subtitle">Tham dự lễ cưới của Khanh & Lâm</p>


            {/* Ảnh cô dâu chú rể */}
            <div className="flex justify-center gap-3 mt-5 mb-6">
                <img src="/images/32.jpg" className="w-28 h-36 object-cover rounded-xl shadow" alt="ảnh cưới" />
                <img src="/images/32.jpg" className="w-28 h-36 object-cover rounded-xl shadow border-2 border-pink-300" alt="ảnh cưới" />
                <img src="/images/32.jpg" className="w-28 h-36 object-cover rounded-xl shadow" alt="ảnh cưới" />
            </div>

            {/* Nội dung chính */}
            <div className="text-md font-medium leading-6">
                <p className="text-pink-700 text-xl font-bold">TIỆC MỪNG LỄ VU QUY</p>
                <p className="mt-2">Vào lúc <strong>11h00</strong> | <strong>Thứ 7</strong></p>
                <p className="text-lg mt-2">
                    <span className="font-bold">Tháng 2</span> &nbsp;
                    <span className="text-3xl font-extrabold text-gray-800">16</span> &nbsp;
                    <span className="font-bold">2025</span>
                </p>
                <p className="mt-2 text-sm italic text-gray-600">(Tức ngày 16 tháng 01 năm Giáp Thìn)</p>
            </div>

            {/* Lịch */}
            <div className="mt-6 inline-block p-4 bg-pink-50 rounded-lg shadow-inner">
                <p className="text-xl font-semibold mb-2 text-pink-600">Tháng 2 - 2025</p>
                <div className="grid grid-cols-7 gap-2 text-xs text-gray-600">
                    {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((d, i) => (
                        <div key={i} className="font-bold">{d}</div>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => (
                        <div key={i + 1}
                            className={`p-2 rounded-full ${i + 1 === 16 ? "bg-pink-500 text-white font-bold" : ""}`}>
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
