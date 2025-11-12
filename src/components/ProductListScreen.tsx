import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Category, Product } from '../App';
import nikeAirMaxImg from 'figma:asset/76e204c38dae800b0bbd2301e8e4893b6ea956ce.png';
import pumaVogueImg from 'figma:asset/a9b202ca3655e552814b321e110fb8e570267a1a.png';
import kswissImg from 'figma:asset/98ff7b2675ef3efa3682a7cd2d76e8e58c12487a.png';
import starLogo from 'figma:asset/93a8753ad858f757b1413489ff0481f51289e4a5.png';

interface ProductListScreenProps {
  category: Category;
  onSelectProduct: (product: Product) => void;
  onBack: () => void;
  onGoToCart: () => void;
  cartItemsCount: number;
}

const products: Product[] = [
  // Ropa
  {
    id: 1,
    name: 'Supreme Box Logo Hoodie',
    price: 8999,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1624421918912-298449130024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXByZW1lJTIwaG9vZGllfGVufDF8fHx8MTc2Mjg3NjcwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sudadera Supreme con logo box icónico. Edición limitada, 100% algodón premium.',
    condition: 'Como nuevo',
    size: 'L',
  },
  {
    id: 2,
    name: 'Gucci Leather Jacket',
    price: 18500,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1551283279-166ab6d719af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwbHV4dXJ5fGVufDF8fHx8MTc2Mjk2MDkzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Chamarra de cuero genuino Gucci con herrajes dorados y forro de seda.',
    condition: 'Excelente',
    size: 'M',
  },
  {
    id: 3,
    name: 'Levi\'s 501 Original Jeans',
    price: 1299,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1762025396099-c46130d47ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGplYW5zJTIwZGVuaW18ZW58MXx8fHwxNzYyOTYwOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Jeans clásicos Levi\'s 501 en mezclilla de algodón 100%. Corte recto original.',
    condition: 'Buen estado',
    size: '32',
  },
  {
    id: 4,
    name: 'Nike Tech Fleece Joggers',
    price: 1899,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1597767938316-e3b197db76ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwdGVjaCUyMGZsZWVjZXxlbnwxfHx8fDE3NjI5NjA5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pantalones Nike Tech Fleece, material ligero y térmico. Perfectos para cualquier ocasión.',
    condition: 'Como nuevo',
    size: 'L',
  },
  {
    id: 101,
    name: 'Adidas Firebird Track Jacket',
    price: 1599,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1586360727847-108cbb274ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjB0cmFjayUyMGphY2tldHxlbnwxfHx8fDE3NjI5NjA5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Chamarra Adidas Firebird clásica con las icónicas tres rayas. Poliéster de alta calidad.',
    condition: 'Excelente',
    size: 'M',
  },
  {
    id: 102,
    name: 'Gucci Cotton T-Shirt',
    price: 4500,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1649439081580-c871799f19b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWNjaSUyMHNoaXJ0fGVufDF8fHx8MTc2Mjk2MDk0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Playera Gucci de algodón premium con logo bordado. Diseño minimalista y elegante.',
    condition: 'Como nuevo',
    size: 'M',
  },
  {
    id: 103,
    name: 'Ralph Lauren Polo Shirt',
    price: 899,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1609655106619-9d28f4f79c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHBvbG8lMjBzaGlydHxlbnwxfHx8fDE3NjI5NjA5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Polo Ralph Lauren clásico en algodón piqué. Perfecto para un look casual elegante.',
    condition: 'Excelente',
    size: 'L',
  },
  {
    id: 104,
    name: 'Off-White Bomber Jacket',
    price: 12999,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1760126070359-5b82710274fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib21iZXIlMjBqYWNrZXQlMjBzdHJlZXR3ZWFyfGVufDF8fHx8MTc2Mjk1ODYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bomber Off-White con detalles característicos de la marca. Streetwear de alta gama.',
    condition: 'Excelente',
    size: 'M',
  },
  {
    id: 105,
    name: 'Carhartt Cargo Pants',
    price: 1499,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1649114393978-42dfcdb0c313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHBhbnRzJTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NjI5MzY0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pantalones cargo Carhartt de trabajo resistente. Múltiples bolsillos y tela durable.',
    condition: 'Buen estado',
    size: '34',
  },
  {
    id: 106,
    name: 'Vintage Band T-Shirt',
    price: 699,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1565609339309-10c53fbe68ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFuZCUyMHRzaGlydHxlbnwxfHx8fDE3NjI5NTcxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Playera vintage de banda de rock. Algodón suave con gráficos desgastados auténticos.',
    condition: 'Buen estado',
    size: 'M',
  },
  {
    id: 107,
    name: 'The North Face Puffer Jacket',
    price: 3499,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1713448721104-ecdcd999f341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWZmZXIlMjBqYWNrZXQlMjBub3J0aCUyMGZhY2V8ZW58MXx8fHwxNzYyOTYwOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Chamarra acolchada The North Face con relleno de plumas. Abriga perfectamente en invierno.',
    condition: 'Como nuevo',
    size: 'L',
  },
  {
    id: 108,
    name: 'Champion Reverse Weave Hoodie',
    price: 1299,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1626610761515-b6b224c8399d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGlvbiUyMHN3ZWF0c2hpcnR8ZW58MXx8fHwxNzYyOTYwOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sudadera Champion Reverse Weave de tejido premium. Logo bordado característico.',
    condition: 'Excelente',
    size: 'XL',
  },
  {
    id: 109,
    name: 'Hugo Boss Dress Pants',
    price: 1899,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1760545183001-af3b64500b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVzcyUyMHBhbnRzJTIwZm9ybWFsfGVufDF8fHx8MTc2MjkzMTkxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pantalones de vestir Hugo Boss en lana premium. Corte slim fit moderno.',
    condition: 'Como nuevo',
    size: '32',
  },
  {
    id: 110,
    name: 'Patagonia Flannel Shirt',
    price: 1199,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1658710761111-f8cfb5c370c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFubmVsJTIwc2hpcnQlMjBwbGFpZHxlbnwxfHx8fDE3NjI4Njg2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Camisa de franela Patagonia a cuadros. Algodón orgánico cálido y cómodo.',
    condition: 'Excelente',
    size: 'M',
  },
  {
    id: 111,
    name: 'Levi\'s Trucker Jacket',
    price: 1599,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1556041068-5874261f23e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldCUyMHZpbnRhZ2V8ZW58MXx8fHwxNzYyOTUxMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Chamarra de mezclilla Levi\'s Trucker clásica. Icónica y versátil para todo clima.',
    condition: 'Buen estado',
    size: 'L',
  },
  {
    id: 112,
    name: 'Adidas Tiro Joggers',
    price: 899,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1597586740347-a5a9d9a93e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2dnZXIlMjBwYW50cyUyMGF0aGxldGljfGVufDF8fHx8MTc2Mjk2MDk0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pantalones deportivos Adidas Tiro con las tres rayas. Material transpirable.',
    condition: 'Como nuevo',
    size: 'M',
  },
  {
    id: 113,
    name: 'Nike Windrunner Jacket',
    price: 1699,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kYnJlYWtlciUyMGphY2tldHxlbnwxfHx8fDE3NjI4OTExODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Rompevientos Nike Windrunner con diseño chevron icónico. Ligero e impermeable.',
    condition: 'Excelente',
    size: 'L',
  },
  {
    id: 114,
    name: 'Burberry Cardigan',
    price: 5999,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1679847628912-4c3e7402abc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWdhbiUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzYyODY4NjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cardigan Burberry en lana merino. Elegancia británica con acabados impecables.',
    condition: 'Como nuevo',
    size: 'M',
  },
  {
    id: 115,
    name: 'Bape Graphic T-Shirt',
    price: 2499,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1655141559812-42f8c1e8942d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwdHNoaXJ0fGVufDF8fHx8MTc2Mjk2MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Playera A Bathing Ape con gráficos coloridos. Streetwear japonés de colección.',
    condition: 'Excelente',
    size: 'L',
  },
  {
    id: 116,
    name: 'Stussy Varsity Jacket',
    price: 3299,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1682354163828-d1d56c380431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJzaXR5JTIwamFja2V0fGVufDF8fHx8MTc2Mjk2MDk0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Chamarra varsity Stussy con parches bordados. Estilo universitario clásico.',
    condition: 'Buen estado',
    size: 'M',
  },
  {
    id: 117,
    name: 'Dockers Chino Pants',
    price: 799,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1696889450800-e94ec7a32206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlubyUyMHBhbnRzJTIwYmVpZ2V8ZW58MXx8fHwxNzYyOTYwOTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pantalones chinos Dockers en tono beige. Perfectos para ocasiones casuales.',
    condition: 'Excelente',
    size: '33',
  },
  {
    id: 118,
    name: 'Canada Goose Wool Coat',
    price: 9999,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1545588249-81f29551211e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29sJTIwY29hdCUyMHdpbnRlcnxlbnwxfHx8fDE3NjI4NzM5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Abrigo Canada Goose de lana premium. Protección extrema contra el frío.',
    condition: 'Como nuevo',
    size: 'L',
  },
  {
    id: 119,
    name: 'Puma Tracksuit Pants',
    price: 899,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1760736534441-4d14bf11103e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFja3N1aXQlMjBwYW50c3xlbnwxfHx8fDE3NjI5NjA5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pantalones de chándal Puma con logo bordado. Cómodos para deporte y descanso.',
    condition: 'Buen estado',
    size: 'L',
  },
  {
    id: 120,
    name: 'Armani Blazer',
    price: 7500,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1598915850252-fb07ad1e6768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGF6ZXIlMjBzdWl0JTIwamFja2V0fGVufDF8fHx8MTc2Mjg2ODY3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Blazer Giorgio Armani de corte italiano. Elegancia y sofisticación atemporal.',
    condition: 'Excelente',
    size: 'M',
  },
  {
    id: 121,
    name: 'Under Armour Shorts',
    price: 599,
    category: 'ropa',
    image: 'https://images.unsplash.com/photo-1525916801717-9405b53a3246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ydHMlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NjI5NjA5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Shorts deportivos Under Armour con tecnología HeatGear. Transpirables y ligeros.',
    condition: 'Como nuevo',
    size: 'M',
  },
  // Marcas de Diseñador - Parte 1 (IDs 401-420)
  { id: 401, name: 'Versace Medusa T-Shirt', price: 3999, category: 'ropa', image: 'https://images.unsplash.com/photo-1627902499416-0a47580dfac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJzYWNlJTIwbWVkdXNhJTIwdHNoaXJ0JTIwbHV4dXJ5fGVufDF8fHx8MTc2Mjk5MDAwNXww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Playera Versace con logo Medusa dorado. Algodón de lujo italiano.', condition: 'Excelente', size: 'M' },
  { id: 402, name: 'Dior Oblique Jacket', price: 22999, category: 'ropa', image: 'https://images.unsplash.com/photo-1709129058666-0aad2260e55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW9yJTIwamFja2V0JTIwbHV4dXJ5JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI5OTAwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Chamarra Dior con patrón oblique icónico. Diseño elegante y sofisticado.', condition: 'Semi nuevo', size: 'L' },
  { id: 403, name: 'Balenciaga Oversized Hoodie', price: 9999, category: 'ropa', image: 'https://images.unsplash.com/photo-1689174466733-eda487f4f182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxlbmNpYWdhJTIwaG9vZGllJTIwb3ZlcnNpemVkfGVufDF8fHx8MTc2Mjk5MDAwNnww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Sudadera Balenciaga oversized. Estilo streetwear de lujo.', condition: 'Excelente', size: 'XL' },
  { id: 404, name: 'Prada Wool Trousers', price: 7500, category: 'ropa', image: 'https://images.unsplash.com/photo-1600836080410-6e9e0941a40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFkYSUyMHRyb3VzZXJzJTIwbWVuc3dlYXJ8ZW58MXx8fHwxNzYyOTkwMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Pantalones Prada en lana virgen. Corte sastre perfecto.', condition: 'Bueno', size: '32' },
  { id: 405, name: 'Fendi FF Logo Coat', price: 18999, category: 'ropa', image: 'https://images.unsplash.com/photo-1746972466957-6fe022ade280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW5kaSUyMGNvYXQlMjBsdXh1cnl8ZW58MXx8fHwxNzYyOTkwMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Abrigo Fendi con logo FF all-over. Lana premium de alta calidad.', condition: 'Semi nuevo', size: 'M' },
  { id: 406, name: 'Saint Laurent Skinny Jeans', price: 5999, category: 'ropa', image: 'https://images.unsplash.com/photo-1611675413199-b1a1cea9e065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWludCUyMGxhdXJlbnQlMjBqZWFucyUyMGJsYWNrfGVufDF8fHx8MTc2Mjk5MDAwN3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Jeans Saint Laurent skinny fit. Denim negro stretch premium.', condition: 'Excelente', size: '31' },
  { id: 407, name: 'Moncler Down Jacket', price: 14999, category: 'ropa', image: 'https://images.unsplash.com/photo-1606903073578-7ca9ea9946c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25jbGVyJTIwZG93biUyMGphY2tldHxlbnwxfHx8fDE3NjI5OTAwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Chamarra Moncler con relleno de plumón. Logo parche icónico.', condition: 'Semi nuevo', size: 'L' },
  { id: 408, name: 'Valentino Rockstud Dress', price: 19999, category: 'ropa', image: 'https://images.unsplash.com/photo-1749131634409-c491a4ee411e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWxlbnRpbm8lMjBkcmVzcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzYyOTkwMDA4fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Vestido Valentino con tachuelas Rockstud. Elegancia italiana pura.', condition: 'Excelente', size: 'S' },
  { id: 409, name: 'Givenchy Logo Sweater', price: 6999, category: 'ropa', image: 'https://images.unsplash.com/photo-1551136338-788fc9f51225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXZlbmNoeSUyMHN3ZWF0ZXIlMjBsb2dvfGVufDF8fHx8MTc2Mjk5MDAwOXww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Suéter Givenchy con logo vintage. Algodón premium francés.', condition: 'Bueno', size: 'M' },
  { id: 410, name: 'Alexander McQueen Shirt', price: 5499, category: 'ropa', image: 'https://images.unsplash.com/photo-1695300576133-f97b57e599c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGV4YW5kZXIlMjBtY3F1ZWVuJTIwc2hpcnR8ZW58MXx8fHwxNzYyOTkwMDA4fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Camisa Alexander McQueen con detalles únicos. Diseño vanguardista.', condition: 'Excelente', size: 'L' },
  { id: 411, name: 'Dolce & Gabbana Suit', price: 28999, category: 'ropa', image: 'https://images.unsplash.com/photo-1662311893663-274ed75741f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xjZSUyMGdhYmJhbmElMjBzdWl0fGVufDF8fHx8MTc2Mjk5MDAwOXww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Traje Dolce & Gabbana completo. Sastrería italiana impecable.', condition: 'Semi nuevo', size: '40' },
  { id: 412, name: 'Tom Ford Polo', price: 4999, category: 'ropa', image: 'https://images.unsplash.com/photo-1633495998774-35db61c07883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b20lMjBmb3JkJTIwcG9sbyUyMGx1eHVyeXxlbnwxfHx8fDE3NjI5OTAwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Polo Tom Ford en algodón piqué. Lujo minimalista americano.', condition: 'Excelente', size: 'M' },
  { id: 413, name: 'Burberry Trench Coat', price: 21999, category: 'ropa', image: 'https://images.unsplash.com/photo-1660224319989-991e8ad76f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJiZXJyeSUyMHRyZW5jaCUyMGNvYXR8ZW58MXx8fHwxNzYyOTkwMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Trench coat Burberry check clásico. Gabardina de algodón resistente.', condition: 'Bueno', size: 'L' },
  { id: 414, name: 'Acne Studios Jeans', price: 3999, category: 'ropa', image: 'https://images.unsplash.com/photo-1624378441287-7cd7d7aac84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY25lJTIwc3R1ZGlvcyUyMGplYW5zJTIwZGVuaW18ZW58MXx8fHwxNzYyOTkwMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Jeans Acne Studios corte straight. Denim sueco de calidad.', condition: 'Semi nuevo', size: '33' },
  { id: 415, name: 'Stone Island Jacket', price: 8999, category: 'ropa', image: 'https://images.unsplash.com/photo-1638984849715-8984a7f95ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGlzbGFuZCUyMGphY2tldCUyMGJhZGdlfGVufDF8fHx8MTc2Mjk5MDAxMHww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Chamarra Stone Island con brújula. Tejido técnico innovador.', condition: 'Excelente', size: 'M' },
  { id: 416, name: 'Maison Margiela Tee', price: 3499, category: 'ropa', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaWVsYSUyMG1pbmltYWxpc3QlMjB0c2hpcnR8ZW58MXx8fHwxNzYyOTkwMDExfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Playera Maison Margiela con etiquetas características. Minimalismo conceptual.', condition: 'Bueno', size: 'L' },
  { id: 417, name: 'Rick Owens Drkshdw', price: 7999, category: 'ropa', image: 'https://images.unsplash.com/photo-1671671394418-7a921a55fd8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNrJTIwb3dlbnMlMjBkYXJrJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI5OTAwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Sudadera Rick Owens DRKSHDW. Diseño gótico minimalista.', condition: 'Semi nuevo', size: 'XL' },
  { id: 418, name: 'Kenzo Tiger Sweatshirt', price: 4999, category: 'ropa', image: 'https://images.unsplash.com/photo-1678625526896-16a1b7d87801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW56byUyMHRpZ2VyJTIwc3dlYXRzaGlydHxlbnwxfHx8fDE3NjI5OTAwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Sudadera Kenzo con tigre bordado. Estilo japonés-parisino.', condition: 'Excelente', size: 'M' },
  { id: 419, name: 'AMI Paris Cardigan', price: 5499, category: 'ropa', image: 'https://images.unsplash.com/photo-1634646495176-18d58da7f3c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWklMjBwYXJpcyUyMGNhcmRpZ2FufGVufDF8fHx8MTc2Mjk5MDAxMnww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Cardigan AMI con logo corazón. Estilo casual parisino.', condition: 'Bueno', size: 'L' },
  { id: 420, name: 'Balmain Biker Jacket', price: 16999, category: 'ropa', image: 'https://images.unsplash.com/photo-1577540340708-5417efb4d4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxtYWluJTIwYmlrZXIlMjBqYWNrZXR8ZW58MXx8fHwxNzYyOTkwMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Chamarra biker Balmain con tachuelas doradas. Rock chic francés.', condition: 'Semi nuevo', size: 'M' },
  // Marcas de Diseñador - Parte 2 (IDs 421-440)
  { id: 421, name: 'Comme des Garçons Shirt', price: 4499, category: 'ropa', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1080', description: 'Camisa Comme des Garçons con corazón Play. Diseño japonés icónico.', condition: 'Excelente', size: 'M' },
  { id: 422, name: 'Isabel Marant Blazer', price: 8999, category: 'ropa', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1080', description: 'Blazer Isabel Marant estilo bohemio. Elegancia parisina relajada.', condition: 'Bueno', size: 'S' },
  { id: 423, name: 'Vetements Hoodie', price: 9999, category: 'ropa', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1080', description: 'Sudadera Vetements oversized. Streetwear vanguardista europeo.', condition: 'Semi nuevo', size: 'L' },
  { id: 424, name: 'Palm Angels Track Pants', price: 5999, category: 'ropa', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1080', description: 'Pantalones Palm Angels con rayas laterales. Estilo LA sportswear.', condition: 'Excelente', size: 'M' },
  { id: 425, name: 'Thom Browne Suit', price: 32999, category: 'ropa', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1080', description: 'Traje Thom Browne con barras tricolor. Sastrería americana premium.', condition: 'Semi nuevo', size: '38' },
  { id: 426, name: 'Fear of God Essentials Tee', price: 2999, category: 'ropa', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1080', description: 'Playera Fear of God Essentials. Minimalismo californiano.', condition: 'Excelente', size: 'L' },
  { id: 427, name: 'Raf Simons Bomber', price: 11999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Bomber Raf Simons con parches. Diseño belga conceptual.', condition: 'Bueno', size: 'M' },
  { id: 428, name: 'Jil Sander Minimalist Shirt', price: 5999, category: 'ropa', image: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=1080', description: 'Camisa Jil Sander minimalista. Diseño alemán atemporal.', condition: 'Semi nuevo', size: 'L' },
  { id: 429, name: 'Marni Color Block Sweater', price: 6999, category: 'ropa', image: 'https://images.unsplash.com/photo-1620799139834-6b8f844e8848?w=1080', description: 'Suéter Marni con bloques de color. Arte wearable italiano.', condition: 'Excelente', size: 'M' },
  { id: 430, name: 'Lemaire Wide Pants', price: 5499, category: 'ropa', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1080', description: 'Pantalones Lemaire corte ancho. Minimalismo funcional francés.', condition: 'Bueno', size: '32' },
  { id: 431, name: 'Jacquemus La Chemise', price: 4999, category: 'ropa', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1080', description: 'Camisa Jacquemus con detalles arquitectónicos. Diseño provenzal moderno.', condition: 'Semi nuevo', size: 'S' },
  { id: 432, name: 'Berluti Leather Jacket', price: 35999, category: 'ropa', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1080', description: 'Chamarra Berluti en cuero patinado. Artesanía francesa de lujo.', condition: 'Excelente', size: 'M' },
  { id: 433, name: 'Ermenegildo Zegna Blazer', price: 18999, category: 'ropa', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1080', description: 'Blazer Zegna en lana superfina. Sastrería italiana de prestigio.', condition: 'Semi nuevo', size: 'L' },
  { id: 434, name: 'Brioni Dress Shirt', price: 7999, category: 'ropa', image: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=1080', description: 'Camisa Brioni hecha a mano. Excelencia sartorial romana.', condition: 'Bueno', size: 'M' },
  { id: 435, name: 'Kiton Cashmere Sweater', price: 12999, category: 'ropa', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1080', description: 'Suéter Kiton en cashmere 100%. Lujo napolitano incomparable.', condition: 'Excelente', size: 'L' },
  { id: 436, name: 'Brunello Cucinelli Polo', price: 8999, category: 'ropa', image: 'https://images.unsplash.com/photo-1609655106619-9d28f4f79c49?w=1080', description: 'Polo Brunello Cucinelli en algodón. Elegancia casual italiana.', condition: 'Semi nuevo', size: 'M' },
  { id: 437, name: 'Loro Piana Storm System Jacket', price: 22999, category: 'ropa', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1080', description: 'Chamarra Loro Piana Storm System. Tejido técnico de lujo.', condition: 'Bueno', size: 'L' },
  { id: 438, name: 'Visvim Jacket', price: 13999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra Visvim artesanal. Fusión japonesa-americana única.', condition: 'Semi nuevo', size: 'M' },
  { id: 439, name: 'Issey Miyake Pleats Please', price: 7999, category: 'ropa', image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=1080', description: 'Top Issey Miyake Pleats Please. Innovación textil japonesa.', condition: 'Excelente', size: 'M' },
  { id: 440, name: 'Sacai Hybrid Jacket', price: 9999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra Sacai híbrida. Diseño deconstructed japonés.', condition: 'Bueno', size: 'L' },
  // Marcas de Diseñador - Parte 3 (IDs 441-460)
  { id: 441, name: 'Undercover Graphic Tee', price: 3999, category: 'ropa', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1080', description: 'Playera Undercover con gráficos únicos. Cultura juvenil japonesa.', condition: 'Semi nuevo', size: 'M' },
  { id: 442, name: 'Neighborhood Denim Jacket', price: 7999, category: 'ropa', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=1080', description: 'Chamarra denim Neighborhood. Estilo motero japonés.', condition: 'Excelente', size: 'L' },
  { id: 443, name: 'WTAPS Cargo Pants', price: 4999, category: 'ropa', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1080', description: 'Pantalones WTAPS militares. Streetwear japonés auténtico.', condition: 'Bueno', size: '32' },
  { id: 444, name: 'Palace Tri-Ferg Hoodie', price: 3999, category: 'ropa', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1080', description: 'Sudadera Palace con Tri-Ferg. Streetwear londinense icónico.', condition: 'Semi nuevo', size: 'L' },
  { id: 445, name: 'Norse Projects Jacket', price: 5999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra Norse Projects minimalista. Diseño escandinavo funcional.', condition: 'Excelente', size: 'M' },
  { id: 446, name: 'Our Legacy Shirt', price: 4499, category: 'ropa', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1080', description: 'Camisa Our Legacy con corte único. Estilo sueco contemporáneo.', condition: 'Bueno', size: 'L' },
  { id: 447, name: 'A.P.C. Petit Standard Jeans', price: 3999, category: 'ropa', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=1080', description: 'Jeans A.P.C. Petit Standard. Denim francés de calidad.', condition: 'Semi nuevo', size: '31' },
  { id: 448, name: 'Engineered Garments Vest', price: 5499, category: 'ropa', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1080', description: 'Chaleco Engineered Garments multipocket. Workwear americano reimaginado.', condition: 'Excelente', size: 'M' },
  { id: 449, name: 'Kapital Kakishibu Pants', price: 6999, category: 'ropa', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1080', description: 'Pantalones Kapital teñidos kakishibu. Artesanía japonesa tradicional.', condition: 'Bueno', size: '32' },
  { id: 450, name: 'Yohji Yamamoto Y-3 Jacket', price: 11999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra Y-3 by Yohji Yamamoto. Fusión fashion-sportswear.', condition: 'Semi nuevo', size: 'L' },
  { id: 451, name: 'Dries Van Noten Print Shirt', price: 5999, category: 'ropa', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1080', description: 'Camisa Dries Van Noten estampada. Prints artísticos belgas.', condition: 'Excelente', size: 'M' },
  { id: 452, name: 'Margaret Howell Chinos', price: 4999, category: 'ropa', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1080', description: 'Chinos Margaret Howell. Minimalismo británico funcional.', condition: 'Bueno', size: '33' },
  { id: 453, name: 'Officine Générale Blazer', price: 8999, category: 'ropa', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1080', description: 'Blazer Officine Générale desestructurado. Elegancia parisina informal.', condition: 'Semi nuevo', size: 'L' },
  { id: 454, name: 'Martine Rose Oversized Tee', price: 3499, category: 'ropa', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1080', description: 'Playera Martine Rose oversized. Diseño británico subversivo.', condition: 'Excelente', size: 'XL' },
  { id: 455, name: 'Craig Green Quilted Jacket', price: 12999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra Craig Green acolchada. Diseño escultórico londinense.', condition: 'Bueno', size: 'M' },
  { id: 456, name: 'Wales Bonner Knit Polo', price: 6999, category: 'ropa', image: 'https://images.unsplash.com/photo-1609655106619-9d28f4f79c49?w=1080', description: 'Polo Wales Bonner tejido. Influencias caribeñas refinadas.', condition: 'Semi nuevo', size: 'M' },
  { id: 457, name: 'Aime Leon Dore Hoodie', price: 4999, category: 'ropa', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1080', description: 'Sudadera Aime Leon Dore. Preppy neoyorquino contemporáneo.', condition: 'Excelente', size: 'L' },
  { id: 458, name: 'John Elliott Co Sweatpants', price: 3999, category: 'ropa', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1080', description: 'Pantalones John Elliott terry. Athleisure californiano premium.', condition: 'Bueno', size: 'M' },
  { id: 459, name: 'Reigning Champ Crewneck', price: 2999, category: 'ropa', image: 'https://images.unsplash.com/photo-1626497764133-0c2b370960f6?w=1080', description: 'Sudadera Reigning Champ. Calidad canadiense impecable.', condition: 'Semi nuevo', size: 'L' },
  { id: 460, name: 'Wings + Horns Chore Jacket', price: 5999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra Wings + Horns estilo chore. Workwear canadiense refinado.', condition: 'Excelente', size: 'M' },
  // Marcas de Diseñador - Parte 4 (IDs 461-475)
  { id: 461, name: 'RRL Indigo Shirt', price: 4999, category: 'ropa', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1080', description: 'Camisa RRL teñida índigo. Americana vintage de Ralph Lauren.', condition: 'Bueno', size: 'L' },
  { id: 462, name: 'Filson Tin Cloth Jacket', price: 6999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra Filson Tin Cloth. Heritage americano robusto.', condition: 'Semi nuevo', size: 'L' },
  { id: 463, name: 'Barbour Beaufort Jacket', price: 5999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra Barbour Beaufort encerada. Clásico británico field jacket.', condition: 'Excelente', size: 'M' },
  { id: 464, name: 'Stutterheim Raincoat', price: 7999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Impermeable Stutterheim sueco. Diseño minimalista waterproof.', condition: 'Bueno', size: 'L' },
  { id: 465, name: 'NN07 Marco Polo', price: 3999, category: 'ropa', image: 'https://images.unsplash.com/photo-1609655106619-9d28f4f79c49?w=1080', description: 'Polo NN07 Marco. Diseño danés relajado moderno.', condition: 'Semi nuevo', size: 'M' },
  { id: 466, name: 'Sunspel Riviera Tee', price: 2499, category: 'ropa', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1080', description: 'Playera Sunspel Riviera cuello henley. Algodón inglés superior.', condition: 'Excelente', size: 'M' },
  { id: 467, name: 'Oliver Spencer Solms Jacket', price: 7999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra Oliver Spencer Solms. Sastrería británica contemporánea.', condition: 'Bueno', size: 'L' },
  { id: 468, name: 'Sandro Paris Teddy Jacket', price: 5999, category: 'ropa', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1080', description: 'Chamarra teddy Sandro. Estilo parisino accesible.', condition: 'Semi nuevo', size: 'M' },
  { id: 469, name: 'The Kooples Leather Biker', price: 8999, category: 'ropa', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1080', description: 'Chamarra biker The Kooples. Rock parisino contemporáneo.', condition: 'Excelente', size: 'M' },
  { id: 470, name: 'AllSaints Cigarette Jeans', price: 2999, category: 'ropa', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=1080', description: 'Jeans AllSaints skinny fit. Denim británico urbano.', condition: 'Bueno', size: '32' },
  { id: 471, name: 'Rag & Bone Standard Issue Tee', price: 1999, category: 'ropa', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1080', description: 'Playera Rag & Bone básica premium. Esenciales neoyorquinos.', condition: 'Semi nuevo', size: 'L' },
  { id: 472, name: 'Everlane Japanese Oxford', price: 1799, category: 'ropa', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1080', description: 'Camisa Everlane oxford japonés. Transparencia radical.', condition: 'Excelente', size: 'M' },
  { id: 473, name: 'Todd Snyder Champion Hoodie', price: 3499, category: 'ropa', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1080', description: 'Sudadera Todd Snyder x Champion. Athleisure americano elevado.', condition: 'Bueno', size: 'L' },
  { id: 474, name: 'Saturdays NYC Surf Tee', price: 1599, category: 'ropa', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1080', description: 'Playera Saturdays NYC. Surf culture neoyorquino.', condition: 'Semi nuevo', size: 'M' },
  { id: 475, name: 'Buck Mason Curved Hem Tee', price: 1299, category: 'ropa', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1080', description: 'Playera Buck Mason dobladillo curvo. Básicos de LA premium.', condition: 'Excelente', size: 'L' },
  // Accesorios
  {
    id: 5,
    name: 'Ray-Ban Wayfarer',
    price: 2499,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1695057221246-3ab8a2ff5bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXklMjBiYW4lMjBzdW5nbGFzc2VzfGVufDF8fHx8MTc2Mjk2MTIwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gafas Ray-Ban Wayfarer clásicas. Diseño icónico con protección UV400. Monturas en acetato de alta calidad.',
    condition: 'Como nuevo',
    size: 'Único',
  },
  {
    id: 6,
    name: 'Rolex Submariner',
    price: 189999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1702865053958-71ec751c4118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xleCUyMHdhdGNoJTIwbHV4dXJ5fGVufDF8fHx8MTc2Mjg4MTUyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Reloj Rolex Submariner, el legendario reloj de buceo. Acero inoxidable 904L con movimiento automático. Resistente al agua hasta 300m.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 7,
    name: 'Gucci Marmont Bag',
    price: 28999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1709281961493-a9acb8558177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWNjaSUyMGhhbmRiYWd8ZW58MXx8fHwxNzYyOTY0MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bolso Gucci GG Marmont de piel matelassé con cadena. Diseño elegante con el icónico doble G.',
    condition: 'Como nuevo',
    size: 'Mediano',
  },
  {
    id: 8,
    name: 'Cartier Love Bracelet',
    price: 12500,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1625417255685-9889e8dd94d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0aWVyJTIwYnJhY2VsZXR8ZW58MXx8fHwxNzYyOTYxMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pulsera Cartier Love en oro de 18k. El icónico diseño con tornillos que simboliza el amor eterno.',
    condition: 'Excelente',
    size: 'Ajustable',
  },
  {
    id: 201,
    name: 'Tiffany & Co. Heart Necklace',
    price: 8999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1718698028514-7b5029017de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWZmYW55JTIwbmVja2xhY2UlMjBqZXdlbHJ5fGVufDF8fHx8MTc2Mjk2NDIyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Collar Tiffany & Co. con dije de corazón en plata esterlina. Diseño elegante y atemporal.',
    condition: 'Como nuevo',
    size: 'Único',
  },
  {
    id: 202,
    name: 'Gold Hoop Earrings',
    price: 3499,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1761479250428-f84d4522a9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlYXJyaW5ncyUyMGdvbGR8ZW58MXx8fHwxNzYyODkwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Aretes de aro en oro amarillo de 14k. Diseño clásico y versátil para uso diario.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 203,
    name: 'Gucci Leather Belt',
    price: 5999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1664286074240-d7059e004dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJlbHQlMjBsZWF0aGVyfGVufDF8fHx8MTc2Mjk2NDIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cinturón Gucci de cuero con hebilla GG dorada. Cuero italiano de primera calidad.',
    condition: 'Como nuevo',
    size: '85',
  },
  {
    id: 204,
    name: 'Louis Vuitton Wallet',
    price: 6499,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1751522908272-3cb84bc30147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YWxsZXR8ZW58MXx8fHwxNzYyOTQ1NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cartera Louis Vuitton con el icónico monograma. Múltiples compartimentos para tarjetas y billetes.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 205,
    name: 'Supreme Box Logo Cap',
    price: 1299,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1517941823-815bea90d291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNhcCUyMGhhdHxlbnwxfHx8fDE3NjI5NjQyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gorra Supreme con logo box bordado. Algodón 100% con ajuste trasero de metal.',
    condition: 'Como nuevo',
    size: 'Único',
  },
  {
    id: 206,
    name: 'Burberry Check Scarf',
    price: 4999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1718117059204-8380b0706219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzY2FyZnxlbnwxfHx8fDE3NjI5NjQyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bufanda Burberry en cashmere con el icónico patrón a cuadros. Suave y abrigadora.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 207,
    name: 'MCM Backpack',
    price: 9999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1582429073538-b43fa2eaf19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJhY2twYWNrfGVufDF8fHx8MTc2Mjg4Mzg1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Mochila MCM Stark con el monograma Visetos. Diseño urbano con tachuelas de latón.',
    condition: 'Como nuevo',
    size: 'Mediano',
  },
  {
    id: 208,
    name: 'Ray-Ban Aviator',
    price: 2299,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1567101293231-51d2bd439398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmlhdG9yJTIwc3VuZ2xhc3Nlc3xlbnwxfHx8fDE3NjI5NjEyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gafas Ray-Ban Aviator, el diseño clásico de aviador. Lentes polarizados con montura de metal.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 209,
    name: 'Omega Seamaster',
    price: 85000,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1691865179028-1729b766a5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWVnYSUyMHdhdGNofGVufDF8fHx8MTc2Mjk2NDIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Reloj Omega Seamaster Professional. Movimiento automático Co-Axial con resistencia al agua de 300m.',
    condition: 'Como nuevo',
    size: 'Único',
  },
  {
    id: 210,
    name: 'Louis Vuitton Neverfull',
    price: 32999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1691480288782-142b953cf664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3VpcyUyMHZ1aXR0b24lMjBiYWd8ZW58MXx8fHwxNzYyOTY0MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bolso Louis Vuitton Neverfull MM en lona monogram. Espacioso y versátil para uso diario.',
    condition: 'Excelente',
    size: 'Grande',
  },
  {
    id: 211,
    name: 'Pandora Charm Bracelet',
    price: 1899,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1581355241805-e7e309bb856e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5kb3JhJTIwYnJhY2VsZXR8ZW58MXx8fHwxNzYyOTY0MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pulsera Pandora en plata esterlina con charms intercambiables. Personaliza tu estilo.',
    condition: 'Como nuevo',
    size: 'Ajustable',
  },
  {
    id: 212,
    name: 'Pearl Strand Necklace',
    price: 5499,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMG5lY2tsYWNlfGVufDF8fHx8MTc2Mjg2NDY4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Collar de perlas cultivadas Akoya de alta calidad. Elegancia clásica atemporal.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 213,
    name: 'Diamond Stud Earrings',
    price: 15999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1588444650733-d0767b753fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZWFycmluZ3N8ZW58MXx8fHwxNzYyOTEzNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Aretes de diamantes en oro blanco de 18k. 1ct total, claridad VS1. Certificados.',
    condition: 'Como nuevo',
    size: 'Único',
  },
  {
    id: 214,
    name: 'Hermès H Belt',
    price: 9500,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1708413226312-2c28dfbb346f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJtZXMlMjBiZWx0fGVufDF8fHx8MTc2Mjk2NDIyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cinturón Hermès con hebilla H reversible. Cuero Box de becerro en dos colores.',
    condition: 'Excelente',
    size: '90',
  },
  {
    id: 215,
    name: 'Prada Saffiano Wallet',
    price: 5999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1634419446253-a1da206cf824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFkYSUyMHdhbGxldHxlbnwxfHx8fDE3NjI5NjQyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cartera Prada en cuero Saffiano con logo triangular metálico. Diseño sofisticado y duradero.',
    condition: 'Como nuevo',
    size: 'Único',
  },
  {
    id: 216,
    name: 'New Era Snapback',
    price: 799,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFwYmFjayUyMGNhcHxlbnwxfHx8fDE3NjI4OTM3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gorra New Era 9Fifty snapback. Ajuste trasero de presión con visera plana.',
    condition: 'Como nuevo',
    size: 'Único',
  },
  {
    id: 217,
    name: 'Loro Piana Cashmere Scarf',
    price: 12999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1551381912-4e2e29c7fd17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHNjYXJmfGVufDF8fHx8MTc2Mjk2NDIyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bufanda Loro Piana en cashmere 100% de la más alta calidad. Suavidad y lujo excepcionales.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 218,
    name: 'Nike Elite Backpack',
    price: 1499,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1556025422-9e27232ddbbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYmFja3BhY2t8ZW58MXx8fHwxNzYyOTY0MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Mochila Nike Elite con compartimento para laptop. Diseño deportivo y funcional.',
    condition: 'Como nuevo',
    size: 'Grande',
  },
  {
    id: 219,
    name: 'Oakley Radar EV',
    price: 3299,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1728052891252-abef767563fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYWtsZXklMjBzdW5nbGFzc2VzJTIwc3BvcnR8ZW58MXx8fHwxNzYyOTY0MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gafas deportivas Oakley Radar EV Path con lentes Prizm. Diseño aerodinámico para alto rendimiento.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 220,
    name: 'Apple Watch Series 9',
    price: 8999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNofGVufDF8fHx8MTc2Mjg4MjM0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Apple Watch Series 9 de 45mm en aluminio. Pantalla Retina always-on con GPS y fitness tracking.',
    condition: 'Como nuevo',
    size: '45mm',
  },
  {
    id: 221,
    name: 'Chanel Classic Flap Bag',
    price: 95000,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1586413595198-1840407316e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFuZWwlMjBiYWd8ZW58MXx8fHwxNzYyOTY0MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bolso Chanel Classic Flap en piel de cordero acolchada. El icono atemporal con cadena dorada.',
    condition: 'Excelente',
    size: 'Mediano',
  },
  {
    id: 222,
    name: 'Gold Cuban Chain',
    price: 18999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1662434923031-b9bf1b6c10e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY2hhaW4lMjBuZWNrbGFjZXxlbnwxfHx8fDE3NjI5NjEyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cadena cubana en oro amarillo de 14k. 10mm de grosor, acabado brillante. Estilo urbano de lujo.',
    condition: 'Como nuevo',
    size: '60cm',
  },
  {
    id: 223,
    name: 'Tiffany Engagement Ring',
    price: 45000,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1669859097642-b8dca596fd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW5nJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjI5NjQyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Anillo de compromiso Tiffany en platino con diamante solitario. 1.5ct, corte brillante, color F.',
    condition: 'Excelente',
    size: '6',
  },
  {
    id: 224,
    name: 'Ermenegildo Zegna Tie',
    price: 2499,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1603122184131-09dd6f009a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWUlMjBsdXh1cnl8ZW58MXx8fHwxNzYyOTY0MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Corbata Ermenegildo Zegna en seda italiana 100%. Diseño elegante con patrón sutil.',
    condition: 'Como nuevo',
    size: 'Único',
  },
  {
    id: 225,
    name: 'Versace Medusa Sunglasses',
    price: 4999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzYyOTExNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gafas Versace con el icónico símbolo Medusa. Diseño audaz con detalles dorados.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 226,
    name: 'Coach Leather Messenger Bag',
    price: 5499,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1637762647056-998cc4715de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzZW5nZXIlMjBiYWclMjBsZWF0aGVyfGVufDF8fHx8MTc2Mjg4NzAwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bolso mensajero Coach en cuero refinado. Compartimento acolchado para laptop de 15".',
    condition: 'Como nuevo',
    size: 'Grande',
  },
  {
    id: 227,
    name: 'Carhartt Beanie',
    price: 599,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1732279657430-3375a7cb205c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFuaWUlMjBoYXQlMjB3aW50ZXJ8ZW58MXx8fHwxNzYyOTY0MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gorro Carhartt Watch en acrílico con parche de logo. Abrigador y cómodo para el invierno.',
    condition: 'Como nuevo',
    size: 'Único',
  },
  {
    id: 228,
    name: 'Montblanc Cufflinks',
    price: 3999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1553315164-dd085b679801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWZmbGlua3MlMjBsdXh1cnl8ZW58MXx8fHwxNzYyOTYxMjI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gemelos Montblanc en acero inoxidable con estrella emblemática. Elegancia refinada.',
    condition: 'Excelente',
    size: 'Único',
  },
  {
    id: 229,
    name: 'Kate Spade Crossbody',
    price: 2999,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1718622795525-2295971921ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2JvZHklMjBiYWd8ZW58MXx8fHwxNzYyOTY0MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Bolso cruzado Kate Spade en cuero Saffiano. Compacto y elegante para uso diario.',
    condition: 'Como nuevo',
    size: 'Pequeño',
  },
  {
    id: 230,
    name: 'Stussy Bucket Hat',
    price: 899,
    category: 'accesorios',
    image: 'https://images.unsplash.com/photo-1593460832239-072261224f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWNrZXQlMjBoYXR8ZW58MXx8fHwxNzYyOTY0MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sombrero pescador Stussy en algodón con logo bordado. Estilo streetwear casual.',
    condition: 'Excelente',
    size: 'Único',
  },
  // Calzado
  {
    id: 13,
    name: 'Nike Air Max',
    price: 2399,
    category: 'calzado',
    image: nikeAirMaxImg,
    description: 'Zapatillas Nike Air Max en excelente estado. Diseño clásico en negro total, con la icónica cámara de aire visible. Perfectas para uso diario o para coleccionistas.',
    condition: 'Como nuevo',
    size: '42',
  },
  {
    id: 14,
    name: 'Tenis Puma X Vogue Slipstream Mujer',
    price: 2699,
    category: 'calzado',
    image: pumaVogueImg,
    description: 'Tenis Puma X Vogue Slipstream para mujer. Diseño casual elegante en tonos beige y rosa, con detalles premium de cuero. Edición especial en colaboración con Vogue. Perfecto para un look urbano y sofisticado.',
    condition: 'Como nuevo',
    size: '25',
  },
  {
    id: 15,
    name: 'K-Swiss Classic Startup',
    price: 2159,
    category: 'calzado',
    image: kswissImg,
    description: 'Tenis K-Swiss Classic Startup en blanco total. Diseño clásico e icónico con logo dorado bordado. Elaborados en cuero premium con suela de goma antideslizante. Perfectos para un look casual y limpio.',
    condition: 'Como nuevo',
    size: '27',
  },
  {
    id: 16,
    name: 'Adidas Superstar',
    price: 1899,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1620794341491-76be6eeb6946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NjI5NjAxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tenis Adidas Superstar, el ícono clásico con las tres rayas. Diseño atemporal en blanco con detalles negros. Suela de goma resistente y punta reforzada característica.',
    condition: 'Excelente',
    size: '26',
  },
  {
    id: 17,
    name: 'Converse Chuck Taylor All Star',
    price: 1299,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1562105962-2fbaaf107fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXJzZSUyMHNob2VzfGVufDF8fHx8MTc2Mjk2MDEyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tenis Converse Chuck Taylor All Star, el clásico que nunca pasa de moda. Diseño de caña alta en lona resistente. Perfectos para cualquier ocasión casual.',
    condition: 'Buen estado',
    size: '25',
  },
  {
    id: 18,
    name: 'Vans Old Skool',
    price: 1499,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1731212160019-97609cbceb45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5zJTIwc25lYWtlcnN8ZW58MXx8fHwxNzYyOTYwMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tenis Vans Old Skool, el icónico diseño skate con la franja lateral característica. Construcción duradera en lona y ante. Suela waffle para mejor agarre.',
    condition: 'Como nuevo',
    size: '27',
  },
  {
    id: 19,
    name: 'Timberland 6-Inch Premium',
    price: 3499,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1520472475098-8e72973f5462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1iZXJsYW5kJTIwYm9vdHN8ZW58MXx8fHwxNzYyOTYwMTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Botas Timberland 6-Inch Premium, el clásico icónico en cuero nubuck resistente al agua. Construcción duradera con suela de goma antideslizante. Perfectas para invierno.',
    condition: 'Excelente',
    size: '28',
  },
  {
    id: 20,
    name: 'Dr. Martens 1460',
    price: 2899,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1747083996241-3d86d9dbab11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkciUyMG1hcnRlbnMlMjBib290c3xlbnwxfHx8fDE3NjI5NjAxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Botas Dr. Martens 1460, el clásico boot de 8 ojales. Cuero suave y resistente con la icónica suela AirWair. Diseño rebelde que nunca pasa de moda.',
    condition: 'Buen estado',
    size: '26',
  },
  {
    id: 21,
    name: 'Air Jordan 1 Retro',
    price: 4299,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1684918652908-8c5b4a154781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3JkYW4lMjBzbmVha2Vyc3xlbnwxfHx8fDE3NjI5NjAxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tenis Air Jordan 1 Retro, el legendario diseño que revolucionó el basketball. Cuero premium con diseño de caña alta. Una pieza de colección imprescindible.',
    condition: 'Como nuevo',
    size: '27',
  },
  {
    id: 22,
    name: 'New Balance 574',
    price: 1799,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1680204101489-2c1319c872b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBiYWxhbmNlJTIwc2hvZXN8ZW58MXx8fHwxNzYyOTYwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tenis New Balance 574, el modelo clásico con tecnología ENCAP. Combinación de ante y mesh transpirable. Comodidad y estilo retro en uno.',
    condition: 'Excelente',
    size: '26',
  },
  {
    id: 23,
    name: 'Reebok Classic Leather',
    price: 1599,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1668807555079-78750cef701b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWVib2slMjBjbGFzc2ljfGVufDF8fHx8MTc2Mjk2MDEzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tenis Reebok Classic Leather, diseño minimalista y elegante en cuero suave. Suela de goma de alta tracción. Un clásico atemporal para uso diario.',
    condition: 'Como nuevo',
    size: '25',
  },
  {
    id: 24,
    name: 'Nike Dunk Low',
    price: 2299,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1693115297088-bf53ff941cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwZHVuayUyMHNuZWFrZXJzfGVufDF8fHx8MTc2Mjk2MDIzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Nike Dunk Low, el ��cono del streetwear moderno. Diseño clásico en dos tonos con materiales premium. Perfectos para completar cualquier outfit urbano.',
    condition: 'Excelente',
    size: '27',
  },
  {
    id: 25,
    name: 'Adidas Yeezy Boost 350',
    price: 5499,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1718802319434-4142f3539a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWV6eSUyMGFkaWRhc3xlbnwxfHx8fDE3NjI5NjAyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Adidas Yeezy Boost 350 V2, el diseño revolucionario de Kanye West. Tecnología Boost para máxima comodidad. Material Primeknit transpirable. Pieza de colección exclusiva.',
    condition: 'Como nuevo',
    size: '26',
  },
  {
    id: 26,
    name: 'Balenciaga Triple S',
    price: 8999,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1551818446-9958f93c4a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxlbmNpYWdhJTIwc25lYWtlcnN8ZW58MXx8fHwxNzYyOTYwMjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Balenciaga Triple S, el chunky sneaker que definió una era. Suela triple apilada y diseño deconstructivista. Una declaración de estilo audaz.',
    condition: 'Excelente',
    size: '28',
  },
  {
    id: 27,
    name: 'Gucci Horsebit Loafers',
    price: 12999,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1580140485763-63776b9cba67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWNjaSUyMGxvYWZlcnN8ZW58MXx8fHwxNzYyOTYwMjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gucci Horsebit Loafers, el mocasín icónico de la marca italiana. Cuero de alta calidad con el emblemático detalle de horsebit. Elegancia atemporal.',
    condition: 'Como nuevo',
    size: '26',
  },
  {
    id: 28,
    name: 'Louis Vuitton Trainer',
    price: 15999,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1627631543601-6104b5a8c6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3VpcyUyMHZ1aXR0b24lMjBzaG9lc3xlbnwxfHx8fDE3NjI5NjAyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Louis Vuitton LV Trainer, diseñado por Virgil Abloh. Craftsmanship excepcional con materiales premium. Un sneaker de lujo para coleccionistas.',
    condition: 'Excelente',
    size: '27',
  },
  {
    id: 29,
    name: 'Fila Disruptor II',
    price: 1399,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1622741046749-cfee71d611ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxhJTIwc25lYWtlcnN8ZW58MXx8fHwxNzYyOTYwMjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Fila Disruptor II, el chunky sneaker de los 90s que volvió con fuerza. Diseño retro con suela gruesa dentada. Comodidad y estilo vintage.',
    condition: 'Buen estado',
    size: '25',
  },
  {
    id: 30,
    name: 'Asics Gel-Kayano',
    price: 2199,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1709258228137-19a8c193be39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2ljcyUyMHJ1bm5pbmclMjBzaG9lc3xlbnwxfHx8fDE3NjI5NjAyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Asics Gel-Kayano, tecnología avanzada de running con sistema GEL de amortiguación. Diseño ergonómico para máximo rendimiento y comodidad.',
    condition: 'Como nuevo',
    size: '27',
  },
  {
    id: 31,
    name: 'Caterpillar Colorado',
    price: 2499,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1577033483059-021dd8a91464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcnBpbGxhciUyMGJvb3RzfGVufDF8fHx8MTc2Mjk2MDIzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Botas Caterpillar Colorado, construcción robusta para trabajo y aventura. Cuero nobuck resistente con suela antideslizante. Durabilidad garantizada.',
    condition: 'Excelente',
    size: '28',
  },
  {
    id: 32,
    name: 'Clarks Desert Boot',
    price: 1999,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1640726102860-d8994af09523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFya3MlMjBzaG9lc3xlbnwxfHx8fDE3NjI5NjAyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Clarks Desert Boot, el botín clásico británico desde 1950. Ante suave con suela de crepé natural. Estilo casual elegante que nunca pasa de moda.',
    condition: 'Buen estado',
    size: '26',
  },
  {
    id: 33,
    name: 'Skechers D\'Lites',
    price: 1299,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1625515921520-ca6f70457641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2VjaGVycyUyMHNob2VzfGVufDF8fHx8MTc2Mjk0NzgwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Skechers D\'Lites, el chunky sneaker ultra cómodo. Suela amortiguada con memoria espumada. Diseño retro perfecto para uso diario.',
    condition: 'Como nuevo',
    size: '25',
  },
  {
    id: 301,
    name: 'New Balance 530',
    price: 2199,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1707616782025-5d9e96413cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBiYWxhbmNlJTIwc25lYWtlcnN8ZW58MXx8fHwxNzYyOTg4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'New Balance 530 con diseño retro actualizado. Tecnología ABZORB para máxima amortiguación. Perfecto balance entre estilo y comodidad.',
    condition: 'Semi nuevo',
    size: '27',
  },
  {
    id: 302,
    name: 'Reebok Club C 85',
    price: 1599,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1529742268892-495a1397476f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWVib2slMjBjbGFzc2ljJTIwc2hvZXN8ZW58MXx8fHwxNzYyOTg4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Reebok Club C 85, el clásico tenis de tenis en cuero suave. Logo bordado sutil y suela de goma. Minimalismo deportivo vintage.',
    condition: 'Excelente',
    size: '26',
  },
  {
    id: 303,
    name: 'Puma Suede Classic',
    price: 1499,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1680204101400-aeac783c9d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1hJTIwc3VlZGUlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NjI5ODgzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Puma Suede Classic, el icónico sneaker de ante que definió una era. Estilo atemporal con suela de goma. Un must-have del streetwear.',
    condition: 'Bueno',
    size: '28',
  },
  {
    id: 304,
    name: 'ASICS Gel-Lyte III',
    price: 2299,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1709258228137-19a8c193be39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2ljcyUyMHJ1bm5pbmclMjBzaG9lc3xlbnwxfHx8fDE3NjI5NjAyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'ASICS Gel-Lyte III con tecnología GEL en el talón. Diseño split-tongue característico. Running heritage con estilo moderno.',
    condition: 'Semi nuevo',
    size: '27',
  },
  {
    id: 305,
    name: 'Skechers Memory Foam',
    price: 1299,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1574565083763-40de4ea4cd9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2VjaGVycyUyMGNhc3VhbCUyMHNob2VzfGVufDF8fHx8MTc2Mjk4ODMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Skechers con plantilla Memory Foam. Máxima comodidad y soporte todo el día. Diseño moderno para uso casual y deportivo.',
    condition: 'Excelente',
    size: '25',
  },
  {
    id: 306,
    name: 'Clarks Desert Boot',
    price: 2499,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFya3MlMjBkZXNlcnQlMjBib290c3xlbnwxfHx8fDE3NjI5ODgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Clarks Desert Boot, el clásico botín chukka en ante premium. Suela de crepé natural. Elegancia casual británica atemporal.',
    condition: 'Bueno',
    size: '28',
  },
  {
    id: 307,
    name: 'Balenciaga Triple S',
    price: 18999,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1755514837740-cdf98a424e56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxlbmNpYWdhJTIwc25lYWtlcnMlMjBsdXh1cnl8ZW58MXx8fHwxNzYyOTg4MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Balenciaga Triple S, el chunky sneaker de lujo que marcó tendencia. Suela triple y diseño deconstructed. Pura vanguardia.',
    condition: 'Semi nuevo',
    size: '27',
  },
  {
    id: 308,
    name: 'Yeezy Boost 350 V2',
    price: 5999,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1530202218-5a52c6d42753?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWV6eSUyMHNob2VzfGVufDF8fHx8MTc2Mjk4ODMzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Adidas Yeezy Boost 350 V2 diseñado por Kanye West. Tecnología Boost y Primeknit. Sneaker de colección altamente codiciado.',
    condition: 'Excelente',
    size: '28',
  },
  {
    id: 309,
    name: 'Mocasines de Cuero',
    price: 1899,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1616406432452-07bc5938759d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FmZXJzJTIwbGVhdGhlciUyMHNob2VzfGVufDF8fHx8MTc2Mjk4ODMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Mocasines penny loafers en cuero genuino. Estilo clásico preppy con construcción italiana. Perfectos para look smart casual.',
    condition: 'Bueno',
    size: '27',
  },
  {
    id: 310,
    name: 'Sandalias Birkenstock',
    price: 1599,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1743591684800-c8cfba557087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kYWxzJTIwc3VtbWVyJTIwZm9vdHdlYXJ8ZW58MXx8fHwxNzYyOTg4MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sandalias Birkenstock con plantilla anatómica de corcho. Comodidad ortopédica con estilo casual. Perfectas para verano.',
    condition: 'Semi nuevo',
    size: '26',
  },
  {
    id: 311,
    name: 'Chelsea Boots',
    price: 2799,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1608629601270-a0007becead3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVsc2VhJTIwYm9vdHMlMjBtZW5zfGVufDF8fHx8MTc2Mjk4ODMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Chelsea boots en cuero premium con elásticos laterales. Estilo británico elegante y versátil. Fáciles de poner y quitar.',
    condition: 'Excelente',
    size: '28',
  },
  {
    id: 312,
    name: 'Oxford Dress Shoes',
    price: 2299,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1621665422129-a03cc387bc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveGZvcmQlMjBkcmVzcyUyMHNob2VzfGVufDF8fHx8MTc2Mjk4ODMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Zapatos Oxford de vestir en cuero pulido. Cordones cerrados y puntera cap-toe. Elegancia formal para eventos especiales.',
    condition: 'Bueno',
    size: '27',
  },
  {
    id: 313,
    name: 'Saucony Jazz Original',
    price: 1699,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1744060204728-f68e434a3edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVjb255JTIwcnVubmluZ3xlbnwxfHx8fDE3NjI5ODgzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Saucony Jazz Original, el running vintage con amortiguación triangular. Diseño retro ochentero. Comodidad y estilo casual.',
    condition: 'Semi nuevo',
    size: '26',
  },
  {
    id: 314,
    name: 'Fila Disruptor II',
    price: 1399,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1699195025225-221a6554008f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxhJTIwc25lYWtlcnMlMjByZXRyb3xlbnwxfHx8fDE3NjI5ODgzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Fila Disruptor II, el chunky sneaker de los 90s que regresó con fuerza. Plataforma dentada distintiva. Estilo bold y atrevido.',
    condition: 'Excelente',
    size: '25',
  },
  {
    id: 315,
    name: 'Gucci Horsebit Loafers',
    price: 14999,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1575176648002-f2021e56b375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWNjaSUyMGxvYWZlcnMlMjBsdXh1cnl8ZW58MXx8fHwxNzYyOTg4MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Mocasines Gucci Horsebit, el icónico loafer con hebilla de bocado de caballo. Cuero italiano de lujo. Elegancia sofisticada atemporal.',
    condition: 'Semi nuevo',
    size: '27',
  },
  { id: 501, name: 'Nike Air Jordan 1 Retro', price: 4999, category: 'calzado', image: 'https://images.unsplash.com/photo-1723797935115-92b666c26e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYWlyJTIwam9yZGFuJTIwc25lYWtlcnN8ZW58MXx8fHwxNzYyOTkwMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Nike Air Jordan 1 Retro High. Diseño icónico de Michael Jordan.', condition: 'Excelente', size: '27' },
  { id: 502, name: 'Nike Dunk Low', price: 2999, category: 'calzado', image: 'https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwZHVuayUyMGxvd3xlbnwxfHx8fDE3NjI5OTAzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Nike Dunk Low vintage basketball sneaker.', condition: 'Semi nuevo', size: '26' },
  { id: 503, name: 'Nike Air Max 90', price: 3499, category: 'calzado', image: 'https://images.unsplash.com/photo-1570051779696-244e9f680cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYWlyJTIwbWF4JTIwd2hpdGV8ZW58MXx8fHwxNzYyOTkwMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Nike Air Max 90 con ventana Air visible.', condition: 'Bueno', size: '28' },
  { id: 504, name: 'Nike Air Force 1', price: 2799, category: 'calzado', image: 'https://images.unsplash.com/photo-1712168332222-c1996322f935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYWlyJTIwZm9yY2UlMjAxfGVufDF8fHx8MTc2Mjk5MDM2MXww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Nike Air Force 1 Low blanco icónico.', condition: 'Excelente', size: '27' },
  { id: 505, name: 'Nike Jordan Retro High', price: 5499, category: 'calzado', image: 'https://images.unsplash.com/photo-1650633181200-6b9c551b00fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3JkYW4lMjByZXRybyUyMGhpZ2h8ZW58MXx8fHwxNzYyOTkwMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Air Jordan Retro High OG coleccionable.', condition: 'Semi nuevo', size: '28' },
  { id: 506, name: 'Nike Blazer Mid 77', price: 3199, category: 'calzado', image: 'https://images.unsplash.com/photo-1607792246387-4765c382c5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYmxhemVyJTIwbWlkfGVufDF8fHx8MTc2Mjk5MDM2M3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Nike Blazer Mid 77 Vintage auténtico.', condition: 'Excelente', size: '26' },
  { id: 507, name: 'Adidas Yeezy Boost 350', price: 5999, category: 'calzado', image: 'https://images.unsplash.com/photo-1718802319434-4142f3539a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjB5ZWV6eSUyMGJvb3N0fGVufDF8fHx8MTc2Mjk5MDM0MXww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Adidas Yeezy Boost 350 V2 by Kanye West.', condition: 'Bueno', size: '27' },
  { id: 508, name: 'Adidas Ultra Boost', price: 4499, category: 'calzado', image: 'https://images.unsplash.com/photo-1466229700857-454be534948a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjB1bHRyYSUyMGJvb3N0fGVufDF8fHx8MTc2Mjk5MDM0Mnww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Adidas Ultra Boost tecnología revolucionaria.', condition: 'Semi nuevo', size: '28' },
  { id: 509, name: 'Adidas Samba OG', price: 2499, category: 'calzado', image: 'https://images.unsplash.com/photo-1759542890353-35f5568c1c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjBzYW1iYSUyMHNuZWFrZXJzfGVufDF8fHx8MTc2Mjk5MDM0Mnww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Adidas Samba OG clásico fútbol indoor.', condition: 'Excelente', size: '27' },
  { id: 510, name: 'Adidas Stan Smith', price: 2299, category: 'calzado', image: 'https://images.unsplash.com/photo-1557818249-72a26ef9814d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjBzdGFuJTIwc21pdGh8ZW58MXx8fHwxNzYyOTkwMzYzfDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Adidas Stan Smith minimalista perfecto.', condition: 'Bueno', size: '26' },
  { id: 511, name: 'Adidas Campus 80s', price: 2699, category: 'calzado', image: 'https://images.unsplash.com/photo-1601929131351-21b36fcd49be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjBjYW1wdXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NjI5OTAzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Adidas Campus 80s suede premium.', condition: 'Semi nuevo', size: '28' },
  { id: 512, name: 'Adidas Gazelle', price: 2399, category: 'calzado', image: 'https://images.unsplash.com/photo-1698611028521-4c284ca88b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjBnYXplbGxlJTIwdmludGFnZXxlbnwxfHx8fDE3NjI5OTAzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Adidas Gazelle Vintage retro.', condition: 'Excelente', size: '27' },
  { id: 513, name: 'Balenciaga Triple S', price: 19999, category: 'calzado', image: 'https://images.unsplash.com/photo-1614174485275-0493108905ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxlbmNpYWdhJTIwdHJpcGxlJTIwc3xlbnwxfHx8fDE3NjI5OTAzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Balenciaga Triple S chunky sneaker.', condition: 'Bueno', size: '28' },
  { id: 514, name: 'Balenciaga Track', price: 22999, category: 'calzado', image: 'https://images.unsplash.com/photo-1562668288-599305dfd285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxlbmNpYWdhJTIwdHJhY2slMjBzbmVha2Vyc3xlbnwxfHx8fDE3NjI5OTAzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Balenciaga Track Runner futurista.', condition: 'Semi nuevo', size: '27' },
  { id: 515, name: 'Gucci Ace Sneakers', price: 12999, category: 'calzado', image: 'https://images.unsplash.com/photo-1575176648002-f2021e56b375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWNjaSUyMGFjZSUyMHNuZWFrZXJzfGVufDF8fHx8MTc2Mjk5MDM0M3ww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Gucci Ace Sneakers franja Web.', condition: 'Excelente', size: '26' },
  { id: 516, name: 'Louis Vuitton Trainer', price: 24999, category: 'calzado', image: 'https://images.unsplash.com/photo-1669916913295-9d7c018da4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3VpcyUyMHZ1aXR0b24lMjBzbmVha2Vyc3xlbnwxfHx8fDE3NjI5OTAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Louis Vuitton Trainer by Virgil Abloh.', condition: 'Bueno', size: '28' },
  { id: 517, name: 'Christian Louboutin', price: 16999, category: 'calzado', image: 'https://images.unsplash.com/photo-1591884807235-1dc6c2e148b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBsb3Vib3V0aW4lMjByZWQlMjBzb2xlfGVufDF8fHx8MTc2Mjk5MDM0NHww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Christian Louboutin suela roja icónica.', condition: 'Semi nuevo', size: '27' },
  { id: 518, name: 'Golden Goose Superstar', price: 8999, category: 'calzado', image: 'https://images.unsplash.com/photo-1639911901739-44d1745a358b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBnb29zZSUyMHNuZWFrZXJzfGVufDF8fHx8MTc2Mjk5MDM0NHww&ixlib=rb-4.1.0&q=80&w=1080', description: 'Golden Goose Superstar distressed.', condition: 'Excelente', size: '27' },
  { id: 519, name: 'Common Projects Achilles', price: 9999, category: 'calzado', image: 'https://images.unsplash.com/photo-1608380272894-b3617f04b463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tb24lMjBwcm9qZWN0cyUyMHdoaXRlJTIwc25lYWtlcnN8ZW58MXx8fHwxNzYyOTkwMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Common Projects Achilles Low minimalista.', condition: 'Bueno', size: '26' },
  { id: 520, name: 'Alexander McQueen Oversized', price: 11999, category: 'calzado', image: 'https://images.unsplash.com/photo-1723905102461-7faa5e3c4eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGV4YW5kZXIlMjBtY3F1ZWVuJTIwb3ZlcnNpemVkJTIwc25lYWtlcnN8ZW58MXx8fHwxNzYyOTkwMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080', description: 'Alexander McQueen Oversized Sneakers.', condition: 'Semi nuevo', size: '28' },
];

const categoryNames = {
  ropa: 'Ropa',
  accesorios: 'Accesorios',
  calzado: 'Calzado',
};

// Normalizar nombres de condiciones a: Excelente, Semi nuevo, Bueno
const normalizeCondition = (condition: string): string => {
  const normalized = condition.toLowerCase();
  if (normalized.includes('como nuevo') || normalized.includes('seminuevo') || normalized.includes('semi nuevo')) {
    return 'Semi nuevo';
  }
  if (normalized.includes('buen') || normalized.includes('bueno')) {
    return 'Bueno';
  }
  if (normalized.includes('usado')) {
    return 'Usado';
  }
  return 'Excelente';
};

// Calcular descuento basado en el estado
const getDiscountPercentage = (condition: string): number => {
  const normalized = normalizeCondition(condition);
  switch (normalized) {
    case 'Excelente':
      return 40;
    case 'Semi nuevo':
      return 50;
    case 'Bueno':
      return 60;
    case 'Usado':
      return 70;
    default:
      return 40;
  }
};

// Calcular precio con descuento
const getDiscountedPrice = (originalPrice: number, condition: string): number => {
  const discount = getDiscountPercentage(condition);
  return Math.round(originalPrice * (1 - discount / 100));
};

export function ProductListScreen({
  category,
  onSelectProduct,
  onBack,
  onGoToCart,
  cartItemsCount,
}: ProductListScreenProps) {
  const filteredProducts = products.filter(p => p.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-rose-50 relative overflow-hidden">
      {/* Efectos de difuminación de fondo con múltiples colores - estáticos */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-orange-300/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tl from-rose-300/15 to-pink-200/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-amber-200/15 to-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-gradient-to-bl from-orange-300/20 to-primary/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/3 w-56 h-56 bg-gradient-to-tr from-yellow-200/15 to-amber-300/10 rounded-full blur-3xl"></div>
      
      {/* Header con animaciones sutiles */}
      <div className="bg-gradient-to-r from-white/95 via-yellow-50/90 to-white/95 backdrop-blur-xl shadow-lg sticky top-0 z-10 border-b-2 border-primary/40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 group">
            <Button variant="ghost" size="icon" onClick={onBack} className="hover:bg-yellow-50 transition-all duration-300 hover:scale-105">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <img src={starLogo} alt="STAR Logo" className="w-8 h-8 object-contain rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300" />
            <h1 className="text-gray-900 group-hover:text-primary transition-colors duration-300">{categoryNames[category]}</h1>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="relative border-primary/30 hover:bg-yellow-50 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-md"
            onClick={onGoToCart}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-primary text-black h-5 w-5 flex items-center justify-center p-0 border border-black animate-bounce">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="mb-6 bg-gradient-to-r from-primary/10 via-yellow-100/50 to-orange-100/50 backdrop-blur-sm rounded-xl p-4 border border-primary/20 animate-fade-in">
          <p className="text-gray-900">{filteredProducts.length} artículos disponibles en <span className="text-primary font-medium">{categoryNames[category]}</span></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <button
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 text-left group border-2 border-primary/20 hover:border-primary transform hover:scale-[1.02] relative animate-float-subtle"
              style={{
                animationDelay: `${(idx % 4) * 0.2}s`
              }}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-orange-50/30 overflow-hidden relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay de hover con color */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/0 via-transparent to-transparent group-hover:from-primary/25 transition-all duration-300"></div>
                
                {/* Badge de condición - siempre visible */}
                <div className="absolute top-2 right-2 bg-gradient-to-r from-primary to-yellow-300 text-black px-3 py-1.5 rounded-full shadow-lg border border-yellow-400 group-hover:scale-110 transition-transform duration-300">
                  <p className="text-xs font-medium">{normalizeCondition(product.condition)}</p>
                </div>
                
                {/* Indicador de selección al hover */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-primary rounded-full shadow-lg animate-pulse"></div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-b from-white to-yellow-50/30 group-hover:from-yellow-50/50 group-hover:to-orange-50/40 transition-all duration-300">
                <h3 className="text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">{product.name}</h3>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 text-xs line-through">${product.price}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-black font-medium group-hover:scale-105 transition-transform duration-300 text-lg">${getDiscountedPrice(product.price, product.condition)}</span>
                      <span className="text-xs bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-0.5 rounded-full font-medium">-{getDiscountPercentage(product.condition)}%</span>
                    </div>
                  </div>
                  <span className="text-gray-700 bg-gradient-to-r from-yellow-100 to-orange-100 px-2 py-1 rounded group-hover:from-primary group-hover:to-yellow-300 group-hover:text-black transition-all duration-300 text-xs">
                    Talla {product.size}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs">Estado:</span>
                  <span className="text-gray-900 text-xs font-medium">{normalizeCondition(product.condition)}</span>
                </div>
              </div>
              {/* Borde destacado al hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-xl pointer-events-none transition-all duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}