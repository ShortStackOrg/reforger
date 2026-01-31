"use client";

import Image from 'next/image';
import Link from 'next/link';
import { BotMessageSquare, MessageCircleQuestionMark, MoveLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function NavBar() {
	const pathname = usePathname();
	const showBackLink = pathname?.startsWith('/reforger/editor');

	return (
		<div className="sticky top-0 z-[100] border-b border-slate-200 bg-background/90 backdrop-blur">
			<div className="flex items-center justify-between px-6 py-3">
				<div className="flex items-center gap-4">
					<Link href="/reforger" className="flex items-center gap-3">
						<Image src="/images/Logo.png" alt="Logo" width={100} height={100} />
					</Link>
					{showBackLink ? (
						<Link
							href="/reforger"
							className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
						>
							<MoveLeft className="h-3 w-3" />
							Back to gallery
						</Link>
					) : null}
				</div>
				<div className="flex flex-row gap-6">
					<BotMessageSquare className="h-6 w-6 text-slate-400" />
					<MessageCircleQuestionMark className="h-6 w-6 text-slate-400" />
				</div>
			</div>
		</div>
	)
}
