const removeContentStorage = () => {
  // localStorage.removeItem('prevPath');
  // localStorage.removeItem('details');
  sessionStorage.removeItem('prevPath');
  sessionStorage.removeItem('details');
};

export default removeContentStorage;
