const embeddedCatalogue = {
  payments: {
    heading: 'Move money',
    cards: [
      { tag: 'RECOMMENDED', title: 'Make and track payments', description: 'Initiate single, bulk, or real-time payments and retrieve their latest processing status.', endpoints: '6 endpoints', api: 'Payment Initiation API', key: 'treasury_payment_initiation_v3' },
      { tag: 'VALIDATE FIRST', title: 'Validate a payment recipient', description: 'Check beneficiary account and name details before a payment is sent.', endpoints: '2 endpoints', api: 'Payment Pre-validation API', key: 'treasury_payment_pre_validation_v1' },
      { tag: 'CROSS-BORDER', title: 'Pay internationally with FX', description: 'Validate, quote, initiate, confirm, and track global disbursements in 140+ currencies.', endpoints: '11 endpoints', api: 'Global Disbursements API', key: 'treasury_global_disbursements_v3' }
    ]
  },
  accounts: { heading: 'See accounts & cash', cards: [
    { tag: 'RECOMMENDED', title: 'Get balances and transactions', description: 'Retrieve real-time balances and transaction entries for corporate accounts.', endpoints: '3 endpoints', api: 'Account Information v3', key: 'treasury_account_information_v3' },
    { tag: 'OPEN BANKING', title: 'Connect external accounts', description: 'Let users consent to share account and transaction information with your application.', endpoints: 'Consent and account data', api: 'External Accounts & Consents', key: 'account_information_hk_personal_v1_0_6' }
  ] },
  'manage-accounts': { heading: 'Manage accounts', cards: [
    { tag: 'CASH MANAGEMENT', title: 'Manage virtual accounts', description: 'Create and maintain virtual accounts, then view balances and transaction activity.', endpoints: 'Account management', api: 'Virtual Account Management', key: 'treasury_virtual_account_management_v1_0_0' }
  ] },
  onboarding: { heading: 'Onboard & connect', cards: [
    { tag: 'CORPORATE', title: 'Onboard a customer', description: 'Launch HSBC’s digital account-connect journey and retrieve customer activation status.', endpoints: '3 endpoints', api: 'Customer Onboarding Activation', key: 'customer_onboarding_activation_v1' },
    { tag: 'OPEN BANKING', title: 'Register your application', description: 'Register an OAuth client with HSBC using a Software Statement Assertion.', endpoints: '3 endpoints', api: 'Dynamic Client Registration', key: 'dynamic_client_registration_v3_2_1' }
  ] },
  trade: { heading: 'Trade & securities', cards: [
    { tag: 'TRADE FINANCE', title: 'Manage bank guarantees', description: 'Explore trade finance APIs for issuing and managing bank guarantee workflows.', endpoints: 'Trade finance', api: 'Bank Guarantee API', key: 'trade_finance_bank_guarantee_v3_0_0' },
    { tag: 'CUSTODY', title: 'View securities holdings', description: 'Access custody holdings and trade-status information for investment operations.', endpoints: 'Holdings and trades', api: 'Custody Holdings API', key: 'custody_holdings_v3_0_0' }
  ] },
  products: { heading: 'Find products & places', cards: [
    { tag: 'PRODUCTS', title: 'Find account products', description: 'Search banking products, eligibility, rates, and fees.', endpoints: 'Product catalogue', api: 'Product Finder API', key: 'product_finder_uk_v2_2_1' },
    { tag: 'LOCATIONS', title: 'Find ATMs and branches', description: 'Retrieve locations and available services for ATM and branch networks.', endpoints: 'Location search', api: 'ATM Locator API', key: 'atm_locator_uk_v2_2_1' }
  ] }
};

