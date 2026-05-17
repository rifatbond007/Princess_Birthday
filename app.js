document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();

    // Calendar Modal
    const calendarBtn = document.getElementById('calendarBtn');
    const calendarModal = document.getElementById('calendarModal');
    const closeCalendar = document.getElementById('closeCalendar');
    const modalContainer = calendarModal ? calendarModal.querySelector('.JSON-modal-anim') : null;

    function openModal() {
        if (!calendarModal || !modalContainer) return;
        calendarModal.classList.remove('hidden');
        calendarModal.classList.add('flex');
        lucide.createIcons();
        setTimeout(function() {
            modalContainer.classList.add('modal-open');
        }, 10);
    }

    function closeModal() {
        if (!modalContainer || !calendarModal) return;
        modalContainer.classList.remove('modal-open');
        setTimeout(function() {
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

    // Item Popups (Gifts, Surprise, Memories)
    const itemPopups = [
        { btnId: 'giftsCard', popupId: 'giftsPopup', modalClass: 'gifts-modal-anim' },
        { btnId: 'surpriseCard', popupId: 'surprisePopup', modalClass: 'surprise-modal-anim' },
        { btnId: 'memoriesCard', popupId: 'memoriesPopup', modalClass: 'memories-modal-anim' }
    ];

    itemPopups.forEach(function(item) {
        const card = document.getElementById(item.btnId);
        const popup = document.getElementById(item.popupId);
        const modalContainer = popup ? popup.querySelector('.' + item.modalClass) : null;

        function openItemPopup() {
            if (!popup || !modalContainer) return;
            popup.classList.remove('hidden');
            popup.classList.add('flex');
            lucide.createIcons();
            setTimeout(function() {
                modalContainer.classList.add('modal-open');
            }, 10);
        }

        function closeItemPopup() {
            if (!modalContainer || !popup) return;
            modalContainer.classList.remove('modal-open');
            setTimeout(function() {
                popup.classList.remove('flex');
                popup.classList.add('hidden');
            }, 300);
        }

        if (card) {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                openItemPopup();
            });
        }

        const closeBtn = popup ? popup.querySelector('.close-popup') : null;
        if (closeBtn) {
            closeBtn.addEventListener('click', closeItemPopup);
        }

        if (popup) {
            popup.addEventListener('click', function(e) {
                if (e.target === popup) closeItemPopup();
            });
        }
    });

    // Archive Gallery Popup
    const archiveBtn = document.getElementById('archiveBtn');
    const archivePopup = document.getElementById('archivePopup');
    const closeArchive = document.getElementById('closeArchive');
    const archiveModalContainer = archivePopup ? archivePopup.querySelector('.archive-modal-anim') : null;

    function openArchivePopup() {
        if (!archivePopup || !archiveModalContainer) return;
        archivePopup.classList.remove('hidden');
        archivePopup.classList.add('flex');
        lucide.createIcons();
        setTimeout(function() {
            archiveModalContainer.classList.add('modal-open');
        }, 10);
    }

    function closeArchivePopup() {
        if (!archiveModalContainer || !archivePopup) return;
        archiveModalContainer.classList.remove('modal-open');
        setTimeout(function() {
            archivePopup.classList.remove('flex');
            archivePopup.classList.add('hidden');
        }, 300);
    }

    if (archiveBtn) {
        archiveBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openArchivePopup();
        });
    }

    if (closeArchive) {
        closeArchive.addEventListener('click', closeArchivePopup);
    }

    if (archivePopup) {
        archivePopup.addEventListener('click', function(e) {
            if (e.target === archivePopup) closeArchivePopup();
        });
    }
});