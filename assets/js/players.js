var watchsec = 1000;

var red_player_1 = {
    color: "red",
    player: `<div class="player bg-red movered1" id="red-player-1"></div>`,
    path: [19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 31, 32, 33, 34, 35, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".red-home",


    controller: "#movered1",
}

var red_player_2 = {
    color: "red",

    player: `<div class="player bg-red movered2" id="red-player-2"></div>`,

    path: [19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 31, 32, 33, 34, 35, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".red-home",
    controller: "#movered2",
}

var red_player_3 = {
    color: "red",

    player: `<div class="player bg-red movered3" id="red-player-3"></div>`,
    path: [19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 31, 32, 33, 34, 35, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".red-home",
    controller: "#movered3",
}

var red_player_4 = {
    color: "red",

    player: `<div class="player bg-red movered4" id="red-player-4"></div>`,
    path: [19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 31, 32, 33, 34, 35, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".red-home",
    controller: "#movered4",
}


var green_player_1 = {
    color: "green",

    player: `<div class="player bg-green movegreen1" id="green-player-1"></div>`,
    path: [5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 4, 7, 10, 13, 16, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".green-home",
    controller: "#movegreen1",
}
var green_player_2 = {
    color: "green",

    player: `<div class="player bg-green movegreen2" id="green-player-2"></div>`,
    path: [5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 4, 7, 10, 13, 16, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".green-home",
    controller: "#movegreen2",
}

var green_player_3 = {
    color: "green",

    player: `<div class="player bg-green movegreen3" id="green-player-3"></div>`,
    path: [5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 4, 7, 10, 13, 16, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".green-home",
    controller: "#movegreen3",
}

var green_player_4 = {
    color: "green",

    player: `<div class="player bg-green movegreen4" id="green-player-4"></div>`,
    path: [5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 4, 7, 10, 13, 16, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".green-home",
    controller: "#movegreen4",
}


var blue_player_1 = {
    color: "blue",

    player: `<div class="player bg-blue moveblue1" id="blue-player-1"></div>`,
    path: [66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 67, 64, 61, 58, 55, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".blue-home",
    controller: "#moveblue1",
}
var blue_player_2 = {
    color: "blue",

    player: `<div class="player bg-blue moveblue2" id="blue-player-2"></div>`,
    path: [66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 67, 64, 61, 58, 55, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".blue-home",
    controller: "#moveblue2",
}

var blue_player_3 = {
    color: "blue",

    player: `<div class="player bg-blue moveblue3" id="blue-player-3"></div>`,
    path: [66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 67, 64, 61, 58, 55, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".blue-home",
    controller: "#moveblue3",
}

var blue_player_4 = {
    color: "blue",

    player: `<div class="player bg-blue moveblue4" id="blue-player-4"></div>`,
    path: [66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 67, 64, 61, 58, 55, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".blue-home",
    controller: "#moveblue4",
}

var yellow_player_1 = {
    color: "yellow",

    player: `<div class="player bg-yellow moveyellow1" id="yellow-player-1"></div>`,
    path: [52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 40, 39, 38, 37, 36, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".yellow-home",
    controller: "#moveyellow1",
}
var yellow_player_2 = {
    color: "yellow",

    player: `<div class="player bg-yellow moveyellow2" id="yellow-player-2"></div>`,
    path: [52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 40, 39, 38, 37, 36, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".yellow-home",
    controller: "#moveyellow2",
}
var yellow_player_3 = {
    color: "yellow",

    player: `<div class="player bg-yellow moveyellow3" id="yellow-player-3"></div>`,
    path: [52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 40, 39, 38, 37, 36, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".yellow-home",
    controller: "#moveyellow3",
}



var yellow_player_4 = {
    color: "yellow",

    player: `<div class="player bg-yellow moveyellow4" id="yellow-player-4"></div>`,
    path: [52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 40, 39, 38, 37, 36, 'win'],
    current_position: 0,
    status: 'home',
    current_step: null,
    resetplayer: function() {
        this.current_position = 0;
        this.status = "home";
        this.previous_step = null;
    },
    previous_step: null,
    home: ".yellow-home",
    controller: "#moveyellow4",
}


var player_list = {
    "red-player-1": red_player_1,
    "red-player-2": red_player_2,
    "red-player-3": red_player_3,
    "red-player-4": red_player_4,
    "green-player-1": green_player_1,
    "green-player-2": green_player_2,
    "green-player-3": green_player_3,
    "green-player-4": green_player_4,
    "yellow-player-1": yellow_player_1,
    "yellow-player-2": yellow_player_2,
    "yellow-player-3": yellow_player_3,
    "yellow-player-4": yellow_player_4,
    "blue-player-1": blue_player_1,
    "blue-player-2": blue_player_2,
    "blue-player-3": blue_player_3,
    "blue-player-4": blue_player_4,

}