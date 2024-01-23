function Sach(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
}
Sach.prototype.borrow = function () {
    if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`Cuốn sách "${this.title}" đã được mượn.`);
    } else {
        console.log(`Cuốn sách "${this.title}" không khả dụng để mượn.`);
    }
};
Sach.prototype.returnBook = function () {
    if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`Cuốn sách "${this.title}" đã được trả.`);
    } else {
        console.log(`Cuốn sách "${this.title}" đã có sẵn trong thư viện.`);
    }
};
function ThuVien() {
    this.sachTrongThuVien = [];
}
ThuVien.prototype.themSach = function (sach) {
    this.sachTrongThuVien.push(sach);
};
ThuVien.prototype.isBookAvailable = function (title) {
    for (let i = 0; i < this.sachTrongThuVien.length; i++) {
        if (this.sachTrongThuVien[i].title === title) {
            return this.sachTrongThuVien[i].isAvailable;
        }
    }
    return false;
};
let thuVienSach = new ThuVien();
let sach1 = new Sach("Sách 1", "Tác giả 1", 2020);
let sach2 = new Sach("Sách 2", "Tác giả 2", 2018);
thuVienSach.themSach(sach1);
thuVienSach.themSach(sach2);
sach1.borrow(); 
sach2.returnBook();
let titleToCheck = "Sách 1";
console.log(`Cuốn sách "${titleToCheck}" có sẵn để mượn: ${thuVienSach.isBookAvailable(titleToCheck)}`);
