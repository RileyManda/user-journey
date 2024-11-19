import { useLocation, useNavigate } from "react-router";
import ChecklistSection from "../components/ChecklistSection";
import GlobalContainer from "../components/GlobalContainer";
import SummaryPageTitle from "../components/SummaryTitle";

const SummaryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get selected items from location state
  const selectedItems = location.state?.selectedItems || {};

  const handleContinue = () => {
    navigate("/application", { state: { selectedItems } });
  };


  return (
    <GlobalContainer>
      <SummaryPageTitle
        title="Your Application Checklist"
        subtitle="Review your selections before proceeding"
        buttonText="Continue Application"
        onButtonClick={handleContinue}
      />
      <ChecklistSection
        isSummary={true} // Summary mode enabled to diplsay summary details
        selectedItems={selectedItems} // Pass filtered selected items
        onCheckboxChange={() => {}} // Disable checkbox interaction
      />
    </GlobalContainer>
  );
};

export default SummaryPage;
