const About = {
  async init() {
    this._initializeAccordion();
  },

  _initializeAccordion() {
    const accordionItem = document.querySelector('accordion-item');
    if (accordionItem) {
      accordionItem.init();
    }
  },
};

export default About;
