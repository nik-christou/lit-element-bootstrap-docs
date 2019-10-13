import { h as html } from '../common/lit-html-9b6153da.js';
import { css, LitElement } from '../lit-element.js';
import { B as BsContentRebootCss } from '../common/bs-content-reboot.css-c5865ddd.js';

const BsCarouselCss = css`

    :host {
        display: block;
        position: relative;
    }

    :host(:hover),
    :host(:focus) {
        color: #fff;
        text-decoration: none;
        outline: 0;
    }

    .carousel-inner {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
`;

const Direction = {
  NEXT: 'next',
  PREV: 'prev',
  LEFT: 'left',
  RIGHT: 'right'
};
class BsCarousel extends LitElement {
  static get properties() {
    return {
      interval: {
        type: Number,
        reflect: true
      },
      keyboard: {
        type: Boolean,
        reflect: true
      },
      pause: {
        type: Boolean,
        reflect: true
      },
      ride: {
        type: String,
        reflect: true
      },
      wrap: {
        type: Boolean,
        reflect: true
      },
      slide: {
        type: Boolean,
        reflect: true
      },
      fade: {
        type: Boolean,
        reflect: true
      },
      _isSliding: Boolean,
      _isPaused: Boolean,
      _intervalId: Number,
      _touchTimeoutId: Number
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsCarouselCss];
  }

  render() {
    return html`
            <slot name="indicators"></slot>
            <div class="carousel-inner">
                <slot id="items"></slot>
                <slot name="control-prev"></slot>
                <slot name="control-next"></slot>
            </div>
        `;
  }

  constructor() {
    super();
    this.interval = 5000;
    this.keyboard = true;
    this.pause = 'hover';
    this.ride = 'carousel';
    this.wrap = true;
    this.slide = 'next';
    this.fade = false;
    this._isSliding = false;
    this._isPaused = false;
  }

  firstUpdated() {
    this.addEventListener('bs-carousel-control-prev-click', () => this._prev());
    this.addEventListener('bs-carousel-control-next-click', () => this._next());
    this.addEventListener('bs-carousel-indicator-click', event => this._handleIndicatorClick(event));

    if (this.fade) {
      this._setCarouselItemsToFade();
    }

    if (this.keyboard) {
      this.setAttribute('tabIndex', '1');
      this.addEventListener('keydown', event => this._handleArrowKeys(event));
    }

    if (this.pause === 'hover') {
      this.addEventListener('mouseenter', event => this._handlePauseOnMouseEnter(event));
      this.addEventListener('mouseleave', event => this._handleResumeOnMouseLeave(event));

      if ('ontouchstart' in document.documentElement) {
        this.addEventListener('touchend', event => this._handlePauseOnTouch(event));
      }
    }

    if (this.interval) {
      this._cycle();
    }
  }

  _handlePauseOnMouseEnter(event) {
    this._pause(event);
  }

  _handleResumeOnMouseLeave(event) {
    this._cycle(event);
  }

  _handlePauseOnTouch(event) {
    this._pause(event);

    if (this._touchTimeoutId) {
      clearTimeout(this._touchTimeoutId);
    }

    const TOUCHEVENT_COMPAT_WAIT = 500;

    const resumeFunction = this._resumeFunction.bind(this);

    const resumeTimeout = this.interval + TOUCHEVENT_COMPAT_WAIT;
    this._touchTimeoutId = setTimeout(resumeFunction, resumeTimeout);
  }

  _resumeFunction(event) {
    return this._cycle(event);
  }

  _handleArrowKeys(event) {
    const targetTagName = event.target.tagName;

    if (targetTagName === 'INPUT' || targetTagName === 'TEXTAREA') {
      return;
    }

    const ARROW_LEFT_KEYCODE = 37;
    const ARROW_RIGHT_KEYCODE = 39;

    switch (event.which) {
      case ARROW_LEFT_KEYCODE:
        event.preventDefault();

        this._prev();

        break;

      case ARROW_RIGHT_KEYCODE:
        event.preventDefault();

        this._next();

        break;

      default:
        break;
    }
  }

  _handleIndicatorClick(event) {
    const slideIndex = event.detail.index;

    if (slideIndex >= 0) {
      this._to(slideIndex);
    }
  }

  _prev() {
    if (!this._isSliding) {
      this._slide(Direction.PREV);
    }
  }

  _next() {
    if (!this._isSliding) {
      this._slide(Direction.NEXT);
    }
  }

