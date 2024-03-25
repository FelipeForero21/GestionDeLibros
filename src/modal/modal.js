document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn1 = document.getElementById('openModalBtn1');
    const openModalBtn2 = document.getElementById('openModalBtn2');
    const openModalBtn3 = document.getElementById('openModalBtn3');
    const modals = document.querySelectorAll('.modal');
    const closeModalBtns = document.querySelectorAll('.close');
  
    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
    }
  
    function closeModal() {
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
    }
  
    openModalBtn1.addEventListener('click', function() {
      openModal('modal1');
    });
  
    openModalBtn2.addEventListener('click', function() {
      openModal('modal2');
    });
  
    openModalBtn3.addEventListener('click', function() {
      openModal('modal3');
    });
  
    closeModalBtns.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        closeModal();
      });
    });
  
    window.addEventListener('click', function(event) {
      modals.forEach(modal => {
        if (event.target === modal) {
          closeModal();
        }
      });
    });
  });
  








  