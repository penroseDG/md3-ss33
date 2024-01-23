let nguoi = {
    ten: " PenroseDG",
    tuoi: 25,
    diaChi: "69 ASsHole Main Street"
};

console.log("Thông tin ban đầu:");
console.log(nguoi);

nguoi.ngaySinh = "01/01/1995";
delete nguoi.tuoi;

console.log("Thông tin sau khi thêm và xóa thuộc tính:");
console.log(nguoi);
