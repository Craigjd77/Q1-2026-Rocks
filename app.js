const data = {
  mailboxScope: [
    "All mailboxes",
    "Inbox",
    "Shared mailbox",
    "Team mailbox",
    "Client folders",
    "FRT \u2192 Clients",
    "FRT \u2192 Claims Deadlines",
    "FRT \u2192 Settlement Notices",
    "FRT \u2192 Team Updates",
    "FRT \u2192 Legal Updates",
  ],
  clientShortName: [
    "CSIM",
    "NORGES",
    "BLACKROCK",
    "VANGUARD",
    "FIDELITY",
    "JPMAM",
    "PIMCO",
    "STATESTREET",
    "MORGANSTAN",
    "GOLDMANS",
    "TROWE",
    "CAPGROUP",
    "UBS",
    "CITIBANK",
    "BNYMELLON",
    "ALLIANZ",
    "PRUDENTIAL",
    "CALPERS",
    "CALSTRS",
    "NYSRETIRE",
  ],
  clientType: [
    "Institutional investor",
    "Asset manager",
    "Pension fund",
    "Endowment",
    "Sovereign wealth fund",
    "Family office",
    "Hedge fund",
    "Broker-dealer",
    "RIA",
    "Insurance carrier",
    "Public company",
    "Private equity",
    "Mutual fund",
    "ETF provider",
    "Corporate treasury",
    "Non-profit foundation",
    "Trust office",
    "University client",
    "International client",
    "Prospective client",
  ],
  topicFocus: [
    "Remittance and checks",
    "Proof of claim status",
    "Case tracking request",
    "Settlement notice review",
    "Vendor questionnaire",
    "Annual questionnaire",
    "Documentation audit",
    "Custodian documentation",
    "Claim form submission",
    "Opt-in activity",
    "Non-US monitoring",
    "Jurisdiction updates",
    "Risk level review",
    "Case status update",
    "Court update",
    "Account maintenance",
    "Recognized loss calc",
    "Refresh schedule",
    "Marketing updates",
    "Webinar and events",
  ],
  caseStage: [
    "New filing",
    "Lead plaintiff motion",
    "Class certification",
    "Discovery",
    "Settlement announced",
    "Settlement approved",
    "Claims period open",
    "Claims deadline approaching",
    "Distribution phase",
    "Appeal pending",
    "Dismissal order",
    "Motion to dismiss",
    "Notice issued",
    "Opt-out window",
    "Exclusion requests",
    "Fee award",
    "Final judgment",
    "Reopened claims",
    "Late claims review",
    "Case monitoring",
  ],
  jurisdiction: [
    "S.D.N.Y.",
    "N.D. Cal.",
    "D. Del.",
    "C.D. Cal.",
    "D.N.J.",
    "D. Mass.",
    "S.D. Tex.",
    "N.D. Ill.",
    "D. Colo.",
    "E.D. Va.",
    "W.D. Wash.",
    "S.D. Fla.",
    "N.D. Tex.",
    "E.D. Pa.",
    "N.D. Ga.",
    "D. Md.",
    "D. Minn.",
    "D. Ariz.",
    "Federal appellate",
    "State court",
  ],
  priority: [
    "Urgent client action",
    "High priority",
    "Time-sensitive",
    "Client escalation",
    "Leadership visibility",
    "Same-day response",
    "Weekly summary",
    "Routine update",
    "FYI",
    "Backlog",
    "Legal review",
    "Compliance review",
    "Finance approval",
    "External counsel",
    "Operations",
    "Case assignment",
    "Follow-up needed",
    "Pending client reply",
    "Needs filing",
    "Needs review",
  ],
  age: [
    "Last 24 hours",
    "Last 3 days",
    "Last 7 days",
    "Last 14 days",
    "Last 30 days",
    "Last 60 days",
    "Last 90 days",
    "This week",
    "Last week",
    "This month",
    "Last month",
    "This quarter",
    "Last quarter",
    "Year to date",
    "Rolling 6 months",
    "Older than 90 days",
    "Older than 180 days",
    "Older than 1 year",
    "Custom date range",
    "No date filter",
  ],
  senderFocus: [
    "Client executives",
    "Client legal counsel",
    "Client operations",
    "Custodians",
    "External counsel",
    "Settlement administrators",
    "Claims administrators",
    "Regulators",
    "Lead plaintiffs",
    "Defense counsel",
    "Opposing counsel",
    "Internal leadership",
    "Internal analysts",
    "Monitoring alerts",
    "Automated notices",
    "Market data vendors",
    "Brokers",
    "Partners",
    "Third-party auditors",
    "Unknown senders",
  ],
  keywords: [
    "settlement, claims deadline, proof of claim",
    "class certification, briefing, hearing",
    "opt-out, exclusion, request to be excluded",
    "lead plaintiff, appointment, motion",
    "notice, dissemination, publication",
    "distribution, payment, allocation",
    "deficiency, cure, rejection",
    "appeal, stay, supersedeas",
    "plan of allocation, plan update",
    "eligibility, class period, trades",
    "losses, damages, LIFO/FIFO",
    "custodian, broker, omnibus",
    "subpoena, discovery, production",
    "status report, case update",
    "escrow, tax, interest",
    "claim form, portal, login",
    "tolling, statute of limitations",
    "dismissal, prejudice, order",
    "stipulation, agreement, amendment",
    "reminder, final notice, postcard",
  ],
  attachments: [
    "Has any attachment",
    "No attachments",
    "Has PDF attachments",
    "Has Excel attachments",
    "Has Word attachments",
    "Has CSV attachments",
    "Has ZIP attachments",
    "Has image attachments",
    "Has scanned docs",
    "Has images",
    "Contains forms",
    "Contains signed docs",
    "Contains spreadsheets",
    "Contains statements",
    "Contains presentations",
    "Contains invoices",
    "Contains settlement notices",
    "Contains claim forms",
    "Contains court orders",
    "Contains correspondence",
    "Contains confirmations",
    "Contains wire info",
    "Attachment type ignored",
  ],
  searchMode: ["Broad search", "Narrow search"],
  searchField: ["Anywhere (subject/body)", "Subject only"],
  exclusions: [
    "Exclude internal newsletters",
    "Exclude marketing",
    "Exclude automated out-of-office",
    "Exclude vendor alerts",
    "Exclude calendar invites",
    "Exclude low-priority",
    "Exclude no-reply",
    "Exclude bulk mail",
    "Exclude duplicate threads",
    "Exclude system notifications",
    "Exclude social updates",
    "Exclude security alerts",
    "Exclude HR messages",
    "Exclude unrelated industries",
    "Exclude training",
    "Exclude personal",
    "Exclude junk",
    "Exclude follow-up reminders",
    "Exclude scheduling",
    "Exclude archived",
  ],
  destination: [
    "FRT \u2192 Client Critical",
    "FRT \u2192 Claims Deadlines",
    "FRT \u2192 Settlement Notices",
    "FRT \u2192 Lead Plaintiff",
    "FRT \u2192 Court Orders",
    "FRT \u2192 Compliance",
    "FRT \u2192 Escalations",
    "FRT \u2192 Executive Updates",
    "FRT \u2192 Finance Review",
    "FRT \u2192 Weekly Digest",
    "FRT \u2192 Discovery",
    "FRT \u2192 Distribution",
    "FRT \u2192 Opt-Outs",
    "FRT \u2192 Rejections",
    "FRT \u2192 Appeals",
    "FRT \u2192 Custodian",
    "FRT \u2192 Counsel",
    "FRT \u2192 Research",
    "FRT \u2192 Intake",
    "FRT \u2192 Archive",
  ],
};

