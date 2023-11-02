export const getUserRepositories = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`, {
    cache: "force-cache",
  });
    const res = await response.json();
    return res 
}