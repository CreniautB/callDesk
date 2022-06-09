
let list1 = 'LES CRIS DES ANIMAUX'
let list2 = 'LES FEMELLES ET LES PETITS DES ANIMAUX'
let list3 = 'SYMBOLES DES ELEMENTS CHIMIQUES'
let list4 = 'CALCUL MENTAL'
let list5 = 'PAYS ET CAPITALES'
let list6 = 'PAYS ET CAPITALES'
let list7 = 'SYNONYMES'
let list8 = 'ANTONYMES'
let list9 = 'CALCUL MENTAL'
let list10 = 'TROUVER LES EQUIVALENTS'



function sendListName(level) {
    if (level ===1) {return list1}
    if (level ===2) {return list2}
    if (level ===3) {return list3}
    if (level ===4) {return list4}
    if (level ===5) {return list5}
    if (level ===6) {return list6}
    if (level ===7) {return list7}
    if (level ===8) {return list8}
    if (level ===9) {return list9}
    if (level ===10) {return list10}

}

export default sendListName