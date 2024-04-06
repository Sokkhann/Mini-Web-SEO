import React from 'react';
import { Card } from 'flowbite-react';
import Image from 'next/image';

type PropsType = {
  name: string;
  image: string;
  desc: string;
};

export default function CardDetail({ name, image, desc }: PropsType) {
  return (
    <div className='flex justify-center'>
      <Card className="max-w-sm p-4" horizontal>
        <div className="relative w-full h-48">
          <Image
            src={image}
            width={500}
            height={500}
            alt="Image"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="mt-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
        </div>
      </Card>
    </div>
  );
}
