import Slider from './Slider';
import Swiper from "swiper";

import { lifecycle } from 'recompose';

const lifecycles = lifecycle({
  componentDidMount() {
    const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
})

export default lifecycles(Slider)
