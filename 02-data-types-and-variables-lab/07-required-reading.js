function requiredReading(allPages, pagesPerGour, days) {
    let totalHours = allPages / pagesPerGour;
    let hoursPerDay = totalHours / days;

    console.log(hoursPerDay);
}

requiredReading(212, 20 , 2);
// requiredReading(432, 15, 4);