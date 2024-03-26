import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex flex-col p-24 gap-4">
			<Button>DEFAULT</Button>
			<Button variant="primary">PRIMARY</Button>
			<Button variant="primaryOutline">PRIMARY OUTLINE</Button>
			<Button variant="secondary">SECONDARY</Button>
			<Button variant="secondaryOutline">SECONDARY OUTLINE</Button>
			<Button variant="danger">DANGER</Button>
			<Button variant="dangerOutline">DANGER OUTLINE</Button>
			<Button variant="super">SUPER</Button>
			<Button variant="superOutline">SUPER OUTLINE</Button>
			<Button variant="ghost">ghost</Button>
			<Button variant="sidebar">sidebar</Button>
			<Button variant="sidebarOutline">sidebar outline</Button>
		</div>
	);
}
