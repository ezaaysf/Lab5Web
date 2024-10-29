document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil nilai input
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // Error message element
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    // Validasi Nama
    if (!name.value) {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Validasi Email
    if (!email.validity.valid) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validasi Kata Sandi
    if (password.value.length < 6) {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Jika validasi berhasil
    if (isValid) {
        alert("Form berhasil dikirim!");
    } else {
        alert('Anda harus mengisi data dengan lengkap')
        // Form bisa disubmit di sini atau lakukan aksi lainnya
    }
});
