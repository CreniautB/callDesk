let rep1 = [
    ["ricane"],
    ["rugit"],
    ["meugle"],
    ["bavarde"],
    ["hennit"],
    ["caracoule"],
    ["zinzinule"],
    ["caquette"],
    ["criaille"],
    ["grommelle"],
    ["glapit"],
    ["piaule"],
    ["raille"],
    ["siffle"],
    ["coasse"],
    ["barète"],
    ["chante"],
    ["truffle"],
    ["grognonne"],
    ["stridule"]
  ]

  let rep2 = [
    ["truie"],
    ["marcassin"],
    ["chèvre"],
    ["tigresse"],
    ["ânesse"],
    ["guenon"],
    ["biche"],
    ["laie"],
    ["faon"],
    ["jument"],
    ["merlette"],
    ["louve"],
    ["hase"],
    ["dinde"],
    ["cane"],
    ["brebis"],
    ["chamelle"],
    ["chevrette"],
    ["oie"],
    ["poule"]
  ]

  let rep3 = [
    ["Sn"],
    ["W"],
    ["Pt"],
    ["K"],
    ["N"],
    ["I"],
    ["Au"],
    ["Hg"],
    ["Na"],
    ["C"],
    ["H"],
    ["Fe"],
    ["F"],
    ["Cr"],
    ["As"],
    ["He"],
    ["Br"],
    ["Ca"],
    ["Cu"],
    ["Cl"]
  ]

  let rep4 = [
    [11],
    [14],
    [35],
    [59],
    [18],
    [29],
    [46],
    [70],
    [20],
    [53],
    [62],
    [58],
    [52],
    [49],
    [43],
    [69],
    [15],
    [55],
    [13],
    [63]
  ]

  let rep5 = [
    ["Porto-Novo"],
    ["Copenhague"],
    ["Erevan"],
    ["San José"],
    ["Tirana"],
    ["Moroni"],
    ["Vienne"],
    ["Praia"],
    ["Roseau"],
    ["Manama"],
    ["Ottawa"],
    ["Bujumbura"],
    ["Sofia"],
    ["Sucre"],
    ["Canberra"],
    ["Yaoundé"],
    ["Nassau"],
    ["Dacca"],
    ["Gaborone"],
    ["Bridgetown"]
  ]

  let rep6 = [
    ["Windhoek"],
    ["Nairobi"],
    ["Tbilissi"],
    ["Jakarta"],
    ["Helsinki"],
    ["Port-au-Prince"],
    ["Kingston"],
    ["Banjul"],
    ["Harare"],
    ["Vilnius"],
    ["Berne"],
    ["Stockholm"],
    ["Victoria"],
    ["Managua"],
    ["Port Louis"],
    ["Nicosie"],
    ["Riga"],
    ["Malé"],
    ["Doha"],
    ["Nouakchott"]
  ]

  let rep7 =  [
    ["Considérable"],
    ["Choix"],
    ["Magnifier"],
    ["Offenser"],
    ["Orgueilleux"],
    ["Périphrase"],
    ["Méfiant"],
    ["Erreur"],
    ["Suprématie"],
    ["Supériorité"],
    ["Détérioration"],
    ["Gaspillage"],
    ["Moquerie"],
    ["Condamnation"],
    ["Enumération"],
    ["Réprimander"],
    ["Crédibiliser"],
    ["Négligence"],
    ["Répétition"],
    ["résistance"]
  ]

  let rep8 = [
    ["brièveté"],
    ["assurance"],
    ["complimenter"],
    ["timoré"],
    ["mesurable"],
    ["volubile"],
    ["franc"],
    ["lisse"],
    ["synonyme"],
    ["constant"],
    ["dur"],
    ["aparté"],
    ["déclin"],
    ["propice"],
    ["lent"],
    ["éternel"],
    ["courageux"],
    ["avare"],
    ["sévérité"],
    ["alléger"]
  ]

  let rep9 = [
    [37],
    [41],
    [26],
    [48],
    [66],
    [51],
    [23],
    [60],
    [68],
    [40],
    [42],
    [28],
    [50],
    [64],
    [30],
    [24],
    [34],
    [12],
    [44],
    [19]
  ]

  let rep10 = [
    ["500 g"],
    ["1 l"],
    ["1800 sec"],
    ["1p"],
    ["1000 g"],
    ["50 ml"],
    ["3600 sec"],
    ["100 ml"],
    ["453 g"],
    ["1000 m "],
    ["10 mm"],
    ["1000 cl"],
    ["1000 mg"],
    ["100 ml"],
    ["10000 m 2"],
    ["10000 kg"],
    ["1000 l"],
    ["100 kg"],
    ["1 cl"],
    ["100 m 2"]
  ]

  function sendRep(level) {
    if (level ===1) {return rep1}
    if (level ===2) {return rep2}
    if (level ===3) {return rep3}
    if (level ===4) {return rep4}
    if (level ===5) {return rep5}
    if (level ===6) {return rep6}
    if (level ===7) {return rep7}
    if (level ===8) {return rep8}
    if (level ===9) {return rep9}
    if (level ===10) {return rep10}

}

export default sendRep