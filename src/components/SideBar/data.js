import {
  CurrencyRupee,
  FactCheckOutlined,
  PersonAddAlt1Outlined,
  RecommendOutlined,
} from "@mui/icons-material";
import {
  PermIdentityOutlined,
  SearchOutlined,
  ShareOutlined,
} from "@material-ui/icons";

export const form = [
  {
    name: "What do we call you?",
    type: "input",
    forms: [
      {
        store: "firstName",
        label: "First Name",
      },
      {
        store: "lastName",
        label: "Last Name",
      },
    ],
  },
  {
    name: "What is your current salary (in LPA)?",
    type: "input",
    forms: [
      {
        store: "currentFixed",
        label: "Fixed Salary",
      },
      {
        store: "currentVariable",
        label: "Variable",
      },
      {
        store: "currentStocks",
        label: "Stocks per year",
      },
    ],
  },
  {
    name: "What is your expected cash salary (in LPA)?",
    type: "input",
    forms: [
      {
        store: "expected",
        label: "",
      },
    ],
  },
  {
    name: "How likely are you to switch jobs?",
    type: "dropdown",
    forms: [
      {
        store: "jobSwitch",
        label: "",
        options: [
          { name: "Passively looking out", value: 0 },
          { name: "Actively looking out", value: 1 },
          { name: "Serving notice period", value: 2 },
          { name: "Offer in hand", value: 3 },
          { name: "Looking for contract/freelance roles", value: 4 },
          { name: "Not looking for job switch", value: 5 },
          { name: "Please don't contact me", value: 6 },
        ],
      },
    ],
  },
  {
    name: "How long is your notice period?",
    type: "dropdown",
    forms: [
      {
        store: "noticePeriod",
        label: "",
        options: [
          { name: "Immediate joining", value: 0 },
          { name: "Actively looking out", value: 1 },
          { name: "Serving notice period", value: 2 },
          { name: "Offer in hand", value: 3 },
          { name: "Looking for contract/freelance roles", value: 4 },
          { name: "Not looking for job switch", value: 5 },
          { name: "Please don't contact me", value: 6 },
        ],
      },
    ],
  },
  {
    name: "Email Address",
    type: "input",
    forms: [
      {
        store: "email",
        label: "",
      },
    ],
  },
  {
    name: "Whatsapp Number",
    type: "phoneInput",
    forms: [
      {
        store: "number",
        label: "",
      },
    ],
  },
  {
    name: "Upload Resume",
    type: "upload",
    forms: [
      {
        store: "fileUpload",
        label: "",
      },
    ],
  },
  {
    name: "How confidential do you want your job search to be?",
    type: "radioButton",
    forms: [
      {
        label: "",
        store: "confidential",
        options: [
          {
            name: "You can feature/promote my profile with Weekday",
            value: 0,
          },
          {
            name: "Allow only my referrer to know for reference checks ℹ️",
            value: 1,
          },
          {
            name: "Completely confidential",
            value: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Would you be open to giving referrals to other job-seekers in your current company?",
    type: "radioButton",
    forms: [
      {
        label: "",
        store: "toRefer",
        options: [
          {
            name: "Yes",
            value: 0,
          },
          {
            name: "No",
            value: 1,
          },
        ],
      },
    ],
  },
];

export const nav = [
  {
    name: "My applied jobs",
    icon: <PermIdentityOutlined />,
  },
  {
    name: "Search jobs",
    icon: <SearchOutlined />,
  },
  {
    name: "Search salary",
    icon: <CurrencyRupee />,
  },
  {
    name: "Ask for referral",
    icon: <PersonAddAlt1Outlined />,
  },
];

export const recommend = [
  {
    name: "Recommend from shortlist",
    icon: <RecommendOutlined />,
  },
  {
    name: "Recommend to specific company",
    icon: <FactCheckOutlined />,
  },
  {
    name: "Refer this extension",
    icon: <ShareOutlined />,
  },
];
