window.onload = () => {
  changeImg();
  noticeAndGallery();
  modal();
};
function changeImg() {
  const urlLocation = document.querySelectorAll(".asd");
  const spanLocation = document.querySelectorAll(".asd1");
  var i = 0;
  function setNext() {
    if (i < urlLocation.length) {
      urlLocation[i].style.opacity = 1;
      spanLocation[i].style.opacity = 1;
      setTimeout(() => {
        urlLocation[i].style.opacity = 0;
        spanLocation[i].style.opacity = 0;
        i++;
        setNext();
      }, 3000);
    } else {
      num = 0;
      changeImg();
    }
  }

  setNext();
}

function noticeAndGallery() {
  const notice = document.getElementById("notice");
  const gallery = document.getElementById("gallery");
  const noticeBtn = document.getElementById("noticeBtn");
  const galleryBtn = document.getElementById("galleryBtn");

  noticeBtn.addEventListener("click", () => {
    notice.style.display = "block";
    gallery.style.display = "none";
    noticeBtn.style.backgroundColor = "black";
    noticeBtn.style.color = "white";
    galleryBtn.style.backgroundColor = " #ccc";
    galleryBtn.style.color = "blueviolet";
  });

  galleryBtn.addEventListener("click", () => {
    notice.style.display = "none";
    gallery.style.display = "block";
    galleryBtn.style.backgroundColor = "black";
    galleryBtn.style.color = "white";
    noticeBtn.style.backgroundColor = "#ccc";
    noticeBtn.style.color = "blueviolet";
  });
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function modal() {
  const modal = document.getElementById("modal");
  const notice = document.getElementById("firstNotice");

  notice.addEventListener("click", () => {
    modal.style.display = "block";
  });
}