  _nextWhenVisible() {
    const documentIsHidden = document.hidden;
    const hostVisible = window.getComputedStyle(this.shadowRoot.host, ':visible');
    const hostVisibility = window.getComputedStyle(this.shadowRoot.host).getPropertyValue('visibility'); // Don't call next if:
    // - the page isn't visible
    // - the carousel isn't visible
    // - the parent node isn't visible

    if (!documentIsHidden && hostVisible && hostVisibility !== 'hidden') {
      this._next();
    }
  }

  _pause(event) {
    if (!event) {
      this._isPaused = true;
    }

    const carouselItemHaveNextOrPrev = this._carouselItemsHaveNextOrPrev();

    if (carouselItemHaveNextOrPrev) {
      this._isSliding = false;

      this._cycle(true);
    }

    clearInterval(this._intervalId);
    this._intervalId = null;
  }

  _cycle(event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }

    if (this.interval && !this._isPaused) {
      const nextFunction = this._cycleFunction.bind(this);

      this._intervalId = setInterval(nextFunction, this.interval);
    }
  }

  _cycleFunction() {
    if (document.visibilityState) {
      return this._nextWhenVisible();
    } else {
      return this._next();
    }
  }

  _to(index) {
    const carouselItems = this._retrieveCarouselItems();

    const activeElement = this._extractActiveCarouseItem(carouselItems);

    const activeElementIndex = this._getCarouselItemIndex(carouselItems, activeElement);

    if (activeElementIndex > carouselItems.length - 1 || activeElementIndex < 0) {
      return;
    }

    if (this._isSliding) {
      activeElement.addEventListener('bs-carousel-slide', () => this._to(index), {
        once: true
      });
      return;
    }

    if (activeElementIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    const direction = index > activeElementIndex ? Direction.NEXT : Direction.PREV;
    const targetElement = carouselItems[index];

    this._slide(direction, targetElement);
  }

  _slide(direction, targetElement) {
    const carouselItems = this._retrieveCarouselItems();

    const activeElement = this._extractActiveCarouseItem(carouselItems);

    const activeElementIndex = this._getCarouselItemIndex(carouselItems, activeElement);

    let nextElement;
    let nextElementIndex;

    if (targetElement) {
      nextElement = targetElement;
      nextElementIndex = this._getCarouselItemIndex(carouselItems, targetElement);
    } else {
      nextElement = this._getNextItemByDirection(direction, activeElement, carouselItems);
      nextElementIndex = this._getCarouselItemIndex(carouselItems, nextElement);
    }

    const isCycling = Boolean(this._intervalId);
    let directionalClassName;
    let orderClassName;
    let eventDirectionName;

    if (direction === Direction.NEXT) {
      directionalClassName = 'left';
      orderClassName = 'next';
      eventDirectionName = Direction.LEFT;
    } else {
      directionalClassName = 'right';
      orderClassName = 'prev';
      eventDirectionName = Direction.RIGHT;
    }

    if (nextElement && nextElement.hasAttribute('active')) {
      this._isSliding = false;
      return;
    }

    const slideEventResult = this._triggerSlideEvent(activeElementIndex, nextElement, nextElementIndex, eventDirectionName);

    if (!slideEventResult) {
      return;
    }

    if (!activeElement || !nextElement) {
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this._pause();
    }

    this._setActiveIndicatorElement(nextElementIndex);

    const slideTransitionCompleteEvent = new CustomEvent('bs-carousel-slide-before-transition', {
      bubbles: true,
      composed: true,
      detail: {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      }
    });

    if (this.slide) {
      nextElement.setAttribute(orderClassName, '');
      nextElement.offsetHeight;
      activeElement.setAttribute(directionalClassName, '');
      nextElement.setAttribute(directionalClassName, '');
      activeElement.addEventListener('transitionend', () => {
        nextElement.removeAttribute(directionalClassName);
        nextElement.removeAttribute(orderClassName);
        nextElement.setAttribute('active', '');
        activeElement.removeAttribute('active');
        activeElement.removeAttribute(orderClassName);
        activeElement.removeAttribute(directionalClassName);
        this._isSliding = false;
        this.dispatchEvent(slideTransitionCompleteEvent);
      }, {
        once: true
      });
    } else {
      activeElement.removeAttribute('active');
      nextElement.setAttribute('active', '');
      this._isSliding = false;
      this.dispatchEvent(slideTransitionCompleteEvent);
    }

    if (isCycling) {
      this._cycle();
    }
  }

  _getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    }

    let transitionDuration = window.getComputedStyle(element).getPropertyValue('transition-duration');
    const floatTransitionDuration = parseFloat(transitionDuration);

    if (!floatTransitionDuration) {
      return 0;
    }

    transitionDuration = transitionDuration.split(',')[0];
    return parseFloat(transitionDuration) * 1000;
  }

  _triggerSlideEvent(activeElementIndex, nextElement, nextElementIndex, eventDirectionName) {
    const slideEvent = new CustomEvent('bs-carousel-slide', {
      bubbles: true,
      composed: true,
      detail: {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      }
    });
    return this.dispatchEvent(slideEvent);
  }

  _setActiveIndicatorElement(nextElementIndex) {
    const indicatorsSlot = this.shadowRoot.querySelector('slot[name="indicators"]');

    if (indicatorsSlot) {
      const indicatorsSlotNodes = indicatorsSlot.assignedNodes();

      const carouselIndicatorsElement = this._extractOnlyCarouselIndicators(indicatorsSlotNodes);

      if (carouselIndicatorsElement) {
        carouselIndicatorsElement.updateActiveIndicatorElement(nextElementIndex);
      }
    }
  }

  _getNextItemByDirection(direction, activeItem, carouselItems) {
    const isNextDirection = direction === Direction.NEXT;
    const isPrevDirection = direction === Direction.PREV;

    const activeItemIndex = this._getCarouselItemIndex(carouselItems, activeItem);

    const lastItemIndex = carouselItems.length - 1;
    const isGoingToWrap = isPrevDirection && activeItemIndex === 0 || isNextDirection && activeItemIndex === lastItemIndex;

    if (isGoingToWrap && !this.wrap) {
      return activeItem;
    }

    const delta = direction === Direction.PREV ? -1 : 1;
    const itemIndex = (activeItemIndex + delta) % carouselItems.length;

    if (itemIndex === -1) {
      return carouselItems[carouselItems.length - 1];
    }

    return carouselItems[itemIndex];
  }

  _retrieveCarouselItems() {
    const slotNode = this.shadowRoot.querySelector('slot#items');
    const slotNodes = slotNode.assignedNodes();

    const carouselItems = this._extractOnlyCarouselItems(slotNodes);

    return carouselItems;
  }

  _setCarouselItemsToFade() {
    const carouselItems = this._retrieveCarouselItems();

    for (let index = 0; index < carouselItems.length; index++) {
      const carouselItem = carouselItems[index];

      if (this._isCarouselItemElement(carouselItem)) {
        carouselItem.setAttribute('fade', '');
      }
    }
  }

  _carouselItemsHaveNextOrPrev() {
    const carouselItems = this._retrieveCarouselItems();

    for (let index = 0; index < carouselItems.length; index++) {
      const carouselItem = carouselItems[index];

      if (this._isCarouselItemElement(carouselItem)) {
        if (carouselItem.hasAttribute(Direction.NEXT) || carouselItem.hasAttribute(Direction.PREV)) {
          return true;
        }
      }
    }

    return false;
  }

  _getCarouselItemIndex(carouselItems, carouselItem) {
    return carouselItems.indexOf(carouselItem);
  }

  _extractActiveCarouseItem(carouselItems) {
    for (let index = 0; index < carouselItems.length; index++) {
      const carouselItem = carouselItems[index];

      if (this._isCarouselItemActive(carouselItem)) {
        return carouselItem;
      }
    }
  }

  _extractOnlyCarouselIndicators(slotNodes) {
    for (let index = 0; index < slotNodes.length; index++) {
      const slotItem = slotNodes[index];

      if (this._isCarouselIndicatorsElement(slotItem)) {
        return slotItem;
      }
    }
  }

  _extractOnlyCarouselItems(slotNodes) {
    const elementNodes = [];

    for (let index = 0; index < slotNodes.length; index++) {
      const slotItem = slotNodes[index];

      if (this._isCarouselItemElement(slotItem)) {
        elementNodes.push(slotItem);
      }
    }

    return elementNodes;
  }

  _isCarouselItemActive(carouselItem) {
    return carouselItem.hasAttribute('active');
  }

  _isCarouselItemElement(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.localName === 'bs-carousel-item';
  }

  _isCarouselIndicatorsElement(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.localName === 'bs-carousel-indicators';
  }

}
if (!window.customElements.get("bs-carousel")) window.customElements.define('bs-carousel', BsCarousel);

