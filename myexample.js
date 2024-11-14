var listItems = document.getElementsByTagName('li');

var heading = document.querySelector('h2');

var totalItems = listItems.length;

var newHeading = 'Buy groceries (' + totalItems + ' )';


heading.textContent = newHeading;


for (var i = 0; i < listItems.length; i++) {
    var item = listItems[i];
    var itemText = item.textContent.toLowerCase();

    if (itemText === 'kale' || itemText === 'fresh figs' || itemText === 'honey') {
       
        item.style.backgroundColor = 'green';
        
        item.className = 'highlighted';     
    }
}



//var listItems = document.getElementsByTagName('li');
//var heading = document.querySelector('7');                      
//var headingText = heading.firstChild.nodeValue();              
//var totalItems = listItems.length;                                 
//var newHeading =  headingText + 'Buy groceries' + totalItems + '7';