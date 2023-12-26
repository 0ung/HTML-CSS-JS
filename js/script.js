function autoSlideShow() {
  const urlLocation = document.querySelectorAll(".imgSlide1");
  let num = 0;

  function setNextImageStyle() {
    if (num < urlLocation.length) {
      // 현재 이미지의 투명도를 1로 설정
      urlLocation[num].style.opacity = 1;
      setTimeout(() => {
        // 1초 후에 투명도를 0으로 설정
        urlLocation[num].style.opacity = 0;
        num += 1;
        setNextImageStyle();
      }, 3000);
      console.log(num);
    } else {
      // 모든 이미지에 대한 스타일 설정이 끝나면 처음으로 돌아감
      num = 0;
      requestAnimationFrame(autoSlideShow);
    }
  }

  // 초기 호출
  setNextImageStyle();
}

function TabMenu() {
  const TabMenu = document.getElementsByClassName("TabMenuA");
  const notice = document.getElementById("notice");
  const gallery = document.getElementById("gallery");

  TabMenu[0].addEventListener("click", () => {
    notice.style.display = "block";
    gallery.style.display = "none";
    TabMenu[0].style.backgroundColor = "white";
    TabMenu[1].style.backgroundColor = "#eeeeee";
  });

  TabMenu[1].addEventListener("click", () => {
    gallery.style.display = "block";
    notice.style.display = "none";
    TabMenu[1].style.backgroundColor = "white";
    TabMenu[0].style.backgroundColor = "#eeeeee";
  });
}

function noticeModal() {
  const notice = document.getElementById("firstLi");
  const modal = document.getElementById("modalWrap");
  notice.addEventListener("click", () => {
    modal.style.display = "block";
  });
}
function closeModal() {
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    const modal = document.getElementById("modalWrap");
    modal.style.display = "none";
  });
}

autoSlideShow();
TabMenu();
noticeModal();
closeModal();
