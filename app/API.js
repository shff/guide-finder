import { tours } from "./data.json";

class TourFinderAPI {
  constructor() {
    this.tours = tours.map((tour, index) => ({ id: index, ...tour }));
  }
  query(query, specialOnly, sortBy) {
    const filtered = this.tours.filter(this.matchFunction(query, specialOnly));
    const sorted = filtered.sort(this.sortFunction(sortBy));
    const mapped = sorted.map(this.mapFunction);

    return mapped;
  }
  matchFunction(query, specialOnly) {
    return (tour) => {
      const matchesText = tour.title.toLowerCase().includes(query.toLowerCase());
      const matchesSpecial = tour.isSpecialOffer || !specialOnly;

      return matchesText && matchesSpecial;
    };
  }
  sortFunction(sortBy) {
    if (sortBy == "price")
      return (a, b) => a.price - b.price;
    else if (sortBy == "rating")
      return (a, b) => b.rating - a.rating;
    else
      return () => 0;
  }
  mapFunction(tour) {
    return {
      id: tour.id,
      title: tour.title,
      image: `https://placeimg.com/640/480/arch/${tour.id}`,
      tag: `${tour.currency} ${tour.price}`,
      ribbon: tour.isSpecialOffer ? "Special!" : null,
      rating: tour.rating
    };
  }
}

export default new TourFinderAPI();
