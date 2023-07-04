var isMainMenuActive = false;
var isSubMenuActive = false;
var isSubSubMenuActive = false;

$(".menu-button").click(function () {
  isMainMenuActive = true;
  isSubMenuActive = false;
  isSubSubMenuActive = false;
  $(".menu-button").addClass("hide");
  $(".close-button").removeClass("hide");
  $(".menu-modal").removeClass("hide");
});

$(".close-button").click(function () {
  isMainMenuActive = false;
  isSubMenuActive = false;
  isSubSubMenuActive = false;
  $(".menu-button").removeClass("hide");
  $(".close-button").addClass("hide");
  $(".menu-modal").addClass("hide");
  $(".menu-modal-two").slideUp(300).removeClass("two-active");
  $(".menu-modal-three").slideUp(300).removeClass("three-active");
});

$(".menu-modal-two").parent("li").click(function () {
  isSubMenuActive = true;
  $(this).find(">.menu-modal-two").not(':animated').slideDown(300);
  $(this).find(">.menu-modal-two").addClass("two-active");
});

$(".menu-modal-three").parent("li").click(function () {
  isSubSubMenuActive = true;
  $(".menu-modal-three.three-active").slideUp(300).removeClass("three-active");
  $(this).find(">.menu-modal-three").not(':animated').slideDown(300);
  $(this).find(">.menu-modal-three").addClass("three-active");
});

$(".menu-modal-two > .common-title > button").click(function () {
  isSubMenuActive = false;
  isSubSubMenuActive = false;
  $(".menu-modal-three").slideUp(300).removeClass("three-active");
  $(".menu-modal-two").slideUp(300).removeClass("two-active");
});

$(".menu-modal-three > .common-title > button").click(function () {
  isSubSubMenuActive = false;
  $(".menu-modal-three").slideUp(300).removeClass("three-active");
});

$(".main-menu-list").click(function () {
  if (isSubMenuActive) {
    if ($(this).find(">.menu-modal-two").length === 0) {
      $(".menu-modal-three").slideUp(300).removeClass("three-active");
      $(".menu-modal-two").slideUp(300).removeClass("two-active");
    }
  }
})
// sub header form script
$("#rego").click(function () {
  $(".mobile-vehicle.active").removeClass("active");
  $(".mobile-rego").addClass("active");
  $(".form-block.vehicle").slideUp(300).removeClass("active-form");
  $(".form-block.rego").slideDown(300).addClass("active-form");
})

$("#vehicle").click(function () {
  $(".mobile-vehicle").addClass("active");
  $(".mobile-rego.active").removeClass("active");
  $(".form-block.rego").slideUp(300).removeClass("active-form");
  $(".form-block.vehicle").slideDown(300).addClass("active-form");
})