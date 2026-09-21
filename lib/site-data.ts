export const site = {
  name: "Asbestos Removal Middlesbrough Teesside",
  shortName: "ARM Teesside",
  phone: "01642 921035",
  phoneHref: "+441642921035",
  url: "https://asbestosremovalteesside.co.uk",
  formEndpoint: "https://formspree.io/f/xppaoyqd",
};

export type Faq = { question: string; answer: string };

export type ServicePage = {
  kind: "service";
  slug: string;
  title: string;
  navTitle: string;
  eyebrow: string;
  summary: string;
  intro: string;
  triggers: string[];
  contexts: string[];
  quote: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  faqs: Faq[];
};

export const services: ServicePage[] = [
  {
    kind: "service",
    slug: "asbestos-removal-middlesbrough-teesside",
    title: "Asbestos Removal Middlesbrough & Teesside",
    navTitle: "Asbestos removal",
    eyebrow: "Domestic, commercial & industrial enquiries",
    summary:
      "Removal and lawful disposal for confirmed asbestos and suspected materials across Middlesbrough, Stockton-on-Tees, Redcar, Billingham, Thornaby and the wider Teesside area.",
    intro:
      "Tell us what has been found, where it is and what the work is holding up. If you already have a survey, send the relevant pages. If you do not, you can still call with photographs, the postcode and a description of the material.",
    triggers: [
      "A survey has identified material that must be removed",
      "Builders, roofers, electricians or flooring contractors are waiting",
      "A property purchase or refurbishment needs a clear next step",
      "A landlord, contractor or facilities team needs a removal quotation",
    ],
    contexts: [
      "Occupied and empty homes",
      "Shops, offices and managed buildings",
      "Warehouses, workshops and industrial units",
      "Garages, outbuildings and corrugated roofs",
    ],
    quote:
      "For the quickest assessment, send the postcode, material or survey wording, rough quantity, photographs, access details and required date.",
    faqs: [
      { question: "Can I contact you before I have an asbestos survey?", answer: "Yes. Tell us what you have found and what work you are planning. We can explain whether sampling or a survey is the sensible next step before removal is priced." },
      { question: "Do you cover the whole Teesside area?", answer: "Yes. Enquiries are covered across Middlesbrough, Stockton-on-Tees, Thornaby, Billingham, Redcar, Yarm, Ingleby Barwick, Guisborough, Eston, Marske, Saltburn, Hartlepool and surrounding areas." },
      { question: "Can you quote from survey pages and photographs?", answer: "Yes. Send the relevant survey pages, postcode, photographs, approximate measurements and details of the work waiting to start. A site visit can be arranged where the scope or access needs checking." },
      { question: "Do you handle both small and commercial jobs?", answer: "Yes. Enquiries range from textured coatings, floor tiles and garage roofs at homes to asbestos removal in commercial, managed and industrial buildings." },
    ],
  },
  {
    kind: "service",
    slug: "asbestos-surveys-testing-middlesbrough-teesside",
    title: "Asbestos Surveys & Testing Middlesbrough & Teesside",
    navTitle: "Surveys & testing",
    eyebrow: "Identify the material before work starts",
    summary:
      "Asbestos survey, sampling and testing enquiries for homes, landlords, commercial premises and refurbishment projects across Teesside.",
    intro:
      "The right route depends on why you need the information. A management survey supports ongoing management of a non-domestic building; a refurbishment or demolition survey is designed around intrusive work. A single suspected material may instead need targeted sampling.",
    triggers: [
      "Refurbishment, demolition or strip-out is planned",
      "A dutyholder needs current information for a managed building",
      "A buyer or homeowner needs a suspected material checked",
      "A contractor needs the affected area assessed before disturbance",
    ],
    contexts: ["Management surveys", "Refurbishment and demolition surveys", "Targeted sampling and testing", "Survey review before quotation"],
    quote:
      "Tell us the property type, postcode, areas affected, proposed work and deadline. Existing plans or photographs are useful but not required for the first call.",
    faqs: [
      { question: "Which asbestos survey do I need?", answer: "It depends on the building and the planned work. Explain whether the property is being managed, refurbished or demolished and which areas will be disturbed, and the correct survey route can be discussed." },
      { question: "Can one material be sampled without a full survey?", answer: "Sometimes targeted sampling is appropriate when the concern is limited to one accessible material. The wider project still matters, so describe all planned disturbance before deciding." },
      { question: "Can you review an existing asbestos survey?", answer: "Yes. Send the relevant pages and explain what you now need to remove, alter or price. The report helps define material, extent and recommended action." },
      { question: "Do you survey commercial buildings across Teesside?", answer: "Commercial and managed-building enquiries are covered across Middlesbrough and the wider Teesside area, including offices, shops, workshops, warehouses and communal property." },
    ],
  },
  {
    kind: "service",
    slug: "asbestos-artex-removal-middlesbrough-teesside",
    title: "Asbestos Artex Removal Middlesbrough & Teesside",
    navTitle: "Artex & textured coatings",
    eyebrow: "Ceilings and walls before renovation",
    summary:
      "Asbestos Artex removal and asbestos textured coating removal for homes and commercial interiors across Middlesbrough and Teesside.",
    intro:
      "Textured coating enquiries often arrive when plastering, rewiring, a new ceiling, lighting work or a full refurbishment is waiting. A pattern or photograph cannot confirm asbestos, so an existing result or suitable testing may be needed before removal is planned.",
    triggers: ["Plastering or overboarding is waiting", "Rewiring or new lighting will disturb a ceiling", "Several rooms are being renovated", "A survey has identified textured coating"],
    contexts: ["Houses and flats", "Hallways and communal areas", "Shops and offices", "Occupied and empty properties"],
    quote:
      "Send the number of rooms, approximate ceiling or wall area, property postcode, photographs and any sample or survey result.",
    image: {
      src: "/asbestos-artex-textured-ceiling-north-east.webp",
      alt: "Textured ceiling photographed during a North East asbestos enquiry",
      caption: "A genuine North East project photograph. The visible texture helps show the finish and coverage; a survey or sample result confirms whether asbestos is present.",
    },
    faqs: [
      { question: "Does every Artex ceiling contain asbestos?", answer: "No. The appearance alone cannot confirm asbestos. If there is no reliable result, ask about testing before planned disturbance." },
      { question: "Can you remove asbestos textured coating before plastering?", answer: "Yes, where removal is the agreed route. Tell us what the plasterer or builder plans to do and when the room needs to be ready." },
      { question: "Can you price more than one room?", answer: "Yes. List each room and approximate dimensions, and send photographs or survey pages. Access, occupancy and follow-on work also help define the quotation." },
      { question: "Do you cover commercial textured coatings?", answer: "Yes. Enquiries include textured ceilings and walls in offices, shops, communal areas and other commercial interiors across Teesside." },
    ],
  },
  {
    kind: "service",
    slug: "asbestos-roof-removal-middlesbrough-teesside",
    title: "Asbestos Roof Removal Middlesbrough & Teesside",
    navTitle: "Roofs & garage roofs",
    eyebrow: "Garages, warehouses, workshops & outbuildings",
    summary:
      "Asbestos garage roof removal, asbestos corrugated roof removal and asbestos cement sheet removal across Middlesbrough and Teesside.",
    intro:
      "Roof projects range from a small detached garage to large corrugated sheets over workshops, stores and industrial units. Access, height, sheet condition, building use and the replacement-roof programme all affect how the job is assessed.",
    triggers: ["A garage or outbuilding is being replaced", "Roof sheets are damaged or leaking", "A warehouse or workshop refurbishment is planned", "Solar, reroofing or demolition work cannot proceed"],
    contexts: ["Domestic garages", "Farm and storage buildings", "Workshops and industrial units", "Larger commercial roofs"],
    quote:
      "Send roof photographs, approximate length and width, height, postcode, access details and whether the structure or only the sheets are to be removed.",
    image: {
      src: "/asbestos-cement-roof-north-east-commercial-building.webp",
      alt: "Large corrugated roof on a North East commercial building",
      caption: "A genuine North East commercial roof photograph showing the height, sheet layout and scale that need to be assessed before removal is quoted.",
    },
    faqs: [
      { question: "Can you remove an asbestos garage roof?", answer: "Yes. Send photographs, dimensions and the postcode, and say whether you need the sheets removed only or the wider garage dismantled." },
      { question: "Do you remove larger corrugated asbestos roofs?", answer: "Commercial roof enquiries are covered. The quotation needs roof size, height, access, building use, condition and the programme for replacement or demolition." },
      { question: "Can the roof be identified from a photograph?", answer: "A photograph can help assess shape, condition and access, but it should not be treated as laboratory confirmation of asbestos." },
      { question: "Is disposal included?", answer: "The agreed removal scope can include lawful transport and disposal with the appropriate waste paperwork. The written quotation should define exactly what is included." },
    ],
  },
  {
    kind: "service",
    slug: "asbestos-aib-removal-middlesbrough-teesside",
    title: "Asbestos AIB Removal Middlesbrough & Teesside",
    navTitle: "AIB removal",
    eyebrow: "Boards, panels, ceilings & soffits",
    summary:
      "Asbestos AIB removal enquiries for ceilings, panels, risers, fire breaks, soffits and commercial building elements across Teesside.",
    intro:
      "Asbestos insulating board work needs an accurate scope. The location, condition, fixing method, quantity, access and whether the building is occupied all affect planning. Many AIB jobs require a licensed asbestos contractor, but the actual material and work must be assessed rather than guessed.",
    triggers: ["Survey pages identify AIB", "Ceiling or wall works are waiting", "Soffit replacement is planned", "A commercial strip-out or services project is blocked"],
    contexts: ["Ceilings and wall panels", "Soffits and roofline boards", "Plant rooms, risers and service areas", "Domestic and commercial buildings"],
    quote:
      "Send the survey item, photographs, approximate area, height, access, occupancy and details of the work that follows removal.",
    faqs: [
      { question: "Does AIB removal require a licensed contractor?", answer: "Many AIB removal jobs require an HSE-licensed asbestos contractor. The material, condition, extent and work method determine the correct route." },
      { question: "Can you quote from an asbestos survey?", answer: "Yes. Send the item pages that identify the material, location, extent and recommendation, together with the postcode and project timing." },
      { question: "Can removal be planned around an occupied building?", answer: "Occupancy is a key planning factor. Explain who uses the building, working hours, access routes and any areas that must remain operational." },
      { question: "Do you handle AIB soffit removal?", answer: "Yes. Send clear roofline photographs, approximate length, height, access and any survey result so the scope can be reviewed." },
    ],
  },
  {
    kind: "service",
    slug: "asbestos-floor-removal-middlesbrough-teesside",
    title: "Asbestos Floor Removal Middlesbrough & Teesside",
    navTitle: "Floor tiles & adhesive",
    eyebrow: "Before new flooring, kitchens & refurbishments",
    summary:
      "Asbestos floor tile removal and asbestos bitumen adhesive removal for homes, landlords and commercial refurbishments across Teesside.",
    intro:
      "Flooring enquiries often arise after old tiles are uncovered beneath carpet, vinyl or later finishes. The replacement flooring, room use, extent and subfloor condition all matter. Old tiles or dark adhesive should not be identified as asbestos by appearance alone.",
    triggers: ["A new kitchen, bathroom or floor finish is waiting", "Tiles were uncovered during renovation", "A survey identifies floor tiles or adhesive", "A shop, office or communal area is being stripped out"],
    contexts: ["Kitchens and bathrooms", "Hallways and multiple rooms", "Shops, offices and communal areas", "Occupied and empty properties"],
    quote:
      "Send room dimensions, photographs, postcode, survey or sample result where available, and details of the replacement flooring programme.",
    faqs: [
      { question: "Can old floor tiles be identified from a photograph?", answer: "No. Photographs help with extent and access, but testing or a reliable survey is needed to confirm whether the tiles or adhesive contain asbestos." },
      { question: "Can you remove tiles before new flooring is fitted?", answer: "Yes. Tell us the required completion date and what the flooring contractor needs from the cleared surface." },
      { question: "Do you remove asbestos bitumen adhesive?", answer: "Asbestos bitumen adhesive removal can be assessed where it is confirmed or identified in a survey. The area, substrate and required finish affect the scope." },
      { question: "Can you price several rooms?", answer: "Yes. Provide a simple room list with approximate dimensions, photographs and any survey pages so the full area can be assessed together." },
    ],
  },
  {
    kind: "service",
    slug: "commercial-asbestos-removal-middlesbrough-teesside",
    title: "Commercial Asbestos Removal Middlesbrough & Teesside",
    navTitle: "Commercial removal",
    eyebrow: "Managed buildings, industry & construction",
    summary:
      "Commercial asbestos removal for landlords, managing agents, contractors, facilities teams and building owners across Middlesbrough and Teesside.",
    intro:
      "Commercial asbestos work is usually tied to a programme: refurbishment, roof replacement, services work, dilapidations, demolition, tenant works or a survey action. Send the relevant register or survey pages and explain who occupies the building, what must remain operational and which trade is waiting.",
    triggers: ["A refurbishment or strip-out programme is blocked", "Survey actions need pricing", "Roof, services or demolition work is planned", "A landlord or facilities team needs a documented scope"],
    contexts: ["Warehouses and workshops", "Offices, shops and managed buildings", "Schools and public buildings", "Plant rooms and industrial premises"],
    quote:
      "Send the site address, survey or register items, drawings if available, access and occupancy information, programme dates and the next trade or inspection.",
    faqs: [
      { question: "Can you work from an asbestos register or survey?", answer: "Yes. Send the relevant entries and explain the planned project. A site visit can then focus on scope, access, occupancy and sequencing." },
      { question: "Can you plan work around tenants or operations?", answer: "Yes, where the scope allows. Provide working hours, access routes, occupied areas, shutdown constraints and the programme so these can be considered." },
      { question: "Do you cover industrial buildings in Teesside?", answer: "Yes. Enquiries include workshops, warehouses, plant areas and industrial units across Middlesbrough and the wider Teesside area." },
      { question: "What should a contractor send for a quote?", answer: "Send the survey or schedule, drawings where available, site address, photographs, quantities, programme, access information and the work package that follows removal." },
    ],
  },
];

