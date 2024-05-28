function MyDictionary()
{
    var animal = {
        species:"Dog",
        color:"beige",
        breed:"Labrador",
        age:5,
        sound:"Bark"};
        
        delete animal.color; // deleted on purpose to see what happens
        document.getElementById("dictionary").innerHTML = animal.breed +" "+ animal.color +" "+ animal.age; // output = Labrador undefined 5.  animal.color = undefined because it is deleted.
}

function TwoIdenticalKeys() 
{
    var names = {   // This function has two times the key Liesa on purpose, to see what happens.
        Liesa:"Women",
        James:"Man",
        Liesa:"Also Women",
        Bart:"man"};

    document.getElementById("Identical-keys").innerHTML = names.Liesa; // output = Also women. The last assigned key.
}