var cnt = 0;

function sildeShow(i) {
  const imgLocation = [
    "images/photo-1.jpg",
    "images/photo-2.jpg",
    "images/photo-3.jpg",
  ];
  const img = document.getElementById("img1");
  img.setAttribute("src", imgLocation[i]);
}

function prevBtn() {
  if (0 < cnt && cnt <= 2) {
    cnt -= 1;
  } else if (cnt === 0) {
    cnt = 2;
  }
  sildeShow(cnt);
}

function nextBtn() {
  if (0 <= cnt && cnt < 2) {
    cnt += 1;
  } else if (cnt === 2) {
    cnt = 0;
  }
  sildeShow(cnt);
}
