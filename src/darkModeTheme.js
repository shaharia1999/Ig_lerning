import Footer from "./component/Common/Footer/Footer";

function darkModeTheme() {
    const sunIcon = document.querySelector(".sun");
    const moonIcon = document.querySelector(".moon");

    // Theme Vars 
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Icon Toggling
    const iconToggle = () => {
        moonIcon.classList.toggle("hidden");
        sunIcon.classList.toggle("hidden");
    };

    //Initial theme Check
    const themeCheck = () => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add('dark');
            sunIcon.classList.add("hidden");
            moonIcon.classList.add("show");
            <Footer/>
            return;
        }
        else {
            document.documentElement.classList.remove('dark');
            sunIcon.classList.add("show");
            moonIcon.classList.add("hidden");
            <Footer/>
            return;
        }
    };

    // Manual Theme Switch 
    const themeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            iconToggle();
            return;
        }
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconToggle();
    };

    // call theme switch on clicking buttons
    sunIcon.addEventListener("click", () => {
        themeSwitch();
    })
    moonIcon.addEventListener("click", () => {
        themeSwitch();
    })

    //Invoke theme check on initial load
    themeCheck();
}
export default darkModeTheme;