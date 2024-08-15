var gameWindow = openNewWindow('https://poki.com/en/g/tennis-masters');
if(isWindowOpen(gameWindow))
{
    console.log("Still Playing");
}
else{
    console.log("Game Over");
}
closeWindow(gameWindow);
if(isWindowOpen(gameWindow))
    {
        console.log("Still Playing"); 
    }
    else{
        console.log("Game Over");
    }