$(function () {
    //write your code here

    const btnRace = $('.race'),
        btnRestart = $('.startOver'),
        carOne = $('#carOne'),
        carTwo = $('#carTwo'),
        screenWidth = $(window).width() - carOne.width() + 25, //-25px on start position
        overlay = $('.overlay');

    let isRacingDone = false,
        place = 'first';

    const raceIsDone = () => {
        if (!isRacingDone) {
            isRacingDone = true;
            $('.racingArea').append(
                '<img src="./images/finish.gif" alt="" class="flag" />'
            );
        } else {
            place = 'second';
            btnRestart.removeAttr('disabled');
            isRacingDone = false;
        }
    };

    btnRace.on('click', function () {
        const carOneTime = Math.floor(Math.random() * 4000) + 1000,
            carTwoTime = Math.floor(Math.random() * 4000) + 1000;

        let counter = 4;

        $('#counter').text(counter);
        const id = setInterval(function () {
            overlay.css({
                display: 'block',
                height: `${$('.racingTrack').height()}`,
            });
            counter--;
            overlay.html(`<span>${counter}</span>`);

            if (counter === 0) {
                clearInterval(id);
                overlay.css('display', 'none');
                overlay.html('');

                carOne.animate(
                    {
                        left: `+=${screenWidth}`,
                    },
                    carOneTime,
                    function () {
                        raceIsDone();
                        //first car place: ${place}
                    }
                );

                carTwo.animate(
                    {
                        left: `+=${screenWidth}`,
                    },
                    carTwoTime,
                    function () {
                        raceIsDone();
                        //second car place: ${place}
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
    });
});
