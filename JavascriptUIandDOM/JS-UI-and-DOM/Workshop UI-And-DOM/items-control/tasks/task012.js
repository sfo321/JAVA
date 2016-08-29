function solve() {
    return function (selector, isCaseSensitive) {
        var root = document.querySelector(selector),

        // Add div
            addingDiv = document.createElement('div'),
            addingInput = document.createElement('input'),
            addingLabel = document.createElement('label'),
            addingButton = document.createElement('button'),
            searchElementDiv = document.createElement('div'),
            searchLabel = document.createElement('label'),
            searchInput = document.createElement('input'),
            resultDiv = document.createElement('div'),
            resultUl = document.createElement('ul');

        root.className = 'items-control';
        addingDiv.className = 'add-controls';
        isCaseSensitive = !!isCaseSensitive;

        addingDiv.appendChild(addingLabel);
        addingLabel.innerHTML = 'Enter text:';
        addingDiv.appendChild(addingInput);

        addingDiv.appendChild(addingButton);
        addingButton.className = 'button';
        addingButton.innerHTML = 'Add';
        root.appendChild(addingDiv);

        addingButton.addEventListener('click', function () {
            var li = document.createElement('li'),
                label = document.createElement('label'),
                xButton = document.createElement('button');

            li.className = 'list-item';
            label.innerHTML = addingInput.value;

            xButton.className = 'button';
            xButton.innerHTML = 'X';

            li.appendChild(label);
            li.appendChild(xButton);
            resultUl.appendChild(li);
        });

        // Search div

        searchElementDiv.className = 'search-controls';
        searchElementDiv.appendChild(searchLabel);
        searchLabel.innerHTML = 'Search';
        searchElementDiv.appendChild(searchInput);

        root.appendChild(searchElementDiv);

        searchInput.addEventListener('input', function () {
            var child = document.getElementsByClassName('list-item'),
                len = child.length,
                i;

            for (i = 0; i < len; i += 1) {
                if(isCaseSensitive) {
                    if (child[i].firstElementChild.innerHTML.indexOf(searchInput.value) >= 0) {
                        child[i].style.display = '';
                    }
                    else {
                        child[i].style.display = 'none';
                    }
                }
                else {
                    if (child[i].firstElementChild.innerHTML.toLowerCase().indexOf(searchInput.value.toLowerCase()) >= 0) {
                        child[i].style.display = '';
                    }
                    else {
                        child[i].style.display = 'none';
                    }
                }
            }
        }, false);

        // Result div
        resultDiv.className = 'result-controls';
        resultDiv.appendChild(resultUl);
        resultUl.className = 'items-list';

        root.appendChild(resultDiv);

        resultUl.addEventListener('click', function (ev) {
            if (ev.target.className.indexOf('button') >= 0) {
                this.removeChild(ev.target.parentNode);
            }
        });
    };
}