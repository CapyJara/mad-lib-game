// eslint-disable-next-line
function writeStory() {

    console.log(writeStory);
    
    // repeat for all inputs
    var nounOne = document.getElementById('noun1');
    
    // repeat for all inputs
    var noun_one = nounOne.value;
    
    
    var story = noun_one + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    
    var madLib = document.getElementById('madLib');
    madLib.textContent = story;
    

}

//writeStory();