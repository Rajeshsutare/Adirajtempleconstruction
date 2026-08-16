import { ServiceItem, GalleryItem, TestimonialItem } from '../model/temple-models';

export const TEMPLE_DATA = {
    companyName: 'Aadiraj Mandir Nirman',
    tagline: 'Where Devotion Takes Shape in Stone',
    subtitle: 'Creating timeless temples that reflect faith, tradition, craftsmanship and structural excellence.',
    phone: '+919876543210',
    formattedPhone: '+91 9763101558',
    email: 'aadirajtempleconstruction@gmail.com',
    address: 'Landgewadi, Maharashtra 431708, India',
    workingHours: 'Every Day: 9:00 AM - 7:00 PM IST',

    googleMapsUrl: 'https://www.google.com/maps/dir/18.5840369,73.7624835/Adiraj+temple+construction,+Landgewadi,+Maharashtra+431708/@18.2566936,72.7613278,7z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bcfcf0079511b9b:0x633d478402f25424!2m2!1d77.0452135!2d18.8635718!3e0?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.9706646923919!2d77.04500068650243!3d18.86352644165506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfcf0079511b9b%3A0x633d478402f25424!2sAdiraj%20temple%20construction!5e0!3m2!1sen!2sin!4v1786818576841!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',

    socialLinks: {
        instagram: 'https://instagram.com/adirajtempleconstruction7?igshid=ZDdkNTZiNTM=',
        facebook: 'https://www.facebook.com/profile.php?id=100089629756142&mibextid=ZbWKwL',
        youtube: 'https://youtube.com/@shreemandirnirman',
        twitter: 'https://twitter.com/Adiraj_temple?t=t8cZ44b8xqU83L4vpR-SZg&s=09',
        whatsapp: 'https://wa.me/919876543210?text=Namaste!%20I%20am%20interested%20in%20Temple%20Construction%20services.'
    },

    emailJsConfig: {
        serviceId: 'service_mandir_nirman',
        contractorTemplateId: 'template_contractor_notify',
        clientTemplateId: 'template_client_autoreply',
        publicKey: 'YOUR_EMAILJS_PUBLIC_KEY'
    }
};

export const CONTRACTOR_DATA = {
    name: 'Manmath Patil',
    designation: 'Founder & Master Temple Architect',
    photo: 'profile.png',
    experience: '22+',
    templesConstructed: '108+',
    happyClients: '500+',
    artisans: '75+',
    quote: 'Every temple we build is not just a structure of stone, but a sacred legacy sculpted for generations to come.',
    descriptionParagraph1: 'With over two decades of dedicated service in traditional Nagara, Dravidian, and Vesara architectural styles, Shri Rajendra Patil has established Aadiraj Mandir Nirman as a benchmark for sacred structural engineering.',
    descriptionParagraph2: 'Leading a guild of master artisans, stone sculptors, and modern structural engineers, he ensures strict adherence to Vastu Shastra, Shilpa Shastra, and contemporary earthquake-resistant building standards.'
};

export const SERVICES_DATA: ServiceItem[] = [
    {
        id: 'design-planning',
        title: 'Temple Design & Planning',
        description: '3D CAD visualization, Shilpa Shastra compliance, and Vastu-optimized blueprints crafted for enduring architectural harmony.',
        icon: 'fa-compass-drafting',
        image: 'https://media.istockphoto.com/id/883412924/photo/shri-manshapurna-karni-mata-temple-in-udaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=E3yXtr8HYfpRaI4Y18O9bYn3MOW-kssKpEkPDUlV7kE=',
        features: ['Vastu Shastra Alignment', '3D Photorealistic Architectural Renderings', 'Structural Engineering Certification']
    },
    {
        id: 'construction',
        title: 'Turnkey Temple Construction',
        description: 'End-to-end erection of massive stone and RCC temple complexes using premium Bansi Pahadpur, Sandstone, and Granite.',
        icon: 'fa-gopuram',
        image: 'https://plus.unsplash.com/premium_photo-1697730116501-72f5749dffce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHR1cm5rZXklMjB0ZW1wbGUlMjBjb25zdHJ1dGlvb258ZW58MHx8MHx8fDA%3D',
        features: ['Precision Interlocking Stone Joinery', 'Monolithic Foundation Engineering', 'Quality Copper & Iron-free Reinforcement']
    },
    {
        id: 'stone-carving',
        title: 'Intricate Stone Carving',
        description: 'Handcrafted floral motifs, Jali work, Shikhar structures, and pillars carved by hereditary master craftsmen.',
        icon: 'fa-hammer',
        image: 'https://media.istockphoto.com/id/2280008846/photo/hindu-temple-with-bamboo-scaffolding-under-renovation.webp?a=1&b=1&s=612x612&w=0&k=20&c=A3-0nVLyOuRNddCsDKofG_-b6LIzXMxOHeGNjDPsZQo=',
        features: ['Pink Sandstone & White Marble Sculpting', 'Traditional Hand & Pneumatic Chiseling', 'Customized Relief Artwork']
    },
    {
        id: 'renovation',
        title: 'Heritage Temple Restoration',
        description: 'Scientific preservation, structural stabilization, and aesthetic restoration of historical and aging sacred sites.',
        icon: 'fa-cubes-stacked',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600&auto=format&fit=crop',
        features: ['Non-destructive Structural Audit', 'Historic Lime & Stone Mortar Matching', 'Shikhar & Garbhagriha Repairs']
    },
    {
        id: 'mandir-architecture',
        title: 'Custom Shikhar & Garbhagriha',
        description: 'Specialized engineering of sanctum sanctorum (Garbhagriha), Sabha Mandap, and soaring Shikhars built to ancient proportions.',
        icon: 'fa-synagogue',
        image: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=600&auto=format&fit=crop',
        features: ['Acoustic Sanctum Geometry', 'Heavy Load-Bearing Stone Vaulting', 'Copper Kalash Assembly']
    },
    {
        id: 'interior-decorative',
        title: 'Idols, Torans & Decorative Work',
        description: 'Carved stone doors, ornamental brass work, stone pillars, relief panels, and sanctum interiors engineered for divinity.',
        icon: 'fa-gem',
        image: 'https://media.istockphoto.com/id/2255833597/photo/wooden-statue-of-indian-gods-wood-engraving-wooden-swing-carved-beautifully-with-artistic.webp?a=1&b=1&s=612x612&w=0&k=20&c=5WdM8ZTlnArm1RK5okZz5CC8HFWy3FOTYW1JuwNZT5E=',
        features: ['Black Granite & Marble Idols', 'Intricate Ceiling Carvings (Rangmandap)', 'Ornate Brass-plated Sanctum Gates']
    }
];

