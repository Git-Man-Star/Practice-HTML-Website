var sper = document.getElementById('Super');
var i = 2;

function GoRight(){
    sper.className = 'element';
}
function GoLeft(){
    sper.className = 'Bla';
}

function ChangingMode(){
    i++;
    if (i%2==1) {
        document.documentElement.style.setProperty('--ThemeColor1', '#444444');
        document.documentElement.style.setProperty('--ThemeColor2', '#999999');
        document.documentElement.style.setProperty('--ComponentColor1', '#E8D917');
        document.documentElement.style.setProperty('--ComponentColor2', '#1726E8');
        document.getElementById('DarkModeChanger').id = 'LightModeChanger';
        document.getElementById('DarkModeButtonText').style.color = 'rgba(0,0,0,0)';
        document.getElementById('LightModeButtonText').style.color = 'rgba(0,0,0,1)';
    }
    if (i%2==0) {
        document.documentElement.style.setProperty('--ThemeColor1', '#1b1c20');   
        document.documentElement.style.setProperty('--ThemeColor2', '#ec352e');
        document.documentElement.style.setProperty('--ComponentColor1', '#4CF6D0');
        document.documentElement.style.setProperty('--ComponentColor2', '#A29724');
        document.getElementById('LightModeChanger').id = 'DarkModeChanger';
        document.getElementById('DarkModeButtonText').style.color = 'rgba(0,0,0,1)';
        document.getElementById('LightModeButtonText').style.color = 'rgba(0,0,0,0)';
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

var FirstString = 'linear-gradient(90deg, #000000, #ffffff';

var ColorArray = []

function Add(ColorToBeAdded){

    if (ColorToBeAdded != 'Clear') {
        var FirstString = 'linear-gradient(90deg, #000000, #ffffff';

        ColorArray.push(ColorToBeAdded);
        for (let i = 0; i < ColorArray.length; i++) {
            
            var element = ColorArray[i];
        
            var StringElement = String(element);
        
            FirstString =FirstString + ', ' + StringElement;
            document.getElementById('GradientOfGod').style.background = FirstString;
        }   
    }
    if (ColorToBeAdded == 'Clear') {
        
        var FirstString = 'linear-gradient(90deg, #000000, #ffffff';

        ColorArray = [];
        for (let i = 0; i < ColorArray.length; i++) {
            
            var element = ColorArray[i];
        
            var StringElement = String(element);
        
            FirstString =FirstString + ', ' + StringElement;
        }   
        document.getElementById('GradientOfGod').style.background = FirstString;
    }
}

function Just_Copy(){
document.execCommand("WhiteQuotes");
    alert("WhiteQuotes")
}
