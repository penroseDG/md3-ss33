let danhBaDienThoai = [
    { ten: "Người chơi thứ 1", soDienThoai: "333-333-333", email: "nưfwfwfawaf@example.com" },
    { ten: "Người chơi thứ 2", soDienThoai: "222-222-222", email: "yoloyolo@example.com" },
    { ten: "Người chơi thứ 3", soDienThoai: "111-111-111", email: "numberone1fuck@example.com" },
];
Object.prototype.hienThiDayDuThongTin = function () {
    console.log(`Tên: ${this.ten}`);
    console.log(`Số điện thoại: ${this.soDienThoai}`);
    console.log(`Email: ${this.email}`);
    console.log("---------------------------");
};
for (let i = 0; i < danhBaDienThoai.length; i++) {
    danhBaDienThoai[i].hienThiDayDuThongTin();
}
