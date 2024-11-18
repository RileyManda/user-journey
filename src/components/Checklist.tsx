import { Box, Typography, Checkbox } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChecklistSection = () => {
  const sections = [
    {
      title: "1. Credit Check",
      subtitle: "Check if you qualify",
      items: [],
    },
    {
      title: "2. KYC",
      subtitle: "Check if you qualify",
      items: [
        "Applicant Details",
        "Company Details",
        "Director Details",
        "Banking Details",
        "3-year Production History",
      ],
    },
    {
      title: "3. Farm Profile",
      subtitle: "Check if you qualify",
      items: [
        "Farm / Company Overview",
        "Farm Description",
        "Machinery and equipment",
        "3-year Production History",
        "Production Plan 2024",
        "Risks",
        "Irrigation",
        "Customers & Suppliers",
      ],
    },
    {
      title: "4. Financial Information",
      subtitle: "Check if you qualify",
      items: [
        "Historical Performance",
        "Cashflow - Revenue",
        "Cashflow - Production",
        "Cashflow - Operational",
        "Assets",
        "Liabilities",
        "CAPEX",
        "Funding Ask",
      ],
    },
    {
      title: "5. Uploads",
      subtitle: "Supporting Documents",
      items: [
        "COR 14.3",
        "2022 AFS",
        "2023 AFS",
        "2024 AFS",
        "6 months bank statements",
        "Directors ID's",
        "Applicant ID",
        "Water Rights",
      ],
    },
  ];

  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        height: "600px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "0",
        position: "relative",
      }}
    >
      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            borderLeft: index !== 0 ? "1px solid #E0E0E0" : "none",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Section Title and Subtitle */}
          <Box sx={{ marginBottom: 2 }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ color: "#123133", marginBottom: 1 }}
            >
              {section.title}
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ fontSize: "0.9rem", marginBottom: 2 }}
            >
              {section.subtitle}
            </Typography>
          </Box>

          {/* Checklist Items */}
          <Box sx={{ position: "relative", flexGrow: 1 }}>
            {section.items.map((item, itemIndex) => (
              <Box
                key={itemIndex}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  marginBottom: itemIndex < section.items.length - 1 ? 3 : 0, // this Adds margin only if not the last item
                }}
              >
                {/* Connecting Line */}
                {itemIndex < section.items.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: 14,
                      top: "80%",
                      bottom: "-90%",
                      width: "2px",
                      backgroundColor: "#E0E0E0",
                    }}
                  />
                )}

                {/* Checkbox */}
                <Checkbox
                  icon={
                    <RadioButtonUncheckedIcon
                      sx={{
                        width: 30,
                        height: 30,
                        color: "#4CAF50",
                      }}
                    />
                  }
                  checkedIcon={
                    <CheckCircleIcon
                      sx={{
                        width: 30,
                        height: 30,
                        color: "#4CAF50",
                      }}
                    />
                  }
                  sx={{
                    padding: 0,
                    marginRight: 2,
                  }}
                />

                {/* Item Text */}
                <Typography sx={{ color: "#123133" }}>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ChecklistSection;
