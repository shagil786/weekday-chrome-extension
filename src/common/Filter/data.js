export const filters = [
  {
    label: "Role",
    type: "dropdown",
    isMulti: true,
    options: [
      { label: "Backend", category: "Engineering" },
      { label: "Frontend", category: "Engineering" },
      { label: "FullStack", category: "Engineering" },
      { label: "IOS", category: "Engineering" },
      { label: "Flutter", category: "Engineering" },
      { label: "React Native", category: "Engineering" },
      { label: "Android", category: "Engineering" },
      { label: "Tech Lead", category: "Engineering" },
      { label: "Dev-Ops", category: "Engineering" },
      { label: "Data Engineering", category: "Engineering" },
      { label: "Data Science", category: "Engineering" },
      { label: "Computer Vision", category: "Engineering" },
      { label: "NLP", category: "Engineering" },
      { label: "Deep learning", category: "Engineering" },
      { label: "Test / Qa", category: "Engineering" },
      { label: "Web3", category: "Engineering" },
      { label: "Sre", category: "Engineering" },
      { label: "Data Infrastructure", category: "Engineering" },
      { label: "Designer", category: "Design" },
      { label: "Design Manger", category: "Design" },
      { label: "Graphic Designer", category: "Design" },
      { label: "Product Designer", category: "Design" },
      { label: "Product Manager", category: "Product" },
      { label: "Operations Manager", category: "Operations" },
      { label: "Founder's Office / Cheif Of Staff", category: "Operations" },
      { label: "Sales Development Representative", category: "Sales" },
      { label: "Account Executive", category: "Sales" },
      { label: "Account Manager", category: "Sales" },
      { label: "Digital Marketing Manager", category: "Marketing" },
      { label: "Growth Hacker", category: "Marketing" },
      { label: "Marketing", category: "Marketing" },
      { label: "Product Marketing Manager", category: "Marketing" },
      { label: "HR Manager", category: "HR" },
      { label: "Recruiter", category: "HR" },
    ],
    css: {
      minWidth: "150px",
      minHeight: "38px",
    },
  },
  {
    label: "Numner Of Employees",
    type: "dropdown",
    isMulti: false,
    css: {
      width: "fit-content",
      minHeight: "38px",
    },
    options: [
      {
        label: "1-10",
        value: 0,
      },
      {
        label: "11-20",
        value: 1,
      },
      {
        label: "21-50",
        value: 2,
      },
      {
        label: "51-100",
        value: 3,
      },
      {
        label: "101-200",
        value: 4,
      },
      {
        label: "201-500",
        value: 5,
      },
      {
        label: "500++",
        value: 6,
      },
    ],
  },
  {
    label: "Experince",
    type: "dropdown",
    isMulti: false,
    css: {
      width: "fit-content",
      minHeight: "38px",
    },
    options: [
      {
        label: 1,
        value: 0,
      },
      {
        label: 2,
        value: 1,
      },
      {
        label: 3,
        value: 2,
      },
      {
        label: 4,
        value: 3,
      },
      {
        label: 5,
        value: 4,
      },
      {
        label: 6,
        value: 5,
      },
      {
        label: 7,
        value: 6,
      },
      {
        label: 8,
        value: 7,
      },
      {
        label: 9,
        value: 8,
      },
      {
        label: 10,
        value: 9,
      },
    ],
  },
  {
    label: "Remote",
    type: "dropdown",
    isMulti: false,
    css: {
      width: "fit-content",
      minHeight: "38px",
    },
    options: [
      {
        label: "Remote",
        value: 0,
      },
      {
        label: "Hybrid",
        value: 1,
      },
      {
        label: "In-office",
        value: 2,
      },
    ],
  },
  {
    label: "Tech Stack",
    type: "dropdown",
    isMulti: false,
    css: {
      width: "fit-content",
      minHeight: "38px",
    },
    options: [
      {
        label: "Python",
        value: 0,
      },
      {
        label: "Java",
        value: 1,
      },
      {
        label: "GoLang",
        value: 2,
      },
      {
        label: "Ruby/Rails",
        value: 3,
      },
      {
        label: "C++",
        value: 4,
      },
      {
        label: "Kotlin",
        value: 5,
      },
      {
        label: "Django",
        value: 6,
      },
      {
        label: "C#",
        value: 7,
      },
      {
        label: "GraphQL",
        value: 8,
      },
      {
        label: "Flask",
        value: 9,
      },
      {
        label: "Typescript",
        value: 10,
      },
      {
        label: "AWS",
        value: 11,
      },
      {
        label: "Javascript",
        value: 12,
      },
      {
        label: "Rust",
        value: 13,
      },
      {
        label: "Node Js",
        value: 14,
      },
      {
        label: "React",
        value: 15,
      },
    ],
  },
  {
    label: "Min Base Pay",
    type: "dropdown",
    isMulti: false,
    css: {
      width: "fit-content",
      minHeight: "38px",
    },
    options: [
      {
        label: "0L",
        value: 0,
      },
      {
        label: "10L",
        value: 1,
      },
      {
        label: "20L",
        value: 2,
      },
      {
        label: "30L",
        value: 3,
      },
      {
        label: "40L",
        value: 4,
      },
      {
        label: "50L",
        value: 5,
      },
      {
        label: "60L",
        value: 6,
      },
      {
        label: "70L",
        value: 7,
      },
    ],
  },
  {
    label: "Search Company Name",
    css: {
      width: "fit-content",
      minHeight: "38px",
    },
    type: "input",
  },
];
