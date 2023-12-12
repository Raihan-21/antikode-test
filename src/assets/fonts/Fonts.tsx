import localFont from "next/font/local";

const Tstar = localFont({
  src: [
    {
      path: "./TStarProLight.ttf",
      weight: "200",
    },
    {
      path: "./TStarProMedium.ttf",
      weight: "300",
    },
    {
      path: "./TStarProRegular.ttf",
      weight: "400",
    },
    {
      path: "./TStarProBold.ttf",
      weight: "700",
    },
  ],
});

export { Tstar };
