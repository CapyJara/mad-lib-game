// eslint-disable-next-line
function writeStory() {

    console.log(writeStory);
    
    // repeat for all inputs
    var nameOneInput = document.getElementById('name1');
    var nameTwoInput = document.getElementById('name2');
    var nameThreeInput = document.getElementById('name3');
    
    var nounInput = document.getElementById('noun');
    
    var meanAdjectiveInput = document.getElementById('meanAdjective');
    
    var emotionInput = document.getElementById('emotion');
    
    var movementInput = document.getElementById('movement');
    
    var obscenityInput = document.getElementById('obscenity');
    
    var verbOneInput = document.getElementById('verb1');
    var verbTwoInput = document.getElementById('verb2');
    var verbThreeInput = document.getElementById('verb3');
    
    var name_one = nameOneInput.value;
    var name_two = nameTwoInput.value;
    var name_three = nameThreeInput.value;
    
    var noun = nounInput.value;
    
    var mean_adjective = meanAdjectiveInput.value;
    
    var emotion = emotionInput.value;
    
    var movement = movementInput.value;
    
    var obscenity = obscenityInput.value;
    
    var verb_one = verbOneInput.value;
    var verb_two = verbTwoInput.value;
    var verb_three = verbThreeInput.value;
    
    
    // var story = 'bla bla bla' + noun_one + 
    
    var madLib = document.getElementById('madLib');

    madLib.innerHTML = 'Ensign <strong>' + name_one + '</strong> walked in Ten Forward. They ordered a <strong>' + noun + '</strong> and began drinking it. Captain <strong>' + name_two + '</strong> walked in shortly after and with judgment and disgust for what they had ordered, called <strong>' + name_one + '</strong> a <strong>' + mean_adjective + '</strong>. Feeling <strong>' + emotion + '</strong> , <strong>' + name_one + ' ' + movement + '</strong> and shouted <strong>' + obscenity + '</strong> at Captain <strong>' + name_two + '</strong>. This did not go over well. Lieutenant <strong>' + name_three + '</strong> stepped in with great concern. Emotions grew tense. After several minutes of <strong>' + verb_one + '</strong>, they began to <strong>' + verb_two + '</strong>, and all ordered another round of <strong>' + noun + '</strong> and <strong>' + verb_three + '</strong> the night away.';

}

//writeStory();