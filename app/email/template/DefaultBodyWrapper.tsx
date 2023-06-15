import { Body, Html, Tailwind } from '@react-email/components'
import config from '../../../tailwind.config.ts'
import type { ReactNode } from 'react'

export const emailHeadingClassName =
	'text-3xl text-center p-2 bg-emerald-700 text-white font-bold rounded-lg'
export const emailTextClassName = 'text-base font-normal'

// This sets up a default body appearance/styles to use for all emails.
export default function DefaultBodyWrapper({
	children,
}: {
	children?: ReactNode
}) {
	return (
		<Html>
			<Tailwind config={config}>
				<Body className="bg-zinc-50 font-sans text-zinc-900">
					<div className="mx-auto w-11/12">{children}</div>
				</Body>
			</Tailwind>
		</Html>
	)
}
