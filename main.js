// make sure ability is the default tab
document.getElementById("defaultOpen").click();

const powersjson = {
  "aspect": {
    "0": {
      "title": "Cosmopolitan",
      "description": "Speak any worldly language.",
      "example": "Speak ASL, the True Tongue of Heaven, or a particular family's idiolect."
    },
    "1": {
      "title": "Dauntless",
      "description": "Miraculously win against a mundane action that defeated you previously in the same scene. The opponent is allowed to escalate and \"get serious\" to pull ahead again, but this only works for them once - Dauntless will only let you lose the same mundane conflict twice.",
      "example": "You fall behind in a race, take a minute to rethink your strategy, and then pull ahead. Set a hard limit of \"twice\" for how often you can be fooled by a series of tricky riddles."
    },
    "2": {
      "title": "Untiring",
      "description": "You don\'t really get tired and heal remarkably quickly, recovering 3 Wear per chapter.",
      "example": "Shake off a sprained ankle, be unfazed by a long day at work."
    },
    "3": {
      "title": "Grace",
      "description": "Have high end physical conditioning and be lucid, calm and flexible even in stressful or unpleasant situations. You can be neatly groomed even in impossible ones.",
      "example": "Looking clean, fresh and calm during an artillery bombardment. Pretending you have 20 years of athletics training, instead of having done a single jumping jack."
    },
    "4": {
      "title": "Flair",
      "description": "Add 4 your Ability instead of taking Wear. Included by default in any 4+ Aspect action that relies on or enhances a mundane action.",
      "example": "With 0 Ability, comfortably hold down an office job. With 6 Ability, readily lead a large organization through a crisis."
    },
    "5": {
      "title": "Perfection",
      "description": "Perfect timing and your mundane actions compete with miracles.",
      "example": "Stroll casually across a busy highway. Arrive at court \"just in time\". Parry a miraculous death-ray with a baseball bat."
    },
    "6": {
      "title": "Determination",
      "description": "Have the strength of a bear, mental speed of a computer, and the equivalent for every other capacity.",
      "example": "Throw a car, track someone by scent, run on the heads of a crowd, react a few seconds before an ambush begins due to planning for basically every possible scenario."
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
        "example": "As Power of Death, figure out how someone died, or the mostly likely way they will die. As Power of The Sun, know when sunrise and sunset will be, how light will move across a balcony over the course of a day, or whether the Sun has been replaced with an evil duplicate."
      },
      "2": {
        "title": "Ghost Miracle",
        "description": "Do a minor, casual version of the more significant powers. Or, create the fragile illusion that your Estate is present, absent, or doing something.",
        "example": "As Power of Storms, spark lightning between your fingers. As Power of Money, create the impression that someone didn't pay for their meal."
      },
      "3": {
        "title": "Conversation",
        "description": "Talk to Estate spirits, ask them to do things they\'d normally do.",
        "example": "As Power of Cars, have a car drive you somewhere, or break down at a convenient moment. As Power of Insects, convince bees to provide you with honey."
      },
      "4": {
        "title": "Preservation",
        "description": "Protect or strengthen your Estate.",
        "example": "As Power of Storms, make rain fierce enough to break through a roof. As Power of Jokes, make a joke funnier."
      },
      "5": {
        "title": "Animation",
        "description": "Make your Estate act.",
        "example": "As Power of Caves, have a cave bite someone. As Power of Love, rearrange the seating arrangements at a party to maximize the potential for sparks. As Power of Matches, be surrounded by a defensive aura of matchflame."
      },
      "6": {
        "title": "Creation",
        "description": "Create instances of your Estate, or summon an existing one.",
        "example": "As Power of Debate, create a dispute between two people. As Power of Summer, create localized summer conditions. As Power of Treachery, redirect a missile back at its origin. As Power of Dudes, summon a specific Dude for interrogation."
      },
      "7": {
        "title": "Motion",
        "description": "Change the destiny of your Estate locally.",
        "example": "As Power of Cars, declare that a car belongs to you. As Power of Sewers, declare that a particular sewer will birth a monstrous hydra. As Power of Insects, set up a particular bee to be elected to congress. As Power of The Moon, declare that moonlight will lead you to hidden treasure."
      }
    },
  "persona": {
    "0": {
      "title": "Shine",
      "description": "Actions taken by others for you, or your behalf, or in service or your plans/ideology gain +1 Ability.",
      "example": "After declaring that all Chancelfolk must have a tree in their house, everyone becomes a bit better at caring for trees. Ordering someone to jump in a lake is more likely to be a productive course of action for them. A barista will go the extra mile when making your coffee."
    },
    "1": {
      "title": "The Sight",
      "description": "See your Estate\'s impacts on the world. It's a binary toggle that you can turn on or off, but leaving it on makes it harder to notice ordinary stuff.",
      "example": "As Power of Music, see if someone is a musician. Or recognize an Excrucian making an attack on Music. As Power of Poison, get a constant flow of information on how poisonous everything is."
    },
    "2": {
      "title": "Ghost Miracle",
      "description": "Make cosmetic, illusory adjustments to the world around you to better fit your Estate.",
      "example": "As Power of Candy-Making, pull gummi worms out of the earth, get gumballs out of parking meters, and illustrate the candy making process with a song. As Power of Lions, convey the vague, ominous sense that you are hunting someone."
    },
    "3": {
      "title": "Incarnation",
      "description": "Be with an instance of your Estate, or someone experiencing your Estate, in the same region.",
      "example": "As Power of Joy, when people are happy, a part of you is there. As Power of Birds, incarnate into a bird and use its eyes to see a city from above."
    },
    "4": {
      "title": "Emulation",
      "description": "Apply your Estate\'s properties to yourself as Geasa, typically to support a single action.",
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
      "example": "As Power of Theater, enchant a gunshot wound so that it's a dramatic wound and not a physical one. They stagger, ketchup everywhere! As Power of Fire, burn someone's memories away."
    },
    "7": {
      "title": "Binding",
      "description": "Bring someone into the story of your Estate.",
      "example": "As Power of Birds, make someone into the bird that they would be - if they were a bird. As Power of Highways, declare someone a guardian or enemy of highways."
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
      "description": "Allow your Treasure to contend with miracles, and gain unfair Edge in subsequent mundane contests.",
      "example": "Defeat a gang of mafia goons with your whiffle bat. Use your Cinematic Hacking Program to defeat a miraculous computer virus."
    },
    "6": {
      "title": "Trust",
      "description": "Your Treasure rushes to your side from within the same region when you need them. Additionally, they can (with your OOC permission) activate Glorification and Ignition on their own at any time.",
      "example": "It's not appropriate to bring your baseball bat to court, but in a moment of desperate need you summon it to your hand to bat the opposing counsel's evidence off over the horizon."
    },
    "7": {
      "title": "Design",
      "description": "Create, modify or repair artifacts.",
      "example": "Fix a computer. Create a sacred egg containing a ritually pure child. Forge a magic sword. Make a fabulous scintillating cloak."
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
      "description": "Be in a flow state.",
      "example": ""
    }
  }
};

