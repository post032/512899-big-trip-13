import {createElement} from "../mock/utils";

const createPriceTemplate = () =>
  `<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
            </p>`;

export default class Price {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createPriceTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
