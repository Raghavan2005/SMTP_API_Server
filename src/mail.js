const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: "raghavan2005@zohomail.in",
    pass: "qMCtWh7cUTMA",
  },
});

async function sendmail(tomail, subject, body) {
  try {


    // Send email with defined transport object
    const info = await transporter.sendMail({
      from: '"Raghavan" <raghavan2005@zohomail.in>',
      to: tomail,
      subject: subject,
      html: body, // Use the HTML content with inline styles
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending mail:", error);
    throw error;
  }
}

module.exports = { sendmail };
