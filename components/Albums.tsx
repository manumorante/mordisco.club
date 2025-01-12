"use client";

import { ALBUMS } from "@/data";
import cx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

// Variable para almacenar la posición del scroll
let scrollPosition = 0;

export default function Albums() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Restaurar el scroll al renderizar
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, []);

  // Guardar la posición del scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      scrollPosition = scrollRef.current.scrollLeft;
    }
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="flex gap-2 px-3 pb-3 overflow-x-auto lg:justify-center"
    >
      {ALBUMS.map((album) => {
        const href = `/album/${album.folder}`;
        const isActive = pathname === href;
        const className = cx(
          { "bg-neutral-800 lg:hover:bg-black-500": !isActive },
          { "bg-white text-black font-bold lg:hover:bg-black-500": isActive },
          "transition-colors px-3 py-1.5 text-sm leading-tight uppercase rounded-lg",
          "flex items-center justify-center whitespace-nowrap"
        );
        return (
          <Link className={className} href={href} key={album.folder}>
            <span>{album.artists[0]}</span>
          </Link>
        );
      })}
    </div>
  );
}