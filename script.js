document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SCREEN CHANGE
    // =========================

    function showScreen(screenId) {

        const screens = document.querySelectorAll(".screen");

        screens.forEach(function (screen) {
            screen.classList.remove("active");
        });

        const nextScreen = document.getElementById(screenId);

        if (nextScreen) {
            nextScreen.classList.add("active");
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }


    // =========================
    // START MISSION
    // =========================

    const startButton = document.getElementById("startButton");

    if (startButton) {

        startButton.addEventListener("click", function () {
            showScreen("screen2");
        });

    }


    // =========================
    // CORRECT ANSWERS
    // =========================

    const correctButtons = document.querySelectorAll(".correct");

    correctButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const nextScreen =
                this.getAttribute("data-next");

            if (nextScreen) {
                showScreen(nextScreen);
            }

        });

    });


    // =========================
    // WRONG ANSWERS
    // =========================

    const wrongButtons = document.querySelectorAll(".wrong");

    wrongButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const message =
                this.getAttribute("data-message");

            const currentScreen =
                this.closest(".screen");

            if (!currentScreen) {
                return;
            }

            const feedback =
                currentScreen.querySelector(".feedback");

            if (feedback) {

                feedback.textContent = message;

                feedback.classList.add("show");

                setTimeout(function () {

                    feedback.classList.remove("show");

                }, 2500);

            }

        });

    });


    // =========================
    // OPEN BIRTHDAY
    // =========================

    const birthdayButton =
        document.getElementById("birthdayButton");

    if (birthdayButton) {

        birthdayButton.addEventListener("click", function () {

            showScreen("screen8");

        });

    }


    // =========================
    // OPEN MEMORIES
    // =========================

    const memoriesButton =
        document.getElementById("memoriesButton");

    if (memoriesButton) {

        memoriesButton.addEventListener("click", function () {

            showScreen("screen9");

        });

    }


    // =========================
    // OPEN MESSAGE
    // =========================

    const messageButton =
        document.getElementById("messageButton");

    if (messageButton) {

        messageButton.addEventListener("click", function () {

            showScreen("screen10");

        });

    }


    // =========================
    // OPEN CAKE
    // =========================

    const cakeButton =
        document.getElementById("cakeButton");

    if (cakeButton) {

        cakeButton.addEventListener("click", function () {

            startCake();

        });

    }


    // =========================
    // CAKE ANIMATION
    // =========================

    function startCake() {

        showScreen("screen11");

        const cake =
            document.getElementById("cake");

        const message =
            document.getElementById("cakeMessage");

        const blowButton =
            document.getElementById("blowButton");

        const flame =
            document.getElementById("flame");

        const fireworks =
            document.getElementById("fireworks");

        const finalBirthday =
            document.getElementById("finalBirthday");

        const finalName =
            document.getElementById("finalName");


        // Reset everything

        cake.classList.add("hidden");

        blowButton.classList.add("hidden");

        fireworks.classList.add("hidden");

        finalBirthday.classList.add("hidden");

        finalName.classList.add("hidden");

        flame.style.display = "block";

        message.style.display = "block";

        message.textContent =
            "A little birthday magic is coming... ✨";


        // Cake appears

        setTimeout(function () {

            cake.classList.remove("hidden");

            message.textContent =
                "Your birthday cake is ready... 🎂";

        }, 1800);


        // Blow button appears

        setTimeout(function () {

            message.textContent =
                "Make a wish... 🕯️";

            blowButton.classList.remove("hidden");

        }, 3800);

    }


    // =========================
    // BLOW CANDLE
    // =========================

    const blowButton =
        document.getElementById("blowButton");

    if (blowButton) {

        blowButton.addEventListener("click", function () {

            blowCandle();

        });

    }


    function blowCandle() {

        const flame =
            document.getElementById("flame");

        const blowButton =
            document.getElementById("blowButton");

        const message =
            document.getElementById("cakeMessage");

        const fireworks =
            document.getElementById("fireworks");

        const finalBirthday =
            document.getElementById("finalBirthday");

        const finalName =
            document.getElementById("finalName");


        // Candle off

        flame.style.display = "none";

        blowButton.classList.add("hidden");

        message.textContent =
            "✨ WISH SENT INTO THE UNIVERSE ✨";


        // Fireworks

        setTimeout(function () {

            fireworks.classList.remove("hidden");

            message.textContent =
                "🎆 LET THE CELEBRATION BEGIN! 🎆";

        }, 1000);


        // Final birthday

        setTimeout(function () {

            finalBirthday.classList.remove("hidden");

            finalName.classList.remove("hidden");

            message.style.display = "none";

        }, 2800);

    }

});