export const GALLERY_DATA: GalleryItem[] = [
    {
        id: 'g1',
        title: 'Grand Somnath Style Temple Complex',
        category: 'completed',
        categoryLabel: 'Completed Temples',
        imageUrl: 'https://images.unsplash.com/photo-1735192683815-d8918aad53dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29tbmF0aCUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D',
        description: 'Full pink sandstone Nagara style mandir completed in Gujarat.'
    },
    {
        id: 'g2',
        title: 'Carved Pillar Assembly (Rangmandap)',
        category: 'stonework',
        categoryLabel: 'Stone Work',
        imageUrl: 'https://images.unsplash.com/photo-1648122532613-8cfc81321483?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydmVkJTIwcGlsbGFyJTIwYXNzZW1ibHl8ZW58MHx8MHx8fDA%3D',
        description: 'Precision hand-carved red sandstone pillars displaying ancient motifs.'
    },
    {
        id: 'g3',
        title: 'Shikhar Elevation Blueprint & Construction',
        category: 'architecture',
        categoryLabel: 'Temple Architecture',
        imageUrl: 'https://images.unsplash.com/photo-1619239632374-9e6651c2b7bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpa2hhciUyMGVsZXZhdGlvbiUyMGJsdWUlMjBwcmludCUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D',
        description: 'Structural calculation and stone alignment for a 65ft Shikhar.'
    },
    {
        id: 'g4',
        title: 'Monolithic Stone Sculptures',
        category: 'sculptures',
        categoryLabel: 'Sculptures',
        imageUrl: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=1000&auto=format&fit=crop',
        description: 'Intricately detailed deity relief sculpture carved into Makrana Marble.'
    },
    {
        id: 'g5',
        title: 'Interlocking Stone Masonry on Site',
        category: 'construction',
        categoryLabel: 'Temple Construction',
        imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop',
        description: 'Dry stone masonry alignment utilizing zero synthetic chemical bonding.'
    },
    {
        id: 'g6',
        title: 'Heritage Marble Mandir Restoration',
        category: 'completed',
        categoryLabel: 'Completed Temples',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1691030925596-c8a0897fd796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVyaXRhZ2UlMjBtYXJibGUlMjBtYWRpcnxlbnwwfHwwfHx8MA%3D%3D',
        description: 'Complete restoration of a 150-year-old marble shrine complex.'
    }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
    {
        id: 't1',
        name: 'Mahesh Patil',
        role: 'Trustee, Shiv Dham Trust',
        location: 'Pune, Maharashtra',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        review: 'Aadiraj Mandir Nirman executed our community temple with remarkable architectural fidelity. Shri Rajendra Patil and his team delivered unmatched stone craftsmanship well ahead of the Pran Pratishtha deadline.'
    },
    {
        id: 't2',
        name: 'Rajendra Sharma',
        role: 'President, Sanatan Sanskriti Samiti',
        location: 'Jaipur, Rajasthan',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        review: 'The stone carving quality, Shikhar geometry, and absolute transparency during structural execution made working with Aadiraj Mandir Nirman a blessed experience. Highly recommended for mega temple projects.'
    },
    {
        id: 't3',
        name: 'Suresh Joshi',
        role: 'Managing Trustee, Radha Krishna Dham',
        location: 'Indore, Madhya Pradesh',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        review: 'From initial 3D Vastu designs to the installation of the Golden Kalash, their technical precision and respect for traditional shastras were inspiring. Truly dedicated professionals.'
    }
];