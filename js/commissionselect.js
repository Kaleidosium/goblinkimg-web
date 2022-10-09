"use strict";

document.addEventListener("alpine:init", () => {
  Alpine.data("commissionSelect", () => ({
    body_part__select: "Icon",
    commission_type__select: "Regular (SAI)",
    multi_character__select: false,

    get commissionInfo() {
      let commission_price;
      let shortcode;

      // TODO(Kal): Put this in a config file
      if (this.commission_type__select === "Regular (SAI)") {
        switch (this.body_part__select) {
          case "Fullbody":
            commission_price = 20;
            shortcode = "fb-reg";
            break;
          case "Halfbody":
            commission_price = 15;
            shortcode = "hb-reg";
            break;
          case "Icon":
            commission_price = 10;
            shortcode = "ic-reg";
            break;
        }
      } else if (this.commission_type__select === "MS Paint") {
        switch (this.body_part__select) {
          case "Fullbody":
            commission_price = 15;
            shortcode = "fb-msp";
            break;
          case "Halfbody":
            commission_price = 15;
            shortcode = "hb-msp";
            break;
          case "Icon":
            commission_price = 10;
            shortcode = "ic-msp";
            break;
        }
      }

      if (this.multi_character__select) {
        shortcode += "-mul";
        return Alpine.reactive({
          commission_price: commission_price * 1.5,
          shortcode: shortcode,
        });
      }
      return Alpine.reactive({
        commission_price: commission_price,
        shortcode: shortcode,
      });
    },
  }));
});
