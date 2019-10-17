var stageData = '{ "stages" : [' +
  
  // Below is Beginning Stages    
  '{ "location":"Prologue", "name":"Freeform Training", "targets":["Kalvin Ritter"], "weapons":["gun", "bare hands", "drowning", "accident", "environment", "crowbar", "hammer", "wrench", "explosives"], "disguises":["Training Suit", "Bodyguard", "Mechanic", "Terry Norfolk", "Yacht Crew", "Yacht Security"], "localWildcards":[]},' +
  '{ "location":"Prologue", "name":"The Final Test", "targets":["Jasper Knight"], "weapons":["gun", "bare hands", "drowning", "accident", "environment", "wrench", "brick", "bust", "lead pipe", "crowbar", "hammer"], "disguises":["Training Suit","Airfield Security","KGB Officer","Hangar Mechanic","Soviet Soldier"], "localWildcards":[]}, ' +
 '{ "location":"Hawkes Bay", "name":"Nightcall", "targets":["Alma Reynard"], "weapons":["bare hands", "cleaver", "katana", "knife", "electrocution", "scissors", "shuriken", "gun", "poison"], "disguises":["Tactical Wetsuit", "Bodyguard"], "localWildcards":["Throw a squeaky toy"]},' +
    
  // Below is Hitman 2  
  '{ "location":"Miami", "name":"The Finish Line", "targets":["Sierra Knox", "Robert Knox"], "weapons":["bare hands", "gun", "knife", "battle axe", "cleaver", "scissors", "screwdriver", "starfish", "explosion", "poison"], "disguises":["Driver", "Mechanic", "Event Crew", "Event Security", "Florida Man", "Food Vendor", "Journalist", "Kitchen Staff", "Engineer", "Mascot", "Medic", "Sheik", "Pale Rider", "Street Musician", "Race Marshall"], "localWildcards":[]},' +
  '{ "location":"Santa Fortuna", "name":"Three-Headed Serpent", "targets":["Rico Delgado", "Jorge Franco", "Andrea Martinez"], "weapons":["knife", "gun", "bare hands", "scissors", "machete", "letter opener", "explosion"], "disguises":["band member", "barman", "chef", "field guard", "construction worker", "field worker", "drug lab worker", "gardener", "hippie", "hippo whisperer", "masion guard", "mansion staff", "shaman", "soldier", "tattoo artist"], "localWildcards":[]},' +
  '{ "location":"Mumbai", "name":"Chasing a Ghost", "targets":["The Maelstrom", "Vanya Shah", "Dawood Rangan"], "weapons":["bare hands", "gun", "knife", "barber razor", "axe", "letter opener", "saber", "screwdriver","scissors", "measuring tape", "cleaver"], "disguises":["barber", "bollywood bodyguard", "bollywood crew", "dancer", "food vendor", "holy man", "kashmirian", "laundry foreman", "actor", "tailor", "queens bodyguard"], "localWildcards":[]},' +
  '{ "location":"Whittleton Creek", "name":"Another Life", "targets":["Janus", "Nolan Cassidy"], "weapons":["bare hands", "gun", "knife", "scissors", "screwdriver", "battle axe", "hatchet", "explosion", "letter opener"], "disguises":["cassidy bodyguard", "janus bodyguard", "construction worker", "bbq owner", "mailman", "plumber", "politician", "real estate agent", "muffin server", "sheriff deputy"], "localWildcards":["throw two muffins at the sheriff"]},' +
  '{ "location":"Isle of Sgail", "name":"The Ark Society", "targets":["Zoe Washington", "Sophia Washington", "The Constant"], "weapons":["bare hands", "knife", "gun", "scissors", "screwdriver", "battle axe", "broadsword", "cleaver", "fire axe", "hatchet", "saber", "viking axe"], "disguises":["architect", "ark member", "butler", "castle staff", "custodian", "event staff", "entertainer", "elite guard", "knights armor", "master of ceremonies"], "localWildcards":["burn the money in the pit"]},' +
  '{ "location":"The Bank", "name":"A Golden Handshake", "targets":["Athena Savalas"], "weapons":["bare hands", "knife", "gun", "scissors", "screwdriver", "burial dagger", "hobby knife", "fire axe", "antique curved knife", "poison", "push out clock panel", "earphones"], "disguises":["IT staff", "bank teller", "janitor", "security guard", "investment banker", "knitted sweater", "high stakes security guard", "bunny outfit"], "localWildcards":["must get data disks", "get data core server", "hide 3 bodies"]},' +
  '{ "location":"Haven Island", "name":"The Last Resort", "targets":["Tyson Williams", "Ljudmila Vetrova", "Steven Bradley"], "weapons":["bare hands", "knife", "gun", "scissors", "screwdriver", "hatchet", "hobby knife", "barber razor", "starfish", "pirate saber", "stethoscope", "poison"], "disguises":[], "localWildcards":["must get data disks", "get data core server", "hide 3 bodies"]},' +
   
  // Below is Patient Zero DLC
  '{ "location":"Bangkok", "name":"The Source - Patient Zero", "targets":["Oybek Nabazov", "Sister Yulduz"], "weapons":["bare hands", "gun", "knife", "microphone", "coconut", "crowbar", "golf club", "hammer", "katana", "letter opener", "screwdriver", "soda can", "wrench", "fire extinguisher", "propane tank", "poison pills"], "disguises":["casual suit", "cult bodyguard", "cult initiate", "exterminator", "groundskeeper", "hotel security", "hotel staff", "kitchen staff", "militia soldier", "recording crew", "waiter"], "localWildcards":[]},' +
  '{ "location":"Sapienza", "name":"The Author - Patient Zero", "targets":["Craig Black", "Brother Akram"], "weapons":["bare hands", "knife", "gun", "scissors", "screwdriver", "fire axe", "explosive golf ball"], "disguises":["bodyguard", "bohemian", "church staff", "gardener", "housekeeper", "sfx crew", "waiter", "plumber"], "localWildcards":[]},' +    
  '{ "location":"Hokkaido", "name":"Patient Zero", "targets":["Owen Cage", "Klaus Liebleid"], "weapons":["bare hands", "knife", "gun", "scissors", "screwdriver", "katana"], "disguises":["bio suit", "bodyguard", "chef", "doctor", "helicopter pilot", "hospital director", "vip patient"], "localWildcards":["let the virus spread to 5 other people", "do not let the virus spread to anyone else"]},' +
  
  // Below is Bonus Missions  
  '{ "location":"Sapienza", "name":"The Icon", "targets":["Dino Bosco"], "weapons":["gun", "bare hands", "fiber wire", "environment", "battle axe", "brick", "cleaver", "crowbar", "fire axe", "knife", "screwdriver", "soda can", "wrench", "fire extinguisher", "explosives"], "disguises":["Italian Suit", "Kitchen Assistant", "Movie Crew", "Security", "SFX Crew"], "localWildcards":[]}, ' +
  '{ "location":"Marrakesh", "name":"A House Built on Sand", "targets":["Kong Tuo-Kwang", "Matthieu Mendola"], "weapons":["bare hands", "knife", "gun", "scissors", "screwdriver", "battle axe", "cleaver", "brick", "lead piper"], "disguises":["bodyguard", "food vendor", "fortune teller", "handyman", "soldier", "shopkeeper", "waiter"], "localWildcards":[]},' +
  '{ "location":"Paris", "name":"Holiday Hoarders", "targets":["Harry Bagnato", "Marv Gonif"], "weapons":["bare hands", "knife", "gun", "scissors", "screwdriver"], "disguises":["santa", "Auction Staff", "Chef", "CICADA Bodyguard", "Event Crew"], "localWildcards":["must complete as santa"]},' +
  '{ "location":"Sapienza", "name":"Landslide", "targets":["Marco Abiatti"], "weapons":["bare hands", "knife", "gun", "scissors", "screwdriver", "saber", "cleaver", "old axe", "baseball bat"], "disguises":["bodyguard", "priest", "church staff", "gardener", "photographer", "security", "stage crew", "waiter", "plumber", "kitchen assistant"], "localWildcards":[]},' +
  
  // Below is Hitman 2016 
  '{ "location":"Paris", "name":"The Showstopper", "targets":["Viktor Novikov", "Dalia Margolis"], "weapons":["gun", "bare hands", "explosives", "drowning", "battle axe", "bust", "cleaver", "crowbar", "fire axe", "fire poker", "hammer", "kitchen knife", "lead pipe", "letter opener", "scissors", "saber", "screwdriver", "wrench", "poison"], "disguises":["Tuxedo", "Auction Staff", "Chef", "CICADA Bodyguard", "Event Crew", "Helmut Kruger", "Security Guard", "Sheikh Salman", "Stylist", "Palace Staff", "Vampire Magician"], "localWildcards":["Drop an explosive on the fashion show runway", "Drop the runway light rigging before the end of the mission"]}, ' +
  '{ "location":"Sapienza", "name":"World of Tomorrow", "targets":["Silvio Caruso", "Francesca De Santis"], "weapons":["gun", "fiber wire", "knife", "wrench", "soda can", "drowning", "environment", "crowbar", "bust", "brick", "can of spaghetti sauce", "fire axe", "fire poker", "hammer", "golf club", "kitchen knife", "lead pipe", "letter opener", "saber", "screwdriver", "shovel", "soda can", "explosion"], "disguises":["Italian Suit", "Biolab Security", "Bodyguard", "Bohemian", "Butler", "Church Staff", "Cyclist", "Delivery Man", "Oscar Lafayette", "Gardener", "Plumber", "Hazmat Suit", "Housekeeper", "Kitchen Assistant", "Lab Technician", "Mansion Chef", "Mansion Security", "Mansion Staff", "Plague Doctor", "Priest", "Private Detective", "Roberto Vargas", "Street Performer", "Store Clerk", "Waiter"], "localWildcards":["Complete one lap around the villa in the Plague Doctor disguise", "Eliminate the virus before assassinating any targets"]}, ' +
  '{ "location":"Marrakesh", "name":"A Gilded Cage", "targets":["Claus Hugo Strandberg", "Reza Zaydan"], "weapons":["gun", "bare hands", "battle axe", "brick", "cleaver", "crowbar", "fire axe", "hammer", "letter opener", "soda can", "scissors", "screwdriver", "wrench", "environment", "fire extinguisher", "explosives", "poison"], "disguises":["Bodyguard", "Cameraman", "Consulate Intern", "Consulate Janitor", "Consulate Security", "Elite Soldier", "Food Vendor", "Fortune Teller", "Handyman", "Headmaster", "Local Printing Crew", "Masseur", "Military Officer", "Military Soldier", "Shopkeeper", "Prisoner", "Waiter"], "localWildcards":["Take out at least 10 soldiers in the abandoned school", "Zaydan must be killed before Strandberg"]}, ' +
  '{ "location":"Marrakesh", "name":"A House Built on Sand", "targets":["Kong Tuo-Kwang", "Matthieu Mendola"], "weapons":["gun", "bare hands", "drowning", "battle axe", "brick", "cleaver", "crowbar", "kitchen knife", "lead pipe", "scissors", "screwdriver", "soda can", "wrench", "explosion"], "disguises":["Summer Suit", "Bodyguard", "Food Vendor", "Fortune Teller", "Handyman", "Military Soldier", "Shopkeeper", "Waiter"], "localWildcards":[]}, ' +
  '{ "location":"Bangkok", "name":"Club 27", "targets":["Jordan Cross", "Ken Morgan"], "weapons":["gun", "baseball bat", "cleaver", "coconut", "crowbar", "fire axe", "hammer", "golf club", "katana", "kitchen knife", "letter opener", "screwdriver", "soda can", "wrench", "explosion", "environment", "poison", "drowning"], "disguises":["Casual Suit", "Abel de Silva", "Exterminator", "Groundskeeper", "Hotel Security", "Hotel Staff", "Jordan Cross Bodyguard", "Kitchen Staff", "Morgans Bodyguard", "Recording Crew", "Stalker", "Waiter"], "localWildcards":[]}, ' +
  '{ "location":"Colorado", "name":"Freedom Fighters", "targets":["Sean Rose", "Maya Parvati", "Ezra Berg", "Penelope Graves"], "weapons":["gun", "bare hands", "drowning", "fiber wire", "baseball bat", "brick", "cleaver", "bust", "crowbar", "hammer", "kitchen knife", "environment", "screwdriver", "shovel", "soda can", "wrench", "explosion", "fire extinguisher", "poison", "explosion"], "disguises":["Tactical Gear", "Explosive Specialist", "Hacker", "Militia Cook", "Militia Elite", "Militia Soldier", "Militia Spec Ops", "Militia Technician", "Point Man", "Scarecrow"], "localWildcards":["Eliminate all soldiers participating in the car crash drill with the ram"]}, ' +
  '{ "location":"Hokkaido", "name":"Situs Inversus", "targets":["Erich Soders", "Yuki Yamazaki"], "weapons":["gun", "bare hands", "drowning", "lead pipe", "scissors", "bust", "soda can", "kitchen knife", "wrench", "hammer", "fire axe", "screwdriver", "shovel", "crowbar", "scalpel", "fire poker", "cleaver", "explosion", "environment", "poison"], "disguises":["VIP Patient", "Baseball Player", "Bodyguard", "Chef", "Chief Surgeon", "Doctor", "Handyman", "Helicopter Pilot", "Hospital Director", "Morgue Doctor", "Motorcyclist", "Patient", "Ninja", "Resort Security", "Resort Staff", "Surgeon", "Yoga Instructor"], "localWildcards":["Take out the Hospital Director"]}' +
  ' ]}';

