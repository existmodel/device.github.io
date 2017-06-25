var popupOpen = document.querySelector(".pop-up-open");
var popup = document.querySelector(".pop-up");
var popupOverlay = document.querySelector(".pop-up-overlay");

if (popup) {
  var popupClose = popup.querySelector(".pop-up-close");
  var userName = popup.querySelector("[name=user-name]");
  var userEmail = popup.querySelector("[name=user-email]");
  var popupForm = popup.querySelector("form");
  popupForm.addEventListener("submit", function (event) {
  if (!userName.value || !userEmail.value) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    } 
  });
}

if (popupOpen) {
  popupOpen.addEventListener("click", function (event) {
    event.preventDefault();
    popupOverlay.classList.add("popup-overlay-show");
    popup.classList.add("popup-content-show");
    userName.focus();
  });
}

if (popupClose) {
  popupClose.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("popup-content-show");
    popup.classList.remove("popup-error");
    popupOverlay.classList.remove("popup-overlay-show");
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup){
      if (popup.classList.contains("popup-content-show")) {
        popup.classList.remove("popup-content-show");
        popup.classList.remove("popup-error");
        popupOverlay.classList.remove("popup-overlay-show");
      }
    }
  }
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".pop-up-map");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".pop-up-close");
}

if (mapOpen){
  mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("popup-map-show");
    popupOverlay.classList.add("popup-overlay-show");
  });
}

if (mapClose){
  mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("popup-map-show");
     popupOverlay.classList.remove("popup-overlay-show");
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup) {
      if (mapPopup.classList.contains("popup-map-show")) {
        mapPopup.classList.remove("popup-map-show");
        popupOverlay.classList.remove("popup-overlay-show");
      }
    }
  }
});

var slideDotOne = document.querySelector(".slider-dot-one");
var slideDotTwo = document.querySelector(".slider-dot-two");
var slideDotThree = document.querySelector(".slider-dot-three");
var slideOne = document.querySelector(".slide-promo-one");
var slideTwo = document.querySelector(".slide-promo-two");
var slideThree = document.querySelector(".slide-promo-three");

if (slideDotOne) {
  slideDotOne.addEventListener("click", function (event) {
    slideTwo.classList.add("hide-slide");
    slideOne.classList.remove("hide-slide");
    slideThree.classList.add("hide-slide");
    slideDotOne.classList.add("dot-active");
    slideDotTwo.classList.remove("dot-active");
    slideDotThree.classList.remove("dot-active");
  });
}

if (slideDotTwo) {
  slideDotTwo.addEventListener("click", function (event) {
    slideTwo.classList.remove("hide-slide");
    slideOne.classList.add("hide-slide");
    slideThree.classList.add("hide-slide");
    slideDotOne.classList.remove("dot-active");
    slideDotTwo.classList.add("dot-active");
    slideDotThree.classList.remove("dot-active");
  });
}

if (slideDotThree) {
  slideDotThree.addEventListener("click", function (event) {
    slideTwo.classList.add("hide-slide");
    slideOne.classList.add("hide-slide");
    slideThree.classList.remove("hide-slide");
    slideDotOne.classList.remove("dot-active");
    slideDotTwo.classList.remove("dot-active");
    slideDotThree.classList.add("dot-active");
  });
}


var slideDeliveryBtn = document.querySelector(".service-slider-delivery");
var slideGuaranteeBtn = document.querySelector(".service-slider-guarantee");
var slideCreditBtn = document.querySelector(".service-slider-credit");
var slideDelivery = document.querySelector(".slide-delivery");
var slideGuarantee = document.querySelector(".slide-guarantee");
var slideCredit = document.querySelector(".slide-credit");

if (slideDeliveryBtn) {
  slideDeliveryBtn.addEventListener("click", function (event) {
    slideDelivery.classList.remove("hide-slide");
    slideGuarantee.classList.add("hide-slide");
    slideCredit.classList.add("hide-slide");
    slideGuaranteeBtn.classList.remove("active-btn");
    slideCreditBtn.classList.remove("active-btn");
    slideDeliveryBtn.classList.add("active-btn");
  });
}

if (slideGuaranteeBtn) {
  slideGuaranteeBtn.addEventListener("click", function (event) {
    slideGuarantee.classList.toggle("hide-slide");
    slideDelivery.classList.add("hide-slide");
    slideCredit.classList.add("hide-slide");
    slideDeliveryBtn.classList.remove("active-btn");
    slideCreditBtn.classList.remove("active-btn");
    slideGuaranteeBtn.classList.add("active-btn");
  });
}

if (slideCreditBtn) {
  slideCreditBtn.addEventListener("click", function (event) {
    slideCredit.classList.toggle("hide-slide");
    slideDelivery.classList.add("hide-slide");
    slideGuarantee.classList.add("hide-slide");
    slideDeliveryBtn.classList.remove("active-btn");
    slideGuaranteeBtn.classList.remove("active-btn");
    slideCreditBtn.classList.add("active-btn");
  });
}