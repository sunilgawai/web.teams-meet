import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
const CommunityForm = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Create Community</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[625px] gap-8">
				<DialogHeader className="gap-6">
					<DialogTitle>Create your school community</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4">
					<div className="w-full flex items-center justify-between gap-4">
						<div className="sm:max-w-[125px] border">
							<img src="/vite.svg" alt="community log" />
						</div>
						<div className="w-full flex flex-col gap-4 items-start">
							<Label htmlFor="community-name" className="text-right">
								Community Name
							</Label>
							<Input
								id="community-name"
								defaultValue="Coding Life"
								className=" focus:border-x-0 focus:border-t-0 focus:border-b-blue-400 focus:outline-2"
							/>
						</div>
					</div>
					<div className="w-full flex flex-col items-start gap-4">
						<Label htmlFor="guideline" className="text-right">
							Community Guidelines
						</Label>
						<Textarea
							className="w-full"
							placeholder="write a short description about your community so people know whats it's about"
						/>
					</div>
					<div className="w-full flex flex-col items-start gap-4">
						<p className="text-sm font-light">Community guidelines</p>
						<p className="font-normal">
							Be kind and respectful to your fellow community members. Don't be
							rude or cruel. Participate as yourself and don't post anything
							that violates Community Standards.
						</p>
					</div>
					<div className="w-full flex flex-col items-start gap-4">
						<Label
							htmlFor="approval"
							className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Require approval to join
						</Label>
						<Switch
							checked={true}
							onCheckedChange={() => {}}
							id="approval"
							aria-readonly
						/>
						{/* <Checkbox id="approval" /> */}
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Create My Community</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default CommunityForm;
