document.getElementById('open-sidebar').addEventListener('click', function() {
  document.getElementById('sidebar').classList.add('open');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
  document.getElementById('sidebar').classList.remove('open');
});

let sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
  link.addEventListener('click', function() {
      document.getElementById('sidebar').classList.remove('open');
  });
});













 


  
 
 
  































































