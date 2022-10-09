"use strict";

/* 
  TODO(Kal):
  - Add all example images into the respective arrays
  - FUTURE: Put this in a json config
*/

const iconReg = [
  "cassie_for_cole.png",
  "fegw5678l.png",
  "hfjklbn.png",
  "megacomm42.png",
  "spoodercom2.b.png",
];
const iconMSP = ["diggs_my_love.png", "mee.png"];
const iconMul = [];
const iconMSPMul = [];

const halfReg = [
  "brtdjxfdhg.png",
  "dwfegrwhtejyrut.png",
  "grubsplatfest.png",
  "jhvjhv.png",
  "kjshcdjbgnfvdcsl.png",
  "megacole2.png",
  "New_Canvasdafsgbzdgnhxmjf.png",
  "rrrex.png",
];
const halfMSP = ["boardone.png", "elllmer.png"];
const halfMul = [
  "animal_frens.png",
  "dfghyjrutkiyl.png",
  "efrgbenrshmjdfkg.lh.png",
];
const halfMSPMul = [];

const fullReg = [
  "adwefgrhtjykly.png",
  "fsgdhm.png",
  "kalidocom.png",
  "megacoom.png",
  "meow.png",
  "mjhytrdsz.png",
  "nene_yashiro.png",
  "ponballooncom.png",
  "squibd.png",
];
const fullMSP = ["fagujsekdlvc.png", "skunktwinkcomm.png"];
const fullMul = [
  "Cooper_-_Dania_and_Peep_Gaming.png",
  "microcom.png",
  "spoodercom3_2.png",
];
const fullMSPMul = [];

const pathnameBase = "assets/image/commission-image/";
const pathnameFull = "full/";
const pathnameHalf = "half/";
const pathnameIcon = "icon/";
const pathnameMul = "multiple/";
const pathnameMSP = "mspaint/";

document.addEventListener("alpine:init", () => {
  Alpine.data("slideshow", () => ({
    slides: new Array(),
    slideIndex: 0,

    get changeSlides() {
      let shortcodeArray;
      Alpine.effect(() => {
        shortcodeArray = this.commissionInfo.shortcode.split("-");
      });
      let pathname = pathnameBase;

      if (shortcodeArray.includes("fb")) {
        pathname += pathnameFull;
        if (shortcodeArray.includes("reg")) {
          this.slides = fullReg;
        } else if (shortcodeArray.includes("msp")) {
          pathname += pathnameMSP;
          this.slides = fullMSP;
        }
        if (shortcodeArray.includes("mul")) {
          pathname += pathnameMul;
          this.slides = fullMul;
        }
      } else if (shortcodeArray.includes("hb")) {
        pathname += pathnameHalf;
        if (shortcodeArray.includes("reg")) {
          this.slides = halfReg;
        } else if (shortcodeArray.includes("msp")) {
          pathname += pathnameMSP;
          this.slides = halfMSP;
        }
        if (shortcodeArray.includes("mul")) {
          pathname += pathnameMul;
          this.slides = halfMul;
        }
      } else if (shortcodeArray.includes("ic")) {
        pathname += pathnameIcon;
        if (shortcodeArray.includes("reg")) {
          this.slides = iconReg;
        } else if (shortcodeArray.includes("msp")) {
          pathname += pathnameMSP;
          this.slides = iconMSP;
        }
        if (shortcodeArray.includes("mul")) {
          pathname += pathnameMul;
          this.slides = iconMul;
        }
      }

      // HACK(Kal):
      // for some weird reason arrays with only two objects bug out,
      // so this tacky hack exists to duplicate the elements
      if (this.slides.length === 2) {
        this.slides = this.slides.reduce((a, i) => a.concat(i, i), []);
      }

      this.slideIndex++;
      let localIndex = this.slideIndex % this.slides.length;

      if (
        !urlExists(
          window.location.origin +
            "/" +
            pathname.concat(this.slides[localIndex])
        )
      ) {
        return pathnameBase.concat("placeholder/SORRY.png");
      }
      return pathname.concat(this.slides[localIndex]);
    },
  }));
});

function urlExists(url) {
  const http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  return http.status !== 404;
}
