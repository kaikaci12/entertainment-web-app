type Thumbnail = {
  small: string;
  large: string;
};

type RegularThumbnail = {
  small: string;
  medium: string;
  large: string;
};

type ThumbnailSet = {
  trending?: Thumbnail;
  regular: RegularThumbnail;
};

export type TMovie = {
  title: string;
  thumbnail: ThumbnailSet;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};
