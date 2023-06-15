import { Heading, Link, Text } from '@react-email/components'
import DefaultBodyWrapper, {
	emailHeadingClassName,
	emailTextClassName,
} from './DefaultBodyWrapper.js'

type WelcomeEmailProps = {
	otp?: string
	onboardingUrl?: string
}

// Used when we are constructing the email to send to the user.
export const WelcomeEmail = ({ otp, onboardingUrl }: WelcomeEmailProps) => {
	return (
		<DefaultBodyWrapper>
			<Heading className={emailHeadingClassName}>
				Welcome to Epic Notes!
			</Heading>
			<Text className={emailTextClassName}>
				Here's your verification code: <strong>{otp}</strong>
			</Text>
			<Text className={emailTextClassName}>
				Or click the link to get started:
			</Text>
			<Text className={emailTextClassName}>
				<Link href={onboardingUrl}>{onboardingUrl}</Link>
			</Text>
		</DefaultBodyWrapper>
	)
}

// Used by the react-email dev server
export default function WelcomeEmailWrapper() {
	return (
		<WelcomeEmail
			otp="123456"
			onboardingUrl="http://localhost:3000/signup/verify?email=example%40example.com&otp=123456"
		/>
	)
}
