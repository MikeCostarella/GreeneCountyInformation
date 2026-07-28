// Greene County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-27
//
// Every URL below was fetched and confirmed to resolve on the review date.
//
// Two known gaps, both deliberate:
//   * The VILLAGE OF BOWERSVILLE has no official website. It is a real Greene
//     County village; it simply has no web presence. (townofbowersville.com is
//     Bowersville, GEORGIA — do not link it.)
//   * The Sheriff's own host (sheriff.greenecountyohio.gov) refuses automated
//     fetchers and the county's /486/Sheriff page rate-limits, so the county
//     directory entry is linked instead.
//
// One http/https note: beavercreekohio.gov redirects its ROOT to plain http.
// Interior paths serve over https, so the City of Beavercreek entry points at
// an interior page rather than the homepage.

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Greene County Auditor Property Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Greene County, Ohio", category: "Government", subcategory: "County", url: "https://www.greenecountyohio.gov/", description: "Official Greene County government portal: court records, dog and marriage licenses, property search, online payments and GIS mapping." },
  { name: "Greene County Auditor", category: "Government", subcategory: "Auditor", url: "https://auditor.greenecountyohio.gov/", description: "Parcel search by address, parcel number or owner, plus the delinquent tax list, tax estimator and conveyance fee calculator." },
  { name: "Greene County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/greene/", description: "County elections authority at 551 Ledbetter Rd. in Xenia, open weekdays 8:00 am to 4:30 pm." },
  { name: "Greene County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://www.greenecountyohio.gov/Directory/Home/DepartmentListing?DID=18", description: "County directory entry for the Sheriff's Office, with current contact details for patrol, jail and records." },
  { name: "Wright-Patterson Air Force Base", category: "Government", subcategory: "Federal", url: "https://www.wpafb.af.mil/", description: "Air Force installation straddling the Greene County line, home to Air Force Materiel Command headquarters, AFRL, AFIT and NASIC." },
  { name: "City of Xenia", category: "Government", subcategory: "City", url: "https://www.cityofxenia.org/", description: "Municipal site for the county seat, with City Hall at 107 E. Main Street." },
  { name: "City of Fairborn", category: "Government", subcategory: "City", url: "https://www.fairbornoh.gov/", description: "Fairborn's municipal government, headquartered at the Government Center, 44 W. Hebble Avenue." },
  { name: "City of Beavercreek", category: "Government", subcategory: "City", url: "https://beavercreekohio.gov/267/City-Government", description: "Greene County's largest city, run under a council-manager charter with an elected mayor, six council members and an appointed city manager." },
  { name: "City of Bellbrook", category: "Government", subcategory: "City", url: "https://www.bellbrook.gov/", description: "Municipal site for Bellbrook — legally a city, not a village — at 15 East Franklin Street." },
  { name: "Village of Yellow Springs", category: "Government", subcategory: "Village", url: "https://www.yellowsprings.gov/", description: "Village government offices at 100 Dayton Street, serving the county's northwest corner." },
  { name: "Village of Cedarville", category: "Government", subcategory: "Village", url: "https://www.cedarville.us/", description: "Village government at 301 Palmer Drive, home of Cedarville University." },
  { name: "Village of Jamestown", category: "Government", subcategory: "Village", url: "https://jamestownohio.us/office-contacts/", description: "Village offices at 84 Seaman Dr., describing Jamestown as a community of farmers, families and friends." },
  { name: "Village of Spring Valley", category: "Government", subcategory: "Village", url: "https://www.villageofspringvalleyohio.com/", description: "Village on the banks of the Little Miami River in southwestern Greene County." },
  // ---------- Education ----------
  { name: "Greene County Public Library", category: "Education", subcategory: "Library", url: "https://greenelibrary.info/", description: "County library system operating seven community libraries across Greene County." },
  { name: "Xenia Community Schools", category: "Education", subcategory: "K-12", url: "https://www.xeniaschools.org/", description: "District offices at 819 Colorado Drive in Xenia, home of the Buccaneers." },
  { name: "Fairborn City School District", category: "Education", subcategory: "K-12", url: "https://www.fairborn.k12.oh.us/", description: "Home of the Skyhawks, with district offices at 306 E. Whittier Avenue in Fairborn." },
  { name: "Beavercreek City Schools", category: "Education", subcategory: "K-12", url: "https://www.beavercreek.k12.oh.us/page/welcome", description: "Greene County's largest district, serving over 8,000 students from offices at 4029 Executive Drive." },
  { name: "Bellbrook-Sugarcreek Schools", category: "Education", subcategory: "K-12", url: "https://www.sugarcreek.k12.oh.us/", description: "Sugarcreek Local district serving Bellbrook and Sugarcreek Township, home of the Golden Eagles." },
  { name: "Yellow Springs Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.ysschools.org/", description: "Bulldogs district with offices at 888 Dayton Street in Yellow Springs." },
  { name: "Cedar Cliff Local Schools", category: "Education", subcategory: "K-12", url: "https://www.cedarcliffschools.net/", description: "Cedarville-area district serving the county's northeast, home of the Cedarville Indians." },
  { name: "Greeneview Local Schools", category: "Education", subcategory: "K-12", url: "https://www.greeneview.org/", description: "District headquartered at 4 South Charleston Road in Jamestown, serving the county's rural southeast." },
  { name: "Greene County Career Center", category: "Education", subcategory: "Career-Tech", url: "https://www.greeneccc.com/Overview.aspx", description: "Career-technical school on West Enon Road in Xenia Township, open to county students entering their junior year." },
  { name: "Wright State University", category: "Education", subcategory: "Higher Ed", url: "https://www.wright.edu/", description: "Public university at 3640 Colonel Glenn Hwy., named for the Wright brothers and home of the Raiders." },
  { name: "Central State University", category: "Education", subcategory: "Higher Ed", url: "https://www.centralstate.edu/", description: "Wilberforce institution billed as Ohio's only public HBCU and an 1890 land-grant university, home of the Marauders." },
  { name: "Cedarville University", category: "Education", subcategory: "Higher Ed", url: "https://www.cedarville.edu/", description: "Baptist university founded in 1887 at 251 N. Main St. in Cedarville, serving about 7,300 students." },
  { name: "Antioch College", category: "Education", subcategory: "Higher Ed", url: "https://antiochcollege.edu/", description: "Liberal arts college at One Morgan Place in Yellow Springs, requiring three full-time co-op terms to graduate." },
  { name: "Clark State College – Beavercreek", category: "Education", subcategory: "Higher Ed", url: "https://www.clarkstate.edu/community/locations/", description: "Clark State's Greene County campuses at 3775 Pentagon Blvd. in Beavercreek and 334 Progress Drive in Xenia." },
  // ---------- Health ----------
  { name: "Greene County Public Health", category: "Health", subcategory: "Public Health", url: "https://www.greenecophoh.gov/", description: "County health district at 360 Wilson Drive in Xenia, open weekdays 8:00 am to 4:00 pm." },
  { name: "Kettering Health Greene Memorial", category: "Health", subcategory: "Hospital", url: "https://ketteringhealth.org/locations/kettering-health-greene-memorial-mc003/", description: "Xenia hospital at 1141 North Monroe Dr., a designated primary stroke center with 24/7 emergency care." },
  { name: "Soin Medical Center", category: "Health", subcategory: "Hospital", url: "https://ketteringhealth.org/locations/soin-medical-center-kettering-health-mc005/", description: "Kettering Health hospital at 3535 Pentagon Blvd. in Beavercreek, with a cancer center of 20 infusion bays." },
  { name: "Five Rivers Health Centers – Xenia", category: "Health", subcategory: "Community Health", url: "https://www.fiverivershealthcenters.org/locations", description: "Federally Qualified Health Center at 34 South Allison Avenue in Xenia offering primary, pediatric, women's and behavioral care." },
  { name: "Mental Health Recovery Board of Clark, Greene & Madison Counties", category: "Health", subcategory: "Behavioral Health", url: "https://www.mhrb.org/", description: "Greene County's ADAMH board, funding prevention, treatment and 24/7 crisis support from offices in Springfield." },
  // ---------- Business & Economy ----------
  { name: "Xenia Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://xacc.com/", description: "Chamber at 334 W. Market St. in Xenia, representing more than 400 investors." },
  { name: "Fairborn Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://fairbornchamber.com/", description: "Chamber of commerce at 12 North Central Avenue in Fairborn." },
  { name: "Beavercreek Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.beavercreekchamber.org/", description: "Chamber at 3210 Beaver-Vu Dr., serving Greene County's largest business community." },
  { name: "Greene County Department of Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.greenecountyohio.gov/1568/Department-of-Development", description: "County department handling economic development, planning and community relationships for residents and businesses." },
  { name: "Greene County Convention & Visitors Bureau", category: "Business & Economy", subcategory: "Tourism", url: "https://www.greenecountyohio.org/", description: "County tourism bureau at 1221 Meadow Bridge Drive in Beavercreek, promoting Greene County attractions and events." },
  // ---------- Community & Social ----------
  { name: "Greene County Job & Family Services", category: "Community & Social", subcategory: "Social Services", url: "https://www.greenecountyohio.gov/279/Job-Family-Services", description: "Agency at 541 Ledbetter Rd. in Xenia handling children services, child support and public assistance." },
  { name: "OhioMeansJobs Greene County", category: "Community & Social", subcategory: "Workforce", url: "https://www.greenecountyohio.gov/592/OhioMeansJobs-Greene-County", description: "Workforce center at 581 Ledbetter Rd. in Xenia offering job search help, mock interviews, free training and employer recruiting." },
  { name: "OSU Extension – Greene County", category: "Community & Social", subcategory: "Extension", url: "https://greene.osu.edu/", description: "Ohio State Extension office at 100 Fairground Road in Xenia, running 4-H, agriculture and nutrition education programs." },
  { name: "Greene County Historical Society", category: "Community & Social", subcategory: "History", url: "https://gchsxo.org/", description: "Multi-building museum campus at 74 W. Church St. in Xenia, including the Galloway Log House and a Victorian home." },
  { name: "Greene County Council on Aging", category: "Community & Social", subcategory: "Seniors", url: "https://www.gccoa.org/", description: "Nonprofit promoting independence and quality of life for Greene County seniors and their caregivers." },
  // ---------- Recreation & Tourism ----------
  { name: "Greene County Parks & Trails", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.gcparkstrails.com/", description: "County park district at 635 Dayton-Xenia Rd., managing Narrows Reserve, Spring Lakes Park, Pearl's Fen and the county trail network." },
  { name: "Greene County Fairgrounds", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.greenecountyfairgrounds.com/", description: "Xenia fairgrounds and event center hosting the annual Greene County Fair plus year-round events and concerts." },
  { name: "John Bryan State Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/john-bryan-state-park", description: "752-acre state park north of Yellow Springs, created from the Riverside Farm that businessman John Bryan left to Ohio in 1918." },
  { name: "Clifton Gorge State Nature Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/clifton-gorge-state-nature-preserve", description: "268-acre National Natural Landmark protecting two miles of the Little Miami River, with three miles of hiking trails." },
  { name: "National Afro-American Museum & Cultural Center", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.ohiohistory.org/visit/browse-historical-sites/national-afro-american-museum-cultural-center/", description: "Ohio History Connection site at 1350 Brush Row Road in Wilberforce, opened in 1988 with over 10,000 artifacts and artworks." },
  // ---------- News & Media ----------
  { name: "The Xenia Gazette", category: "News & Media", subcategory: "Newspaper", url: "https://www.xeniagazette.com/", description: "Xenia's daily newspaper, sharing a newsroom with the Fairborn Daily Herald under the Greene County News banner." },
  { name: "Fairborn Daily Herald", category: "News & Media", subcategory: "Newspaper", url: "https://www.fairborndailyherald.com/", description: "Greene County News publication covering Fairborn, Xenia, Beavercreek and Cedarville." },
  { name: "WYSO 91.3 FM", category: "News & Media", subcategory: "Radio", url: "https://www.wyso.org/", description: "Community-owned NPR member station licensed in Yellow Springs, part of Miami Valley Public Media." },
  { name: "Dayton Daily News – Greene County", category: "News & Media", subcategory: "Newspaper", url: "https://www.daytondailynews.com/community/greene-county/", description: "Daily coverage of Greene County government, public safety, schools and business." },
];
