export type AreaEditorial = {
  decisionHeading: string;
  decisionIntro: string;
  sections: Array<{
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  }>;
  serviceAngles: Array<{
    slug: string;
    heading: string;
    copy: string;
  }>;
  quoteHeading: string;
  quoteCopy: string;
};

export const areaEditorial: Record<string, AreaEditorial> = {
  "asbestos-removal-middlesbrough": {
    decisionHeading: "Start with the Middlesbrough building and the work that has stopped.",
    decisionIntro: "A useful asbestos removal enquiry explains the room, roof or commercial area, the evidence already available and the trade that needs the space next. The same material can create a very different job in a Linthorpe terrace, an Acklam family home or an operating unit at Riverside Park.",
    sections: [
      {
        eyebrow: "Domestic renovation",
        heading: "Ceilings, floors and renovation work around Linthorpe, Acklam and Marton",
        paragraphs: [
          "Domestic asbestos enquiries in Middlesbrough often begin after a plasterer, electrician, kitchen fitter or flooring contractor uncovers a material they will not disturb. Around Linthorpe Road, Parliament Road, Borough Road and Southfield Road, converted property, shared entrances and limited parking can affect the route into the work area. Around Acklam Road and Marton Road, the practical questions may instead be room occupancy, driveway access and whether one room or several parts of the house are being refurbished.",
          "Send photographs that show the whole ceiling, floor, wall or garage as well as a closer view. Include the number of rooms, approximate measurements and the sample or survey wording where available. If the material is not confirmed, explain exactly what the next trade plans to drill, sand, lift or remove. That makes the first answer useful without pretending a photograph can identify asbestos.",
        ],
      },
      {
        eyebrow: "Commercial and industrial",
        heading: "Survey actions at Riverside Park, Cannon Park, Middlehaven and TeesAMP",
        paragraphs: [
          "A warehouse, workshop or managed building needs more than a material description. Riverside Park and Cannon Park enquiries may involve loading yards, occupied units, vehicle movements and work at height. Middlehaven sites near Middlesbrough College can involve contractors working to a refurbishment programme, while TeesAMP and premises reached from Cargo Fleet Road can have gate controls, inductions or operating areas that must remain available.",
          "The buyer should send the survey schedule, marked-up plan if one exists, site contact, working hours, access route and the date the following package is due. For asbestos roof removal, include wide external photographs and the activity below the roof. For internal asbestos AIB removal or service-area work, identify occupied rooms, risers, plant or routes that cannot be taken out of use without agreement.",
        ],
      },
      {
        eyebrow: "Choosing the correct route",
        heading: "The licence decision follows the material, condition and work method",
        paragraphs: [
          "The customer does not have to decide whether the project is licensed before calling. Many asbestos AIB removal and asbestos pipe lagging removal jobs require an HSE-licensed asbestos contractor; other asbestos materials and methods can follow a different legal route. The survey result, condition, quantity and proposed disturbance decide that—not the Middlesbrough postcode and not a visual guess.",
          "If the report is already available, send the item that names the material, location, extent and recommendation. If there is no report, describe the building, suspected material and planned work so asbestos sampling or the appropriate survey can be discussed. The next step should move the real project forward, whether that is reopening a room, releasing a contractor or planning a larger commercial package.",
        ],
      },
    ],
    serviceAngles: [
      { slug: "asbestos-artex-removal-middlesbrough-teesside", heading: "Asbestos Artex removal before plastering or rewiring", copy: "Useful for Middlesbrough ceiling and wall projects where a sample or survey has confirmed asbestos textured coating and another trade needs a defined handover." },
      { slug: "asbestos-floor-removal-middlesbrough-teesside", heading: "Asbestos floor tile removal before a new finish", copy: "Send the room list, measurements and replacement-floor programme for kitchens, bathrooms, hallways, shops or managed buildings." },
      { slug: "asbestos-roof-removal-middlesbrough-teesside", heading: "Asbestos roof removal for garages and working premises", copy: "Roof size, height, access and what happens below the sheets matter for domestic garages and larger Riverside Park or Cannon Park buildings." },
      { slug: "commercial-asbestos-removal-middlesbrough-teesside", heading: "Commercial asbestos removal tied to the contractor programme", copy: "Survey items, operating hours, loading access and the next trade turn a Middlesbrough commercial enquiry into a workable scope." },
    ],
    quoteHeading: "Send the Middlesbrough job, not a generic asbestos question.",
    quoteCopy: "Include the postcode, building use, survey or sample result, wide photographs, measurements, access and the trade or deadline affected. You can still enquire when no paperwork exists yet.",
  },

  "asbestos-removal-stockton-on-tees": {
    decisionHeading: "A Stockton quote changes between a Norton house, a Portrack unit and a Teesdale office.",
    decisionIntro: "The page should help a buyer identify which details change the removal plan. Domestic access, loft space and room sequencing matter in one part of Stockton; tenants, loading and handover dates can control the work only a few miles away.",
    sections: [
      {
        eyebrow: "Homes and landlords",
        heading: "Renovation enquiries around Norton, Hartburn, Fairfield and Eaglescliffe",
        paragraphs: [
          "A Stockton homeowner may call after old flooring is exposed, a loft inspection raises a concern or a textured ceiling stops electrical and plastering work. Norton High Street and Durham Road include older and closely arranged property where street access or a shared route may matter. Hartburn and Fairfield enquiries can be easier to reach but still need the affected room, garage or loft route shown. Eaglescliffe projects often arrive through a house move, extension or wider renovation programme.",
          "For a loft enquiry, photograph the hatch, route, available working space, insulation, stored items and the area named in the report. For asbestos floor tile removal, send the room dimensions and explain what finish must follow. For a garage or outbuilding, show all roof elevations and say whether only the sheets or the whole structure form part of the project.",
        ],
      },
      {
        eyebrow: "Trade and business premises",
        heading: "Portrack Lane, Preston Farm and Teesdale bring programme and access questions",
        paragraphs: [
          "Portrack Lane connects retail, trade and industrial premises between Stockton and the A19. A unit there may need vehicle access, deliveries or customer areas protected while a survey action is resolved. Preston Farm sits close to the A66 and includes offices, engineering and logistics premises where a site manager may be coordinating several contractors. Teesdale Business Park adds occupied offices and shared managed spaces near the river and Thornaby station.",
          "Send the unit or suite, asbestos-register entry, marked-up drawing if available, work height, opening hours and the date the affected space must be returned. If roof replacement, demolition, services work or a strip-out is waiting, name that package. The removal proposal can then address the actual sequence instead of treating every commercial site as an empty shell.",
        ],
      },
      {
        eyebrow: "Evidence and handover",
        heading: "What a Stockton buyer should expect to define before work is instructed",
        paragraphs: [
          "A quotation should make clear what is being removed, from which area, how access and waste movement are handled and what condition is required for the following trade. The survey describes identified material; photographs and measurements show the working context. Where asbestos is only suspected, sampling or a suitable survey comes before anyone disturbs it.",
          "The customer does not need to label the job licensed or non-licensed. That decision follows the confirmed material, its condition, the quantity and the work method. What helps immediately is the exact Stockton postcode, the live buyer problem and the project date—whether the issue is one room, a landlord turnaround, a leaking garage roof or a commercial handover.",
        ],
      },
    ],
    serviceAngles: [
      { slug: "asbestos-surveys-testing-middlesbrough-teesside", heading: "Asbestos surveys and testing before disturbance", copy: "Use this route when the Stockton material is not confirmed or a refurbishment area needs a survey matched to the planned work." },
      { slug: "asbestos-floor-removal-middlesbrough-teesside", heading: "Asbestos floor tile removal for room and retail refits", copy: "Room areas, substrate, occupancy and the finish being installed next help define the Stockton flooring scope." },
      { slug: "asbestos-roof-removal-middlesbrough-teesside", heading: "Asbestos garage roof and commercial roof removal", copy: "Domestic garages need dimensions and access; Portrack or Preston Farm roofs also need height, unit use and replacement sequencing." },
      { slug: "commercial-asbestos-removal-middlesbrough-teesside", heading: "Commercial asbestos removal for occupied Stockton premises", copy: "Survey schedules, tenant hours, deliveries and the handover date are central for Teesdale offices and working units." },
    ],
    quoteHeading: "Tell us whether this is a room, loft, roof or operating Stockton site.",
    quoteCopy: "Send the TS postcode, full-area photographs, survey pages or sample result, measurements and the date another contractor or occupant needs the area back.",
  },

  "asbestos-removal-thornaby": {
    decisionHeading: "Thornaby buyers usually need either a domestic room released or a managed building kept moving.",
    decisionIntro: "Mandale and Bassleton housing creates different access and occupancy questions from offices around Teesdale. The service stays asbestos removal, but the evidence, sequencing and useful next action should match the building in front of the buyer.",
    sections: [
      {
        eyebrow: "Domestic scope",
        heading: "Walls, ceilings, floors and garages around Mandale and Bassleton",
        paragraphs: [
          "A domestic Thornaby enquiry may begin when wallpaper or later finishes are stripped, a ceiling is due for rewiring, old flooring is uncovered or a garage is being replaced. Homes around Mandale Road, Lanehouse Road, Trenchard Avenue, Bassleton and the Village ward need the whole affected area recorded—not only a close-up that hides room size, furniture, stairs or the route through the property.",
          "Explain which room or outbuilding is affected and what the next contractor intends to do. If a builder needs one wall clear, a plasterer needs the ceiling ready or a flooring team has a fixed start date, include that information. Where a sample or survey has confirmed asbestos, send the exact result. Where it has not, the first step may be testing rather than a removal guess.",
        ],
      },
      {
        eyebrow: "Managed offices",
        heading: "Teesdale and Queen Elizabeth Way work must account for occupants and shared access",
        paragraphs: [
          "Teesdale Business Park sits close to the A66 and Thornaby station, and its office and managed-building enquiries often involve reception routes, shared corridors, tenants and fixed handover dates. A survey action above a ceiling or inside a service area cannot be scoped properly from the material name alone. Floor, suite, access hours and the areas that must stay operational all matter.",
          "Property managers and contractors should send the asbestos-register item, plans where available, photographs, normal occupancy and any shutdown window. If cabling, ceiling replacement or a tenant fit-out is waiting, identify the exact interface. That helps separate a contained room task from work that affects common areas or several businesses.",
        ],
      },
      {
        eyebrow: "From evidence to instruction",
        heading: "A clear Thornaby scope reduces delays for the trade that follows",
        paragraphs: [
          "The useful decision is not simply whether asbestos is present. The buyer needs to know what part of the building is included, whether further survey information is required, what access will be needed and what condition the area will be left in. A good enquiry connects the material to the refurbishment, maintenance or property decision that created the deadline.",
          "Licensed asbestos removal is used where the confirmed material and proposed work require it; the customer is not expected to make that classification. Send the facts already held and the date that matters. The removal route can then be assessed without turning an unconfirmed photograph into a material diagnosis or a Thornaby page into generic safety advice.",
        ],
      },
    ],
    serviceAngles: [
      { slug: "asbestos-artex-removal-middlesbrough-teesside", heading: "Asbestos textured coating removal for a room programme", copy: "Useful where Thornaby plastering, lighting or rewiring will disturb a confirmed asbestos textured ceiling or wall finish." },
      { slug: "asbestos-aib-removal-middlesbrough-teesside", heading: "Asbestos AIB removal from boards, panels or service areas", copy: "Send the report item, extent, height and occupancy because many asbestos AIB removal jobs need licensed planning." },
      { slug: "asbestos-floor-removal-middlesbrough-teesside", heading: "Asbestos floor tile removal before kitchens and new flooring", copy: "List each Thornaby room and the finish due next so the removal and handover requirements are clear." },
      { slug: "commercial-asbestos-removal-middlesbrough-teesside", heading: "Commercial asbestos removal around Teesdale", copy: "For offices and managed property, include tenants, common access, building hours and the fit-out or maintenance deadline." },
    ],
    quoteHeading: "Show the Thornaby room or suite and tell us who needs it next.",
    quoteCopy: "Use the form for the TS17 postcode, survey evidence, wide photographs, approximate amount, access arrangements and the builder, tenant or contractor deadline.",
  },

  "asbestos-removal-billingham": {
    decisionHeading: "Billingham work ranges from one residential floor to controlled access on an industrial site.",
    decisionIntro: "A strong enquiry identifies whether the buyer is dealing with a room, roof, workshop or live operating area. Cowpen Lane, Belasis and Haverton Hill require different planning information from a home around Wolviston Road or the town centre.",
    sections: [
      {
        eyebrow: "Residential projects",
        heading: "Flooring, ceilings and outbuildings around Billingham town centre and Wolviston Road",
        paragraphs: [
          "Home and landlord enquiries often arrive during a kitchen, bathroom or flooring refit. Existing finishes may already have been lifted, or a survey may have identified material below them. The buyer should pause the planned disturbance and send the Billingham postcode, room measurements, full-area photographs and the sample or survey wording. The colour of a tile or adhesive is not a reliable asbestos test.",
          "Ceilings, soffits and garages need their own context. A ceiling enquiry should include the rooms and electrical or plastering work proposed. A garage or roof enquiry should show the full structure, sheet layout, height and access from the road or driveway. State whether the customer wants only the identified material removed or a wider demolition package assessed.",
        ],
      },
      {
        eyebrow: "Industrial access",
        heading: "Cowpen Lane, Belasis Avenue and Haverton Hill need site information before attendance",
        paragraphs: [
          "Cowpen Lane Industrial Estate includes manufacturing, engineering and logistics premises close to the A19. Belasis Avenue and Haverton Hill Road serve further industrial and employment areas between Billingham and the River Tees. An asbestos removal quotation for these sites may depend on gates, permits, inductions, production zones, vehicle movements and the hours in which the work area can be isolated.",
          "Send the unit or site entrance, survey schedule, work height, access equipment constraints and any shutdown window. If a roofer, demolition contractor, maintenance team or services contractor is waiting, identify its package and start date. That information is more valuable than a bare request for a price per square metre because it reveals the programme the removal must support.",
        ],
      },
      {
        eyebrow: "Risk route",
        heading: "Confirmed material controls the method—not Billingham’s industrial reputation",
        paragraphs: [
          "A location or building type does not prove which asbestos product is present. A survey can identify material and extent; site photographs establish condition, height and working context. Many asbestos AIB removal and asbestos insulation removal projects require an HSE-licensed contractor, while some asbestos cement or floor-related work can fall under a different route depending on condition and method.",
          "The buyer can therefore contact us without choosing a category. Send the report or describe the suspected material and intended disturbance. The response should clarify whether more evidence is needed and what information will allow the Billingham job to be priced and planned without holding up the wider project.",
        ],
      },
    ],
    serviceAngles: [
      { slug: "asbestos-floor-removal-middlesbrough-teesside", heading: "Asbestos floor removal before refurbishment", copy: "Room dimensions, exposed layers and the required handover finish are central to Billingham floor and adhesive enquiries." },
      { slug: "asbestos-roof-removal-middlesbrough-teesside", heading: "Asbestos roof removal for garages and industrial buildings", copy: "Provide all elevations, height, activity below the roof and the replacement programme for domestic or commercial work." },
      { slug: "asbestos-aib-removal-middlesbrough-teesside", heading: "Asbestos AIB removal where survey items need action", copy: "The report, fixings, quantity, access and occupancy help determine the licensed plan and site controls." },
      { slug: "commercial-asbestos-removal-middlesbrough-teesside", heading: "Commercial asbestos removal around Billingham industry", copy: "Cowpen Lane, Belasis and Haverton Hill buyers should include permits, operating zones, vehicle routes and shutdown limits." },
    ],
    quoteHeading: "Send the Billingham building use and the access rules with the asbestos evidence.",
    quoteCopy: "For domestic work include rooms, dimensions and follow-on trades. For industrial work add the site entrance, induction, occupied zones, height and programme dates.",
  },

  "asbestos-removal-redcar": {
    decisionHeading: "Redcar buyers need a scope that fits coastal homes, town premises or Cleveland industry.",
    decisionIntro: "A roof affected by weather, a textured ceiling before renovation and a survey action in a working unit are different buying situations. Local references matter only when they clarify access, building use or the programme.",
    sections: [
      {
        eyebrow: "Homes and landlords",
        heading: "Room and roof enquiries around Coatham, Kirkleatham, Marske and Saltburn",
        paragraphs: [
          "Redcar domestic enquiries can involve textured coatings, old flooring, soffits and garage or outbuilding roofs. Coatham Road, Corporation Road and streets around the town centre can add parking or frontage issues. Kirkleatham, Marske, New Marske and Saltburn bring a mix of occupied homes, landlord property and detached buildings where the buyer may be coordinating plastering, roofing or a wider renovation.",
          "For an internal area, send a photograph of the whole room, approximate size and the survey or sample result. For roof work, show every elevation, sheet condition, height and the route for removal. Coastal exposure may explain deterioration or a leak, but it cannot confirm that a roof sheet contains asbestos; material evidence and the agreed work method still govern the project.",
        ],
      },
      {
        eyebrow: "Commercial Cleveland",
        heading: "Longbeck Industrial Estate and Trunk Road premises need an operational brief",
        paragraphs: [
          "Longbeck Industrial Estate and premises reached from the A1085 Trunk Road can involve workshops, storage, vehicle access and roof or survey actions above occupied space. The buyer may be a facilities contact, landlord or contractor who needs the asbestos item cleared before reroofing, services work, strip-out or handover can continue.",
          "Provide the building or unit, working hours, loading or yard route, roof height, activity beneath the work and the date the next package is booked. If several survey items are involved, send the full schedule rather than isolated screenshots. The quotation can then address interfaces and priorities instead of pricing each line without understanding the programme.",
        ],
      },
      {
        eyebrow: "Useful proof",
        heading: "Photographs establish condition and context; reports establish asbestos",
        paragraphs: [
          "A wide photograph can reveal room coverage, fixings, access, adjoining finishes and the space available to work. It cannot replace sampling or a reliable survey. This distinction matters for Redcar textured coatings, old floors and corrugated roofs because appearance is often treated as certainty when it should only guide the questions asked.",
          "When paperwork exists, include the material name, location, extent and recommendation. When it does not, describe the proposed disturbance and deadline so the correct asbestos survey or test can be discussed. The commercial aim remains simple: reach a safe, lawful route that allows the buyer’s Redcar property or project to move again.",
        ],
      },
    ],
    serviceAngles: [
      { slug: "asbestos-artex-removal-middlesbrough-teesside", heading: "Asbestos textured coating removal before interior work", copy: "Redcar plastering, rewiring and room renovation enquiries need confirmed material, total area and the following trade date." },
      { slug: "asbestos-roof-removal-middlesbrough-teesside", heading: "Asbestos garage roof and commercial roof removal", copy: "Weathering may create urgency, while dimensions, sheet condition, access and replacement plans define the work." },
      { slug: "asbestos-surveys-testing-middlesbrough-teesside", heading: "Asbestos surveys and testing when appearance is not enough", copy: "Use this route for suspected ceilings, floors or roof products that will be disturbed by planned Redcar work." },
      { slug: "commercial-asbestos-removal-middlesbrough-teesside", heading: "Commercial asbestos removal for Cleveland premises", copy: "Longbeck and Trunk Road sites should include yard movement, occupied zones, height and the contractor programme." },
    ],
    quoteHeading: "Tell us what has stopped at the Redcar property or site.",
    quoteCopy: "Send the TS10 or surrounding postcode, survey evidence, complete-area photographs, dimensions, access and the roofing, renovation or commercial date affected.",
  },

  "asbestos-removal-yarm-ingleby-barwick": {
    decisionHeading: "Yarm and Ingleby Barwick require different property questions, even on one coverage page.",
    decisionIntro: "Older, closely arranged buildings around Yarm High Street can create frontage and shared-access issues. Later housing around Ingleby Barwick may shift the questions toward extensions, garages and alterations rather than assuming the original house contains asbestos.",
    sections: [
      {
        eyebrow: "Yarm property",
        heading: "High Street, bridge and older-property access need to be shown clearly",
        paragraphs: [
          "Yarm High Street and the streets around Yarm Bridge include shops, flats and homes where parking, rear access, stairs or keeping part of the building open can affect the job. A buyer dealing with an old ceiling, floor, service area or roofline should send photographs of the frontage and route as well as the suspected material. Opening hours and shared occupation matter when the work is above or beside a trading space.",
          "The age of a building can make an asbestos survey relevant, but age alone does not identify a product. If refurbishment is planned, describe every area that will be disturbed rather than testing one convenient surface and assuming the rest. Existing survey pages, room dimensions and the next contractor’s programme help define whether removal, further investigation or a different management decision is required.",
        ],
      },
      {
        eyebrow: "Eaglescliffe and Ingleby Barwick",
        heading: "Extensions, garages and later alterations need their own evidence",
        paragraphs: [
          "Across the Tees, Eaglescliffe includes housing and business premises around Yarm Road and Urlay Nook Road. Ingleby Barwick is largely later development reached through routes such as Myton Road and Low Lane. That does not justify a blanket claim that asbestos is or is not present. Extensions, garage roofs, imported components and subsequent renovation can create materials from different periods.",
          "Send the approximate build date if known, details of later extensions or conversions, the precise room or outbuilding and the work planned. A garage replacement, bathroom refit or electrician’s cable route needs different photographs and measurements. The purpose is to investigate the material that will actually be disturbed, not to make a judgement from the estate name.",
        ],
      },
      {
        eyebrow: "Buyer decision",
        heading: "Use the survey to answer the project question—not to create another delay",
        paragraphs: [
          "A homeowner may need one confirmed item removed before renovation. A landlord may need several survey actions resolved between tenancies. A shop or office may need work planned outside trading hours. Each buyer should explain the outcome required after asbestos work, because the handover condition and deadline affect how the scope is written.",
          "You can enquire without paperwork, but do not ask another trade to disturb a suspected material while waiting for advice. Send the Yarm or Ingleby Barwick postcode, full-context images and proposed works. The correct survey, sample or removal route can then be discussed around the real building rather than a generic list of asbestos services.",
        ],
      },
    ],
    serviceAngles: [
      { slug: "asbestos-surveys-testing-middlesbrough-teesside", heading: "Asbestos testing for one suspected material", copy: "Useful when a Yarm or Ingleby Barwick ceiling, floor or outbuilding component needs confirmation before disturbance." },
      { slug: "asbestos-artex-removal-middlesbrough-teesside", heading: "Asbestos Artex removal before lighting or plastering", copy: "Send the sample result, room count, ceiling areas and required finish for confirmed asbestos textured coatings." },
      { slug: "asbestos-roof-removal-middlesbrough-teesside", heading: "Asbestos garage roof removal during replacement", copy: "Photograph the complete garage, access and surrounding space, then state whether only sheets or the structure are included." },
      { slug: "asbestos-floor-removal-middlesbrough-teesside", heading: "Asbestos floor tile removal before kitchens and bathrooms", copy: "Room-by-room measurements and the new flooring programme help establish the required removal and handover." },
    ],
    quoteHeading: "Send the specific Yarm or Ingleby Barwick alteration that is waiting.",
    quoteCopy: "Include the postcode, property age or later extension where known, affected room or outbuilding, photographs, evidence and the next trade’s date.",
  },

  "asbestos-removal-guisborough-eston": {
    decisionHeading: "Guisborough town property and South Teesside work sites create different removal briefs.",
    decisionIntro: "Westgate frontage, an Eston home and a unit near Skippers Lane cannot share one generic access plan. The page connects genuine local building context to what the buyer must supply for a removal, survey or testing decision.",
    sections: [
      {
        eyebrow: "Guisborough",
        heading: "Westgate, Market Place and Chaloner Street buildings can need rear-access planning",
        paragraphs: [
          "Older town-centre shops, flats and homes around Westgate, Market Place and Chaloner Street may have public frontage, rooms above trading space, shared stairs or restricted rear access. When a ceiling, floor, panel or service area is identified in one of these buildings, the quote needs to account for occupants and the route to the work—not simply the material quantity.",
          "Send frontage and access photographs, the floor and room, opening or occupied hours and the survey item. If a fit-out, repair or change of tenant is driving the enquiry, include the handover date. For a domestic address outside the centre, show drive or side access and any furniture, family occupancy or connected rooms that affect the work zone.",
        ],
      },
      {
        eyebrow: "Eston and industrial routes",
        heading: "Normanby Road, Fabian Road, the A174 and Skippers Lane link homes to working premises",
        paragraphs: [
          "Eston, Normanby, South Bank and Grangetown include terraces, landlord property, garages and commercial buildings reached through different parts of the South Teesside road network. Skippers Lane Industrial Estate and nearby employment areas add workshops, storage units and sheeted roofs where yards, vehicle movement, work height and operating hours can control the programme.",
          "For a unit or roof, provide wide images, approximate span, activity below, gate or loading arrangements and the replacement or demolition package. For a house, send room dimensions and the renovation sequence. A street or estate name is useful only because it helps explain which of those constraints applies.",
        ],
      },
      {
        eyebrow: "Material certainty",
        heading: "A corrugated roof or board still needs reliable identification",
        paragraphs: [
          "The shape and age of a product can make asbestos a reasonable concern, but a photograph should not be presented as laboratory confirmation. Existing survey information should be checked for the material, location, extent and condition. Where evidence is absent, describe the proposed disturbance so the correct survey or sampling route can be selected.",
          "The customer also does not need to decide the licence category. Higher-risk materials such as many asbestos insulating board and asbestos insulation products can require licensed work; other materials can follow a different route. The responsible next step is based on evidence and method, while the Guisborough or Eston context supplies the access and programme information.",
        ],
      },
    ],
    serviceAngles: [
      { slug: "asbestos-roof-removal-middlesbrough-teesside", heading: "Asbestos roof removal for garages, workshops and stores", copy: "Guisborough and Eston roof enquiries need scale, height, access, activity below and the replacement or demolition sequence." },
      { slug: "asbestos-aib-removal-middlesbrough-teesside", heading: "Asbestos AIB removal from boards, ceilings and service areas", copy: "Send the report wording, fixings, quantity and occupancy so licensed requirements can be assessed correctly." },
      { slug: "asbestos-surveys-testing-middlesbrough-teesside", heading: "Asbestos surveys and testing before refurbishment", copy: "Use this route when the material is uncertain or several areas will be disturbed by the planned works." },
      { slug: "commercial-asbestos-removal-middlesbrough-teesside", heading: "Commercial asbestos removal around Skippers Lane", copy: "Unit access, yard movements, occupied bays, roof height and contractor dates belong in the first commercial brief." },
    ],
    quoteHeading: "Show whether the Guisborough or Eston job is a room, frontage, yard or roof.",
    quoteCopy: "Send the postcode, survey evidence, whole-area photographs, size, building use, access and the refurbishment, roofing or handover date.",
  },

  "asbestos-removal-hartlepool": {
    decisionHeading: "Hartlepool buyers may be releasing a room, replacing a roof or protecting an operating site.",
    decisionIntro: "The Headland, Seaton Carew, Oakesway and Queens Meadow bring different buildings and access routes. A useful page helps the buyer turn those differences into the information needed for a quotation.",
    sections: [
      {
        eyebrow: "Residential handover",
        heading: "Floor, ceiling and renovation work around York Road, the Headland and Seaton Carew",
        paragraphs: [
          "Domestic asbestos enquiries often arrive after a finish has been lifted or before a new contractor starts. A floor-covering project may need the room cleared to an agreed handover condition; a ceiling may block rewiring or plastering; an outbuilding roof may need removal before replacement. Homes around York Road, the Headland and Seaton Carew can add occupancy, parking, stairs or side-access questions.",
          "Send full-room photographs, dimensions and the sample or survey result where available. Explain whether furniture remains, who occupies the property and what the flooring contractor, plasterer or roofer expects next. A picture of the finished room can demonstrate handover context, but it should not be used to reconstruct or guess the original asbestos material.",
        ],
      },
      {
        eyebrow: "Business and industrial",
        heading: "Oakesway, Queens Meadow and Brenda Road projects need site sequencing",
        paragraphs: [
          "Oakesway and Queens Meadow include business and industrial premises where yards, gates and operating areas may remain active. Brenda Road and the wider industrial corridor add workshops and sites with deliveries, roof work or service areas above functioning space. The buyer is often coordinating a survey action with maintenance, strip-out, demolition or a replacement-roof contractor.",
          "Provide the unit or entrance, survey schedule, working height, occupied zones, vehicle routes and any shutdown window. State which package follows removal and when it is booked. If several materials or building areas are listed, send the whole relevant schedule so priorities and interfaces can be reviewed together rather than as disconnected prices.",
        ],
      },
      {
        eyebrow: "Local evidence",
        heading: "The Hartlepool floor image shows the buyer’s required end point",
        paragraphs: [
          "The primary photograph comes from a genuine Hartlepool floor-covering removal and shows the room after the agreed work. Its value is operational: it helps a flooring or refurbishment buyer think about the condition needed for the following trade. The project record—not the final photograph—governs what material was identified and what the removal scope included.",
          "For a new enquiry, send the evidence held for that property rather than relying on resemblance. If no paperwork exists, describe what was uncovered and what will happen next. The correct survey, sample or removal route can then be matched to the Hartlepool building and deadline without turning relevant experience into an invented copy of the previous job.",
        ],
      },
    ],
    serviceAngles: [
      { slug: "asbestos-floor-removal-middlesbrough-teesside", heading: "Asbestos floor removal with a defined handover", copy: "Hartlepool flooring buyers should state the confirmed material, room area and the surface condition the next trade requires." },
      { slug: "asbestos-roof-removal-middlesbrough-teesside", heading: "Asbestos roof removal for coastal homes and working sites", copy: "Include dimensions, height, sheet condition, access and the replacement programme; weathering does not prove material type." },
      { slug: "asbestos-surveys-testing-middlesbrough-teesside", heading: "Asbestos surveys and testing where material is uncertain", copy: "The survey route should cover the areas a Hartlepool renovation, demolition or maintenance package will actually disturb." },
      { slug: "commercial-asbestos-removal-middlesbrough-teesside", heading: "Commercial asbestos removal for Hartlepool programmes", copy: "Oakesway, Queens Meadow and Brenda Road briefs need site rules, operating zones, vehicle access and fixed contractor dates." },
    ],
    quoteHeading: "Tell us the Hartlepool handover condition and who is waiting for it.",
    quoteCopy: "Send the TS24 or surrounding postcode, material evidence, complete photographs, quantity, access and the flooring, roofing, maintenance or commercial programme.",
  },

  "asbestos-removal-darlington-county-durham": {
    decisionHeading: "Darlington work should be scoped around the property, access and next construction stage.",
    decisionIntro: "A North Road shop, a Haughton-le-Skerne home and a Faverdale unit create different buying decisions. The exact building use and programme are more useful than a generic request for asbestos removal in County Durham.",
    sections: [
      {
        eyebrow: "Town and residential",
        heading: "North Road, Victoria Road, Haughton-le-Skerne and Cockerton buyer situations",
        paragraphs: [
          "Older homes and mixed-use property around North Road, Victoria Road and the town centre can involve public frontage, upstairs rooms, shared routes and limited loading. Haughton-le-Skerne, Cockerton, Harrowgate Hill and Blackwell enquiries are more likely to centre on occupied rooms, garages, floors or rooflines within a renovation or property-management programme.",
          "Send photographs of the route and complete affected area, not only the suspected surface. Include rooms, dimensions, property use and the contractor waiting afterwards. A bathroom or kitchen refit needs the required floor handover; a ceiling enquiry needs the lighting or plastering plan; a garage or roof enquiry needs height, access and the replacement decision.",
        ],
      },
      {
        eyebrow: "Commercial Darlington",
        heading: "Yarm Road, Morton Park, Central Park and Faverdale need programme detail",
        paragraphs: [
          "Yarm Road and Morton Park contain commercial premises where vehicle access, loading and operating hours can influence asbestos work. Central Park sits between Haughton Road, Yarm Road, Hundens Lane and the railway, adding offices and development activity. Faverdale serves larger business and industrial property to the north-west where yard controls, height and contractor coordination may be central.",
          "Facilities teams and contractors should send the asbestos register or survey entries, plans, site contact, work height, occupied areas and the handover date. If a roof, services or strip-out package is waiting, identify it by name. This allows the removal plan to address the interface instead of producing a generic Darlington quotation detached from the construction sequence.",
        ],
      },
      {
        eyebrow: "Survey choice",
        heading: "One suspected material and a full refurbishment are not the same investigation",
        paragraphs: [
          "A homeowner concerned about one accessible material may need targeted sampling. A contractor planning intrusive work across several rooms can require a refurbishment survey matched to the project boundary. A dutyholder managing a commercial building needs current information for normal occupation and maintenance. The reason for the survey therefore matters as much as the address.",
          "Where asbestos is confirmed, send the report item for removal review. Where it is not, state every part of the Darlington building that the planned work will disturb. The buyer does not need to classify the removal as licensed or non-licensed; that follows the confirmed material, condition, extent and work method.",
        ],
      },
    ],
    serviceAngles: [
      { slug: "asbestos-surveys-testing-middlesbrough-teesside", heading: "Asbestos surveys matched to the Darlington project", copy: "Choose the investigation from the building duty and planned disturbance, not from a generic survey label." },
      { slug: "asbestos-floor-removal-middlesbrough-teesside", heading: "Asbestos floor removal before kitchens, bathrooms and refits", copy: "Send each room, confirmed material, area and the finish the next Darlington contractor needs to install." },
      { slug: "asbestos-roof-removal-middlesbrough-teesside", heading: "Asbestos roof removal for garages and commercial units", copy: "Domestic access and structure differ from Yarm Road, Morton Park or Faverdale height and operating constraints." },
      { slug: "commercial-asbestos-removal-middlesbrough-teesside", heading: "Commercial asbestos removal with a fixed handover", copy: "Register items, drawings, occupied areas, yard movement and the following package belong in the first Darlington brief." },
    ],
    quoteHeading: "Send the Darlington building and the construction decision behind the enquiry.",
    quoteCopy: "Include the DL postcode, property or unit use, report pages, photographs, measurements, access and the date the next trade, tenant or handover depends on.",
  },
};
