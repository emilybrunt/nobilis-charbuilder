// make sure ability is the default tab
document.getElementById("defaultOpen").click();

const powersjson = {
  "aspect": {
    "0": {
      "title": "Cosmopolitan",
      "description": "Speak any language that someone in the world speaks.",
      "example": "Speak French, ASL, or the Language of Heaven."
    },
    "1": {
      "title": "Dauntless",
      "description": "Miraculously win against any mundane opposition that defeated you previously in the same scene.",
      "example": "You fall behind in a race, take a minute to rethink your strategy, and then pull ahead."
    },
    "2": {
      "title": "Untiring",
      "description": "You don\'t really get tired and heal remarkably quickly, recovering 3 Wear per chapter.",
      "example": "Shake off a sprained ankle, be unfazed by a long day at work."
    },
    "3": {
      "title": "Grace",
      "description": "Have high end physical conditioning and are lucid, calm and flexible even in stressful or unpleasant situations. You can be neatly groomed even in impossible situations.",
      "example": "Looking clean, fresh and calm during an artillery bombardment. Pretending you have 20 years of athletics training, instead of having done a single jumping jack."
    },
    "4": {
      "title": "Flair",
      "description": "Add 4 your Ability instead of taking Wear.",
      "example": ""
    },
    "5": {
      "title": "Perfection",
      "description": "Perfect timing and your mundane actions compete with miracles.",
      "example": "Stroll casually across a busy highway. Parry a miraculous death-ray with a baseball bat."
    },
    "6": {
      "title": "Determination",
      "description": "Have the strength of a bear, mental speed of a computer, and the equivalent for every other capacity.",
      "example": "Throw a car, track someone by scent, run on the heads of a crowd, perform rapid scenario analysis."
    },
    "7": {
      "title": "Conviction",
      "description": "Low-fantasy control over your body and mind.",
      "example": "Raise your body temp enough to start a fire, sing two lines of a song at once, deliberately forget something, or exert your full strength through a fingertip."
    }
  },
  domain: {
      "0": {
        "title": "Estate-Driven Divination",
        "description": "Know when your Estate is in trouble.",
        "example": ""
      },
      "1": {
        "title": "Divination",
        "description": "Get information about your Estate.",
        "example": "As Power of Death, figure out how someone died. As Power of Winter, predict Winter weather, or know where to find a fox in a winter forest."
      },
      "2": {
        "title": "Ghost Miracle",
        "description": "Do a minor, casual version of the more significant powers - create the illusion that your Estate is present, absent, or doing something.",
        "example": "As Power of Storms, spark lightning between your fingers. As Power of Money, create the impression that someone didn't pay for their meal."
      },
      "3": {
        "title": "Conversation",
        "description": "Talk to Estate spirits, ask them to do things they\'d normally do.",
        "example": "As Power of Cars, have a car drive you somewhere, or break down at a convenient moment. As Power of Insects, befriend a beehive."
      },
      "4": {
        "title": "Preservation",
        "description": "Protect or strengthen your Estate.",
        "example": "As Power of Storms, make rain fierce enough to break through a roof. As Power of Pancakes, deflect a sword-strike with a super-tough pancake."
      },
      "5": {
        "title": "Animation",
        "description": "Make your Estate act.",
        "example": "As Power of Caves, have a cave bite someone. As Power of Love, rearrange the seating arrangements at a party to maximize the potential for sparks. As Power of Matches, be surrounded by a defensive aura of matchflame."
      },
      "6": {
        "title": "Creation",
        "description": "Create instances of your Estate.",
        "example": "As Power of Debate, create a dispute between two people. As Power of Summer, create localized summer conditions. As Power of Treachery, redirect a missile back at its origin."
      },
      "7": {
        "title": "Motion",
        "description": "Change the destiny of your Estate locally.",
        "example": "As Power of Money, declare that someone's money actually belongs to someone else. As Power of Sewers, declare that a particular sewer will birth a monstrous hydra!"
      }
    },
  "persona": {
    "0": {
      "title": "Shine",
      "description": "Actions taken by others for you, or your behalf, or in service or your plans/ideology gain +1 Ability.",
      "example": "If you declare that all your Chancelfolk must have a tree in their house, everyone becomes a bit better at caring for trees. Someone worn down and hopeless will pay attention when you speak. A barista will go the extra mile when making your coffee."
    },
    "1": {
      "title": "The Sight",
      "description": "See your Estate\'s impacts on the world.",
      "example": "As Power of Music, see if someone is a musician. Or, recognize an Excrucian making an attack on Music."
    },
    "2": {
      "title": "Ghost Miracle",
      "description": "Make cosmetic adjustments to the world around you to better fit your Estate.",
      "example": "As Power of Candy-Making, pull gummi worms out of the earth, get gumballs out of parking meters, and illustrate the candy making process with a song."
    },
    "3": {
      "title": "Incarnation",
      "description": "Be with an instance of your Estate, or someone experiencing your Estate, in the same region.",
      "example": "As Power of Joy, when people are happy, a part of you is there."
    },
    "4": {
      "title": "Emulation",
      "description": "Apply your Estate\'s properties to yourself as Geasa.",
      "example": "Fantasy \"Sets you free\", so the Power of Fantasy can shatter chains, or break you out of a psych ward. Hope \"Springs Eternal\", so the Power of Hope can never die."
    },
    "5": {
      "title": "Embodiment",
      "description": "Seek out new powers appropriate to your Role.",
      "example": "If you're a knight, but your powers don't give you any tools for pulling swords from stones or defeating dark knights, go seek them out!"
    },
    "6": {
      "title": "Enchantment",
      "description": "Apply your Estate\'s properties or nature to anything (objects, people, statements, feelings, etc) locally.",
      "example": "As Power of Theater, enchant a gunshot wound so that it's a dramatic wound and not a physical one. They stagger, ketchup everywhere!"
    },
    "7": {
      "title": "Binding",
      "description": "Bring someone into the story of your Estate.",
      "example": "As Power of Birds, make someone into the bird that they would be - if they were a bird."
    }
  },
  "flore": {
    "0": {
      "title": "Connection",
      "description": "Know when your Treasures are in danger or trying to reach you.",
      "example": "Know when someone is trying to steal your Sacred Grail. Feel the frantic, repeated calls of a Treasured child, even though you don't have your phone."
    },
    "1": {
      "title": "Projection",
      "description": "Visit your Treasures in the same region by dreaming, lend them your powers and grant limited mobility if normally immobile. You can perform miracles at your Treasure's location.",
      "example": "Guide your Mercedes Alsvidur through the Interchange of Tears."
    },
    "2": {
      "title": "Administration",
      "description": "Visit your Treasures in the same region while awake. You can perform miracles at your Treasure's location.",
      "example": "Make sure that your student is actually studying."
    },
    "3": {
      "title": "Guidance",
      "description": "Give superb instruction/advice, giving a Treasure or someone wielding one (including yourself) professional competence and bonuses.",
      "example": "After ghost walking (with Projection) into your friend's job interview, you talk them through it. Using your Celestial Paintbrush to give you an edge against a mortal painter."
    },
    "4": {
      "title": "Glorification",
      "description": "Awaken a Treasure's signature power, or claim a new one.",
      "example": "Awakening the power of your Four-Winds fan, and blowing wind at something. Getting your telekinetic friend to rescue a cat from a tree."
    },
    "5": {
      "title": "Ignition",
      "description": "Allow your Treasure to contend with miracles, and gain unfair Edge in contests.",
      "example": "Defeating a gang of mafia goons with your whiffle bat. Using your Cinematic Hacking Program to defeat a miraculous computer virus."
    },
    "6": {
      "title": "Trust",
      "description": "Your Treasure rushes to your side from within the same region when you need them. Additionally, they can (with your OOC permission) activate Glorification and Ignition on their own at any time.",
      "example": ""
    },
    "7": {
      "title": "Design",
      "description": "Create, modify or repair artifacts and servants.",
      "example": ""
    }
  },
  "ability": {
    "0": {
      "title": "Fail",
      "description": "Just give up.",
      "example": ""
    },
    "1": {
      "title": "Well-Met",
      "description": "In good circumstances, keep your life together.",
      "example": ""
    },
    "2": {
      "title": "Function",
      "description": "Perform basic tasks.",
      "example": ""
    },
    "3": {
      "title": "Focus",
      "description": "Pay attention.",
      "example": ""
    },
    "4": {
      "title": "Expertise",
      "description": "Do everyday work that falls within your competencies.",
      "example": ""
    },
    "5": {
      "title": "Steel",
      "description": "Do unpleasant or unfamiliar work.",
      "example": ""
    },
    "6": {
      "title": "Organization",
      "description": "Bring diligence, attention and organization to bear.",
      "example": ""
    },
    "7": {
      "title": "Flow",
      "description": "Be your personal best.",
      "example": ""
    }
  }
};

