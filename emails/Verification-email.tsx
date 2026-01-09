import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  verificationUrl: string;
  userName: string;
  appName?: string;
}

export const VerificationEmail = ({
  verificationUrl,
  userName,
  appName = "CareerLynks",
}: VerificationEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white font-koala">
        <Preview>
            Verify your email to get started with {appName}
        </Preview>
        <Container className="mx-auto py-5 pb-12">
          {/* ADDING ANS IMAGE */}
          <Text className="text-[16px] leading-[26px]">Hi {userName},</Text>
          <Text className="text-[16px] leading-[26px]">
            Welcome to CareerLynks, the world’s largest professional network.
            Connect with professionals, share ideas, explore opportunities, and
            grow your career. Build meaningful connections and shape your
            professional journey—together.
          </Text>
          <Section className="text-center">
            <Button
              className="bg-[#5F51E8] rounded-[3px] text-white text-[16px] no-underline text-center block p-3"
              href={verificationUrl}
            >
              Verify your email
            </Button>
          </Section>
          
          <Hr className="border-[#cccccc] my-5" />
          <Text className="text-[#8898aa] text-[12px]">
            If you did not create an account using this email address, please
            ignore this email.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default VerificationEmail;