const embeddedAvailability = {
  treasury_payment_initiation_v3: { audience: ['Corporate'], markets: ['AUSTRALIA', 'BAHRAIN', 'BANGLADESH', 'BELGIUM', 'BRAZIL', 'CHILE', 'CHINA', 'CZECH REPUBLIC', 'FRANCE', 'GERMANY', 'HONG KONG', 'INDIA', 'INDONESIA', 'IRELAND', 'ISRAEL', 'ITALY', 'JAPAN', 'KOREA', 'LUXEMBOURG', 'MACAU', 'MALAYSIA', 'MALTA', 'MAURITIUS', 'MEXICO', 'NETHERLANDS', 'NEW ZEALAND', 'OMAN', 'PHILIPPINES', 'POLAND', 'QATAR', 'SAUDI ARABIA', 'SINGAPORE', 'SPAIN', 'SRI LANKA', 'SWITZERLAND', 'THAILAND', 'UAE', 'UNITED KINGDOM', 'USA', 'VIETNAM'] },
  treasury_payment_pre_validation_v1: { audience: ['Corporate'], markets: ['ALGERIA', 'AUSTRALIA', 'BAHRAIN', 'BANGLADESH', 'BELGIUM', 'BRAZIL', 'CHILE', 'CHINA', 'CZECH REPUBLIC', 'FRANCE', 'GERMANY', 'HONG KONG', 'INDIA', 'IRELAND', 'ITALY', 'JAPAN', 'KOREA', 'LUXEMBOURG', 'MACAU', 'MALAYSIA', 'MEXICO', 'NETHERLANDS', 'NEW ZEALAND', 'OMAN', 'PHILIPPINES', 'POLAND', 'QATAR', 'SAUDI ARABIA', 'SINGAPORE', 'SPAIN', 'SRI LANKA', 'SWITZERLAND', 'THAILAND', 'UAE', 'UNITED KINGDOM', 'USA', 'VIETNAM'] },
  treasury_global_disbursements_v3: { audience: ['Corporate'], markets: ['AUSTRALIA', 'BAHRAIN', 'BELGIUM', 'CHILE', 'DENMARK', 'FRANCE', 'HONG KONG', 'INDONESIA', 'IRELAND', 'JAPAN', 'KOREA', 'KUWAIT', 'LUXEMBOURG', 'NETHERLANDS', 'NEW ZEALAND', 'OMAN', 'QATAR', 'SINGAPORE', 'SOUTH AFRICA', 'SPAIN', 'UAE', 'UNITED KINGDOM', 'USA'] },
  treasury_account_information_v3: { audience: ['Corporate'], markets: ['ALGERIA', 'AUSTRALIA', 'BAHRAIN', 'BANGLADESH', 'BELGIUM', 'BERMUDA', 'BRAZIL', 'CHILE', 'CHINA', 'CZECH REPUBLIC', 'FRANCE', 'GERMANY', 'HONG KONG', 'INDIA', 'INDONESIA', 'IRELAND', 'ITALY', 'JAPAN', 'KOREA', 'LUXEMBOURG', 'MACAU', 'MALAYSIA', 'MALTA', 'MAURITIUS', 'MEXICO', 'NETHERLANDS', 'NEW ZEALAND', 'OMAN', 'PHILIPPINES', 'POLAND', 'QATAR', 'SAUDI ARABIA', 'SINGAPORE', 'SPAIN', 'SRI LANKA', 'SWITZERLAND', 'THAILAND', 'UAE', 'UNITED KINGDOM', 'USA', 'VIETNAM'] },
  treasury_virtual_account_management_v1_0_0: { audience: ['Corporate'], markets: ['AUSTRALIA', 'HONG KONG', 'INDIA', 'IRELAND', 'LUXEMBOURG', 'MALAYSIA', 'MEXICO', 'NETHERLANDS', 'SINGAPORE', 'SRI LANKA', 'UAE', 'UNITED KINGDOM', 'USA', 'VIETNAM'] },
  customer_onboarding_activation_v1: { audience: ['Corporate'], markets: ['HONG KONG', 'UNITED KINGDOM', 'USA'] },
  account_information_hk_personal_v1_0_6: { audience: ['Open Banking'], markets: ['HONG KONG'] },
  dynamic_client_registration_v3_2_1: { audience: ['Open Banking'], markets: ['FRANCE', 'GERMANY', 'HONG KONG', 'IRELAND', 'ITALY', 'LUXEMBOURG', 'MALTA', 'NETHERLANDS', 'POLAND', 'SPAIN', 'SWITZERLAND', 'UNITED KINGDOM'] },
  trade_finance_bank_guarantee_v3_0_0: { audience: ['Corporate'], markets: ['UNITED KINGDOM'] },
  custody_holdings_v3_0_0: { audience: ['Corporate'], markets: ['HONG KONG', 'LUXEMBOURG', 'SINGAPORE', 'UNITED KINGDOM'] },
  product_finder_uk_v2_2_1: { audience: ['Open Banking'], markets: ['UNITED KINGDOM'] },
  atm_locator_uk_v2_2_1: { audience: ['Open Banking'], markets: ['UNITED KINGDOM'] }
};

const { capabilities: catalogue, apis: availability } = window.HSBC_DISCOVERY_DATA;

const details = {
  treasury_payment_initiation_v3: { description: 'Create single, bulk, or real-time payments from a specified account and retrieve the updated status while payments are processed.', endpoints: ['POST /payments/instant-settlement', 'POST /payments/instant-receipt', 'POST /bulk-payments/instant-receipt', 'POST /payments/status'], auth: 'Signed JWT', availability: 'Production via client integration' },
  treasury_payment_pre_validation_v1: { description: 'Verify payee details before sending a payment. Coverage includes Hong Kong account or FPS proxy checks, UK Confirmation of Payee, and SWIFT checks.', endpoints: ['POST /prevalidations', 'GET /health'], auth: 'Client profile and secret', availability: 'Pilot in multiple markets' },
  treasury_global_disbursements_v3: { description: 'Make cross-border payments from one operating account, with FX pricing, beneficiary validation, confirmation, and status tracking.', endpoints: ['POST /payments/global-disbursement/validate', 'POST /fx/global-disbursement/rates', 'POST /payments/global-disbursement', 'GET /payments/global-disbursement/status'], auth: 'Signed JWT', availability: 'Production via client integration' },
  treasury_account_information_v3: { description: 'Retrieve balances and transaction entries for a specific date or time range using ISO 20022 formats or HSBC JSON.', endpoints: ['POST /v3/balances', 'POST /v3/transactions', 'GET /healthcheck'], auth: 'Signed JWT + PGP', availability: 'Global corporate markets' },
  customer_onboarding_activation_v1: { description: 'Send customers to HSBC’s digital setup journey, then retrieve activation status, API profile ID, and the accounts they selected.', endpoints: ['POST /activations', 'POST /activations/status', 'GET /.well-known/health'], auth: 'OpenAM authorization', availability: 'Hong Kong, UK, USA' }
};

