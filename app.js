let home = document.getElementById("home");
let lessons = document.getElementById("lessons");

home.addEventListener("click", () => {
  location.href = "index.html";
});

lessons.addEventListener("click", () => {
  location.href = "lessons/index.html";
});

function copyContact() {
  /* Get the text field */
  var copyText = document.getElementById("contactMe");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert(
    "\nCopied " +
      copyText.value +
      " to your clipboard \n \nSearch for me on discord by pasting it in to the search box"
  );
}
