// Shared news data for the application
export interface NewsArticle {
  id: number
  slug: string
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  category: string
  readTime: string
  featured?: boolean
  tags: string[]
  image: string
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "ycci-partners-with-major-banks",
    title: "YCCI Partners with Major Banks to Provide Youth Funding",
    excerpt: "New partnership opens doors for young entrepreneurs to access affordable business loans and financial services.",
    content: `
      <p>The Youth Chamber of Commerce & Industry (YCCI) Africa has announced a groundbreaking partnership with three major South African banks to create a dedicated funding pool for young entrepreneurs.</p>
      
      <p>This initiative aims to address the critical gap in access to capital that has long hindered young business owners from scaling their ventures. The partnership with Standard Bank, ABSA, and Nedbank will provide over R500 million in funding opportunities specifically tailored for youth-led businesses.</p>
      
      <h3>Key Features of the Partnership</h3>
      <ul>
        <li>Reduced interest rates for qualifying young entrepreneurs</li>
        <li>Streamlined application processes with dedicated youth advisors</li>
        <li>Mentorship programs paired with funding opportunities</li>
        <li>Flexible repayment terms aligned with business growth cycles</li>
      </ul>
      
      <p>"This partnership represents a significant milestone in our mission to empower young entrepreneurs across South Africa," said YCCI CEO, Mandla Mthembu. "By working directly with major financial institutions, we're removing traditional barriers and creating pathways for sustainable business growth."</p>
      
      <h3>Application Process</h3>
      <p>Young entrepreneurs aged 18-35 can apply through the YCCI portal starting February 1st, 2025. Applications will be processed on a rolling basis, with funding decisions typically made within 30 days.</p>
      
      <p>The program specifically targets businesses in high-growth sectors including technology, renewable energy, agriculture, and manufacturing. Priority will be given to businesses that demonstrate job creation potential and innovation in their respective fields.</p>
    `,
    author: "Sarah Molefe",
    date: "January 15, 2025",
    category: "Partnership",
    readTime: "5 min read",
    featured: true,
    tags: ["Funding", "Banking", "Partnership", "Entrepreneurship"],
    image: "/api/placeholder/800/400"
  },
  {
    id: 2,
    slug: "youth-employment-initiative-launches",
    title: "Youth Employment Initiative Launches Across 3 Provinces",
    excerpt: "Comprehensive program aims to create 10,000 jobs for young people through skills development and business creation.",
    content: `
      <p>YCCI Africa, in collaboration with the Department of Small Business Development, has launched an ambitious youth employment initiative targeting job creation across Gauteng, Western Cape, and KwaZulu-Natal provinces.</p>
      
      <p>The R200 million program aims to create 10,000 sustainable job opportunities over the next two years through a combination of skills development, entrepreneurship training, and direct business support.</p>
      
      <h3>Program Components</h3>
      <ul>
        <li>Digital skills training in partnership with leading tech companies</li>
        <li>Entrepreneurship bootcamps for aspiring business owners</li>
        <li>Internship placements with YCCI member companies</li>
        <li>Seed funding for promising startup ventures</li>
      </ul>
      
      <p>The initiative specifically targets young people aged 18-29 who are currently unemployed or underemployed. Participants will receive comprehensive support including career counseling, mentorship, and access to YCCI's extensive business network.</p>
      
      <h3>Provincial Focus Areas</h3>
      <p><strong>Gauteng:</strong> Technology and financial services sectors<br>
      <strong>Western Cape:</strong> Tourism, agriculture, and renewable energy<br>
      <strong>KwaZulu-Natal:</strong> Manufacturing, logistics, and maritime industries</p>
      
      <p>"This program represents our commitment to addressing youth unemployment through practical, market-driven solutions," explained Program Director Dr. Themba Ndaba. "We're not just creating jobs – we're building careers and empowering the next generation of business leaders."</p>
    `,
    author: "Thabo Mthembu",
    date: "January 10, 2025",
    category: "Initiative",
    readTime: "4 min read",
    featured: true,
    tags: ["Employment", "Skills Development", "Government", "Job Creation"],
    image: "/api/placeholder/800/400"
  },
  {
    id: 3,
    slug: "tech-startup-incubator-record-applications",
    title: "Tech Startup Incubator Program Sees Record Applications",
    excerpt: "Over 500 applications received for the 2025 cohort of our flagship technology startup incubator program.",
    content: `
      <p>YCCI's flagship Technology Startup Incubator has received over 500 applications for its 2025 cohort, marking a 300% increase from the previous year and highlighting the growing interest in technology entrepreneurship among South African youth.</p>
      
      <p>The 6-month intensive program provides selected startups with seed funding, mentorship, office space, and access to a network of industry experts and potential investors.</p>
      
      <h3>This Year's Applications</h3>
      <p>Applications span various technology sectors including:</p>
      <ul>
        <li>Fintech solutions (35% of applications)</li>
        <li>E-commerce platforms (20%)</li>
        <li>Healthtech innovations (15%)</li>
        <li>Agritech solutions (12%)</li>
        <li>Edtech platforms (10%)</li>
        <li>Other emerging technologies (8%)</li>
      </ul>
      
      <p>Only 25 startups will be selected for the program, making it one of the most competitive startup accelerators in Africa. Selection criteria include innovation potential, market viability, team strength, and social impact.</p>
      
      <p>"The quality and diversity of applications this year is truly remarkable," said Incubator Director Lisa Mgwaba. "We're seeing innovative solutions to uniquely African challenges, from mobile payment systems for rural communities to AI-powered agricultural advisory platforms."</p>
      
      <h3>Success Stories</h3>
      <p>Previous cohorts have achieved remarkable success, with graduates raising over R150 million in follow-on funding and creating more than 500 jobs. Notable alumni include AgriConnect, which recently closed a R25 million Series A round, and EduTech Solutions, now operating in 5 African countries.</p>
    `,
    author: "Nomsa Khumalo",
    date: "January 5, 2025",
    category: "Program",
    readTime: "3 min read",
    tags: ["Technology", "Startups", "Incubator", "Innovation"],
    image: "/api/placeholder/800/400"
  },
  {
    id: 4,
    slug: "women-entrepreneurs-summit-2025",
    title: "Women Entrepreneurs Summit Announces Star-Studded Lineup",
    excerpt: "Leading female business leaders from across Africa to share insights at this year's summit.",
    content: `
      <p>The 2025 Women Entrepreneurs Summit, organized by YCCI Africa, has announced an impressive lineup of speakers featuring some of Africa's most successful female business leaders and entrepreneurs.</p>
      
      <p>Scheduled for March 8-10, 2025, in Cape Town, the summit will bring together over 1,000 women entrepreneurs, business leaders, and aspiring female founders from across the continent.</p>
      
      <h3>Keynote Speakers</h3>
      <ul>
        <li><strong>Dr. Precious Moloi-Motsepe</strong> - Founder and Executive Chairperson of African Fashion International</li>
        <li><strong>Rapelang Rabana</strong> - Co-founder of Rekindle Learning and former Managing Director of Kaya FM</li>
        <li><strong>Ory Okolloh</strong> - Former Google Director for Africa and co-founder of Ushahidi</li>
        <li><strong>Bethlehem Tilahun Alemu</strong> - Founder and Managing Director of soleRebels</li>
      </ul>
      
      <p>The summit will feature panel discussions on access to funding, scaling businesses across Africa, digital transformation, and work-life balance for women entrepreneurs.</p>
      
      <h3>Special Programs</h3>
      <p>This year's summit introduces several new initiatives:</p>
      <ul>
        <li>A pitch competition with R1 million in prizes</li>
        <li>One-on-one mentoring sessions with successful entrepreneurs</li>
        <li>Investor speed networking events</li>
        <li>Skills workshops on financial management and digital marketing</li>
      </ul>
      
      <p>"Women entrepreneurs are driving significant economic growth across Africa," said Summit Director Zanele Mthembu. "This summit provides a platform for knowledge sharing, networking, and celebrating the achievements of women in business."</p>
      
      <p>Early bird registration is now open, with special rates available for YCCI members and students.</p>
    `,
    author: "Zanele Dube",
    date: "December 20, 2024",
    category: "Events",
    readTime: "2 min read",
    tags: ["Women", "Leadership", "Summit", "Entrepreneurship"],
    image: "/api/placeholder/800/400"
  },
  {
    id: 5,
    slug: "digital-transformation-workshop-series",
    title: "Digital Transformation Workshop Series for SMEs Launches",
    excerpt: "YCCI introduces comprehensive digital skills training to help small businesses adapt to the digital economy.",
    content: `
      <p>Recognizing the urgent need for small and medium enterprises (SMEs) to embrace digital technologies, YCCI Africa has launched a comprehensive Digital Transformation Workshop Series targeting business owners across South Africa.</p>
      
      <p>The 8-week program covers essential digital skills including e-commerce setup, digital marketing, cloud-based accounting, and cybersecurity fundamentals. Each workshop combines theoretical knowledge with hands-on practical sessions.</p>
      
      <h3>Workshop Topics</h3>
      <ul>
        <li>Building an effective online presence</li>
        <li>Social media marketing strategies</li>
        <li>E-commerce platform selection and setup</li>
        <li>Digital payment systems integration</li>
        <li>Customer relationship management (CRM) tools</li>
        <li>Data analytics for business insights</li>
        <li>Cybersecurity best practices</li>
        <li>Digital transformation planning</li>
      </ul>
      
      <p>The program is delivered through a hybrid model, combining in-person workshops in major cities with online sessions to ensure accessibility for businesses in remote areas.</p>
      
      <p>"Small businesses are the backbone of our economy, but many are struggling to adapt to digital challenges," said Digital Transformation Manager Priya Patel. "These workshops provide practical, actionable knowledge that business owners can implement immediately."</p>
      
      <h3>Success Metrics</h3>
      <p>Early participants have reported significant improvements in their digital capabilities, with 78% increasing their online sales within 3 months of completing the program.</p>
    `,
    author: "Priya Patel",
    date: "December 15, 2024",
    category: "Training",
    readTime: "3 min read",
    tags: ["Digital Transformation", "SME", "Training", "Technology"],
    image: "/api/placeholder/800/400"
  },
  {
    id: 6,
    slug: "green-business-certification-program",
    title: "Green Business Certification Program Gains Momentum",
    excerpt: "More businesses adopting sustainable practices through YCCI's environmental certification initiative.",
    content: `
      <p>YCCI's Green Business Certification Program has certified over 200 businesses in its first year, demonstrating the growing commitment to environmental sustainability among South African companies.</p>
      
      <p>The program helps businesses implement environmentally friendly practices while reducing operational costs and improving their market competitiveness.</p>
      
      <h3>Certification Criteria</h3>
      <ul>
        <li>Energy efficiency improvements</li>
        <li>Waste reduction and recycling programs</li>
        <li>Water conservation measures</li>
        <li>Sustainable supply chain practices</li>
        <li>Carbon footprint reduction initiatives</li>
      </ul>
      
      <p>Certified businesses report an average 25% reduction in energy costs and improved customer loyalty due to their environmental commitments.</p>
      
      <p>"Sustainability is no longer optional – it's a business imperative," explained Environmental Program Director Dr. Kgomotso Mabunda. "Our certification program helps businesses transition to sustainable practices while maintaining profitability."</p>
    `,
    author: "Dr. Kgomotso Mabunda",
    date: "December 10, 2024",
    category: "Sustainability",
    readTime: "4 min read",
    tags: ["Sustainability", "Environment", "Certification", "Green Business"],
    image: "/api/placeholder/800/400"
  }
]

// Helper functions
export function getFeaturedArticles(): NewsArticle[] {
  return newsArticles.filter(article => article.featured).slice(0, 3)
}

export function getRecentArticles(): NewsArticle[] {
  return newsArticles.slice(0, 6)
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug)
}

export function getArticlesByCategory(category: string): NewsArticle[] {
  return newsArticles.filter(article => article.category === category)
}
