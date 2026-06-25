import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendInviteEmail({
  email,
  name,
  inviteLink,
}: {
  email: string;
  name: string;
  inviteLink: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: `"Sales CRM" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "You're invited to Sales CRM",
      html: `
        <h2>Hello ${name},</h2>

        <p>You have been invited to Sales CRM.</p>

        <p>
          Click the link below to create your password.
        </p>

        <a href="${inviteLink}">
          Create Password
        </a>

        <br/><br/>

        <small>This link can only be used once.</small>
      `,
    });

    console.log("✅ Email Sent:", info.messageId);

    return info;
  } catch (error) {
    console.error("❌ Email Error:", error);
    throw error;
  }
}