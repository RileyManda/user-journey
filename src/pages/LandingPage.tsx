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
