
function Job(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
}
let jobs = [];
function themCongViec() {
    let id = prompt("Nhập ID công việc:");
    let title = prompt("Nhập tiêu đề công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let completed = prompt("Công việc đã hoàn thành? (true/false):");

    let newJob = new Job(id, title, description, completed === "true");
    jobs.push(newJob);

    console.log("Công việc đã được thêm mới.");
}
function inDanhSachCongViec() {
    console.log("Danh sách công việc:");
    for (let i = 0; i < jobs.length; i++) {
        console.log(`ID: ${jobs[i].id}, Tiêu đề: ${jobs[i].title}, Mô tả: ${jobs[i].description}, Hoàn thành: ${jobs[i].completed}`);
    }
}
function timKiemCongViecTheoId() {
    let idToSearch = prompt("Nhập ID công việc cần tìm kiếm:");
    let foundJob = jobs.find(job => job.id === idToSearch);

    if (foundJob) {
        console.log("Thông tin công việc:");
        console.log(`ID: ${foundJob.id}, Tiêu đề: ${foundJob.title}, Mô tả: ${foundJob.description}, Hoàn thành: ${foundJob.completed}`);
    } else {
        console.log("Không tìm thấy công việc.");
    }
}
function luaChonChuongTrinh() {
    while (true) {
        console.log("Lựa chọn chương trình:");
        console.log("1. Thêm mới công việc");
        console.log("2. In ra danh sách công việc");
        console.log("3. Tìm kiếm công việc theo ID");
        console.log("4. Thoát chương trình");

        let luaChon = prompt("Nhập lựa chọn:");

        switch (luaChon) {
            case "1":
                themCongViec();
                break;
            case "2":
                inDanhSachCongViec();
                break;
            case "3":
                timKiemCongViecTheoId();
                break;
            case "4":
                console.log("Chương trình kết thúc.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
        }
    }
}
luaChonChuongTrinh();
