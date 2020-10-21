import _get from "lodash/get";
export default (hotel) => ({
  name: _get(hotel, "name.en", ""),
  chain: _get(hotel, "hotelChainId", null),
  starRating: _get(hotel, "starRating", 0),
  facilityIds: _get(hotel, "facilityIds", []),
});
