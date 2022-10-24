import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll() {
  useEffect(() => {
    const scrollEl = document.querySelector("#app");

    // eslint-disable-next-line no-unused-vars
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.2,
      class: "is-reveal",
    });
  }, []);
}
