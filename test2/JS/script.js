// SET CURRENT YEAR IN THE FOOTER COPYRIGHT
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// MAKE MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-mobile-nav");
const mainNavBarEl = document.querySelector(".main-nav");

btnNavEl.addEventListener("click", function () {
    mainNavBarEl.classList.toggle("nav-open");
});

// smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach(function (link) {
//     link.addEventListener("click", function (e) {
//         e.preventDefault();
//         const href = link.getAttribute("href");

//         // scroll back to top
//         if (href === "#")
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });

//         // scroll to other links

//         if (href !== "#" && href.startsWith("#")) {
//             const sectionEl = document.querySelectorAll(href);
//             sectionEl.scrollIntoView({ behavior: "smooth" });
//         }
//         // close mobile navigation

//         if (link.classList.contains("main-nav-link")) mainNavBarEl.classList.toggle("nav-open");
//     });
// });

// sticky navigation and header

const headerEl = document.querySelector(".header");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);
        if (ent.isIntersecting === false) {
            // document.querySelector(".main-nav").classList.add("sticky");
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
            // document.querySelector(".main-nav").classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-60px",
    }
);
obs.observe(headerEl);
