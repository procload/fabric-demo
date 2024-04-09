import React from "react";
import {
  Button,
  Checkbox,
  Label,
  Text,
  TextInput,
  Radio,
  RadioGroup,
  Switch,
  Slider,
} from "@fabric-msft/fluent-react";
import FormField from "../components/formField";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import type { DatePickerProps } from "@fluentui/react-datepicker-compat";

import couchPotatoImage from "../mountain.png";
import adventurerImage from "../mountain.png";
import socialImage from "../butterfly.png";
import loneWolfImage from "../dog.png";

import {
  Dropdown,
  makeStyles,
  CardHeader,
  Option,
  shorthands,
  Card,
  useId,
} from "@fluentui/react-components";

const Behaviors: React.FC = () => {
  const dropdownId = useId("dropdown-default");
  const options = [
    "Cat",
    "Caterpillar",
    "Corgi",
    "Chupacabra",
    "Dog",
    "Ferret",
    "Fish",
    "Fox",
    "Hamster",
    "Snake",
  ];

  return (
    <div>
      <Text>
        <h3>Behaviors</h3>
      </Text>
      <div className="pet-photo">
        <Label required weight="semibold">
          Pet photo
        </Label>
        <div className="upload-container">
          <div className="icon-container">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_61578)">
                <g clip-path="url(#clip1_2_61578)">
                  <circle
                    cx="32"
                    cy="32"
                    r="32"
                    fill="url(#paint0_linear_2_61578)"
                  />
                  <g filter="url(#filter0_ii_2_61578)">
                    <path
                      d="M23.04 22.72C23.04 17.7715 27.0515 13.76 32 13.76C36.9485 13.76 40.96 17.7715 40.96 22.72C40.96 27.6685 36.9485 31.68 32 31.68C27.0515 31.68 23.04 27.6685 23.04 22.72Z"
                      fill="url(#paint1_linear_2_61578)"
                    />
                    <path
                      d="M21.44 33.92C18.24 33.92 16.32 35.84 16.32 38.72C16.32 41.6 18.56 49.92 32 50.08C45.44 50.24 47.68 41.6 47.68 38.72C47.68 35.84 46.08 33.92 42.56 33.92H21.44Z"
                      fill="url(#paint2_linear_2_61578)"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_ii_2_61578"
                  x="16.32"
                  y="13.76"
                  width="31.36"
                  height="37.6022"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="0.96" />
                  <feGaussianBlur stdDeviation="1.12" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.0588235 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_2_61578"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1.28" />
                  <feGaussianBlur stdDeviation="3.04" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.0588235 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_2_61578"
                    result="effect2_innerShadow_2_61578"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2_61578"
                  x1="20.2371"
                  y1="2.07152"
                  x2="46.1036"
                  y2="64.0359"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E0E0E0" stop-opacity="0.2" />
                  <stop offset="1" stop-color="#6B6B6B" stop-opacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_61578"
                  x1="38.7441"
                  y1="13.76"
                  x2="24.7546"
                  y2="52.1987"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D1D1D1" />
                  <stop offset="1" stop-color="#B3B0AD" />
                  <stop offset="1" stop-color="#B3B3B3" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2_61578"
                  x1="38.7441"
                  y1="13.76"
                  x2="24.7546"
                  y2="52.1987"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D1D1D1" />
                  <stop offset="1" stop-color="#B3B0AD" />
                  <stop offset="1" stop-color="#B3B3B3" />
                </linearGradient>
                <clipPath id="clip0_2_61578">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
                <clipPath id="clip1_2_61578">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="upload-button">
            <Button appearance="secondary">Upload a Photo</Button>
            <Text size="200" block>
              <span>Make sure the photo is at least 100x100</span>
            </Text>
          </div>
        </div>
      </div>

      <FormField
        id="first-name-field"
        label="Name"
        required
        warningText="This is a warning"
        errorText="This is an error"
      >
        <TextInput placeholder="Enter a name" />
      </FormField>
      <FormField
        id="nickname-field"
        label="Nicknames"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <TextInput placeholder="Enter Nicknames" />
      </FormField>
      <FormField
        id="best-pet-field"
        label="Breed"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <Dropdown aria-labelledby={dropdownId} placeholder="Select an animal">
          {options.map((option) => (
            <Option key={option} disabled={option === "Ferret"}>
              {option}
            </Option>
          ))}
        </Dropdown>
      </FormField>
      <FormField
        id="best-pet-field"
        label="Breed"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <DatePicker placeholder="Select a date..." />
      </FormField>
      <FormField
        warningText="This is a warning"
        label="Primary Pet"
        errorText="This is an error"
      >
        <Checkbox>Make this my primary pet</Checkbox>
      </FormField>
    </div>
  );
};

