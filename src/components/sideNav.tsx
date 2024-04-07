import { Accordion, AccordionItem } from "@fabric-msft/fluent-react";
import {
  ChevronDown16Regular,
  ChevronUp16Regular,
} from "@fluentui/react-icons";
import { ComponentType } from "react";

type IconProps = {}; // Define the props your icons accept. If they don't accept any props, you can leave this as an empty object.

type IconType = ComponentType<IconProps>;

interface SideNavProps {
  navItems: NavItem[];
}

interface NavItem {
  heading: string;
  items: Array<{ text: string; isActive?: boolean; icon: IconType }>; // Add icon property to items
}

const SideNav: React.FC<SideNavProps> = ({ navItems }) => (
  <div className="side-nav">
    <h3>Admin Center</h3>
    <Accordion>
      {navItems.map((navItem, index) => (
        <AccordionItem
          key={index}
          block
          expand-icon-position="end"
          size="large"
        >
          <span slot="collapsed-icon">
            <ChevronDown16Regular />
          </span>
          <span slot="expanded-icon">
            <ChevronUp16Regular />
          </span>
          <span slot="heading" className="top-nav">
            {navItem.heading}
          </span>
          {navItem.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`nav-item ${item.isActive ? "active" : ""}`}
            >
              <div className="icon-container">
                <item.icon /> {/* Render the icon */}
              </div>
              <span>
                <a href="">{item.text}</a>
              </span>
            </div>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default SideNav;
