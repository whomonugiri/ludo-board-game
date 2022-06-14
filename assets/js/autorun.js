var intervalId = "";
function start_autorun() {
    intervalId = window.setInterval(function () {
        if (rank_count > 2) {
            clearInterval(intervalId);
            return 0;
        }
        if (bot[current_turn.group.toLocaleLowerCase()]) {
            autorun();

        } else {
            clearInterval(intervalId);

        }
    }, hold_time);
}




function autorun() {
    // startTimer();
    if (isPlayerIsMoving) {
        return 0;
    }


    $("#dice").trigger("click");
    hold(hold_time).then(() => {

        for (i = 0; i < 4; i++) {
            if (current_turn.players[i].current_position + dice_value <= current_turn.players[i].path.length) {
                $(current_turn.players[i].controller).trigger("click");
                break;

            }


        }





    });


}


