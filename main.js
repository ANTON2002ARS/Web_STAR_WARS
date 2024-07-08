let obg_films = document.getElementById("films_lines");
let obj_Story = document.getElementById("storyline");
let obj_Codex = document.getElementById("codex");
// let obj_Technic = document.getElementById("technic");

//времено
All_Close();

function Show_Films() {
  All_Close();
  if (obg_films.style.display == "none") {
    obg_films.style.display = "grid";
    obj_Story.style.display = "none";
  } else {
    obg_films.style.display = "none";
  }
}

function Show_Story_Line() {
  All_Close();
  if (obj_Story.style.display == "none") {
    obj_Story.style.display = "block";
  } else {
    obj_Story.style.display = "none";
  }
}

function Show_Heros() {
  All_Close();
  if (obj_Codex.style.display == "none") {
    obj_Codex.style.display = "flex";
  } else {
    obj_Codex.style.display = "none";
  }
}

function Show_Technic() {
  All_Close();
  if (obj_Technic.style.display == "none") {
    obj_Technic.style.display = "flex";
  } else {
    obj_Technic.style.display = "none";
  }
}

function All_Close() {
  obg_films.style.display = "none";
  obj_Story.style.display = "none";
  obj_Codex.style.display = "none";
  obj_Technic.style.display = "none";
}
