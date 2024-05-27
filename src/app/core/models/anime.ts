interface ImageUrls {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

export interface Anime {
    images: ImageUrls;
    title: string;
    title_english: string;
}
