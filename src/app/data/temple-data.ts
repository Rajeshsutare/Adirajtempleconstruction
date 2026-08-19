import { ServiceItem, GalleryItem, TestimonialItem, certificates } from '../model/temple-models';

export const TEMPLE_DATA = {
    companyName: 'Adiraj Temple Construction',
    tagline: 'Where Devotion Takes Shape in Stone',
    subtitle: 'सभी प्रकार के भारतीय मंदीर, शिखर,गुंबज,चोटी,सुरई,डोम, गुमट,महाद्वार बनाने हेतु संपर्क कीजिए कॉन्टॅक्टर पाटील बंधू ',
    phone: '+919763101558',
    formattedPhone: '+91 9763101558',
    email: 'adirajtempleconstructions@gmail.com',
    address: 'लांडगेवाडी, महाराष्ट्र ४३१७०८, भारत',
    workingHours: 'Every Day: 9:00 AM - 7:00 PM IST',

    googleMapsUrl: 'https://www.google.com/maps/dir/18.5840369,73.7624835/Adiraj+temple+construction,+Landgewadi,+Maharashtra+431708/@18.2566936,72.7613278,7z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x3bcfcf0079511b9b:0x633d478402f25424!2m2!1d77.0452135!2d18.8635718!3e0?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.9706646923919!2d77.04500068650243!3d18.86352644165506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfcf0079511b9b%3A0x633d478402f25424!2sAdiraj%20temple%20construction!5e0!3m2!1sen!2sin!4v1786818576841!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',

    socialLinks: {
        instagram: 'https://www.instagram.com/adirajtemple?igsh=cXc2YXZoemx6Nmdw',
        facebook: 'https://www.facebook.com/adirajtempleconstructions',
        youtube: 'https://www.youtube.com/@adirajtemple',
        pintrest: 'https://www.pinterest.com/manmathlandge2017/?invite_code=a2fd747299434ff2a2c837cb6e97fad6&sender=998743792272103935',
        whatsapp: 'https://wa.me/919763101558?text=Namaste!%20I%20am%20interested%20in%20Temple%20Construction%20services.'
    },

    emailJsConfig: {
        serviceId: 'service_u40lroq',
        contractorTemplateId: 'template_jvor6td',
        clientTemplateId: 'template_uv2km8n',
        publicKey: 'Zpgl5JSEzthFDW337'
    }

};
export const CERTIFICATE_DATA: certificates[] = [
    {
        id: 'c1',
        location: 'Maharashtra',
        title: 'मंदिर निर्माण के लिए प्रमाणपत्र',
        description: 'हमारे मंदिर निर्माण कार्यों के लिए प्रमाणपत्र',
        imageUrl: 'certificate-1.jpeg'
    },
    {
        id: 'c1',
        location: 'Maharashtra',
        title: 'मंदिर निर्माण के लिए प्रमाणपत्र',
        description: 'हमारे मंदिर निर्माण कार्यों के लिए प्रमाणपत्र',
        imageUrl: 'certificate-2.jpeg'
    },
]

export const CONTRACTOR_DATA = {
    name: 'कॉन्ट्रॅक्टर मन्मथ रघुनाथराव पाटील',
    designation: 'संस्थापक एवं मुख्य मंदिर वास्तुकार',
    photo: 'profile.jpeg',
    experience: '22+',
    templesConstructed: '108+',
    happyClients: '500+',
    artisans: '75+',
    quote: 'हमारे द्वारा बनाया गया प्रत्येक मंदिर केवल पत्थरों से बनी संरचना नहीं, बल्कि आने वाली पीढ़ियों के लिए गढ़ी गई एक पवित्र विरासत है।',
    descriptionParagraph1: 'परंपरागत नागर, द्रविड़ और वेसर वास्तुकला शैलियों में दो दशकों से अधिक के समर्पित अनुभव के साथ, श्री मन्मथ पाटील ने आदिराज मंदिर निर्माण को उत्कृष्ट मंदिर निर्माण एवं शिल्पकला के क्षेत्र में एक विश्वसनीय नाम बनाया है।',
    descriptionParagraph2: 'कुशल कारीगरों, पत्थर के शिल्पकारों और आधुनिक संरचनात्मक इंजीनियरों की टीम का नेतृत्व करते हुए, वे वास्तु शास्त्र, शिल्प शास्त्र तथा आधुनिक भूकंपरोधी निर्माण मानकों का उचित पालन सुनिश्चित करते हैं।'
};

