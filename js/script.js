// Script untuk menangani form submission umpan balik
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const feedback = document.getElementById('feedback').value;
    alert('Terima kasih atas umpan balik Anda!');
    // Anda bisa menambahkan kode untuk menyimpan umpan balik di sini.

    document.getElementById('feedback').value = '';
  });
  
