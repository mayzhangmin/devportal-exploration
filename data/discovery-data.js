const HSBC_DISCOVERY_DATA = {
  source: 'HSBC Developer Portal api_discovery',
  generatedAt: '2026-09-29',
  capabilities: {
    payments: { heading: 'Move money', cards: [
      { tag: 'RECOMMENDED', title: 'Make and track payments', description: 'Initiate single, bulk, or real-time payments and retrieve their latest processing status.', endpoints: '6 endpoints', api: 'Payment Initiation API', key: 'treasury_payment_initiation_v3' },
      { tag: 'VALIDATE FIRST', title: 'Validate a payment recipient', description: 'Check beneficiary account and name details before a payment is sent.', endpoints: '2 endpoints', api: 'Payment Pre-validation API', key: 'treasury_payment_pre_validation_v1' },
      { tag: 'CROSS-BORDER', title: 'Pay internationally with FX', description: 'Validate, quote, initiate, confirm, and track global disbursements in 140+ currencies.', endpoints: '11 endpoints', api: 'Global Disbursements API', key: 'treasury_global_disbursements_v3' }
    ] },
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
  },
  apis: {
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
  }
};

if (typeof window !== 'undefined') {
  window.HSBC_DISCOVERY_DATA = HSBC_DISCOVERY_DATA;
}

if (typeof module !== 'undefined') {
  module.exports = HSBC_DISCOVERY_DATA;
}