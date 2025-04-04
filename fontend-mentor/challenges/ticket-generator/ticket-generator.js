// get the drag and drop image
let uploadedImg = null;
let imgFile;

const showFile = (dragArea) => {
    const dragBoxAreaSelector = document.querySelector(dragArea);
    let imgFileType = imgFile.type;

    // adding valid images file format
    let validExtensions = ['image/png', 'image/jpeg', 'image/jpg'];

    // if user selected correct file is an image otherwise show error message
    if (validExtensions.includes(imgFileType)) {
        let fileReader = new FileReader(); // creating new FileReader obj
        fileReader.onload = () => {
            let fileURL = fileReader.result; // passing user file source in fileURL variable
            let imgTag = `<img src="${fileURL}" class="avatar">`; // creating img tag based on user selected file
            dragBoxAreaSelector.innerHTML = imgTag; // appending image to drag area container
            uploadedImg = document.querySelector('.drag-area .avatar');
        }

        fileReader.readAsDataURL(imgFile);
        dragBoxAreaSelector.classList.add('active');
    } else {
        alert('This is not an image file!');
        dragBoxAreaSelector.classList.remove('active');
    }
}

const dargAndDropZone = (dragArea, textMsg) => {
    const dragBoxAreaSelector = document.querySelector(dragArea);
    const dragTextMsgSelector = document.querySelector(textMsg);

    // if User drag file over the drag area
    dragBoxAreaSelector.addEventListener('dragover', e => {
        e.preventDefault();
        console.log('image is over the drag area');
        dragBoxAreaSelector.classList.add('active');
        dragBoxAreaSelector.classList.remove('no-image');
        dragTextMsgSelector.innerText = 'Release to Upload File';
    });

    // if User leave dragged file over the drag area
    dragBoxAreaSelector.addEventListener('dragleave', () => {
        console.log('image is outside the drag area');
        dragBoxAreaSelector.classList.remove('active');
        dragTextMsgSelector.innerText = 'Drag and drop or click to upload';
    });

    // if User drop file over the drag area
    dragBoxAreaSelector.addEventListener('drop', e => {
        e.preventDefault();
        console.log('file has been dropped inside the drag area');
        imgFile = e.dataTransfer.files[0];

        // if user select multiple images always select the first one
        // imgFile = e.dataTransfer.files[0];
        showFile('.drag-area');
    });
}

// Add event listener to the upload image button
const inputUploadImgEventHandler = (buttonSelector, inputSelector) => {
    const uploadBtn = document.querySelector(buttonSelector);
    const inputUpload = document.querySelector(inputSelector);

    if (!uploadBtn || !inputUpload) return;

    uploadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        inputUpload.click();
    });

    inputUpload.addEventListener('change', (e) => {
        imgFile = e.target.files[0];
        showFile('.drag-area'); // Pass only the file, not event
    });
};

// get the value of each input
const getInputValue = (name, email, username) => {
    const nameSelector = document.querySelector(name);
    const emailSelector = document.querySelector(email);
    const usernameSelector = document.querySelector(username);


    if (!nameSelector || !emailSelector || !usernameSelector) {
        console.log('one or more fields were not found');
        return null;
    }

    const avatarImageSelector = document.querySelector('.drag-area img');
    const avatarDragAreaSelector = document.querySelector('.drag-area');
    if (!avatarImageSelector) {
        console.log('please select an image');
        avatarDragAreaSelector.classList.add('no-image')
    }

    const nameValue = nameSelector.value;
    const emailValue = emailSelector.value;
    const usernameValue = usernameSelector.value;


    if (!nameValue || !emailValue || !usernameValue) {
        console.log('please fill up the form');
        return null;
    }

    return {
        userName: nameValue,
        userEmail: emailValue,
        userUsername: usernameValue
    }
}

// display error messages if input is invalid or empty

// get updated formatted date
const getFormattedDate = () => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const today  = new Date();
    const formattedDate = today.toLocaleDateString("en-US", options);

    return formattedDate;
}

