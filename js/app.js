document.addEventListener('DOMContentLoaded', async function() {
    lucide.createIcons();
    
    await loadComponents();

    initCalendarModal();
    initItemPopups();
    initArchivePopup();
    initTrashPopup();
    initMenuDropdown();
    initBirthdayCorner();
    initCanvasAnimation();
    initMobileHandlers();
    initMobileBottomNav();
});

async function loadComponents() {
    const container = document.getElementById('components-container');
    const components = [
        'components/calendar-modal.html',
        'components/gifts-popup.html',
        'components/surprise-popup.html',
        'components/memories-popup.html',
        'components/archive-popup.html',
        'components/trash-popup.html',
        'components/menu-dropdown.html',
        'components/birthday-password-popup.html',
        'components/birthday-locked-popup.html'
    ];

    try {
        const responses = await Promise.all(components.map(c => fetch(c).then(r => r.text())));
        container.innerHTML = responses.join('');
        lucide.createIcons();
    } catch (e) {
        console.log('Components loaded via inline HTML');
    }
}

function initCalendarModal() {
    const calendarBtn = document.getElementById('calendarBtn');
    const calendarBtnMobile = document.getElementById('calendarBtnMobile');
    const calendarBtnNav = document.getElementById('calendarBtnNav');
    const closeCalendar = document.getElementById('closeCalendar');
    const modalContainer = document.querySelector('#calendarModal .modal-anim');

    function openModal() {
        if (!modalContainer) return;
        const calendarModal = document.getElementById('calendarModal');
        calendarModal.classList.remove('hidden');
        calendarModal.classList.add('flex');
        lucide.createIcons();
        setTimeout(function() {
            modalContainer.classList.add('modal-open');
        }, 10);
    }

    function closeModal() {
        if (!modalContainer) return;
        const calendarModal = document.getElementById('calendarModal');
        modalContainer.classList.remove('modal-open');
        setTimeout(function() {
            calendarModal.classList.remove('flex');
            calendarModal.classList.add('hidden');
        }, 300);
    }

    [calendarBtn, calendarBtnMobile, calendarBtnNav].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        }
    });

    if (closeCalendar) {
        closeCalendar.addEventListener('click', closeModal);
    }

    const calendarModal = document.getElementById('calendarModal');
    if (calendarModal) {
        calendarModal.addEventListener('click', function(e) {
            if (e.target === calendarModal) closeModal();
        });
    }
}

function initItemPopups() {
    const itemPopups = [
        { btnId: 'giftsCard', popupId: 'giftsPopup' },
        { btnId: 'surpriseCard', popupId: 'surprisePopup' },
        { btnId: 'memoriesCard', popupId: 'memoriesPopup' },
        { btnId: 'giftsCardMobile', popupId: 'giftsPopup' },
        { btnId: 'surpriseCardMobile', popupId: 'surprisePopup' },
        { btnId: 'memoriesCardMobile', popupId: 'memoriesPopup' }
    ];

    itemPopups.forEach(function(item) {
        const card = document.getElementById(item.btnId);
        const popup = document.getElementById(item.popupId);
        const modalContainer = popup ? popup.querySelector('.modal-anim') : null;

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
}

function initArchivePopup() {
    const archiveBtn = document.getElementById('archiveBtn');
    const archiveBtnMobile = document.getElementById('archiveBtnMobile');
    const archiveBtnNav = document.getElementById('archiveBtnNav');
    const closeArchive = document.getElementById('closeArchive');
    const archivePopup = document.getElementById('archivePopup');
    const archiveModalContainer = archivePopup ? archivePopup.querySelector('.modal-anim') : null;

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

    [archiveBtn, archiveBtnMobile, archiveBtnNav].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                openArchivePopup();
            });
        }
    });

    if (closeArchive) {
        closeArchive.addEventListener('click', closeArchivePopup);
    }

    if (archivePopup) {
        archivePopup.addEventListener('click', function(e) {
            if (e.target === archivePopup) closeArchivePopup();
        });
    }
}

function initTrashPopup() {
    const trashBtn = document.getElementById('trashBtn');
    const mobileTrashBtn = document.getElementById('mobileTrashBtn');
    const trashPopup = document.getElementById('trashPopup');
    const trashModalContainer = trashPopup ? trashPopup.querySelector('.modal-anim') : null;

    function openTrashPopup() {
        if (!trashPopup || !trashModalContainer) return;
        trashPopup.classList.remove('hidden');
        trashPopup.classList.add('flex');
        lucide.createIcons();
        setTimeout(function() {
            trashModalContainer.classList.add('modal-open');
        }, 10);
    }

    function closeTrashPopup() {
        if (!trashModalContainer || !trashPopup) return;
        trashModalContainer.classList.remove('modal-open');
        setTimeout(function() {
            trashPopup.classList.remove('flex');
            trashPopup.classList.add('hidden');
        }, 300);
    }

    [trashBtn, mobileTrashBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                openTrashPopup();
            });
        }
    });

    const closeBtn = trashPopup ? trashPopup.querySelector('.close-popup') : null;
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTrashPopup);
    }

    if (trashPopup) {
        trashPopup.addEventListener('click', function(e) {
            if (e.target === trashPopup) closeTrashPopup();
        });
    }
}

