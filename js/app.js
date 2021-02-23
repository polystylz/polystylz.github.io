let card_OpenHours  = document.getElementById('info-opening-hours');
let card_EntryCost  = document.getElementById('info-entry-cost');
let card_Menu       = document.getElementById('info-menu');
let card_social     = document.getElementById('bottom-info-card');

let card_OpenHours_h1   = document.getElementById('info-opening-hours-h1');
let card_EntryCost_h1   = document.getElementById('info-entry-cost-h1');
let card_Menu_h1        = document.getElementById('info-menu-h1');
let card_social_h1      = document.getElementById('info-social-h1');

let openHours_text  = document.getElementById('opening-hours-text');
let entryCost_text  = document.getElementById('entry-cost-text');
let menu_text       = document.getElementById('menu-text');
let social_text     = document.getElementById('socialText');

card_OpenHours.addEventListener('click', () => {
    infoChange(1);
});
card_EntryCost.addEventListener('click', () => {
    infoChange(2);
});
card_Menu.addEventListener('click', () => {
    infoChange(3);
});
card_social.addEventListener('click', () => {
    infoChange(4);
});

function infoChange(userOption) {
    
    switch(userOption) {
        case 1:
            openHours_text.classList.add('info-card-click-active');
            entryCost_text.classList.remove('info-card-click-active');
            menu_text.classList.remove('info-card-click-active');
            social_text.classList.remove('info-card-click-active');
            console.log("1");
            card_OpenHours_h1.classList.add('info-active');
            card_EntryCost_h1.classList.remove('info-active');
            card_Menu_h1.classList.remove('info-active');
            card_social_h1.classList.remove('info-active');
            break;

        case 2:
            openHours_text.classList.remove('info-card-click-active');
            entryCost_text.classList.add('info-card-click-active');
            menu_text.classList.remove('info-card-click-active');
            social_text.classList.remove('info-card-click-active');
            console.log("2");
            card_OpenHours_h1.classList.remove('info-active');
            card_EntryCost_h1.classList.add('info-active');
            card_Menu_h1.classList.remove('info-active');
            card_social_h1.classList.remove('info-active');
            break;

        case 3:
            openHours_text.classList.remove('info-card-click-active');
            entryCost_text.classList.remove('info-card-click-active');
            menu_text.classList.add('info-card-click-active');
            social_text.classList.remove('info-card-click-active');
            console.log("3");
            card_OpenHours_h1.classList.remove('info-active');
            card_EntryCost_h1.classList.remove('info-active');
            card_Menu_h1.classList.add('info-active');
            card_social_h1.classList.remove('info-active');
            break;

        case 4:
            openHours_text.classList.remove('info-card-click-active');
            entryCost_text.classList.remove('info-card-click-active');
            menu_text.classList.remove('info-card-click-active');
            social_text.classList.add('info-card-click-active');
            console.log("4");
            card_OpenHours_h1.classList.remove('info-active');
            card_EntryCost_h1.classList.remove('info-active');
            card_Menu_h1.classList.remove('info-active');
            card_social_h1.classList.add('info-active');
            break;
            
    }
}