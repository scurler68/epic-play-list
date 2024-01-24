const epicMix = [
  "Getaway Car",
  "brutal",
  "Cruel Summer",
  "Kill Bill",
  "Delicate",
  "PURE/HONEY",
  "We're Good",
  "Come Undone",
  "Motion Sickness",
  "Pool",
  "The Ghost in You",
  "About Damn Time",
  "Emily, I'm sorry"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

total.innerText = `${epicMix.length} Great Songs`;

const mixInfo = function () {
  epicMix.forEach(function (song, index) {
    const songList = document.createElement("li");
    songList.innerHTML = `<span class="song-number">#${
      index + 1
    }</span> ${song}`;
    mixList.append(songList);
  });
};

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});
