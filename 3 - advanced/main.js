const confirmButton = document.querySelector('button');
const modal = document.querySelector('uc-modal');

modal.addEventListener('confirm', () => {
	console.log('Confirmed...');
});

modal.addEventListener('cancel', () => {
	console.log('Cancelled...');
});

confirmButton.addEventListener('click', () => {
	if (!modal.isOpen) {
		modal.open();
	}
});
