// --- 1. CẤU HÌNH SỐ LƯỢNG GIẢI ---
// Định dạng: Giải: Số lượng

const CONFIG_GIAI_THUONG = {
    2: { name: "GIẢI NHẤT", detail: "Điều hòa Casper 9000 BTU", count: 1, img: "img/giai2.png" },
    3: { name: "GIẢI NHÌ", detail: "Xe Đạp thể thao", count: 2, img: "img/giai3.png" },
    4: { name: "GIẢI BA", detail: "Máy hàn Ống nhiệt 800W", count: 5, img: "img/giai4.png" }
    // ... các giải khác
};
const KICH_BAN_QUAY = [
    // --- GIẢI BA (5 giải trong 1 lần bấm quay) ---
    { prizeId: 4, count: 5, label: "GIẢI BA", presenter: "Mr Long & Mr Kế" },

    // --- GIẢI NHÌ (2 giải trong 1 lần bấm quay) ---
    { prizeId: 3, count: 2, label: "GIẢI NHÌ", presenter: "Mr Thành Nam" },

    // --- GIẢI NHẤT (1 giải trong 1 lần bấm quay) ---
    { prizeId: 2, count: 1, label: "GIẢI NHẤT", presenter: "Mr Trường" }
];


// --- 2. DANH SÁCH NHÂN VIÊN ---
// Đoạn code tự động tạo danh sách 200 khách hàng từ 0001 đến 0200
const DANH_SACH_NHAN_VIEN = [];
for (let i = 1; i <= 200; i++) {
    // padStart sẽ đảm bảo số có 3 chữ số, VD: 1 -> "001", 45 -> "045"
    let codeStr = String(i).padStart(3, '0');
    DANH_SACH_NHAN_VIEN.push({
        code: codeStr,
        pos: 'Đại lý',
        status: 1
    });
}