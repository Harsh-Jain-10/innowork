const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for Vite local development
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// API Status
app.get('/api', (req, res) => {
  res.json({
    status: 'online',
    service: 'INNOWORQ API Server',
    uptime: process.uptime(),
    version: '2.0.0'
  });
});

// 1. Online Registration (Course Admissions) Validation
const onlineRegRules = [
  body('institutionName').trim().notEmpty().withMessage('Institution name is required.'),
  body('candidateName').trim().notEmpty().withMessage('Candidate name is required.'),
  body('gender').isIn(['Male', 'Female']).withMessage('Valid gender selection is required.'),
  body('dob').notEmpty().withMessage('Date of birth is required.'),
  body('mobile').trim().isLength({ min: 10 }).withMessage('Valid mobile number is required.'),
  body('email').isEmail().withMessage('Valid email address is required.'),
  body('address').trim().notEmpty().withMessage('Postal address is required.'),
  body('city').trim().notEmpty().withMessage('City is required.'),
  body('state').trim().notEmpty().withMessage('State is required.'),
  body('pinCode').trim().notEmpty().withMessage('PIN code is required.'),
  body('qualification').trim().notEmpty().withMessage('Highest qualification is required.'),
  body('yearOfCompletion').isNumeric().withMessage('Year of completion must be a valid number.'),
  body('course').trim().notEmpty().withMessage('Course selection is required.')
];

// POST Online Registration
app.post('/api/online-registration', onlineRegRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { candidateName, course, email } = req.body;
  const regId = `INR-REG-${Math.floor(100000 + Math.random() * 900000)}`;

  console.log(`[Admissions Desk] New Student Registered: ${regId} | Name: ${candidateName} | Course: ${course}`);

  res.status(200).json({
    success: true,
    regId,
    message: `Online registration for ${candidateName} was successfully recorded. Please proceed with payment verification.`,
    details: { candidateName, course, email }
  });
});

// 2. Partner Registration (Detailed) Validation
const partnerRegRules = [
  // Company Profile
  body('companyName').trim().notEmpty().withMessage('Company Name is required.'),
  body('legalName').trim().notEmpty().withMessage('Legal Name of the Company is required.'),
  body('tradingName').trim().notEmpty().withMessage('Trading Name is required.'),
  body('companyPhone').trim().notEmpty().withMessage('Company Phone is required.'),
  body('companyEmail').isEmail().withMessage('Valid Company Email is required.'),
  // Contact Person
  body('contactName').trim().notEmpty().withMessage('Contact Name is required.'),
  body('contactPhone').trim().notEmpty().withMessage('Contact Phone is required.'),
  body('contactEmail').isEmail().withMessage('Valid Contact Email is required.'),
  body('designation').trim().notEmpty().withMessage('Contact Designation is required.'),
  body('department').isIn(['IT', 'HR', 'Procurement', 'Billing', 'Finance']).withMessage('Invalid department selection.'),
  body('role').isIn(['Facilitator', 'Decision Maker']).withMessage('Invalid role selection.'),
  // Legal Address
  body('country').trim().notEmpty().withMessage('Legal Country is required.'),
  body('state').trim().notEmpty().withMessage('Legal State is required.'),
  body('city').trim().notEmpty().withMessage('Legal City is required.'),
  body('zipCode').trim().notEmpty().withMessage('Legal ZIP Code is required.'),
  body('address').trim().notEmpty().withMessage('Legal Address is required.'),
  // Physical Address (Optional if same, but validated if provided)
  body('physicalCountry').trim().notEmpty().withMessage('Physical Country is required.'),
  body('physicalState').trim().notEmpty().withMessage('Physical State is required.'),
  body('physicalCity').trim().notEmpty().withMessage('Physical City is required.'),
  body('physicalAddress').trim().notEmpty().withMessage('Physical Address is required.'),
  // Company Details
  body('industry').trim().notEmpty().withMessage('Industry is required.'),
  body('annualRevenue').trim().notEmpty().withMessage('Annual revenue detail is required.'),
  body('establishmentDate').trim().notEmpty().withMessage('Establishment date is required.'),
  body('totalEmployees').isIn(['0-15', '15-50', '50-100', '100-150', '150-200', '200+']).withMessage('Invalid employees range.'),
  body('legalStructure').isIn(['Pvt', 'Pvt Ltd', 'Proprietor', 'Partnership']).withMessage('Invalid legal structure selection.'),
  // SLA & Helpdesk
  body('slaList').isArray().withMessage('SLA selection is required.'),
  body('hasHelpDesk').isIn(['Yes', 'No']).withMessage('Helpdesk indicator required.'),
  body('is24x7').isIn(['Yes', 'No']).withMessage('Helpdesk 24x7 support indicator required.')
];

// POST Partner Onboarding
app.post('/api/partner', partnerRegRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { companyName, contactName, companyEmail } = req.body;
  const partnerCode = `PRT-${Math.floor(10000 + Math.random() * 90000)}`;

  console.log(`[Channel Ops] Partner Onboarding Registered: ${partnerCode} | Company: ${companyName}`);

  res.status(200).json({
    success: true,
    partnerCode,
    message: 'Onboarding application successfully recorded. Noida channel team will review legal files and verify details in 48 hours.',
    details: { companyName, contactName, companyEmail }
  });
});

// 3. Support Desk (Ticket creation) Validation
const supportDeskRules = [
  body('contactName').trim().notEmpty().withMessage('Contact Name is required.'),
  body('contactEmail').isEmail().withMessage('Valid Contact Email is required.'),
  body('contactNumber').trim().notEmpty().withMessage('Contact Number is required.'),
  body('companyName').trim().notEmpty().withMessage('Company/Project Name is required.'),
  body('systemModel').trim().notEmpty().withMessage('Make and Model of the system is required.'),
  body('serialNumber').trim().notEmpty().withMessage('System Serial Number is required.'),
  body('problemDesc').trim().isLength({ min: 10 }).withMessage('Problem description must be at least 10 characters.'),
  body('operatingSystem').trim().notEmpty().withMessage('System Operating System is required.'),
  body('usersAffected').isNumeric().withMessage('Number of affected users is required.'),
  body('businessImpact').isIn(['High', 'Medium', 'Low']).withMessage('Valid Business Impact indicator required.'),
  body('siteAddress').trim().notEmpty().withMessage('Full site physical postal address is required.'),
  body('locationCity').trim().notEmpty().withMessage('Location City is required.')
];

// POST Support Ticket
app.post('/api/support-desk', supportDeskRules, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { contactName, companyName, serialNumber, businessImpact, problemDesc } = req.body;
  const ticketId = `INQ-TKT-${Math.floor(100000 + Math.random() * 900000)}`;

  let priority = 'P3 - STANDARD';
  let responseSLA = '8 Hours SLA Commitment';

  if (businessImpact === 'High') {
    priority = 'P1 - CRITICAL';
    responseSLA = '2 Hours SLA Response Active';
  } else if (businessImpact === 'Medium') {
    priority = 'P2 - URGENT';
    responseSLA = '4 Hours SLA Response Active';
  }

  console.log(`[Support desk] Ticket Logged: ${ticketId} | Serial: ${serialNumber} | Impact: ${businessImpact}`);

  res.status(200).json({
    success: true,
    ticketId,
    priority,
    responseSLA,
    message: `Support ticket registered successfully under ID ${ticketId}. Assigned priority: ${priority}.`,
    details: { contactName, companyName, ticketId, responseSLA }
  });
});

// Catch-all Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error occurred on Service Desk API.' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[INNOWORQ backend] Express server listening on port ${PORT}`);
});
