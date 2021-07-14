var picture = [
"https://pm1.narvii.com/6499/9733a671ab54f5a1b87d0e3b06bca6d4aab954f1_hq.jpg",
"https://toppng.com/uploads/preview/mcm-every-day-my-animated-crush-boss-baby-brother-name-11562891858biamraf2zd.png",
"https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6",
"https://thumbs.dreamstime.com/b/happy-young-boy-teenager-character-happy-young-boy-teenager-character-vector-illustration-design-182238783.jpg"
];

var family_member_name=[
    "Dad",
    "Brother",
    "Sister",
    "Me!"
]

var i = 0;
function nextSlide(){
    document.getElementById("picture").src= picture[i];
    document.getElementById("family_member_name").innerHTML=family_member_name[i];
    
        i++;

    if(i == 4){
        i = 0;
    }

}