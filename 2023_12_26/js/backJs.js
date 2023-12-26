window.onload = () => {
  changeImg();
};
function changeImg() {
  const urlLocation = document.querySelectorAll(".asd");
  var i = 0;
  function setNext() {
    if (i < urlLocation.length) {
      urlLocation[i].style.opacity = 1;
      setTimeout(() => {
        urlLocation[i].style.opacity = 0;
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

function noticeBtn() {
  const noticeHtml = document.createElement("div");
  const notices = document.getElementById("notices");

  noticeHtml.innerHTML =
    "<ul><li>1.공지사항</li><li>2.공지사항</li><li>3.공지사항</li><li>4.공지사항</li></ul>";
  if (notices.childNodes != null) {
  } else {
    document.getElementById("notices").appendChild(noticeHtml);
  }
}
function galleryBtn() {
  const noticeGallery = document.createElement("div");
  const notices = document.getElementById("notices");
  noticeGallery.innerHTML =
    "<ul><li><img src='/resource/icon-1.jpg'></li><li><img src='/resource/icon-2.jpg'></li><li><img src='/resource/icon-3.jpg'></li></ul>";
  if (notices.childNodes != null) {
  } else {
    document.getElementById("notices").appendChild(noticeGallery);
  }
}
