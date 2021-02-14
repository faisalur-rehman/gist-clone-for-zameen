export const fetchData = async (name) => {
  const response = await fetch(`https://api.github.com/users/${name}/gists`);
  const data = await response.json();
  return data;
};

export const fetchForksUrl = async (url, i, gists) => {
  let langArray = [];
  let response = await fetch(url);
  let data = await response.json();
  for (const [key] of Object.entries(gists[i].files)) {
    if (gists[i].files[key].language !== null)
      langArray.push(gists[i].files[key].language);
  }

  return { language: langArray, userData: data, repoId: gists[i].id };
};
