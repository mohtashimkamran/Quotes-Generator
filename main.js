var display = document.getElementById('quotesdisply')
var btn = document.getElementById('show')
var nam = document.getElementById('bq')

var quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"],
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"],
    ["Be yourself; everyone else is already taken.","Oscar Wilde"],
    ["To live is the rarest thing in the world. Most people exist, that is all.","Oscar Wilde"],
    ["True friends stab you in the front.","Oscar Wilde"],
    ["In the end, we will remember not the words of our enemies, but the silence of our friends.","Martin Luther King"],
    ["Injustice anywhere is a threat to justice everywhere.","Martin Luther King"],
    ["Success is not final, failure is not fatal: it is the courage to continue that counts.","Winston Churchill"],
    ["If you're going through hell, keep going.","Winston Churchill"],
    ["Peace begins with a smile.", "Mother Teresa"],
    ["Tomorrow is always fresh, with no mistakes in it." ,"L.M. Montgomery"],
    ["You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?","George Bernard Shaw"],
    ["Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.","Mark Twain"],
    ['Things work out best for those who make the best of how things work out','John Wooden']
    ['Success is walking from failure to failure with no loss of enthusiasm','Winston Churchill'],[]
    ['Try not to become a person of success, but rather try to become a person of value','Albert Einstein'],
    ['I have not failed. I have just found 10,000 ways that wont work','Thomas A. Edison'],
    ['No one can make you feel inferior without your consent','Eleanor Roosevelt'],
    ['If you are going through hell keep going','Winston Churchill'],
    ['What seems to us as bitter trials are often blessings in disguise','Oscar Wilde'],
    ['The distance between insanity and genius is measured only by success','Bruce Feirstein'],
    ['Things work out best for those who make the best of how things work out.','John Wooden'],
    ['All our dreams can come true if we have the courage to pursue them','Walt Disney'],
    ['Opportunities do not happen, you create them','Chris Grosser'],
    
  ];

function givequote(){
    n=Math.floor(Math.random() * 30) + 1
    display.innerHTML= quotes[n][0];
    nam.innerHTML=quotes[n][1];

}

btn.addEventListener('click',givequote)