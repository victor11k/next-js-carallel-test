import { clsx, type ClassValue } from "clsx";
import DOMPurify from "dompurify";
import { twMerge } from "tailwind-merge";

/**
 * Merge tailwind classnames with custom
 * @param inputs: ClassValue[]
 * @returns string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Purify scripts as string for the DOM.
 * @param value string
 * @returns string
 */
export function purify(value: string) {
  return DOMPurify.sanitize(value);
}

export default purify;
