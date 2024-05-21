    function generateLottoNumbers() {
        let numbers = [];
        while (numbers.length < 7) {
            let num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        numbers.sort((a, b) => a - b);
        return numbers;
    }

    function getColorClass(number) {
        if (number <= 10) return 'yellow';
        if (number <= 20) return 'blue';
        if (number <= 30) return 'red';
        return 'gray';
    }

    function checkWinning(inputNumbers, generatedNumbers) {
        let matchCount = inputNumbers.filter(num => generatedNumbers.includes(num)).length;
        return matchCount === 6 ? "1등 당첨" : "당첨되지 않았습니다";
    }

    document.getElementById('check-button').addEventListener('click', () => {
        let inputNumbers = document.getElementById('numbers').value.split(' ').map(Number);
        let generatedNumbers = generateLottoNumbers();
        let numbersContainer = document.getElementById('result-numbers');
        numbersContainer.innerHTML = '';

        generatedNumbers.forEach(num => {
            let colorClass = getColorClass(num);
            let div = document.createElement('div');
            div.className = `number ${colorClass}`;
            div.textContent = num;
            numbersContainer.appendChild(div);
        });

        let resultMessage = checkWinning(inputNumbers, generatedNumbers);
        document.getElementById('result-message').textContent = "결과";
        document.getElementById('prize-message').textContent = resultMessage;
        document.getElementById('total-prize').textContent = resultMessage === "1등 당첨" ? "총 1,834,853,800원" : "";
    });