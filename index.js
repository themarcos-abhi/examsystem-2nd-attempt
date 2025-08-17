
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    if(username === '' || password === '') {
        alert('Please enter both username and password');
        return;
    }
    
    
    console.log('Login attempted with:', username, password);
    
    
    window.location.href = 'dashboard.html';
});


document.getElementById('examRegistration')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
   
    const examName = document.getElementById('examName').value;
    const fullName = document.getElementById('fullName').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    
    // Validate form
    if(fullName === '' || rollNumber === '' || department === '' || semester === '') {
        alert('Please fill in all fields');
        return;
    }
    
    //server data jab koi alag se app build krenge tb
    console.log('Registration submitted:', {
        examName,
        fullName,
        rollNumber,
        department,
        semester
    });
    
    
    alert('Registration successful!');
    window.location.href = 'active-exams.html';
});


document.getElementById('admitCardForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const examSelect = document.getElementById('examSelect').value;
    
    if(examSelect === '') {
        alert('Please select an exam');
        return;
    }
    
   
    document.getElementById('admitCardPreview').style.display = 'block';
    
   
    document.getElementById('admitCardPreview').scrollIntoView({ behavior: 'smooth' });
});

// Download Admit Card
document.getElementById('downloadBtn')?.addEventListener('click', function() {
    alert('Admit card download would start here in a real implementation');
});

// Print Admit Card
document.getElementById('printBtn')?.addEventListener('click', function() {
    window.print();
});

// Results Filter
document.getElementById('resultFilter')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const semester = document.getElementById('semester').value;
    alert(`Filtering results for semester: ${semester}`);
    // In real app, this would filter the results table
});

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if(currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

});
