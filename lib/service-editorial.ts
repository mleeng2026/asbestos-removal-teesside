export type ServiceEditorial = {
  decisionHeading: string;
  decisionIntro: string;
  sections: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  }[];
  quoteHeading: string;
  quoteCopy: string;
};

export const supplementalServiceFaqs: Record<string, { question: string; answer: string }[]> = {
  "asbestos-removal-middlesbrough-teesside": [
    { question: "What information makes an asbestos removal quote more accurate?", answer: "Send the exact survey item or suspected material, location, rough dimensions, photographs, access, occupancy and the work or deadline waiting behind removal." },
    { question: "Can several asbestos items be included in one quotation?", answer: "Yes. Mark each survey item and location clearly, and say whether all items belong to one phase or different dates and areas." },
  ],
  "asbestos-surveys-testing-middlesbrough-teesside": [
    { question: "How should I prepare for an asbestos survey?", answer: "Provide safe access to the agreed areas, plans where available and a clear description of proposed work. Tell the surveyor about occupied, locked or service areas before attendance." },
    { question: "Will a sample result cover similar materials elsewhere?", answer: "A result confirms the sample tested. Similar-looking materials elsewhere should not automatically be treated as the same product without suitable evidence." },
  ],
  "asbestos-artex-removal-middlesbrough-teesside": [
    { question: "What photographs help with an Artex removal quotation?", answer: "Send a wide photograph of every room, the whole ceiling or wall, light fittings and loft hatches, plus closer images that show condition without disturbing the coating." },
    { question: "Is plastering included after textured-coating removal?", answer: "Only when it is expressly included in the written scope. Confirm the surface condition your plasterer needs and which contractor is responsible for making good." },
  ],
  "asbestos-roof-removal-middlesbrough-teesside": [
    { question: "Should I climb onto the roof to take photographs?", answer: "No. Fragile or damaged roofs should not be accessed for an enquiry. Send safe ground-level photographs from several sides with approximate dimensions and height." },
    { question: "Is a replacement roof included after asbestos sheets are removed?", answer: "Not automatically. Explain whether you need asbestos-sheet removal only, temporary weather protection, structural dismantling or a separately coordinated replacement roof." },
  ],
  "asbestos-aib-removal-middlesbrough-teesside": [
    { question: "What photographs are useful for an AIB quotation?", answer: "Show the entire board or affected area, height, nearby services and access. Do not break, unscrew or expose an edge to try to prove what the board is." },
    { question: "Can AIB removal be coordinated with electricians or builders?", answer: "Yes. Send their scope and start date, and define the area and handover they require after asbestos work is complete." },
  ],
  "asbestos-floor-removal-middlesbrough-teesside": [
    { question: "Will the subfloor be ready for a new finish afterwards?", answer: "The written quotation should define the handover condition. Asbestos removal does not automatically include repairs, levelling, damp work or every preparation required by the new-floor installer." },
    { question: "Should I lift more flooring to see how far the material extends?", answer: "Do not disturb suspected material simply to measure it. Provide the visible extent and planned floor area, and discuss the safe way to confirm the complete scope." },
  ],
  "commercial-asbestos-removal-middlesbrough-teesside": [
    { question: "Can you provide a quotation for a tender return?", answer: "Yes, where sufficient survey, quantity, access and programme information is available. State the return deadline and highlight any assumptions or site visit requirements." },
    { question: "What contractor interfaces should be identified?", answer: "Clarify responsibility for access equipment, isolations, demolition, reinstatement, replacement roofing, welfare and the handover required before the next trade starts." },
  ],
};

