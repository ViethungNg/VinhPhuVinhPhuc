// --- 1. CẤU HÌNH SỐ LƯỢNG GIẢI ---
// Định dạng: Giải: Số lượng

const CONFIG_GIAI_THUONG = {
    1: { name: "GIẢI ĐẶC BIỆT", detail: "Điều hòa Casper 9000 BTU", count: 1 },
    2: { name: "GIẢI NHẤT", detail: "Cây nước nóng lạnh Kangaroo KG699A3", count: 1 },
    3: { name: "GIẢI NHÌ", detail: "Máy hàn ống nhiệt rơ le ROWELD P 63 S-6", count: 1 },
    4: { name: "GIẢI BA", detail: "Bình nóng lạnh Ariston 15L Vitaly", count: 2 }
    // ... các giải khác
};
const KICH_BAN_QUAY = [
    // --- GIẢI BA (Tổng 2 giải - Chia 2 phiên cho 2 người bấm quay) ---
    { prizeId: 4, count: 1, label: "GIẢI BA", presenter: "Mr Long" },
    { prizeId: 4, count: 1, label: "GIẢI BA", presenter: "Mr Kế" },

    // --- GIẢI NHÌ (1 giải) ---
    { prizeId: 3, count: 1, label: "GIẢI NHÌ", presenter: "Mr Thành Nam" },

    // --- GIẢI NHẤT (1 giải) ---
    { prizeId: 2, count: 1, label: "GIẢI NHẤT", presenter: "Mr Trường" },

    // --- GIẢI ĐẶC BIỆT (1 giải) ---
    { prizeId: 1, count: 1, label: "GIẢI ĐẶC BIỆT", presenter: "Ms Dung" }
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