const datalistIds = [
  "mailboxScope",
  "clientShortName",
  "clientType",
  "topicFocus",
  "caseStage",
  "jurisdiction",
  "priority",
  "age",
  "senderFocus",
  "keywords",
  "attachments",
  "exclusions",
  "destination",
];

const selectIds = ["searchMode", "searchField"];

const fieldIds = [...datalistIds, ...selectIds];
const datalistElements = Object.fromEntries(
  datalistIds.map((id) => [id, document.getElementById(`${id}List`)])
);
const fieldElements = Object.fromEntries(
  fieldIds.map((id) => [id, document.getElementById(id)])
);

const recipeTemplates = [
  ({ summary, searchQuery }) =>
    `Search name: ${summary}\nSearch query: ${searchQuery}`,
];

const clientFullNameInput = document.getElementById("clientFullName");
const caseNameInput = document.getElementById("caseName");
const folderPathInput = document.getElementById("folderPath");
const toFieldInput = document.getElementById("toField");
const ccFieldInput = document.getElementById("ccField");
const emailAddressInput = document.getElementById("emailAddress");
const personNameInput = document.getElementById("personName");
const remittancePresetInput = document.getElementById("remittancePreset");
const settlementNoticePresetInput = document.getElementById(
  "settlementNoticePreset"
);
const claimsDeadlinePresetInput = document.getElementById(
  "claimsDeadlinePreset"
);
const rejectionNoticePresetInput = document.getElementById(
  "rejectionNoticePreset"
);
const filterUnreadInput = document.getElementById("filterUnread");
const filterAttachmentsInput = document.getElementById("filterAttachments");
const filterFlaggedInput = document.getElementById("filterFlagged");
const filterMentionsInput = document.getElementById("filterMentions");
const filterToMeInput = document.getElementById("filterToMe");