export type AreaPage = {
  kind: "area";
  slug: string;
  title: string;
  navTitle: string;
  eyebrow: string;
  summary: string;
  metaDescription: string;
  local: string;
  planning: string;
  route: string;
  priorities: string[];
  subAreas: string[];
  schemaAreas: string[];
  propertyTypes: string[];
  buyerSituations: string[];
  whatToSend: string[];
  nearbySlugs: string[];
  serviceSlugs: string[];
  primaryImage: {
    src: string;
    alt: string;
    name: string;
    caption: string;
    width: number;
    height: number;
  };
  faqs: Faq[];
};

export type AreaDepth = {
  landmarksTitle: string;
  landmarks: string;
  accessPlanning: string;
  situationTitle: string;
  situation: string;
  evidenceNote: string;
};

export const areas: AreaPage[] = [
  {
    kind: "area",
    slug: "asbestos-removal-middlesbrough",
    title: "Asbestos Removal Middlesbrough",
    navTitle: "Middlesbrough",
    eyebrow: "Homes, landlords, contractors & commercial sites",
    summary: "Asbestos removal, surveys and testing enquiries across Middlesbrough, including Linthorpe, Acklam, Marton, Coulby Newham, Nunthorpe and the town’s commercial and industrial areas.",
    metaDescription: "Asbestos removal in Middlesbrough for homes, landlords and commercial sites. Surveys, testing and lawful disposal. Call 01642 921035 for a free quote.",
    local: "Domestic enquiries around Linthorpe, Acklam and Marton often arrive when ceilings, floors, garages or soffits are holding up renovation. Around Riverside Park, Cannon Park and TeesAMP, the buyer is more likely to need survey actions, roof or board removal planned around access, deliveries, occupants and other trades. A66 and A19 connections help define the wider Teesside working area, but the quotation still starts with the exact site, scope and programme.",
    planning: "For a house or landlord property, the quotation can usually start room by room: what material is confirmed or suspected, its approximate area and which trade is waiting. For a warehouse, workshop or managed building, send the survey item together with working hours, loading access, occupied areas and the contractor programme. That keeps the removal scope tied to the live Middlesbrough project rather than a generic price.",
    route: "You do not need to decide whether the work is licensed. Confirmed asbestos AIB removal, asbestos pipe lagging removal and other higher-risk work may require an HSE-licensed asbestos contractor, while other materials can follow a different route. Send the evidence you have; if the material is unconfirmed, asbestos sampling or a suitable survey can be discussed before disturbance.",
    priorities: ["Asbestos Artex removal and asbestos textured coating removal", "Asbestos floor tile removal and asbestos bitumen adhesive removal", "Asbestos garage roof removal and commercial asbestos roof removal", "Asbestos AIB removal, asbestos AIB soffit removal and asbestos pipe lagging removal"],
    subAreas: ["Central Middlesbrough", "Linthorpe", "Acklam", "Marton", "Coulby Newham", "Nunthorpe", "Riverside Park", "Cannon Park", "TeesAMP"],
    schemaAreas: ["Middlesbrough", "Linthorpe", "Acklam", "Marton", "Coulby Newham", "Nunthorpe"],
    propertyTypes: ["Terraced and semi-detached homes", "Landlord and managed housing", "Shops, offices and communal buildings", "Warehouses, workshops and industrial units"],
    buyerSituations: ["Plastering, rewiring or a room refurbishment is waiting", "A survey has identified material that needs pricing", "A garage or commercial roof must be replaced", "A contractor needs a clear asbestos removal scope before work continues"],
    whatToSend: ["Middlesbrough postcode and property type", "Relevant survey or sample result", "Clear photographs and rough measurements", "Access details, occupants and the next trade or deadline"],
    nearbySlugs: ["asbestos-removal-thornaby", "asbestos-removal-guisborough-eston", "asbestos-removal-stockton-on-tees", "asbestos-removal-redcar"],
    serviceSlugs: ["asbestos-removal-middlesbrough-teesside", "asbestos-artex-removal-middlesbrough-teesside", "asbestos-floor-removal-middlesbrough-teesside", "asbestos-aib-removal-middlesbrough-teesside", "commercial-asbestos-removal-middlesbrough-teesside"],
    primaryImage: { src: "/asbestos-removal-middlesbrough-textured-ceiling.webp", alt: "Textured ceiling photographed during an asbestos removal enquiry in Middlesbrough", name: "Asbestos Removal Middlesbrough – textured ceiling project photograph", caption: "Asbestos Removal Middlesbrough – a genuine textured-ceiling project photograph used to show the finish and area involved; survey or sample evidence confirms the material.", width: 1200, height: 1600 },
    faqs: [
      { question: "Which parts of Middlesbrough do you cover?", answer: "Coverage includes central Middlesbrough, Linthorpe, Acklam, Marton, Coulby Newham, Nunthorpe and surrounding districts, together with commercial and industrial premises across the town." },
      { question: "Can I send a Middlesbrough survey for pricing?", answer: "Yes. Send the relevant pages, postcode, photographs, approximate quantities and the work or deadline affected." },
      { question: "Do you cover domestic and industrial work?", answer: "Yes. Enquiries range from rooms, floors, garages and soffits at homes to roofs, boards and service areas in workshops, warehouses and managed buildings." },
      { question: "What if builders or electricians are waiting?", answer: "Tell us which trade is held up, the area they need cleared and the required date. This helps the asbestos removal scope fit the wider Middlesbrough refurbishment programme." },
      { question: "Do I need a survey before calling?", answer: "No. If asbestos is confirmed, send the survey or sample result. If it is only suspected, explain where it is and what work may disturb it so the right testing or survey route can be discussed." },
      { question: "What affects an asbestos removal quote in Middlesbrough?", answer: "Material, amount, condition, height, access, occupancy and the work planned afterwards all matter. Send the postcode, photographs, rough measurements and any paperwork already available." },
    ],
  },
  {
    kind: "area",
    slug: "asbestos-removal-stockton-on-tees",
    title: "Asbestos Removal Stockton-on-Tees",
    navTitle: "Stockton-on-Tees",
    eyebrow: "Residential, commercial & refurbishment enquiries",
    summary: "Asbestos removal across Stockton, Norton, Eaglescliffe and nearby areas, with commercial coverage around Portrack, Preston Farm and Teesdale.",
    metaDescription: "Asbestos removal in Stockton-on-Tees, Norton and Eaglescliffe for domestic and commercial work. Call 01642 921035 for a free local quote.",
    local: "In Stockton and Norton, removal enquiries commonly sit inside home renovation, landlord works or property purchases. Portrack, Preston Farm and Teesdale bring a different mix of retail, office, workshop and managed-building requirements, where loading, working hours, tenant access and the next contractor’s programme can matter as much as the quantity. Send the survey item or suspected-material details and identify what must happen after removal.",
    planning: "A Stockton domestic quote may focus on one loft, ceiling, floor or garage. A Portrack, Preston Farm or Teesdale enquiry is more likely to need the survey schedule checked against deliveries, tenant access, working hours and the handover date. Send the actual site information so the scope reflects the building and programme rather than assuming every Stockton job is the same.",
    route: "If the material is already identified, send the report item and photographs. If it is not confirmed, describe the location and proposed work before anyone disturbs it. The material, condition and removal method determine whether licensed asbestos removal is required; the customer does not need to choose that category before contacting us.",
    priorities: ["Asbestos textured coating removal before plastering or rewiring", "Asbestos floor tile removal before new finishes", "Asbestos garage roof removal and asbestos cement sheet removal", "Commercial asbestos removal following survey actions"],
    subAreas: ["Stockton town centre", "Norton", "Eaglescliffe", "Hartburn", "Fairfield", "Portrack", "Preston Farm", "Teesdale"],
    schemaAreas: ["Stockton-on-Tees", "Norton", "Eaglescliffe", "Hartburn", "Fairfield", "Portrack"],
    propertyTypes: ["Older houses and rental property", "Retail and trade premises", "Offices and managed buildings", "Workshops, warehouses and storage units"],
    buyerSituations: ["A loft, ceiling or wall area has stopped renovation", "Old flooring has been exposed before a new finish", "A garage or outbuilding roof is being replaced", "Tenants, deliveries or a commercial programme affect access"],
    whatToSend: ["Stockton-on-Tees postcode and building use", "Survey item or description of the suspected material", "Photographs, quantities and approximate dimensions", "Working hours, access limits and the date the next contractor needs"],
    nearbySlugs: ["asbestos-removal-thornaby", "asbestos-removal-billingham", "asbestos-removal-yarm-ingleby-barwick", "asbestos-removal-middlesbrough"],
    serviceSlugs: ["asbestos-removal-middlesbrough-teesside", "asbestos-floor-removal-middlesbrough-teesside", "asbestos-roof-removal-middlesbrough-teesside", "commercial-asbestos-removal-middlesbrough-teesside", "asbestos-surveys-testing-middlesbrough-teesside"],
    primaryImage: { src: "/asbestos-removal-stockton-on-tees-loft-enquiry.webp", alt: "Loft space photographed during an asbestos removal enquiry in Stockton-on-Tees", name: "Asbestos Removal Stockton-on-Tees – loft project photograph", caption: "Asbestos Removal Stockton-on-Tees – a genuine loft project photograph showing the access and work area considered when an asbestos removal enquiry is assessed.", width: 1600, height: 1200 },
    faqs: [
      { question: "Do you cover Norton and Eaglescliffe as well as Stockton?", answer: "Yes. Stockton-on-Tees coverage includes Norton, Eaglescliffe and surrounding areas, with Teesside-wide support where the site sits outside the town centre." },
      { question: "Can commercial work be planned around tenants?", answer: "Occupancy and tenant access can be built into the assessment. Send working hours, access restrictions and the project programme." },
      { question: "Can I enquire without confirmed asbestos?", answer: "Yes. Explain the material, property and planned work. Where confirmation is needed, the appropriate survey or sampling route can be discussed." },
      { question: "Can you quote asbestos floor tile removal in Stockton?", answer: "Yes. Send room or floor dimensions, photographs, the Stockton postcode and any survey or sample result. Also explain what new flooring or refurbishment work is waiting." },
      { question: "What should a contractor in Portrack or Preston Farm send?", answer: "Send the survey schedule, site address, photographs, quantities, access and delivery restrictions, working hours and the date the next trade needs the area." },
      { question: "What affects an asbestos removal quote in Stockton-on-Tees?", answer: "The confirmed material, amount, condition, height, access, occupancy and programme can all affect the quotation. Clear site information gives a more useful scope than the postcode alone." },
    ],
  },
  {
    kind: "area",
    slug: "asbestos-removal-thornaby",
    title: "Asbestos Removal Thornaby",
    navTitle: "Thornaby",
    eyebrow: "Teesdale, Thornaby town centre & surrounding estates",
    summary: "Asbestos removal, survey and testing enquiries for homes, offices, managed buildings and contractors across Thornaby and the Teesdale area.",
    metaDescription: "Asbestos removal in Thornaby and Teesdale for homes, landlords, offices and managed buildings. Call 01642 921035 for a free quote.",
    local: "Thornaby enquiries can move quickly between occupied homes, landlord stock and business premises around Teesdale. For a house, the immediate issue may be a textured ceiling, floor or garage blocking renovation. For an office or managed site, access, occupants, survey records and a fixed handover or maintenance window usually matter more. The A19 and A66 make Thornaby central to the wider coverage area, but every quote is tied to the actual address and scope.",
    planning: "In occupied Thornaby homes, room access, furniture, household routines and the following trade can shape the plan. Around Teesdale, offices and managed buildings often need survey items coordinated with tenants, maintenance windows and a fixed handover. State which areas must remain in use so the initial assessment reflects the real building.",
    route: "Survey paperwork is useful but not compulsory for the first contact. A confirmed result can move the enquiry towards removal pricing; an unconfirmed ceiling, wall, floor or roof may need sampling or a survey first. Higher-risk materials are routed to licensed asbestos removal where the work requires an HSE-licensed contractor.",
    priorities: ["Asbestos removal before domestic renovation", "Asbestos surveys and targeted sampling", "Commercial asbestos removal in offices and managed buildings", "Asbestos roof removal, asbestos floor tile removal, asbestos AIB removal and asbestos textured coating removal"],
    subAreas: ["Thornaby town centre", "Mandale", "Village ward", "Bassleton", "Teesdale", "Bon Lea", "Thornaby industrial and business areas"],
    schemaAreas: ["Thornaby", "Mandale", "Bassleton", "Teesdale", "Bon Lea"],
    propertyTypes: ["Occupied homes and landlord property", "Offices around Teesdale", "Managed blocks and communal areas", "Workshops and commercial units"],
    buyerSituations: ["Wall or ceiling work has exposed a suspect material", "A landlord needs survey actions priced", "An office alteration or handover is waiting", "Roof, floor or board removal must be coordinated with another trade"],
    whatToSend: ["Thornaby postcode and room or building use", "Survey wording or sample result where available", "Photographs and approximate area", "Occupancy, access and the work planned afterwards"],
    nearbySlugs: ["asbestos-removal-stockton-on-tees", "asbestos-removal-yarm-ingleby-barwick", "asbestos-removal-middlesbrough", "asbestos-removal-billingham"],
    serviceSlugs: ["asbestos-removal-middlesbrough-teesside", "asbestos-surveys-testing-middlesbrough-teesside", "commercial-asbestos-removal-middlesbrough-teesside", "asbestos-aib-removal-middlesbrough-teesside", "asbestos-floor-removal-middlesbrough-teesside"],
    primaryImage: { src: "/asbestos-removal-thornaby-wall-material.webp", alt: "Interior wall area photographed during an asbestos removal project in Thornaby", name: "Asbestos Removal Thornaby – interior wall project photograph", caption: "Asbestos Removal Thornaby – a genuine interior project photograph showing the wall area and room context used when removal work is scoped.", width: 1600, height: 1200 },
    faqs: [
      { question: "Do you cover Thornaby and Teesdale?", answer: "Yes. Coverage includes Thornaby town centre, surrounding residential areas and commercial property around Teesdale." },
      { question: "What should a business send?", answer: "Send the relevant asbestos-register or survey items, site address, photographs, access arrangements, occupancy and programme." },
      { question: "Can homeowners send photographs first?", answer: "Yes. Photographs help explain location and extent, although they cannot confirm the asbestos type on their own." },
      { question: "Can asbestos removal be planned around an occupied Thornaby property?", answer: "Yes, where the scope allows. Explain who uses the building, which rooms or work areas are affected and any times when access is restricted." },
      { question: "What if an office handover in Teesdale is waiting?", answer: "Send the survey item, access details, affected area and handover date. The asbestos removal scope can then be assessed against the live commercial programme." },
      { question: "Do I need to know whether the work is licensed?", answer: "No. The material, condition, quantity and removal method determine the correct route. Send the evidence you have and the work will be assessed accordingly." },
    ],
  },
  {
    kind: "area",
    slug: "asbestos-removal-billingham",
    title: "Asbestos Removal Billingham",
    navTitle: "Billingham",
    eyebrow: "Domestic, managed & industrial property",
    summary: "Asbestos removal and survey enquiries across Billingham, including residential areas, garages, commercial premises and the wider Haverton Hill area.",
    metaDescription: "Asbestos removal in Billingham for homes, garages, commercial and industrial premises. Surveys, testing and free quotes on 01642 921035.",
    local: "Billingham combines domestic property work with a strong industrial and commercial setting. A household enquiry may concern an old garage roof, textured coating, floor tile or soffit. A workplace enquiry may involve roof sheets, panels, plant areas or a survey action that has to be sequenced around operations. Describe the exact building use, access and next stage rather than relying on the postcode alone.",
    planning: "A Billingham home enquiry can often begin with roof or room measurements, photographs and the renovation date. Industrial and plant-related enquiries need more operational detail: the survey reference, work area, access route, permits or site rules, occupied zones and any shutdown window. That distinction keeps domestic and commercial scopes clear.",
    route: "Do not delay contact while trying to decide the licence category. Some asbestos AIB removal and asbestos pipe lagging removal work may require an HSE-licensed asbestos contractor; asbestos cement sheet work can follow a different route depending on condition and method. The actual material and job decide the approach.",
    priorities: ["Asbestos garage roof removal and asbestos cement sheet removal", "Asbestos Artex removal and asbestos floor tile removal", "Commercial asbestos removal following industrial survey actions", "Asbestos AIB removal, asbestos pipe lagging removal and service-area enquiries"],
    subAreas: ["Billingham town centre", "Wolviston", "Wynyard", "Roseworth", "Haverton Hill", "Cowpen Lane", "Billingham industrial areas"],
    schemaAreas: ["Billingham", "Wolviston", "Wynyard", "Roseworth", "Haverton Hill"],
    propertyTypes: ["Homes, garages and outbuildings", "Landlord and managed property", "Commercial units and workshops", "Industrial and plant-related buildings"],
    buyerSituations: ["Flooring or a bathroom refit cannot continue", "A garage roof is damaged or due for replacement", "A survey action is holding up maintenance", "Operations, access or shutdown timing affect a commercial removal scope"],
    whatToSend: ["Billingham postcode and property or site type", "Survey page or sample result", "Photographs, measurements and material location", "Access route, operations, occupants and programme"],
    nearbySlugs: ["asbestos-removal-stockton-on-tees", "asbestos-removal-hartlepool", "asbestos-removal-middlesbrough", "asbestos-removal-thornaby"],
    serviceSlugs: ["asbestos-removal-middlesbrough-teesside", "asbestos-roof-removal-middlesbrough-teesside", "asbestos-floor-removal-middlesbrough-teesside", "asbestos-aib-removal-middlesbrough-teesside", "commercial-asbestos-removal-middlesbrough-teesside"],
    primaryImage: { src: "/asbestos-floor-removal-billingham-project.webp", alt: "Floor area photographed during an asbestos removal project in Billingham", name: "Asbestos Removal Billingham – floor removal project photograph", caption: "Asbestos Removal Billingham – a genuine floor-removal project photograph. The photograph shows the work area; the project information confirms the asbestos scope.", width: 1200, height: 1600 },
    faqs: [
      { question: "Do you cover industrial premises in Billingham?", answer: "Yes. Commercial and industrial enquiries are assessed using the survey scope, building use, access, occupancy and project programme." },
      { question: "Can you remove a garage roof at a Billingham home?", answer: "Yes. Send roof photographs, approximate dimensions, access and whether the sheets or the complete structure need removing." },
      { question: "Is survey paperwork required for the first call?", answer: "No. Call with what you know. If you have a report, send it; if not, explain the suspected material and planned work." },
      { question: "Can industrial asbestos removal be planned around operations?", answer: "The assessment can account for occupied zones, shifts, access routes, site rules and shutdown windows. Send the survey scope and programme so those constraints are clear." },
      { question: "What affects an asbestos removal quote in Billingham?", answer: "Material, amount, condition, height, access and building use all matter. Industrial rules or shutdown needs can affect a workplace scope, while room size and the next trade often matter most at a home." },
      { question: "Do you provide asbestos floor tile removal in Billingham?", answer: "Yes. Send the survey or sample result, floor dimensions, photographs and the planned replacement finish so the confirmed tile and adhesive scope can be assessed." },
    ],
  },
  {
    kind: "area",
    slug: "asbestos-removal-redcar",
    title: "Asbestos Removal Redcar & Cleveland",
    navTitle: "Redcar & Cleveland",
    eyebrow: "Redcar, Dormanstown, Marske, Saltburn & nearby areas",
    summary: "Asbestos removal, garage and commercial roof work, surveys and testing across Redcar and the surrounding Cleveland coast.",
    metaDescription: "Asbestos removal in Redcar, Marske, Saltburn and Cleveland for homes, garages and commercial roofs. Call 01642 921035 for a free quote.",
    local: "Across Redcar, Dormanstown, Marske and Saltburn, enquiries range from occupied homes and garages to workshops, storage buildings and larger roofed premises. Coastal exposure may make a roof look weathered, but appearance does not confirm asbestos. Clear photographs, dimensions, height and access help assess the job while a survey or sample result confirms the material where needed.",
    planning: "Roof enquiries along the Cleveland coast need a clear view of sheet layout, height, condition, access and what will replace the roof. For indoor work, list the rooms or areas affected and the renovation stage. Photographs show scale and access, but a weathered roof or textured finish is not treated as confirmed asbestos from appearance alone.",
    route: "Where a survey already identifies the material, send the relevant item and recommendation. Where it is only suspected, testing may be the next step before roofing, plastering or refurbishment continues. The assessment also decides whether the removal requires an HSE-licensed asbestos contractor; the buyer does not need to make that decision first.",
    priorities: ["Asbestos garage roof removal and asbestos corrugated roof removal", "Asbestos textured coating removal, asbestos floor tile removal and asbestos AIB soffit removal", "Commercial asbestos removal for workshops and roofed premises", "Asbestos surveys and testing before refurbishment"],
    subAreas: ["Redcar", "Dormanstown", "Marske-by-the-Sea", "Saltburn-by-the-Sea", "Kirkleatham", "Skelton", "New Marske"],
    schemaAreas: ["Redcar", "Dormanstown", "Marske-by-the-Sea", "Saltburn-by-the-Sea", "Kirkleatham", "Skelton"],
    propertyTypes: ["Coastal homes and rental property", "Garages, sheds and outbuildings", "Workshops and storage buildings", "Shops, managed buildings and commercial roofs"],
    buyerSituations: ["A textured ceiling or wall finish will be disturbed", "Weathered roof sheets need assessment before replacement", "A garage or workshop project is waiting", "A survey has identified work before refurbishment or sale"],
    whatToSend: ["Redcar or Cleveland postcode", "Relevant survey or testing information", "Clear photos, height and measurements", "Access, occupancy and the following trade or deadline"],
    nearbySlugs: ["asbestos-removal-guisborough-eston", "asbestos-removal-middlesbrough", "asbestos-removal-stockton-on-tees", "asbestos-removal-hartlepool"],
    serviceSlugs: ["asbestos-removal-middlesbrough-teesside", "asbestos-roof-removal-middlesbrough-teesside", "asbestos-artex-removal-middlesbrough-teesside", "commercial-asbestos-removal-middlesbrough-teesside", "asbestos-surveys-testing-middlesbrough-teesside"],
    primaryImage: { src: "/asbestos-textured-coating-removal-redcar-cleveland.webp", alt: "Textured ceiling photographed for an asbestos removal enquiry in Redcar and Cleveland", name: "Asbestos Removal Redcar & Cleveland – textured ceiling project photograph", caption: "Asbestos Removal Redcar & Cleveland – a genuine textured-ceiling project photograph from the wider Cleveland coast coverage area; testing confirms whether the coating contains asbestos.", width: 1600, height: 1200 },
    faqs: [
      { question: "Do you cover Marske and Saltburn?", answer: "Yes. Coverage extends from Redcar and Dormanstown to Marske, Saltburn and surrounding Redcar and Cleveland areas." },
      { question: "Can roof sheets be identified from photos?", answer: "Photos help assess layout and condition, but they do not reliably confirm whether a sheet contains asbestos. Survey or sampling information may be needed." },
      { question: "Do you remove commercial roofs?", answer: "Commercial corrugated roof enquiries are covered. Send dimensions, height, use of the building, access and the reroofing or demolition programme." },
      { question: "What should I send for asbestos garage roof removal in Redcar?", answer: "Send the postcode, several roof photographs, approximate length and width, height, access and whether the roof sheets or the complete garage structure need removing." },
      { question: "Can asbestos removal be arranged before a coastal property sale?", answer: "Yes. Send the relevant survey wording, property postcode, photographs and the sale or contractor deadline so the required work can be assessed." },
      { question: "Do I need a survey before contacting you?", answer: "No. If the material is confirmed, send the report. If it is suspected, explain where it is and what work may disturb it so the appropriate testing or survey route can be discussed." },
    ],
  },
  {
    kind: "area",
    slug: "asbestos-removal-yarm-ingleby-barwick",
    title: "Asbestos Removal Yarm & Ingleby Barwick",
    navTitle: "Yarm & Ingleby Barwick",
    eyebrow: "Home renovation, extensions & managed property",
    summary: "Asbestos surveys, testing and removal enquiries across Yarm, Eaglescliffe and Ingleby Barwick.",
    metaDescription: "Asbestos removal, surveys and testing in Yarm, Eaglescliffe and Ingleby Barwick. Domestic and landlord enquiries. Free quote: 01642 921035.",
    local: "The age of the individual property matters more than a town-wide assumption. In Yarm and Eaglescliffe, buyers may be opening up older finishes during renovation, extension or purchase work. In Ingleby Barwick, an enquiry can still involve garages, outbuildings, later alterations or materials brought into a property. Start with the address, approximate build period, material location and proposed disturbance.",
    planning: "Property age and alteration history are especially useful here. A Yarm or Eaglescliffe renovation may involve older ceilings, floors, outbuildings or later extensions, while an Ingleby Barwick enquiry may relate to a garage, imported component or subsequent alteration. The quotation must follow the actual property evidence, not an assumption about the wider estate.",
    route: "If a purchase report or survey names asbestos, send the relevant page and explain the work you want completed. If the material is unconfirmed, targeted sampling may be enough for one accessible item, while wider intrusive renovation can need a more suitable survey. The confirmed material and removal method decide whether licensed work is required.",
    priorities: ["Asbestos sampling before renovation", "Asbestos textured coating removal and asbestos floor tile removal", "Asbestos garage roof removal and asbestos cement sheet removal", "Asbestos survey review for extensions and property purchases"],
    subAreas: ["Yarm", "Eaglescliffe", "Ingleby Barwick", "Kirklevington", "Aislaby", "Egglescliffe", "Low Worsall"],
    schemaAreas: ["Yarm", "Eaglescliffe", "Ingleby Barwick", "Kirklevington", "Egglescliffe"],
    propertyTypes: ["Older houses and cottages", "Extended and altered homes", "Garages and detached outbuildings", "Landlord and managed residential property"],
    buyerSituations: ["A purchase survey raises an asbestos question", "An extension or internal alteration will disturb finishes", "A ceiling or floor needs testing before renovation", "A garage or outbuilding roof is being replaced"],
    whatToSend: ["Yarm, Eaglescliffe or Ingleby Barwick postcode", "Approximate property age and alteration history", "Photographs and planned disturbance", "Survey wording, measurements and renovation date"],
    nearbySlugs: ["asbestos-removal-stockton-on-tees", "asbestos-removal-thornaby", "asbestos-removal-darlington-county-durham", "asbestos-removal-middlesbrough"],
    serviceSlugs: ["asbestos-surveys-testing-middlesbrough-teesside", "asbestos-artex-removal-middlesbrough-teesside", "asbestos-floor-removal-middlesbrough-teesside", "asbestos-roof-removal-middlesbrough-teesside", "asbestos-removal-middlesbrough-teesside"],
    primaryImage: { src: "/asbestos-artex-removal-middlesbrough-teesside-textured-ceiling.webp", alt: "Textured ceiling in a Teesside property shown as relevant asbestos removal project context", name: "Asbestos Removal Yarm & Ingleby Barwick – Teesside textured ceiling reference", caption: "Asbestos Removal Yarm & Ingleby Barwick – genuine Teesside project photography showing a textured ceiling. It is used as relevant service context and is not presented as a completed job at a specific Yarm or Ingleby Barwick address.", width: 1200, height: 1600 },
    faqs: [
      { question: "Can newer homes still need an asbestos check?", answer: "The building date, alterations and specific material all matter. Do not assume from the town or estate alone; explain where the material is and what work is planned." },
      { question: "Do you cover Eaglescliffe?", answer: "Yes. Yarm, Eaglescliffe, Ingleby Barwick and nearby areas are covered as part of the wider Teesside service area." },
      { question: "Can I send an estate-agent or survey report?", answer: "Yes. Send the relevant asbestos wording or pages and explain the purchase, renovation or deadline affected." },
      { question: "Can you check one suspected material before an extension?", answer: "Targeted sampling may be suitable for one accessible material, but the full extension or refurbishment scope still matters. Explain every area that will be disturbed before choosing the survey route." },
      { question: "What affects a quote in Yarm or Ingleby Barwick?", answer: "The confirmed material, amount, access, occupancy, property alterations and planned disturbance all matter. Send the postcode, photographs, rough dimensions and any report already available." },
      { question: "Do you provide asbestos garage roof removal locally?", answer: "Yes. Send roof photographs, dimensions, height and access, and explain whether only the sheets or the wider outbuilding structure are involved." },
    ],
  },
  {
    kind: "area",
    slug: "asbestos-removal-guisborough-eston",
    title: "Asbestos Removal Guisborough, Eston & South Teesside",
    navTitle: "Guisborough & Eston",
    eyebrow: "Guisborough, Eston, Normanby, Nunthorpe & nearby",
    summary: "Asbestos removal, surveys, testing and disposal across Guisborough, Eston, Normanby and surrounding South Teesside.",
    metaDescription: "Asbestos removal in Guisborough, Eston, Normanby and South Teesside. Homes, garages and commercial premises. Free quote: 01642 921035.",
    local: "Guisborough, Eston and Normanby bring a mix of home renovation, landlord work, garages and small commercial premises. Access can range from a driveway and detached outbuilding to tighter terraces or occupied shops. The useful quotation detail is not a list of nearby landmarks; it is whether the material is indoors or outside, height, condition, occupancy, parking or loading access and what must happen next.",
    planning: "A detached garage with driveway access is scoped differently from a roofline, ceiling or floor in a tighter terrace or occupied high-street property. Send photographs that show both the material and the route to it. Height, parking, loading distance and whether the premises must remain open can all shape work in Guisborough, Eston and Normanby.",
    route: "If the survey confirms asbestos AIB soffit removal, asbestos cement flue removal or asbestos pipe lagging removal, include the exact wording because the materials can require different controls. If nothing is confirmed, describe the suspected item and the work planned. Testing or a survey can be arranged before removal where needed.",
    priorities: ["Asbestos garage roof removal and asbestos cement sheet removal", "Asbestos textured coating removal and asbestos floor tile removal", "Asbestos AIB soffit removal, asbestos cement flue removal and asbestos pipe lagging removal", "Asbestos surveys before refurbishment or purchase"],
    subAreas: ["Guisborough", "Eston", "Normanby", "Nunthorpe", "South Bank", "Grangetown", "Ormesby"],
    schemaAreas: ["Guisborough", "Eston", "Normanby", "Nunthorpe", "South Bank", "Ormesby"],
    propertyTypes: ["Houses, bungalows and rental homes", "Garages and garden outbuildings", "High-street and small commercial premises", "Workshops, stores and managed property"],
    buyerSituations: ["A garage or sheeted roof needs replacing", "Plastering, flooring or rewiring is waiting", "A soffit, flue or service area has been identified in a survey", "Parking, height or tighter access affects removal planning"],
    whatToSend: ["Guisborough, Eston or South Teesside postcode", "Survey or sample result where available", "Photos, dimensions, height and access", "Property use and the next stage of work"],
    nearbySlugs: ["asbestos-removal-redcar", "asbestos-removal-middlesbrough", "asbestos-removal-yarm-ingleby-barwick", "asbestos-removal-thornaby"],
    serviceSlugs: ["asbestos-removal-middlesbrough-teesside", "asbestos-roof-removal-middlesbrough-teesside", "asbestos-artex-removal-middlesbrough-teesside", "asbestos-aib-removal-middlesbrough-teesside", "asbestos-surveys-testing-middlesbrough-teesside"],
    primaryImage: { src: "/asbestos-cement-roof-north-east-commercial-building.webp", alt: "Corrugated commercial roof on a North East building shown as asbestos roof removal project context", name: "Asbestos Removal Guisborough & Eston – North East commercial roof reference", caption: "Asbestos Removal Guisborough & Eston – genuine North East commercial-roof photography used to show roof scale, height and sheet layout; it is not presented as a completed job at a specific local address.", width: 1600, height: 1200 },
    faqs: [
      { question: "Do you cover Eston and Normanby?", answer: "Yes. Coverage includes Guisborough, Eston, Normanby, Nunthorpe and nearby South Teesside areas." },
      { question: "Can access affect the quotation?", answer: "Yes. Height, parking, loading, distance from the work area and whether the building is occupied can all affect planning and cost." },
      { question: "What should I send for a garage-roof quote?", answer: "Send the postcode, several photographs, approximate length and width, height, access and whether the complete structure or roof sheets only are involved." },
      { question: "Do you provide asbestos textured coating removal in South Teesside?", answer: "Yes. Send the room count, ceiling or wall dimensions, photographs and any sample result, together with the plastering, rewiring or renovation date." },
      { question: "Can shops or commercial premises stay occupied?", answer: "Occupancy must be considered against the actual scope. Send opening hours, access routes, affected areas and the programme so the work can be assessed around the live premises." },
      { question: "Do I need to decide whether licensed asbestos removal is required?", answer: "No. The confirmed material, condition, quantity and method determine the route. Send the survey evidence or suspected-material details and the work can be assessed correctly." },
    ],
  },
  {
    kind: "area",
    slug: "asbestos-removal-hartlepool",
    title: "Asbestos Removal Hartlepool",
    navTitle: "Hartlepool",
    eyebrow: "Homes, port-side industry & commercial estates",
    summary: "Asbestos removal and surveys across Hartlepool for homes, garages, managed buildings, workshops and commercial sites.",
    metaDescription: "Asbestos removal in Hartlepool for homes, garages, workshops and commercial sites. Surveys, lawful disposal and free quotes on 01642 921035.",
    local: "Hartlepool enquiries include domestic ceilings, floors and garages as well as roofed workshops and premises around established employment areas such as Oakesway and Queens Meadow. On a working site, explain delivery routes, height, tenants or operations and the next contractor’s date. At a home, room size, access, photographs and the renovation plan are usually the fastest starting point.",
    planning: "A Hartlepool home enquiry may be ready to assess from a room list, garage dimensions and photographs. Workshops, warehouses and port-side or employment-area premises need the survey reference, roof or work-area size, height, operating constraints and replacement or demolition programme. This separates a simple domestic obstruction from a live commercial package.",
    route: "Confirmed material can move towards a removal quotation when the scope is clear. Suspected material should not be diagnosed from a photograph; explain where it is and what will disturb it so testing or a survey can be considered. Higher-risk work is directed to an HSE-licensed asbestos contractor where required.",
    priorities: ["Asbestos garage roof removal and asbestos workshop roof removal", "Asbestos Artex removal and asbestos floor tile removal", "Commercial asbestos removal following survey actions", "Asbestos AIB removal, asbestos pipe lagging removal and managed-building enquiries"],
    subAreas: ["Hartlepool town centre", "West Park", "The Headland", "Seaton Carew", "Oakesway", "Queens Meadow", "Port and industrial areas"],
    schemaAreas: ["Hartlepool", "West Park", "The Headland", "Seaton Carew", "Oakesway", "Queens Meadow"],
    propertyTypes: ["Homes, garages and landlord property", "Managed blocks and communal buildings", "Workshops, warehouses and stores", "Commercial and industrial premises"],
    buyerSituations: ["A domestic ceiling, floor or garage is holding up work", "A workshop roof needs replacement", "Survey actions must be priced for a managed building", "Deliveries, tenants or operations affect the programme"],
    whatToSend: ["Hartlepool postcode and building type", "Survey item or suspected-material description", "Photographs, quantities, roof height or room size", "Access, occupancy, operations and deadline"],
    nearbySlugs: ["asbestos-removal-billingham", "asbestos-removal-stockton-on-tees", "asbestos-removal-redcar", "asbestos-removal-middlesbrough"],
    serviceSlugs: ["asbestos-removal-middlesbrough-teesside", "asbestos-roof-removal-middlesbrough-teesside", "commercial-asbestos-removal-middlesbrough-teesside", "asbestos-artex-removal-middlesbrough-teesside", "asbestos-aib-removal-middlesbrough-teesside"],
    primaryImage: { src: "/asbestos-floor-covering-removal-hartlepool.webp", alt: "Room after asbestos floor covering removal in Hartlepool", name: "Asbestos Removal Hartlepool – floor covering removal project", caption: "Asbestos Removal Hartlepool – a genuine Hartlepool floor-covering removal photograph showing the cleared room and exposed timber floor after the agreed removal work.", width: 1600, height: 1200 },
    faqs: [
      { question: "Do you cover Hartlepool as part of Teesside?", answer: "Yes. Hartlepool enquiries are covered alongside Middlesbrough, Stockton, Billingham, Redcar and the wider Teesside area." },
      { question: "Can you assess a workshop roof?", answer: "Yes. Send roof size, height, photographs, building use, access and the planned replacement or demolition programme." },
      { question: "Can I call about a suspected material?", answer: "Yes. You do not need to diagnose it first. Explain where it is and what work may disturb it." },
      { question: "Can removal be planned around workshop operations?", answer: "Send operating hours, occupied zones, delivery routes, access restrictions and the contractor programme. These details help define whether and how the work can be sequenced." },
      { question: "What affects an asbestos removal quote in Hartlepool?", answer: "The material, amount, condition, height, access and building use all matter. Roof work also needs dimensions and the replacement or demolition plan." },
      { question: "Do you provide asbestos Artex removal in Hartlepool homes?", answer: "Yes. Send the number of rooms, approximate ceiling or wall areas, photographs and any test result, plus the date plastering, rewiring or renovation needs to continue." },
    ],
  },
  {
    kind: "area",
    slug: "asbestos-removal-darlington-county-durham",
    title: "Asbestos Removal Darlington & County Durham",
    navTitle: "Darlington & County Durham",
    eyebrow: "Southern coverage from Teesside",
    summary: "Asbestos removal, surveys and testing in Darlington and nearby County Durham for domestic, landlord and commercial projects.",
    metaDescription: "Asbestos removal in Darlington and nearby County Durham for homes, landlords and commercial projects. Call 01642 921035 for a free quote.",
    local: "Darlington work often arrives through property refurbishment, landlord maintenance, commercial alterations or roof replacement. Town-centre access and occupied premises create different constraints from a garage or detached building on the outskirts. Send the postcode and exact building context so travel, access, waste movement and the next trade can be considered around the real job.",
    planning: "Town-centre shops and offices may need loading, parking, opening hours and public access considered, while a garage or detached building on the outskirts can have a simpler work route but a different roof or demolition scope. Send enough photographs to show the material, building and access—not only a close-up.",
    route: "A landlord or contractor can send the survey item for direct review. A homeowner without paperwork can still enquire with the postcode, property context and proposed work. If confirmation is needed, the correct asbestos survey, sample or test can be discussed before removal; licensed work is used where the material and method require it.",
    priorities: ["Asbestos surveys and testing", "Asbestos textured coating removal, asbestos floor tile removal and asbestos garage roof removal", "Commercial asbestos removal during refurbishment", "Asbestos corrugated roof removal and asbestos cement sheet removal"],
    subAreas: ["Darlington town centre", "Haughton-le-Skerne", "Cockerton", "Harrowgate Hill", "Blackwell", "Heighington", "Nearby County Durham"],
    schemaAreas: ["Darlington", "Haughton-le-Skerne", "Cockerton", "Harrowgate Hill", "Blackwell", "Heighington", "County Durham"],
    propertyTypes: ["Homes and landlord property", "Town-centre shops and offices", "Garages and detached buildings", "Commercial units, stores and managed sites"],
    buyerSituations: ["A bathroom, kitchen or flooring project is waiting", "A landlord needs a survey action resolved", "An occupied shop or office needs planned removal", "A corrugated roof is being replaced or demolished"],
    whatToSend: ["Darlington or County Durham postcode", "Building use and exact material location", "Survey pages, photos and rough quantities", "Access, occupancy and the next contractor's date"],
    nearbySlugs: ["asbestos-removal-yarm-ingleby-barwick", "asbestos-removal-stockton-on-tees", "asbestos-removal-middlesbrough", "asbestos-removal-guisborough-eston"],
    serviceSlugs: ["asbestos-removal-middlesbrough-teesside", "asbestos-surveys-testing-middlesbrough-teesside", "asbestos-floor-removal-middlesbrough-teesside", "asbestos-roof-removal-middlesbrough-teesside", "commercial-asbestos-removal-middlesbrough-teesside"],
    primaryImage: { src: "/asbestos-floor-removal-middlesbrough-teesside-bathroom.webp", alt: "Bathroom floor in a North East property shown as relevant asbestos floor removal project context", name: "Asbestos Removal Darlington & County Durham – North East floor project reference", caption: "Asbestos Removal Darlington & County Durham – genuine North East bathroom and flooring project photography used as relevant service context, not as a claim about a specific Darlington address.", width: 1200, height: 1600 },
    faqs: [
      { question: "Do you travel from Teesside to Darlington?", answer: "Yes. Darlington and nearby County Durham are included in the wider service area." },
      { question: "Can you quote work in an occupied shop or office?", answer: "Yes. Provide working hours, access, occupancy, survey items and the required programme so the assessment reflects the live building." },
      { question: "Do you collect and dispose of asbestos?", answer: "Collection and lawful disposal can form part of the agreed scope. Send photographs and explain whether the material is already removed or still fixed in place." },
      { question: "Can you help when flooring or a bathroom project is waiting?", answer: "Yes. Send the survey or sample result where available, room dimensions, photographs and the date the next contractor needs the area ready." },
      { question: "What affects an asbestos removal quote in Darlington?", answer: "Material, amount, condition, height, access, parking, occupancy and the next stage of work can all affect the quotation. The exact postcode and building use are important." },
      { question: "Do I need a survey before contacting you?", answer: "No. Send any paperwork you have, but if the material is only suspected you can still explain its location and the planned disturbance so the sensible testing or survey route can be discussed." },
    ],
  },
];

