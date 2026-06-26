window.REVIEW_APP_CONFIG = {
  "businessOrder": [
    "copart",
    "iaa",
    "manheim",
    "adesa",
    "openlane",
    "acv",
    "americas_auto_auction"
  ],
  "businesses": {
    "copart": {
      "display_name": "Copart",
      "switch_label": "Copart",
      "title": "Copart Web Sentiment Analysis Tool",
      "logo_src": "assets/copart-logo.svg",
      "logo_alt": "Copart logo",
      "csv_prefix": "copart",
      "theme": {
        "brand_primary": "#002d4b",
        "brand_secondary": "#1b75bb",
        "title_shade": "#2661d9",
        "negative_line": "#1b75bb",
        "positive_line": "#1b75bb",
        "header_start": "#1f56cb",
        "header_end": "#3f75e6",
        "page_accent_a": "rgba(27, 117, 187, 0.12)",
        "page_accent_b": "rgba(163, 30, 34, 0.08)"
      },
      "output_json": "reviews.json"
    },
    "iaa": {
      "display_name": "IAA",
      "switch_label": "IAA",
      "title": "IAA Web Sentiment Analysis Tool",
      "logo_src": "assets/iaa-logo.png",
      "logo_alt": "IAA logo",
      "csv_prefix": "iaa",
      "theme": {
        "brand_primary": "#1a1d24",
        "brand_secondary": "#cc202f",
        "title_shade": "#cc202f",
        "negative_line": "#cc202f",
        "positive_line": "#cc202f",
        "header_start": "#111319",
        "header_end": "#cc202f",
        "page_accent_a": "rgba(204, 32, 47, 0.12)",
        "page_accent_b": "rgba(31, 35, 44, 0.12)"
      },
      "output_json": "reviews-iaa.json"
    },
    "manheim": {
      "display_name": "Manheim",
      "switch_label": "Manheim",
      "title": "Manheim Web Sentiment Analysis Tool",
      "logo_src": "assets/manheim-logo.svg",
      "logo_alt": "Manheim logo",
      "csv_prefix": "manheim",
      "theme": {
        "brand_primary": "#16324f",
        "brand_secondary": "#f47b20",
        "title_shade": "#f47b20",
        "negative_line": "#f47b20",
        "positive_line": "#f47b20",
        "header_start": "#10273e",
        "header_end": "#f47b20",
        "page_accent_a": "rgba(244, 123, 32, 0.12)",
        "page_accent_b": "rgba(22, 50, 79, 0.10)"
      },
      "output_json": "reviews-manheim.json"
    },
    "adesa": {
      "display_name": "ADESA",
      "switch_label": "ADESA",
      "title": "ADESA Web Sentiment Analysis Tool",
      "logo_src": "assets/adesa-logo.svg",
      "logo_alt": "ADESA logo",
      "csv_prefix": "adesa",
      "theme": {
        "brand_primary": "#183a5a",
        "brand_secondary": "#00a8b5",
        "title_shade": "#00a8b5",
        "negative_line": "#00a8b5",
        "positive_line": "#00a8b5",
        "header_start": "#112b43",
        "header_end": "#00a8b5",
        "page_accent_a": "rgba(0, 168, 181, 0.12)",
        "page_accent_b": "rgba(24, 58, 90, 0.10)"
      },
      "output_json": "reviews-adesa.json"
    },
    "openlane": {
      "display_name": "OPENLANE",
      "switch_label": "OPENLANE",
      "title": "OPENLANE Web Sentiment Analysis Tool",
      "logo_src": "assets/openlane-logo.svg",
      "logo_alt": "OPENLANE logo",
      "csv_prefix": "openlane",
      "theme": {
        "brand_primary": "#1d3f45",
        "brand_secondary": "#00a88e",
        "title_shade": "#00a88e",
        "negative_line": "#00a88e",
        "positive_line": "#00a88e",
        "header_start": "#143137",
        "header_end": "#00a88e",
        "page_accent_a": "rgba(0, 168, 142, 0.12)",
        "page_accent_b": "rgba(29, 63, 69, 0.10)"
      },
      "output_json": "reviews-openlane.json"
    },
    "acv": {
      "display_name": "ACV",
      "switch_label": "ACV",
      "title": "ACV Web Sentiment Analysis Tool",
      "logo_src": "assets/acv-logo.svg",
      "logo_alt": "ACV logo",
      "csv_prefix": "acv",
      "theme": {
        "brand_primary": "#044f7b",
        "brand_secondary": "#00a6d6",
        "title_shade": "#00a6d6",
        "negative_line": "#00a6d6",
        "positive_line": "#00a6d6",
        "header_start": "#043a5a",
        "header_end": "#00a6d6",
        "page_accent_a": "rgba(0, 166, 214, 0.12)",
        "page_accent_b": "rgba(4, 79, 123, 0.10)"
      },
      "output_json": "reviews-acv.json"
    },
    "americas_auto_auction": {
      "display_name": "America's Auto Auction",
      "switch_label": "America's Auto Auction",
      "title": "America's Auto Auction Web Sentiment Analysis Tool",
      "logo_src": "assets/americas-auto-auction-logo.svg",
      "logo_alt": "America's Auto Auction logo",
      "csv_prefix": "americas-auto-auction",
      "theme": {
        "brand_primary": "#1f4d8b",
        "brand_secondary": "#c1272d",
        "title_shade": "#c1272d",
        "negative_line": "#c1272d",
        "positive_line": "#c1272d",
        "header_start": "#183b6a",
        "header_end": "#c1272d",
        "page_accent_a": "rgba(193, 39, 45, 0.12)",
        "page_accent_b": "rgba(31, 77, 139, 0.10)"
      },
      "output_json": "reviews-americas-auto-auction.json"
    }
  },
  "tierHierarchy": {
    "meta": {
      "source": "Business Tiers.xlsx + user-approved custom tiers",
      "tier1_count": 8,
      "allowed_path_count": 112,
      "custom_tier1_added": [
        "Customer Service & Communication"
      ]
    },
    "hierarchy": {
      "Lot Condition, Listing Status and related": {
        "Lot Condition Reporting": [
          "Lot Damage"
        ],
        "Third-Party Inspection Authorization & Scheduling": [
          "Previewing/ Inspecting Vehicles"
        ],
        "Listing Status": [
          "Selling/ Relisting vehicle or Parts purchase",
          "Lot Cancellation/Closure & Reassignment"
        ],
        "Personal belongings/ items": [
          "Removal / Retrieval of items left in vehicle"
        ]
      },
      "Title, Ownership, POA and Documentation": {
        "Duplicate Title Processing": [
          "Duplicate Title Application & Request",
          "Duplicate Title Status",
          "Duplicate Title via Yard"
        ],
        "Power of Attorney (POA) Handling": [
          "POA Completion & Notary",
          "POA Rejected-Fix & Resubmit",
          "POA Requirements Clarification",
          "POA Setup & Address"
        ],
        "Title Delivery & Status": [
          "Single/ Multiple Vehicle Title Status",
          "Title Not Received",
          "Title Pickup or Driver Handoff"
        ],
        "Title Dept Routing": [
          "Insurance Claim Title Coordination",
          "Transfer to Correct Dept",
          "Transfer to Title Express"
        ],
        "Title Paperwork & Corrections": [
          "Lien Release Processing",
          "Title Corrections/Affidavits"
        ]
      },
      "Vehicle Pickup, Delivery and Scheduling": {
        "Delivery Coordination & Handoffs": [
          "Delivery Location Update",
          "Key Handoff Issues",
          "License Plate Retrieval",
          "Delivery Status and ETA"
        ],
        "Dispatch Routing & Support": [
          "App Guidance and Callback",
          "Transfer to Dispatch"
        ],
        "Pickup Order Management": [
          "Gate Pass Assistance",
          "3-Way Scheduling",
          "Pickup Status/Holds",
          "Insurance Lot Coordination & Owner-Retain/Release"
        ],
        "Scheduled Pickup Status": [
          "Missed/ Delayed Pickup and Dispatch Window",
          "Pickup Hours and Cutoff",
          "Schedule/ Reschedule Pickup"
        ],
        "Specialty Unit Pickups": [
          "Jet Ski Pickup",
          "RV or Camper Pickup",
          "Trailer or Boat Pickup"
        ],
        "Tow and Storage Charges": [
          "Storage Fee Waiver",
          "Tow and Storage Fees",
          "Tow Charge Approval"
        ],
        "Towing Network & Dispatch": [
          "Tow Company Contact",
          "Tow Dispatch & Requests",
          "Tow Provider Onboarding"
        ]
      },
      "Membership / Licensing / Fees & Bidding Policies": {
        "Account Suspension & Reactivation": [
          "Suspended-Duplicate/Access",
          "Suspended-Docs/Deposit",
          "Account Suspended – Payment",
          "Suspended-Pending Review/ Verification"
        ],
        "Auction Eligibility & Licensing": [
          "Auction Eligibility Overview",
          "Dealer Account Setup",
          "State-Specific Bidding Restrictions/ Guide",
          "Unable to Bid"
        ],
        "Bidding Limits & Buying Power": [
          "Buy/Bid Limits Reached",
          "Buying Power",
          "Increase ePay Limit"
        ],
        "Bidding Process, Rules and Fees": [
          "Bid Approval Timeline",
          "Bid Cancellation & Relist Fees",
          "Bid Status and Disputes",
          "Bidding Limits & Restrictions",
          "Fees",
          "How to Bid (First Time)",
          "Membership Types & Licensing Overview"
        ],
        "Membership Status & Deposits": [
          "Inactive Membership- Address Update",
          "Inactive Membership- Renewal",
          "Membership/Deposit Status Inquiry"
        ]
      },
      "Account / Access / Login": {
        "Account Access Issues": [
          "Account Locked",
          "Unable to sign in"
        ],
        "Account Info & Visitor Access": [
          "Add Visitor Access",
          "General Account Information"
        ],
        "Account Profile Updates": [
          "Account Details Update",
          "Update/ Change mailing Address"
        ],
        "Cardholder & Bidder Management": [
          "Add Cardholder/Bidder"
        ],
        "Dealer/Seller Account Setup & Activation": [
          "Create Seller Account",
          "Dealer Services Registration",
          "Dealer/Seller Routing & Activation"
        ],
        "Document Upload & Verification": [
          "Affidavit & Resale Forms",
          "Document Status Update",
          "Inactive Account",
          "Licensing Documents Verification",
          "Upload Troubleshooting"
        ],
        "Password Reset & Login Troubleshooting": [
          "App Login Troubleshooting",
          "Password Reset & Email Update"
        ]
      },
      "Payment Refunds, Transaction Issues and Deposits": {
        "Fees & Charges Disputes": [
          "Buyer Fees Explanation",
          "Relist Fee Dispute",
          "Storage Fees Dispute"
        ],
        "Payment Methods & Limits": [
          "Card Payment Declined",
          "Debit Payment Discounts",
          "Payment Deadlines & Rules",
          "Types of Accepted Payment Methods"
        ],
        "Post-Sale Payment & Counteroffers": [
          "Not Received Payment post vehicle pickup",
          "Counteroffer & Fees Questions",
          "Payment Rejected"
        ],
        "Refunds & Membership Billing": [
          "Deposit Refund & Closure",
          "Deposit Refund Status",
          "Membership Refund – Apple Pay",
          "Membership Refund – Ineligible to bid",
          "Membership Renewal Billing"
        ],
        "Wire Transfer Payments": [
          "Wire Not Received – Info Error",
          "Wire Pending/Posting Delay",
          "Wire Rejected – Name Mismatch"
        ]
      },
      "Misc / General Inquiry": {
        "Unintelligible/No Conversation": [
          "-"
        ],
        "Find Directions to Yard/ Connect to Yard": [
          "Yard Directions/ Yard Employee Availability etc."
        ],
        "Support/Routing": [
          "Language Assistance"
        ],
        "Inventory & Listing Inquiries": [
          "Vehicle Availability Inquiry, Listing Missing/Not Posted, Pickup Arrival/Status"
        ]
      },
      "Customer Service & Communication": {
        "Agent Professionalism & Responsiveness": [
          "Rude/Unhelpful Support",
          "Helpful Support Experience"
        ],
        "Communication Follow-up & Escalation": [
          "No Callback / Unresolved Case",
          "Proactive Follow-up"
        ],
        "Support Access & Response Time": [
          "Long Hold Time / Hard to Reach Support",
          "Delayed Email/Phone Response",
          "Quick Support Response"
        ],
        "Case Resolution Quality": [
          "Issue Not Resolved",
          "Issue Resolved",
          "Escalation Required"
        ]
      }
    },
    "allowed_paths": [
      {
        "tier1": "Account / Access / Login",
        "tier2": "Account Access Issues",
        "tier3": "Account Locked"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Account Access Issues",
        "tier3": "Unable to sign in"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Account Info & Visitor Access",
        "tier3": "Add Visitor Access"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Account Info & Visitor Access",
        "tier3": "General Account Information"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Account Profile Updates",
        "tier3": "Account Details Update"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Account Profile Updates",
        "tier3": "Update/ Change mailing Address"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Cardholder & Bidder Management",
        "tier3": "Add Cardholder/Bidder"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Dealer/Seller Account Setup & Activation",
        "tier3": "Create Seller Account"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Dealer/Seller Account Setup & Activation",
        "tier3": "Dealer Services Registration"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Dealer/Seller Account Setup & Activation",
        "tier3": "Dealer/Seller Routing & Activation"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Document Upload & Verification",
        "tier3": "Affidavit & Resale Forms"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Document Upload & Verification",
        "tier3": "Document Status Update"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Document Upload & Verification",
        "tier3": "Inactive Account"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Document Upload & Verification",
        "tier3": "Licensing Documents Verification"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Document Upload & Verification",
        "tier3": "Upload Troubleshooting"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Password Reset & Login Troubleshooting",
        "tier3": "App Login Troubleshooting"
      },
      {
        "tier1": "Account / Access / Login",
        "tier2": "Password Reset & Login Troubleshooting",
        "tier3": "Password Reset & Email Update"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Agent Professionalism & Responsiveness",
        "tier3": "Helpful Support Experience"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Agent Professionalism & Responsiveness",
        "tier3": "Rude/Unhelpful Support"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Case Resolution Quality",
        "tier3": "Escalation Required"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Case Resolution Quality",
        "tier3": "Issue Not Resolved"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Case Resolution Quality",
        "tier3": "Issue Resolved"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Communication Follow-up & Escalation",
        "tier3": "No Callback / Unresolved Case"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Communication Follow-up & Escalation",
        "tier3": "Proactive Follow-up"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Support Access & Response Time",
        "tier3": "Delayed Email/Phone Response"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Support Access & Response Time",
        "tier3": "Long Hold Time / Hard to Reach Support"
      },
      {
        "tier1": "Customer Service & Communication",
        "tier2": "Support Access & Response Time",
        "tier3": "Quick Support Response"
      },
      {
        "tier1": "Lot Condition, Listing Status and related",
        "tier2": "Listing Status",
        "tier3": "Lot Cancellation/Closure & Reassignment"
      },
      {
        "tier1": "Lot Condition, Listing Status and related",
        "tier2": "Listing Status",
        "tier3": "Selling/ Relisting vehicle or Parts purchase"
      },
      {
        "tier1": "Lot Condition, Listing Status and related",
        "tier2": "Lot Condition Reporting",
        "tier3": "Lot Damage"
      },
      {
        "tier1": "Lot Condition, Listing Status and related",
        "tier2": "Personal belongings/ items",
        "tier3": "Removal / Retrieval of items left in vehicle"
      },
      {
        "tier1": "Lot Condition, Listing Status and related",
        "tier2": "Third-Party Inspection Authorization & Scheduling",
        "tier3": "Previewing/ Inspecting Vehicles"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Account Suspension & Reactivation",
        "tier3": "Account Suspended – Payment"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Account Suspension & Reactivation",
        "tier3": "Suspended-Docs/Deposit"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Account Suspension & Reactivation",
        "tier3": "Suspended-Duplicate/Access"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Account Suspension & Reactivation",
        "tier3": "Suspended-Pending Review/ Verification"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Auction Eligibility & Licensing",
        "tier3": "Auction Eligibility Overview"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Auction Eligibility & Licensing",
        "tier3": "Dealer Account Setup"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Auction Eligibility & Licensing",
        "tier3": "State-Specific Bidding Restrictions/ Guide"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Auction Eligibility & Licensing",
        "tier3": "Unable to Bid"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Limits & Buying Power",
        "tier3": "Buy/Bid Limits Reached"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Limits & Buying Power",
        "tier3": "Buying Power"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Limits & Buying Power",
        "tier3": "Increase ePay Limit"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Process, Rules and Fees",
        "tier3": "Bid Approval Timeline"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Process, Rules and Fees",
        "tier3": "Bid Cancellation & Relist Fees"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Process, Rules and Fees",
        "tier3": "Bid Status and Disputes"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Process, Rules and Fees",
        "tier3": "Bidding Limits & Restrictions"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Process, Rules and Fees",
        "tier3": "Fees"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Process, Rules and Fees",
        "tier3": "How to Bid (First Time)"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Bidding Process, Rules and Fees",
        "tier3": "Membership Types & Licensing Overview"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Membership Status & Deposits",
        "tier3": "Inactive Membership- Address Update"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Membership Status & Deposits",
        "tier3": "Inactive Membership- Renewal"
      },
      {
        "tier1": "Membership / Licensing / Fees & Bidding Policies",
        "tier2": "Membership Status & Deposits",
        "tier3": "Membership/Deposit Status Inquiry"
      },
      {
        "tier1": "Misc / General Inquiry",
        "tier2": "Find Directions to Yard/ Connect to Yard",
        "tier3": "Yard Directions/ Yard Employee Availability etc."
      },
      {
        "tier1": "Misc / General Inquiry",
        "tier2": "Inventory & Listing Inquiries",
        "tier3": "Vehicle Availability Inquiry, Listing Missing/Not Posted, Pickup Arrival/Status"
      },
      {
        "tier1": "Misc / General Inquiry",
        "tier2": "Support/Routing",
        "tier3": "Language Assistance"
      },
      {
        "tier1": "Misc / General Inquiry",
        "tier2": "Unintelligible/No Conversation",
        "tier3": "-"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Fees & Charges Disputes",
        "tier3": "Buyer Fees Explanation"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Fees & Charges Disputes",
        "tier3": "Relist Fee Dispute"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Fees & Charges Disputes",
        "tier3": "Storage Fees Dispute"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Payment Methods & Limits",
        "tier3": "Card Payment Declined"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Payment Methods & Limits",
        "tier3": "Debit Payment Discounts"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Payment Methods & Limits",
        "tier3": "Payment Deadlines & Rules"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Payment Methods & Limits",
        "tier3": "Types of Accepted Payment Methods"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Post-Sale Payment & Counteroffers",
        "tier3": "Counteroffer & Fees Questions"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Post-Sale Payment & Counteroffers",
        "tier3": "Not Received Payment post vehicle pickup"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Post-Sale Payment & Counteroffers",
        "tier3": "Payment Rejected"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Refunds & Membership Billing",
        "tier3": "Deposit Refund & Closure"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Refunds & Membership Billing",
        "tier3": "Deposit Refund Status"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Refunds & Membership Billing",
        "tier3": "Membership Refund – Apple Pay"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Refunds & Membership Billing",
        "tier3": "Membership Refund – Ineligible to bid"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Refunds & Membership Billing",
        "tier3": "Membership Renewal Billing"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Wire Transfer Payments",
        "tier3": "Wire Not Received – Info Error"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Wire Transfer Payments",
        "tier3": "Wire Pending/Posting Delay"
      },
      {
        "tier1": "Payment Refunds, Transaction Issues and Deposits",
        "tier2": "Wire Transfer Payments",
        "tier3": "Wire Rejected – Name Mismatch"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Duplicate Title Processing",
        "tier3": "Duplicate Title Application & Request"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Duplicate Title Processing",
        "tier3": "Duplicate Title Status"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Duplicate Title Processing",
        "tier3": "Duplicate Title via Yard"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Power of Attorney (POA) Handling",
        "tier3": "POA Completion & Notary"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Power of Attorney (POA) Handling",
        "tier3": "POA Rejected-Fix & Resubmit"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Power of Attorney (POA) Handling",
        "tier3": "POA Requirements Clarification"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Power of Attorney (POA) Handling",
        "tier3": "POA Setup & Address"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Title Delivery & Status",
        "tier3": "Single/ Multiple Vehicle Title Status"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Title Delivery & Status",
        "tier3": "Title Not Received"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Title Delivery & Status",
        "tier3": "Title Pickup or Driver Handoff"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Title Dept Routing",
        "tier3": "Insurance Claim Title Coordination"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Title Dept Routing",
        "tier3": "Transfer to Correct Dept"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Title Dept Routing",
        "tier3": "Transfer to Title Express"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Title Paperwork & Corrections",
        "tier3": "Lien Release Processing"
      },
      {
        "tier1": "Title, Ownership, POA and Documentation",
        "tier2": "Title Paperwork & Corrections",
        "tier3": "Title Corrections/Affidavits"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Delivery Coordination & Handoffs",
        "tier3": "Delivery Location Update"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Delivery Coordination & Handoffs",
        "tier3": "Delivery Status and ETA"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Delivery Coordination & Handoffs",
        "tier3": "Key Handoff Issues"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Delivery Coordination & Handoffs",
        "tier3": "License Plate Retrieval"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Dispatch Routing & Support",
        "tier3": "App Guidance and Callback"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Dispatch Routing & Support",
        "tier3": "Transfer to Dispatch"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Pickup Order Management",
        "tier3": "3-Way Scheduling"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Pickup Order Management",
        "tier3": "Gate Pass Assistance"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Pickup Order Management",
        "tier3": "Insurance Lot Coordination & Owner-Retain/Release"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Pickup Order Management",
        "tier3": "Pickup Status/Holds"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Scheduled Pickup Status",
        "tier3": "Missed/ Delayed Pickup and Dispatch Window"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Scheduled Pickup Status",
        "tier3": "Pickup Hours and Cutoff"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Scheduled Pickup Status",
        "tier3": "Schedule/ Reschedule Pickup"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Specialty Unit Pickups",
        "tier3": "Jet Ski Pickup"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Specialty Unit Pickups",
        "tier3": "RV or Camper Pickup"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Specialty Unit Pickups",
        "tier3": "Trailer or Boat Pickup"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Tow and Storage Charges",
        "tier3": "Storage Fee Waiver"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Tow and Storage Charges",
        "tier3": "Tow Charge Approval"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Tow and Storage Charges",
        "tier3": "Tow and Storage Fees"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Towing Network & Dispatch",
        "tier3": "Tow Company Contact"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Towing Network & Dispatch",
        "tier3": "Tow Dispatch & Requests"
      },
      {
        "tier1": "Vehicle Pickup, Delivery and Scheduling",
        "tier2": "Towing Network & Dispatch",
        "tier3": "Tow Provider Onboarding"
      }
    ]
  },
  "coverageNote": {
    "generated_at": "2026-06-26",
    "target_since": "2023-01-01",
    "target_until": "2026-05-31",
    "refreshed": [
      {
        "key": "copart",
        "display_name": "Copart",
        "since_date": "2023-01-01",
        "until_date": "2026-05-31",
        "review_count": 8344,
        "source_counts": {
          "reddit.com": 6196,
          "apps.apple.com": 236,
          "play.google.com": 631,
          "bbb.org": 889,
          "trustpilot.com": 152,
          "reviews.io": 225,
          "complaintsboard.com": 15
        },
        "source_audit": [
          {
            "source_website": "reddit.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "reddit_pullpush ran; candidate count is not separately tracked for this collector.",
              "reddit_arctic_shift ran; candidate count is not separately tracked for this collector."
            ],
            "errors": [],
            "review_count": 6196,
            "existing_review_count": 6196,
            "present": true,
            "latest_review_date": "2026-05-31",
            "existing_latest_date": "2026-05-31",
            "status": "ok"
          },
          {
            "source_website": "play.google.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 3922,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-24",
            "notes": [],
            "errors": [],
            "review_count": 631,
            "existing_review_count": 631,
            "present": true,
            "latest_review_date": "2026-05-29",
            "existing_latest_date": "2026-05-29",
            "status": "ok"
          },
          {
            "source_website": "apps.apple.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 660,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-16",
            "notes": [
              "Apple RSS can be sparse for some app IDs; HTML supplement captures visible App Store review cards only."
            ],
            "errors": [],
            "review_count": 236,
            "existing_review_count": 236,
            "present": true,
            "latest_review_date": "2026-05-30",
            "existing_latest_date": "2026-05-30",
            "status": "ok"
          },
          {
            "source_website": "bbb.org",
            "attempted": true,
            "direct_pages": 38,
            "fallback_pages": 38,
            "direct_statuses": {
              "403": 38,
              "200": 37,
              "429": 1
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 363,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-09",
            "notes": [
              "direct BBB customer reviews blocked for https://www.bbb.org/us/tx/dallas/profile/online-car-dealers/copart-inc-0875-90403032",
              "direct BBB complaints blocked for https://www.bbb.org/us/tx/dallas/profile/online-car-dealers/copart-inc-0875-90403032"
            ],
            "errors": [
              "reader status 429 for https://www.bbb.org/us/tx/dallas/profile/online-car-dealers/copart-inc-0875-90403032/complaints?page=27"
            ],
            "review_count": 889,
            "existing_review_count": 889,
            "present": true,
            "latest_review_date": "2026-05-21",
            "existing_latest_date": "2026-05-21",
            "status": "ok"
          },
          {
            "source_website": "trustpilot.com",
            "attempted": true,
            "direct_pages": 9,
            "fallback_pages": 23,
            "direct_statuses": {
              "403": 9,
              "200": 23
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 256,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-24",
            "notes": [
              "direct Trustpilot blocked for copart.co.uk",
              "reader challenge for https://www.trustpilot.com/review/copart.co.uk?page=11",
              "direct Trustpilot blocked for copart.com",
              "reader challenge for https://www.trustpilot.com/review/copart.com?page=3",
              "direct Trustpilot blocked for copart.de",
              "reader challenge for https://www.trustpilot.com/review/copart.de?page=3",
              "direct Trustpilot blocked for copart.ie",
              "reader challenge for https://www.trustpilot.com/review/copart.ie",
              "direct Trustpilot blocked for copart.es",
              "reader challenge for https://www.trustpilot.com/review/copart.es",
              "direct Trustpilot blocked for copart.fr",
              "reader challenge for https://www.trustpilot.com/review/copart.fr",
              "direct Trustpilot blocked for copart.nl",
              "reader challenge for https://www.trustpilot.com/review/copart.nl",
              "direct Trustpilot blocked for copart.it",
              "reader challenge for https://www.trustpilot.com/review/copart.it",
              "direct Trustpilot blocked for copart.ca",
              "reader challenge for https://www.trustpilot.com/review/copart.ca"
            ],
            "errors": [],
            "review_count": 152,
            "existing_review_count": 152,
            "present": true,
            "latest_review_date": "2026-05-15",
            "existing_latest_date": "2026-05-15",
            "status": "ok"
          },
          {
            "source_website": "reviews.io",
            "attempted": true,
            "direct_pages": 71,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 71
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 1293,
            "new_reviews_added": 0,
            "advertised_total": 606,
            "latest_candidate_date": "2026-06-19",
            "notes": [
              "Advertised total 606 is much larger than accepted rows 225; source is likely partially covered after filters/pagination."
            ],
            "errors": [],
            "review_count": 225,
            "existing_review_count": 225,
            "present": true,
            "latest_review_date": "2026-02-19",
            "existing_latest_date": "2026-02-19",
            "status": "partial"
          },
          {
            "source_website": "ripoffreport.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "ripoffreport ran; candidate count is not separately tracked for this collector."
            ],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "missing"
          },
          {
            "source_website": "smartcustomer.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 1
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 2,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "parsed_no_new_rows"
          },
          {
            "source_website": "complaintsboard.com",
            "attempted": true,
            "direct_pages": 6,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 6
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 113,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2024-02-14",
            "notes": [],
            "errors": [],
            "review_count": 15,
            "existing_review_count": 15,
            "present": true,
            "latest_review_date": "2023-11-03",
            "existing_latest_date": "2023-11-03",
            "status": "ok"
          }
        ]
      },
      {
        "key": "iaa",
        "display_name": "IAA",
        "since_date": "2023-01-01",
        "until_date": "2026-05-31",
        "review_count": 1844,
        "source_counts": {
          "trustpilot.com": 87,
          "bbb.org": 380,
          "play.google.com": 237,
          "reddit.com": 999,
          "apps.apple.com": 138,
          "complaintsboard.com": 3
        },
        "source_audit": [
          {
            "source_website": "reddit.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "reddit_pullpush ran; candidate count is not separately tracked for this collector.",
              "reddit_arctic_shift ran; candidate count is not separately tracked for this collector."
            ],
            "errors": [],
            "review_count": 999,
            "existing_review_count": 999,
            "present": true,
            "latest_review_date": "2026-05-19",
            "existing_latest_date": "2026-05-19",
            "status": "ok"
          },
          {
            "source_website": "play.google.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 1361,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-21",
            "notes": [],
            "errors": [],
            "review_count": 237,
            "existing_review_count": 237,
            "present": true,
            "latest_review_date": "2026-05-22",
            "existing_latest_date": "2026-05-22",
            "status": "ok"
          },
          {
            "source_website": "apps.apple.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 239,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-04-12",
            "notes": [
              "Apple RSS can be sparse for some app IDs; HTML supplement captures visible App Store review cards only."
            ],
            "errors": [],
            "review_count": 138,
            "existing_review_count": 138,
            "present": true,
            "latest_review_date": "2026-04-12",
            "existing_latest_date": "2026-04-12",
            "status": "ok"
          },
          {
            "source_website": "bbb.org",
            "attempted": true,
            "direct_pages": 18,
            "fallback_pages": 18,
            "direct_statuses": {
              "403": 18,
              "200": 18
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 160,
            "new_reviews_added": 131,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-01",
            "notes": [
              "direct BBB customer reviews blocked for https://www.bbb.org/us/il/westchester/profile/auto-auction/iaa-0654-88276839",
              "reader challenge for https://www.bbb.org/us/il/westchester/profile/auto-auction/iaa-0654-88276839/customer-reviews?page=9",
              "direct BBB complaints blocked for https://www.bbb.org/us/il/westchester/profile/auto-auction/iaa-0654-88276839",
              "reader challenge for https://www.bbb.org/us/il/westchester/profile/auto-auction/iaa-0654-88276839/complaints?page=9"
            ],
            "errors": [],
            "review_count": 380,
            "existing_review_count": 249,
            "present": true,
            "latest_review_date": "2026-05-27",
            "existing_latest_date": "2026-03-27",
            "status": "ok"
          },
          {
            "source_website": "trustpilot.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 4,
            "direct_statuses": {
              "403": 1,
              "200": 4
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 73,
            "new_reviews_added": 38,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-26",
            "notes": [
              "direct Trustpilot blocked for iaai.com"
            ],
            "errors": [],
            "review_count": 87,
            "existing_review_count": 49,
            "present": true,
            "latest_review_date": "2026-05-28",
            "existing_latest_date": "2026-04-08",
            "status": "ok"
          },
          {
            "source_website": "ripoffreport.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "ripoffreport ran; candidate count is not separately tracked for this collector."
            ],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "missing"
          },
          {
            "source_website": "smartcustomer.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 1
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 1,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "parsed_no_new_rows"
          },
          {
            "source_website": "complaintsboard.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 1
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 30,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2024-02-05",
            "notes": [],
            "errors": [],
            "review_count": 3,
            "existing_review_count": 3,
            "present": true,
            "latest_review_date": "2024-02-05",
            "existing_latest_date": "2024-02-05",
            "status": "ok"
          }
        ]
      },
      {
        "key": "manheim",
        "display_name": "Manheim",
        "since_date": "2023-01-01",
        "until_date": "2026-05-31",
        "review_count": 580,
        "source_counts": {
          "reddit.com": 145,
          "apps.apple.com": 90,
          "play.google.com": 60,
          "birdeye.com": 52,
          "bbb.org": 227,
          "trustpilot.com": 6
        },
        "source_audit": [
          {
            "source_website": "reddit.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "reddit_pullpush ran; candidate count is not separately tracked for this collector.",
              "reddit_arctic_shift ran; candidate count is not separately tracked for this collector."
            ],
            "errors": [],
            "review_count": 145,
            "existing_review_count": 145,
            "present": true,
            "latest_review_date": "2026-05-27",
            "existing_latest_date": "2026-05-27",
            "status": "ok"
          },
          {
            "source_website": "play.google.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 252,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-05-23",
            "notes": [],
            "errors": [],
            "review_count": 60,
            "existing_review_count": 60,
            "present": true,
            "latest_review_date": "2026-05-23",
            "existing_latest_date": "2026-05-23",
            "status": "ok"
          },
          {
            "source_website": "apps.apple.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 121,
            "new_reviews_added": 1,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-05",
            "notes": [
              "Apple RSS can be sparse for some app IDs; HTML supplement captures visible App Store review cards only."
            ],
            "errors": [],
            "review_count": 90,
            "existing_review_count": 89,
            "present": true,
            "latest_review_date": "2026-05-27",
            "existing_latest_date": "2026-05-27",
            "status": "ok"
          },
          {
            "source_website": "bbb.org",
            "attempted": true,
            "direct_pages": 23,
            "fallback_pages": 23,
            "direct_statuses": {
              "403": 23,
              "200": 23
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 92,
            "new_reviews_added": 83,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-02",
            "notes": [
              "direct BBB customer reviews blocked for https://www.bbb.org/us/az/tolleson/profile/auto-auction/manheim-phoenix-1126-15000273",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/ca/anaheim/profile/auto-auction/manheim-auctions-1126-1000068323",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/fl/tampa/profile/auto-auction/manheim-auctions-0653-90021503",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/ga/atlanta/profile/auctioneer/manheim-auctions-0443-6001743",
              "reader challenge for https://www.bbb.org/us/ga/atlanta/profile/auctioneer/manheim-auctions-0443-6001743/customer-reviews",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/in/indianapolis/profile/auto-auction/manheim-indianapolis-auto-auction-0382-90005341",
              "reader challenge for https://www.bbb.org/us/in/indianapolis/profile/auto-auction/manheim-indianapolis-auto-auction-0382-90005341/customer-reviews",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/mi/carleton/profile/auto-auction/manheims-detroit-auto-auction-0422-6001794",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/pa/manheim/profile/auctioneer/manheim-pennsylvania-auto-auction-0241-184056004",
              "direct BBB complaints blocked for https://www.bbb.org/us/az/tolleson/profile/auto-auction/manheim-phoenix-1126-15000273",
              "direct BBB complaints blocked for https://www.bbb.org/us/ca/anaheim/profile/auto-auction/manheim-auctions-1126-1000068323",
              "direct BBB complaints blocked for https://www.bbb.org/us/fl/tampa/profile/auto-auction/manheim-auctions-0653-90021503",
              "direct BBB complaints blocked for https://www.bbb.org/us/ga/atlanta/profile/auctioneer/manheim-auctions-0443-6001743",
              "reader challenge for https://www.bbb.org/us/ga/atlanta/profile/auctioneer/manheim-auctions-0443-6001743/complaints?page=10",
              "direct BBB complaints blocked for https://www.bbb.org/us/in/indianapolis/profile/auto-auction/manheim-indianapolis-auto-auction-0382-90005341",
              "direct BBB complaints blocked for https://www.bbb.org/us/mi/carleton/profile/auto-auction/manheims-detroit-auto-auction-0422-6001794",
              "reader challenge for https://www.bbb.org/us/mi/carleton/profile/auto-auction/manheims-detroit-auto-auction-0422-6001794/complaints",
              "direct BBB complaints blocked for https://www.bbb.org/us/pa/manheim/profile/auctioneer/manheim-pennsylvania-auto-auction-0241-184056004"
            ],
            "errors": [],
            "review_count": 227,
            "existing_review_count": 144,
            "present": true,
            "latest_review_date": "2026-05-06",
            "existing_latest_date": "2026-03-25",
            "status": "ok"
          },
          {
            "source_website": "trustpilot.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 1,
            "direct_statuses": {
              "403": 1,
              "200": 1
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "direct Trustpilot blocked for manheim.com",
              "reader challenge for https://www.trustpilot.com/review/manheim.com"
            ],
            "errors": [],
            "review_count": 6,
            "existing_review_count": 6,
            "present": true,
            "latest_review_date": "2026-02-11",
            "existing_latest_date": "2026-02-11",
            "status": "stale_or_no_recent_candidates"
          },
          {
            "source_website": "smartcustomer.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 1
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "missing"
          },
          {
            "source_website": "birdeye.com",
            "attempted": true,
            "direct_pages": 19,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 19
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 60,
            "new_reviews_added": 6,
            "advertised_total": 1439,
            "latest_candidate_date": "2026-06-05",
            "notes": [
              "Birdeye advertised totals may include syndicated Google/Birdeye network reviews; accepted rows are visible textual review cards that pass filters.",
              "Advertised total 1439 is much larger than accepted rows 52; source is likely partially covered after filters/pagination."
            ],
            "errors": [],
            "review_count": 52,
            "existing_review_count": 46,
            "present": true,
            "latest_review_date": "2026-05-15",
            "existing_latest_date": "2026-05-15",
            "status": "partial"
          }
        ]
      },
      {
        "key": "adesa",
        "display_name": "ADESA",
        "since_date": "2023-01-01",
        "until_date": "2026-05-31",
        "review_count": 243,
        "source_counts": {
          "birdeye.com": 59,
          "apps.apple.com": 115,
          "reddit.com": 25,
          "trustpilot.com": 16,
          "bbb.org": 6,
          "play.google.com": 22
        },
        "source_audit": [
          {
            "source_website": "reddit.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "reddit_pullpush ran; candidate count is not separately tracked for this collector.",
              "reddit_arctic_shift ran; candidate count is not separately tracked for this collector."
            ],
            "errors": [],
            "review_count": 25,
            "existing_review_count": 25,
            "present": true,
            "latest_review_date": "2026-04-05",
            "existing_latest_date": "2026-04-05",
            "status": "ok"
          },
          {
            "source_website": "play.google.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 268,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2025-12-06",
            "notes": [],
            "errors": [],
            "review_count": 22,
            "existing_review_count": 22,
            "present": true,
            "latest_review_date": "2025-06-16",
            "existing_latest_date": "2025-06-16",
            "status": "ok"
          },
          {
            "source_website": "apps.apple.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 200,
            "new_reviews_added": 1,
            "advertised_total": null,
            "latest_candidate_date": "2026-05-20",
            "notes": [
              "Apple RSS can be sparse for some app IDs; HTML supplement captures visible App Store review cards only."
            ],
            "errors": [],
            "review_count": 115,
            "existing_review_count": 114,
            "present": true,
            "latest_review_date": "2026-05-20",
            "existing_latest_date": "2026-05-20",
            "status": "ok"
          },
          {
            "source_website": "bbb.org",
            "attempted": true,
            "direct_pages": 12,
            "fallback_pages": 12,
            "direct_statuses": {
              "403": 12,
              "200": 12
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 3,
            "new_reviews_added": 3,
            "advertised_total": null,
            "latest_candidate_date": "2026-03-02",
            "notes": [
              "direct BBB customer reviews blocked for https://www.bbb.org/us/ca/sacramento/profile/auto-auction/adesa-sacramento-1156-33008688",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/ca/san-diego/profile/auto-auction/adesa-san-diego-1126-23000806",
              "reader challenge for https://www.bbb.org/us/ca/san-diego/profile/auto-auction/adesa-san-diego-1126-23000806/customer-reviews",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/fl/tampa/profile/auto-auction/adesa-tampa-0653-24838",
              "reader challenge for https://www.bbb.org/us/fl/tampa/profile/auto-auction/adesa-tampa-0653-24838/customer-reviews",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/mn/maple-grove/profile/auto-auction/adesa-minnesota-llc-0704-96174765",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/nv/north-las-vegas/profile/auto-auction/adesa-las-vegas-1086-90040145",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/tn/memphis/profile/auto-auction/adesa-auctions-memphis-0543-44000064",
              "direct BBB complaints blocked for https://www.bbb.org/us/ca/sacramento/profile/auto-auction/adesa-sacramento-1156-33008688",
              "direct BBB complaints blocked for https://www.bbb.org/us/ca/san-diego/profile/auto-auction/adesa-san-diego-1126-23000806",
              "direct BBB complaints blocked for https://www.bbb.org/us/fl/tampa/profile/auto-auction/adesa-tampa-0653-24838",
              "direct BBB complaints blocked for https://www.bbb.org/us/mn/maple-grove/profile/auto-auction/adesa-minnesota-llc-0704-96174765",
              "direct BBB complaints blocked for https://www.bbb.org/us/nv/north-las-vegas/profile/auto-auction/adesa-las-vegas-1086-90040145",
              "direct BBB complaints blocked for https://www.bbb.org/us/tn/memphis/profile/auto-auction/adesa-auctions-memphis-0543-44000064"
            ],
            "errors": [],
            "review_count": 6,
            "existing_review_count": 3,
            "present": true,
            "latest_review_date": "2026-03-02",
            "existing_latest_date": "2026-03-02",
            "status": "ok"
          },
          {
            "source_website": "trustpilot.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 2,
            "direct_statuses": {
              "403": 1,
              "200": 2
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 10,
            "new_reviews_added": 7,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-08",
            "notes": [
              "direct Trustpilot blocked for adesa.com",
              "reader challenge for https://www.trustpilot.com/review/adesa.com?page=2"
            ],
            "errors": [],
            "review_count": 16,
            "existing_review_count": 9,
            "present": true,
            "latest_review_date": "2026-04-01",
            "existing_latest_date": "2026-02-26",
            "status": "ok"
          },
          {
            "source_website": "smartcustomer.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 1
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "missing"
          },
          {
            "source_website": "complaintsboard.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 1
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 1,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2014-02-23",
            "notes": [],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "parsed_no_new_rows"
          },
          {
            "source_website": "birdeye.com",
            "attempted": true,
            "direct_pages": 20,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 20
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 70,
            "new_reviews_added": 9,
            "advertised_total": 631,
            "latest_candidate_date": "2026-06-23",
            "notes": [
              "Birdeye advertised totals may include syndicated Google/Birdeye network reviews; accepted rows are visible textual review cards that pass filters.",
              "Advertised total 631 is much larger than accepted rows 59; source is likely partially covered after filters/pagination."
            ],
            "errors": [],
            "review_count": 59,
            "existing_review_count": 50,
            "present": true,
            "latest_review_date": "2026-05-27",
            "existing_latest_date": "2026-05-24",
            "status": "partial"
          }
        ]
      },
      {
        "key": "openlane",
        "display_name": "OPENLANE",
        "since_date": "2023-01-01",
        "until_date": "2026-05-31",
        "review_count": 474,
        "source_counts": {
          "birdeye.com": 6,
          "apps.apple.com": 121,
          "trustpilot.com": 74,
          "play.google.com": 244,
          "bbb.org": 24,
          "reddit.com": 5
        },
        "source_audit": [
          {
            "source_website": "reddit.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "reddit_pullpush ran; candidate count is not separately tracked for this collector.",
              "reddit_arctic_shift ran; candidate count is not separately tracked for this collector."
            ],
            "errors": [],
            "review_count": 5,
            "existing_review_count": 5,
            "present": true,
            "latest_review_date": "2026-01-18",
            "existing_latest_date": "2026-01-18",
            "status": "ok"
          },
          {
            "source_website": "play.google.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 574,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-18",
            "notes": [],
            "errors": [],
            "review_count": 244,
            "existing_review_count": 244,
            "present": true,
            "latest_review_date": "2026-05-27",
            "existing_latest_date": "2026-05-27",
            "status": "ok"
          },
          {
            "source_website": "apps.apple.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 158,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-08",
            "notes": [
              "Apple RSS can be sparse for some app IDs; HTML supplement captures visible App Store review cards only."
            ],
            "errors": [],
            "review_count": 121,
            "existing_review_count": 121,
            "present": true,
            "latest_review_date": "2026-05-30",
            "existing_latest_date": "2026-05-30",
            "status": "ok"
          },
          {
            "source_website": "bbb.org",
            "attempted": true,
            "direct_pages": 3,
            "fallback_pages": 3,
            "direct_statuses": {
              "403": 3,
              "200": 3
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 16,
            "new_reviews_added": 11,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-02",
            "notes": [
              "direct BBB customer reviews blocked for https://www.bbb.org/us/in/carmel/profile/car-dealers/openlane-inc-0382-90024496",
              "direct BBB complaints blocked for https://www.bbb.org/us/in/carmel/profile/car-dealers/openlane-inc-0382-90024496"
            ],
            "errors": [],
            "review_count": 24,
            "existing_review_count": 13,
            "present": true,
            "latest_review_date": "2026-04-21",
            "existing_latest_date": "2025-11-17",
            "status": "ok"
          },
          {
            "source_website": "trustpilot.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 4,
            "direct_statuses": {
              "403": 1,
              "200": 4
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 59,
            "new_reviews_added": 36,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-09",
            "notes": [
              "direct Trustpilot blocked for openlane.com"
            ],
            "errors": [],
            "review_count": 74,
            "existing_review_count": 38,
            "present": true,
            "latest_review_date": "2026-05-29",
            "existing_latest_date": "2026-03-30",
            "status": "ok"
          },
          {
            "source_website": "smartcustomer.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 1
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "missing"
          },
          {
            "source_website": "birdeye.com",
            "attempted": true,
            "direct_pages": 2,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 2
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 10,
            "new_reviews_added": 1,
            "advertised_total": 64,
            "latest_candidate_date": "2026-06-19",
            "notes": [
              "Birdeye advertised totals may include syndicated Google/Birdeye network reviews; accepted rows are visible textual review cards that pass filters.",
              "Advertised total 64 is much larger than accepted rows 6; source is likely partially covered after filters/pagination."
            ],
            "errors": [],
            "review_count": 6,
            "existing_review_count": 5,
            "present": true,
            "latest_review_date": "2026-05-31",
            "existing_latest_date": "2026-05-31",
            "status": "partial"
          }
        ]
      },
      {
        "key": "acv",
        "display_name": "ACV",
        "since_date": "2023-01-01",
        "until_date": "2026-05-31",
        "review_count": 177,
        "source_counts": {
          "trustpilot.com": 27,
          "apps.apple.com": 78,
          "birdeye.com": 39,
          "bbb.org": 6,
          "play.google.com": 26,
          "reddit.com": 1
        },
        "source_audit": [
          {
            "source_website": "reddit.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "reddit_pullpush ran; candidate count is not separately tracked for this collector.",
              "reddit_arctic_shift ran; candidate count is not separately tracked for this collector."
            ],
            "errors": [],
            "review_count": 1,
            "existing_review_count": 1,
            "present": true,
            "latest_review_date": "2023-01-19",
            "existing_latest_date": "2023-01-19",
            "status": "ok"
          },
          {
            "source_website": "play.google.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 122,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-18",
            "notes": [],
            "errors": [],
            "review_count": 26,
            "existing_review_count": 26,
            "present": true,
            "latest_review_date": "2026-02-21",
            "existing_latest_date": "2026-02-21",
            "status": "ok"
          },
          {
            "source_website": "apps.apple.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 147,
            "new_reviews_added": 3,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-15",
            "notes": [
              "Apple RSS can be sparse for some app IDs; HTML supplement captures visible App Store review cards only."
            ],
            "errors": [],
            "review_count": 78,
            "existing_review_count": 75,
            "present": true,
            "latest_review_date": "2026-05-06",
            "existing_latest_date": "2026-03-17",
            "status": "ok"
          },
          {
            "source_website": "bbb.org",
            "attempted": true,
            "direct_pages": 2,
            "fallback_pages": 2,
            "direct_statuses": {
              "403": 2,
              "200": 2
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 3,
            "new_reviews_added": 3,
            "advertised_total": null,
            "latest_candidate_date": "2026-02-27",
            "notes": [
              "direct BBB customer reviews blocked for https://www.bbb.org/us/ca/san-diego/profile/used-car-dealers/acv-wholesale-1126-20007945",
              "direct BBB complaints blocked for https://www.bbb.org/us/ca/san-diego/profile/used-car-dealers/acv-wholesale-1126-20007945"
            ],
            "errors": [],
            "review_count": 6,
            "existing_review_count": 3,
            "present": true,
            "latest_review_date": "2026-02-27",
            "existing_latest_date": "2026-02-27",
            "status": "ok"
          },
          {
            "source_website": "trustpilot.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 2,
            "direct_statuses": {
              "403": 1,
              "200": 2
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 17,
            "new_reviews_added": 14,
            "advertised_total": null,
            "latest_candidate_date": "2026-06-04",
            "notes": [
              "direct Trustpilot blocked for acvauctions.com",
              "reader challenge for https://www.trustpilot.com/review/acvauctions.com?page=2"
            ],
            "errors": [],
            "review_count": 27,
            "existing_review_count": 13,
            "present": true,
            "latest_review_date": "2026-05-21",
            "existing_latest_date": "2026-03-28",
            "status": "ok"
          },
          {
            "source_website": "smartcustomer.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 1
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "missing"
          },
          {
            "source_website": "birdeye.com",
            "attempted": true,
            "direct_pages": 3,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 3
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 18,
            "new_reviews_added": 8,
            "advertised_total": 3915,
            "latest_candidate_date": "2026-06-21",
            "notes": [
              "Birdeye advertised totals may include syndicated Google/Birdeye network reviews; accepted rows are visible textual review cards that pass filters.",
              "Advertised total 3915 is much larger than accepted rows 39; source is likely partially covered after filters/pagination."
            ],
            "errors": [],
            "review_count": 39,
            "existing_review_count": 31,
            "present": true,
            "latest_review_date": "2026-04-27",
            "existing_latest_date": "2026-04-15",
            "status": "partial"
          }
        ]
      },
      {
        "key": "americas_auto_auction",
        "display_name": "America's Auto Auction",
        "since_date": "2023-01-01",
        "until_date": "2026-05-31",
        "review_count": 66,
        "source_counts": {
          "birdeye.com": 64,
          "bbb.org": 2
        },
        "source_audit": [
          {
            "source_website": "reddit.com",
            "attempted": true,
            "direct_pages": 0,
            "fallback_pages": 0,
            "direct_statuses": {},
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "reddit_pullpush ran; candidate count is not separately tracked for this collector.",
              "reddit_arctic_shift ran; candidate count is not separately tracked for this collector."
            ],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "missing"
          },
          {
            "source_website": "bbb.org",
            "attempted": true,
            "direct_pages": 6,
            "fallback_pages": 6,
            "direct_statuses": {
              "403": 6,
              "200": 6
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "direct BBB customer reviews blocked for https://www.bbb.org/us/il/centreville/profile/auto-auction/americas-auto-auction-0734-310446804",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/il/crestwood/profile/auto-auction/americas-auto-auction-chicago-0654-12015440",
              "direct BBB customer reviews blocked for https://www.bbb.org/us/tx/buda/profile/auto-auction/americas-auto-auction-austin-0825-90094147",
              "direct BBB complaints blocked for https://www.bbb.org/us/il/centreville/profile/auto-auction/americas-auto-auction-0734-310446804",
              "reader challenge for https://www.bbb.org/us/il/centreville/profile/auto-auction/americas-auto-auction-0734-310446804/complaints",
              "direct BBB complaints blocked for https://www.bbb.org/us/il/crestwood/profile/auto-auction/americas-auto-auction-chicago-0654-12015440",
              "direct BBB complaints blocked for https://www.bbb.org/us/tx/buda/profile/auto-auction/americas-auto-auction-austin-0825-90094147"
            ],
            "errors": [],
            "review_count": 2,
            "existing_review_count": 2,
            "present": true,
            "latest_review_date": "2026-01-21",
            "existing_latest_date": "2026-01-21",
            "status": "stale_or_no_recent_candidates"
          },
          {
            "source_website": "trustpilot.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 1,
            "direct_statuses": {
              "403": 1,
              "200": 1
            },
            "blocked": true,
            "fallback_used": true,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [
              "direct Trustpilot blocked for www.americasautoauction.com",
              "reader challenge for https://www.trustpilot.com/review/www.americasautoauction.com"
            ],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "missing"
          },
          {
            "source_website": "smartcustomer.com",
            "attempted": true,
            "direct_pages": 1,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 1
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 0,
            "new_reviews_added": 0,
            "advertised_total": null,
            "latest_candidate_date": null,
            "notes": [],
            "errors": [],
            "review_count": 0,
            "existing_review_count": 0,
            "present": false,
            "latest_review_date": null,
            "existing_latest_date": null,
            "status": "missing"
          },
          {
            "source_website": "birdeye.com",
            "attempted": true,
            "direct_pages": 22,
            "fallback_pages": 0,
            "direct_statuses": {
              "200": 22
            },
            "blocked": false,
            "fallback_used": false,
            "candidate_reviews_seen": 90,
            "new_reviews_added": 10,
            "advertised_total": 527,
            "latest_candidate_date": "2026-05-27",
            "notes": [
              "Birdeye advertised totals may include syndicated Google/Birdeye network reviews; accepted rows are visible textual review cards that pass filters.",
              "Advertised total 527 is much larger than accepted rows 64; source is likely partially covered after filters/pagination."
            ],
            "errors": [],
            "review_count": 64,
            "existing_review_count": 54,
            "present": true,
            "latest_review_date": "2026-05-27",
            "existing_latest_date": "2026-05-17",
            "status": "partial"
          }
        ]
      }
    ],
    "stale": []
  }
};
