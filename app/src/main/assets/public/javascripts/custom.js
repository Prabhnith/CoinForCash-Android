function hideHours() {
    $(".flip-clock-divider.days").hide();
    $("body > div.section-fade-out.pt-5 > div > div > div.col-lg-6.col-sm-12.text-center > div > ul:nth-child(2)").hide();
    $("body > div.section-fade-out.pt-5 > div > div > div.col-lg-6.col-sm-12.text-center > div > ul:nth-child(3)").hide();
    $("body > div.section-fade-out.pt-5 > div > div > div.col-lg-6.col-sm-12.text-center > div > span.flip-clock-divider.hours > span.flip-clock-dot.top").hide();
    $("body > div.section-fade-out.pt-5 > div > div > div.col-lg-6.col-sm-12.text-center > div > span.flip-clock-divider.hours > span.flip-clock-dot.bottom").hide();
}

function fetchWinners() {
    location.reload();
}

