import type { StaticImageData } from "next/image";

import chefPasta from "@/assets/img/8614.jpg";
import chefWork from "@/assets/img/8487.jpg";
import chiSiamo from "@/assets/img/8289.jpg";
import cammino from "@/assets/img/8670.jpg";
import hero from "@/assets/img/8393.jpg";
import laboratorio from "@/assets/img/8358.jpg";
import progettoDetail from "@/assets/img/8420.jpg";
import progettoMain from "@/assets/img/8501.jpg";

import g8321 from "@/assets/img/8321.jpg";
import g8347 from "@/assets/img/8347.jpg";
import g8368 from "@/assets/img/8368.jpg";
import g8435 from "@/assets/img/8435.jpg";
import g8439 from "@/assets/img/8439.jpg";
import g8485 from "@/assets/img/8485.jpg";
import g8506 from "@/assets/img/8506.jpg";
import g8516 from "@/assets/img/8516.jpg";
import g8544 from "@/assets/img/8544.jpg";
import g8562 from "@/assets/img/8562.jpg";
import g8572 from "@/assets/img/8572.jpg";
import g8580 from "@/assets/img/8580.jpg";
import g8592 from "@/assets/img/8592.jpg";
import g8603 from "@/assets/img/8603.jpg";
import g8641 from "@/assets/img/8641.jpg";
import g8663 from "@/assets/img/8663.jpg";

export const photos = {
  hero,
  progettoMain,
  progettoDetail,
  chiSiamo,
  laboratorio,
  chefPasta,
  chefWork,
  cammino,
} satisfies Record<string, StaticImageData>;

/** Gallery marquee, row 1 — 70s, left. */
export const galleryRowOne: StaticImageData[] = [
  g8562,
  g8572,
  g8592,
  g8544,
  g8506,
  g8663,
  g8485,
  g8641,
];

/** Gallery marquee, row 2 — 85s, reversed. */
export const galleryRowTwo: StaticImageData[] = [
  g8347,
  g8368,
  g8435,
  g8439,
  g8516,
  g8580,
  g8603,
  g8321,
];
