const triggerTabList = [].slice.call(document.querySelectorAll("#myTab a"));
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new mdb.Tab(triggerEl);

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    tabTrigger.show();
  });
});
