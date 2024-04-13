document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");

  openBtn.addEventListener("click", function() {
    sidebar.style.right = "0"; // Changed to right
  });

  closeBtn.addEventListener("click", function() {
    sidebar.style.right = "-250px"; // Changed to right
  });

  const sidebarLinks = document.querySelectorAll(".sidebar a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", function() {
      sidebar.style.right = "-250px"; // Changed to right
    });
  });
});

















 


  
 
 
  































































