export const convertDate = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export const convertSecondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  if(secondsLeft < 10) return `${minutes}:0${secondsLeft.toFixed(0)}`;
  return `${minutes}:${secondsLeft.toFixed(0)}`;
}