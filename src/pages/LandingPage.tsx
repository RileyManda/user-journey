/**
 * The LandingPage component represents the main landing page of the application.
 * It includes a title section, a checklist section, and a button to start the application process.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered landing page component.
 * 
 * @remarks
 * This component uses the `useNavigate` hook from `react-router` to navigate to the application page
 * with the selected checklist items as state.
 * 
 * @function
 * @name LandingPage
 * 
 * @hook
 * @name useState
 * @description Manages the state of selected checklist items.
 * 
 * @hook
 * @name useNavigate
 * @description Provides navigation functionality to other routes.
 * 
 * @typedef {Object} SelectedItems
 * @property {Record<string, string[]>} selectedItems - An object where keys are section names and values are arrays of selected items.
 * 
 * @callback handleStartApplication
 * @description Handles the click event for the "Start Application" button, logging the selected items and navigating to the application page.
 * 
 * @callback handleCheckboxChange
 * @description Handles the change event for checklist item checkboxes, updating the state of selected items.
 * 
 * @param {string} section - The section name of the checklist item.
 * @param {string} item - The checklist item to be added or removed.
 */
import ChecklistSection from "../components/ChecklistSection";
import LandingPageTitle from "../components/LandingPageTitle";
import GlobalContainer from "../components/GlobalContainer";
import { useNavigate } from "react-router";
import { useState } from "react";

const LandingPage = () => {
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>(
    {}
  );
  const navigate = useNavigate();

  const handleStartApplication = () => {
    console.log("Navigating with selected items:", selectedItems);
    navigate("/application", { state: { selectedItems } });
  };

  const handleCheckboxChange = (section: string, item: string) => {
    setSelectedItems((prev) => {
      const sectionItems = prev[section] || [];
      const updatedSectionItems = sectionItems.includes(item)
        ? sectionItems.filter((i) => i !== item) 
        : [...sectionItems, item]; 

      return {
        ...prev,
        [section]: updatedSectionItems,
      };
    });
  };

  return (
    <GlobalContainer>
      <LandingPageTitle
        title="Your Application Checklist"
        subtitle="Complete the following to submit an application"
        buttonText="Start Application"
        onButtonClick={handleStartApplication}
      />
      <ChecklistSection
        isSummary={false}
        selectedItems={selectedItems}
        onCheckboxChange={handleCheckboxChange}
      />
    </GlobalContainer>
  );
};

export default LandingPage;
