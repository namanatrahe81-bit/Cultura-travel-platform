import * as THREE from 'three';

const cultures = [
 {name:'India',region:'Asia',place:'South Asia',tagline:'A living mosaic of languages, faiths and traditions.',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=85',summary:'India’s cultural life is shaped by thousands of years of history and extraordinary regional diversity. Music, dance, craft, storytelling and community celebrations remain important parts of everyday life.',festival:'Diwali, Holi, Eid, Pongal and Durga Puja',food:'Biryani, dosa, thali, regional breads and sweets',traditions:'Classical dance, yoga, rangoli, handloom crafts and family celebrations',fact:'India recognises 22 scheduled languages, alongside hundreds of languages and dialects spoken across the country.'},
 {name:'Japan',region:'Asia',place:'East Asia',tagline:'Where thoughtful traditions meet modern imagination.',image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85',summary:'Japanese culture includes seasonal festivals, refined arts, regional foodways and a strong appreciation for craft. Contemporary design and technology coexist with customs passed through generations.',festival:'Hanami, Gion Matsuri, Obon and New Year celebrations',food:'Sushi, ramen, soba, okonomiyaki and wagashi',traditions:'Tea ceremony, calligraphy, ikebana, matsuri and onsen culture',fact:'Hanami, the tradition of enjoying cherry blossoms, is a seasonal gathering with centuries of history.'},
 {name:'Morocco',region:'Africa',place:'North Africa',tagline:'A crossroads of Amazigh, Arab, African and Mediterranean heritage.',image:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=900&q=85',summary:'Moroccan culture reflects Amazigh roots and centuries of exchange across Africa and the Mediterranean. Its cities are known for intricate design, lively markets, craft traditions and hospitality.',festival:'Yennayer, Eid celebrations and the Festival of World Sacred Music',food:'Tagine, couscous, pastilla and mint tea',traditions:'Zellige tilework, weaving, storytelling and shared mint tea',fact:'Traditional Moroccan zellige is assembled from individually cut geometric tiles.'},
 {name:'Italy',region:'Europe',place:'Southern Europe',tagline:'Art, regional identities and the ritual of gathering around food.',image:'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=85',summary:'Italy’s cultural heritage stretches from Roman history and Renaissance art to distinctive local dialects, festivals, music and food traditions. Regional identity plays a central role in daily life.',festival:'Venice Carnival, Palio di Siena and local patron-saint festivals',food:'Pasta, risotto, regional cheeses, pizza and gelato',traditions:'Passeggiata, artisan crafts, opera and long shared meals',fact:'Italy has dozens of UNESCO World Heritage properties, including historic cities, archaeological sites and cultural landscapes.'},
 {name:'Maasai communities',region:'Africa',place:'East Africa',tagline:'Distinctive beadwork, pastoral knowledge and community identity.',image:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85',summary:'Maasai communities live across parts of Kenya and Tanzania. Cultural practices vary among communities and individuals; beadwork, oral knowledge, livestock traditions and ceremonial dress are important in many contexts.',festival:'Community ceremonies and age-set celebrations, varying by community',food:'Traditional foods vary by region and household',traditions:'Beadwork, oral histories, songs and pastoral knowledge',fact:'Maasai beadwork can communicate identity and social meaning, with colours and patterns varying by maker and context.'},
 {name:'Brazil',region:'Americas',place:'South America',tagline:'A diverse cultural landscape shaped by Indigenous, African and global roots.',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=85',summary:'Brazil is home to many Indigenous peoples and a broad mix of African, European, Asian and other cultural influences. Regional music, dance, cuisine and community celebrations vary widely.',festival:'Carnival, Festa Junina and regional religious celebrations',food:'Feijoada, pão de queijo, moqueca and açaí preparations',traditions:'Samba, capoeira, regional crafts and community festivals',fact:'Capoeira combines movement, music and cultural history and developed among Afro-Brazilian communities.'},
 {name:'Mexico',region:'Americas',place:'North America',tagline:'Indigenous heritage, lively public celebrations and regional cuisine.',image:'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=900&q=85',summary:'Mexico’s cultural traditions reflect diverse Indigenous peoples and centuries of cultural exchange. Food, textiles, music, architecture and community celebrations differ greatly from region to region.',festival:'Día de Muertos, Guelaguetza and Las Posadas',food:'Mole, tamales, pozole and regional corn dishes',traditions:' papel picado, folk art, mariachi and family remembrance rituals',fact:'Día de Muertos traditions honour deceased loved ones and vary between communities and families.'},
 {name:'Türkiye',region:'Middle East',place:'Anatolia and Southeast Europe',tagline:'A meeting point of histories, landscapes and living traditions.',image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85',summary:'Türkiye’s culture reflects Anatolian, Ottoman, Mediterranean, Balkan and other influences. Its music, architecture, regional food and hospitality traditions are diverse and continually evolving.',festival:'Ramadan and Eid celebrations, Hıdırellez and regional festivals',food:'Meze, kebab varieties, gözleme, baklava and Turkish tea',traditions:'Ebru marbling, carpet weaving, shadow theatre and coffee culture',fact:'Turkish coffee culture is recognised by UNESCO as intangible cultural heritage.'}
];


const indianStates = [
['Andhra Pradesh','Amaravati','Ugadi; Sankranti; Tirupati Brahmotsavam','Pulihora; gongura dishes; pesarattu','Kuchipudi dance; Kalamkari textile art','Coastal traditions, Telugu literature and temple architecture shape many regional identities.'],
['Arunachal Pradesh','Itanagar','Losar; Solung; Nyokum','Thukpa; momos; local millet dishes','Bamboo craft; tribal weaving; folk dances','Home to many Indigenous communities, each with distinct languages, festivals and customs.'],
['Assam','Dispur','Bohag Bihu; Magh Bihu; Ambubachi Mela','Assamese thali; khar; pitha','Sattriya dance; Muga silk; bamboo craft','The Brahmaputra valley, tea gardens and Vaishnavite satras are important cultural landmarks.'],
['Bihar','Patna','Chhath Puja; Sonepur Mela; Sama-Chakeva','Litti chokha; thekua; sattu dishes','Madhubani painting; Manjusha art; folk theatre','Ancient learning centres and Buddhist and Jain heritage are central to the region’s history.'],
['Chhattisgarh','Raipur','Bastar Dussehra; Hareli; Madai festivals','Chila; fara; dehati dishes','Dhokra metal craft; bell-metal work; Panthi dance','Forest communities, oral traditions and distinctive metalwork contribute to a rich cultural landscape.'],
['Goa','Panaji','Carnival; Shigmo; Sao Joao','Fish curry rice; bebinca; xacuti','Fugdi; mando music; Indo-Portuguese architecture','Konkan roots and Portuguese-era influences meet in Goa’s food, music and architecture.'],
['Gujarat','Gandhinagar','Navratri; Uttarayan; Rann Utsav','Dhokla; thepla; undhiyu','Garba; bandhani; Patola weaving','Garba dance, craft traditions and historic trading ports are prominent parts of Gujarati culture.'],
['Haryana','Chandigarh','Teej; Baisakhi; Surajkund Mela','Bajra roti; kadhi; churma','Saang folk theatre; Phag dance; Phulkari','Agrarian traditions, folk music and wrestling akharas are visible in many communities.'],
['Himachal Pradesh','Shimla (summer); Dharamshala (winter)','Kullu Dussehra; Losar; Minjar Fair','Dham; siddu; madra','Kullu shawls; Nati dance; wood carving','Mountain geography has shaped local architecture, wool crafts and village festivals.'],
['Jharkhand','Ranchi','Sarhul; Karma; Sohrai','Dhuska; chilka roti; rugra','Sohrai painting; tribal music; bamboo craft','Adivasi communities preserve diverse languages, ecological knowledge and seasonal celebrations.'],
['Karnataka','Bengaluru','Mysuru Dasara; Ugadi; Kambala','Bisi bele bath; ragi mudde; Mysore pak','Yakshagana; Mysore painting; sandalwood craft','Kannada literary traditions, Vijayanagara heritage and varied coastal and Deccan cuisines stand out.'],
['Kerala','Thiruvananthapuram','Onam; Vishu; Thrissur Pooram','Sadya; appam; puttu','Kathakali; Mohiniyattam; coir craft','Backwaters, spice-trade history and classical performance traditions influence regional life.'],
['Madhya Pradesh','Bhopal','Khajuraho Dance Festival; Bhagoria; Tansen Samaroh','Poha-jalebi; dal bafla; bhutte ka kees','Gond art; Bagh print; tribal dance','Central India’s cultural heritage includes historic temples, forts, forest communities and painting traditions.'],
['Maharashtra','Mumbai','Ganeshotsav; Gudi Padwa; Pandharpur Wari','Vada pav; puran poli; misal pav','Lavani; Powada; Paithani weaving','Marathi theatre, Bhakti traditions, forts and a diverse Konkan-to-Deccan food culture are important.'],
['Manipur','Imphal','Yaoshang; Lai Haraoba; Ningol Chakouba','Eromba; singju; chak-hao rice','Manipuri classical dance; handloom; Thang-Ta','The state is known for classical dance, handwoven textiles and distinctive community festivals.'],
['Meghalaya','Shillong','Wangala; Nongkrem; Shad Suk Mynsiem','Jadoh; tungrymbai; pukhlein','Khasi and Garo music; bamboo craft; weaving','Khasi, Garo and Jaintia communities have rich musical traditions and matrilineal customs in many groups.'],
['Mizoram','Aizawl','Chapchar Kut; Mim Kut; Pawl Kut','Bai; sawhchiar; bamboo-shoot dishes','Cheraw bamboo dance; puan weaving','Community celebrations, choral music and finely woven puan textiles are cultural highlights.'],
['Nagaland','Kohima','Hornbill Festival; Moatsu; Sekrenyi','Smoked pork; axone dishes; sticky rice','Tribal shawls; wood carving; folk songs','The many Naga communities have distinct traditions, textiles, languages and village histories.'],
['Odisha','Bhubaneswar','Rath Yatra; Raja Parba; Nuakhai','Pakhala; dalma; chhena poda','Odissi dance; Pattachitra; silver filigree','Jagannath traditions, temple architecture and coastal craft lineages are prominent.'],
['Punjab','Chandigarh','Baisakhi; Lohri; Gurpurab','Sarson da saag; makki di roti; chole','Bhangra; Giddha; Phulkari embroidery','Punjabi poetry, Sikh heritage, energetic folk music and agricultural celebrations shape cultural life.'],
['Rajasthan','Jaipur','Gangaur; Teej; Pushkar Fair','Dal baati churma; gatte ki sabzi; ker sangri','Ghoomar; miniature painting; blue pottery','Desert landscapes, historic forts, folk performance and region-specific textiles are well known.'],
['Sikkim','Gangtok','Losar; Saga Dawa; Pang Lhabsol','Momos; thukpa; gundruk','Thangka painting; mask dances; carpet weaving','Lepcha, Bhutia and Nepali cultural influences meet in Himalayan festivals and food.'],
['Tamil Nadu','Chennai','Pongal; Tamil New Year; Karthigai Deepam','Idli; dosa; Chettinad dishes','Bharatanatyam; kolam; bronze casting','Tamil literature, Dravidian temple architecture and classical music have long histories.'],
['Telangana','Hyderabad','Bathukamma; Bonalu; Sammakka-Saralamma Jatara','Hyderabadi biryani; sarva pindi; sakinalu','Perini dance; Cheriyal scrolls; Bidriware','Deccan history, Telugu traditions and Hyderabad’s layered food culture are important influences.'],
['Tripura','Agartala','Kharchi Puja; Garia Puja; Ker Puja','Mui borok; chakhwi; wahan mosdeng','Hojagiri dance; bamboo craft; handloom','Bengali and Indigenous Tripuri traditions both contribute to the state’s cultural life.'],
['Uttar Pradesh','Lucknow','Kumbh Mela; Holi; Dev Deepawali','Awadhi kebabs; kachori; peda','Kathak; chikankari; Banarasi weaving','The Ganga plain holds important pilgrimage cities, historic courts and celebrated textile crafts.'],
['Uttarakhand','Dehradun','Harela; Nanda Devi Raj Jat; Phool Dei','Kafuli; chainsoo; aloo ke gutke','Aipan art; Chholiya dance; wool weaving','Garhwali and Kumaoni traditions reflect Himalayan ecology, pilgrimage routes and seasonal festivals.'],
['West Bengal','Kolkata','Durga Puja; Poila Boishakh; Poush Mela','Machher jhol; shorshe ilish; mishti doi','Baul music; terracotta craft; alpana','Bengali literature, theatre, visual arts and Durga Puja are influential cultural expressions.'],
['Andaman and Nicobar Islands','Port Blair (Sri Vijaya Puram)','Island community festivals; Island Tourism Festival','Seafood; coconut-based dishes','Cane and shell craft; island music','The archipelago has many island communities; Indigenous peoples’ rights and privacy deserve particular respect.'],
['Chandigarh','Chandigarh','Baisakhi; Rose Festival','Punjabi and North Indian cuisine','Modernist architecture; gardens; cultural festivals','A planned city known for modernist architecture and a mix of Punjabi and wider North Indian culture.'],
['Dadra and Nagar Haveli and Daman and Diu','Daman','Tarpa dance celebrations; Nariyal Poornima; local fairs','Seafood; Gujarati and coastal dishes','Warli painting; tribal dance; coastal craft','The union territory brings together tribal, Gujarati, Marathi and Portuguese-influenced heritage in different areas.'],
['Delhi','New Delhi','Diwali; Eid; Gurpurab; Qutub Festival','Chaat; kebabs; parathas','Qawwali; craft bazaars; historic architecture','Delhi’s layers include Sultanate, Mughal, colonial and contemporary histories and communities from across India.'],
['Jammu and Kashmir','Srinagar (summer); Jammu (winter)','Tulip Festival; Eid; Lohri','Rogan josh; kahwa; dum aloo','Pashmina weaving; papier-mâché; sufiana music','Kashmiri, Dogra, Gujjar, Pahari and other communities have distinct cultural traditions.'],
['Ladakh','Leh','Hemis Festival; Losar; Dosmoche','Thukpa; skyu; butter tea','Thangka painting; mask dances; pashmina craft','High-altitude Himalayan and Tibetan Buddhist influences shape many local arts and festivals.'],
['Lakshadweep','Kavaratti','Eid celebrations; island community festivals','Tuna dishes; coconut-based food','Lava dance; boat craft; coir work','Island life, maritime links and local language traditions shape the archipelago’s culture.'],
['Puducherry','Puducherry','Pongal; Bastille Day events; local temple festivals','Tamil coastal cuisine; French-inspired baking','Tamil arts; colonial-era architecture; handcraft','Tamil heritage and French colonial history are visible in different neighbourhoods and traditions.']
].map(([name,capital,festivals,food,arts,about])=>({name,capital,festivals,food,arts,about,kind:['Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry'].includes(name)?'Union Territory':'State'}));

const countryExtras = {
 'India':{region:'South Asia',language:'Hindi and English for Union official purposes; hundreds of languages are spoken across the country.',currency:'Indian rupee (INR)',heritage:'Indus Valley civilisation, ancient learning traditions, historic kingdoms, Sufi and Bhakti movements, and a vast range of living arts.',travel:'Explore regional heritage respectfully; customs, languages and food can vary greatly even between neighbouring districts.'},
 'Japan':{region:'East Asia',language:'Japanese',currency:'Japanese yen (JPY)',heritage:'Seasonal festivals, shrine and temple traditions, craft, literature, theatre and contemporary design.',travel:'Learn local etiquette, follow signs at sacred sites and be considerate in quiet public spaces.'},
 'Brazil':{region:'South America',language:'Portuguese',currency:'Brazilian real (BRL)',heritage:'Indigenous cultures, Afro-Brazilian traditions, regional music, football, crafts and diverse ecosystems.',travel:'Regional traditions differ widely from the Amazon to the coast and southern cities.'},
 'Italy':{region:'Southern Europe',language:'Italian and regional languages',currency:'Euro (EUR)',heritage:'Roman and Renaissance heritage, regional foodways, opera, design, architecture and local festivals.',travel:'Food and customs are strongly regional; support local artisans and heritage sites.'},
 'Morocco':{region:'North Africa',language:'Arabic and Amazigh; French is also widely used in some contexts',currency:'Moroccan dirham (MAD)',heritage:'Amazigh roots, Arab and African connections, medinas, tilework, weaving, music and cuisine.',travel:'Ask permission before photographing people and dress thoughtfully when visiting religious places.'},
 'Mexico':{region:'North America',language:'Spanish and many Indigenous languages',currency:'Mexican peso (MXN)',heritage:'Indigenous civilisations, regional languages, food traditions, muralism, music and community celebrations.',travel:'Traditions such as Día de Muertos vary between regions and families; avoid treating them as costumes.'},
 'Kenya':{region:'East Africa',language:'Swahili and English; many community languages',currency:'Kenyan shilling (KES)',heritage:'Many communities with distinctive languages, music, craft, storytelling and coastal Swahili heritage.',travel:'Learn about the specific community and place you visit rather than assuming one culture represents all Kenya.'},
 'Türkiye':{region:'Anatolia and Southeast Europe',language:'Turkish and minority languages',currency:'Turkish lira (TRY)',heritage:'Anatolian, Ottoman, Mediterranean, Balkan and other influences in food, music, architecture and craft.',travel:'Regional identity varies widely; respect customs at mosques and historic sites.'}
};

const grid = document.getElementById('cultureGrid');
const searchInput = document.getElementById('cultureSearch');
const filters = document.getElementById('filters');
const emptyState = document.getElementById('emptyState');
const modal = document.getElementById('cultureModal');
const modalContent = document.getElementById('modalContent');
let activeRegion = 'All';

function escapeHTML(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function renderCultures() {
  const query = searchInput.value.trim().toLowerCase();
  const found = cultures.filter(c => {
    const matchesRegion = activeRegion === 'All' || c.region === activeRegion;
    const searchable = [c.name,c.region,c.place,c.tagline,c.summary,c.festival,c.food,c.traditions].join(' ').toLowerCase();
    return matchesRegion && searchable.includes(query);
  });
  grid.innerHTML = found.map((c, i) => `<article class="culture-card" tabindex="0" role="button" data-name="${escapeHTML(c.name)}" aria-label="Explore ${escapeHTML(c.name)}" style="animation-delay:${i*55}ms"><div class="card-image"><img loading="lazy" src="${c.image}" alt="Cultural landscape representing ${escapeHTML(c.name)}" onerror="this.style.display='none'"><span class="card-region">${escapeHTML(c.region.toUpperCase())}</span></div><div class="card-body"><span class="card-meta">${escapeHTML(c.place)}</span><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.tagline)}</p><div class="card-bottom"><span>Discover culture</span><span>↗</span></div></div></article>`).join('');
  emptyState.hidden = found.length > 0;
}
const journeyPage = document.getElementById('journeyPage');
const homeSections = [...document.querySelectorAll('main > section:not(#journeyPage)')];
function goToJourney(html, hash, push=true) {
  homeSections.forEach(section => section.hidden = true);
  journeyPage.hidden = false;
  journeyPage.innerHTML = html;
  if (push) history.pushState({journey:true}, '', hash);
  window.scrollTo({top:0,behavior:'smooth'});
  journeyPage.querySelectorAll('[data-go-back]').forEach(button => button.addEventListener('click', () => history.back()));
  journeyPage.querySelectorAll('[data-open-state]').forEach(button => button.addEventListener('click', () => openState(button.dataset.openState)));
  journeyPage.querySelectorAll('[data-open-country]').forEach(button => button.addEventListener('click', () => openCountry(button.dataset.openCountry)));
  // Stagger the cards and story panels on every dynamically-created destination page.
  journeyPage.querySelectorAll('.place-card, .state-story-grid article, .journey-detail-grid .detail-box').forEach((item, index) => item.style.setProperty('--i', index));
  // Subtle pointer-based 3D tilt on larger screens; mobile keeps simple touch-friendly motion.
  if (window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    journeyPage.querySelectorAll('.place-card, .state-story-grid article, .journey-detail-grid .detail-box').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.transform = `perspective(750px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-3px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }
  const stateSearch = journeyPage.querySelector('#stateSearch');
  if (stateSearch) stateSearch.addEventListener('input', () => {
    const q = stateSearch.value.trim().toLowerCase();
    journeyPage.querySelectorAll('.place-card').forEach(card => card.hidden = !card.dataset.search.includes(q));
  });
}
function returnHome(updateHistory=false) {
  journeyPage.hidden = true;
  homeSections.forEach(section => section.hidden = false);
  if(updateHistory) history.pushState({}, '', '#home');
  window.scrollTo({top:0,behavior:'smooth'});
}
function openCountry(name, push=true) {
  const c = cultures.find(item => item.name === name);
  if (!c) return;
  const extra = countryExtras[name] || {region:c.place,language:'Multiple languages and regional varieties',currency:'Varies by country',heritage:c.summary,travel:'Local customs vary. Learn from local sources and respect community traditions.'};
  if (name === 'India') {
    const states = indianStates.filter(s => s.kind === 'State');
    const uts = indianStates.filter(s => s.kind === 'Union Territory');
    const stateArt = {
      'Andhra Pradesh':['photo-1582510003544-4d00b7f74220','✺'],'Arunachal Pradesh':['photo-1626621341517-bbf3d9990a23','⛰'],'Assam':['photo-1561361513-2d000a50f0dc','❋'],'Bihar':['photo-1561361513-2d000a50f0dc','✧'],'Chhattisgarh':['photo-1518005020951-eccb494ad742','❖'],'Goa':['photo-1512343879784-a960bf40e7f2','☼'],'Gujarat':['photo-1514222134-b57cbb8ce073','✺'],'Haryana':['photo-1595658658481-d53d3f999875','✦'],'Himachal Pradesh':['photo-1626621341517-bbf3d9990a23','⛰'],'Jharkhand':['photo-1518005020951-eccb494ad742','❖'],'Karnataka':['photo-1606293926075-69a00db159b0','✧'],'Kerala':['photo-1602216056096-3b40cc0c9944','🌿'],'Madhya Pradesh':['photo-1564507592333-c60657eea523','✧'],'Maharashtra':['photo-1595658658481-d53d3f999875','✺'],'Manipur':['photo-1626621341517-bbf3d9990a23','❋'],'Meghalaya':['photo-1626621341517-bbf3d9990a23','☁'],'Mizoram':['photo-1626621341517-bbf3d9990a23','⛰'],'Nagaland':['photo-1626621341517-bbf3d9990a23','✦'],'Odisha':['photo-1582510003544-4d00b7f74220','✺'],'Punjab':['photo-1595658658481-d53d3f999875','✦'],'Rajasthan':['photo-1477587458883-47145ed94245','☀'],'Sikkim':['photo-1626621341517-bbf3d9990a23','⛰'],'Tamil Nadu':['photo-1582510003544-4d00b7f74220','✺'],'Telangana':['photo-1564507592333-c60657eea523','✧'],'Tripura':['photo-1561361513-2d000a50f0dc','❋'],'Uttar Pradesh':['photo-1564507592333-c60657eea523','✧'],'Uttarakhand':['photo-1626621341517-bbf3d9990a23','⛰'],'West Bengal':['photo-1558431382-27e303142255','✦'],
      'Andaman and Nicobar Islands':['photo-1510414842594-a61c69b5ae57','〰'],'Chandigarh':['photo-1518005020951-eccb494ad742','◇'],'Dadra and Nagar Haveli and Daman and Diu':['photo-1512343879784-a960bf40e7f2','〰'],'Delhi':['photo-1564507592333-c60657eea523','✧'],'Jammu and Kashmir':['photo-1626621341517-bbf3d9990a23','⛰'],'Ladakh':['photo-1626621341517-bbf3d9990a23','☼'],'Lakshadweep':['photo-1510414842594-a61c69b5ae57','〰'],'Puducherry':['photo-1512343879784-a960bf40e7f2','☼']
    };
    const card = (s, i) => { const art=stateArt[s.name]||['photo-1524492412937-b28074a5d7da','✧']; const photo=`https://images.unsplash.com/${art[0]}?auto=format&fit=crop&w=700&q=80`; return `<button class="place-card state-tile state-tile-${i%6}" data-open-state="${escapeHTML(s.name)}" data-search="${escapeHTML((s.name+' '+s.capital+' '+s.festivals+' '+s.food+' '+s.arts+' '+s.about).toLowerCase())}" style="--tile-image:url('${photo}');--tile-index:${i};"><span class="tile-number">${String(i+1).padStart(2,'0')}</span><span class="tile-symbol">${art[1]}</span><span class="place-type">${s.kind.toUpperCase()}</span><h3>${escapeHTML(s.name)}</h3><p>⌖ ${escapeHTML(s.capital)}</p><span class="place-link">Explore region <b>↗</b></span></button>`; };
    goToJourney(`<div class="journey-top"><button class="back-button" data-go-back>← Back</button><span class="section-kicker">COUNTRY EXPLORER · SOUTH ASIA</span></div><div class="journey-hero india-hero" style="--journey-image:url('${c.image}')"><div><span class="section-kicker">✦ NAMASTE · INDIA · 01 / 195+</span><h1>Discover <em>India.</em></h1><p>${escapeHTML(c.summary)}</p><div class="journey-facts"><span><b>Capital</b> New Delhi</span><span><b>Languages</b> Hundreds spoken</span><span><b>Regions to explore</b> ${states.length} states · ${uts.length} territories</span></div></div><span class="india-hero-stamp">भारत<br><small>BHARAT</small></span></div><div class="india-explore-intro"><span class="section-kicker">A COUNTRY OF MANY WORLDS</span><p>From Himalayan valleys to tropical coastlines, each region has its own rhythm, flavours, art and stories.</p><div class="india-progress"><span></span></div></div><div class="journey-heading"><div><span class="section-kicker">REGIONAL DISCOVERY</span><h2>Pick your next adventure.</h2><p>Every tile has a different visual character. Tap any region for its own cultural story.</p></div><input id="stateSearch" class="journey-search" type="search" placeholder="Search state, food, art, festival…" aria-label="Search states"></div><div class="state-section-label"><h3 class="group-title">01 / THE 28 STATES</h3><span>Choose a region ↘</span></div><div class="place-grid state-atlas-grid">${states.map(card).join('')}</div><div class="state-section-label"><h3 class="group-title">02 / UNION TERRITORIES</h3><span>Islands, cities & frontier landscapes</span></div><div class="place-grid state-atlas-grid territory-grid">${uts.map((s,i)=>card(s,i+28)).join('')}</div><p class="cultural-note">Cultural notes are an introduction. Communities, languages and customs vary within every region and continue to evolve.</p>`, '#country/India', push);
  } else {
    goToJourney(`<div class="journey-top"><button class="back-button" data-go-back>← Back</button><span class="section-kicker">COUNTRY EXPLORER · ${escapeHTML(extra.region.toUpperCase())}</span></div><div class="journey-hero" style="--journey-image:url('${c.image}')"><div><span class="section-kicker">CULTURAL PROFILE</span><h1>Discover <em>${escapeHTML(c.name)}.</em></h1><p>${escapeHTML(c.summary)}</p><div class="journey-facts"><span><b>Region</b> ${escapeHTML(extra.region)}</span><span><b>Language</b> ${escapeHTML(extra.language)}</span><span><b>Currency</b> ${escapeHTML(extra.currency)}</span></div></div></div><div class="detail-grid journey-detail-grid"><div class="detail-box"><h4>FESTIVALS & CELEBRATIONS</h4><p>${escapeHTML(c.festival)}</p></div><div class="detail-box"><h4>FOOD & FLAVOURS</h4><p>${escapeHTML(c.food)}</p></div><div class="detail-box"><h4>ARTS & TRADITIONS</h4><p>${escapeHTML(c.traditions)}</p></div><div class="detail-box"><h4>HISTORY & HERITAGE</h4><p>${escapeHTML(extra.heritage)}</p></div><div class="detail-box"><h4>TRAVEL WITH RESPECT</h4><p>${escapeHTML(extra.travel)}</p></div><div class="detail-box"><h4>DID YOU KNOW?</h4><p>${escapeHTML(c.fact)}</p></div></div><div class="next-explore"><h2>Continue exploring</h2><p>Discover another culture and compare traditions around the world.</p><button class="button button-gold" data-go-back>Back to cultures ↗</button></div><p class="cultural-note">This page is an introduction to a diverse, evolving culture. Practices differ between regions, communities and individuals.</p>`, '#country/'+encodeURIComponent(name), push);
  }
}
function openState(name, push=true) {
  const s = indianStates.find(item => item.name === name);
  if (!s) return;
  const imageMap = {
    'Andhra Pradesh':'photo-1582510003544-4d00b7f74220','Arunachal Pradesh':'photo-1626621341517-bbf3d9990a23','Assam':'photo-1561361513-2d000a50f0dc','Bihar':'photo-1561361513-2d000a50f0dc','Chhattisgarh':'photo-1518005020951-eccb494ad742','Goa':'photo-1512343879784-a960bf40e7f2','Gujarat':'photo-1514222134-b57cbb8ce073','Haryana':'photo-1595658658481-d53d3f999875','Himachal Pradesh':'photo-1626621341517-bbf3d9990a23','Jharkhand':'photo-1518005020951-eccb494ad742','Karnataka':'photo-1606293926075-69a00db159b0','Kerala':'photo-1602216056096-3b40cc0c9944','Madhya Pradesh':'photo-1564507592333-c60657eea523','Maharashtra':'photo-1595658658481-d53d3f999875','Manipur':'photo-1626621341517-bbf3d9990a23','Meghalaya':'photo-1626621341517-bbf3d9990a23','Mizoram':'photo-1626621341517-bbf3d9990a23','Nagaland':'photo-1626621341517-bbf3d9990a23','Odisha':'photo-1582510003544-4d00b7f74220','Punjab':'photo-1595658658481-d53d3f999875','Rajasthan':'photo-1477587458883-47145ed94245','Sikkim':'photo-1626621341517-bbf3d9990a23','Tamil Nadu':'photo-1582510003544-4d00b7f74220','Telangana':'photo-1564507592333-c60657eea523','Tripura':'photo-1561361513-2d000a50f0dc','Uttar Pradesh':'photo-1564507592333-c60657eea523','Uttarakhand':'photo-1626621341517-bbf3d9990a23','West Bengal':'photo-1558431382-27e303142255','Andaman and Nicobar Islands':'photo-1510414842594-a61c69b5ae57','Chandigarh':'photo-1518005020951-eccb494ad742','Dadra and Nagar Haveli and Daman and Diu':'photo-1512343879784-a960bf40e7f2','Delhi':'photo-1564507592333-c60657eea523','Jammu and Kashmir':'photo-1626621341517-bbf3d9990a23','Ladakh':'photo-1626621341517-bbf3d9990a23','Lakshadweep':'photo-1510414842594-a61c69b5ae57','Puducherry':'photo-1512343879784-a960bf40e7f2'
  };
  const image = `https://images.unsplash.com/${imageMap[name] || 'photo-1524492412937-b28074a5d7da'}?auto=format&fit=crop&w=1600&q=85`;
  const allRegions = indianStates.filter(item => item.kind === s.kind);
  const currentIndex = allRegions.findIndex(item => item.name === s.name);
  const previous = allRegions[(currentIndex - 1 + allRegions.length) % allRegions.length];
  const next = allRegions[(currentIndex + 1) % allRegions.length];
  const iconMap = {'Maharashtra':'✺','Rajasthan':'☀','Kerala':'🌿','Goa':'〰','Himachal Pradesh':'⛰','Uttarakhand':'⛰','Sikkim':'⛰','Ladakh':'☼','Assam':'❋','West Bengal':'✦','Tamil Nadu':'✧','Karnataka':'◇','Punjab':'✦','Gujarat':'✺'};
  const icon = iconMap[name] || '✧';
  goToJourney(`<div class="journey-top"><button class="back-button" data-go-back>← Back to India</button><span class="section-kicker">INDIA ATLAS · ${escapeHTML(s.kind.toUpperCase())}</span></div><div class="state-feature-hero" style="--state-image:url('${image}')"><div class="state-feature-shade"></div><div class="state-feature-copy"><span class="state-edition">CULTURA FIELD NOTES · ${String(currentIndex+1).padStart(2,'0')}</span><div class="state-emblem">${icon}</div><h1>${escapeHTML(s.name)}<em>.</em></h1><p>${escapeHTML(s.about)}</p><div class="state-feature-actions"><span>⌖ ${escapeHTML(s.capital)}</span><span>◈ ${escapeHTML(s.kind)}</span><span>✦ Cultural field guide</span></div></div><div class="state-vertical-label">EXPLORE THE MANY WORLDS OF INDIA</div><div class="state-image-caption">LAND · PEOPLE · LIVING HERITAGE</div></div><div class="state-quick-stats"><div><span class="stat-symbol">✦</span><small>CELEBRATIONS</small><strong>${escapeHTML(s.festivals.split(';')[0])}</strong></div><div><span class="stat-symbol">◉</span><small>LOCAL FLAVOURS</small><strong>${escapeHTML(s.food.split(';')[0])}</strong></div><div><span class="stat-symbol">✧</span><small>ART & CRAFT</small><strong>${escapeHTML(s.arts.split(';')[0])}</strong></div></div><div class="state-story-intro"><div><span class="section-kicker">BEYOND THE POSTCARD</span><h2>A place made of<br><em>many stories.</em></h2></div><p>${escapeHTML(s.about)} This guide offers a starting point for discovering the region through its celebrations, cuisine, creative traditions and everyday community life.</p></div><div class="state-story-grid state-editorial-grid"><article class="story-festival"><div class="story-topline"><span>01 / THE CALENDAR</span><b>✺</b></div><div class="story-art">✺</div><span class="section-kicker">CELEBRATIONS</span><h2>Festivals & community life</h2><p>${escapeHTML(s.festivals)}. Celebrations can differ by district, faith and community, with local variations in rituals, music and seasonal practices.</p><span class="story-foot">SEASONS · RITUALS · TOGETHERNESS</span></article><article class="story-food"><div class="story-topline"><span>02 / THE TABLE</span><b>◉</b></div><div class="story-art">◉</div><span class="section-kicker">FOOD CULTURE</span><h2>Food & flavours</h2><p>${escapeHTML(s.food)}. Recipes and ingredients change across households and landscapes; these dishes are starting points for exploring the region’s food culture.</p><span class="story-foot">INGREDIENTS · RECIPES · MEMORY</span></article><article class="story-artisan"><div class="story-topline"><span>03 / THE MAKERS</span><b>✧</b></div><div class="story-art">✧</div><span class="section-kicker">LIVING HERITAGE</span><h2>Arts, craft & expression</h2><p>${escapeHTML(s.arts)}. These traditions are sustained by artists, families and community groups, and continue to evolve with new generations.</p><span class="story-foot">CRAFT · PERFORMANCE · IDENTITY</span></article><article class="story-history"><div class="story-topline"><span>04 / THE LANDSCAPE</span><b>⌖</b></div><div class="story-art">⌖</div><span class="section-kicker">A CLOSER LOOK</span><h2>About ${escapeHTML(s.name)}</h2><p>${escapeHTML(s.about)} Explore local history, languages, landscapes and community voices to understand the many identities within the region.</p><span class="story-foot">PLACE · LANGUAGE · HISTORY</span></article></div><div class="state-travel-strip"><div><span class="section-kicker">YOUR NEXT CHAPTER</span><h2>Keep wandering.</h2><p>Every region reveals a different side of India.</p></div><button class="neighbor-card neighbor-prev" data-open-state="${escapeHTML(previous.name)}"><span>← PREVIOUS REGION</span><strong>${escapeHTML(previous.name)}</strong><small>Discover this region ↗</small></button><button class="neighbor-card neighbor-next" data-open-state="${escapeHTML(next.name)}"><span>NEXT REGION →</span><strong>${escapeHTML(next.name)}</strong><small>Discover this region ↗</small></button></div><div class="next-explore state-end-actions"><h2>More of India, one story at a time.</h2><p>Return to the complete atlas or explore cultures beyond India.</p><button class="button button-gold" data-go-back>All states & territories ↗</button> <button class="back-button" id="allCulturesButton">World cultures</button></div><p class="cultural-note">Cultural notes are an introduction, not an exhaustive guide. Please respect local communities and consult reliable regional sources.</p>`, '#state/'+encodeURIComponent(name), push);
  const all = journeyPage.querySelector('#allCulturesButton');
  if(all) all.addEventListener('click',()=>{returnHome(true);document.getElementById('explore').scrollIntoView({behavior:'smooth'});});
}

function openCulture(name) { openCountry(name); return;

  const c = cultures.find(item => item.name === name);
  if (!c) return;
  modalContent.innerHTML = `<div class="modal-hero"><img src="${c.image}" alt="${escapeHTML(c.name)}" onerror="this.style.display='none'"><h2>${escapeHTML(c.name)}</h2></div><div class="modal-copy"><span class="modal-region">${escapeHTML(c.place.toUpperCase())} · ${escapeHTML(c.region.toUpperCase())}</span><p>${escapeHTML(c.summary)}</p><div class="detail-grid"><div class="detail-box"><h4>FESTIVALS & CELEBRATIONS</h4><p>${escapeHTML(c.festival)}</p></div><div class="detail-box"><h4>FOOD & FLAVOURS</h4><p>${escapeHTML(c.food)}</p></div><div class="detail-box"><h4>ARTS & TRADITIONS</h4><p>${escapeHTML(c.traditions)}</p></div><div class="detail-box"><h4>DID YOU KNOW?</h4><p>${escapeHTML(c.fact)}</p></div></div><p style="font-size:9px;margin-top:20px;color:#8793a3">Cultures are diverse and evolving. These notes are an introduction, not a complete description of every community.</p></div>`;
  modal.showModal();
}
grid.addEventListener('click', e => { const card = e.target.closest('.culture-card'); if (card) openCulture(card.dataset.name); });
grid.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('culture-card')) { e.preventDefault(); openCulture(e.target.dataset.name); } });
searchInput.addEventListener('input', renderCultures);
filters.addEventListener('click', e => { const button = e.target.closest('[data-region]'); if (!button) return; activeRegion = button.dataset.region; filters.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === button)); renderCultures(); });
document.getElementById('modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
document.querySelectorAll('[data-region-link]').forEach(link => link.addEventListener('click', () => { const region = link.dataset.regionLink; activeRegion = region; filters.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b.dataset.region === region)); renderCultures(); }));
document.querySelectorAll('.pin').forEach(pin => pin.addEventListener('click', () => { const name = pin.dataset.country; const target = name === 'Brazil' ? 'Brazil' : name; openCulture(target); }));
document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('mainNav').classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => document.getElementById('mainNav').classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('newsletterForm').addEventListener('submit', e => { e.preventDefault(); const email = document.getElementById('emailInput'); document.getElementById('formNote').textContent = `Thanks for your curiosity! Newsletter sign-up is a demo here; no email was sent for ${email.value}.`; email.value = ''; });
renderCultures();

// Reveal sections as they enter the viewport.
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Interactive 3D globe: textured sphere, stars, atmosphere, pointer drag and scroll zoom.
const globeHost = document.getElementById('globeCanvas');
let renderer, scene, camera, earth, globeGroup, animationFrame;
try {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
  camera.position.z = 5.1;
  renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  globeHost.appendChild(renderer.domElement);
  globeGroup = new THREE.Group(); scene.add(globeGroup);
  const loader = new THREE.TextureLoader(); loader.setCrossOrigin('anonymous');
  const earthGeometry = new THREE.SphereGeometry(1.55, 96, 96);
  const earthMaterial = new THREE.MeshPhongMaterial({color:0xffffff, shininess:14, specular:new THREE.Color('#31536a')});
  earth = new THREE.Mesh(earthGeometry, earthMaterial); globeGroup.add(earth);
  loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg', texture => { texture.colorSpace = THREE.SRGBColorSpace; earthMaterial.map = texture; earthMaterial.needsUpdate = true; }, undefined, () => { earthMaterial.color.set('#3a7694'); });
  loader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg', texture => { earthMaterial.normalMap = texture; earthMaterial.normalScale.set(.45,.45); earthMaterial.needsUpdate = true; });
  loader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg', texture => { earthMaterial.specularMap = texture; earthMaterial.needsUpdate = true; });
  const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.62,64,64), new THREE.MeshBasicMaterial({color:0x4ba9e8,transparent:true,opacity:.09,side:THREE.BackSide})); globeGroup.add(atmosphere);
  scene.add(new THREE.AmbientLight(0x9bbbd6, 1.25));
  const keyLight = new THREE.DirectionalLight(0xffdfb0, 2.8); keyLight.position.set(-3,2,4); scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0x347fc5, 1.4); rimLight.position.set(3,-1,-3); scene.add(rimLight);
  const starsGeometry = new THREE.BufferGeometry(); const starPositions = [];
  for(let i=0;i<1200;i++){starPositions.push((Math.random()-.5)*22,(Math.random()-.5)*18,(Math.random()-.5)*14-3);}
  starsGeometry.setAttribute('position',new THREE.Float32BufferAttribute(starPositions,3));
  scene.add(new THREE.Points(starsGeometry,new THREE.PointsMaterial({color:0xc6d9eb,size:.018,transparent:true,opacity:.8})));
  const resize = () => { const w = globeHost.clientWidth || 500; const h = globeHost.clientHeight || 500; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); };
  resize(); window.addEventListener('resize',resize);
  let dragging=false, lastX=0, lastY=0, velocityX=0, velocityY=0;
  renderer.domElement.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId)});
  renderer.domElement.addEventListener('pointermove',e=>{if(!dragging)return;const dx=e.clientX-lastX,dy=e.clientY-lastY;globeGroup.rotation.y+=dx*.006;globeGroup.rotation.x+=dy*.004;velocityX=dx*.0008;velocityY=dy*.0005;lastX=e.clientX;lastY=e.clientY});
  renderer.domElement.addEventListener('pointerup',()=>dragging=false); renderer.domElement.addEventListener('pointercancel',()=>dragging=false);
  renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();camera.position.z=THREE.MathUtils.clamp(camera.position.z+e.deltaY*.003,3.8,7)}, {passive:false});
  const animate=()=>{animationFrame=requestAnimationFrame(animate);if(!dragging){globeGroup.rotation.y+=.0014+velocityX;globeGroup.rotation.x*=.995;velocityX*=.96;velocityY*=.96;}renderer.render(scene,camera)}; animate();
} catch (error) {
  globeHost.innerHTML = '<div style="height:100%;display:grid;place-items:center;text-align:center;color:#aab4c2;padding:30px;font-size:12px">Your browser could not start the 3D globe. Try opening this site in an updated browser with WebGL enabled.</div>';
  console.error('3D globe setup failed:', error);
}