const greaterpowersjson = {
  "aspect": {
    "4": {
      "title": "Greater Cosmopolitan",
      "description": "Fit in anywhere.",
      "example": "Be unremarkable in Paris, Shanghai or Octopus World."
    },
    "5": {
      "title": "Greater Dauntless",
      "description": "Ignore fear, pain and potential for future discomfort.",
      "example": "Stick your hand into molten lava, ignore the fact that your legs are broken, resist an Excrucian's fear-based attack."
    },
    "6": {
      "title": "Greater Untiring",
      "description": "Go without basic needs indefinitely.",
      "example": "Go without food or sleep for a month, run at a steady pace for a year, survive on sheer spite as you fly through the vacuum of space."
    },
    "7": {
      "title": "Greater Grace",
      "description": "Become exceptionally graceful and fluid in body and mind.",
      "example": "Land safely on your feet after falling off a tall building, perform 40 foot leaps, run on the crest of waves, decide not to worry about Lord Entropy."
    }
  }
};

// const aspectobj = JSON.parse(aspectjson);

// set up tabs for attributes
function openAttribute(evt, attrName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(attrName).style.display = "block";
  evt.currentTarget.className += " active";
};

function pointsRemaining() {
    var characterPoints = 25;
    var abilityCost = document.getElementById("abilityRating").value;
    var aspectCost = document.getElementById("aspectRating").value * 2;
    var domainCost = document.getElementById("domainRating").value * 2;
    var personaCost = document.getElementById("personaRating").value * 2;
    var floreCost = document.getElementById("floreRating").value * 2;    

    var pointsRemaining = characterPoints - abilityCost - aspectCost - domainCost - personaCost - floreCost;

    document.getElementById("charPointsRemaining").innerHTML = "Character Points Remaining: " + pointsRemaining;

    powerText("aspect")
    powerText("domain")
    powerText("persona")
    powerText("flore")
    powerText("ability")

    greaterpowerText("aspect")

};

function powerText(attribute) {
  var attrName = attribute + "Rating"
  var rating = String(document.getElementById(attrName).value);
  title = powersjson[attribute][rating]["title"];
  description = powersjson[attribute][rating]["description"];
  example = powersjson[attribute][rating]["example"];
  document.getElementById(attribute + "title").innerHTML = title;
  document.getElementById(attribute + "desc").innerHTML = description;
  document.getElementById(attribute + "ex").innerHTML = example;
};

function greaterpowerText(attribute) {
  var attrName = attribute + "Rating";
  var rating = String(document.getElementById(attrName).value);
  if (rating < 4) {
    return;
  };
  title = greaterpowersjson[attribute][rating]["title"];
  description = greaterpowersjson[attribute][rating]["description"];
  example = greaterpowersjson[attribute][rating]["example"];
  document.getElementById(attribute + "gtitle").innerHTML = title;
  document.getElementById(attribute + "gdesc").innerHTML = description;
  document.getElementById(attribute + "gex").innerHTML = example;
};