export const areaDepth: Record<string, AreaDepth> = {
  "asbestos-removal-middlesbrough": {
    landmarksTitle: "From Linthorpe Road homes to Riverside Park units",
    landmarks: "Middlesbrough is not one property market. Terraces and converted rental property around Linthorpe Road, Parliament Road, Borough Road and Southfield Road bring different access and occupancy questions from family homes around Acklam Road, Marton Road, Coulby Newham and Nunthorpe. Commercial enquiries extend through Cannon Park, Riverside Park and the Middlehaven area near Middlesbrough College, while Cargo Fleet Road and the A66 connect larger workshops and industrial premises. Those names are useful only when they explain the building: tight street parking, a shared entrance, an occupied room, a loading yard or a live workplace.",
    accessPlanning: "For town-centre and Linthorpe work, show the route from the street to the affected room and say whether stairs, shared halls or permit parking matter. At Riverside Park, Cannon Park or Middlehaven, include the gate or loading arrangements, roof height, working hours and any delivery route that must stay open. A postcode identifies the neighbourhood; photographs of the approach and a short programme identify the job.",
    situationTitle: "Real Middlesbrough textured-ceiling enquiry",
    situation: "The page photograph comes from a genuine Middlesbrough textured-ceiling enquiry. It records the finish and the area a plastering or rewiring programme may disturb, but the photograph is not used to diagnose asbestos. The useful removal enquiry pairs that image with the sample or survey wording, the number of rooms, approximate ceiling areas, occupancy and the date the following trade needs access.",
    evidenceNote: "This is project evidence, not a stock photograph or a claim that appearance alone confirms asbestos.",
  },
  "asbestos-removal-stockton-on-tees": {
    landmarksTitle: "Stockton streets, Portrack and Preston Farm need different plans",
    landmarks: "A domestic enquiry around Norton High Street, Durham Road, Hartburn or Fairfield is normally scoped around rooms, loft access, driveways and the renovation sequence. Portrack Lane is the A1046 commercial corridor between Stockton town centre and the A19, with retail, trade and industrial premises reached from routes including Cheltenham Road. Preston Farm sits beside the A66, with the A135 and Queen Elizabeth Way serving offices, engineering, logistics and other commercial buildings. Teesdale Business Park adds occupied offices and managed premises close to the River Tees and Thornaby station.",
    accessPlanning: "On Portrack or Preston Farm, send the unit number, estate access, loading or yard restrictions, work height, operating hours and the survey schedule. In Norton, Hartburn or Fairfield, show loft hatches, stairs, room contents, garages and the route to the work area. The purpose is not to repeat road names; it is to prevent a quote for an occupied house being treated like a warehouse package, or the reverse.",
    situationTitle: "Real Stockton loft enquiry",
    situation: "The photograph on this page is from a genuine Stockton-on-Tees loft enquiry. It shows why a useful first assessment needs more than a close-up: the hatch or access route, available working space, boarding or insulation, services and the exact material identified in the report all affect the next step. The image supplies context; survey or sampling evidence supplies identification.",
    evidenceNote: "No material type is inferred from the image, and no result is claimed without supporting paperwork.",
  },
  "asbestos-removal-thornaby": {
    landmarksTitle: "Mandale homes and Teesdale offices are not the same scope",
    landmarks: "Thornaby enquiries cover established housing around Mandale Road, Lanehouse Road and Trenchard Avenue, estates around Bassleton and the Village ward, and business premises across Teesdale beside the River Tees. Teesdale Business Park is next to the A66 and close to Thornaby station, so office alterations often arrive with tenants, common areas, reception access and fixed handover dates. Domestic work is more likely to turn on room access, family occupancy, a landlord programme or the builder waiting to continue.",
    accessPlanning: "For an office near Teesdale or Queen Elizabeth Way, send the asbestos-register item, floor or suite, occupied hours, shared access and the date the space must be returned. For Mandale or Bassleton housing, photographs should show the whole wall, ceiling, floor or outbuilding plus the route through the property. If a kitchen fitter, plasterer or electrician is waiting, name that trade and the exact area it needs clear.",
    situationTitle: "Real Thornaby interior removal situation",
    situation: "The page image comes from a genuine Thornaby interior project and shows the affected wall area in its room context. That wider view helps establish working space, adjoining finishes and what the next trade will encounter. It does not by itself identify asbestos. A useful quote still requires the report or sample result where available, approximate area, room use and planned follow-on work.",
    evidenceNote: "The location claim is limited to the documented Thornaby project; the material is described only from evidence supplied with the enquiry.",
  },
  "asbestos-removal-billingham": {
    landmarksTitle: "Residential Billingham, Cowpen Lane and Haverton Hill",
    landmarks: "Billingham combines homes around Wolviston Road and the town centre with long-established employment areas. Cowpen Lane Industrial Estate includes manufacturing, engineering and logistics premises close to the A19, while Haverton Hill Road and Belasis Avenue serve industrial sites between Billingham and the River Tees. Wynyard and Wolviston add houses, managed property and business premises with different access patterns. The correct local scope therefore starts with building use and work area, not the word Billingham alone.",
    accessPlanning: "For Cowpen Lane, Belasis or Haverton Hill work, include the unit or site entrance, gate procedure, inductions, permits, operating zones, vehicle movements and any shutdown window. A residential floor, ceiling or garage enquiry needs different evidence: room or roof dimensions, driveway access, occupancy and the next renovation date. Site rules must be known before attendance, not discovered after a crew reaches the gate.",
    situationTitle: "Real Billingham floor-removal project",
    situation: "The Billingham photograph documents a genuine floor-removal project. It is useful because the full floor area, perimeter and room condition can be seen, allowing the removal requirement to be related to the replacement finish and the contractor waiting afterwards. Identification still comes from the survey or sample result, not the colour or pattern of an old tile or adhesive.",
    evidenceNote: "The image supports the local project account while the written scope controls exactly what was identified and removed.",
  },
  "asbestos-removal-redcar": {
    landmarksTitle: "Redcar coast, residential streets and Cleveland industry",
    landmarks: "Redcar work ranges from homes and landlord property around Coatham Road, Corporation Road and Kirkleatham Lane to workshops and industrial premises reached from the A1085 Trunk Road. Farther east, Marske, New Marske and Saltburn bring garages, rooflines, older finishes and occupied homes, while Longbeck Industrial Estate and the wider Cleveland business areas produce roof, unit and survey-action enquiries. Coastal exposure may explain why a roof is leaking or weathered, but it does not identify the sheet material.",
    accessPlanning: "For central Redcar or a busy commercial frontage, show parking, loading, public access and opening hours. For a garage or roof in Marske or Saltburn, include dimensions, height, condition and whether replacement is booked. At Longbeck or premises off the Trunk Road, add yard access, occupied work areas and the contractor programme. These details turn a location page into a workable removal brief.",
    situationTitle: "Real Cleveland textured-coating situation",
    situation: "The photograph is genuine project evidence from the wider Redcar and Cleveland coverage area. It shows the textured finish and room context that must be measured before plastering, electrical work or redecoration proceeds. It is not presented as visual confirmation of asbestos: the page deliberately keeps the image, the laboratory or survey result and the proposed disturbance as three separate facts.",
    evidenceNote: "The wording does not assign a street address or material result that the project record does not support.",
  },
  "asbestos-removal-yarm-ingleby-barwick": {
    landmarksTitle: "Historic Yarm, Eaglescliffe and later Ingleby Barwick estates",
    landmarks: "Yarm High Street and the streets around Yarm Bridge include older, closely arranged buildings where parking, shared access and keeping a shop or home usable can shape the work. Across the Tees, Eaglescliffe extends through housing and business areas around Yarm Road and Urlay Nook Road. Ingleby Barwick is generally later development, reached through routes such as Myton Road and Low Lane, but extensions, garages, imported components and subsequent alterations still have to be assessed from property evidence rather than the estate name.",
    accessPlanning: "For a High Street property, send photographs of the frontage, stairs or shared route, working hours and the affected room. For Eaglescliffe or Ingleby Barwick, include the approximate build date, later extension or conversion history, garage or outbuilding details and the proposed disturbance. Age can guide questions, but it never replaces a survey, sample result or inspection of the actual material.",
    situationTitle: "A truthful regional textured-ceiling reference",
    situation: "No exact Yarm or Ingleby Barwick completed-job claim is made for the page image. It is genuine Teesside project photography used to show the information a textured-ceiling enquiry should capture: full-room coverage, adjoining finishes, lighting or wiring work and the plastering programme. A local customer’s quotation would be based on their own address, evidence, measurements and access.",
    evidenceNote: "This distinction protects E-E-A-T: relevant real evidence is used without converting it into a false local case study.",
  },
  "asbestos-removal-guisborough-eston": {
    landmarksTitle: "Westgate, Eston High Street and South Teesside work routes",
    landmarks: "Guisborough’s Westgate, Market Place and Chaloner Street include older town-centre buildings where rear access, public frontage and trading hours may affect a removal plan. Eston, Normanby, South Bank and Grangetown add terraces, landlord stock, garages and commercial premises linked by routes including Normanby Road, Fabian Road and the A174. Skippers Lane Industrial Estate and nearby South Teesside employment areas bring workshops, units and sheeted roofs that require yard, height and operating information.",
    accessPlanning: "A Westgate shop or flat may need the shared entrance, stairs, parking and opening hours recorded. An Eston or Normanby home needs the route to the ceiling, floor, soffit, flue or garage shown. For Skippers Lane or another commercial unit, add roof height, loading access, occupied bays and the replacement or refurbishment programme. Street-level detail only earns its place when it changes the scope.",
    situationTitle: "A genuine regional commercial-roof reference",
    situation: "The roof photograph is a genuine North East project reference, not a claim about a completed job at a Guisborough or Eston address. It demonstrates why commercial roof enquiries need wide images: sheet layout, building span, height, edge access and what remains below the roof are all visible. Local pricing would still follow the site survey, actual dimensions, condition and replacement programme.",
    evidenceNote: "Where an exact local project is not documented, the page states that limit instead of inventing one.",
  },
  "asbestos-removal-hartlepool": {
    landmarksTitle: "Town-centre homes, Oakesway and Queens Meadow",
    landmarks: "Hartlepool enquiries span housing around York Road, the Headland and Seaton Carew, town-centre and marina-side premises, and employment areas such as Oakesway and Queens Meadow. Brenda Road and the wider industrial corridor add workshops and operating sites where deliveries, yard access and production hours can control the programme. A floor-removal enquiry in an empty room is a different task from a roof or service-area package above a working unit, even when both share a Hartlepool postcode.",
    accessPlanning: "For Oakesway, Brenda Road or Queens Meadow, identify the unit, gate or yard route, occupied work zones, height and the trade or shutdown date. In a home near York Road, Seaton Carew or the Headland, send the room list, photographs, floor or ceiling measurements, furniture or occupancy constraints and the renovation sequence. Wide images are particularly useful because they show the path to the material as well as the material area.",
    situationTitle: "Real Hartlepool floor-covering removal",
    situation: "The photograph now used on this page is from a genuine Hartlepool floor-covering removal job. It shows the cleared room and exposed timber floor after the agreed work, giving the buyer a practical view of the handover condition for the following refurbishment trade. The page does not infer the original material from the finished photograph; the identification and agreed removal scope belong to the project record.",
    evidenceNote: "The image is exact local evidence and is named, captioned and described consistently across the page and structured data.",
  },
  "asbestos-removal-darlington-county-durham": {
    landmarksTitle: "Darlington town centre, North Road and eastern business areas",
    landmarks: "Darlington work includes older homes and shops around North Road, Victoria Road and the town centre, residential property through Haughton-le-Skerne and Cockerton, and commercial premises around Yarm Road and Morton Park. Central Park sits between Haughton Road, Yarm Road, Hundens Lane and the railway, while Faverdale serves larger business and industrial property to the north-west. Those areas create different issues: public frontage and restricted loading in town, shared occupation in offices, or yard and vehicle control at a unit.",
    accessPlanning: "For a North Road or town-centre property, show the frontage, parking or loading option, stairs, occupants and opening hours. At Yarm Road, Morton Park or Faverdale, provide the unit reference, yard access, work height, delivery movements and fixed programme. A home in Haughton-le-Skerne, Cockerton or Blackwell usually needs room dimensions, the route through the property and details of the builder, flooring contractor or roofer waiting.",
    situationTitle: "A genuine regional flooring reference, clearly labelled",
    situation: "The current photograph is genuine North East flooring-project evidence and is used to explain a common Darlington buying situation: a bathroom, kitchen or floor finish cannot proceed until the existing material has been identified and the agreed scope completed. It is not claimed as a job at a specific Darlington address. A local quote would rely on the customer’s survey or sample result, measurements, photographs and required handover condition.",
    evidenceNote: "The page keeps useful regional experience while avoiding a fabricated local case study.",
  },
};

export const allPages = [...services, ...areas];
