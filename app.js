document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();

    const calendarBtn = document.getElementById('calendarBtn');
    const calendarModal = document.getElementById('calendarModal');
    const closeCalendar = document.getElementById('closeCalendar');
    const modalContainer = calendarModal ? calendarModal.querySelector('.JSON-modal-anim') : null;

    function openModal() {
        if (!calendarModal || !modalContainer) return;
        calendarModal.classList.remove('hidden');
        calendarModal.classList.add('flex');
        lucide.createIcons();
        setTimeout(() => {
            modalContainer.classList.add('modal-open');
        }, 10);
    }

    function closeModal() {
        if (!modalContainer || !calendarModal) return;
        modalContainer.classList.remove('modal-open');
        setTimeout(() => {
            calendarModal.classList.remove('flex');
            calendarModal.classList.add('hidden');
        }, 300);
    }

    if (calendarBtn) {
        calendarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }

    if (closeCalendar) {
        closeCalendar.addEventListener('click', closeModal);
    }

    if (calendarModal) {
        calendarModal.addEventListener('click', function(e) {
            if (e.target === calendarModal) closeModal();
        });
    }
});