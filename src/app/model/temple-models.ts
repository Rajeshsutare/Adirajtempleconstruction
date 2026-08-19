export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    features: string[];
}

export interface GalleryItem {
    id: string;
    title: string;
    category: 'construction' | 'architecture' | 'stonework' | 'sculptures' | 'completed';
    categoryLabel: string;
    imageUrl: string;
    description: string;
}

export interface TestimonialItem {
    id: string;
    name: string;
    role: string;
    location: string;
    avatar: string;
    rating: number;
    review: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface EmailPayload {
    name: string;
    email: string;
    phone: string;
    description: string;
    serviceInterest?: string;
}
export interface certificates {
    id: string,
    location: string,
    title: string,
    description: string,
    imageUrl: string
}
