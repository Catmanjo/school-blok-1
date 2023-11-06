let readlineSync = require('readline-sync');

game = true;
Player_health = 21;
Slime_health = 9000;

function player() {
    console.log("[Game]: A slime appears");

    while (game == true) {
        console.log("[HP]: " + Player_health);
        let B = readlineSync.question("Fight or Flee?");

        switch (B) {
            case "Flee":
                console.log("[Game]: You run away");
                game = false;
                break;
            case "Fight":
                damagde_to_player = Math.floor(Math.random() * 4);
                damagde_to_slime = Math.floor(Math.random() * 1000);
                Player_health = Player_health - damagde_to_player;
                Slime_health = Slime_health - damagde_to_slime;
                console.log("[Game]: You do " + damagde_to_slime + " Damage");
                console.log("[Game]: The slime does " + damagde_to_player + " Damage");
                console.log("[Slime HP]:" + Slime_health);
                break;
        }

        if (Player_health <= 0) {
            console.log("[Game]: You are dead");
            game = false;
        }

        if (Slime_health <= 0) {
            console.log("[Game]: The slime is dead");
            game = false;
        }
    }
}

player();
