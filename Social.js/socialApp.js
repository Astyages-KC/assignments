var wolfAlice = {
    fullName: 'Ellie Rowsell',
    placeinBand: "Lead singer",
    gender: "female",
    otherBandmates: [
        { 
        name: "Theo",
        plays: "Bass",
        age: 24
        },
        {
        name: "Joel",
        plays: "Drums",
        age: 26
        },
        {
        name: "Joff",
        plays: ["Guitar", "Piano"],
        age: 27, 
        birthday: function () {
            this.age++;
        }
        
    }
    
]      
};
console.log(wolfAlice.otherBandmates);