const greaterpowersjson = {
  "aspect": {
    "4": {
      "title": "Greater Cosmopolitan",
      "description": "Be received by a culture in the way you would back home.",
      "example": "If considered beautiful in New York, be likewise in Octopus World. Successfully enacting New York politeness in the South."
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
      "example": "Land safely on your feet after falling off a tall building, perform 50 meter leaps, run on the crest of waves, balance on a thread, choose not to feel sad, decide not to worry about Lord Entropy."
    }
  },
  "ability": {
    "4": {
      "title": "Greater Fail",
      "description": "Declare that something is impossible for you.",
      "example": ""
    },
    "5": {
      "title": "Greater Well-Met",
      "description": "Keep your life together in difficult circumstances.",
      "example": ""
    },
    "6": {
      "title": "Greater Function",
      "description": "Get a basic task done \"just right\".",
      "example": ""
    },
    "7": {
      "title": "Greater Focus",
      "description": "Pay close attention - gain sharp insights and maintain focus in distracting or confusing situations.",
      "example": ""
    }
  },
  "domain": {
    "4": {
      "title": "Greater Estate-Driven Divination",
      "description": "Know the nature of danger to your Estate.",
      "example": "Know that Coriander Hasp is up to some bullshit."
    },
    "5": {
      "title": "Greater Divination",
      "description": "Use Estate to gather information generally, or foretell the future to a limited extent.",
      "example": "As Power of Cars, trace the movements of an enemy by car. As Power of Wine, see a vision of the future in the surface of a glass of Merlot."
    },
    "6": {
      "title": "Greater Ghost Miracle",
      "description": "Create virtually any Estate-based effects you like - just with low narrative impact and a tendency to get explained away by ordinary people later.",
      "example": "As Power of Gardens, transform a city into a Garden-wonderland for a date. Most people in the city experience it as a dreamlike thing, and it largely fades away by the next day except for little areas that people decided to put work into or attribute to the actions of the local parks department."
    },
    "7": {
      "title": "Greater Conversation",
      "description": "Ask your Estate's spirits to do things they wouldn't normally do.",
      "example": "As Power of Boxes, convince a box to hold far more than it should be able to. As Power of Libraries, convince a Library to lend you a gun."
    }
  },
  "persona": {
      "4": {
        "title": "Greater Shine",
        "description": "Express the fundamental glory of your Estate, making your Nobility innately recognizable to others - inspire art, devotion, etc.",
        "example": "As Power of Illumination, shroud yourself in Heavenly light and make it blatantly obvious what you are, even to mortals."
      },
      "5": {
        "title": "Greater Sight",
        "description": "Mystical super-senses.",
        "example": "This one is just Greater Vision."
      },
      "6": {
        "title": "Greater Ghost Miracle",
        "description": "Bring the world cosmetically in line with your Estate in big ways - just with low narrative impact and a tendency to get explained away by ordinary people later.",
        "example": ""
      },
      "7": {
        "title": "Greater Incarnation",
        "description": "Be with an instance of your Estate, or someone experiencing your Estate, anywhere. Alternately: sift through hundreds of instances/lives.",
        "example": "As the Power of Libraries, sift through hundreds of libraries to get a sense of what books are popular right now."
      }
    },
    "flore": {
      "4": {
        "title": "Greater Connection",
        "description": "Know the nature of danger facing a Treasure, and understand the feelings of non-human Treasures.",
        "example": "Understand how your magical castle is feeling."
      },
      "5": {
        "title": "Greater Projection",
        "description": "Visit (potentially multiple) Treasures anywhere by dreaming, with the normal power lending and limited mobility.",
        "example": "Find your Sacred Grail after it gets stolen away to fairyland. Communicate with all of your students, while in a trance."
      },
      "6": {
        "title": "Greater Administration",
        "description": "Visit (potentially multiple) Treasures anywhere while awake.",
        "example": "Psychically command your army while fighting. Touch base with your friend while they're on vacation on another world."
      },
      "7": {
        "title": "Greater Guidance",
        "description": "Give incredible instruction/advice, giving a Treasure or someone wielding one (including yourself) professional competence and effective Ability 7. Teach someone specialized or magical skills.",
        "example": "Instructing an ordinary Treasure on how to steal documents from a military base. Use an Enchanted Wardrobe to be extremely put together and fashionable, Ability 0 be damned. Teach someone a skill that you don't yourself have."
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
    
    var abilityMax = document.getElementById("abilityRating");
    var aspectMax = document.getElementById("aspectRating");
    var domainMax = document.getElementById("domainRating");
    var personaMax = document.getElementById("personaRating");
    var floreMax = document.getElementById("floreRating");

    var pointsRemaining = characterPoints - abilityCost - aspectCost - domainCost - personaCost - floreCost;

    if (pointsRemaining == 0) {
      abilityMax.setAttribute('max', abilityCost)
      aspectMax.setAttribute('max', aspectCost/2)
      domainMax.setAttribute('max', domainCost/2)
      personaMax.setAttribute('max', personaCost/2)
      floreMax.setAttribute('max', floreCost/2)
    } else if (pointsRemaining == 1) {
      abilityMax.setAttribute('max', abilityCost + 1)
      aspectMax.setAttribute('max', aspectCost/2)
      domainMax.setAttribute('max', domainCost/2)
      personaMax.setAttribute('max', personaCost/2)
      floreMax.setAttribute('max', floreCost/2)
    } else {
      abilityMax.setAttribute('max', 7)
      aspectMax.setAttribute('max', 7)
      domainMax.setAttribute('max', 7)
      personaMax.setAttribute('max', 7)
      floreMax.setAttribute('max', 7)      
    }

    document.getElementById("charPointsRemaining").innerHTML = "Character Points Remaining: " + pointsRemaining;

    powerText("aspect")
    powerText("domain")
    powerText("persona")
    powerText("flore")
    powerText("ability")

    greaterpowerText("aspect")
    greaterpowerText("ability")
    greaterpowerText("domain")
    greaterpowerText("persona")
    greaterpowerText("flore")

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
    title = ""
    description = ""
    example = ""
  } else {
    title = greaterpowersjson[attribute][rating]["title"];
    description = greaterpowersjson[attribute][rating]["description"];
    example = greaterpowersjson[attribute][rating]["example"];
  };
  document.getElementById(attribute + "gtitle").innerHTML = title;
  document.getElementById(attribute + "gdesc").innerHTML = description;
  document.getElementById(attribute + "gex").innerHTML = example;
};