const Training: React.FC = () => {
  const dropdownId = useId("dropdown-training");
  const options = [
    "Positive Reinforcement",
    "Negative Reinforcement",
    "No Training",
  ];
  const performanceDropdownId = useId("dropdown-performance");
  const performanceOptions = ["Comedic", "Quick"];
  return (
    <div>
      <Text size="400" weight="semibold">
        <h3>Training Preferences</h3>
      </Text>
      <FormField
        id="training-methodology"
        label="Training Methodology"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <Dropdown
          aria-labelledby={dropdownId}
          placeholder="Select a training strategy"
        >
          {options.map((option) => (
            <Option key={option} disabled={option === "Ferret"}>
              {option}
            </Option>
          ))}
        </Dropdown>
      </FormField>

      <FormField
        id="reward-type"
        label="Reward Type"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <RadioGroup orientation="vertical">
          <Radio value="treats">Treats</Radio>
          <Radio value="toy">Toy</Radio>
          <Radio value="verbal">Verbal</Radio>
        </RadioGroup>
      </FormField>
      <FormField
        id="quick-training"
        label="Quick Training"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <Switch>On</Switch>
      </FormField>
      <Text size="400" weight="semibold">
        <h3>Tricks</h3>
      </Text>
      <FormField
        id="trick-speed"
        label="Trick Speed"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <Slider max="100"></Slider>
      </FormField>

      <FormField
        id="eagerness-to-please"
        label="Eagerness to Please"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <Slider max="100"></Slider>
      </FormField>
      <FormField
        id="performance-energy"
        label="Performance Energy"
        warningText="This is a warning"
        errorText="This is an error"
      >
        <Dropdown
          aria-labelledby={performanceDropdownId}
          placeholder="Select a performance strategy"
        >
          {performanceOptions.map((option) => (
            <Option key={option} disabled={option === "Ferret"}>
              {option}
            </Option>
          ))}
        </Dropdown>
      </FormField>
    </div>
  );
};

