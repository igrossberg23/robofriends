export default function SearchBar({ search, onChange }) {
	return (
		<input
			className='bg-emerald-700 border-emerald-300 border-2 rounded-sm'
			type='search'
			name='searchbox'
			value={search}
			onChange={onChange}
		/>
	);
}
