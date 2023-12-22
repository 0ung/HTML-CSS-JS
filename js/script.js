window.onload = function () {
  // 이미지 슬라이드 구현
  showSlides();

  // javascript 내용 작성
};

function showSlides() {
  // showSlides 함수 내용 작성
}

function downItem(id, n) {
  document.getElementById(id).addEventListener("mouseover", () => {
    const item = document.querySelectorAll(".drillDown");
    item[n].style.display = "block";
  });
  document.getElementById(id).addEventListener("mouseout", () => {
    const item = document.querySelectorAll(".drillDown");
    item[n].style.display = "none";
  });
}
function extractIds() {
  const menuItems = document.querySelectorAll(".mainMenu > li");
  const ids = [];

  menuItems.forEach((item) => {
    const id = item.getAttribute("id");
    if (id) {
      ids.push(id);
    }
  });

  return ids;
}
function autoDrillDown() {
  const ids = extractIds();
  for (var i = 0; i < ids.length; i++) {
    downItem(ids[i], i);
  }
}

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

autoDrillDown();
autoSlideShow();
