let danhBaDienThoai = [
    { ten: "Người tình mùa đông", soDienThoai: "123-456-78910-12-12", email: "anhlanumber1@example.com" },
    { ten: "Người yêu cũ ", soDienThoai: "666-666-666", email: "fucyoymaoherofbtich@example.com" },
    { ten: "Người vợ hiện tại ", soDienThoai: "111-222-3333", email: "emchilanguoidensau@example.com" },
];

for (let i = 0; i < danhBaDienThoai.length; i++) {
    console.log(`Thông tin liên lạc ${i + 1}:`);
    console.log("Tên: " + danhBaDienThoai[i].ten);
    console.log("Số điện thoại: " + danhBaDienThoai[i].soDienThoai);
    console.log("Email: " + danhBaDienThoai[i].email);
    console.log("---------------------------");
}
