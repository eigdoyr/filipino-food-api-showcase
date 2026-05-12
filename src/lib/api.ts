import type { Dish, DishesResponse } from "./types";

const API_BASE = "https://filipino-food-api.ryodgie.workers.dev/v1";

/**
 * Fetch all dishes from the API. Used at build time.
 * Iterates pages until we have everything — defensive against the
 * total growing past one page's worth, even though current limit is 100.
 */
export async function fetchAllDishes(): Promise<Dish[]> {
  const dishes: Dish[] = [];
  let page = 1;
  const limit = 100;

  while (true) {
    const res = await fetch(`${API_BASE}/dishes?page=${page}&limit=${limit}`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch dishes: ${res.status} ${res.statusText}`,
      );
    }
    const body = (await res.json()) as DishesResponse;
    dishes.push(...body.data);
    if (page >= body.meta.pages) break;
    page++;
  }

  return dishes;
}