const BsCarouselItemCss = css`

    :host {
        position: relative;
        display: none;
        align-items: center;
        width: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000px;
        perspective: 1000px;
    }

    :host([active]),
    :host([next]),
    :host([prev]) {
        display: block;
        transition: -webkit-transform 0.6s ease;
        transition: transform 0.6s ease;
        transition: transform 0.6s ease, -webkit-transform 0.6s ease;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        :host([active]),
        :host([next]),
        :host([prev]) {
            transition: none;
        }
    }

    :host([active]),
    :host([next]),
    :host([prev]) {
        display: block;
    }

    :host([next]),
    :host([prev]) {
        position: absolute;
        top: 0;
    }

    :host([next][left]),
    :host([prev][right]) {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        :host([next][left]),
        :host([prev][right]) {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    :host([next]),
    :host([active][right]) {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        :host([next]),
        :host([active][right]) {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }

    :host([prev]),
    :host([active][left]) {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        :host([prev]),
        :host([active][left]) {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }

    :host([fade]) {
        opacity: 0;
        transition-duration: .6s;
        transition-property: opacity;
    }

    :host([fade][active]),
    :host([fade][next][left]),
    :host([fade][next][right]) {
        opacity: 1;
    }

    :host([fade][left]),
    :host([fade][active][right]) {
        opacity: 0;
    }

    :host([fade][next]),
    :host([fade][prev]),
    :host([fade][active]),
    :host([fade][active][left]),
    :host([fade][active][prev]) {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        :host([fade][next]),
        :host([fade][prev]),
        :host([fade][active]),
        :host([fade][active][left]),
        :host([fade][active][prev]) {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
`;

