/**
 * SummaryPage component displays a summary of the user's selected items
 * and allows them to proceed to the application page.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered SummaryPage component.

 *
 * @remarks
 * This component uses `useLocation` to retrieve the selected items from the
 * location state and `useNavigate` to navigate to the application page.
 *
 * @function
 * @name SummaryPage
 *
 * @description
 * The SummaryPage component renders a global container with a title and a checklist
 * section. The title includes a button that, when clicked, navigates the user to the
 * application page with the selected items passed in the state.
 *
 * @property {Function} handleContinue - Navigates to the application page with the selected items.
 * @property {Object} selectedItems - The items selected by the user, retrieved from the location state.
 */
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
