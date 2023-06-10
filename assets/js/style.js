$(".slick-slider").slick({
    slidesToShow: 6,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 600,
    responsive: [

        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 600,
                dots: true,
            }
        },
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 4,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 600,
                dots: true,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 600,
                dots: true,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 600,
                dots: true,
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 600,
                dots: true,
            }
        },
    ]
});

$(".slick-slider-2").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 600,
    responsive: [


        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                dots: true,
                autoplaySpeed: 600,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                dots: true,
                autoplaySpeed: 600,
            }
        },
    ]
});
// Get the countdown container element
const countdownContainer = document.getElementById("countdown-container");

// Set the target date and time (adjust it according to your needs)
const targetDate = new Date("2023-06-20T23:59:59").getTime();

// Function to initialize the countdown
function startCountdown() {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = targetDate - currentDate;

    // Calculate and update the days, hours, minutes, and seconds
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Calculate the days, hours, minutes, and seconds remaining
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    // Update the HTML elements with the calculated values
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    // TODO: Implement the countdown logic to update the timer every second
}

// ...

// Update the countdown timer every second
setInterval(startCountdown, 1000);

// ...