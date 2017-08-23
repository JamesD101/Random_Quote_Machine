var quotes = [
    {
        quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty.",
        author: "Winston Churchill"
    },
    
    {
        quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
        author: "Will Rogers "
    },
    
    {
        quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
        author: "James Odeyale"
    },
    
    {
        quote: "You can have everything you want in life if you just help enough people get what they want in life.",
        author: "Zig Ziglar"
    },
    
    {
        quote: "It takes courage to grow up and become who you really are",
        author: "E. E. Cummings"
    },
    
    {
        quote: "Great minds have great purposes, others have wishes. Little minds are tamed and subdued by misfortune; but great minds rise above them.",
        author: "Washington Irving"
    },
    
    {
        quote: "I don’t know the key to success, but the key to failure is trying to please everybody.",
        author: "Bill Cosby"
    },
    
    {
        quote: "The start is what stops most people",
        author: "Don Shula"
    },
    
    {
        quote: "Happiness is not something you postpone for the future; it is something you design for the present.",
        author: "Jim Rohn" 
    },
    
    {
        quote: "A difficult time can be more readily endured if we retain the conviction that our existence holds a purpose – a cause to pursue, a person to love, a goal to achieve.",
        author: "John Maxwell"
    },
    
    {
        quote: "I realized early on that success was tied to not giving up. Most people in this business gave up and went on to other things. If you simply didn’t give up, you would outlast the people who came in on the bus with you.",
        author: "Harrison Ford" 
    },
    
    {
        quote: "We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.",
        author: "Jesse Owens"
    },
    
    {
        quote: "The only limits to the possibilities in your life tomorrow are the buts you use today.",
        author: "Les Brown" 
    },
    
    {
        quote: "When you face your fear, most of the time you will discover that it was not really such a big threat after all. We all need some form of deeply rooted, powerful motivation — it empowers us to overcome obstacles so we can live our dreams",
        author: "Les Brown" 
    },
    
    {
        quote: "Change is difficult but often essential to survival",
        author: "Les Brown" 
    },
    
    {
        quote: "Your level of belief in yourself will inevitably manifest itself in whatever you do.",
        author: "Les Brown" 
    },
    
    {
        quote: "Believe that you possess a basic goodness, which is the foundation for the greatness you can ultimately achieve",
        author: "Les Brown" 
    },
    
    {
        quote: "I advise you to say your dream is possible and then overcome all inconveniences, ignore all the hassles and take a running leap through the hoop, even if it is in flames.",
        author: "Les Brown"
    },
    
    {
        quote: "A lot of people do not muster the courage to live their dreams because they are afraid to die.",
        author: "Les Brown"  
    },
    
    {
        quote: "One of the most essential things you need to do for yourself is to choose a goal that is important to you. Perfection does not exist — you can always do better and you can always grow.",
        author: "Les Brown"
    }
    
];

var displayQuote;
var current;
function updateQuote() {
    
    
    do{
        var y = Math.floor(Math.random() * quotes.length);    
    }while(current === y);
    
        displayQuote = quotes[y];
    
    current = y;
    
    $('.quotes').html(quotes[y].quote); 
    $('.author').html(quotes[y].author); 
}

function shareTweet(){
    var thisquote = quotes[current].quote;
    
    if(thisquote.length > 100 ){
        
        thisquote = thisquote.substr(0,100).match(/(^.+)\s/)[1] + "...";
        
    }
    thisquote = encodeURI('"' + thisquote + '"');
    window.open("https://twitter.com/intent/tweet?text=" + thisquote + "&hashtags=Motivation, JamesOdeyale");
    
}