const Pedigree: React.FC = () => {
  return (
    <div>
      <div className="empty-state">
        <div className="empty-state-illustration">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_18_2391)">
              <circle
                cx="100"
                cy="100"
                r="100"
                fill="url(#paint0_linear_18_2391)"
              />
              <mask
                id="mask0_18_2391"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="40"
                y="40"
                width="111"
                height="105"
              >
                <path
                  d="M48.9283 53.9191C42.5043 55.6404 38.692 62.2435 40.4133 68.6675L53.9191 119.072C55.6404 125.496 62.2435 129.308 68.6675 127.587L75 125.89V133C75 139.627 80.3726 145 87 145H139C145.627 145 151 139.627 151 133V81C151 74.3726 145.627 69 139 69H119.459L114.081 48.9283C112.36 42.5043 105.757 38.692 99.3325 40.4133L48.9283 53.9191Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_18_2391)">
                <g filter="url(#filter0_ii_18_2391)">
                  <rect
                    x="75"
                    y="69"
                    width="76"
                    height="76"
                    rx="12"
                    fill="url(#paint1_linear_18_2391)"
                  />
                </g>
                <g filter="url(#filter1_dd_18_2391)">
                  <path
                    d="M40.4133 68.6675C38.692 62.2435 42.5043 55.6404 48.9283 53.9191L99.3325 40.4133C105.757 38.692 112.36 42.5043 114.081 48.9283L127.587 99.3325C129.308 105.757 125.496 112.36 119.072 114.081L68.6675 127.587C62.2435 129.308 55.6404 125.496 53.9191 119.072L40.4133 68.6675Z"
                    fill="url(#paint2_linear_18_2391)"
                  />
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_ii_18_2391"
                x="75"
                y="69"
                width="76"
                height="79.208"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.20797" />
                <feGaussianBlur stdDeviation="3.20797" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.0588235 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_18_2391"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.20797" />
                <feGaussianBlur stdDeviation="9.62392" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.0588235 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_18_2391"
                  result="effect2_innerShadow_18_2391"
                />
              </filter>
              <filter
                id="filter1_dd_18_2391"
                x="26"
                y="29"
                width="116"
                height="116"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.0588235 0 0 0 0.14 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_18_2391"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0666667 0 0 0 0 0.0627451 0 0 0 0 0.0588235 0 0 0 0.14 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_18_2391"
                  result="effect2_dropShadow_18_2391"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_18_2391"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_18_2391"
                x1="63.241"
                y1="6.47349"
                x2="144.074"
                y2="200.112"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E0E0E0" stop-opacity="0.2" />
                <stop offset="1" stop-color="#6B6B6B" stop-opacity="0.2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_18_2391"
                x1="143.5"
                y1="67"
                x2="86.3353"
                y2="147.098"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D2D0CE" />
                <stop offset="0.804744" stop-color="#B3B0AD" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_18_2391"
                x1="117.5"
                y1="52"
                x2="54.0419"
                y2="125.889"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0508392" stop-color="#E1DFDD" />
                <stop offset="0.891905" stop-color="#C8C6C4" />
              </linearGradient>
              <clipPath id="clip0_18_2391">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <Text block size="400" weight="semibold">
          <h3>You haven't added any relatives yet</h3>
        </Text>
        <Text block size="200">
          <p>
            Add any known relatives or upload a pedigree.{" "}
            <a href="#">Learn more</a>
          </p>
        </Text>
        <Button>Add a relative</Button>
      </div>
    </div>
  );
};

const Personality: React.FC = () => {
  return (
    <div>
      <Text size="400" weight="semibold">
        <h3>Personality Type</h3>
      </Text>
      <Card className="personality-card">
        <CardHeader
          header={
            <div>
              <Text weight="semibold">
                <span>Couch Potato</span>
              </Text>
              <img src={couchPotatoImage} alt="Couch Potato" />
            </div>
          }
        />
        <Text size="200">
          <p>
            With a love for lounging and snoozing, this dog is a professional at
            relaxation. They're content to spend their days on the couch.
          </p>
        </Text>
      </Card>
      <Card className="personality-card">
        <CardHeader
          header={
            <div>
              <Text weight="semibold">
                <span>Adventurer</span>
              </Text>
              <img src={adventurerImage} alt="Adventurer" />
            </div>
          }
        />
        <Text size="200">
          <p>
            Born to explore, this dog is always up for an adventure. They're
            happiest when hiking trails to exploring new places.
          </p>
        </Text>
      </Card>
      <Card className="personality-card">
        <CardHeader
          header={
            <div>
              <Text weight="semibold">
                <span>Social Butterfly</span>
              </Text>
              <img src={socialImage} alt="Social Butterfly" />
            </div>
          }
        />
        <Text size="200">
          <p>
            This pup is the life of every gathering. Their wagging tail and
            friendly demeanor make them the ultimate social butterfly.
          </p>
        </Text>
      </Card>
      <Card className="personality-card">
        <CardHeader
          header={
            <div>
              <Text weight="semibold">
                <span>Lone Wolf</span>
              </Text>
              <img src={loneWolfImage} alt="Lone Wolf" />
            </div>
          }
        />
        <Text size="200">
          <p>
            With a touch of aloofness and a streak of independence, they're not
            one to follow the crowd and prefer to do things their own way.
          </p>
        </Text>
      </Card>
    </div>
  );
};

export { Behaviors, Training, Pedigree, Personality };
