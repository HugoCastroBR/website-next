export function truncateText(text: string, start: number, end: number): string {
  if (text.length <= end) {
    return text;
  }

  let truncatedText = text.substring(start, end);
  const lastSpaceIndex = truncatedText.lastIndexOf(' ');

  if (lastSpaceIndex !== -1) {
    truncatedText = truncatedText.substring(0, lastSpaceIndex);
  }

  return truncatedText + '...';
}

export function getOnlyInitials(text:string){
  const words = text.split(' ')
  let initials = ''
  words.forEach(word => {
    initials += word[0]
  });
  return initials.toUpperCase()
}