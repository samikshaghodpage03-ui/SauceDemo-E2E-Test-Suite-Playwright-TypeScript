SauceDemo E2E Test Suite — Playwright + TypeScript
Automated end-to-end tests for SauceDemo covering login flows and a complete checkout journey, built with Playwright and TypeScript.

📌 What's Tested
Test CaseTypeStatusLogin with valid credentialsPositive✅Login with empty usernameNegative✅Login with invalid passwordNegative✅Login with locked out userNegative✅Add item to cartFunctional✅Remove item from cartFunctional✅Complete checkout flow (add to cart → order confirmation)E2E✅Checkout with missing detailsNegative✅Verify product details on inventory pageFunctional✅

9 tests · 6 parallel workers · 43s total runtime


🛠️ Tech Stack

Framework: Playwright
Language: TypeScript
Test Site: SauceDemo


📁 Project Structure
├── tests/
│   └── saucedemo.spec.ts   # All test cases
├── playwright.config.ts     # Playwright configuration
├── package.json
└── README.md

⚙️ Setup & Installation
1. Clone the repository
bashgit clone https://github.com/your-username/saucedemo-playwright-tests.git
cd saucedemo-playwright-tests
2. Install dependencies
bashnpm install
3. Install Playwright browsers
bashnpx playwright install

▶️ Running the Tests
Run all tests (headless)
bashnpx playwright test
Run all tests (headed — watch the browser)
bashnpx playwright test --headed
Run a specific test file
bashnpx playwright test tests/saucedemo.spec.ts
View HTML test report
bashnpx playwright show-report

🧪 Test Scenarios in Detail
1. ✅ Valid Login

Navigates to SauceDemo
Fills in valid credentials (standard_user / secret_sauce)
Asserts redirect to /inventory.html

2. ❌ Empty Username (Negative Test)

Attempts login with no username
Asserts error message: "Username is required"

3. 🛒 Full Checkout Flow

Logs in with valid credentials
Adds Sauce Labs Backpack to cart
Proceeds through checkout with test user details
Asserts final confirmation: "Thank you for your order"


📸 Sample Output
Running 9 tests using 6 workers

  9 passed (43.0s)

To open last HTML report run:
  npx playwright show-report

Tests run in parallel across 6 workers — Playwright automatically launches the browser, navigates to SauceDemo, performs login, and validates each step without any manual input.