export const SERVICES_DATA: ServiceItem[] = [
    {
        id: 'design-planning',

        title: 'मंदिर डिजाइन और योजना',

        description:
            '3D CAD विज़ुअलाइज़ेशन, शिल्प शास्त्र के अनुरूप डिजाइन और वास्तु-अनुकूल ब्लूप्रिंट, जो मंदिर की वास्तुकला में सुंदरता और स्थायित्व प्रदान करते हैं।',

        icon: 'fa-compass-drafting',

        image: 'hero.jpeg',

        features: [
            'वास्तु शास्त्र के अनुरूप डिजाइन',
            '3D वास्तविक वास्तु मॉडल',
            'संरचनात्मक इंजीनियरिंग प्रमाणन'
        ]
    },

    {
        id: 'construction',

        title: 'संपूर्ण मंदिर निर्माण',

        description:
            'उच्च गुणवत्ता वाले पत्थर, बलुआ पत्थर और RCC का उपयोग करके मंदिर परिसर का शुरू से अंत तक संपूर्ण निर्माण कार्य।',

        icon: 'fa-gopuram',

        image: 'p23.jpeg',

        features: [
            'सटीक इंटरलॉकिंग स्टोन जॉइनरी',
            'मजबूत नींव का निर्माण',
            'उच्च गुणवत्ता वाला तांबा एवं लोहे से मुक्त सुदृढ़ीकरण'
        ]
    },

    {
        id: 'stone-carving',

        title: 'बारीक पत्थर नक्काशी',

        description:
            'अनुभवी एवं पारंपरिक कारीगरों द्वारा फूलों की आकृतियां, जाली का काम, शिखर संरचना और नक्काशीदार स्तंभ तैयार किए जाते हैं।',

        icon: 'fa-hammer',

        image: 'p25.jpeg',

        features: [
            'गुलाबी बलुआ पत्थर एवं सफेद संगमरमर की नक्काशी',
            'पारंपरिक हाथ से नक्काशी एवं आधुनिक तकनीक',
            'कस्टमाइज्ड उभरी हुई कलाकृतियां'
        ]
    },

    {
        id: 'renovation',

        title: 'प्राचीन मंदिरों का जीर्णोद्धार',

        description:
            'ऐतिहासिक एवं पुराने मंदिरों के संरक्षण, संरचनात्मक मजबूती और सौंदर्य पुनर्स्थापना का कार्य पारंपरिक एवं आधुनिक तकनीकों के साथ किया जाता है।',

        icon: 'fa-cubes-stacked',

        image:
            'p21.jpeg',

        features: [
            'बिना नुकसान पहुंचाए संरचनात्मक जांच',
            'पारंपरिक चूना एवं पत्थर के मसाले का उपयोग',
            'शिखर एवं गर्भगृह की मरम्मत'
        ]
    },

    {
        id: 'mandir-architecture',

        title: 'कस्टम शिखर एवं गर्भगृह',

        description:
            'प्राचीन वास्तु अनुपात के अनुसार गर्भगृह, सभामंडप और भव्य शिखर का विशेष निर्माण एवं इंजीनियरिंग कार्य।',

        icon: 'fa-synagogue',

        image:
            'p34.jpeg',

        features: [
            'गर्भगृह के लिए उपयुक्त वास्तु संरचना',
            'मजबूत भार-वहन करने वाली पत्थर की संरचना',
            'तांबे के कलश की स्थापना'
        ]
    },

    {
        id: 'interior-decorative',

        title: 'मूर्ति, तोरण एवं सजावटी कार्य',

        description:
            'नक्काशीदार पत्थर के दरवाजे, आकर्षक पीतल का काम, पत्थर के स्तंभ, उभरी हुई कलाकृतियां और गर्भगृह की सजावट का कार्य।',

        icon: 'fa-gem',

        image:
            'https://media.istockphoto.com/id/2255833597/photo/wooden-statue-of-indian-gods-wood-engraving-wooden-swing-carved-beautifully-with-artistic.webp?a=1&b=1&s=612x612&w=0&k=20&c=5WdM8ZTlnArm1RK5okZz5CC8HFWy3FOTYW1JuwNZT5E=',

        features: [
            'काले ग्रेनाइट एवं संगमरमर की मूर्तियां',
            'सुंदर छत की नक्काशी (रंगमंडप)',
            'आकर्षक पीतल से मढ़े गर्भगृह के द्वार'
        ]
    }
];

