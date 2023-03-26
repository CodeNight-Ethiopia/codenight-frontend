import { ReactElement } from "react";

interface IconButtonProps {
	children: ReactElement;
	onClick: () => void;
}

const IconButton = ({ children, onClick }: IconButtonProps) => {
	return (
		<button
			onClick={onClick}
			type='button'
			className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm p-2.5'
		>
			{children}
		</button>
	);
};

export default IconButton;
