'use client'
import { useEffect, useRef, MutableRefObject } from "react";

type UseGSAPReturn = MutableRefObject<HTMLDivElement | null>;

export function useGSAP(
  animationCallback: (element: HTMLDivElement) => void,
  deps: any[] = []
): UseGSAPReturn {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      animationCallback(ref.current);
    }
  }, deps);

  return ref;
}
