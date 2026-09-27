import { GalleryItem, MenuItem, ReviewItem, FaqItem } from '../types';

// ==========================================
// CONFIGURABLE BRAND CONSTANTS
// Owner can easily update contact details here
// ==========================================
export const CAFE_NAME = "Cafe Me Chennai";
export const CAFE_TAGLINE = "WHERE MEMORIES BREW";
export const CAFE_TAGLINE_TAMIL = "நினைவுகள் மலரும் இடம்";

export const CAFE_ADDRESS = {
  line1: "Old No. 260, New No. 54, Alagirisamy Salai",
  line2: "Opp. PSBB School (Gate 1), Sector 8",
  area: "K.K. Nagar",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600078",
  full: "Old No. 260, New No. 54, Alagirisamy Salai, Opp. PSBB School (Gate 1), Sector 8, K.K. Nagar, Chennai, Tamil Nadu 600078",
  landmark: "Directly opposite PSBB School (Gate 1). Ample two-wheeler parking; leafy street shaded by copper pods."
};

export const CAFE_HOURS = {
  days: "Monday – Sunday",
  timings: "11:00 AM – 11:00 PM",
  kitchenCloses: "Kitchen closes at 10:30 PM",
  status: "Open Today: 11:00 AM – 11:00 PM • K.K. Nagar, Chennai"
};

// Configurable phone & WhatsApp constants per owner requirements
export const WHATSAPP_NUMBER = "919042888988";
export const PHONE_NUMBER = "09042888988";
export const PHONE_NUMBER_INTL = "+91 9042888988";
export const PHONE_CALL_URL = "tel:+919042888988";
export const WHATSAPP_URL = "https://wa.me/919042888988";
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Cafe+Me+Chennai+Old+No.260+New+No.54+Alagirisamy+Salai+Sector+8+K.K.+Nagar+Chennai+Tamil+Nadu+600078";
export const INSTAGRAM_HANDLE = "@cafemechennai";
export const INSTAGRAM_URL = "https://instagram.com/cafemechennai";

// Authoritative uploaded Cafe Me brand logo asset (exact uploaded file: image.png)
export const CAFE_LOGO_URL = "/image.png";
export const CAFE_LOGO_FALLBACK = "/images/image.png";

