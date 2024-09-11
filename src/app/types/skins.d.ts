export type SkinProps = {
  id: string;
  name: string;
  image: string;
  category: string;
  float: number;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type AxiosSkinsResProps = {
  skins: SkinProps[];
  pages: number;
};

export type SkinsListProps = {
  skins: SkinProps[];
};

export type SkinCardProps = {
  skin: SkinProps;
};
