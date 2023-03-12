function loadEpisodes() {
  let episodes = [
    {
      img: "./assets/images/episodes/episode1.svg",
      title: "When You're Lost in the Darkness",
      description:
        "<br>In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
    },
  
    {
      img: "./assets/images/episodes/episode2.svg",
      title: "Infected",
      description:
        "<br>Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
    },
    {
      img: "./assets/images/episodes/episode3.svg",
      title: "Long, Long Time",
      description:
        " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
    },
    {
      img: "./assets/images/episodes/episode4.svg",
      title: "Please Hold to My Hand",
      description:
        "<br>Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
    },
  ];
let content = document.getElementById("content");

  for (let epi in episodes){
      content.innerHTML += 
      '<li class="card">' +
      '<img alt="Foto de capa do episódio" src="' + 
      episodes[epi].img + '"/>' +
      "<div>" + 
      "<h4>" +  
      episodes[epi].title + "</h4>" +
      "<p>" +  
      episodes[epi].description+ 
      "</p>"
      "</h4></li>";

  }

}

loadEpisodes()

function loadInsades() {
  let insades = [
    {
      img: "./assets/images/inside/survival.svg",
      title: "SURVIVAL",
    },
  
    {
      img: "./assets/images/inside/relationship.svg",
      title: "RELATIONSHIP",
    },
    {
      img: "./assets/images/inside/adventure.svg",
      title: "ADVENTURE",
    },
  ];

  let content = document.getElementById("content-insides");

  for (let insade in insades){
      content.innerHTML += 
      '<li class="insides">' +
      '<img alt="Foto de capa do insides" src="' + 
      insades[insade].img + '"/>' +
      "<p>" +
      insades[insade].title +
      "</p></li>";

  }
}

loadInsades();