export function getWhatsAppOrderUrl(itemName?: string) {
  if (!itemName) {
    return `https://wa.me/${WHATSAPP_NUMBER}`;
  }
  const text = `Hi Cafe Me! I would like to order the ${itemName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ==========================================
// CROWD FAVOURITES (HOME PAGE SHOWCASE)
// ==========================================
export const CROWD_FAVOURITES: MenuItem[] = [
  {
    id: "baked-mac-cheese",
    name: "Baked Mac & Cheese",
    description: "Silky three-cheese fondue crust, slow-baked elbow macaroni, roasted garlic herb topping, and a melt-in-the-mouth center.",
    price: "₹260",
    isVegetarian: true,
    category: ["all", "pastas"],
    tags: ["4-Cheese Blend", "Gratinated"],
    badge: "Chef's Pick",
    prepTime: "15 mins fresh bake",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdxXdytsew4bNDUhIQcclS_kIy59UVvW4OFL3dhceLnlySZ0cgqryFGsFbw1JPVTwVlVnuDdbJH1EXor85TqKf3PRRz-lvGkpCxchYxWHiO3CuAFb0pjLX_MOe6VqpPA-EQza-lYvmi4CDtzx3zxV5C1pxPxbKdJhLxuenwIWC3STmT9EAlZu6KNHpumZM3dCJZTuA8jbR1Mnlwq5uQlKYVVIGZbOd8Ls3TWu2APhcIRmAxcdU-jfJhQ"
  },
  {
    id: "belgian-hot-chocolate",
    name: "Belgian Hot Chocolate",
    description: "Velvety 55% Belgian chocolate steeped into thick, molten heaven. Crowned with toasted marshmallows and dark cocoa nibs.",
    price: "₹220",
    isVegetarian: true,
    category: ["all", "coffee", "coolers"],
    tags: ["54% Callebaut", "Thick & Rich"],
    badge: "All-Time Star",
    prepTime: "Served piping hot",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN2VlI_AU4NOUoKDseLB7lxSElEKP6UHTAEMe2hyXNwGN9LQH9uKqvfSHn4HSrea9QcH9uG0Nmyohe7N1jloABmYJqK4Od8-VHUTN7QAbmaHjb5JFBaU62zyHLGSyO551S0bwJxHEO9wQdBy3mPoKvM_oTzutn_HZxGh_N4NXGqrmoDIvh0YRXcFklMOre6BQQi6DrK08IdjCrPbuf20UYhsQuAKcrCda7BIDOP4HwlmehS8JMRhbTJg"
  },
  {
    id: "crispy-cheese-momos",
    name: "Crispy Cheese Momos",
    description: "Stuffed with cheddar cheese, tender corn & finely chopped herbs. Served with our fiery house chili-garlic dip.",
    price: "₹190",
    isVegetarian: true,
    category: ["all", "momos"],
    tags: ["Cheese Core", "Twin Dips"],
    badge: "Evening Craving",
    prepTime: "6 pcs with twin dips",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWL4PNxrnwSBcSUz4rsdsf5AWr92TyUHhCP0_eiNsIQNdV-ivoOLxjJJHYGNzMNcBrfqchz294Nem2HmdpnkKM-9iNVroMa3VB9mf4cA6THiGYxi-xeibbhQGaU5mjl73N18zefmVLVkwv7JwZh6aVfN5LYlC4mNJn94eUUaUw8DJNgvGaPe0LlL8mebUoELQdJQ-JXgKuL6v9ixJ7tQcKdjb3jLaP-i1h2vFXZOdz6wLIxLWkH4Pl4A"
  },
  {
    id: "kk-nagar-filter-roast",
    name: "K.K. Nagar Filter Roast",
    description: "Slow-drip decoction crafted from estate beans with just 15% chicory. Poured high with thick frothy cow milk.",
    price: "₹130",
    isVegetarian: true,
    category: ["all", "coffee"],
    tags: ["Estate Chicory", "Slow Brew"],
    badge: "Signature Blend",
    prepTime: "Hot or Iced Cold Brew",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9kQ3bOvSlzoANRrk0lw2R5vEsZL9L9aMxMqXPudmcR1gDchYjph6uD_-MlWEbGOzf4i0oafBfHsf1nQU5a_wEXufw_drlhxk9cfNr-vYatko4dDpDmiW8S0Z3jca7fZL6Qrwbv0q_NR4u0BpgvInORi1-mzB8uZ1_7868K8dyZDqX67DO1A7_j_iJhWt-C8ZFlAoIW4YeItCtCc9oGSCIDNLG-KYo2nMsUHuckSvxWTG_kQZh6sf0rg"
  },
  {
    id: "nutella-smores-waffle",
    name: "Nutella S'mores Waffle",
    description: "Crisp on the outside, fluffy inside. Smothered in warm Nutella, fire-kissed marshmallows, biscuit crumbs, and vanilla scoop.",
    price: "₹240",
    isVegetarian: true,
    category: ["all", "desserts"],
    tags: ["Pure Nutella", "Cast-Iron Baked"],
    badge: "Sweet Tooth",
    prepTime: "Made to order",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTsScdvUHpLp1iVGBB98oo_tUchakjr3trdAalRGWcD2zKv1DGVgmktzBZR9RsOcEchsBTwmfNSoJjymFF3PSF25iogcj6fL1CqVFStUyYosiXJhduZ5lLSVNiWbiDgWT18ZeUFJYSvUt7A-JxtcYOBEP9J93UhEVpaDr2So_Dz7rchjBZWjpNMtsqjBCle_aDc2G3zz7I3e-C2CJQnez7yc7BBSzZHN-DkeNLqG3w23BdfmKC-8egTg"
  }
];

// ==========================================
// ALL DIGITAL MENU ITEMS (CHAPTER 1 TO 4)
// ==========================================
export const ALL_MENU_ITEMS: MenuItem[] = [
  // CHAPTER 1: Coffee & Coolers
  {
    id: "signature-south-indian-roast",
    name: "Cafe Me Signature South Indian Roast",
    description: "Steeped 80:20 Chikmagalur plantation peaberry and chicory decoction, frothed by hand with full-cream organic milk in traditional brass dabarah ware.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "coffee"],
    tags: ["Estate Chicory", "Slow Brew"],
    badge: "Chennai Heritage",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1wUXEo3UdobtWBCGyhuzQtrT_ZheIIkOjvYMY_--CiUupATel1usL_DjZMJuAgY9zwWj4mWaNcJOywqPuqILrJCgTCQPtOpbma5D44BjyK2WT18Di7FEvw067VzyVqA6pXFzhsySwJRQX7t-RHb-A4SFE_6hRkF9epEPFpWIlvFcft5g3uJ7m8Cak0-oE_YbWUqDhl7KF-iPYwaf4xpyLgVnnjrNvIYZKAKoU6ev3jO8W7xqzy1Hacw"
  },
  {
    id: "velvety-belgian-hot-chocolate",
    name: "Velvety Belgian Hot Chocolate",
    description: "Real 54.5% Callebaut dark couverture melted gently into steamed milk, laced with vanilla bean essence and topped with toasted vegetarian marshmallow fluff.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "coffee", "coolers"],
    tags: ["54% Callebaut", "Thick & Rich"],
    badge: "Bestseller",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgTZmEQUin7evITA51zdq_BwAgeTUqCn4ZjCZes5EfGZPt3SmRGI2FdKp28F7b1-zKi5aSnS6z65yy9LTcEaPo1fyZnVJ8CNOjvHKp5DXj93YC0BvY78sZEauDN0-fXXgHVAaHVDEVhT6ruIt9PFX20rJGU4BRNR7u3Uh5pSgJIu62n8Pq8eybMccrM0AEOvmvElvM4FatBW3x37MFeYaEXPrZUycKFlobSPf3BzutNlNSRv_kAb58Ug"
  },
  {
    id: "classic-hazelnut-cold-coffee",
    name: "Classic Hazelnut Cold Coffee",
    description: "Double espresso shot blended vigorously with house roasted hazelnut praline syrup, creamy dairy gelato, and crushed ice for that dense, velvety Chennai chill.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "coffee", "coolers"],
    tags: ["Double Shot", "Gelato Base"],
    badge: "Bestseller",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8gSVkLNB0dsnCgox8UL7cP7LDPFlZrQFqFbtx1o4OZJRGfL-sK4Cts5olIZ--uHAShGN-iC-mvKF-tVnAdHhQ_nnUeoui0vezOjZFJcWYDXQte9EysfTm6Q0KTPeAPVNCRKs-N7MLHZuz0kSNG-lpvRFqGzPvXGuFAzOWmX-cNhvwT9QlfFuSGlYYUr_PKKY7t0h_NsRYJ5ugiWZLqGWuGdiFH3aS7k1VBxnKDuyuURXnJtuRfoCjZg"
  },
  {
    id: "iced-spanish-latte",
    name: "Iced Spanish Latte",
    description: "Layered confection of sweetened condensed milk, chilled organic dairy, and a bold float of dark roasted espresso poured gently over crystal rocks.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "coffee"],
    tags: ["Tri-Layered", "Caramel Notes"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvzW5qG09mp_oribfABdzcO494Se6eqdSudzJgKTpFh4NQ0vvrzomgTxO1ElFUdAC2Z9HcPEwtFBrrHMVJcJW-fAzHjPj5D6DyUmirr8KQiDpA1faL95CoII8SWjM60ipMFuSVEq1ZfiSqZC4bCsWSxC4MZhIGZRM9uXEM6qwLIT0kdAvWG8IVhlcei2sF1cW483RHb4I2D1TicRSkqTgYbwWqzahjTyVI4eaHGCQTr7eAx0aCQZ8D5Q"
  },
  {
    id: "hibiscus-berry-iced-tea",
    name: "Hibiscus Berry Iced Tea",
    description: "Steeped Nilgiri dried hibiscus calyces infused with crushed forest berries, lemon peel reduction, and bruised garden mint for a crisp, tart palate refresher.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "coolers"],
    tags: ["Nilgiri Flora", "Zero Tannin"],
    badge: "Naturally Vegan",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYy8Yk4fc3J3SyldkcbwCL1-qmgXSxAE3zUbm66AgzH2JOGf78cbpVKcIhgqhZAUaMcNIT3o_-TvaYeNnvMZfl8HqUu7-bXLBnFQu1562SVjkKvOHP1rWFdCvjgulYi7JZetjxhAtEPTKyRDFSx4FQXDiQDmgHIulBm1RFzF3KIP_OjZmgAAy8_sHKYmld7X1WJCsK2Fu-TIJgWn7NyypMHQ8rEYQfaiDyyOXcq6NBhiM1-zfi8s4_Zw"
  },
  {
    id: "affogato-al-caffe",
    name: "Affogato Al Caffe",
    description: "A dense quenelle of Madagascar vanilla bean gelato served in chilled crystal, drowned tableside with a scalding double shot of dark-roast espresso.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "coffee", "desserts"],
    tags: ["Madagascar Bean", "Double Ristretto"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA52b4Pd1XoiENp5BzbqFQXgQHCESd2F7BkPDpVvLFgPfV0SosOG74c7aZzUhtCRVshJ6uKY0HwxdWnY5gTo_yqab4LWTFCAxS8hRVOc9BBcFBzgqy5NQXrVTW6-XApsX-PcYI4_OxsSGtsIO8F8cpP_BmQXCDi3fpYkYgKS-64yBDFNeWORb9ugdf5XngKTQ24oSWfafUN9ksDzDGaEu4tyaD_yunSnKTXddcdbWZPKSyo8b4Ninveiw"
  },

  // CHAPTER 2: Artisan Pastas
  {
    id: "four-cheese-baked-macaroni",
    name: "Four-Cheese Baked Macaroni",
    description: "Elbow macaroni enveloped in a decadent fondue of English mature cheddar, smoked gouda, fior di latte mozzarella, and aged parmesan, oven-gratinated with herb sourdough crust.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "pastas"],
    tags: ["4-Cheese Blend", "Gratinated"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8bGiCl5IUWRHqxmnGCyAgU-PwezWKIlkUblJK9qtr9KFAN6zMEsUwEoghKeEI2cnXDjB7Hp2FUDiq7rMzj28XgpQUUefpc3RLF0cMBJw6w9eC4pemxbJRpR2_KjoXMd6Kph30wxRGVLY_rKFZJ4rH17rt1vhuM_Wh9ijuoTslmysUk1TazGjF5wgrTyDlhrir_JPU4foWfs1Qy-XUCrIuqSZBP_YGDqGCaX4TYqvHs9qoLzQmmA6b-A"
  },
  {
    id: "sundried-tomato-pesto-penne",
    name: "Sundried Tomato Pesto Penne",
    description: "Penne rigate tossed in mortar-crushed Genovese sweet basil pesto, slow-cured sundried tomatoes, toasted pine nuts, and cold-pressed extra virgin olive oil drizzle.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "pastas"],
    tags: ["Stone Ground Pesto", "Pine Nuts"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuADXq1itw0RoKl99Xjtf4Ly7d_hxDleDvaDG4zd_zbGl5iZfXchqFN1G68LcUFNzt98KKnuPLQh-95SiJSxZ80NPuuHjbdg5VXBNVMTuDnIZHTLvDDRaxFlkF2YbNanR1dtrF5UA14qkYSHOw7sJIgVgpFeuiVZonZDux98bf-cfYCcxCCyylGjP_EavzqxdCPeRig5Keq88VQHGkjYJ9nzZukEtOgPBbos4xjArippp9ijE4inpGkzjw"
  },
  {
    id: "creamy-truffle-mushroom-alfredo",
    name: "Creamy Truffle Mushroom Alfredo",
    description: "Silky fettuccine ribbons smothered in rich garlic-infused heavy cream, pan-seared button & wild mushroom medley, and a fragrance of white truffle oil.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "pastas"],
    tags: ["White Truffle Essence", "Handcut Fettuccine"],
    badge: "Chef Recommended",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnjoUMTETCbvI8-r-UAEJI-dECUkvPhUgcDqUcEwUzxtTFdiEkdJt_qlUOTCD26KvXq_83etiOmxs7VJyT_PFOQdQ5_iHFlbUp4_KDX9lLwMDWGBsF8O-aLt50hbxtJHm7tY0UBHs0Zh-0BbzvEElrkbOAMGPAyNmFgxkoZsStaTtnw8ckedelQOfz3nK9e0oR_jwaIB9JYFaZjwjZbsbT9zhUcpgyV08IxduOq8JjhPg4xFaj4z70OA"
  },
  {
    id: "spicy-arrabbiata-garlic-toast",
    name: "Spicy Arrabbiata with Garlic Toast",
    description: "Slow-simmered San Marzano plum tomatoes with roasted red chili flakes, crushed garlic, and fresh Italian oregano. Served alongside two herb-buttered sourdough batards.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "pastas"],
    tags: ["Spicy Pomodoro", "Crisp Garlic Toast"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwk17lwN-Rbt7bPsfBMm_bPfANFqawuJ5OKi8nXYKLtr0t4buj-1YFJAopDDKZ4NDpSjQNfVkzDbaXO-0c-V2NKFbLEBHebaTWULLZVTpt0qLWxPso_h1B9ldzkHsBNl4xmp7LPrJFNIF3vG8T_4GjScmybL_nfhnx_djiA20YIa71ak0gnjFmr8qBQ7BNsbJ7Xv16PcTr40bAS5O8nmoBnwswPskV4AN8A-1bGbynbhsiPINgaBsIqw"
  },

  // CHAPTER 3: Momos & Starters
  {
    id: "cheese-corn-steamed-momos",
    name: "Cheese & Corn Steamed Momos",
    description: "6 pieces of translucent thin-skinned dumplings stuffed with tender sweet American corn and gooey mozzarella. Served with hot scallion garlic dip.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "momos"],
    tags: ["Sweet Corn", "Mozzarella Core"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOBkeEILWLWcHU-A_dvvIYQUnJI00eUmvY1Z5C-VroNHJd9uOJe7lVs5KVUjqylQhqsEr6G3v034so8TCA-vx5c5YXAeFv8RJZkANob60mFf-lcyOxxRvuLLbWACokjrhCVflOjlcoqshmrmeCwU_zH1g5y_3JBTuGD_QxO6BNy4gWwOruQnOzd_s1gLuT1ZjB7ZpF0fJnndxFGqUwiI9JnR02p9n4Z5czgpnKZrDCCotdv5dLU7hcOA"
  },
  {
    id: "peri-peri-kurkure-momos",
    name: "Peri Peri Kurkure Momos",
    description: "Craggy spiced cornflake crumb exterior with a moist garden vegetable filling, tossed in zesty African bird's eye chili seasoning.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "momos"],
    tags: ["Cornflake Crumb", "Bird's Eye Chili"],
    badge: "Extra Crunchy",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpb2PSmIQ4oHjmUwNToErcTc3kS0-jH-AUK3TUC-cl3jJBq6ehcR7I6EniPQjrqwNUu6TAEfl8xJEL7XpiNhJyUOd1gd5u_L7DiVBO3tttG9YiV7GddKschzJK1fUVjZrFBIalvNolBJwlxxAKkuBeTfU5C9jIqkXhmst1fKywcT-MyQyhnph_p0SSR1iKPTdUKVQ-lKQ8xtqzXT7RHjaQr99YQ3BmvMZ6RtpUKiZxBVIpgKHi4xg-0A"
  },
  {
    id: "paneer-tikka-pan-fried-momos",
    name: "Paneer Tikka Pan-Fried Momos",
    description: "Steamed then pan-crisped kothey style, stuffed with charcoal-smoked malai paneer cubes marinated in yogurt and yellow mustard spices.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "momos"],
    tags: ["Charcoal Smoked", "Kothey Style"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRIo317BEofcE3QMlxkLrcmuWrcUvglTkNU5PNIacMX-TnZHStJB-tEqKMuDdlOddh6yBq-phcjdSgkCAX78dOsjkwSlWtDTEkedWs7rMqWh40PTSFkPfpNFW7IkGCyKsRqCqAiW9MLIuhgv_B7mQAjBtYS0lDXCZeYZPbdH_OtbJ2UhMnomENisHTFZvq7vT75oCH5o72kLhXYGwun5s189RO9gRTKC0dnGZJkIIn3UNCkzmac30VXA"
  },
  {
    id: "loaded-jalapeno-fries",
    name: "Loaded Jalapeño Fries",
    description: "Skin-on double-fried potato batons smothered in house warm cheese sauce, spicy pickled jalapeños, and smoked Spanish paprika.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "momos"],
    tags: ["Double Fried", "Cheddar Melt"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwlhJJhyj5jiv1MwZX5eDEEZEhEkv5cRiIUbjgB2qg29KBvB4H_C71lpLqaPQuuof8Vy7jFxB-0za89EAvTiHxT78udNWZK3eSx8GZJ_VicXpqvTKpcRadf0DXPXWa-7amXGw2VlTIjUy3LyhKIIXBc5UYqcXKMv16UXmYjY88xERDS21KxoiwdKLHjuC_jGjxahcsYBwIJYfMB7pYSI4jIRyKzfvgIwzMYCcedA6vsof4FyA5vHEBnQ"
  },

  // CHAPTER 4: Bakes & Desserts
  {
    id: "classic-nutella-belgian-waffle",
    name: "Classic Nutella Belgian Waffle",
    description: "Crisp-exterior, pillowy eggless waffle baked on cast-iron plates, flooded with hazelnut cocoa spread and sprinkled with roasted almond slivers.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "desserts"],
    tags: ["Pure Nutella", "Cast-Iron Baked"],
    badge: "Freshly Baked",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDASH4lhlb-IB30lvv84NUPiJbkiE-orN958xKZnx4qVJFULAkTBV24eDCbu9mfiHWFh289o_9VSBYsKk9k-XO6BBMwuKlaZMCYp_IGCINo7n1ajgkJ8YNBF8tspQgtJ0FSOqRcmfWHGy0rpC_O29CJaaQn2TqtklHeKJT34Terq_x70Fwgh3sBRQIpbddE1YFPCJg5WQhmYRU8F64zqE43ytG6x5O9oKGiSY94KxxLqw_V84pSE81WLw"
  },
  {
    id: "warm-brownie-with-bean-gelato",
    name: "Warm Brownie with Bean Gelato",
    description: "Dense 70% dark chocolate eggless brownie served warm from the oven, accompanied by artisanal Madagascar vanilla bean gelato and dark fudge coulis.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "desserts"],
    tags: ["70% Couverture", "Eggless"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlTIKdiXNhfZVy-vQITBVizgjcg4oQT03MA6h-JTMyUIlPj1HOJ7RMq5-uhPXV2Ye9xNqwl31kv1VhjRjzyEifvw1CklBgqCbYQ1VFQDTm1M3875B7j2j-bb9DGYNRI533RULKCh7cInUZwAvAFLMhm2ZgN8FEJRpd1rqHBMrlusHMom1npX_FAhW1t-Y3eazy9ead-iUmum7q9u-nnnYv0Z4TQ14Z8-SpkMUmchOLKJaifzPcQFWQ9w"
  },
  {
    id: "lotus-biscoff-cheesecake-slice",
    name: "Lotus Biscoff Cheesecake Slice",
    description: "Smooth Philadelphia-style cream cheese mousse layered on a spiced speculoos cookie base, finished with warm Biscoff glaze and biscuit dust.",
    price: "₹ — Live Price",
    isVegetarian: true,
    category: ["all", "desserts"],
    tags: ["Belgian Speculoos", "Cold Set"],
    badge: "Speculoos Crunch",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwH6uw6NV9jAtJAjPNgGEXbnVnHxcXjepNRsKq2-DseL7dup3xezplUrecxAy5MGTqOrRwJBzgS6S3F7yFKqciHGiyGDKdKafiT2DnMkvHaOFpOQlzJaj3-g14_TvTd8xoYq27tCeyjTCgzHe7onmZ5dacrV4vcPcNgXo6yYyFs9HNHads6-fOiAPZ92Lgs4yOAXv-uQHO8ksR1FyPND_Q17oA6j7kh-RIZXWiHcneQmOQrvxqbh4rVA"
  }
];

// ==========================================
// GALLERY CURATED FRAMES
// ==========================================
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "The Red & Mustard Awning at Twilight",
    subtitle: "K.K. Nagar Sector 8 Landmark",
    category: "vibe",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEWZrSm4yi6cZakwdrN6bbTQzGxaj63M69TIB_NFcKYjfbsvNl0GhAhociWYtTbTyy2vKg5iQIkyxpzyrtCFRQF3P6C4zxCWTmj9ZdcMeWVp35E-c5SCNRUP6dLjAcXQ3u6h5RnQzYKVDDRYxyPLRdBz1_xJ-Fa6HT6VmCNZQVUymJ3I0wAWjUX0xaY7zTQkvRGyb0DzoCchwca8hQbFz8qMmQ6QOJ1dCAmiCib0H4fMnIh8uKie22aA",
    colSpanDesktop: 7,
    rowSpanDesktop: 2,
    badge: "Twilight",
    tag: "Exterior Architecture",
    caption: "The iconic red and mustard awning glowing warmly on Alagirisamy Salai at dusk."
  },
  {
    id: "gallery-2",
    title: "Velvet Rosetta Latte",
    subtitle: "Artisanal Pour",
    category: "brews",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqpEzt0dOFUwEC7_zziFrad2-nWIcPriXOMImj9ltkl2-13CWFBgKCwsTyfwnEleF2NXSHEL2i0kQcnepMMkCTjq7yc53dONNbwIOwzWtdJAuLntd87w8ajlimlSRuGrKhv0Jh2LX02ze8ufZbmduguNpMN3UpWuKzV5ItiZCLGg_C-3aKflAy4VfCDp4nk_fHWq2EpJR_snf5cNY9FPoa1iQ4Wm8mXJmxli2L2imFHIUmhAejID3MNw",
    colSpanDesktop: 5,
    rowSpanDesktop: 2,
    tag: "Barista Craft",
    caption: "Barista hand-poured rosetta latte art in warm ceramic stoneware."
  },
  {
    id: "gallery-3",
    title: "Baked Skillet Mac & Cheese",
    subtitle: "House Specialty",
    category: "food",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRaaGeBdwrMIb60_kDWd4dUKZHtHYiph-oSEwk0me1egnmMjSzo19ShrnbSmTFGMayTcpJF1rvhsgg1dWd5vOKDQo-XQvOebhrK4aA-k5VSlcaW9ImInag2wMhjQq-RqtF98WXj9h5jDm8mgg3ZE5M4niCOMmirWEGZnn6u2ck-HF_e96C4vQgEsnBJpB_clSJarKkS4tdoVn-tAUfe2jA_NVrq-ub4m51eiFO6eTH3ApfvVpVXdhK0A",
    colSpanDesktop: 4,
    rowSpanDesktop: 2,
    tag: "Comfort Platter",
    caption: "Decadent four-cheese fondue pull fresh out of our stone bake oven."
  },
  {
    id: "gallery-4",
    title: "Where Memories Brew",
    subtitle: "The Motto",
    category: "vibe",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZXvPokuolUzSmArUC4fd28NgnofHySMSQtoDNsbSQGM6bFzWkwYk7T-DucRF7m0r9ZeIYX7plvWTgVo46xFfBle4xqvdzAfr0izkJKxAm1OP1fK7004M1Bv038wyyCwiK9iU97c1nMTIEpy2RBlqdqTbZSPPT_H5vxdrbDesn5TA6KzD55HQuZy4IXeTj5e-BNxCJ9sJlfnj42RmlEOnBrItx9gGMCIHgfJDZc4we_-ITDXEdGKe1dg",
    colSpanDesktop: 4,
    rowSpanDesktop: 1,
    tag: "Artisanal Neon",
    caption: "Warm amber script on whitewashed brick surrounded by trailing devil ivy."
  },
  {
    id: "gallery-5",
    title: "Steamed Himalayan Momos",
    subtitle: "All-Day Snack",
    category: "food",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgcZfHOcJiWbA1wo_vEWT1CoNKAuLnYPDpCO5JZRXVnxzh1lCRy2P-PUgAEIKWIIjcZXIVMUmKEX5UQlQhrEw_YjqbEkgc-nLrts6uMMvbOxur0QS24yTsTPGbK6mJIy-OBbylNku8UDqDxASfdP0l44ToaOD4Ca95d-5oj36MVK3U5AEF3Ag3orQTPUq7YCfwz_7wDgk2q_WCI6rdk8XOh5wu5EQ1q1xue55a2JF3swelQscq3lBlJg",
    colSpanDesktop: 4,
    rowSpanDesktop: 2,
    tag: "Street Gourmet",
    caption: "Freshly folded thin-skin dumplings in traditional bamboo steamers."
  },
  {
    id: "gallery-6",
    title: "Campfire Hot Chocolate",
    subtitle: "Decadence",
    category: "brews",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMSCTOESQ7HmcL0SXzF5VvEYiyr_GO8gMptfIh-XsZQW4tqLGa9Lw8qQgPDWNxIVt9PudlZ-BL6YwGECtOzgY9D6QHHrUDxkKc551jev3lqUthawkLgjslVwo8grzF_G3kSWwHExATJRXQPk8S8PUbzrc2WNcPz5zFCRRUTiLBD7KzVUkGWGLjvtKH_p9yT-wsO95H9CO5IHOHqEWswfaZjL1swYpt9NPQTynUO9xdgMZp54eO62b3_Q",
    colSpanDesktop: 4,
    rowSpanDesktop: 1,
    badge: "Winter Pick",
    tag: "Decadence",
    caption: "Steaming Belgian cocoa crowned with toasted marshmallow fluff."
  },
  {
    id: "gallery-7",
    title: "The Sunlit Reading Alcove",
    subtitle: "Quiet Hours & Slow Living",
    category: "vibe",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL-mHsCdQz9BIhvN5cdgrrkWPAt05V_yGj0PEfiuNzJYWVMuDdjJJ0cL3MgMB3Gt3CuOgcrkr-FGbMu3K9kuCKI3AVu4vqnyMtYLKjJFyh0Rms2NUKmBuesCStC9sV15viX02GN4f9vHm250YgBccyfee-8Vu4BCCVNu-Y4ZGfaYOVQTw0FYp1MVJiufUQIKSr0zOsy9K_pVpigMeWFE1bAYorM8PU2MdopHd9HMt13jzH3jKEUM0W-A",
    colSpanDesktop: 6,
    rowSpanDesktop: 2,
    tag: "Library Nook",
    caption: "Sunlight filtering through linen curtains onto community bookshelves."
  },
  {
    id: "gallery-8",
    title: "Post-College Nacho Banter",
    subtitle: "Weekend Hangouts",
    category: "memories",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkoKnTnkBjiEAPSEA42DEx8r3E1yjrcZlV_73Btd4Pi5R82YW2zxLhPSsCEL1Cvnb5ug2CxxIjWnnt7fhwKYJ9gSvCwr0bnfhWGUcCJN3S5SIhBuPpLlrt5uCce7EanIDYMNJAtxlj7af8bgfld11luAn9FXYpNQt0Xn00YVaZGi5Y-DBXRt7BgqXQxSlVQDt0zLiD0288CGAG5jjMrIOkYuFW3QA8yJLM7DxnVuyX7KzuUe4hEUsqtg",
    colSpanDesktop: 6,
    rowSpanDesktop: 2,
    tag: "Community Joy",
    credit: "Shared by @ashwin_r on Saturday evening.",
    caption: "Joyful conversation over loaded nachos, Oreo shakes, and laughter."
  },
  {
    id: "gallery-9",
    title: "Degree Filter Kaapi",
    subtitle: "Chicory & Arabica",
    category: "brews",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpTL0aB0vLc3CwFDuF2aO2eIAdhZDJ9U0FCRe39jNNpGM666l56iySEpIdPzEnX3O4dudyJM6Lg3G6wZIRAg7gOsr8lgmson1sdzhsKtVl2kPcGPTTZ0MT9TjKSoFXmJg1uNBq5z33BrxL-yWWD3RGFI6akmiC8qTN5haUzd9lZ3hzY9w8zv0Nz_FhHuLUxK__JNoFDX05RIpx-tK76sqXqXEXiUMymBD26vKOarGEpoFoFHmJDteivw",
    colSpanDesktop: 4,
    rowSpanDesktop: 2,
    tag: "Madras Classic",
    caption: "Foaming brass tumbler filter coffee poured high the traditional way."
  },
  {
    id: "gallery-10",
    title: "Parmesan Truffle Crisps",
    subtitle: "Tableside Crunch",
    category: "food",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL-lCgxyHDVIf22f6nm2MsiSCeG9-PAlzQq8K0mFH_pumn_5BVGfTiFFAuv6ZQHMs8rnNOqiVofuq0ncsjRSWwdePpSjr3UGTQCJQYvDZZ7ntHB3107wzBW3_KJ1M9fBGVvzweVC_U7JKu4lOfkjOzay1nckPoSk6mVGSsxL1cdWE_7xp_AvBLlA4nbAeET-L4LgvGxz-anjIn5Vv-BZkhhOodUUdKinHh5vqjatfo5yMCuhdGN7_tew",
    colSpanDesktop: 4,
    rowSpanDesktop: 2,
    tag: "Crispy Bites",
    caption: "Hand-cut french fries tossed with truffle oil and shaved vegetarian parmesan."
  },
  {
    id: "gallery-11",
    title: "Pages & Cold Brew",
    subtitle: "Slow Afternoons",
    category: "memories",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIMb5Q4k5nSHE8VtPltOb2ek05UMQfRyART-hTdNL_rxzUyid0CqNzXl2hh_endCQ111as-AOT7igCGDYXmSBcomIVY0fq-7fMaeqASSIrJJdHf_XZkZNckm3ooLC8e1z66TtJ_Rlv3GVyZwlQLrbJ2Yoq7ivqU1g3v6AbVpwNoqhx_zoCRFhIflahB6ALpdKYEIbM_7Tj1iBIj2GlpZ3S8dpWpSZD_UnWpBgJXb5s3aX37hbIMkm84A",
    colSpanDesktop: 4,
    rowSpanDesktop: 2,
    tag: "Solo Sanctuary",
    credit: "Photo by guest @divya.reads",
    caption: "Quiet corner solitude with an iced cold brew and a gripping novel."
  }
];

// ==========================================
// VERIFIED COMMUNITY REVIEWS (FROM STITCH)
// ==========================================
export const COMMUNITY_REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    author: "Ananya Ramanathan",
    role: "Local Guide • K.K. Nagar",
    rating: 5,
    date: "2 weeks ago",
    comment: "The hot chocolate and mac & cheese after school/work is unmatched! Very aesthetic seating right opposite PSBB. Staff treats you like family. Our regular weekend hangout!",
    initial: "A",
    avatarBg: "bg-filter-foam text-cafe-crimson"
  },
  {
    id: "review-2",
    author: "Karthik Sundaram",
    role: "Chennai Food Explorer",
    rating: 5,
    date: "1 month ago",
    comment: "Being a strict vegetarian, finding a modern café with pure veg pastas, momos and rich shakes is rare. Cafe Me nailed it. The crispy fried momos dip is insanely addictive!",
    initial: "K",
    avatarBg: "bg-mustard-awning text-espresso-dark"
  },
  {
    id: "review-3",
    author: "Pooja Venkatesh",
    role: "PSBB Parent & Resident",
    rating: 5,
    date: "3 weeks ago",
    comment: "Coziest vibe in KK Nagar with warm hosts. Great spot for remote work in the afternoon and catching up with cousins in the evening. Must try their Nutella waffle!",
    initial: "P",
    avatarBg: "bg-filter-foam text-cafe-crimson"
  }
];

// ==========================================
// FREQUENTLY ASKED QUESTIONS (ABOUT & VISIT)
// ==========================================
export const STORY_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Why strictly pure vegetarian?",
    answer: "We believe vegetarian cooking, when treated with craft, global pantry ingredients, and patience, is boundless. Our entirely meat-free kitchen ensures comfort, inclusivity, and pristine hygiene for every community member walking through our doors."
  },
  {
    id: "faq-2",
    question: "Can I sit with a book or study without being rushed?",
    answer: "Always. Cafe Me was built as an antidote to rush culture. As long as you respect shared tables during peak evening rush, you are warmly invited to read, reflect, write, and sip slowly."
  },
  {
    id: "faq-3",
    question: "Where do your coffee beans come from?",
    answer: "We partner with boutique, sustainable coffee estates in the Western Ghats (predominantly Chikmagalur and Shevaroy Hills). Our traditional filter blend features an 80:20 Arabica-Peaberry blend slow-roasted to an aromatic medium-dark profile."
  }
];

export const VISIT_FAQS: FaqItem[] = [
  {
    id: "v-faq-1",
    question: "Is all food pure vegetarian?",
    answer: "Yes, 100%! Cafe Me is proud to be a strict pure-vegetarian kitchen. We take immense care to craft rich artisanal flavors without meat or seafood. We also bake eggless pastries and offer oat and almond milk substitutions for all hot and cold espresso drinks."
  },
  {
    id: "v-faq-2",
    question: "Do you take takeaway or party orders?",
    answer: "Absolutely. You can place your takeaway parcel directly through our WhatsApp hotline before driving over. We also prepare party packs of sourdough sandwiches, appetizers, artisanal dips, and celebration bakes for home parties across K.K. Nagar, Ashok Nagar, and Vadapalani."
  },
  {
    id: "v-faq-3",
    question: "Is there parking available on-site?",
    answer: "Yes. We have dedicated, convenient street parking along our wide avenue for two-wheelers right outside our gates. Car parking is comfortably accommodated on Alagirisamy Salai and the adjoining residential avenues, which remain calm and tree-shaded throughout the day."
  },
  {
    id: "v-faq-4",
    question: "Do you host workshops or private meetups?",
    answer: "We frequently host weekend book clubs, embroidery circles, coffee cupping sessions, and acoustic evenings. Ping our team via the inquiry form with your proposed date and group count, and we will arrange seating and curated bites."
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "insta-1",
    handle: "@priya_clicks",
    time: "2d ago",
    caption: "Sunday evening ritual sorted at our favorite KK Nagar spot! Best cold coffee in town ☕✨",
    likes: 342,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA9Uj1tZZmxYEF9EY7HRgDm0VlofNUr_YQD4MGhA5nz8EcBzLUNeWf-2oreW7mM_r_e-Z8HSpdOlyD4Nk-vks1RaDuEF5HKjGWwsrl4Efpxutg87QXaACZFWBM9JGMXcsV_dAZoVuf5nUggHYMUZCUxw4-46rx0a74tgty69iBHIV37mv0PjUL_uMIQcZaMIMsO4qe5I3aSWoEJ3K_-cZ1PUAJzwTSNuDXCBl3XKL6MYb1GEp9nsWScw"
  },
  {
    id: "insta-2",
    handle: "@chennaifoodjournal",
    time: "4d ago",
    caption: "Crisp sourdough with melted cheddar & green chilies. Pure nostalgia! #WhereMemoriesBrew",
    likes: 519,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGeC3gyM1hThqGvvT-HfPRgzFORtRkHfU2cldDeM-EXpvAzdrfAowlMbabhQjXH9tqlNmt20TcI_pYpQg39DEYBILulQW3IAeoq535BIM_ohFqVnoF4hfyqWLWfndWNMJ2ysjR-_TvWm23kuUmYoyKejBIOtd88gu07iLlnj9WULm6GLyi98B2JpbWodacvN6DZ-VIAYh4T8rA_3XApwl4Yiyd4Td_Psna1IvAS99w3gYC9-hfPGV8CA"
  },
  {
    id: "insta-3",
    handle: "@anand.writes",
    time: "6d ago",
    caption: "Rain tapping on the glass, handwritten notes, and piping hot coffee. Nothing beats this tranquil corner.",
    likes: 487,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVtArrpeCwBU5PAlR4XI_xt6QMSUVGzYBG4dBCI6AJbkeYjKDguOzSn4Up2MZpeULMVTurAowC1mXrM4636NjcitF4ZLbc_-ceod3hOv29bODxvj2peTZ8ZF5nNtBHPy0xnQ1MH73IkGJgUEOu1PYY3peKWwPyjkaIRBPBkvMkndk3fV1ddp0Hs7Vk5OesFMzoeJAIKzQ4-dzCTncaTF3-JQy06otx7goAoRYWXtcbEivE6FcasjEmZg"
  },
  {
    id: "insta-4",
    handle: "@the_iyengar_family",
    time: "1w ago",
    caption: "Celebrated Mom's 60th birthday here. The staff made it so memorable and warm! ❤️",
    likes: 890,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWT1UWJ9oMI8gdoSu1lCScm9VrQr-aOE8xdcJG88ze5ERy-e1-izezDy7kKS-mG5it879Id6V07OneKp88kmbsKG881aANVnAybaKDEC-65iyDHPM-uJPMJ8-773eepP7tphpjGY5avesC6lbBtDuegJanzzcbJPo8KO1Dkj9_fzjg7wQNh8HBBRG0-V2sCDkaA4I1_cynerfvW1s9Zr-595tuv6NCQmXbs4SYlwsMM3kZ5NauTx187w"
  }
];
