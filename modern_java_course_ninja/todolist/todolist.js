const start = e => {
    e.preventDefault();
    const theTitle = inputTitle.value.trim();
    const theDesc = inputDesc.value.trim();

    if (!theTitle || !theDesc) {
        alert('Try Again');
    } else {
        addElement(theTitle, theDesc);
        form.reset();
        updateCounter()
    }
}

const delElement = (e, detail) => {
    const delLi = e.target.parentNode.parentNode;
    listContainer.removeChild(delLi);
    updateCounter()
    removeElementFromLocalStorage(detail);
};

const completeElement = e => {
    const completeLi = e.target.parentNode.parentNode;
    completeLi.style.textDecoration = 'line-through';
};

const createElement = (inputTitle, inputDesc) => {
    const liContainer = document.createElement('li');
    liContainer.classList.add('list-item');

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-item');

    const title = document.createElement('h1');
    title.textContent = inputTitle;

    const desc = document.createElement('p');
    desc.textContent = inputDesc;

    const btnCont = document.createElement('div');
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.addEventListener('click', delElement);

    const okBtn = document.createElement('button');
    okBtn.textContent = 'ok';
    okBtn.addEventListener('click', completeElement);

    liContainer.append(textContainer);
    textContainer.append(title);
    textContainer.append(desc);
    liContainer.append(btnCont);
    btnCont.append(okBtn);
    btnCont.append(delBtn);
    return liContainer;
};

const updateCounter = () => {
    const counterList = listContainer.children.length;
    counter.innerHTML = counterList;
}

const addElement = (li, desc) => {
    const newLi = createElement(li, desc);
    listContainer.prepend(newLi);
    addElementToLocalStorage();    
};

const addElementToLocalStorage = () => {
    const inpTitle = inputTitle.value.trim();
    const inpDesc = inputDesc.value.trim();

    if (inpTitle && inpDesc) {
        let key = details.keybase;
        let storage = localStorage.getItem(key);
        let eachDetails = [];
        if (storage) {
            eachDetails = JSON.parse(storage);
        }

        eachDetails.push(inpTitle, inpDesc);
        eachDetails = Array.from(new Set(eachDetails));
        localStorage.setItem(key, JSON.stringify(eachDetails));
    }
}

const displayElementFromLocalStorage = () => {
    let key = details.keybase;
    let storage = localStorage.getItem(key);
    let locDetails = [];
    if (storage) {
        locDetails = JSON.parse(storage);
    }

    locDetails.push(details.keys);
    locDetails = Array.from(new Set(locDetails));
    newLi = createElement(locDetails);
    listContainer.append(newLi);
    updateCounter()
    console.log(typeof newLi);

}

const removeElementFromLocalStorage = detail => {
    let key = details.keybase;
    const savedStorage = localStorage.getItem(key);
    if (localStorage) {
        const filteredDetails = savedStorage.filter(key => key != detail);
        localStorage.setItem(key, JSON.stringify(filteredDetails));
    }
}

const counter = document.querySelector('.counter')
const form = document.querySelector('.input-container');
const inputTitle = document.querySelector('.todo-text');
const inputDesc = document.querySelector('.todo-desc');
const addBtn = document.querySelector('.add-btn');
const listContainer = document.querySelector('.list-container');

const details = {
    keybase: 'Li-Details',
    keys: [],
};

displayElementFromLocalStorage();

addBtn.addEventListener('click', start);
