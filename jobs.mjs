// Every open role. Edit here, then run `node build.mjs` and commit the pages it writes.
// Titles, headings, chips, labels, meta and table cells are plain text (the build escapes them);
// lede, `p`, `list` items and applyText are HTML, so write &amp; there.
// ogImage is a file inside the role's folder; it is the preview WhatsApp and LinkedIn show.

export const jobs = [
  {
    slug: "experience-growth-marketing-lead",
    title: "Experience & Growth Marketing Lead",
    city: "Lagos",
    meta: {
      title: "Experience & Growth Marketing Lead · Fiilar Careers (Lagos)",
      description: "Fiilar is hiring an Experience & Growth Marketing Lead in Lagos. Full-time, reporting to the CMO. Own and drive Fiilar's end-to-end growth and marketing strategy. Apply now.",
      ogTitle: "We're hiring: Experience & Growth Marketing Lead at Fiilar",
      ogDescription: "Full-time · Lagos · Reports to the CMO. Own Fiilar's growth and marketing. Apply today.",
    },
    lede: "You will own and drive Fiilar's end-to-end growth and marketing strategy, ensuring that our marketing activities translate into measurable business outcomes.",
    chips: ["📍 Lagos, Nigeria", "💼 Full-time", "📈 Growth & Marketing", "👤 Reports to CMO"],
    ogImage: "og.jpg",
    sections: [
      {
        title: "About Fiilar",
        blocks: [
          { p: "Fiilar is building the infrastructure for discovering, booking, and managing spaces." },
          { p: "We are a mobile-first platform connecting people with spaces for accommodation, events, work, meetings, wellness, and creative activities. Beyond being a marketplace, Fiilar is building an operating system that helps space owners manage their businesses while making it easier for customers to discover and book spaces." },
          { p: "As we expand our marketplace and strengthen our presence across Lagos and other African markets, we are looking for an ambitious, commercially minded <strong>Experience &amp; Growth Marketing Lead</strong> to drive our marketing, customer acquisition, host onboarding, and market expansion strategies." },
          { p: "This is not a conventional marketing role. We need someone who can think strategically but is equally comfortable executing on the ground, building partnerships, managing campaigns, experimenting with growth channels, and delivering measurable business results." },
        ],
      },
      {
        title: "The Role",
        blocks: [
          { p: "You will work closely with the CEO, onboarding agents, product team, content creators, and external partners to grow both sides of the Fiilar marketplace: space owners (hosts) and customers (guests)." },
          { p: "Your primary responsibility will be to build repeatable acquisition and engagement systems that grow Fiilar's supply, demand, brand awareness, and revenue." },
        ],
      },
      {
        title: "Key Responsibilities",
        blocks: [
          { h3: "1. Growth Strategy & Execution" },
          { list: [
            "Develop and execute Fiilar's overall growth marketing strategy.",
            "Identify new customer acquisition channels and opportunities for marketplace expansion.",
            "Design and execute growth experiments across digital, physical, community, and partnership channels.",
            "Develop strategies to acquire, activate, and retain both hosts and customers.",
            "Build scalable growth initiatives that translate marketing activities into measurable registrations, bookings, and revenue.",
            "Identify growth opportunities across Fiilar's different space categories.",
          ] },
          { h3: "2. Experiential & Field Marketing" },
          { list: [
            "Conceptualize and execute physical marketing campaigns, activations, pop-ups, community events, and brand experiences.",
            "Develop innovative ways to introduce Fiilar to target audiences through real-world experiences.",
            "Organize targeted activations within universities, creative communities, business districts, event communities, and lifestyle spaces.",
            "Build relationships with event organizers, communities, creators, hospitality businesses, and other relevant stakeholders.",
            "Develop campaigns that encourage people to experience Fiilar rather than simply hear about the brand.",
            "Measure the effectiveness of every activation through leads generated, registrations, conversions, and customer acquisition costs.",
          ] },
          { h3: "3. Host Acquisition & Onboarding Growth" },
          { list: [
            "Own the strategy for acquiring quality space owners across Fiilar's target categories.",
            "Develop structured host acquisition campaigns for hotels, apartments, event venues, creative studios, coworking spaces, wellness businesses, and other relevant spaces.",
            "Build and manage acquisition funnels for the onboarding team.",
            "Develop outreach strategies, sales enablement materials, pitch scripts, and conversion processes.",
            "Manage and coordinate onboarding agents, set weekly and monthly targets, and monitor performance.",
            "Identify strategic partnerships with property developers, hospitality operators, facility managers, and real estate networks.",
            "Develop initiatives that encourage onboarded hosts to actively manage their spaces and receive bookings through Fiilar.",
          ] },
          { h3: "4. Customer Acquisition & Engagement" },
          { list: [
            "Develop campaigns that drive customer registrations, app downloads, first bookings, and repeat usage.",
            "Identify and understand Fiilar's customer segments, including young professionals, creatives, event planners, travellers, businesses, and diaspora customers.",
            "Develop targeted campaigns for different customer segments.",
            "Build referral, loyalty, promotional, and incentive-based growth initiatives.",
            "Identify opportunities to increase customer retention and booking frequency.",
            "Work with the product team to improve customer acquisition and conversion journeys.",
          ] },
          { h3: "5. Digital Marketing & Brand Growth" },
          { list: [
            "Develop and oversee Fiilar's digital marketing strategy across Instagram, TikTok, X, LinkedIn, and other relevant channels.",
            "Work with content creators, influencers, and UGC creators to develop campaigns that communicate Fiilar's value proposition.",
            "Coordinate content strategy, campaign calendars, and promotional activities.",
            "Develop creative marketing campaigns around seasonal opportunities, major events, and consumer trends.",
            "Ensure consistency in Fiilar's brand positioning, messaging, and overall customer experience.",
            "Identify opportunities for organic growth, social media engagement, and community-led marketing.",
          ] },
          { h3: "6. Strategic Partnerships & Business Development" },
          { list: [
            "Identify and establish partnerships that can accelerate Fiilar's growth.",
            "Develop relationships with event organizers, entertainment communities, travel companies, universities, developers, hospitality brands, and lifestyle businesses.",
            "Explore B2B partnerships that can generate recurring bookings and bring significant host supply onto Fiilar.",
            "Develop co-marketing campaigns and mutually beneficial partnership initiatives.",
            "Build a pipeline of strategic partners and manage relationships from initial engagement to execution.",
          ] },
          { h3: "7. Growth Analytics & Performance Management" },
          { list: [
            "Establish measurable KPIs for all marketing and growth initiatives.",
            "Track host acquisition, customer acquisition, activation, booking conversion, retention, and campaign performance.",
            "Monitor marketing spend, customer acquisition cost (CAC), conversion rates, and campaign ROI.",
            "Develop weekly and monthly growth reports for management.",
            "Identify underperforming channels and recommend improvements.",
            "Use data and market insights to continuously refine Fiilar's growth strategy.",
          ] },
        ],
      },
      {
        title: "Key Performance Indicators (KPIs)",
        blocks: [
          { p: "The successful candidate will be evaluated based on measurable business outcomes, including:" },
          { table: {
            head: ["Performance Area", "Key Metrics"],
            rows: [
              ["Host Acquisition", "Number of qualified spaces onboarded"],
              ["Host Activation", "Percentage of hosts with complete, bookable listings"],
              ["Customer Acquisition", "New registrations and acquired customers"],
              ["Booking Conversion", "First bookings and booking conversion rate"],
              ["Customer Retention", "Repeat bookings and returning customers"],
              ["Experiential Marketing", "Leads, registrations, and conversions from activations"],
              ["Partnerships", "Number and value of strategic partnerships secured"],
              ["Digital Growth", "Qualified traffic, engagement, and campaign conversions"],
              ["Marketing Efficiency", "CAC, campaign ROI, and cost per acquisition"],
              ["Team Performance", "Productivity and target achievement of onboarding agents"],
            ],
          } },
        ],
      },
      {
        title: "Requirements & Qualifications",
        blocks: [
          { p: "We are looking for someone who:" },
          { list: [
            "Has 3–6 years of experience in growth marketing, experiential marketing, digital marketing, brand marketing, or business development.",
            "Has demonstrated experience developing and executing customer acquisition campaigns.",
            "Understands both online and offline marketing channels.",
            "Has experience organizing physical activations, campaigns, events, or community-led marketing initiatives.",
            "Has experience managing sales, marketing, field activation, or business development teams.",
            "Understands customer acquisition funnels, conversion optimization, and performance marketing.",
            "Has strong partnership development, negotiation, and relationship management skills.",
            "Is comfortable working with data, tracking KPIs, and making decisions based on performance.",
            "Has excellent communication, presentation, and stakeholder management skills.",
            "Is highly resourceful, creative, commercially minded, and execution-oriented.",
          ] },
          { p: "Experience in startups, marketplaces, hospitality, travel, real estate, lifestyle, entertainment, or technology companies will be an advantage." },
        ],
      },
      {
        title: "The Ideal Candidate",
        blocks: [
          { p: "The ideal candidate is someone who:" },
          { list: [
            "Thinks like a growth entrepreneur, not just a marketer.",
            "Can develop a strategy in the morning and execute it in the afternoon.",
            "Understands how to turn attention into registrations, registrations into bookings, and partnerships into revenue.",
            "Is comfortable approaching businesses, meeting partners, organizing activations, and building relationships.",
            "Can manage people, coordinate campaigns, and hold teams accountable for results.",
            "Is comfortable working in a fast-paced startup environment where processes are still evolving.",
            "Takes ownership and doesn't wait to be told what needs to be done.",
            "Understands that marketing success is measured by business growth, not just likes, followers, and impressions.",
          ] },
        ],
      },
      {
        title: "Why Join Fiilar?",
        blocks: [
          { p: "This is an opportunity to join an ambitious technology startup at an important stage of its growth." },
          { p: "You will have the opportunity to:" },
          { list: [
            "Own and shape the growth direction of an emerging African technology platform.",
            "Build and execute marketing strategies with direct business impact.",
            "Work closely with the founder and leadership team.",
            "Build and lead a growth-focused team.",
            "Experiment with new marketing channels, partnerships, and customer acquisition models.",
            "Contribute to building a platform that changes how people discover, book, and manage spaces.",
          ] },
        ],
      },
    ],
    applyLabel: "Send your resume and cover letter to",
    applyFields: ["Name:", "Phone:", "LinkedIn:", "", "My resume and cover letter are attached."],
    applyText: "<strong>If you are passionate about building brands, creating experiences, driving measurable growth, and turning ambitious ideas into business results, we would love to hear from you.</strong>",
  },
  {
    slug: "onboarding-agent",
    title: "Onboarding Agent",
    city: "Lagos",
    meta: {
      title: "Onboarding Agent — Fiilar Careers (Lagos)",
      description: "Fiilar is hiring an Onboarding Agent in Lagos. ₦100,000/month. Help bring Lagos's best spaces onto Fiilar. Apply now.",
      ogTitle: "We're hiring: Onboarding Agent — Fiilar",
      ogDescription: "₦100,000/month · Lagos · Help onboard amazing spaces to Fiilar. Apply today.",
    },
    lede: "Help bring Lagos's best spaces onto Fiilar — meet space owners, sign them up, and grow the marketplace people love to book.",
    pay: "₦100,000 / month",
    chips: ["📍 Lagos, Nigeria", "🤝 Sales & Onboarding", "🌱 Entry level (0–1 yr)"],
    sections: [
      {
        title: "About the role",
        blocks: [
          { p: "Fiilar is the easiest way to discover and book unique spaces for any occasion. As an <strong>Onboarding Agent</strong>, you're the friendly face that brings great spaces onto the platform — reaching out to venue and space owners across Lagos, showing them how Fiilar works, and helping them list and get verified. It's a people-first, on-the-ground role perfect for someone starting their career in sales." },
        ],
      },
      {
        title: "What you'll do",
        blocks: [
          { list: [
            "Identify and reach out to space &amp; venue owners across Lagos.",
            "Explain how Fiilar works and the value of listing with us.",
            "Guide owners through signing up, listing, and getting verified.",
            "Build relationships and keep new hosts engaged and supported.",
            "Share what you learn on the ground with the team to help us improve.",
          ] },
        ],
      },
      {
        title: "What we're looking for",
        blocks: [
          { list: [
            "<strong>0–1 year of sales experience</strong> — eagerness counts more than a long CV.",
            "<strong>Good communication skills</strong> — you're comfortable talking to new people.",
            "<strong>Willingness to learn</strong> — curious, coachable, and ready to grow.",
            "Based in <strong>Lagos</strong> and able to meet space owners in person.",
          ] },
        ],
      },
      {
        title: "What we offer",
        blocks: [
          { list: [
            "<strong class=\"money\">₦100,000 per month.</strong>",
            "Hands-on training and mentorship to grow your sales career.",
            "A chance to help build one of Nigeria's most exciting marketplaces from the ground up.",
          ] },
        ],
      },
    ],
    applyText: "Send us a short note about yourself and why you'd be a great fit. We'd love to hear from you.",
    afterApply: [
      {
        title: "About Fiilar",
        blocks: [
          { p: "Fiilar helps people discover and book unique spaces for any occasion — from work and events to creative shoots. We're building the trusted marketplace for spaces in Nigeria, and onboarding agents like you are how the best spaces find their way onto the platform. Learn more at <a href=\"https://www.fiilar.com\" target=\"_blank\" rel=\"noopener\">www.fiilar.com</a>." },
        ],
      },
    ],
  },
]
