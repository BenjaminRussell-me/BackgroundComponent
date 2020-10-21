import * as components from "./components";

const RandomBackgrounds = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }
  }
};

export default RandomBackgrounds;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(RandomBackgrounds);
}
