import "./App.css";

import { useState } from "react";
import {
  setTheme,
  fabricLightTheme,
  fabricDarkTheme,
} from "@fabric-msft/theme";

import {
  Add20Filled,
  AccessTime20Filled,
  AnimalDog20Filled,
  OrganizationHorizontal20Regular,
  StethoscopeRegular,
  Home20Regular,
  TreeEvergreen20Regular,
  HatGraduation20Regular,
} from "@fluentui/react-icons";
import {
  AccordionItem,
  Accordion,
  Badge,
  Checkbox,
  Button,
  Text,
  TextInput,
  Tabs,
  Tab,
  TabPanel,
  Label,
  Slider,
  Radio,
  RadioGroup,
  Divider,
  Switch,
  ToggleButton,
  ProgressBar,
} from "@fabric-msft/fluent-react";

import FormField from "./components/formField";
import SideNav from "./components/sideNav";
import Card from "./components/Card";

import { Behaviors, Training, Pedigree, Personality } from "./pages/Pages";

import { TeachingBubble } from "@fabric-msft/fabric-react";

setTheme(fabricLightTheme);

const navItems = [
  {
    heading: "General",
    items: [
      { text: "Behaviors", isActive: true, icon: AnimalDog20Filled },
      { text: "Pedigree", icon: OrganizationHorizontal20Regular },
      { text: "Health", icon: StethoscopeRegular },
    ],
  },
  {
    heading: "Behaviors",
    items: [
      { text: "Household", icon: Home20Regular },
      { text: "Outdoors", icon: TreeEvergreen20Regular },
      { text: "Training", icon: HatGraduation20Regular },
    ],
  },
  {
    heading: "Personality",
    items: [
      { text: "Personality Type", icon: Home20Regular },
      { text: "Emotions", icon: TreeEvergreen20Regular },
      { text: "Habit", icon: HatGraduation20Regular },
    ],
  },
  {
    heading: "Appearance",
    items: [
      { text: "Behaviors", icon: AnimalDog20Filled },
      { text: "Pedigree", icon: OrganizationHorizontal20Regular },
      { text: "Health", icon: StethoscopeRegular },
    ],
  },
  {
    heading: "Vocalization",
    items: [
      { text: "Household", icon: Home20Regular },
      { text: "Outdoors", icon: TreeEvergreen20Regular },
      { text: "Training", icon: HatGraduation20Regular },
    ],
  },
];

function App() {
  let pageComponent;

  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("Behaviors");

  switch (currentPage) {
    case "Behaviors":
      pageComponent = <Behaviors />;
      break;
    case "Pedigree":
      pageComponent = <Pedigree />;
      break;
    case "Health":
      pageComponent = <Personality />;
      break;
    // Add more cases as needed
    default:
      pageComponent = <div>Select a page from the side navigation</div>;
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle the theme state

    if (!isDarkMode) {
      document.body.classList.add("dark-mode-active");
      setTheme(fabricDarkTheme); // Apply the dark theme
    } else {
      document.body.classList.remove("dark-mode-active");
      setTheme(fabricLightTheme); // Apply the light theme
    }
  };

  // Toggle function
  const toggleBubble = () => {
    setIsOpen(!isOpen); // Toggle the state
    console.log("Toggled");
  };

  return (
    <>
      <TeachingBubble open={isOpen} size="medium" target="secondTab">
        <Button
          slot="close"
          aria-label="close button"
          icon-only
          appearance="transparent"
          size="small"
          className="toolbar-button close-btn"
          onClick={toggleBubble}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
        <div slot="heading" role="heading">
          <Text size="500" block>
            <span>Frequently Asked Questions</span>
          </Text>
        </div>
        <div id="teaching-bubble-content">
          <div>
            <span>Order within the next 5 minutes to get free delivery!</span>
          </div>
        </div>
      </TeachingBubble>
      <div className="container">
        <div className="sidebar">
          <SideNav
            navItems={navItems.map((item, index) => ({
              ...item,
              id: `navItem-${index}`,
            }))}
            onNavItemSelect={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div className="content">
          <Tabs>
            <Tab role="tab" id="firstTab">
              Basic
            </Tab>
            <Tab role="tab" id="secondTab">
              Advanced
            </Tab>

            <TabPanel id="firstTabPanel">
              {currentPage === "Behaviors" && <Behaviors />}
              {currentPage === "Pedigree" && <Pedigree />}
              {currentPage === "Personality Type" && <Personality />}
              {currentPage === "Training" && <Training />}
            </TabPanel>
            <TabPanel id="secondTabPanel">
              <RadioGroup className="food-options">
                <Label id="label-1" slot="label">
                  Pick your food
                </Label>
                <Radio value="meatballs">Meteor Meatballs</Radio>
                <Radio value="pizza">Pizza Quasars</Radio>
                <Radio value="cupcakes">Cosmic Cupcakes</Radio>
                <Radio value="risotto">Rocket Fuel Risotto</Radio>
              </RadioGroup>
              <Label>How many would you like?</Label>
              <Slider max="100" step="10"></Slider>
              <Switch>Delivery</Switch>
              <Divider className="divider" />
              <Button appearance="primary">Order</Button>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <Switch
        className="dark-mode-switch"
        content="Dark Mode"
        labelPosition="after"
        name="dark-mode-option"
        checked={isDarkMode}
        onChange={toggleTheme} // Toggle theme on change
      >
        Dark mode
      </Switch>
    </>
  );
}

export default App;
