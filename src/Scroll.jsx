export default function Scroll({ children }) {
	return (
		<div
			className='overflow-y-scroll p-2'
			style={{ height: '600px' }}>
			{children}
		</div>
	);
}
