loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading spinner
    loginBtn.disabled = true;
    document.querySelector('.spinner').classList.remove('hidden');
  
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordInput.value
        })
      });
  
      const data = await response.json();
      
      if (data.success) {
        showNotification('Login successful!', 'success');
        localStorage.setItem('user', JSON.stringify(data.user));
        setTimeout(() => window.location.href = 'dashboard.html', 1500);
      } else {
        showNotification(data.error, 'error');
      }
    } catch (error) {
      showNotification('Network error', 'error');
    } finally {
      loginBtn.disabled = false;
      document.querySelector('.spinner').classList.add('hidden');
    }
  });