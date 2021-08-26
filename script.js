fetch("./actors.json")
  .then((res) => res.json())
  .then((response) => {
    showActors(response);
  });

function showActors(actors) {
  const template = document.querySelector(".actortemplate").content;
  actors.forEach((actor) => {
    const copy = template.cloneNode(true);
    copy.querySelector(".fullname").textContent = actor.fullname;
    copy.querySelector(".actor").addEventListener("click", showDetails);
    document.querySelector(".actorlist").appendChild(copy);
    function showDetails() {
      document.querySelector(".infowindow").classList.remove("hidden");
      document.querySelector(".infowindow").classList.add("show");
      document.querySelector(".infowindow h2").textContent = actor.fullname;
      document.querySelector(".infowindow span").textContent = actor.movie;
      document.querySelector(".close").addEventListener("click", closeInfo);
    }
  });
}
function closeInfo() {
  document.querySelector(".infowindow").classList.remove("show");
  document.querySelector(".infowindow").classList.add("hidden");
}
