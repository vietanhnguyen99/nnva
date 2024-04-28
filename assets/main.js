document.body.style.cursor = 'none';

let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let delaySmallCursor = 0; 
let delayLargeCursor = 2; 

document.addEventListener("mousemove", function(e) {
    let mouseX = e.clientX - 5;
    let mouseY = e.clientY - 5;

    let mouseX2 = e.clientX - 30;
    let mouseY2 = e.clientY - 30;

    setTimeout(() => {
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    }, delaySmallCursor);

    setTimeout(() => {
        cursor2.style.left = mouseX2 + "px";
        cursor2.style.top = mouseY2 + "px";
    }, delayLargeCursor);
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => { 
    document.body.removeChild(loader); 
  });

  const curveText = document.getElementById('curve-text');
const navbar = document.querySelector('.navbar');
const curveTextImg = document.querySelector('.curve-text img');
const scrolldownIcon = document.querySelector('.scrolldown-icon');

let navbarHidden = true;

curveText.addEventListener('click', function() {
    if (window.innerWidth > 768) {
        if (navbarHidden) {
            navbar.style.transition = "max-height 0.5s ease, opacity 0.5s ease";
            navbar.style.maxHeight = '0';
            navbar.style.opacity = '0';
            curveTextImg.src = "./assets/images/click-for-more.png";
            scrolldownIcon.style.transform = "rotate(0deg)";
            scrolldownIcon.style.transition = "transform 0.5s ease";
        } else {
            navbar.style.transition = "max-height 0.5s ease, opacity 0.5s ease";
            navbar.style.maxHeight = '300px';
            navbar.style.opacity = '1';
            curveTextImg.src = "./assets/images/click-to-hide.png";
            scrolldownIcon.style.transform = "rotate(180deg)";
            scrolldownIcon.style.transition = "transform 0.5s ease";
        }
    } else if (window.innerWidth <= 768) {
        if (navbarHidden) {
            navbar.style.maxHeight = '300px';
            navbar.style.left = '0';
            scrolldownIcon.style.transform = "rotate(0deg)";
            navbar.style.transition = "all 0.5s";
        } else {
            navbar.style.maxHeight = '0';
            navbar.style.left = '120%';
            scrolldownIcon.style.transform = "rotate(180deg)";
            navbar.style.transition = "all 0.5s";
        }
    }  
    navbarHidden = !navbarHidden;
});

  
});

function addCursorEvents(elements) {
  elements.forEach(element => {
      element.addEventListener('mouseenter', () => {
          cursor.style.opacity = '0';
          cursor2.style.opacity = '0';

          const gifCursor = document.createElement('div');
          gifCursor.classList.add('cursor-gif');
          document.body.appendChild(gifCursor);
          document.addEventListener('mousemove', moveGifCursor);
      });

      element.addEventListener('mouseleave', () => {
          cursor.style.opacity = '1';
          cursor2.style.opacity = '1';

          document.querySelectorAll('.cursor-gif').forEach(gif => gif.remove());
          document.removeEventListener('mousemove', moveGifCursor);
      });
  });
}

const navBtns = document.querySelectorAll('.nav-btn');
const curveTexts = document.querySelectorAll('.curve-text');
const qrCode = document.querySelectorAll('.qr-code-icon');
const viewDetailsBtn = document.querySelectorAll('.view-details-btn');
const contract = document.querySelectorAll('.contract');
const emailLink = document.querySelectorAll('.email-link');
const facebook = document.querySelectorAll('.facebook');
const instagram = document.querySelectorAll('.instagram');
const linkedin = document.querySelectorAll('.linkedin');
const behance = document.querySelectorAll('.behance')
const caseStudyName = document.querySelectorAll('.case-study-name');
addCursorEvents(navBtns);
addCursorEvents(curveTexts);
addCursorEvents(qrCode);
addCursorEvents(viewDetailsBtn);
addCursorEvents(contract);
addCursorEvents(emailLink);
addCursorEvents(facebook);
addCursorEvents(instagram);
addCursorEvents(linkedin);
addCursorEvents(behance);
addCursorEvents(caseStudyName);

function moveGifCursor(e) {
  const gifCursor = document.querySelector('.cursor-gif');
  gifCursor.style.left = e.clientX + 'px';
  gifCursor.style.top = e.clientY + 'px';
}

window.addEventListener('scroll', function() {
  const scrolledHeight = window.scrollY;
  const scale = 1 - (scrolledHeight / 500);
  const limitedScale = Math.max(0, Math.min(scale, 1));
  
  const opacity = 1 - (scrolledHeight / 100);

  const noteScroll = document.querySelector('.note-scroll-text');
  noteScroll.style.transform = `scale(${limitedScale})`;
  noteScroll.style.opacity = opacity;
});

window.addEventListener('scroll', function() {
  const divs = document.querySelectorAll('.note-scroll');
  const scrolledHeight = window.scrollY;
  
  divs.forEach((div) => {
    const distanceFromTop = div.offsetTop - scrolledHeight;
    const scale = 1 - (distanceFromTop / 500);
    const limitedScale = Math.max(0.5, Math.min(scale, 1));
    const opacity = Math.max(0, Math.min(1 - (distanceFromTop / 100), 1));
    const blurValue = Math.min(5 * (1 - limitedScale), 5);
    div.style.transform = `scale(${limitedScale})`;
    div.style.opacity = opacity;
    div.style.blur = blurValue;
  });
});

function addCursorHover(elements) {
  elements.forEach(element => {
      element.addEventListener('mouseenter', () => {
          cursor2.style.opacity = '0';
      });

      element.addEventListener('mouseleave', () => {
          cursor2.style.opacity = '1';
      });
  });
}

const fulltimeContract = document.querySelector('.fulltime-contract');
const freelanceContract = document.querySelector('.freelance-contract');
const contactLineSpan = document.querySelector('.contact-line span');
const contactLine = document.querySelector('.contact-line');

const updateContactLine = (text, fontSize = "16px", textTransform = "none") => {
  const screenWidth = window.innerWidth; // Lấy độ rộng của cửa sổ trình duyệt
  contactLineSpan.style.opacity = "0";
  setTimeout(() => {
      contactLineSpan.textContent = text;
      contactLineSpan.style.opacity = "1";
      if (screenWidth >= 1920) { // Kiểm tra nếu độ rộng màn hình lớn hơn hoặc bằng 1920px
          fontSize = "24px"; // Cập nhật fontSize thành 24px
      } else if (screenWidth <= 1024) {
        fontSize = "18px";
      }
      contactLineSpan.style.fontSize = fontSize;
      contactLineSpan.style.textTransform = textTransform;
  }, 300); 
};

const resetContactLineStyle = () => {
  contactLineSpan.style.opacity = "0";
  setTimeout(() => {
      contactLineSpan.textContent = "Let's work together!";
      contactLineSpan.style.opacity = "1";
      contactLineSpan.style.fontSize = "24px";
      contactLineSpan.style.textTransform = "uppercase";
  }, 300); 
};

fulltimeContract.addEventListener('mouseover', () => {
    updateContactLine("I'm currently prioritizing finding a full-time job for the UI/UX Designer position, let's discuss further if you're interested!");
});

fulltimeContract.addEventListener('mouseout', () => {
    resetContactLineStyle();
});

freelanceContract.addEventListener('mouseover', () => {
    updateContactLine("I'm still always available for freelance projects, let's create something magical together!");
});

freelanceContract.addEventListener('mouseout', () => {
    resetContactLineStyle();
});
