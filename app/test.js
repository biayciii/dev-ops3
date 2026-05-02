const assert = require('assert');

// Một bài test giả lập: Kiểm tra xem 1 + 1 có bằng 2 không
// Nếu bằng 2, test Pass. Nếu sai, test Fail và báo lỗi.
try {
    assert.strictEqual(1 + 1, 2);
    console.log("Unit Test PASS: Ung dung hoat dong tot!");
    process.exit(0);
} catch (error) {
    console.error("Unit Test FAIL: Co loi xay ra!");
    process.exit(1);
}