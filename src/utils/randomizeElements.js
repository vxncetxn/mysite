import { pointRandom } from "./pointRandom";

export function randomizeElements() {
  const mainShape = `polygon(${pointRandom(55, 100).toString()}% ${pointRandom(
    0,
    10
  ).toString()}%, ${pointRandom(85, 100).toString()}% ${pointRandom(
    20,
    30
  ).toString()}%, ${pointRandom(85, 100).toString()}% ${pointRandom(
    90,
    100
  ).toString()}%, ${pointRandom(0, 30).toString()}% ${pointRandom(
    90,
    100
  ).toString()}%, ${pointRandom(0, 30).toString()}% ${pointRandom(
    0,
    10
  ).toString()}%)`;

  // const contactShape = `polygon(${pointRandom(
  //   10,
  //   50
  // ).toString()}% ${pointRandom(0, 10).toString()}%, ${pointRandom(
  //   80,
  //   100
  // ).toString()}% ${pointRandom(0, 20).toString()}%, 100% 100%, 0% 100%)`;

  // const contactShape = `polygon(${pointRandom(
  //   10,
  //   50
  // ).toString()}% ${pointRandom(0, 20).toString()}%, 100% ${pointRandom(
  //   0,
  //   30
  // ).toString()}%, 100% 100%, 0% 100%)`;

  const contactShape = `polygon(${pointRandom(
    20,
    50
  ).toString()}% ${pointRandom(0, 20).toString()}%, 100% ${pointRandom(
    0,
    30
  ).toString()}%, 100% 100%, ${pointRandom(0, 15).toString()}% 100%)`;

  let root = document.documentElement;
  root.style.setProperty("--clip-main", mainShape);
  root.style.setProperty("--clip-contact", contactShape);

  const mainHue = pointRandom(210, 390);
  const mainSaturation = pointRandom(70, 80);
  const mainLightness = pointRandom(65, 75);

  root.style.setProperty(
    "--color-primary",
    `hsl(${mainHue.toString()}, ${mainSaturation.toString()}%, ${mainLightness.toString()}%)`
  );
  root.style.setProperty(
    "--color-primary-dark",
    `hsl(${mainHue.toString()}, ${mainSaturation.toString()}%, ${(
      mainLightness - 55
    ).toString()}%)`
  );
  root.style.setProperty(
    "--color-primary-darker",
    `hsl(${mainHue.toString()}, ${mainSaturation.toString()}%, ${(10).toString()}%)`
  );
  root.style.setProperty(
    "--color-primary-filter",
    `hsla(${mainHue.toString()}, ${mainSaturation.toString()}%, ${mainLightness.toString()}%, 0.6)`
  );
  root.style.setProperty(
    "--color-secondary",
    `hsl(${(
      mainHue - 90
    ).toString()}, ${mainSaturation.toString()}%, ${mainLightness.toString()}%)`
  );
  root.style.setProperty(
    "--color-tertiary",
    `hsl(${(
      mainHue - 180
    ).toString()}, ${mainSaturation.toString()}%, ${mainLightness.toString()}%)`
  );
}
