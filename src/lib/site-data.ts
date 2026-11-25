export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
  { name: "Skimming", description: "Smooth, even walls prepared for a fresh finish." },
  { name: "Building", description: "Practical improvements for the spaces you call home." },
  { name: "Waterproofing", description: "Extra care for the parts of a home exposed to water." },
  { name: "Roofing", description: "Roof repairs, renovations and neat finishing details." },
  { name: "Painting", description: "A considered refresh for interior and exterior walls." },
  { name: "Plumbing", description: "Everyday plumbing repairs and useful improvements." },
  { name: "Carpentry", description: "Timber repairs and finishing work around the home." },
  { name: "Tiling", description: "Careful tile installation with clean, tidy edges." },
  { name: "Plastering", description: "Wall repairs and smooth surfaces, ready for paint." },
] as const;

export const company = {
  name: "A to F Fixers",
  area: "Cape Town, South Africa",
  postalCode: "7785",
  phone: "+27 82 604 6918",
  phoneHref: "tel:+27826046918",
  whatsapp: "+27 71 246 4092",
  whatsappHref: `https://wa.me/27712464092?text=${encodeURIComponent("Hi A to F Fixers, I'd like to discuss a home repair.")}`,
  email: "info@atoffixers.co.za",
} as const;