window.addEventListener('popstate', () => { if (location.hash.startsWith('#country/') && decodeURIComponent(location.hash.slice(9)) === 'India') openCountry('India', false); else if (location.hash.startsWith('#state/')) openState(decodeURIComponent(location.hash.slice(7)), false); else if (location.hash.startsWith('#country/')) openCountry(decodeURIComponent(location.hash.slice(9)), false); else returnHome(false); });


// CULTURA 3.0 — refined navigation and ambient interactions.
(() => {
  const progress = document.getElementById('scrollProgressBar');
  const topbar = document.querySelector('.topbar');
  let scheduled = false;
  const updateScrollChrome = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    if (topbar) topbar.classList.toggle('scrolled', window.scrollY > 24);
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { window.requestAnimationFrame(updateScrollChrome); scheduled = true; }
  }, { passive: true });
  updateScrollChrome();
  const hero = document.querySelector('.hero');
  if (hero && window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    hero.addEventListener('pointermove', event => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
      hero.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    });
    hero.classList.add('has-spotlight');
  }
  if (window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.hero-actions .button-gold, .nav-cta').forEach(button => {
      button.addEventListener('pointermove', event => {
        const rect = button.getBoundingClientRect();
        const dx = (event.clientX - rect.left - rect.width / 2) / rect.width;
        const dy = (event.clientY - rect.top - rect.height / 2) / rect.height;
        button.style.transform = `translate(${dx * 4}px, ${dy * 3}px)`;
      });
      button.addEventListener('pointerleave', () => { button.style.transform = ''; });
    });
  }
})();

