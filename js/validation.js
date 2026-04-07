document.getElementById('contactForm').addEventListener('submit', function(e) {
    const phone = document.getElementById('phone').value;
    const phoneErr = document.getElementById('phoneErr');
    const regex = /^[0-9]{10}$/;

    if (!regex.test(phone)) {
        e.preventDefault();
        phoneErr.innerText = "Please enter exactly 10 digits.";
    } else {
        phoneErr.innerText = "";
    }
});