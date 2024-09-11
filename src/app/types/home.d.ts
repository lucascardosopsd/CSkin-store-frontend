export interface HomeProps {
  searchParams?: {
    name?: string;
    category?: string;
    order?: string;
    orderBy?: string;
    startPrice?: string;
    endPrice?: string;
    float?: string;
    page?: string;
  };
}