export const serviceEditorial: Record<string, ServiceEditorial> = {
  "asbestos-removal-middlesbrough-teesside": {
    decisionHeading: "Turn the survey result or suspected material into a workable removal plan.",
    decisionIntro: "The useful starting point is not simply that asbestos may be present. It is the exact room, roof, service area or building element involved, the amount affected, who uses the building and what work needs permission to continue.",
    sections: [
      {
        eyebrow: "Middlesbrough and central Teesside",
        heading: "Asbestos removal shaped around the property and the work waiting behind it",
        paragraphs: [
          "A house near Linthorpe Road where a ceiling is holding up rewiring needs a different route from a commercial unit off Cargo Fleet Lane where a strip-out team is waiting. Around central Middlesbrough, Acklam, Linthorpe and Marton, enquiries commonly start during kitchen work, heating alterations, roofline replacement or renovation of an older home. The removal scope needs to fit the affected room, safe access and the point at which the next trade can return.",
          "Industrial and commercial enquiries around Riverside Park, TeesAMP, Cannon Park and the A66 corridor tend to involve more people and more programme pressure. Survey references, drawings, working hours, tenant arrangements, delivery access and the parts of the building that must remain open all help turn a general request into a quotation that a contractor or facilities manager can actually use.",
        ],
      },
      {
        eyebrow: "From report to quotation",
        heading: "Confirmed asbestos, suspected materials and the evidence needed for each route",
        paragraphs: [
          "If a survey already identifies the material, send the item description, location, approximate extent, condition and recommendation rather than only the report cover. Photographs then help show fixing, height, obstructions and access. For several items, mark which ones are included now and which are outside the present project so the quotation matches the live package.",
          "Where nothing has been tested, do not rely on age, colour or pattern. Explain what has been uncovered and what will disturb it. A targeted sample may suit one accessible material, while wider refurbishment may call for a survey covering the full work area. That distinction prevents a removal price being built around an assumption that later proves wrong.",
        ],
      },
      {
        eyebrow: "Wider Teesside coverage",
        heading: "One enquiry can cover Stockton, Billingham, Redcar and connected project sites",
        paragraphs: [
          "The service covers domestic, commercial and industrial enquiries across Stockton-on-Tees, Thornaby, Billingham, Redcar, Guisborough, Yarm, Hartlepool and towards Darlington. A landlord with several addresses or a contractor with linked sites can send one schedule, provided each location, material and quantity is clear. This is more useful than separate messages that hide the total programme.",
          "Before sending the job, include the postcode, best access point, photographs, survey pages, rough dimensions and required completion date. Also say whether power, water or other services are live and whether belongings, stock or machinery remain nearby. Those details help identify what can be priced from documents and where a site visit is the sensible next step.",
        ],
      },
      {
        eyebrow: "Scope boundaries",
        heading: "Know what removal includes before comparing quotations",
        paragraphs: [
          "A useful quotation identifies the exact material and area, preparation, removal, transport and lawful disposal included in the price. It should also make exclusions visible. Making good, replacement ceilings, new roofing, electrical isolation, scaffolding or demolition may sit with another contractor unless the document specifically includes them. Comparing only the final figure can hide those differences.",
          "Ask what information remains provisional and whether the price depends on a site visit, final measurements or further testing. For an urgent project, confirm the earliest realistic attendance and the duration assumed rather than treating the quotation date as a completion promise. This gives the homeowner, landlord or project manager a clean decision based on the same scope.",
        ],
      },
    ],
    quoteHeading: "Send the actual asbestos item and the job it is holding up.",
    quoteCopy: "Include the postcode, report wording or suspected material, photographs, quantity, access, occupancy and deadline. We can then discuss testing, a site visit or a removal quotation.",
  },

  "asbestos-surveys-testing-middlesbrough-teesside": {
    decisionHeading: "Choose the survey or sample around what you plan to disturb.",
    decisionIntro: "A homeowner checking one ceiling, a landlord managing communal areas and a contractor opening walls for refurbishment do not need the same inspection. The reason for the survey decides its scope.",
    sections: [
      {
        eyebrow: "The right inspection",
        heading: "Management, refurbishment and targeted testing answer different questions",
        paragraphs: [
          "A management survey supports the continuing occupation and maintenance of a non-domestic property. It is intended to identify accessible asbestos-containing materials that must be managed during normal use. A refurbishment or demolition survey is more intrusive because it must cover the parts of the building that the planned work will open, cut, remove or demolish. Sending drawings and the contractor's scope helps define those boundaries before attendance.",
          "Targeted sampling may be suitable when the concern is genuinely limited to one accessible item, such as a textured ceiling or old floor finish uncovered in a room. It is not a substitute for a refurbishment survey when several building elements will be disturbed. Explain the full job, not only the first suspicious material, so the inspection does not leave a hidden gap in the work area.",
        ],
      },
      {
        eyebrow: "Homes and purchases",
        heading: "Testing before plastering, flooring, rewiring or a property decision",
        paragraphs: [
          "Across Linthorpe, Acklam, Norton, Thornaby and Redcar, domestic enquiries often arrive after a tradesperson pauses work or a buyer notices wording in a building survey. Useful information includes the room, surface, approximate age of the alteration, photographs and exactly what will happen next. A sample result can confirm the tested material; it should not be stretched into a conclusion about every similar-looking surface elsewhere in the property.",
          "If timing is linked to exchange, completion, a tenancy or booked trades, give the real deadline at the start. The result may lead to removal, management in place or a change to the proposed work. Having the next decision clear makes the survey more useful than simply collecting a laboratory result with no agreed route afterwards.",
        ],
      },
      {
        eyebrow: "Commercial Teesside",
        heading: "Survey information that contractors and dutyholders can work from",
        paragraphs: [
          "For premises around Portrack Lane, Preston Farm, Riverside Park, TeesAMP, Cowpen Lane Industrial Estate and the Redcar industrial corridor, define the unit, work zone and occupied areas. Plant rooms, ceiling voids, roof spaces, risers and service routes may need planned access. Site contacts, inductions, permits and operating hours should be raised before the visit rather than discovered at the door.",
          "A practical report should allow the client team to locate the material and understand the recommendation. When requesting a removal price afterwards, send the relevant item pages and any marked plans. That creates a clean route from identification to scope, instead of asking a removal contractor to interpret a whole building report without knowing which phase is live.",
        ],
      },
      {
        eyebrow: "Results and decisions",
        heading: "Use the report to decide what happens next, not simply to collect a certificate",
        paragraphs: [
          "Before commissioning the visit, decide who will receive the report and who must act on it. A homeowner may need an answer for a builder; a dutyholder may need records updated and material managed; a principal contractor may need an intrusive work area cleared for tender. Telling the surveyor the decision makes the output more useful.",
          "A laboratory result should state what was detected in the submitted sample, while a survey records inspected areas, findings and limitations. Read any exclusions, inaccessible spaces and recommendations before work begins. If the refurbishment design changes, check whether the original inspection still covers the newly affected wall, ceiling, floor or service route.",
        ],
      },
    ],
    quoteHeading: "Tell us why you need the asbestos information.",
    quoteCopy: "Send the postcode, property type, rooms or work zone, proposed refurbishment or maintenance, photographs and deadline. We can discuss the appropriate survey or targeted sample.",
  },

  "asbestos-artex-removal-middlesbrough-teesside": {
    decisionHeading: "Plan textured-coating work around the ceiling, the room and the finish you need next.",
    decisionIntro: "The buyer is rarely asking about a decorative pattern in isolation. Usually a plasterer, electrician, kitchen fitter or refurbishment team needs a confirmed surface made ready for the following stage.",
    sections: [
      {
        eyebrow: "Ceilings and walls",
        heading: "Asbestos Artex removal where renovation cannot safely move forward",
        paragraphs: [
          "A swirled or stippled finish does not confirm asbestos. If a reliable survey or sample identifies asbestos in the textured coating, the quotation then needs the number of rooms, ceiling heights, approximate areas and condition. Cracks, previous water damage, fitted cupboards, coving, light fittings and occupied rooms can all change how the work is prepared and sequenced.",
          "Some enquiries concern one bedroom near Yarm Road or Acklam Road; others involve stairwells, landings and several rooms in a rented property around Stockton or Thornaby. List every affected surface at the beginning. Adding an extra hallway after the scope has been planned can alter access, enclosure and programme, so a simple room schedule is valuable even for domestic work.",
        ],
      },
      {
        eyebrow: "The finish afterwards",
        heading: "Removal, overboarding and plastering must be discussed as one project decision",
        paragraphs: [
          "Tell us whether the next contractor wants a bare substrate, an area ready for overboarding or simply safe access for electrical work. The asbestos task and the desired decorative finish are related but not automatically the same package. Clarifying that boundary avoids a homeowner expecting a fully plastered ceiling when the quotation is for asbestos removal and clearance only.",
          "Recessed lights, pendants, alarms, loft hatches and cables should be shown in photographs because they pass through or sit against the coating. If rewiring is the trigger, identify every planned penetration rather than only the room where work first stopped. This helps the asbestos scope support the actual electrical plan.",
        ],
      },
      {
        eyebrow: "Local project settings",
        heading: "Occupied homes, communal routes and commercial interiors across Teesside",
        paragraphs: [
          "Homes around Linthorpe, Eaglescliffe, Ingleby Barwick, Hartlepool and Marske may need belongings moved, residents planned around the work and a sensible route from the room to the exit. Flats and communal buildings can add shared corridors, neighbours and parking restrictions. Send those details early so access is considered with the removal method.",
          "For shops, offices and managed interiors near Middlesbrough town centre, Stockton High Street or Yarm High Street, include trading hours, public access and the date another contractor takes possession. A photograph of the whole room is often as useful as a close-up because it shows height, furniture, fixtures and the working space around the confirmed coating.",
        ],
      },
      {
        eyebrow: "Room schedule",
        heading: "Measure and photograph the complete textured-coating package",
        paragraphs: [
          "Create a short list such as front bedroom ceiling, landing ceiling and lounge chimney-breast wall, then add approximate dimensions beside each item. Identify rooms that were tested and any visually similar areas that were not. That prevents one confirmed sample being silently applied across the whole house and gives the quotation a traceable basis.",
          "Mention delicate finishes, fitted wardrobes, kitchen units or belongings that affect preparation. If the property is empty, state when keys and parking are available. If it is occupied, identify bedrooms, bathrooms or entrances that residents rely on. These details turn a generic request for Artex removal into a room-by-room plan that supports the renovation schedule.",
          "Where ceilings continue through an open-plan kitchen and living space, measure the complete connected surface and explain where walls or beams divide it. For stairwells, include the maximum height and landing arrangement. Those details matter more than choosing a label such as small, medium or large, which means different things to different buyers and cannot support a dependable scope.",
        ],
      },
    ],
    quoteHeading: "Send every affected ceiling or wall, not just a close-up of the pattern.",
    quoteCopy: "Include the test or survey result, room list, dimensions, wide photographs, fittings, occupancy and the date plastering, electrical or renovation work must restart.",
  },

  "asbestos-roof-removal-middlesbrough-teesside": {
    decisionHeading: "Quote the roof as a structure, an access problem and a live replacement programme.",
    decisionIntro: "Sheet quantity matters, but so do height, fragility, fixings, neighbouring property, what sits beneath the roof and who is responsible for making the building weather-tight afterwards.",
    sections: [
      {
        eyebrow: "Garages and outbuildings",
        heading: "Asbestos garage roof removal before replacement or demolition",
        paragraphs: [
          "For a domestic garage, send photographs from all accessible sides rather than climbing onto the roof. Include the approximate length and width, whether the garage is attached, the condition of the sheets and what is stored inside. Access through a narrow drive in Linthorpe or a rear lane in central Stockton is different from an open plot around Ingleby Barwick or Hartlepool.",
          "Confirm whether the requirement is sheet removal only, the timber or metal frame as well, or complete garage demolition. The replacement roof and temporary weather protection are separate decisions unless expressly included. If another roofer is booked, provide the handover date and what they expect to receive.",
        ],
      },
      {
        eyebrow: "Commercial roof programmes",
        heading: "Corrugated roof removal on workshops, stores and industrial units",
        paragraphs: [
          "Larger roofs around Riverside Park, Preston Farm, Cowpen Lane Industrial Estate, Portrack Lane and Longbeck Industrial Estate require a broader picture. Rooflights, gutters, adjoining sheets, internal linings, fragile-roof controls and the activity below can affect the plan. Drawings or measured dimensions are helpful, but wide external and internal photographs often reveal constraints that a square-metre figure misses.",
          "State whether the building stays operational and whether stock, vehicles or machinery can be cleared. Replacement roofing, scaffold or lifting equipment may be managed by different parties, so the programme should identify who provides each element. The asbestos quotation must connect with those interfaces rather than leave an unplanned gap between removal and reroofing.",
        ],
      },
      {
        eyebrow: "Damage and identification",
        heading: "Leaking or damaged sheets still need an evidence-led decision",
        paragraphs: [
          "A corrugated profile is not laboratory proof of asbestos cement. Existing survey information, product records or sampling may be needed where the material is uncertain. Damage, moss, repairs and coating can help describe condition, but none of those features should be used alone to identify asbestos from an image.",
          "If a leak has made the enquiry urgent, explain whether water is affecting electrics, stock or occupied space and whether emergency covering is already in place. Do not disturb broken pieces to obtain a better photograph. Provide safe ground-level images, the postcode, roof size, height and a contact who can explain access when the site is reviewed.",
        ],
      },
      {
        eyebrow: "Site and neighbour constraints",
        heading: "Allow for boundaries, shared access and the space needed to lower sheets safely",
        paragraphs: [
          "A roof beside a public footpath, neighbouring garden or active loading yard needs different preparation from one in an open compound. Show boundary distances, gates, overhead cables, parked vehicles and the route to the collection point. On terraced or linked buildings, clarify whether the sheets or gutters connect across ownership lines.",
          "For estate-managed property or commercial units, check whether the landlord controls roof access and whether permits are required. Domestic buyers should say if the only route is through the house or a narrow side passage. These practical facts can affect labour and equipment more than a small difference in roof area, so they belong in the first quotation request.",
          "Also photograph the underside safely from ground or floor level where it is visible. Internal views can show purlins, rooflights, insulation, stored items and whether sheeting forms a ceiling above an occupied workspace. Never climb on fragile sheets or enter a restricted roof void simply to collect information for a price.",
          "Finally, say whether rainwater goods and verge details are being retained or replaced. Even when another roofer handles those elements, their sequence must connect with sheet removal and the agreed weatherproofing plan.",
        ],
      },
    ],
    quoteHeading: "Send the full roof, access and replacement plan.",
    quoteCopy: "Include ground-level photographs, dimensions, height, sheet condition, internal use, access, survey information and whether you need sheets only, the structure or complete demolition removed.",
  },

  "asbestos-aib-removal-middlesbrough-teesside": {
    decisionHeading: "AIB removal starts with the exact survey item and a licensed-work assessment.",
    decisionIntro: "Board location, condition, fixings and disturbance determine the plan. A vague reference to ‘asbestos board’ is not enough for a safe commercial or domestic quotation.",
    sections: [
      {
        eyebrow: "Survey-led scope",
        heading: "Asbestos insulating board in ceilings, panels, risers and service areas",
        paragraphs: [
          "Send the report page that names the material, not only a photograph of a flat board. Include the item number, room, approximate area, condition and recommendation. Ceiling panels, boxing around services, cupboard linings and fire-break elements can look similar to non-asbestos products, so the confirmed identification is central to the removal decision.",
          "Fixing method and accessibility matter. A low removable panel in an empty room presents a different project from boards above a suspended ceiling crossed by services. Photographs should show the whole area, access height and nearby fittings without anyone disturbing the material to expose an edge.",
        ],
      },
      {
        eyebrow: "Licensed planning",
        heading: "Occupied buildings and follow-on trades need a controlled handover",
        paragraphs: [
          "Many AIB removal projects require an HSE-licensed contractor, with the precise legal route determined by the material and task. For buildings that remain in use, identify occupants, adjoining rooms, shared corridors, ventilation and working-hour restrictions. A school, office or managed block needs programme decisions that a vacant property may not.",
          "Explain which trade follows removal: electricians opening a riser, builders altering partitions, a roofer replacing soffits or a strip-out team clearing an interior. The handover requirement and any reinstatement boundary should be written into the scope so the next contractor knows when and where work can resume.",
        ],
      },
      {
        eyebrow: "Teesside project context",
        heading: "Domestic boards, commercial interiors and industrial service zones",
        paragraphs: [
          "Residential enquiries may involve soffits in Acklam, cupboard panels in Billingham or boards exposed during renovation around Redcar. Commercial work around Middlesbrough town centre, Teesdale and Preston Farm can involve ceiling voids, risers and partition systems. The local label alone does not define the job; each location needs its own itemised evidence.",
          "Industrial sites near Riverside Park, Haverton Hill or the A66 corridor may add inductions, permits, restricted areas and live plant. Send the site rules and drawings with the survey extract. That allows the first review to consider the real operating environment rather than treating an industrial item like an isolated domestic panel.",
        ],
      },
      {
        eyebrow: "Quantity and condition",
        heading: "Do not reduce an AIB enquiry to one square-metre figure",
        paragraphs: [
          "Area is important, but a schedule should also distinguish complete boards, narrow strips, damaged edges and inaccessible pieces. Note whether panels sit behind radiators, cables, pipework or fixed equipment. Repeated small items across several rooms can require a different sequence from one open ceiling area of the same total size.",
          "If damage has already occurred, keep people away and explain what happened without sweeping, drilling or attempting a repair. Provide the survey evidence and safe photographs of the surrounding room. The contractor can then assess urgency and controls using the confirmed material and situation rather than an unsupported description of board colour or thickness.",
          "For soffits, provide elevations from each side of the property and distinguish ground-floor canopies from roofline boards. For risers or ducts, identify every floor served and whether doors, hatches or panels are locked. A site-wide label such as AIB present can otherwise conceal several separate work areas with different heights, access routes and occupants.",
          "If the survey gives only an estimated quantity, note which faces or panels were inaccessible when it was written. A measured inspection can then confirm whether the board continues behind later finishes or stops at a visible junction. This reduces the risk of pricing one exposed section while the actual construction extends beyond it.",
        ],
      },
    ],
    quoteHeading: "Send the AIB survey item and the space around it.",
    quoteCopy: "Include the report page, location, area, height, fixings if known, condition, occupancy, access controls and the contractor or project stage waiting for removal.",
  },

  "asbestos-floor-removal-middlesbrough-teesside": {
    decisionHeading: "Plan asbestos flooring around the layers present and the finish required afterwards.",
    decisionIntro: "Tiles, backing and dark adhesive can form different parts of the scope. The useful question is what has been confirmed, how far it runs and what the flooring or refurbishment team needs next.",
    sections: [
      {
        eyebrow: "Hidden floor layers",
        heading: "Old tiles and adhesive uncovered beneath later flooring",
        paragraphs: [
          "Flooring enquiries often begin after carpet, laminate or vinyl is lifted in one room. Do not assume that every old tile or black adhesive contains asbestos. Send the survey or sample result, then map the confirmed material across the kitchen, hallway, bathroom or adjoining rooms. Thresholds and fitted units can conceal whether the same layer continues.",
          "A clear room schedule is more useful than one total estimate. List approximate length and width for each space, the current covering and whether skirting, units or sanitary fittings remain. Wide photographs show access and furniture; close images show the visible floor condition without anyone breaking a tile for the camera.",
        ],
      },
      {
        eyebrow: "The next floor finish",
        heading: "Removal scope and subfloor expectations must match the installer’s plan",
        paragraphs: [
          "Tell us whether the next contractor plans tiles, vinyl, resin, screed, carpet or a floating floor. Asbestos removal does not automatically mean that cracks, damp, uneven concrete or every historic adhesive mark will be repaired. The quotation should say what is removed and the condition in which the substrate is handed back.",
          "Kitchen and bathroom programmes can be tightly sequenced around units, plumbing and appliances. If removal must occur between strip-out and fitting, give both dates rather than only an aspirational deadline. For occupied homes, say which entrances and essential rooms must remain usable while the floor area is controlled.",
        ],
      },
      {
        eyebrow: "Domestic and commercial floors",
        heading: "From a Hartlepool room to a Stockton retail or office strip-out",
        paragraphs: [
          "Homes around Billingham, Hartlepool, Darlington and Thornaby commonly present one or several rooms during renovation. Commercial premises near Stockton High Street, Middlesbrough centre, Teesdale or Portrack Lane can involve larger open areas, stock, fixed counters and a possession deadline. Each needs different access and sequencing even where the reported floor material is similar.",
          "For commercial work, include plans, measured areas and the demolition or fit-out programme. State whether partitions have been removed and whether the material continues beneath them. If the survey uses several item references, highlight the exact items in the present package so the price does not accidentally include or omit another floor zone.",
        ],
      },
      {
        eyebrow: "Access and preparation",
        heading: "Empty rooms and define fixed obstacles before the removal date",
        paragraphs: [
          "Tell us whether furniture, stock, appliances or sanitary fittings remain and who will move them. A clear floor is not just easier to measure; it also prevents uncertainty about material beneath heavy or fixed items. Do not lift confirmed tiles yourself merely to discover the edge of the affected area.",
          "Consider the route from the room to the outside, especially in flats, shops and occupied houses. Shared corridors, stairs and customer entrances may need scheduling. If keys are controlled by an agent or tenant, nominate the person who can provide access. Good preparation reduces the chance that a booked flooring or kitchen programme loses a day because the full room was not available.",
          "If floor coverings have been removed by another trade, say when and how that happened and whether any tiles were broken. Photograph loose debris from a safe distance and leave it in place. This allows the enquiry to distinguish planned removal of intact confirmed materials from an area where disturbance may need more immediate assessment.",
        ],
      },
    ],
    quoteHeading: "Send the confirmed floor layers and the finish planned next.",
    quoteCopy: "Include room-by-room dimensions, wide photographs, test or survey pages, current coverings, fitted obstacles, occupancy and the installer’s required handover date.",
  },

  "commercial-asbestos-removal-middlesbrough-teesside": {
    decisionHeading: "Build the asbestos package around the programme, occupants and contractor interfaces.",
    decisionIntro: "Commercial buyers need more than a material price. They need a defined scope, access plan, sequencing and handover that fit refurbishment, maintenance, dilapidations or demolition.",
    sections: [
      {
        eyebrow: "Tender and live works",
        heading: "Turn survey schedules and drawings into a priceable asbestos package",
        paragraphs: [
          "Send the relevant asbestos register or refurbishment survey with drawings, item references and the works schedule. Mark the phase being priced when the report covers a whole estate or building. Quantities in a survey may be indicative, so photographs and a site visit can be important where access, fixings or extent remain unclear.",
          "Name the decision-maker, principal contractor or facilities contact and explain what approval is needed. A budget request for future planning is different from a live tender with a return date, mobilisation window and follow-on subcontractors. Stating that position helps the response focus on the information your team actually needs.",
        ],
      },
      {
        eyebrow: "Operational premises",
        heading: "Keep trading, tenants and production constraints visible in the scope",
        paragraphs: [
          "For units around Riverside Park, TeesAMP, Preston Farm, Portrack Lane and Cowpen Lane Industrial Estate, identify production areas, loading routes, public zones and services that cannot be interrupted. Stock or machinery below a roof, live equipment near a service zone and shared tenant access may influence preparation and working hours.",
          "Provide induction requirements, permit systems, parking, loading and the name of the person who controls access. If weekend, night or shutdown working is being considered, say whether that is mandatory or only an option. A realistic programme should be based on site rules rather than assuming unrestricted entry to an industrial or managed building.",
        ],
      },
      {
        eyebrow: "Completion and evidence",
        heading: "Define what must be handed back before the next contractor starts",
        paragraphs: [
          "The removal package should distinguish asbestos work from demolition, reinstatement, roofing, electrical isolation and making good. Where several contractors meet, assign each boundary clearly. This prevents a programme reaching the start date with scaffold, isolations or clearance responsibility still unresolved.",
          "Send the required completion date, next inspection or tenant handover and any document format your client expects. Waste paperwork and other completion records should match the agreed task. If the building has multiple phases, keep each area and date visible so evidence from one phase is not mistaken for completion of the entire programme.",
        ],
      },
      {
        eyebrow: "Procurement check",
        heading: "Compare tenders using the same asbestos items and programme assumptions",
        paragraphs: [
          "Issue the same marked survey, drawings and clarification notes to each tenderer. If one quotation includes access equipment, night working or making good and another excludes it, the totals are not directly comparable. Record assumptions about quantities, power isolation, welfare and storage before selecting the package.",
          "For phased work, ask for the cost and duration of each area as well as the overall programme. This helps when a tenant date changes or only one unit receives approval. It also makes later instructions clearer because the client can refer to a defined item and phase instead of reopening the entire Teesside site scope.",
          "Where the tender includes provisional quantities, agree how changes will be measured and authorised. Nominate who can approve additional items discovered after access is opened. A simple instruction route protects the programme and prevents site teams waiting while the landlord, consultant and principal contractor each assume somebody else can make the commercial decision.",
          "Before award, confirm whether the quotation remains valid for the planned start date and whether mobilisation depends on notices, analytical support or other booked resources. Procurement should leave enough time for the required planning rather than treating asbestos removal as an instant call-off immediately before the main works begin.",
        ],
      },
    ],
    quoteHeading: "Send the live commercial package, programme and site constraints.",
    quoteCopy: "Include survey items, drawings, quantities, address, access rules, occupancy, operating restrictions, tender date, removal window and the trade or inspection following the work.",
  },

  "asbestos-pipe-insulation-removal-middlesbrough-teesside": {
    decisionHeading: "Pipe insulation and lagging need confirmation, service information and licensed planning.",
    decisionIntro: "A photograph of pipework cannot establish its asbestos content. The survey finding, insulation type and condition, live services and route through the building all shape the correct response.",
    sections: [
      {
        eyebrow: "Identify the complete run",
        heading: "Asbestos pipe lagging in plant rooms, basements, ducts and ceiling voids",
        paragraphs: [
          "Send the survey pages that identify the insulation, including item number, location, extent and condition. A small damaged section may be part of a longer concealed run, so plans and photographs should show where pipes enter walls, risers or voids. Do not cut or unwrap insulation to expose layers for identification.",
          "Pipe diameter and linear length are useful, but bends, valves, joints, brackets and restricted access also matter. Show the approach to the plant room or service area, working height and nearby equipment. Where several services run together, mark the confirmed asbestos item so the scope is not confused with adjacent non-asbestos insulation.",
        ],
      },
      {
        eyebrow: "Live building services",
        heading: "Coordinate isolation, heating and mechanical work before removal",
        paragraphs: [
          "State whether the pipe is live, redundant or already isolated and who is responsible for proving that status. Hot-water, heating, steam or process services may require a planned shutdown by the building's competent mechanical team. The asbestos contractor should not be expected to discover service status after arriving on site.",
          "Explain what follows removal: boiler replacement, pipe alteration, demolition or access for inspection. If replacement insulation or mechanical reinstatement is required, identify who provides it. This is especially important in occupied properties where heating or hot water cannot remain unavailable without an agreed programme.",
        ],
      },
      {
        eyebrow: "Licensed Teesside work",
        heading: "Pipe-insulation enquiries across homes, institutions and industrial premises",
        paragraphs: [
          "Asbestos-containing pipe insulation is a higher-risk material and removal will commonly require an HSE-licensed contractor, subject to the confirmed material and task. Enquiries may arise in older basements around central Middlesbrough, communal service areas in Stockton or Hartlepool, and plant environments near Riverside Park, Haverton Hill or the wider Teesside industrial corridor.",
          "For commercial or institutional buildings, include occupancy, security, inductions, confined access and the shutdown window. For a domestic property, explain the room, route to the exit and whether the heating engineer is already involved. In both cases, the survey evidence and safe service isolation are more important than trying to diagnose lagging from colour or surface texture.",
        ],
      },
      {
        eyebrow: "Condition and urgency",
        heading: "Report damage without touching, wrapping or cleaning the insulation",
        paragraphs: [
          "If lagging is cracked, detached or has been struck during other work, stop access to the immediate area and describe the event. Do not sweep debris, apply tape or move the pipe covering to improve a photograph. State whether anybody disturbed it and whether the area is already secured so the enquiry can be triaged sensibly.",
          "An urgent response still depends on knowing the confirmed material, location and service status. Provide the person controlling the building and the mechanical contact who can discuss isolation. For remote plant rooms or locked risers, make sure access can actually be provided at the agreed time; otherwise the specialist may arrive without being able to inspect the pipe run.",
          "If debris may have fallen onto a boiler, tank, cable tray or floor below, show that wider area without moving anything. Note ventilation grilles and doors leading to occupied rooms. This gives the first review enough context to consider the affected space as well as the insulation still attached to the pipe.",
        ],
      },
    ],
    quoteHeading: "Send the pipe-insulation survey item and service status.",
    quoteCopy: "Include report pages, pipe location, approximate length and diameter, bends and valves, photographs, condition, access, whether the service is live and the work planned afterwards.",
  },
};
