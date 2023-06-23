// console.log("ok");


//#region Dynamic resume Tabs
const tabsResumeSectionTarget = document.querySelector(
  "#wrapper-tabs-section-resume"
);
const resumeTabs = tabsResumeSectionTarget.querySelectorAll('[role="tab"]');
const resumeTabsContent = tabsResumeSectionTarget.querySelectorAll('[role="tabpanel"]');

tabsResumeSectionTarget.onclick = function(e)  {
  const id = e.target.id;
  console.log(id);
  if (id) {
    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.ariaSelected =false;
    });
    e.target.classList.add("active");
  
e.target.ariaSelected =true;
resumeTabsContent.forEach((content) => {
  content.classList.remove("show", "active");
  
 
});
    const element = document.getElementById(id+"s");
    element.classList.add("show", "active");
    
  }
};

