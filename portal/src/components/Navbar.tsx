import Image from "next/image"
import { MessageCircleQuestionMark, BotMessageSquare } from "lucide-react"

export default function NavBar() {
	return (
		<div className="py-3 z-[100] bg-background border-b border-neutral-700 w-full">
			<div className="flex items-center justify-between max-w-[1080px] mx-auto">
				<Image src="/images/Logo.png" alt="Logo" width={100} height={100}/>
				<div className="flex flex-row gap-6">
					<BotMessageSquare className="w-6 h-6 text-neutral-400"/>
					<MessageCircleQuestionMark className="w-6 h-6 text-neutral-400" />
				</div>
			</div>
		</div>
	)
}
