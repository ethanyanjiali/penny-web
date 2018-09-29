export const parse = (error) => {
  if (error.response) {
    return error.response.data.message || error.response.data.description;
  }
  return error.message;
};
