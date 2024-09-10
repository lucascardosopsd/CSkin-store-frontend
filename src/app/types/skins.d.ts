export interface SkinProps {
  id: string;
  name: string;
  image: string;
  category: string;
  float: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface AxiosSkinsResProps {
  skins: SkinProps[];
  pages: number;
}
