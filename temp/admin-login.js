function onAdminLogin(e) {
  const adminEmail = document.getElementById('adminEmail').value
  const adminPassword = document.getElementById('adminPassword').value
  if (adminEmail === 'admin' && adminPassword === 'admin') {
    window.location.href = "/quiz.html";
  } else {
    alert('Invalid email or password')
  }
}