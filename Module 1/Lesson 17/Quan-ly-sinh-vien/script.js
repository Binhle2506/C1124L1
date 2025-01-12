const addStudentForm = document.getElementById('add-student-form');
const studentNameInput = document.getElementById('student-name');
const studentAgeInput = document.getElementById('student-age');
const studentPhoneInput = document.getElementById('student-phone');
const studentAddressInput = document.getElementById('student-address');
const studentList = document.getElementById('student-list');
const updateBtn = document.getElementById('update-btn');
let editingStudentIndex = null;

// Thêm sinh viên mới
addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentName = studentNameInput.value.trim();
    const studentAge = studentAgeInput.value.trim();
    const studentPhone = studentPhoneInput.value.trim();
    const studentAddress = studentAddressInput.value.trim();

    if (studentName && studentAge && studentPhone && studentAddress) {
        if (editingStudentIndex !== null) {
            // Cập nhật sinh viên đang sửa
            const studentItems = studentList.children;
            const student = studentItems[editingStudentIndex];

            student.innerHTML = `
                <span><strong>${studentName}</strong> - ${studentAge} tuổi</span>
                <span>SĐT: ${studentPhone}</span>
                <span>Địa chỉ: ${studentAddress}</span>
                <button class="edit-btn" onclick="editStudent(${editingStudentIndex})">Sửa</button>
                <button class="delete-btn" onclick="deleteStudent(${editingStudentIndex})">Xóa</button>
            `;

            // Reset form và ẩn nút cập nhật
            resetForm();
            editingStudentIndex = null; // Đặt lại để không còn sửa nữa
        } else {
            // Thêm mới sinh viên
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>${studentName}</strong> - ${studentAge} tuổi</span>
                <span>SĐT: ${studentPhone}</span>
                <span>Địa chỉ: ${studentAddress}</span>
                <button class="edit-btn" onclick="editStudent(${studentList.children.length})">Sửa</button>
                <button class="delete-btn" onclick="deleteStudent(${studentList.children.length})">Xóa</button>
            `;

            studentList.appendChild(li);

            // Reset form
            resetForm();
        }
    }
});

// Sửa thông tin sinh viên
function editStudent(index) {
    const studentItems = studentList.children;
    const student = studentItems[index];

    // Điền vào form với dữ liệu của sinh viên cần sửa
    const name = student.querySelector('strong').innerText;
    const age = student.querySelector('span').innerText.split(" ")[1];
    const phone = student.querySelectorAll('span')[1].innerText.split(": ")[1];
    const address = student.querySelectorAll('span')[2].innerText.split(": ")[1];

    studentNameInput.value = name;
    studentAgeInput.value = age;
    studentPhoneInput.value = phone;
    studentAddressInput.value = address;

    // Hiển thị nút cập nhật và ẩn nút thêm
    updateBtn.style.display = 'inline-block';
    addStudentForm.querySelector('button[type="submit"]').style.display = 'none';
    editingStudentIndex = index;
}

// Cập nhật sinh viên đã chọn
updateBtn.addEventListener('click', () => {
    const studentName = studentNameInput.value.trim();
    const studentAge = studentAgeInput.value.trim();
    const studentPhone = studentPhoneInput.value.trim();
    const studentAddress = studentAddressInput.value.trim();

    if (studentName && studentAge && studentPhone && studentAddress) {
        const studentItems = studentList.children;
        const student = studentItems[editingStudentIndex];

        // Cập nhật nội dung sinh viên
        student.innerHTML = `
            <span><strong>${studentName}</strong> - ${studentAge} tuổi</span>
            <span>SĐT: ${studentPhone}</span>
            <span>Địa chỉ: ${studentAddress}</span>
            <button class="edit-btn" onclick="editStudent(${editingStudentIndex})">Sửa</button>
            <button class="delete-btn" onclick="deleteStudent(${editingStudentIndex})">Xóa</button>
        `;
        resetForm();
        editingStudentIndex = null;
    }
});

// Xóa sinh viên
function deleteStudent(index) {
    const studentItems = studentList.children;
    studentList.removeChild(studentItems[index]);
    resetForm();
}

// Đặt lại form
function resetForm() {
    studentNameInput.value = '';
    studentAgeInput.value = '';
    studentPhoneInput.value = '';
    studentAddressInput.value = '';
    addStudentForm.querySelector('button[type="submit"]').style.display = 'inline-block';
    updateBtn.style.display = 'none';
}
