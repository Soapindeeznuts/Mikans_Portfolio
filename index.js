
  // 🌙 Dark Mode Setup
  function initDarkMode() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', isDark);
    document.getElementById('darkToggle').checked = isDark;
  }

  function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = !html.classList.contains('dark');
    html.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();

    // ⏳ Loader logic
    const loader = document.getElementById('loader');
    const main = document.getElementById('main-content');

    // Add tailwind transition classes
    loader.classList.add('transition-opacity', 'duration-500', 'ease-in-out');

    // Fade out loader after short delay
    setTimeout(() => {
      loader.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        loader.classList.add('hidden');
        main.classList.remove('hidden');
      }, 500); // Wait for fade-out to finish
    }, 300); // Optional slight delay for effect
  });

  // 🐰 Secret No Clue thingy
  function SecretNoClue() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const soundList = [
      './audio/usagi 1.mp3',
      './audio/usagi 2.mp3',
      './audio/usagi 3.mp3',
      './audio/usagi 4.mp3',
      './audio/usagi 5.mp3',
      './audio/usagi 6.mp3',
      './audio/usagi 7.mp3',
      './audio/usagi 8.mp3',
    ];
    const randomSound = soundList[Math.floor(Math.random() * soundList.length)];
    const audio = new Audio(randomSound);
    audio.play();

    const img = document.createElement('img');
    img.src = './website/Usagi.png';
    img.alt = 'Secret Clue';
    img.style.position = 'fixed';
    img.style.width = '100px';
    img.style.zIndex = '50';

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const randomX = Math.floor(Math.random() * (screenWidth - 60));
    const randomY = Math.floor(Math.random() * (screenHeight - 60));

    img.style.left = `${randomX}px`;
    img.style.top = `${randomY}px`;
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.4s ease';
    setTimeout(() => (img.style.opacity = '1'), 10);

    document.body.appendChild(img);

    setTimeout(() => {
      img.style.opacity = '0';
      setTimeout(() => img.remove(), 400);
    }, 3000);

    console.log(`Secret ${randomNumber} at (${randomX}, ${randomY}) — playing: ${randomSound}`);
  }

   function toggleModal(id) {
      const modal = document.getElementById(id);
      modal.classList.toggle('hidden');
      modal.classList.toggle('flex');
    }

    function toggleDarkMode() {
    const html = document.documentElement;
    const img = document.getElementById('highlight1');

    html.classList.toggle('dark');

    const isDark = html.classList.contains('dark');
    img.src = isDark
      ? './images/art/highlight1.png'
      : './images/art/highlight1.2.png';
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate the position to scroll to
                    const offset = 70; // Adjust for fixed header height
                    const targetPosition = targetElement.offsetTop - offset;
                    
                    // Smooth scroll with JavaScript for more control
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without jumping
                    history.pushState(null, null, targetId);
                }
            });
        });

        function toggleTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });
    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
      link.classList.remove('active-tab');
    });
    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.remove('hidden');
    }
    // Set the clicked tab link as active
    const activeLink = document.querySelector(`.tab-link[onclick="toggleTab('${tabId}')"]`);
    if (activeLink) {
      activeLink.classList.add('active-tab');
    }
  }

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

 let currentPage = 1;
    showPage(currentPage);

    function nextPage(n) {
      showPage(currentPage += n);
    }

    function goToPage(n) {
      showPage(currentPage = n);
    }

    function showPage(n) {
      let pages = document.getElementsByClassName("mag-page");
      let dots = document.getElementsByClassName("mag-dot");

      if (n > pages.length) currentPage = 1;
      if (n < 1) currentPage = pages.length;

      for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      pages[currentPage - 1].style.display = "block";
      dots[currentPage - 1].classList.add("active");
    }

     function redirectEdits() {
    window.location.href = 'portfolio.html#edits';
  }
   function redirectWebsite() {
    window.location.href = 'portfolio.html#websites';
    }

    function redirectAbtMe() {
      window.location.href = 'index.html#about';
    }

    function redirectContact() {
      window.location.href = 'index.html#contact';
    }
 window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;

    if (hash) {
      // Hide all tab contents
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
      });

      // Show the correct section
      const target = document.querySelector(hash);
      if (target) {
        target.classList.remove('hidden');

        // Optional: smooth scroll to the section
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // KAN KAN 
  function Dialogue() {
  let txt;
  if (confirm("HALLO HOOMAN ARE YOU INTERESTED IN COMMISSIONING THIS POOR ARTIST????")) {
    txt = "Thank you oh kind soul :D"
    setTimeout(() => {
    window.open('https://forms.gle/KsX9a2DEzjRLGUsWA', '_blank');
  }, 2500); 
  } else {
    txt = "Alrighty then, I guess I'll just keep making art for myself :(";
  }document.getElementById("dialogue").innerHTML = txt;

  

setTimeout(() => {
  document.getElementById("dialogue").innerHTML = "";
}, 5000); // 5000 milliseconds = 5 seconds

}
