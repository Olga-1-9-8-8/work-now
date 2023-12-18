/* eslint-disable unicorn/prefer-top-level-await */
export const getExample = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};