// create ticket template with all the info above plus image
const createAndAppendTicketTemplate = (headerMessage, name, emailMessage, username, ticketNum, date, outerwrapper) => {
    const inputValues = getInputValue('.input-name', '.input-email', '.input-username');
    const ticketContainer = document.querySelector(outerwrapper);
    const avatarImageSelector = document.querySelector('.drag-area img');
    if (!inputValues || !ticketContainer || !avatarImageSelector) return;

    const { userName, userEmail, userUsername } = inputValues;
    const randTicketNum = Math.floor(1000 + Math.random() * 9000);

    // Ticket element selectors
    const ticketHeaderMessagesSelector = document.querySelector(headerMessage);
    const ticketNameSelector = document.querySelector(name);
    const ticketEmailMessagesSelector = document.querySelector(emailMessage);
    const ticketUsernameSelector = document.querySelector(username);
    const dateSelector = document.querySelector(date);
    const ticketNumberSelector = document.querySelector(ticketNum);
    const ticketAvatarSelector = document.querySelector('.ticket-avatar');
    //image element selector
    const clonedImage = uploadedImg.cloneNode(true);  
    
    // Info Output
    ticketHeaderMessagesSelector.innerHTML = `
        Congrats, <span class="sent-email">${userName}!</span></br>
        Your ticket is ready.
    `
    ticketNameSelector.innerHTML = userName;
    ticketEmailMessagesSelector.innerHTML = `
        We've emailed your ticket to <span class="sent-email">${userEmail}</span> and will send updates in
        the run up to the event.
    `
    ticketUsernameSelector.innerHTML = `@${userUsername}`;
    dateSelector.innerHTML = getFormattedDate();
    ticketNumberSelector.innerHTML = `#0${randTicketNum}`;
    if (uploadedImg) {
        ticketAvatarSelector.appendChild(clonedImage);

        if (ticketAvatarSelector.children[0].tagName === 'IMG' && uploadedImg) {
            ticketAvatarSelector.innerHTML = '';  // emptying html if user decides to replace image 
            ticketAvatarSelector.appendChild(clonedImage);
        }
    }

    return true;
}

const checkFormValidity = () => {
    const inputName = document.querySelector('form .input-name');
    const inputEmail = document.querySelector('form .input-email');
    const inputUsername = document.querySelector('form .input-username');

    if (!inputName || !inputEmail || !inputUsername) return;

    let isValid = true;

    // Check name validity
    const inputNameErr = document.querySelector('.name-error-message');
    if (inputName.value !== '' && inputName.value.length < 4) {
        inputNameErr.innerHTML = 'Please insert more than 4 Characters';
        isValid = false;
    } else {
        inputNameErr.innerHTML = '';
    }

    // Check username validity
    const inputUsernameErr = document.querySelector('.username-error-message');
    if (inputUsername.value !== '' && inputUsername.value.length < 4) {
        inputUsernameErr.innerHTML = 'Please insert more than 4 Characters';
        isValid = false;
    } else {
        inputUsernameErr.innerHTML = '';
    }

    // Check email validity
    const emailPattern = new RegExp(inputEmail.pattern); // Create RegExp from pattern attribute
    const inputEmailErr = document.querySelector('.email-error-message');
    if (!emailPattern.test(inputEmail.value)) {
        inputEmailErr.innerHTML = 'Please insert a valid email';
        inputEmail.classList.add('invalid');
        isValid = false;
    } else {
        inputEmail.classList.remove('invalid');
        inputEmailErr.innerHTML = '';
    }

    return isValid; // Return whether the form is valid or not
};

// on submit send append the ticket template and hide form above
// Add event handler of submit button to append template
const initTicket = () => {
    dargAndDropZone('.drag-area', '.drag-text');
    inputUploadImgEventHandler('.upload-btn', '.input-upload');

    const ticketForm = document.querySelector('.ticket-generator-wrapper');
    const ticketDetails = document.querySelector('.ticket-info');
    const submitBtn = document.querySelector('.submit-btn');

    if (!submitBtn || !ticketForm || !ticketDetails) return; // Ensure elements exist

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.querySelector('form');
        checkFormValidity();
        const isFormValid = checkFormValidity();

        if (isFormValid) {
            // Call the function and store success status         
            const success = createAndAppendTicketTemplate(
                '.header-title',
                '.ticket-name .name',
                '.header-text',
                '.git-link',
                '.ticket-number .number',
                '.current-date',
                '.ticket-info'
            );
    
            // Function runs no matter what, but only hides form if successful
            if (success) {  
                ticketForm.classList.add('d-none');
                ticketDetails.classList.remove('d-none');
            }
    
            console.log(success ? '✅ Ticket created successfully' : '❌ Ticket creation failed');
        }
    });
};


initTicket();
