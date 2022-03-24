export const adaptiveHeightCarsList = () =>
  window.innerHeight -
  document.getElementById('mainHeader').clientHeight -
  document.getElementById('bookingHeader').clientHeight -
  window.getComputedStyle(document.getElementById('selectModel-filter'), null).marginTop.match(/\d+/)[0] -
  document.getElementById('selectModel-filter').clientHeight -
  window.getComputedStyle(document.getElementById('carsList'), null).marginTop.match(/\d+/)[0] -
  window.getComputedStyle(document.getElementById('carsList'), null).marginBottom.match(/\d+/)[0] -
  5;