class BsCarouselItem extends LitElement {
  static get properties() {
    return {
      next: {
        type: Boolean,
        reflect: true
      },
      prev: {
        type: Boolean,
        reflect: true
      },
      fade: {
        type: Boolean,
        reflect: true
      },
      active: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsCarouselItemCss];
  }

  render() {
    return html`
            <slot></slot>
            <slot name="caption"></slot>
        `;
  }

  constructor() {
    super();
    this.next = false;
    this.prev = false;
    this.fade = false;
    this.active = false;
  }

}
if (!window.customElements.get("bs-carousel-item")) window.customElements.define('bs-carousel-item', BsCarouselItem);

const BsCarouselCaptionCss = css`

    :host {
        position: absolute;
        right: 15%;
        bottom: 20px;
        left: 15%;
        z-index: 10;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #fff;
        text-align: center;
    }
`;

class BsCarouselCaption extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCarouselCaptionCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

}
if (!window.customElements.get("bs-carousel-caption")) window.customElements.define('bs-carousel-caption', BsCarouselCaption);

const BsCarouselIndicatorCss = css`

    :host {
        position: relative;
        flex: 0 1 auto;
        width: 30px;
        height: 3px;
        margin-right: 3px;
        margin-left: 3px;
        text-indent: -999px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.5);
    }

    :host([active]) {
        background-color: #fff;
    }

    :host::before {
        position: absolute;
        top: -10px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 10px;
        content: "";
    }

    :host::after {
        position: absolute;
        bottom: -10px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 10px;
        content: "";
    }
`;

