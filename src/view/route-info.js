import {createElement} from "../mock/utils";

const createRouteInfoTemplate = () =>
  `<div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

              <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
            </div>
          </section>`;

export default class RoutInfo {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createRouteInfoTemplate();
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