const recipeList = document.getElementById("recipe-list");
const badge = document.getElementById("selectionBadge");
const generateButton = document.getElementById("generate");
const saveFavoriteButton = document.getElementById("save-favorite");
const clearFormButton = document.getElementById("clear-form");
const favoritesList = document.getElementById("favorites-list");
const favoritesEmpty = document.getElementById("favorites-empty");
const favoritesCount = document.getElementById("favoritesCount");
const queryOutput = document.getElementById("queryOutput");
const copyQueryButton = document.getElementById("copyQueryButton");

const FAVORITES_KEY = "frtOutlookFavorites";
const includeInputs = Array.from(
  document.querySelectorAll("[data-include-for]")
);
const isIncluded = (id) =>
  includeInputs.find((input) => input.dataset.includeFor === id)?.checked;

const fillSelect = (select, options) => {
  select.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Choose...";
  placeholder.selected = true;
  select.appendChild(placeholder);
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
};

const fillDatalist = (list, options) => {
  list.innerHTML = "";
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    list.appendChild(option);
  });
};

const loadOptions = () => {
  fillDatalist(datalistElements.mailboxScope, data.mailboxScope);
  fillDatalist(datalistElements.clientShortName, data.clientShortName);
  fillDatalist(datalistElements.clientType, data.clientType);
  fillDatalist(datalistElements.topicFocus, data.topicFocus);
  fillDatalist(datalistElements.caseStage, data.caseStage);
  fillDatalist(datalistElements.jurisdiction, data.jurisdiction);
  fillDatalist(datalistElements.priority, data.priority);
  fillDatalist(datalistElements.age, data.age);
  fillDatalist(datalistElements.senderFocus, data.senderFocus);
  fillDatalist(datalistElements.keywords, data.keywords);
  fillDatalist(datalistElements.attachments, data.attachments);
  fillDatalist(datalistElements.exclusions, data.exclusions);
  fillDatalist(datalistElements.destination, data.destination);
  fillSelect(fieldElements.searchMode, data.searchMode);
  fillSelect(fieldElements.searchField, data.searchField);
  if (data.mailboxScope.includes("All mailboxes")) {
    fieldElements.mailboxScope.value = "All mailboxes";
  }
};

const resolveValue = (value) => {
  if (value && typeof value === "object" && "value" in value) {
    return value.value;
  }
  return value;
};

const normalizeValue = (value) => {
  const resolved = resolveValue(value);
  if (resolved == null) return "";
  return typeof resolved === "string" ? resolved.trim() : String(resolved).trim();
};

const normalizeText = (value) => normalizeValue(value);
const includeValue = (id, value) =>
  isIncluded(id) ? normalizeValue(value) : "";

const getCaseName = () => normalizeText(caseNameInput.value);

const getCurrentSelections = () => ({
  mailboxScope: fieldElements.mailboxScope.value,
  clientShortName: fieldElements.clientShortName.value,
  clientFullName: clientFullNameInput.value,
  folderPath: folderPathInput.value,
  toField: toFieldInput.value,
  ccField: ccFieldInput.value,
  emailAddress: emailAddressInput.value,
  personName: personNameInput.value,
  remittancePreset: remittancePresetInput.checked,
  settlementNoticePreset: settlementNoticePresetInput.checked,
  claimsDeadlinePreset: claimsDeadlinePresetInput.checked,
  rejectionNoticePreset: rejectionNoticePresetInput.checked,
  filterUnread: filterUnreadInput.checked,
  filterAttachments: filterAttachmentsInput.checked,
  filterFlagged: filterFlaggedInput.checked,
  filterMentions: filterMentionsInput.checked,
  filterToMe: filterToMeInput.checked,
  clientType: fieldElements.clientType.value,
  topicFocus: fieldElements.topicFocus.value,
  caseName: caseNameInput.value,
  caseStage: fieldElements.caseStage.value,
  jurisdiction: fieldElements.jurisdiction.value,
  priority: fieldElements.priority.value,
  age: fieldElements.age.value,
  senderFocus: fieldElements.senderFocus.value,
  keywords: fieldElements.keywords.value,
  attachments: fieldElements.attachments.value,
  exclusions: fieldElements.exclusions.value,
  destination: fieldElements.destination.value,
  searchMode: fieldElements.searchMode.value,
  searchField: fieldElements.searchField.value,
});

