// function allCV() {
//     document.getElementsByID('img')[0].style.overflow = 'hidden';
//   };
function allCV() {
    document.getElementById("barre").style.overflow = 'auto';
  };

function reset () {
    document.getElementById("barre").style.overflow = 'hidden';
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
}
