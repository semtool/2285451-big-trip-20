import {getAllOffer} from '../mock/trip-offers.js';

export default class OffersModel {
  offers = getAllOffer();

  getOffers() {
    return this.offers;
  }
}
