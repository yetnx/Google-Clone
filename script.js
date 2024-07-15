document.addEventListener('DOMContentLoaded', function() {
  const searchContainer = document.getElementById('searchContainer');
  const searchInput = document.getElementById('searchInput');
  const placeholder = searchInput.placeholder;

  searchInput.addEventListener('focus', function() {
    searchContainer.classList.add('bg-gray-700');
    this.placeholder = '';
    this.selectionStart = this.selectionEnd = this.value.length;
  });

  searchInput.addEventListener('blur', function() {
    if (this.value === '') {
      searchContainer.classList.remove('bg-gray-700');
      this.placeholder = placeholder;
    }
  });

  // Prevent new lines in textarea
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Here you can add code to submit the form or perform a search
    }
  });

  // Keep cursor at the end
  searchInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
    this.selectionStart = this.selectionEnd = this.value.length;
  });

  // Prevent cursor movement
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
    }
  });

  // Prevent selection
  searchInput.addEventListener('select', function(e) {
    this.selectionStart = this.selectionEnd = this.value.length;
  });

  // Prevent mouse selection
  searchInput.addEventListener('mousedown', function(e) {
    e.preventDefault();
    this.selectionStart = this.selectionEnd = this.value.length;
  });

  // Prevent touch selection
  searchInput.addEventListener('touchstart', function(e) {
    e.preventDefault();
    this.selectionStart = this.selectionEnd = this.value.length;
  });
});