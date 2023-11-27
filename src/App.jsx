import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';

function App() {
	const [quantity, setQuantity] = useState(10000);

	const MIN = 0;
	const MAX = 20000;
	const STEP = 100;

	function handleChange(evt) {
		setQuantity(+evt.target.value);
	}

	function handleDecrement() {
		const value = quantity - STEP;

		if (value < MIN) {
			alert('Cantidad mínima alcanzada');
			return;
		}

		setQuantity(value);
	}

	function handleIncrement() {
		const value = quantity + STEP;

		if (value > MAX) {
			alert('Cantidad máxima alcanzada');
			return;
		}

		setQuantity(value);
	}

	return (
		<div className='my-5 max-w-lg mx-auto bg-white shadow p-10'>
			<Header />

			<div className='flex justify-between my-6'>
				<Button operator='-' fn={handleDecrement} />
				<Button operator='+' fn={handleIncrement} />
			</div>

			<input
				className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
				type='range'
				onChange={handleChange}
				min={MIN}
				max={MAX}
				step={STEP}
				value={quantity}
			/>

			<p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
				{quantity}
			</p>
		</div>
	);
}

export default App;
