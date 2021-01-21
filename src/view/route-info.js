import AbstractView from "./abstract";

const createRouteInfoTemplate = () =>
  `<div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

              <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
            </div>
          </section>`;

export default class RoutInfo extends AbstractView {
  getTemplate() {
    return createRouteInfoTemplate();
  }
}
