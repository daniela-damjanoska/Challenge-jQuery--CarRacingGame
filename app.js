$(function () {
    const btnRace = $('.race'),
        btnRestart = $('.startOver'),
        carOne = $('#carOne'),
        carTwo = $('#carTwo'),
        screenWidth = $(window).width() - carOne.width() + 25, //-25px on start position
        carOneLS = localStorage.getItem('carOne'),
        carTwoLS = localStorage.getItem('carTwo'),
        carOneTimeLS = localStorage.getItem('carOneTime'),
        carTwoTimeLS = localStorage.getItem('carTwoTime');

    let isRacingDone = false,
        place = 'first';

    const populateResultTable = (body, carTime) => {
        $(body).prepend(
            `<tr>
                <td>Finished in: <span class='carTwoColor font-weight-bold'>${place}</span> place with a time of <span class='carTwoColor font-weight-bold'>${carTime}</span> milliseconds!</td>
            </tr>`
        );
    };

    const raceIsDone = () => {
        if (!isRacingDone) {
            isRacingDone = true;
            const racingArea = $('.racingArea');

            racingArea.prepend('<div class="overlay"></div>');
            racingArea.append(
                '<img src="./images/finish.gif" alt="" class="flag" />'
            );
        } else {
            place = 'second';
            btnRestart.removeAttr('disabled');
            isRacingDone = false;
        }
    };

    if (carOneLS && carTwoLS && carOneTimeLS && carTwoTimeLS) {
        $('.storageResults').append(
            `<div class="col-12 pl-5">
                <h3 class="mb-0">
                    Results from the previous time you played this game:
                </h3>
            </div>
            <div class="col-12 pl-5">
                <table class="table">
                    <tbody>
                        <tr>
                            <td><span class='carOneColor font-weight-bold'>Car 1</span> finished in <span class='carOneColor font-weight-bold'>${carOneLS}</span> place, with a time of <span class='carOneColor font-weight-bold'>${carOneTimeLS}</span> milliseconds!</td>
                        </tr>
                        <tr>
                            <td><span class='carTwoColor font-weight-bold'>Car 2</span> finished in <span class='carTwoColor font-weight-bold'>${carTwoLS}</span> place, with a time of <span class='carTwoColor font-weight-bold'>${carTwoTimeLS}</span> milliseconds!</td>
                        </tr>
                    </tbody>
                </table>
            </div>`
        );
    }

    btnRace.on('click', function () {
        const carOneTime = Math.floor(Math.random() * 4000) + 1000,
            carTwoTime = Math.floor(Math.random() * 4000) + 1000;

        localStorage.setItem('carOneTime', carOneTime);
        localStorage.setItem('carTwoTime', carTwoTime);

        $('.racingArea').prepend('<div class="overlay"></div>');

        const overlay = $('.overlay');
        let counter = 4;

        $('#counter').text(counter);

        const id = setInterval(function () {
            counter--;
            overlay.html(`<span class='counter'>${counter}</span>`);

            if (counter === 0) {
                clearInterval(id);
                overlay.remove();

                carOne.animate(
                    { left: `+=${screenWidth}` },
                    carOneTime,
                    function () {
                        raceIsDone();
                        populateResultTable('.tbodyOne', carOneTime);
                        localStorage.setItem('carOne', place);
                    }
                );

                carTwo.animate(
                    { left: `+=${screenWidth}` },
                    carTwoTime,
                    function () {
                        raceIsDone();
                        populateResultTable('.tbodyTwo', carTwoTime);
                        localStorage.setItem('carTwo', place);
                    }
                );
            }
        }, 1000);

        $(this).attr('disabled', true);
    });

    btnRestart.on('click', function () {
        carOne.css('left', '-25px');
        carTwo.css('left', '-25px');
        $('.flag').fadeOut();
        btnRace.removeAttr('disabled');
        $(this).attr('disabled', true);
        $('.overlay').remove();
        place = 'first';
    });
});