class BsCarouselIndicator extends LitElement {
  static get properties() {
    return {
      index: Number,
      active: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [BsContentRebootCss, BsCarouselIndicatorCss];
  }

  constructor() {
    super();
    this.index = 0;
    this.active = false;
  }

  firstUpdated() {
    this.addEventListener('click', event => this._handleClickEvent(event));
  }

  _handleClickEvent(event) {
    event.preventDefault();
    const indicatorClickEvent = new CustomEvent('bs-carousel-indicator-click', {
      bubbles: true,
      composed: true,
      detail: {
        index: this.index
      }
    });
    this.dispatchEvent(indicatorClickEvent);
  }

}
if (!window.customElements.get("bs-carousel-indicator")) window.customElements.define('bs-carousel-indicator', BsCarouselIndicator);

const BsCarouselIndicatorsCss = css`

    :host {
        position: absolute;
        right: 0;
        bottom: 10px;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        padding-left: 0;
        margin-right: 15%;
        margin-left: 15%;
        margin-bottom: 1rem;
    }
`;

class BsCarouselIndicators extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCarouselIndicatorsCss];
  }

  render() {
    return html`
            <slot></slot>
        `;
  }

  updateActiveIndicatorElement(nextElementIndex) {
    const slotNode = this.shadowRoot.querySelector('slot');
    const slotNodes = slotNode.assignedNodes();

    const indicatorItems = this._extractOnlyIndicatorItems(slotNodes);

    const activeIndicator = this._extractActiveIndicatorItem(indicatorItems);

    if (activeIndicator) {
      activeIndicator.removeAttribute('active');
    }

    const nextIndicator = indicatorItems[nextElementIndex];

    if (nextIndicator) {
      nextIndicator.setAttribute('active', '');
    }
  }

  _extractActiveIndicatorItem(indicatorItems) {
    for (let index = 0; index < indicatorItems.length; index++) {
      const indicatorItem = indicatorItems[index];

      if (this._isIndicatorItemActive(indicatorItem)) {
        return indicatorItem;
      }
    }
  }

  _isIndicatorItemActive(indicatorItem) {
    return indicatorItem.hasAttribute('active');
  }

  _extractOnlyIndicatorItems(slotNodes) {
    const elementNodes = [];

    for (let index = 0; index < slotNodes.length; index++) {
      const slotItem = slotNodes[index];

      if (this._isCarouselIndicatorElement(slotItem)) {
        elementNodes.push(slotItem);
      }
    }

    return elementNodes;
  }

  _isCarouselIndicatorElement(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.localName === 'bs-carousel-indicator';
  }

}
if (!window.customElements.get("bs-carousel-indicators")) window.customElements.define('bs-carousel-indicators', BsCarouselIndicators);

const BsCarouselControlPrevCss = css`

    .carousel-control-prev {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15%;
        color: #fff;
        text-align: center;
        opacity: 0.5;
        cursor: pointer;
        left: 0;
    }

    .carousel-control-prev:hover,
    .carousel-control-prev:focus {
        color: #fff;
        text-decoration: none;
        outline: 0;
        opacity: 0.9;
    }

    .icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: no-repeat 50%/100% 100%;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z%27/%3E%3C/svg%3E");
    }
`;

class BsCarouselControlPrev extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCarouselControlPrevCss];
  }

  render() {
    return html`
            <a class="carousel-control-prev">
                <span class="icon"></span>
            </a>
        `;
  }

  firstUpdated() {
    const prevLink = this.shadowRoot.querySelector('a.carousel-control-prev');
    prevLink.addEventListener('click', event => this._handleClickEvent(event));
  }

  _handleClickEvent(event) {
    event.preventDefault();
    const prevControlClickEvent = new CustomEvent('bs-carousel-control-prev-click', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(prevControlClickEvent);
  }

}
if (!window.customElements.get("bs-carousel-control-prev")) window.customElements.define('bs-carousel-control-prev', BsCarouselControlPrev);

const BsCarouselControlNextCss = css`

    .carousel-control-next {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15%;
        color: #fff;
        text-align: center;
        opacity: 0.5;
        cursor: pointer;
        right: 0;
    }

    .carousel-control-next:hover,
    .carousel-control-next:focus {
        color: #fff;
        text-decoration: none;
        outline: 0;
        opacity: 0.9;
    }

    .icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: no-repeat 50%/100% 100%;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 viewBox=%270 0 8 8%27%3E%3Cpath d=%27M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z%27/%3E%3C/svg%3E");
    }
`;

class BsCarouselControlNext extends LitElement {
  static get styles() {
    return [BsContentRebootCss, BsCarouselControlNextCss];
  }

  render() {
    return html`
            <a class="carousel-control-next">
                <span class="icon"></span>
            </a>
        `;
  }

  firstUpdated() {
    const nextLink = this.shadowRoot.querySelector('a.carousel-control-next');
    nextLink.addEventListener('click', event => this._handleClickEvent(event));
  }

  _handleClickEvent(event) {
    event.preventDefault();
    const nextControlClickEvent = new CustomEvent('bs-carousel-control-next-click', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(nextControlClickEvent);
  }

}
if (!window.customElements.get("bs-carousel-control-next")) window.customElements.define('bs-carousel-control-next', BsCarouselControlNext);

export { BsCarousel, BsCarouselCaption, BsCarouselCaptionCss, BsCarouselControlNext, BsCarouselControlNextCss, BsCarouselControlPrev, BsCarouselControlPrevCss, BsCarouselCss, BsCarouselIndicator, BsCarouselIndicatorCss, BsCarouselIndicators, BsCarouselIndicatorsCss, BsCarouselItem, BsCarouselItemCss };