const buildSummary = (values) => {
  const clientShortName = includeValue("clientShortName", values.clientShortName);
  const caseName = normalizeText(values.caseName);
  const mailboxScope = includeValue("mailboxScope", values.mailboxScope);
  const topicFocus = includeValue("topicFocus", values.topicFocus);
  const folderPath = normalizeText(values.folderPath);
  const parts = [
    includeValue("destination", values.destination) && `${values.destination}`,
    folderPath && `Folder ${folderPath}`,
    clientShortName,
    caseName,
    topicFocus,
    includeValue("caseStage", values.caseStage) && `${values.caseStage}`,
    includeValue("clientType", values.clientType) && `${values.clientType}`,
  ].filter(Boolean);

  return parts.length ? parts.join(" \u2022 ") : "FRT Outlook Search Folder";
};

const buildFilter = (values) => {
  const clientShortName = normalizeValue(values.clientShortName);
  const mailboxScope = includeValue("mailboxScope", values.mailboxScope);
  const caseName = normalizeText(values.caseName);
  const folderPath = normalizeText(values.folderPath);
  const toField = normalizeText(values.toField);
  const ccField = normalizeText(values.ccField);
  const emailAddress = normalizeText(values.emailAddress);
  const personName = normalizeText(values.personName);
  const clientFullName =
    normalizeText(values.clientFullName) ||
    normalizeValue(values.clientShortName);
  const quickFilters = [
    values.filterUnread && "Unread",
    values.filterAttachments && "Has attachments",
    values.filterFlagged && "Flagged",
    values.filterMentions && "Mentions me",
    values.filterToMe && "To me",
  ].filter(Boolean);
  const parts = [
    includeValue("mailboxScope", values.mailboxScope) &&
      `Scope="${values.mailboxScope}"`,
    includeValue("senderFocus", values.senderFocus) &&
      `From="${values.senderFocus}"`,
    clientShortName && `ClientShort="${clientShortName}"`,
    includeValue("clientType", values.clientType) &&
      `ClientType="${values.clientType}"`,
    includeValue("topicFocus", values.topicFocus) &&
      `Topic="${values.topicFocus}"`,
    caseName && `Case="${caseName}"`,
    folderPath && !folderPath.startsWith("[object") && `Folder="${folderPath}"`,
    toField && `To="${toField}"`,
    ccField && `CC="${ccField}"`,
    emailAddress && `From="${emailAddress}"`,
    personName && `From="${personName}"`,
    values.remittancePreset && `Template="Remittance Report"`,
    values.settlementNoticePreset && `Template="Settlement Notice"`,
    values.claimsDeadlinePreset && `Template="Claims Deadline"`,
    values.rejectionNoticePreset && `Template="Rejection/Deficiency"`,
    quickFilters.length && `Quick="${quickFilters.join(", ")}"`,
    includeValue("caseStage", values.caseStage) && `Stage="${values.caseStage}"`,
    includeValue("jurisdiction", values.jurisdiction) &&
      `Court="${values.jurisdiction}"`,
    includeValue("priority", values.priority) && `Priority="${values.priority}"`,
    includeValue("age", values.age) && `Received="${values.age}"`,
    includeValue("keywords", values.keywords) && `Keywords="${values.keywords}"`,
    includeValue("attachments", values.attachments) &&
      `Attachments="${values.attachments}"`,
    includeValue("exclusions", values.exclusions) &&
      `Exclude="${values.exclusions}"`,
  ].filter(Boolean);

  return parts.join(" AND ") || "(No filters selected)";
};

