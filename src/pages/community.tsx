import CommunityForm from "@/components/community-form";

const Community = () => {
	return (
		<div className="h-screen grid md:grid-cols-[380px_1fr] py-4 px-6">
			<div className="w-full h-full flex flex-col items-center justify-items-start gap-6">
				<h1 className="text-3xl font-bold font-sans">
					Build your own community
				</h1>
				<p className="text-base font-semibold">
					Plan community events, engage in discussions, and create a safe space
					to collaborate.
				</p>
				<CommunityForm />
			</div>
			<div className="grid">Grid 2</div>
		</div>
	);
};

export default Community;
