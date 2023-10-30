export const getUserRepositories = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`, {
    cache: "force-cache",
  });
    const res = await response.json();
    return res 
  } catch (error) {
    console.log(error)
  }
}