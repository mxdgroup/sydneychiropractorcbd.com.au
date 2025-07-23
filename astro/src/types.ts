export type CarouselItem = {
  type: 'treatment';
  title: string;
  imageUrl: string;
  href: string;
} | {
  type: 'video';
  embedUrl: string;
}; 