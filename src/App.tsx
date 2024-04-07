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
  Add16Regular,
  Add20Regular,
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

import { TeachingBubble } from "@fabric-msft/fabric-react";

setTheme(fabricLightTheme);

const navItems = [
  {
    heading: "System Settings",
    items: [
      { text: "Tenant Settings", isActive: true, icon: AccessTime20Filled },
      { text: "Other Settings", icon: Add20Filled },
      { text: "More Settings", icon: AccessTime20Filled },
    ],
  },
  {
    heading: "Foobar",
    items: [
      { text: "Tenant Settings", isActive: true, icon: AccessTime20Filled },
      { text: "Other Settings", icon: Add20Filled },
      { text: "More Settings", icon: AccessTime20Filled },
    ],
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
          <SideNav navItems={navItems} />
        </div>
        <div className="content">
          <Tabs>
            <Tab role="tab" id="firstTab">
              FAQ
            </Tab>
            <Tab role="tab" id="secondTab">
              Order Food
            </Tab>
            <Tab role="tab" id="thirdTab">
              Order Status
            </Tab>

            <TabPanel id="firstTabPanel">
              <Card>
                <Accordion>
                  <AccordionItem block expand-icon-position="end" size="large">
                    <Badge color="important" iconPosition="start">
                      Important
                    </Badge>
                    <ToggleButton iconOnly size="large">
                      <span>
                        <Add20Filled />
                      </span>
                    </ToggleButton>
                    <span slot="heading">Form Fields</span>
                    <FormField
                      id="first-name-field"
                      label="First Name"
                      isWarning={true}
                      isError={false}
                      warningText="This is a warning"
                      errorText="This is an error"
                    >
                      <TextInput placeholder="John" />
                    </FormField>

                    <FormField
                      isWarning={true}
                      isError={false}
                      warningText="This is a warning"
                      errorText="This is an error"
                    >
                      <Checkbox>This is a label</Checkbox>
                    </FormField>
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
                  </AccordionItem>
                  <AccordionItem block expand-icon-position="end" size="large">
                    <span slot="heading">Form Fields 2</span>
                    <RadioGroup className="food-options">
                      <Label id="label-1" slot="label">
                        Pick your food
                      </Label>
                      <Radio value="meatballs">Meteor Meatballs</Radio>
                      <Radio value="pizza">Pizza Quasars</Radio>
                      <Radio value="cupcakes">Cosmic Cupcakes</Radio>
                      <Radio value="risotto">Rocket Fuel Risotto</Radio>
                    </RadioGroup>
                  </AccordionItem>
                  <AccordionItem block expand-icon-position="end" size="large">
                    <span slot="heading">Form Fields 3</span>
                    <RadioGroup className="food-options">
                      <Label id="label-1" slot="label">
                        Pick your food
                      </Label>
                      <Radio value="meatballs">Meteor Meatballs</Radio>
                      <Radio value="pizza">Pizza Quasars</Radio>
                      <Radio value="cupcakes">Cosmic Cupcakes</Radio>
                      <Radio value="risotto">Rocket Fuel Risotto</Radio>
                    </RadioGroup>
                  </AccordionItem>
                </Accordion>
              </Card>
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
            <TabPanel id="secondTabPanel">foobarfoo</TabPanel>
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