export const GALLERY_DATA: GalleryItem[] = [
    {
        id: 'g1',
        title: 'भव्य सोमनाथ शैली मंदिर परिसर',
        category: 'completed',
        categoryLabel: 'निर्मित मंदिर',
        imageUrl: 'p-1.jpeg',
        description: 'गुजरात में पूर्ण किया गया गुलाबी बलुआ पत्थर से निर्मित नागर शैली का भव्य मंदिर।'
    },
    {
        id: 'g2',
        title: 'नक्काशीदार स्तंभ निर्माण (रंगमंडप)',
        category: 'stonework',
        categoryLabel: 'पत्थर का कार्य',
        imageUrl: 'p-2.jpeg',
        description: 'प्राचीन कलाकृतियों और पारंपरिक आकृतियों से सुसज्जित हाथ से नक्काशी किए गए लाल बलुआ पत्थर के स्तंभ।'
    },
    {
        id: 'g2',
        title: 'नक्काशीदार स्तंभ निर्माण (रंगमंडप)',
        category: 'stonework',
        categoryLabel: 'पत्थर का कार्य',
        imageUrl: 'p14.jpeg',
        description: 'प्राचीन कलाकृतियों और पारंपरिक आकृतियों से सुसज्जित हाथ से नक्काशी किए गए लाल बलुआ पत्थर के स्तंभ।'
    },
    {
        id: 'g2',
        title: 'नक्काशीदार स्तंभ निर्माण (रंगमंडप)',
        category: 'stonework',
        categoryLabel: 'पत्थर का कार्य',
        imageUrl: 'p15.jpeg',
        description: 'प्राचीन कलाकृतियों और पारंपरिक आकृतियों से सुसज्जित हाथ से नक्काशी किए गए लाल बलुआ पत्थर के स्तंभ।'
    },
    {
        id: 'g3',
        title: 'शिखर का नक्शा एवं निर्माण',
        category: 'architecture',
        categoryLabel: 'मंदिर वास्तुकला',
        imageUrl: 'p3.jpeg',
        description: '65 फीट ऊँचे शिखर के निर्माण हेतु संरचनात्मक गणना और पत्थरों का सटीक संयोजन।'
    },
    {
        id: 'g3',
        title: 'शिखर का नक्शा एवं निर्माण',
        category: 'architecture',
        categoryLabel: 'मंदिर वास्तुकला',
        imageUrl: 'p9.jpeg',
        description: '65 फीट ऊँचे शिखर के निर्माण हेतु संरचनात्मक गणना और पत्थरों का सटीक संयोजन।'
    },
    {
        id: 'g3',
        title: 'शिखर का नक्शा एवं निर्माण',
        category: 'architecture',
        categoryLabel: 'मंदिर वास्तुकला',
        imageUrl: 'p10.jpeg',
        description: '65 फीट ऊँचे शिखर के निर्माण हेतु संरचनात्मक गणना और पत्थरों का सटीक संयोजन।'
    },
    {
        id: 'g4',
        title: 'एकाश्म पत्थर की मूर्तिकला',
        category: 'sculptures',
        categoryLabel: 'मूर्तिकला',
        imageUrl: 'p4.jpeg',
        description: 'मकराना संगमरमर पर बारीकी से उकेरी गई देवी-देवताओं की सुंदर एवं कलात्मक मूर्तिकला।'
    },
    {
        id: 'g4',
        title: 'एकाश्म पत्थर की मूर्तिकला',
        category: 'sculptures',
        categoryLabel: 'मूर्तिकला',
        imageUrl: 'p11.jpeg',
        description: 'मकराना संगमरमर पर बारीकी से उकेरी गई देवी-देवताओं की सुंदर एवं कलात्मक मूर्तिकला।'
    },
    {
        id: 'g4',
        title: 'एकाश्म पत्थर की मूर्तिकला',
        category: 'sculptures',
        categoryLabel: 'मूर्तिकला',
        imageUrl: 'p12.jpeg',
        description: 'मकराना संगमरमर पर बारीकी से उकेरी गई देवी-देवताओं की सुंदर एवं कलात्मक मूर्तिकला।'
    },
    {
        id: 'g5',
        title: 'स्थल पर पत्थर की इंटरलॉकिंग चिनाई',
        category: 'construction',
        categoryLabel: 'मंदिर निर्माण',
        imageUrl: 'p5.jpeg',
        description: 'किसी भी कृत्रिम रासायनिक बंधन के बिना पारंपरिक तरीके से पत्थरों की सटीक इंटरलॉकिंग चिनाई।'
    },
    {
        id: 'g5',
        title: 'स्थल पर पत्थर की इंटरलॉकिंग चिनाई',
        category: 'construction',
        categoryLabel: 'मंदिर निर्माण',
        imageUrl: 'p7.jpeg',
        description: 'किसी भी कृत्रिम रासायनिक बंधन के बिना पारंपरिक तरीके से पत्थरों की सटीक इंटरलॉकिंग चिनाई।'
    },
    {
        id: 'g5',
        title: 'स्थल पर पत्थर की इंटरलॉकिंग चिनाई',
        category: 'construction',
        categoryLabel: 'मंदिर निर्माण',
        imageUrl: 'p13.jpeg',
        description: 'किसी भी कृत्रिम रासायनिक बंधन के बिना पारंपरिक तरीके से पत्थरों की सटीक इंटरलॉकिंग चिनाई।'
    },
    {
        id: 'g6',
        title: 'प्राचीन संगमरमर मंदिर का जीर्णोद्धार',
        category: 'completed',
        categoryLabel: 'निर्मित मंदिर',
        imageUrl: 'p6.jpeg',
        description: '150 वर्ष पुराने संगमरमर के मंदिर परिसर का पूर्ण जीर्णोद्धार एवं पुनर्निर्माण।'
    },
    {
        id: 'g6',
        title: 'प्राचीन संगमरमर मंदिर का जीर्णोद्धार',
        category: 'completed',
        categoryLabel: 'निर्मित मंदिर',
        imageUrl: 'p20.jpeg',
        description: '150 वर्ष पुराने संगमरमर के मंदिर परिसर का पूर्ण जीर्णोद्धार एवं पुनर्निर्माण।'
    }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
    {
        id: 't1',
        name: 'Dinesh landge',
        role: '',
        location: 'पुणे, महाराष्ट्र',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        review:
            'आदिराज मंदिर निर्माण ने हमारे सामुदायिक मंदिर का निर्माण पारंपरिक वास्तुकला और उत्कृष्ट कारीगरी के साथ किया। श्री राजेंद्र पाटील और उनकी टीम ने प्राण प्रतिष्ठा की निर्धारित समय-सीमा से पहले ही बेहतरीन पत्थर की कारीगरी के साथ कार्य पूरा किया।'
    },
    {
        id: 't2',
        name: 'Parul Kumar',
        role: '',
        location: 'जयपुर, राजस्थान',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        review:
            'पत्थर की नक्काशी की गुणवत्ता, शिखर की सुंदर संरचना और निर्माण कार्य में पूरी पारदर्शिता ने आदिराज मंदिर निर्माण के साथ काम करने का अनुभव बेहद शानदार बनाया। बड़े मंदिर निर्माण प्रोजेक्ट्स के लिए मैं उनकी सेवाओं की अत्यंत अनुशंसा करता हूँ।'
    },
    {
        id: 't3',
        name: 'Vishal Kumar',
        role: '',
        location: 'इंदौर, मध्य प्रदेश',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        review:
            'प्रारंभिक 3D वास्तु डिज़ाइन से लेकर स्वर्ण कलश की स्थापना तक, उनकी तकनीकी कुशलता और पारंपरिक शास्त्रों के प्रति सम्मान बेहद प्रेरणादायक रहा। वास्तव में समर्पित और कुशल पेशेवरों की टीम।'
    }
];