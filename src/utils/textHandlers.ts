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


export function calculateReadingTime(text: string): number {
  const words = text.split(' ').length;
  const readingTimeMinutes = words / 200;
  return readingTimeMinutes;
}

export function getOnlyNumbers(text: string): string {
  const numbers = text.replace(/[^0-9]/g, '');
  return numbers;
}