const buildSearchQuery = (values) => {
  const clientShortName = normalizeValue(values.clientShortName);
  const caseName = normalizeText(values.caseName);
  const mailboxScope = includeValue("mailboxScope", values.mailboxScope);
  const folderPath = normalizeText(values.folderPath);
  const toField = normalizeText(values.toField);
  const ccField = normalizeText(values.ccField);
  const emailAddress = normalizeText(values.emailAddress);
  const personName = normalizeText(values.personName);
  const clientFullName =
    normalizeText(values.clientFullName) ||
    normalizeValue(values.clientShortName);
  const isNarrow = values.searchMode === "Narrow search";
  const subjectOnly = values.searchField === "Subject only";
  const wrapTerm = (term) =>
    subjectOnly ? `subject:"${term}"` : `"${term}"`;
  const strictTerms = [];
  const flexTerms = [];

  if (mailboxScope && mailboxScope !== "All mailboxes") {
    strictTerms.push(`folder:"${mailboxScope}"`);
  }

  if (includeValue("senderFocus", values.senderFocus)) {
    flexTerms.push(`from:"${values.senderFocus}"`);
  }
  if (toField) {
    strictTerms.push(`to:"${toField}"`);
  }
  if (ccField) {
    strictTerms.push(`cc:"${ccField}"`);
  }

  const fromTerms = [];
  if (emailAddress) {
    fromTerms.push(`from:"${emailAddress}"`);
  }
  if (personName) {
    fromTerms.push(`from:"${personName}"`);
  }
  if (fromTerms.length === 1) {
    flexTerms.push(fromTerms[0]);
  }
  if (fromTerms.length > 1) {
    flexTerms.push(`(${fromTerms.join(" OR ")})`);
  }

  if (values.filterUnread) {
    strictTerms.push("isread:no");
  }
  if (values.filterAttachments) {
    strictTerms.push("hasattachments:yes");
  }
  if (values.filterFlagged) {
    strictTerms.push("flagged:yes");
  }
  if (values.filterMentions) {
    strictTerms.push("mentions:me");
  }
  if (values.filterToMe) {
    strictTerms.push("to:me");
  }

  if (values.remittancePreset) {
    if (clientFullName) {
      strictTerms.push(`subject:"Remittance Report - ${clientFullName}"`);
    }
    strictTerms.push('from:"FRT-ClientSupport"');
  }
  if (values.settlementNoticePreset) {
    strictTerms.push('subject:"Settlement Notice"');
    if (clientFullName) {
      strictTerms.push(wrapTerm(clientFullName));
    }
  }
  if (values.claimsDeadlinePreset) {
    strictTerms.push('(subject:"Claims Deadline" OR subject:"Claim Deadline")');
    if (clientFullName) {
      strictTerms.push(wrapTerm(clientFullName));
    }
  }
  if (values.rejectionNoticePreset) {
    strictTerms.push('(subject:"Rejection" OR subject:"Deficiency")');
    if (clientFullName) {
      strictTerms.push(wrapTerm(clientFullName));
    }
  }

  if (folderPath && !folderPath.startsWith("[object")) {
    strictTerms.push(`folder:"${folderPath}"`);
  }
  if (clientShortName) {
    flexTerms.push(wrapTerm(clientShortName));
  }
  if (includeValue("topicFocus", values.topicFocus)) {
    flexTerms.push(wrapTerm(values.topicFocus));
  }
  if (caseName) {
    flexTerms.push(wrapTerm(caseName));
  }
  if (includeValue("caseStage", values.caseStage)) {
    flexTerms.push(wrapTerm(values.caseStage));
  }
  if (includeValue("jurisdiction", values.jurisdiction)) {
    flexTerms.push(wrapTerm(values.jurisdiction));
  }
  if (includeValue("keywords", values.keywords)) {
    const keywordTerms = values.keywords
      .split(",")
      .map((term) => term.trim())
      .filter(Boolean)
      .map((term) => wrapTerm(term));
    if (keywordTerms.length) {
      const keywordGroup = isNarrow
        ? `(${keywordTerms.join(" AND ")})`
        : `(${keywordTerms.join(" OR ")})`;
      flexTerms.push(keywordGroup);
    }
  }
  if (includeValue("attachments", values.attachments)) {
    const attachmentMap = {
      "Has PDF attachments": "ext:pdf",
      "Has Excel attachments": "(ext:xls OR ext:xlsx)",
      "Has Word attachments": "(ext:doc OR ext:docx)",
      "Has CSV attachments": "ext:csv",
      "Has ZIP attachments": "ext:zip",
      "Has image attachments": "(ext:png OR ext:jpg OR ext:jpeg)",
    };
    if (values.attachments === "No attachments") {
      strictTerms.push("hasattachments:no");
    } else if (values.attachments === "Has any attachment") {
      strictTerms.push("hasattachments:yes");
    } else if (attachmentMap[values.attachments]) {
      strictTerms.push("hasattachments:yes");
      strictTerms.push(attachmentMap[values.attachments]);
    }
  }
  if (includeValue("age", values.age)) {
    const ageMap = {
      "Last 24 hours": "received:today",
      "This week": "received:thisweek",
      "Last week": "received:lastweek",
      "This month": "received:thismonth",
      "Last month": "received:lastmonth",
      "This quarter": "received:thisquarter",
      "Last quarter": "received:lastquarter",
      "Year to date": "received:thisyear",
    };
    if (ageMap[values.age]) {
      strictTerms.push(ageMap[values.age]);
    }
  }

  const terms = [...strictTerms];
  if (isNarrow) {
    terms.push(...flexTerms);
  } else if (flexTerms.length === 1) {
    terms.push(flexTerms[0]);
  } else if (flexTerms.length > 1) {
    terms.push(`(${flexTerms.join(" OR ")})`);
  }

  return terms.join(" ") || "(no search terms)";
};

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const fallback = document.createElement("textarea");
    fallback.value = text;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "absolute";
    fallback.style.left = "-9999px";
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    document.body.removeChild(fallback);
  }
};