// 3D culture cards: pointer tilt on desktop, clear tap feedback on touch screens.
(function initCultureCardMotion(){
  const cardRoot = document.getElementById('cultureGrid');
  if (!cardRoot) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const animateCards = () => {
    const cards = cardRoot.querySelectorAll('.culture-card');
    cards.forEach((card, index) => {
      card.style.setProperty('--card-index', index);
      card.classList.remove('card-enter');
      void card.offsetWidth;
      if (!reduceMotion) card.classList.add('card-enter');
      if (card.dataset.motionReady) return;
      card.dataset.motionReady = 'true';
      if (finePointer && !reduceMotion) {
        card.addEventListener('pointermove', event => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          const rotateY = (x - .5) * 10;
          const rotateX = (.5 - y) * 8;
          card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) translateZ(0)`;
          card.style.setProperty('--shine-x', `${x * 100}%`);
        });
        card.addEventListener('pointerleave', () => {
          card.style.transform = '';
        });
      }
      card.addEventListener('click', () => {
        card.classList.remove('card-tap');
        void card.offsetWidth;
        card.classList.add('card-tap');
        window.setTimeout(() => card.classList.remove('card-tap'), 420);
      }, {passive:true});
    });
  };
  const observer = new MutationObserver(animateCards);
  observer.observe(cardRoot, {childList:true});
  animateCards();
})();
