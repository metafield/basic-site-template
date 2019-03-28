import React from "react";

import s from "./Testimonials.module.css";

const Testimonials = props => {
  return (
    <section className={s.container}>
      <div className={s.imgFade}>
        <h3 className={s.text}>Testimonials</h3>
        <p className={s.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
          nulla fermentum, venenatis velit at, faucibus nisi. Nam nec diam
          dignissim, semper ex nec, imperdiet diam. Mauris ut nibh ut turpis
          sodales semper. Vivamus vel sollicitudin ex. Proin pretium et ipsum
          venenatis pretium. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vestibulum tincidunt, risus et pellentesque lobortis, nisl lorem
          lacinia risus, non pulvinar purus neque nec enim. Suspendisse eleifend
          sed lectus id semper. Aliquam et diam enim. Integer finibus risus vel
          augue accumsan, quis semper ex maximus. Integer eu malesuada elit.
          Nulla sapien lorem, congue sed tincidunt non, scelerisque eget mauris.
          Proin erat tortor, dictum sit amet velit vitae, feugiat pellentesque
          diam.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
