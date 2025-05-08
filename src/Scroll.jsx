export default function Scroll({ children }) {
	return (
		<div
			className='overflow-y-scroll border-2 border-emerald-700'
			style={{ height: '800px' }}>
			{children}
		</div>
	);
}
