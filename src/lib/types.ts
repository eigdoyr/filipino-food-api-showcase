export interface Dish {
  id: string;
  name: string;
  description: string;
  type: string[];
  main_ingredients: string[];
  occasion: string[];
  flavor_profile: string[];
  cooking_method: string[];
  origin_region?: string;
  image_url: string;
  image_credit: string;
  tags: string[];
}

export interface DishesResponse {
  data: Dish[];
  meta: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}
