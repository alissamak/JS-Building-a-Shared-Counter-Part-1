async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const refreshButton = document.querySelector('#refresh-button');

    const response = await fetch('http://localhost:9001/counter');
    const result = await response.json();

    let countValue = result.value;
    console.log(countValue);

    function increment(){
        countValue++;
        countContainer.textContent = countValue;

        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        })
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;

        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        })
    }

    function refresh(){
        countValue = result.value;
        countContainer.textContent = countValue;
        
        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: countValue
            })
        })
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    refreshButton.addEventListener('click', refresh);

    countContainer.textContent = countValue;
}
main()