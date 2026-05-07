function closePanels(){
  document.querySelectorAll('.overlay').forEach(p => p.classList.remove('show'));
}

function showPanel(id){
  closePanels();
  document.getElementById(id).classList.add('show');
}

document.querySelectorAll('.overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e){
    if(e.target === overlay) closePanels();
  });
});