function initMobileBottomNav() {
    const mobileCalendarBtn = document.getElementById('mobileCalendarBtn');
    const mobileArchiveBtn = document.getElementById('mobileArchiveBtn');
    const mobileTrashBtn = document.getElementById('mobileTrashBtn');
    const mobileAddBtn = document.getElementById('mobileAddBtn');
    
    const calendarModal = document.getElementById('calendarModal');
    const archivePopup = document.getElementById('archivePopup');
    const trashPopup = document.getElementById('trashPopup');
    
    function openModal(modal) {
        if (!modal) return;
        const modalContainer = modal.querySelector('.modal-anim');
        if (!modalContainer) return;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        lucide.createIcons();
        setTimeout(function() {
            modalContainer.classList.add('modal-open');
        }, 10);
    }

    if (mobileCalendarBtn) {
        mobileCalendarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(calendarModal);
        });
    }

    if (mobileArchiveBtn) {
        mobileArchiveBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(archivePopup);
        });
    }

    if (mobileTrashBtn) {
        mobileTrashBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(trashPopup);
        });
    }

    if (mobileAddBtn) {
        mobileAddBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const menuBtn = document.getElementById('menuBtn');
            if (menuBtn) menuBtn.click();
        });
    }
}

function initMenuDropdown() {
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
}

function initBirthdayCorner() {
    const birthdayCornerBtn = document.getElementById('birthdayCornerBtn');
    const birthdayPasswordPopup = document.getElementById('birthdayPasswordPopup');
    const closeBirthdayPwd = document.querySelector('.close-birthday-pwd');
    const birthdayPasswordAnim = birthdayPasswordPopup ? birthdayPasswordPopup.querySelector('.modal-anim') : null;
    const passwordInput = document.getElementById('birthdayPassword');
    const passwordError = document.getElementById('passwordError');
    const submitPassword = document.getElementById('submitPassword');

    function openBirthdayPasswordPopup() {
        const menuDropdown = document.getElementById('menuDropdown');
        if (menuDropdown) menuDropdown.classList.add('hidden');
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
            if (passwordInput) passwordInput.value = '';
            if (passwordError) passwordError.classList.add('hidden');
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
            if (passwordInput && passwordInput.value === '2580') {
                passwordError.classList.add('hidden');
                closeBirthdayPasswordPopup();
                setTimeout(function() {
                    openBirthdayLockedPopup();
                }, 350);
            } else {
                if (passwordError) passwordError.classList.remove('hidden');
            }
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && submitPassword) {
                submitPassword.click();
            }
        });
    }

    initBirthdayLockedPopup();
}

function initBirthdayLockedPopup() {
    const birthdayLockedPopup = document.getElementById('birthdayLockedPopup');
    const closeBirthdayLocked = document.querySelector('.close-birthday-locked');
    const birthdayLockedAnim = birthdayLockedPopup ? birthdayLockedPopup.querySelector('.modal-anim') : null;

    window.openBirthdayLockedPopup = function() {
        if (!birthdayLockedPopup || !birthdayLockedAnim) return;
        birthdayLockedPopup.classList.remove('hidden');
        birthdayLockedPopup.classList.add('flex');
        lucide.createIcons();
        startCountdown();
        setTimeout(function() {
            birthdayLockedAnim.classList.add('modal-open');
        }, 10);
    };

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
}

function initCanvasAnimation() {
    const canvasImg = document.getElementById('canvasImg');
    const profileImg = document.querySelector('main header img');
    
    if (canvasImg) {
        canvasImg.addEventListener('click', function(e) {
            const penguin = document.createElement('div');
            penguin.className = 'fixed text-6xl z-50 pointer-events-none';
            penguin.textContent = '🐧';
            
            const profileRect = profileImg ? profileImg.getBoundingClientRect() : { left: window.innerWidth/2, top: 100, width: 32 };
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
}

function initMobileHandlers() {
    // Mobile sidebar close on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const sidebar = document.getElementById('mobileSidebar');
            if (sidebar && !sidebar.classList.contains('hidden')) {
                closeMobileSidebar();
            }
        }
    });
}

function startCountdown() {
    const birthdayDate = new Date('2026-05-28T00:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const diff = birthdayDate - now;
        
        if (diff <= 0) {
            const daysEl = document.getElementById('daysRemaining');
            const hoursEl = document.getElementById('hoursRemaining');
            const minsEl = document.getElementById('minutesRemaining');
            const secsEl = document.getElementById('secondsRemaining');
            if (daysEl) daysEl.textContent = '0 Days';
            if (hoursEl) hoursEl.textContent = '0';
            if (minsEl) minsEl.textContent = '0';
            if (secsEl) secsEl.textContent = '0';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('daysRemaining');
        const hoursEl = document.getElementById('hoursRemaining');
        const minsEl = document.getElementById('minutesRemaining');
        const secsEl = document.getElementById('secondsRemaining');
        
        if (daysEl) daysEl.textContent = days + ' Days';
        if (hoursEl) hoursEl.textContent = hours;
        if (minsEl) minsEl.textContent = minutes;
        if (secsEl) secsEl.textContent = seconds;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('mobileSidebar');
    const panel = document.getElementById('sidebarPanel');
    if (panel) panel.classList.add('-translate-x-full');
    if (sidebar) setTimeout(() => sidebar.classList.add('hidden'), 300);
}