const buildRecipes = () => {
  const values = getCurrentSelections();
  const summary = buildSummary(values);
  const searchQuery = buildSearchQuery(values);

  if (queryOutput) {
    queryOutput.textContent = searchQuery;
  }

  recipeList.innerHTML = "";
  recipeTemplates.forEach((template, index) => {
    const recipe = template({ summary, searchQuery });
    const item = document.createElement("li");
    item.className = "prompt-item";
    item.innerHTML = `<span>${index + 1}.</span><p class="prompt-text">${recipe}</p>`;

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "small-button";
    copyButton.textContent = "Copy query";
    copyButton.addEventListener("click", () => copyText(searchQuery));

    item.appendChild(copyButton);
    recipeList.appendChild(item);
  });

  const badgeValues = [
    normalizeValue(values.clientShortName),
    normalizeValue(values.topicFocus),
    normalizeValue(values.caseStage),
    normalizeValue(values.clientType),
    normalizeValue(values.destination),
  ].filter(Boolean);
  badge.textContent = badgeValues.length
    ? `Using ${badgeValues.join(", ")}`
    : "Selections ready";
};

const readFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) ?? [];
  } catch (error) {
    return [];
  }
};

const writeFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

const setSelections = (values) => {
  fieldElements.mailboxScope.value = values.mailboxScope;
  fieldElements.clientShortName.value = values.clientShortName;
  clientFullNameInput.value = values.clientFullName || "";
  folderPathInput.value = values.folderPath || "";
  toFieldInput.value = values.toField || "";
  ccFieldInput.value = values.ccField || "";
  emailAddressInput.value = values.emailAddress || "";
  personNameInput.value = values.personName || "";
  remittancePresetInput.checked = Boolean(values.remittancePreset);
  settlementNoticePresetInput.checked = Boolean(values.settlementNoticePreset);
  claimsDeadlinePresetInput.checked = Boolean(values.claimsDeadlinePreset);
  rejectionNoticePresetInput.checked = Boolean(values.rejectionNoticePreset);
  filterUnreadInput.checked = Boolean(values.filterUnread);
  filterAttachmentsInput.checked = Boolean(values.filterAttachments);
  filterFlaggedInput.checked = Boolean(values.filterFlagged);
  filterMentionsInput.checked = Boolean(values.filterMentions);
  filterToMeInput.checked = Boolean(values.filterToMe);
  fieldElements.clientType.value = values.clientType;
  fieldElements.topicFocus.value = values.topicFocus;
  caseNameInput.value = values.caseName || "";
  fieldElements.caseStage.value = values.caseStage;
  fieldElements.jurisdiction.value = values.jurisdiction;
  fieldElements.priority.value = values.priority;
  fieldElements.age.value = values.age;
  fieldElements.senderFocus.value = values.senderFocus;
  fieldElements.keywords.value = values.keywords;
  fieldElements.attachments.value = values.attachments;
  fieldElements.exclusions.value = values.exclusions;
  fieldElements.destination.value = values.destination;
  fieldElements.searchMode.value = values.searchMode;
  fieldElements.searchField.value = values.searchField;
};

