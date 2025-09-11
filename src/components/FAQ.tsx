"use client";

import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is the Portfolio Builder?",
    answer: "It's a free tool that helps you create and host your personal portfolio website easily without coding."
  },
  {
    question: "Do I need coding knowledge to use this?",
    answer: "No. The builder is designed for everyone, whether you are a developer or not."
  },
  {
    question: "Is it really free?",
    answer: "Yes, creating your portfolio with our tool is completely free. Premium features may be added later."
  },
  {
    question: "Can I customize my portfolio?",
    answer: "Yes, you can customize layouts, colors, and content to make your portfolio unique."
  }
];

export default function FAQ() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Frequently Asked Questions
      </Typography>
      <Box mt={4}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2, borderRadius: 2, boxShadow: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" fontWeight="600">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
