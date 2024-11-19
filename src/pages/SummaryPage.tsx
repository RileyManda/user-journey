import ChecklistSection from "../components/ChecklistSection";
import GlobalContainer from "../components/GlobalContainer";
import SummaryPageTitle from "../components/SummaryTitle";

const SummaryPage = () => {
  const handleContinue = () => {
    console.log("Continue button clicked!");
  };
  return (
    <GlobalContainer>
      <SummaryPageTitle
        title="Your Application Checklist"
        subtitle="Complete the following to submit an application"
        buttonText="Continue Application"
        onButtonClick={handleContinue}
      />
      <ChecklistSection isSummary={true} />
    </GlobalContainer>
  );
};
export default SummaryPage;
