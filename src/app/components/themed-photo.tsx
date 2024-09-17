"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

// https://github.com/pacocoursey/next-themes/issues/154#issuecomment-1372369194
const ThemedPhoto = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <Image
      className="transform transition duration-300 hover:scale-105"
      src={
        resolvedTheme === "dark"
          ? "dark-louis-facun-photo.png"
          : "light-louis-facun-photo.png"
      }
      alt="Louis Facun photo"
      width={200}
      height={250}
      unoptimized
    />
  );
};

export default ThemedPhoto;
