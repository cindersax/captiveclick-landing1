import type { ImageMetadata } from "astro";

export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}
export interface ReviewItem {
  avatar: ImageMetadata;
  position: string;
  description: string;
  author: string;
}