const renderFavorites = () => {
  const favorites = readFavorites();
  favoritesList.innerHTML = "";
  favoritesEmpty.style.display = favorites.length ? "none" : "block";
  favoritesCount.textContent = `${favorites.length} saved`;

  favorites.forEach((favorite) => {
    const card = document.createElement("div");
    card.className = "favorite-card";

    const title = document.createElement("div");
    title.className = "favorite-title";
    title.textContent = favorite.name;

    const meta = document.createElement("div");
    meta.className = "favorite-meta";
    meta.textContent = [
      normalizeValue(favorite.values.clientShortName),
      normalizeText(favorite.values.folderPath),
      normalizeText(favorite.values.toField),
      normalizeText(favorite.values.ccField),
      normalizeValue(favorite.values.topicFocus),
      normalizeText(favorite.values.caseName),
      normalizeValue(favorite.values.caseStage),
      normalizeValue(favorite.values.clientType),
      normalizeValue(favorite.values.destination),
      normalizeValue(favorite.values.age),
      normalizeValue(favorite.values.priority),
    ]
      .filter(Boolean)
      .join(" \u2022 ");

    const actions = document.createElement("div");
    actions.className = "favorite-actions";

    const applyButton = document.createElement("button");
    applyButton.className = "small-button";
    applyButton.type = "button";
    applyButton.textContent = "Apply";
    applyButton.addEventListener("click", () => {
      setSelections(favorite.values);
      buildRecipes();
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "small-button";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      const updated = readFavorites().filter((item) => item.id !== favorite.id);
      writeFavorites(updated);
      renderFavorites();
    });

    actions.appendChild(applyButton);
    actions.appendChild(deleteButton);

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(actions);
    favoritesList.appendChild(card);
  });
};

const buildFavoriteName = (values) => {
  const clientShortName = normalizeValue(values.clientShortName);
  const topic = normalizeValue(values.topicFocus);
  const caseName = normalizeText(values.caseName);
  return `${
    clientShortName || values.destination || "FRT"
  } \u2022 ${caseName || topic || values.caseStage || "Update"}`;
};

const saveFavorite = () => {
  const values = getCurrentSelections();
  const favorites = readFavorites();
  const entry = {
    id:
      (globalThis.crypto && crypto.randomUUID && crypto.randomUUID()) ||
      `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: buildFavoriteName(values),
    values,
  };
  writeFavorites([entry, ...favorites]);
  renderFavorites();
};

loadOptions();
buildRecipes();
renderFavorites();

if (copyQueryButton) {
  copyQueryButton.addEventListener("click", () => {
    if (queryOutput) {
      copyText(queryOutput.textContent);
    }
  });
}

if (clearFormButton) {
  clearFormButton.addEventListener("click", () => {
    const defaultIncludes = new Set([
      "mailboxScope",
      "clientShortName",
      "topicFocus",
      "keywords",
      "destination",
    ]);
    includeInputs.forEach((input) => {
      input.checked = defaultIncludes.has(input.dataset.includeFor);
    });

    Object.values(fieldElements).forEach((field) => {
      if (!field) return;
      if (field.tagName === "SELECT") {
        field.selectedIndex = 0;
      } else {
        field.value = "";
      }
    });

    clientFullNameInput.value = "";
    folderPathInput.value = "";
    toFieldInput.value = "";
    ccFieldInput.value = "";
    emailAddressInput.value = "";
    personNameInput.value = "";

    remittancePresetInput.checked = false;
    settlementNoticePresetInput.checked = false;
    claimsDeadlinePresetInput.checked = false;
    rejectionNoticePresetInput.checked = false;

    filterUnreadInput.checked = false;
    filterAttachmentsInput.checked = false;
    filterFlaggedInput.checked = false;
    filterMentionsInput.checked = false;
    filterToMeInput.checked = false;

    fieldElements.mailboxScope.value = "All mailboxes";
    buildRecipes();
  });
}

generateButton.addEventListener("click", (event) => {
  event.preventDefault();
  buildRecipes();
});

saveFavoriteButton.addEventListener("click", (event) => {
  event.preventDefault();
  saveFavorite();
});