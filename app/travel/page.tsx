import { TravelGallery } from './TravelGallery';

const TRIPS: { id: string; name: string; folder: string; images: string[] }[] = [
  {
    id: 'australia',
    name: 'Australia',
    folder: 'Australia_pics',
    images: ['IMG_1251.jpeg', 'IMG_1279.JPG', 'IMG_1334.JPG', 'IMG_1365.JPG', 'IMG_1366.JPG', 'IMG_1392.JPG', 'IMG_1432.JPG', 'IMG_1504.JPG'],
  },
  {
    id: 'thailand',
    name: 'Thailand',
    folder: 'Thailand_Pics',
    images: ['IMG_1705.JPG', 'IMG_1716.JPG', 'IMG_1720.JPG', 'IMG_1725.JPG', 'IMG_1731.JPG', 'IMG_1739.JPG', 'IMG_1749.JPG', 'IMG_1750.JPG'],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    folder: 'singapore_pics',
    images: ['IMG_1065.JPG', 'IMG_1808.JPG', 'IMG_1831.JPG', 'IMG_1835.JPG', 'IMG_1837.JPG', 'IMG_1839.JPG', 'IMG_1860.JPG'],
  },
  {
    id: 'china',
    name: 'China',
    folder: 'china_pics',
    images: ['IMG_1180.JPG', 'IMG_1577.JPG', 'IMG_1609.JPG', 'IMG_1613.JPG', 'IMG_1631.JPG', 'IMG_7988.JPG', 'IMG_8094.JPG', 'IMG_8155.JPG', 'IMG_8185.JPG', 'IMG_8193.JPG', 'IMG_8423.JPG', 'IMG_8510.JPG', 'IMG_8785.JPG'],
  },
  {
    id: 'mexico',
    name: 'Mexico',
    folder: 'Mexico_pics',
    images: ['IMG_0757.JPG', 'IMG_0785.JPG', 'IMG_0805.JPG', 'IMG_0808.JPG', 'IMG_0825.JPG', 'IMG_0843.JPG', 'IMG_0872.JPG', 'IMG_0873.JPG', 'IMG_0900.JPG', 'IMG_0985.JPG', 'IMG_1014.JPG'],
  },
];

export const metadata = {
  title: 'Travel & Pictures',
  description: 'Travel and photography — Lennard Pische.',
};

export default function TravelPage() {
  return (
    <div className="max-w-[60ch] mx-auto w-full">
      <h1 className="font-medium pt-4 pb-2 text-3xl text-gray-900">
        Travel & Pictures
      </h1>
      <p className="text-gray-700 leading-snug mb-10">
        Photos from trips and everyday moments.
      </p>

      <TravelGallery trips={TRIPS} />
    </div>
  );
}
