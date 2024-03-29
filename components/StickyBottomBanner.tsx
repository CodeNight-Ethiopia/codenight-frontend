import Logo from "@/assets/Logo";

const StickyBottomBanner = () => {
	return (
		<div className="fixed inset-x-0 bottom-0 z-50">
			<div className="bg-indigo-600">
				<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between flex-wrap">
						<div className="w-0 flex-1 flex items-center">
							<span className="flex p-2 rounded-lg bg-indigo-800">
								<div
									className="h-6 w-6 flex justify-center items-center text-white"
									aria-hidden="true"
								>
									<Logo />
								</div>
							</span>
							<p className="ml-3 font-medium text-white truncate">
								<span className="hidden md:inline">
									Join the community on telegram
								</span>
							</p>
						</div>
						<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
							<a
								href="https://t.me/codenight"
								className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
							>
								Join Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StickyBottomBanner;
