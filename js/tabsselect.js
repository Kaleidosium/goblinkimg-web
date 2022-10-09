"use strict";

document.addEventListener("alpine:init", () => {
  Alpine.data("tabsSelect", () => ({
    // tab buttons
    tabButtons: [...document.querySelectorAll("button[role=tab]")],

    init() {
      // initialize main function
      this.changeTab();
    },

    // main function
    changeTab() {
      this.tabButtons.forEach((tabButton) => {
        tabButton.addEventListener("click", (e) => {
          e.preventDefault();
          const tabContainer = e.target.parentElement.parentElement;
          const targetId = e.target.getAttribute("aria-controls");
          this.tabButtons.forEach((_tabButton) =>
            _tabButton.setAttribute("aria-selected", false)
          );
          tabButton.setAttribute("aria-selected", true);
          tabContainer
            .querySelectorAll("[role=tabpanel]")
            .forEach((tabPanel) => tabPanel.setAttribute("hidden", true));
          tabContainer
            .querySelector(`[role=tabpanel]#${targetId}`)
            .removeAttribute("hidden");
        });
      });
    },
  }));
});
