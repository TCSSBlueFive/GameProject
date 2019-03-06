var AM = new AssetManager();

function EnemyDataBase(game, spritesheet) {
    this.game = game;
    this.hpbarwidth = 200;
    this.hpbarheight = 25;
    this.attacksprite = AM.getAsset("./img/attack.png");

    this.monsters =
    [{
        health: 100,
        name: 'slime',
        x: game.width * .66667, //1000
        y: game.height * .5,  //400
        hpx: game.width * .66667 - 40,
        hpy: game.height * .567 - 40,
        attacks: {
            type: 'damage',
            value: 10
        },

        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                                                                    //health of monster needs to match
                            AM.getAsset("./img/GreenHealthBar.png"), 100, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5, 1,0),
        attackAnimation: new Animation(spritesheet, 256, 256, 1, .075, 18, false, 0.5, 2,0),
        damagedAnimation: new Animation(spritesheet, 256, 256, 1, .3, 3, false, .5, 3,0),
        deathAnimation: new Animation(spritesheet, 253, 256, 1, .075, 3, true, .5, 5 ,0),
    },                 
    {
        health: 120,
        x: game.width / 2, //1000
        y: game.height / 8.5,  //340
        hpx: 1000,
        hpy: 320,
        name: 'succubus',
        attacks: {
            type: 'damage',
            value: 0
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 120, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/succubus_basic.png"), 200, 190, 1, 0.10, 7, true, 1, 1,0),
        attackAnimation: new Animation(AM.getAsset("./img/succubus_basic.png"), 200, 190, 1, 0.15, 6, false, 1, 2,0),
        damagedAnimation: new Animation(AM.getAsset("./img/succubus_basic.png"), 200, 190, 1, 0.15, 4, false, 1, 0,0),
        deathAnimation: new Animation(AM.getAsset("./img/succubus_basic.png"), 200, 190, 1, 0.15, 7, false, 1, 0,0)
    },
    {
        health: 80,
        name: 'chicken',
        x: game.width / 2, //1000
        y: game.height / 7,  //420
        hpx: 1000,
        hpy: 400,
        attacks: {
            type: 'damage',
            value: 10
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 80, this.hpbarwidth, this.hpbarheight),
        
        animation: new Animation(AM.getAsset("./img/chicken.png"), 64, 64, 1, 0.05, 9, true, 1.5, 4, 0),
        attackAnimation: new Animation(AM.getAsset("./img/chicken.png"), 64, 64, 1, 0.1, 9, false, 1.5, 2, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/chicken.png"), 64, 64, 1, 0.05, 4, false, 1.5, 5, 0),
        deathAnimation: new Animation(AM.getAsset("./img/chicken.png"), 64, 64, 1, 0.05, 3, true, 1.5, 5, 6)
    },
    {
        health: 200,
        name: 'doomcluck',
        x: game.width / 2, //1000
        y: game.height / 8.5,  //340
        hpx: 980,
        hpy: 370,
        attacks: {
            type: 'damage',
            value: 20
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/doomcluck.png"), 64, 64, 1, 0.05, 9, true, 2.5, 4, 0),
        attackAnimation: new Animation(AM.getAsset("./img/doomcluck.png"), 64, 64, 1, 0.1, 9, false, 2.5, 1, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/doomcluck.png"), 64, 64, 1, 0.05, 4, false, 2.5, 5, 0),
        deathAnimation: new Animation(AM.getAsset("./img/doomcluck.png"), 64, 64, 1, 0.05, 3, true, 2.5, 5, 6)
    },
    {
        health: 150,
        name: 'earth elemental',
        x: game.width / 2, //1000
        y: game.height / 8.5,  //340
        hpx: 950,
        hpy: 340,
        attacks: {
            type: 'damage',
            value: 30
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 150, this.hpbarwidth, this.hpbarheight),
        
        animation: new Animation(AM.getAsset("./img/earthelemental.png"), 111.1111111111111, 111.1666666666667, 1, 0.1, 9, true, 1, 1, 0), // sheet kinda weird
        attackAnimation: new Animation(AM.getAsset("./img/earthelemental.png"), 111.1111111111111, 111.1666666666667, 1, 0.1, 6, false, 1, 2, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/earthelemental.png"), 111.1111111111111, 111.1666666666667, 1, 0.1, 6, false, 1, 3, 0),
        deathAnimation: new Animation(AM.getAsset("./img/earthelemental.png"), 111.1111111111111, 111.1666666666667, 1, 0.1, 3, true, 1, 5, 6)
    },
    {
        health: 180,
        name: 'taurus',
        x: game.width / 2, //1000
        y: game.height / 8.7,  //340
        hpx: 1000,
        hpy: 300,
        attacks: {
            type: 'damage',
            value: 50
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 180, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/taurus.png"), 128, 128, 1, 0.15, 3, true, 2, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/taurus.png"), 128, 128, 1, 0.15, 6, false, 2, 1, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/taurus.png"), 128, 128, 1, 0.15, 4, false, 2, 4, 0),
        deathAnimation: new Animation(AM.getAsset("./img/taurus.png"), 128, 128, 1, 0.15, 3, true, 2, 5, 6)
    },
    {
        health: 140,
        name: 'wraith',
        x: game.width / 2, //1000
        y: game.height / 8.5,  //340
        hpx: 1000,
        hpy: 300,
        attacks: {
            type: 'damage',
            value: 80
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 170, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/wraith.png"), 64, 64, 1, 0.15, 3, true, 2.5, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/wraith.png"), 64, 64, 1, 0.15, 6, false, 2.5, 2, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/wraith.png"), 64, 64, 1, 0.15, 4, false, 2.5, 4, 0),
        deathAnimation: new Animation(AM.getAsset("./img/wraith.png"), 64, 64, 1, 0.15, 3, true, 2.5, 5, 6)
    },
    {
        health: 200,
        name: 'gargoyle',
        x: game.width / 2, //1000
        y: game.height / 10.75,  //340
        hpx: 970,
        hpy: 250,
        attacks: {
            type: 'damage',
            value: 90
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/gargoyle.png"), 128, 128, 1, 0.15, 4, true, 2, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/gargoyle.png"), 128, 128, 1, 0.15, 6, false, 2, 1, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/gargoyle.png"), 128, 128, 1, 0.15, 4, false, 2, 4, 0),
        deathAnimation: new Animation(AM.getAsset("./img/gargoyle.png"), 128, 128, 1, 0.15, 3, true, 2, 5, 6)
    }],

    this.bosses = [
        {
        health: 200,
        name: 'Gaea',
        x: game.width * .57, //1000
        y: game.height * .25,  //400
        hpx: game.width * .75,
        hpy: game.height * .3,
        attacks: {
            type: 'damage',
            value: 90
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/enemy/boss/ygg_Idle_00-Sheet.png"), 802 , 653, 1, 0.05, 61, true, .75, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/enemy/boss/ygg_Attack A_00-Sheet.png"), 802 ,653, 1, 0.05, 56, false, .75, 0, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/enemy/boss/ygg_Damage_00-Sheet.png"), 802 , 653, 1, 0.05, 31,false, .75, 0, 0),
        deathAnimation: new Animation(AM.getAsset("./img/enemy/boss/boss_sprite_idle.png"), 589 , 600, 1, 0.05, 31, true, .57, 0, 0),
    }
    ],
    this.elites = [
        {
        health: 200,
        name: 'Cultist Mage',
        x: game.width * .57, //1000
        y: game.height * .25,  //400
        hpx: game.width * .75,
        hpy: game.height * .3,
        attacks: {
            type: 'damage',
            value: 90
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/enemy/elite/cultist_mage/CultistMage_Idle_00-Sheet.png"), 581 , 374, 1, 0.035, 61, true, .75, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/enemy/elite/cultist_mage/CultistMage_Attack_00-Sheet.png"),581 , 374, 1, 0.035, 31, false, .75, 0, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/enemy/elite/cultist_mage/CultistMage_Damage_00-Sheet.png"), 581 , 374, 1, 0.035, 31, false, .75, 0, 0),
        deathAnimation: new Animation(AM.getAsset("./img/enemy/elite/cultist_mage/CultistMage_Idle_00-Sheet.png"), 581 , 374, 1, 0.035, 61, false, .75, 0, 0),
    },  {
        health: 200,
        name: 'Witch Baba',
        x: game.width * .7, //1000
        y: game.height * .4,  //400
        hpx: game.width * .75,
        hpy: game.height * .3,
        attacks: {
            type: 'damage',
            value: 20
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/enemy/elite/witch_baba/Baba_Idle_00-Sheet.png"), 457, 417, 1, 0.035, 61, true, 1, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/enemy/elite/witch_baba/Baba_Attack_00-Sheet.png"), 457, 417, 1, 0.035, 31, false, 1, 0, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/enemy/elite/witch_baba/Baba_Damage_00-Sheet.png"),  457, 417, 1, 0.035, 21, false,  1, 0, 0),
        deathAnimation: new Animation(AM.getAsset("./img/enemy/elite/witch_baba/Baba_Idle_00-Sheet.png"),  457, 417, 1, 0.035, 61, false, 1, 0, 0),
    } ,  {
        health: 200,
        name: 'Osiris',
        x: game.width * .67, //1000
        y: game.height * .3,  //400
        hpx: game.width * .75,
        hpy: game.height * .3,
        attacks: {
            type: 'damage',
            value: 20
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/enemy/elite/osiris_priest/Osiris_Idle_00-Sheet.png"), 705, 590, 1, 0.035, 61, true, .65, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/enemy/elite/osiris_priest/Osiris_Attack D_00-Sheet.png"), 705, 590, 1, 0.035, 71, false, .65, 0, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/enemy/elite/osiris_priest/Osiris_Damage_00-Sheet.png"),  705, 590, 1, 0.035, 31, false, .65, 0, 0),
        deathAnimation: new Animation(AM.getAsset("./img/enemy/elite/osiris_priest/Osiris_Idle_00-Sheet.png"), 705, 590, 1, 0.035, 61, false, .65, 0, 0)
    } ,  {
        health: 200,
        name: 'Red Mage',
        x: game.width * .67, //1000
        y: game.height * .3,  //400
        hpx: game.width * .75,
        hpy: game.height * .3,
        attacks: {
            type: 'damage',
            value: 20
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/enemy/elite/red_mage/Jiangshi_Idle_00-Sheet.png"), 380, 327, 1, 0.035, 61, true, 1.2, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/enemy/elite/red_mage/Jiangshi_Skill_00-Sheet.png"),380, 327, 1, 0.035, 36, false, 1.2, 0, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/enemy/elite/red_mage/Jiangshi_Damage_00-Sheet.png"), 380, 327, 1, 0.035, 16, false, 1.2, 0, 0),
        deathAnimation: new Animation(AM.getAsset("./img/enemy/elite/red_mage/Jiangshi_Idle_00-Sheet.png"), 380, 327, 1, 0.035, 61, false, 1.2, 0, 0),
    },  {
        health: 200,
        name: 'Living Hoard Midas',
        x: game.width * .67, //1000
        y: game.height * .2,  //400
        hpx: game.width * .75,
        hpy: game.height * .3,
        attacks: {
            type: 'damage',
            value: 20
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/enemy/elite/living_hoard_midas/Midas_Idle_00-Sheet.png"), 483, 484, 1, 0.035, 61, true, 1, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/enemy/elite/living_hoard_midas/Midas_Attack C_00-Sheet.png"), 483, 484, 1, 0.035, 36, false, 1, 0, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/enemy/elite/living_hoard_midas/Midas_Damage_00-Sheet.png"), 483, 484, 1, 0.035, 31, false, 1, 0, 0),
        deathAnimation: new Animation(AM.getAsset("./img/enemy/elite/living_hoard_midas/Midas_Idle_00-Sheet.png"), 483, 484, 1, 0.035, 61, false, 1, 0, 0),
    } ,  {
        health: 200,
        name: 'Mythical Knight',
        x: game.width * .6, //1000
        y: game.height * .2,  //400
        hpx: game.width * .75,
        hpy: game.height * .3,
        attacks: {
            type: 'damage',
            value: 20
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, this.hpbarwidth, this.hpbarheight),

        animation: new Animation(AM.getAsset("./img/enemy/elite/M_Knight/MknightGoldnharl_Idle_00-Sheet.png"), 586, 598, 1, 0.035, 61, true, 1, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/enemy/elite/M_Knight/MknightGoldnharl_Attack B_00-Sheet.png"),586, 598, 1, 0.035, 52, false, 1, 0, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/enemy/elite/M_Knight/MknightGoldnharl_Damage_00-Sheet.png"), 646, 598, 1, 0.035, 31, false, 1, 0, 0),
        deathAnimation: new Animation(AM.getAsset("./img/enemy/elite/M_Knight/MknightGoldnharl_Idle_00-Sheet.png"), 586, 598, 1, 0.035, 61, false, 1, 0, 0),
    }  
    ]
};

//function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale, yIndex, xIndexOffset) {


