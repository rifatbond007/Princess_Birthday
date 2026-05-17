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

    // Menu Dropdown
    const menuBtn = document.getElementById('menuBtn');
    const menuDropdown = document.getElementById('menuDropdown');
    const menuDropdownAnim = menuDropdown ? menuDropdown.querySelector('.menu-dropdown-anim') : null;

    function toggleMenu(e) {
        e.stopPropagation();
        if (!menuDropdown) return;
        
        const isHidden = menuDropdown.classList.contains('hidden');
        
        if (isHidden) {
            const rect = menuBtn.getBoundingClientRect();
            menuDropdown.style.left = (rect.right - 180) + 'px';
            menuDropdown.style.top = (rect.bottom + 4) + 'px';
            menuDropdown.classList.remove('hidden');
            setTimeout(function() {
                if (menuDropdownAnim) menuDropdownAnim.classList.add('opacity-100', 'scale-100');
                menuDropdownAnim.classList.remove('opacity-0', 'scale-95');
            }, 10);
        } else {
            if (menuDropdownAnim) {
                menuDropdownAnim.classList.remove('opacity-100', 'scale-100');
                menuDropdownAnim.classList.add('opacity-0', 'scale-95');
            }
            setTimeout(function() {
                menuDropdown.classList.add('hidden');
            }, 200);
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    document.addEventListener('click', function(e) {
        if (menuDropdown && !menuDropdown.contains(e.target) && e.target !== menuBtn) {
            if (menuDropdownAnim) {
                menuDropdownAnim.classList.remove('opacity-100', 'scale-100');
                menuDropdownAnim.classList.add('opacity-0', 'scale-95');
            }
            setTimeout(function() {
                menuDropdown.classList.add('hidden');
            }, 200);
        }
    });

    // Birthday Corner Password Popup
    const birthdayCornerBtn = document.getElementById('birthdayCornerBtn');
    const birthdayPasswordPopup = document.getElementById('birthdayPasswordPopup');
    const closeBirthdayPwd = document.querySelector('.close-birthday-pwd');
    const birthdayPasswordAnim = birthdayPasswordPopup ? birthdayPasswordPopup.querySelector('.birthday-password-anim') : null;
    const passwordInput = document.getElementById('birthdayPassword');
    const passwordError = document.getElementById('passwordError');
    const submitPassword = document.getElementById('submitPassword');

    function openBirthdayPasswordPopup() {
        menuDropdown.classList.add('hidden');
        if (!birthdayPasswordPopup || !birthdayPasswordAnim) return;
        birthdayPasswordPopup.classList.remove('hidden');
        birthdayPasswordPopup.classList.add('flex');
        lucide.createIcons();
        setTimeout(function() {
            birthdayPasswordAnim.classList.add('modal-open');
        }, 10);
    }

    function closeBirthdayPasswordPopup() {
        if (!birthdayPasswordAnim || !birthdayPasswordPopup) return;
        birthdayPasswordAnim.classList.remove('modal-open');
        setTimeout(function() {
            birthdayPasswordPopup.classList.remove('flex');
            birthdayPasswordPopup.classList.add('hidden');
            passwordInput.value = '';
            passwordError.classList.add('hidden');
        }, 300);
    }

    if (birthdayCornerBtn) {
        birthdayCornerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openBirthdayPasswordPopup();
        });
    }

    if (closeBirthdayPwd) {
        closeBirthdayPwd.addEventListener('click', closeBirthdayPasswordPopup);
    }

    if (birthdayPasswordPopup) {
        birthdayPasswordPopup.addEventListener('click', function(e) {
            if (e.target === birthdayPasswordPopup) closeBirthdayPasswordPopup();
        });
    }

    if (submitPassword) {
        submitPassword.addEventListener('click', function() {
            if (passwordInput.value === '2580') {
                passwordError.classList.add('hidden');
                closeBirthdayPasswordPopup();
                setTimeout(function() {
                    openBirthdayLockedPopup();
                }, 350);
            } else {
                passwordError.classList.remove('hidden');
            }
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitPassword.click();
            }
        });
    }

    // Birthday Locked Interface with Countdown
    const birthdayLockedPopup = document.getElementById('birthdayLockedPopup');
    const closeBirthdayLocked = document.querySelector('.close-birthday-locked');
    const birthdayLockedAnim = birthdayLockedPopup ? birthdayLockedPopup.querySelector('.birthday-locked-anim') : null;

    function openBirthdayLockedPopup() {
        if (!birthdayLockedPopup || !birthdayLockedAnim) return;
        birthdayLockedPopup.classList.remove('hidden');
        birthdayLockedPopup.classList.add('flex');
        lucide.createIcons();
        startCountdown();
        setTimeout(function() {
            birthdayLockedAnim.classList.add('modal-open');
        }, 10);
    }

    function closeBirthdayLockedPopup() {
        if (!birthdayLockedAnim || !birthdayLockedPopup) return;
        birthdayLockedAnim.classList.remove('modal-open');
        setTimeout(function() {
            birthdayLockedPopup.classList.remove('flex');
            birthdayLockedPopup.classList.add('hidden');
        }, 300);
    }

    if (closeBirthdayLocked) {
        closeBirthdayLocked.addEventListener('click', closeBirthdayLockedPopup);
    }

    if (birthdayLockedPopup) {
        birthdayLockedPopup.addEventListener('click', function(e) {
            if (e.target === birthdayLockedPopup) closeBirthdayLockedPopup();
        });
    }

    // Canvas Image Click - Flying Penguin
    const canvasImg = document.getElementById('canvasImg');
    const profileImg = document.querySelector('main header img');
    
    if (canvasImg) {
        canvasImg.addEventListener('click', function(e) {
            const penguin = document.createElement('div');
            penguin.className = 'fixed text-6xl z-50 pointer-events-none';
            penguin.textContent = '🐧';
            
            const profileRect = profileImg.getBoundingClientRect();
            penguin.style.left = profileRect.left + profileRect.width/2 - 30 + 'px';
            penguin.style.top = profileRect.top + 'px';
            penguin.style.transition = 'all 1.5s ease-in-out';
            
            document.body.appendChild(penguin);
            
            setTimeout(function() {
                penguin.style.left = window.innerWidth/2 - 40 + 'px';
                penguin.style.top = '50px';
                penguin.style.transform = 'scale(1.5)';
            }, 50);
            
            setTimeout(function() {
                penguin.style.opacity = '0';
                penguin.style.transform = 'scale(2) rotate(360deg)';
            }, 1400);
            
            setTimeout(function() {
                penguin.remove();
            }, 1700);
        });
    }

    // Countdown to May 28, 2026
    function startCountdown() {
        const birthdayDate = new Date('2026-05-28T00:00:00');
        
        function updateCountdown() {
            const now = new Date();
            const diff = birthdayDate - now;
            
            if (diff <= 0) {
                document.getElementById('daysRemaining').textContent = '0 Days';
                document.getElementById('hoursRemaining').textContent = '0';
                document.getElementById('minutesRemaining').textContent = '0';
                document.getElementById('secondsRemaining').textContent = '0';
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('daysRemaining').textContent = days + ' Days';
            document.getElementById('hoursRemaining').textContent = hours;
            document.getElementById('minutesRemaining').textContent = minutes;
            document.getElementById('secondsRemaining').textContent = seconds;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});