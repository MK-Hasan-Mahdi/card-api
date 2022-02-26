const searchButton = () => {
    const input = document.getElementById('input-value');
    const errorMessage = document.getElementById('error-message');

    const inputValue = input.value;
    if (isNaN(inputValue)) {
        // alert('pls give number')
        errorMessage.innerText = 'Please Give Number';
    }
    console.log(inputValue);
}