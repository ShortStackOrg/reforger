import Image from "next/image"

export default function NavBar() {
  return (
		<div className="flex items-center justify-between py-3 z-100 bg-background border-b border-neutral-700">
			<Image src="/images/Logo.png" alt="Logo" width={100} height={100} className="ml-4"/>
		</div>
  )
}
