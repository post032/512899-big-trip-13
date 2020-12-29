import {offersItems, cities, transports} from '../mock/utils';
export const createEditPointTemplate = (pointEdit) =>
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${pointEdit.typePoint}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${transports.map((transport) => `<div class="event__type-item">
                    <input id="event-type-${transport.id}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${transport.name}">
                    <label class="event__type-label  event__type-label--${transport.id}" for="event-type-${transport.id}-1">${transport.name}</label>
                   </div>`).join(``)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${pointEdit.typePoint}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${pointEdit.cities}" list="destination-list-1">
          <datalist id="destination-list-1">
          ${cities.map((city) => `<option value="${city}"></option>`).join(``)}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
          —
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            €
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${offersItems.map((offerItem) => `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offerItem.id}" type="checkbox" name="event-offer-luggage" ${offerItem.checked}>
              <label class="event__offer-label" for="event-offer-${offerItem.id}">
                <span class="event__offer-title">${offerItem.name}</span>
                +€&nbsp;
                <span class="event__offer-price">${offerItem.price}</span>
              </label>
            </div>`).join(``)}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${pointEdit.description}</p>
        </section>
      </section>
    </form>
  </li>`;

