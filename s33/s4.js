function Sach(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
}
Sach.prototype.hienThiDayDuThongTin = function () {
    console.log(`Tiêu đề: ${this.title}`);
    console.log(`Tác giả: ${this.author}`);
    console.log(`Năm xuất bản: ${this.publishedYear}`);
    console.log("---------------------------");
};
function ThuVien() {
    this.sachTrongThuVien = [];
}
ThuVien.prototype.themSach = function (sach) {
    this.sachTrongThuVien.push(sach);
};
ThuVien.prototype.hienThiDanhSachSach = function () {
    console.log("Danh sách sách trong thư viện:");
    for (let i = 0; i < this.sachTrongThuVien.length; i++) {
        this.sachTrongThuVien[i].hienThiDayDuThongTin();
    }
};
let thuVienSach = new ThuVien();
let sach1 = new Sach("Sách của đức đệptrai ", " ưqqwqwrr", 2020);
let sach2 = new Sach("Sách của đức đấng đại đế", " qửqwrwr", 2018);

thuVienSach.themSach(sach1);
thuVienSach.themSach(sach2);
thuVienSach.hienThiDanhSachSach();
