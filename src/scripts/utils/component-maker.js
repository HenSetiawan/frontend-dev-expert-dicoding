exports.renderComponent = (componentName, containerSelector, setter, data) => {
  const parentComponent = document.querySelector(containerSelector);
  const component = document.createElement(componentName);
  if (setter !== undefined && data !== undefined) {
    component[setter] = data;
  }
  parentComponent.appendChild(component);
};
