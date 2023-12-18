/* eslint-disable unicorn/prefer-top-level-await */
export const getExample2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};
