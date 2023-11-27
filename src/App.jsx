import { useState } from 'react';
import Header from './components/Header';

function App() {
	const [quantity, setQuantity] = useState(10000);

	function handleChange(evt) {
		setQuantity(+evt.target.value);
	}

	return (
		<div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
			<Header />

			<input
				className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
				type='range'
				onChange={handleChange}
			/>

			<p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
				{quantity}
			</p>
		</div>
	);
}

export default App;
