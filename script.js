function closeAll(){
  document.getElementById("menuModal").classList.remove("show");
  document.getElementById("gamesModal").classList.remove("show");
  document.getElementById("chatModal").classList.remove("show");
}

function openMenu(){
  closeAll();
  document.getElementById("menuModal").classList.add("show");
}

function openGames(){
  closeAll();
  document.getElementById("gamesModal").classList.add("show");
}

function openChat(){
  closeAll();
  document.getElementById("chatModal").classList.add("show");
}
