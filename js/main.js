var typed=new Typed(".text",{
    strings :["Software Developer","FrontEnd Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

})

document.getElementById('contact-form') .addEventListener('submit',function (event){
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formsubmit.co/el/zanopo",{
        method:"POST",
        body:data,
    }).then(response =>{
        if (response.ok) {
            alert('Success');
        } else{
            alert('Error');
        }
    });
    document.getElementById('contact-form').reset();
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark theme

// Apply the saved theme on load
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.innerText = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.innerText = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerText = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerText = '🌙';
    }
});