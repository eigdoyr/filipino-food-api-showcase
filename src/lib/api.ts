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

export interface FilterOptions {
  type: string[];
  occasion: string[];
  region: string[];
  flavor_profile: string[];
}

/**
 * Extract unique, sorted filter values from a dish list.
 * Runs at build time alongside fetchAllDishes.
 */
export function extractFilterOptions(dishes: Dish[]): FilterOptions {
  const collect = (getter: (d: Dish) => string[]) => {
    const set = new Set<string>();
    for (const d of dishes) for (const v of getter(d)) if (v) set.add(v);
    return Array.from(set).sort();
  };

  return {
    type: collect((d) => d.type),
    occasion: collect((d) => d.occasion),
    region: collect((d) => (d.origin_region ? [d.origin_region] : [])),
    flavor_profile: collect((d) => d.flavor_profile),
  };
}
