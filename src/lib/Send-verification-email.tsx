import { Resend } from "resend";
import VerificationEmail from "../../emails/Verification-email";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailProps = {
  to: string;
  verificationUrl: string;
  userName: string;
};

export const sendVerificationEmail = async ({
  to,
  verificationUrl,
  userName,
}: EmailProps) => {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to,
      subject: "Welcome to CareerLynk!",
      react: (
        <VerificationEmail verificationUrl={verificationUrl} userName={userName} />
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