const intentGrid = document.querySelector('#intent-grid');
const resultGrid = document.querySelector('#recommendation-grid');
const resultHeading = document.querySelector('.section-heading h2');
const matchCount = document.querySelector('.match-count');
const explore = document.querySelector('#explore-view');
const detail = document.querySelector('#detail-view');
const marketSelect = document.querySelector('#market');
const audienceSelect = document.querySelector('#audience');
let currentIntent = 'payments';

function marketLabel(markets) {
  return markets.length === 1 ? markets[0].replaceAll(' ', ' ').toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase()) : `${markets.length} markets`;
}

function renderCards(intent) {
  const group = catalogue[intent];
  const selectedMarket = marketSelect.value;
  const selectedAudience = audienceSelect.value;
  const matches = group.cards.filter(card => {
    const data = availability[card.key];
    return data.audience.includes(selectedAudience) && (selectedMarket === 'GLOBAL' || data.markets.includes(selectedMarket));
  });
  resultHeading.textContent = group.heading;
  matchCount.innerHTML = `${matches.length} ${matches.length === 1 ? 'match' : 'matches'} <span>available for your selection</span>`;
  resultGrid.innerHTML = matches.length ? matches.map(card => `<article class="api-card"><div class="card-top"><span class="tag">${card.tag}</span><span class="market">${selectedMarket === 'GLOBAL' ? marketLabel(availability[card.key].markets) : selectedMarket.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase())}</span></div><h3>${card.title}</h3><p>${card.description}</p><div class="card-footer"><span class="endpoint-count">${card.endpoints}</span><button class="open-detail" data-detail="${card.key}" data-title="${card.api}">Explore API <i data-lucide="arrow-right"></i></button></div></article>`).join('') : `<article class="empty-state"><i data-lucide="search-x"></i><h3>No exact match yet</h3><p>This use case is not currently published for the selected market and integration model. Try another market or explore the full catalogue.</p><button class="open-detail" data-detail="catalogue" data-title="HSBC API catalogue">Browse catalogue <i data-lucide="arrow-right"></i></button></article>`;
  lucide.createIcons();
}

function showDetail(key, title) {
  const item = details[key] || { description: 'This API is available in the catalogue. Explore its documentation to review endpoints, prerequisites, and market availability.', endpoints: ['View API documentation'], auth: 'See documentation', availability: 'Varies by market' };
  detail.innerHTML = `<button class="back" data-action="back"><i data-lucide="arrow-left"></i>Back to recommendations</button><div class="detail-hero"><div class="detail-meta"><span class="tag">RECOMMENDED API</span><span class="market">${item.availability}</span></div><h1>${title}</h1><p>${item.description}</p></div><div class="detail-grid"><div><p class="eyebrow">AVAILABLE OPERATIONS</p><h2>Build the journey</h2><div class="endpoint-list">${item.endpoints.map(endpoint => `<div class="endpoint"><span class="method">${endpoint.split(' ')[0]}</span>${endpoint.substring(endpoint.indexOf(' ') + 1)}</div>`).join('')}</div></div><aside class="info-panel"><h3>Integration profile</h3><div class="info-row"><span>Authentication</span><strong>${item.auth}</strong></div><div class="info-row"><span>Availability</span><strong>${item.availability}</strong></div><div class="info-row"><span>Next step</span><strong>Review contract and request access</strong></div><button>View API documentation <i data-lucide="arrow-up-right"></i></button></aside></div>`;
  explore.classList.remove('active'); detail.classList.add('active'); lucide.createIcons(); window.scrollTo(0, 0);
}

intentGrid.addEventListener('click', event => { const card = event.target.closest('[data-intent]'); if (!card) return; document.querySelectorAll('.intent-card').forEach(item => item.classList.remove('selected')); card.classList.add('selected'); currentIntent = card.dataset.intent; renderCards(currentIntent); });
document.addEventListener('click', event => { const detailButton = event.target.closest('[data-detail]'); if (detailButton) showDetail(detailButton.dataset.detail, detailButton.dataset.title); if (event.target.closest('[data-action="back"]')) { detail.classList.remove('active'); explore.classList.add('active'); } if (event.target.closest('[data-action="reset"]')) { document.querySelector('[data-intent="payments"]').click(); } });
document.querySelector('#search-button').addEventListener('click', () => { renderCards(currentIntent); document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' }); });
renderCards('payments');