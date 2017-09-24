var beautifulNewTab = (function beautifulNewTab() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var today = new Date();
    var month = monthNames[today.getMonth()];


    var date = today.getDate() +' '+ month +' '+ today.getFullYear();
    var dateElement = document.querySelector('.date');
    dateElement.innerHTML= date;

    var timeElement = document.querySelector('.time');

    // timeElement.innerHTML = getCurrentTime();
    //
    // setInterval(function() {
    //     timeElement.innerHTML = getCurrentTime();
    // },1000);


    function getCurrentTime() {
        var dateObj = new Date();
        var time = dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();

        return time;
    }


    //fetch quote
    fetch('https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en').then(function(response) {
        return response.json();
    })
    .then(function(resp){
        var quoteElm = document.querySelector('.quote');
        quoteElm.innerHTML = "<p>"+resp.quoteText+"</p>";
    })
})();
