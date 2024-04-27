document.body.style.cursor = 'none';

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
let delaySmallCursor = 0;
let delayLargeCursor = 2;

document.addEventListener("mousemove", function(e) {
    const mouseX = e.clientX - 5;
    const mouseY = e.clientY - 5;

    const mouseX2 = e.clientX - 30;
    const mouseY2 = e.clientY - 30;

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

function updateContactLine(text, fontSize = "16px", textTransform = "none") {
    const contactLineSpan = document.querySelector('.contact-line span');
    const screenWidth = window.innerWidth;
    contactLineSpan.style.opacity = "0";
    setTimeout(() => {
        contactLineSpan.textContent = text;
        contactLineSpan.style.opacity = "1";
        if (screenWidth >= 1920) {
            fontSize = "24px";
        } else if (screenWidth <= 1024) {
            fontSize = "18px";
        }
        contactLineSpan.style.fontSize = fontSize;
        contactLineSpan.style.textTransform = textTransform;
    }, 300);
}

function resetContactLineStyle() {
    const contactLineSpan = document.querySelector('.contact-line span');
    contactLineSpan.style.opacity = "0";
    setTimeout(() => {
        contactLineSpan.textContent = "Let's work together!";
        contactLineSpan.style.opacity = "1";
        contactLineSpan.style.fontSize = "24px";
        contactLineSpan.style.textTransform = "uppercase";
    }, 300);
}

const fulltimeContract = document.querySelector('.fulltime-contract');
const freelanceContract = document.querySelector('.freelance-contract');

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

const elementsToHover = document.querySelectorAll('.nav-btn, .curve-text, .qr-code-icon, .view-details-btn, .contract, .email-link, .facebook, .instagram, .linkedin, .behance, .case-study-name');
addCursorEvents(elementsToHover);
