import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface FAQSingleCardProps {
	title: string;
	desc: string;
}

const FAQSingleCard = ({ title, desc }: FAQSingleCardProps) => {
	return (
		<div className="border-b border-gray-200 py-5 max-w-3xl flex flex-col w-full gap-2">
			<Disclosure>
				{({ open }) => (
					/* Use the `open` state to conditionally change the direction of an icon. */
					<>
						<Disclosure.Button className="w-full flex justify-between font-bold tracking-wide text-gray-700">
							{title}
							<ChevronRightIcon
								className={`w-6 h-6 text-gray-500 ${
									open && "rotate-90 transform"
								}`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="text-gray-600">
							{desc}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};

export default FAQSingleCard;