var stages = JSON.parse(stageData).stages;

// This list includes only wildcards which can work on any stage
// Stage-specific wildcards should be included in the "localWildcards"
// section of the stageData above.
var wildcards = ["can only use one disguise", "one safety save", "one kill must be accidental", "must successfully assassinate four non-targets", "cannot unlock any doors", "must start in the suit", "must never be frisked", "targets may only be killed in bathrooms", "must set off an explosion in a densely populated area", "may save once after first assassination", "only non-lethal weapons allowed", "must escape out furthest exit from your last target", "must end the mission with 3 stars or better", "must end the mission with a 1- or 2-star rating", "must hide 3 bodies"];

var pickedStage = "";

function pickStage() {
  pickedStage = stages[pickRandom(stages.length)];
  $("#wildcard").empty();
  $("#stageName").text(pickedStage.location + " / " + pickedStage.name);
  
  //Clear the targets list and add the new ones
  $("#targets").empty();
  for(var i = 0; i < pickedStage.targets.length; i++) {
    var target = pickedStage.targets[i];
    $("#targets").append("<div class='target' id='target" + i + "'><p class='targetName'>" + target + "</p><button onclick='pickWeapon(" + i + ")' class='pure-button button-dark'>Pick weapon</button><p id='weapon" + i + "'>...</p><button onclick='pickDisguise(" + i + ")' class='pure-button button-dark'>Pick disguise</button><p id='disguise" + i + "'>...</p></div>");
  }

  $("#wildcardButton").prop('disabled', false);
}

function pickWeapon(targetNum) {
  var thisWeapon = pickedStage.weapons[pickRandom(pickedStage.weapons.length)];
  $("#weapon" + targetNum).text(thisWeapon);
}

function pickDisguise(targetNum) {
  var thisDisguise = pickedStage.disguises[pickRandom(pickedStage.disguises.length)];
  $("#disguise" + targetNum).text(thisDisguise);
}

function pickWildcard() {
  var wildcardList = wildcards.concat(pickedStage.localWildcards);
  var wildcard = wildcardList[pickRandom(wildcardList.length)];
  $("#wildcard").text(wildcard);
}

function pickRandom(arrayLen) {
  var index = Math.floor(Math.random() * arrayLen);
  return index;
}

